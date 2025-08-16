import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, telegram, ensWallet, useCase } = body;

    // Validate required fields
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // TODO: Implement actual whitelist storage logic here
    // Examples:
    // 1. Database: await db.whitelist.create({ data: { email, telegram, ensWallet, useCase } })
    // 2. Email service: await sendWelcomeEmail(email)
    // 3. CRM integration: await crm.addContact({ email, tags: ['alith-whitelist'] })
    // 4. File storage: await appendToWhitelistFile({ email, telegram, ensWallet, useCase, timestamp: new Date() })

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Log the submission (remove in production or replace with proper logging)
    console.log('Whitelist submission:', { email, telegram, ensWallet, useCase, timestamp: new Date() });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Successfully added to whitelist',
      email,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error processing whitelist submission:', error);
    return NextResponse.json(
      { error: 'Failed to process whitelist submission' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // TODO: Implement whitelist status checking
    // This could be used to check if an email is already on the whitelist
    
    return NextResponse.json({
      message: 'Whitelist API endpoint',
      endpoints: {
        POST: 'Submit whitelist application',
        GET: 'Check whitelist status (not implemented)'
      }
    });
    
  } catch (error) {
    console.error('Error in whitelist GET endpoint:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
