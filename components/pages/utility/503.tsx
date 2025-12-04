"use client";

import React from "react";
import { RefreshCw, Loader2, Activity, Twitter, ArrowRight } from "lucide-react";

export default function Maintenance() {
  return (
    <div
      className="bg-[#03040B] text-slate-300 min-h-screen flex flex-col relative overflow-hidden selection:bg-amber-500/30"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 grid-bg -z-10 h-full w-full pointer-events-none" />

      {/* MAIN CONTENT */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10 py-20">
        {/* 503 Visual */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8 mb-8 select-none">
          <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
            5
          </span>

          {/* Rotating Loader */}
          <div className="relative w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-orange-500/20 shadow-[0_0_50px_-12px_rgba(249,115,22,0.4)]"></div>
            <div className="absolute inset-2 md:inset-4 rounded-full border-2 border-dashed border-orange-500/30 animate-spin-slow"></div>
            <div className="absolute inset-8 md:inset-12 rounded-full bg-orange-500/10 backdrop-blur-md flex items-center justify-center border border-orange-500/20 animate-pulse-glow">
              <RefreshCw className="w-8 h-8 md:w-12 md:h-12 text-orange-400" strokeWidth={1.5} />
            </div>
          </div>

          <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
            3
          </span>
        </div>

        {/* Text */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
            System Under Maintenance
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            We are currently deploying improvements to our infrastructure. <br className="hidden md:block" />
            Services are temporarily unavailable. Expected resolution in <span className="text-slate-200">15 minutes</span>.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="w-full max-w-md mt-12 mb-8">
          <div className="flex justify-between text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">
            <span>Migration Progress</span>
            <span className="text-orange-400">72%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <div className="h-full w-[72%] bg-gradient-to-r from-orange-600 to-amber-400 rounded-full progress-bar-stripe shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Loader2 className="w-3 h-3 animate-spin" />
            <span>Updating database schemas...</span>
          </div>
        </div>

        {/* Key Links */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl px-4">
          {/* Status Page */}
          <a className="group relative flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-orange-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
              <Activity className="w-5 h-5 text-green-400" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-base font-medium text-white group-hover:text-orange-100">Status Page</h3>
              <p className="text-sm text-slate-500">View real-time availability.</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 ml-auto group-hover:text-white transition-colors" strokeWidth={1.5} />
          </a>

          {/* Live Updates */}
          <a className="group relative flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-orange-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <Twitter className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-base font-medium text-white group-hover:text-orange-100">Live Updates</h3>
              <p className="text-sm text-slate-500">Follow @ArgusStatus.</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 ml-auto group-hover:text-white transition-colors" strokeWidth={1.5} />
          </a>
        </div>

        <div className="mt-16 border rounded-full border-white/10 py-1.5 px-4 bg-white/5">
          <span className="text-xs text-slate-500 font-mono">MAINTENANCE_ID: #DEPLOY_2024_08_A</span>
        </div>
      </main>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        .grid-bg {
          background-size: 40px 40px;
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }

        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        .progress-bar-stripe {
          background-image: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.15) 75%,
            transparent 75%,
            transparent
          );
          background-size: 1rem 1rem;
          animation: progress-stripes 1s linear infinite;
        }

        @keyframes progress-stripes {
          from {
            background-position: 1rem 0;
          }
          to {
            background-position: 0 0;
          }
        }
      `}</style>
    </div>
  );
}
