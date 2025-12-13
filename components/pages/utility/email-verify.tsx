'use client';

import { useState } from 'react';
import { Check, AlertCircle, ArrowRight, HelpCircle, ArrowLeft } from 'lucide-react';

export default function EmailVerification() {
  const [view, setView] = useState<'success' | 'failure'>('success');

  return (
    <main className="flex-grow flex flex-col items-center justify-center p-6 relative z-10 w-full min-h-screen bg-[#03040B] text-slate-300 selection:bg-indigo-500/30 overflow-hidden">

      {/* Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 grid-bg -z-10 h-full w-full pointer-events-none" />
      <div className="absolute inset-0 noise -z-10 h-full w-full pointer-events-none mix-blend-overlay" />

      {/* Success State */}
      {view === 'success' && (
        <div className="animate-enter w-full max-w-md mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-[#0A0B10] p-8 md:p-10 text-center glow-success overflow-hidden group">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/20 rounded-full blur-[50px] pointer-events-none" />
            
            <div className="relative mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-20"></div>
              <Check className="w-8 h-8 text-emerald-400" />
            </div>

            <h1 className="text-2xl font-semibold text-white tracking-tight mb-2">Email verified</h1>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Your email <span className="text-slate-200 font-medium">user@example.com</span> has been successfully verified. You now have full access to the platform.
            </p>

            <div className="space-y-3">
              <button className="w-full bg-white text-black hover:bg-slate-200 font-medium text-sm px-4 py-2.5 rounded-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2">
                Continue to Dashboard
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-slate-600">
                Redirecting in <span className="font-mono text-slate-500">5s</span>...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Failure State */}
      {view === 'failure' && (
        <div className="animate-enter w-full max-w-md mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-[#0A0B10] p-8 md:p-10 text-center glow-error overflow-hidden">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-rose-500/10 rounded-full blur-[50px] pointer-events-none" />

            <div className="relative mx-auto w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6">
              <AlertCircle className="w-8 h-8 text-rose-500" />
            </div>

            <h1 className="text-2xl font-semibold text-white tracking-tight mb-2">Verification failed</h1>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed">
              This verification link is invalid or has expired. Links are valid for 24 hours. Please request a new verification email.
            </p>

            <div className="space-y-4">
              <button className="w-full bg-rose-600 hover:bg-rose-500 text-white font-medium text-sm px-4 py-2.5 rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(225,29,72,0.3)] active:scale-[0.98]">
                Resend Verification Email
              </button>

              <button className="w-full bg-transparent hover:bg-white/5 text-slate-400 hover:text-white border border-white/10 font-medium text-sm px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                <HelpCircle className="w-4 h-4" /> Contact Support
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <button
                onClick={() => setView('success')}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <ArrowLeft className="w-3 h-3" /> Back to Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Buttons for Demo */}
      <div className="flex gap-2 mt-6">
        <button
          onClick={() => setView('success')}
          className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${view === 'success' ? 'bg-white/10 text-white' : 'text-slate-400'}`}
        >
          Success
        </button>
        <button
          onClick={() => setView('failure')}
          className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${view === 'failure' ? 'bg-white/10 text-white' : 'text-slate-400'}`}
        >
          Failure
        </button>
      </div>

      {/* Global Styles */}
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
        .animate-enter { animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .glow-success { box-shadow: 0 0 40px -10px rgba(16, 185, 129, 0.2); }
        .glow-error { box-shadow: 0 0 40px -10px rgba(244, 63, 94, 0.2); }
      `}</style>
    </main>
  );
}
