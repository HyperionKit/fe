# HyperKit Landing Page

A modern, responsive landing page built with Next.js 15, React 19, and TypeScript. Features include interactive components, WebGL animations, and Supabase integration for newsletter subscriptions.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** 9.0+ or **pnpm** 8.0+ (comes with Node.js, or [install pnpm](https://pnpm.io/installation))
- **Git** for version control
- **Supabase account** (optional, for newsletter functionality) - [Sign up](https://supabase.com)

### Verify Installation

```bash
node --version   # Should be v18.0.0 or higher
npm --version    # Should be 9.0.0 or higher
# or
pnpm --version  # Should be 8.0.0 or higher
```

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/HyperionKit/fe.git
cd fe
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
# or
pnpm install
```

> **Note:** Use `--legacy-peer-deps` flag if you encounter peer dependency conflicts with React 19.

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **For Newsletter Functionality:** Get your Supabase credentials from [Supabase Dashboard](https://app.supabase.com) → Settings → API. See `supabase/SUPABASE_SETUP.md` for detailed instructions.

### 4. Run the Development Server

```bash
npm run dev
# or
pnpm dev
```

The development server will start with **Turbopack** for faster builds. Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Start Developing

Edit `app/page.tsx` or any component file to see changes reflected instantly with hot reload.

## Getting Started (Detailed)

### Project Structure

```
fe/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── libraries/         # Reusable component libraries
│   └── ui/                # UI components
├── lib/                   # Utility functions
│   └── supabase.ts        # Supabase client
├── public/                # Static assets
├── supabase/              # Supabase setup files
└── package.json           # Dependencies
```

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run changelog    # Update changelog
```

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) with App Router
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, Three.js, WebGL
- **Database:** Supabase (for newsletter subscriptions)
- **Build Tool:** Turbopack

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn Next.js features and API
- [React Documentation](https://react.dev) - Learn React fundamentals
- [Supabase Documentation](https://supabase.com/docs) - Supabase guides and API reference
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
