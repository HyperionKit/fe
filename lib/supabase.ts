import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Newsletter functionality will not work.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Newsletter subscription interface
export interface NewsletterSubscription {
  email: string;
  subscribed_at?: string;
  status?: 'active' | 'unsubscribed';
  source?: string;
}

// Subscribe to newsletter
export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Invalid email address' };
    }

    // Check if email already exists
    const { data: existing, error: checkError } = await supabase
      .from('newsletter')
      .select('email, status')
      .eq('email', email.toLowerCase().trim())
      .maybeSingle();

    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 is "not found" which is fine
      console.error('Error checking existing subscription:', checkError);
      return { success: false, error: 'Failed to subscribe. Please try again.' };
    }

    if (existing) {
      // If already subscribed and active, return success
      if (existing.status === 'active') {
        return { success: true };
      }
      // If unsubscribed, reactivate
      const { error: updateError } = await supabase
        .from('newsletter')
        .update({ 
          status: 'active',
          subscribed_at: new Date().toISOString(),
          source: 'maintenance_page',
          unsubscribed_at: null
        })
        .eq('email', email.toLowerCase().trim());

      if (updateError) {
        console.error('Error reactivating subscription:', updateError);
        return { success: false, error: 'Failed to subscribe. Please try again.' };
      }

      return { success: true };
    }

    // Insert new subscription
    const { error: insertError } = await supabase
      .from('newsletter')
      .insert({
        email: email.toLowerCase().trim(),
        status: 'active',
        subscribed_at: new Date().toISOString(),
        source: 'maintenance_page'
      });

    if (insertError) {
      console.error('Error subscribing to newsletter:', insertError);
      return { success: false, error: 'Failed to subscribe. Please try again.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Unexpected error in subscribeToNewsletter:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again later.' };
  }
}

