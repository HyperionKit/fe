'use client';

import { useState } from 'react';
import { Mail, KeyRound, MailCheck, ExternalLink, ArrowLeft } from 'lucide-react';

export default function ResetPassword() {
  const [view, setView] = useState<'request' | 'sent'>('request');

  return (
    <main className="flex flex-col items-center justify-center p-6 relative z-10 w-full min-h-screen bg-[#03040B] text-slate-300 selection:bg-indigo-500/30 overflow-hidden">

      {/* Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 grid-bg -z-10 h-full w-full pointer-events-none" />
      <div className="absolute inset-0 noise -z-10 h-full w-full pointer-events-none mix-blend-overlay" />

      {/* Request Reset View */}
      {view === 'request' && (
        <div className="animate-enter w-full max-w-[400px] mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-[#0A0B10] p-8 glow-card overflow-hidden">
            
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
              <KeyRound className="w-6 h-6 text-indigo-400" />
            </div>

            <h1 className="text-xl font-medium text-white tracking-tight mb-2">Reset password</h1>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>

            <form
              onSubmit={(e) => { e.preventDefault(); setView('sent'); }}
              className="space-y-4"
            >
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-slate-300 ml-1">Email address</label>
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-[#0e0f16] border border-white/10 rounded-lg px-4 py-2.5 pl-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all placeholder:text-slate-600 group-hover:border-white/20"
                  />
                  <div className="absolute left-3 top-2.5 text-slate-600 group-focus-within:text-indigo-400 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-slate-200 font-medium text-sm px-4 py-2.5 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-white/5 flex items-center justify-center gap-2 mt-2"
              >
                Send reset instructions
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/5 text-center">
              <button
                onClick={() => setView('sent')}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <ArrowLeft className="w-3 h-3" /> Back to login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Email Sent View */}
      {view === 'sent' && (
        <div className="animate-enter w-full max-w-[400px] mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-[#0A0B10] p-8 text-center glow-card overflow-hidden">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative mx-auto w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-ping opacity-20 duration-1000" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-b from-indigo-500/20 to-indigo-500/5 border border-indigo-500/20 flex items-center justify-center">
                <MailCheck className="w-8 h-8 text-indigo-400" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#0A0B10] rounded-full p-1 border border-white/10">
                <div className="bg-emerald-500/20 rounded-full p-0.5">
                  <i className="w-3 h-3 text-emerald-500 inline-block"></i>
                </div>
              </div>
            </div>

            <h1 className="text-xl font-medium text-white tracking-tight mb-2">Check your email</h1>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              We have sent a password reset link to <br /><span className="text-slate-200 font-medium">user@example.com</span>
            </p>

            <div className="space-y-3">
              <button className="w-full bg-white text-black hover:bg-slate-200 font-medium text-sm px-4 py-2.5 rounded-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
                Open email app <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <button
                onClick={() => setView('request')}
                className="w-full bg-transparent hover:bg-white/5 text-slate-400 hover:text-white font-medium text-sm px-4 py-2.5 rounded-lg transition-colors"
              >
                Skip, I'll confirm later
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-[11px] text-slate-500">
                Did not receive the email? 
                <button
                  onClick={() => setView('request')}
                  className="text-indigo-400 hover:text-indigo-300 ml-1 transition-colors hover:underline"
                >
                  Click to resend
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .grid-bg {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }
        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-enter {
          animation: fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </main>
  );
}
