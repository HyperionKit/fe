# Supabase Newsletter Integration Setup

## 📋 Overview
This guide explains how to set up Supabase for the newsletter subscription functionality on the maintenance page.

## 🔧 Setup Instructions

### 1. Install Dependencies
The `@supabase/supabase-js` package is already added to `package.json`. Install it:

```bash
npm install
# or
pnpm install
```

### 2. Create Supabase Project
1. Go to [Supabase](https://app.supabase.com)
2. Create a new project
3. Wait for the project to be fully initialized

### 3. Get Your API Credentials
1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following:
   - **Project URL** (this is your `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon public** key (this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

### 4. Create Environment Variables
Create a `.env.local` file in the root of your project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eHh4eHh4eHh4eHh4eHh4eHgiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NTk2NzIwMCwiZXhwIjoxOTYxNTQzMjAwfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

⚠️ **Important:** Never commit `.env.local` to git. It's already in `.gitignore`.

### 5. Create the Newsletter Table
Run the SQL script in your Supabase SQL Editor:

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy and paste the entire contents of `supabase/newsletter-table.sql`
5. Click **Run** (or press `Ctrl+Enter` / `Cmd+Enter`)

The SQL script will:
- Create the `newsletter` table with all necessary columns
- Set up indexes for optimal performance
- Enable Row Level Security (RLS)
- Create policies for public subscriptions
- Add triggers for automatic timestamp updates

### 6. Verify Table Creation
1. Go to **Table Editor** in your Supabase dashboard
2. You should see the `newsletter` table
3. Verify the columns match the schema below

## 📊 Database Schema

### Table: `newsletter`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| `email` | VARCHAR(255) | NOT NULL, UNIQUE | Subscriber email address |
| `subscribed_at` | TIMESTAMPTZ | DEFAULT NOW() | When user subscribed |
| `status` | VARCHAR(20) | DEFAULT 'active', CHECK | 'active' or 'unsubscribed' |
| `source` | VARCHAR(100) | DEFAULT 'maintenance_page' | Source of subscription |
| `unsubscribed_at` | TIMESTAMPTZ | NULL | When user unsubscribed (if applicable) |
| `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Record creation timestamp |
| `updated_at` | TIMESTAMPTZ | DEFAULT NOW() | Last update timestamp |

### Indexes
- `idx_newsletter_email` - Fast email lookups
- `idx_newsletter_status` - Filter by subscription status
- `idx_newsletter_subscribed_at` - Sort by subscription date

### Row Level Security (RLS)
- ✅ Enabled for security
- ✅ Public can insert (subscribe)
- ✅ Public can read (view subscriptions)

## 🔍 Testing

### Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to `/maintenance`
3. Enter an email address
4. Click "Subscribe"
5. Check your Supabase dashboard → `newsletter` table to see the entry

### Verify in Supabase Dashboard
1. Go to **Table Editor** → `newsletter`
2. You should see your test subscription
3. Verify all fields are populated correctly

## 🐛 Troubleshooting

### Error: "Supabase environment variables are not set"
- **Solution:** Make sure `.env.local` exists and contains both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Restart your development server after adding environment variables

### Error: "relation 'newsletter' does not exist"
- **Solution:** Run the SQL script in Supabase SQL Editor to create the table

### Error: "new row violates row-level security policy"
- **Solution:** Check that the RLS policies were created correctly. Re-run the SQL script if needed.

### Email already exists but getting error
- The system automatically handles duplicate emails:
  - If email exists and is active → returns success
  - If email exists but unsubscribed → reactivates subscription

## 📝 API Endpoint

The newsletter subscription uses this API route:

**POST** `/api/newsletter/subscribe`

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter!"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Invalid email address"
}
```

## 🔐 Security Notes

- The `anon` key is safe to use in client-side code (it's public)
- RLS policies ensure proper access control
- Email addresses are stored in lowercase and trimmed
- All operations are validated on the server side

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)

