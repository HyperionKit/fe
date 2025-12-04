"use client";

import React from "react";
import { LockKeyhole, LogIn, ArrowLeft } from "lucide-react";

export default function Unauthorized401() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10 py-20 bg-[#03040B] text-slate-300 min-h-screen overflow-hidden">

      {/* Ambient Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-orange-900/5 rounded-full blur-[100px] -z-10" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
        }}
      />

      {/* 401 Visual */}
      <div className="relative flex items-center justify-center gap-2 md:gap-6 mb-10 select-none">
        <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
          4
        </span>

        {/* Middle graphic */}
        <div className="relative w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
          {/* Glow pulse */}
          <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-2xl animate-pulse" />

          {/* Icon circle */}
          <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)]">
            <div className="relative">
              <LockKeyhole className="w-10 h-10 md:w-14 md:h-14 text-amber-400" strokeWidth={1.5} />
              {/* Dot indicator */}
              <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-[#03040B]" />
            </div>
          </div>
        </div>

        <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
          1
        </span>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-xl mx-auto space-y-4 mb-10">
        <h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
          Authorization Required
        </h1>
        <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
          Access to this resource is restricted. Your session may have expired or you lack the
          necessary permissions.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xs sm:max-w-md">

        {/* Sign In */}
        <button className="group relative w-full h-11 flex items-center justify-center gap-2 bg-white text-black rounded-full font-medium text-sm hover:bg-slate-200 transition-all duration-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
          <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          <span>Sign In</span>
        </button>

        {/* Back Home */}
        <a
          href="/"
          className="group w-full h-11 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:-translate-x-0.5 transition-all" />
          <span>Return Home</span>
        </a>

      </div>

      {/* Technical Details */}
      <div className="mt-16 w-full max-w-2xl border-t border-white/5 pt-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-500 font-mono bg-white/[0.02] border border-white/5 p-4 rounded-lg">
          
          <div className="flex flex-col gap-1">
            <span className="uppercase tracking-widest text-[10px] text-slate-600">Error Code</span>
            <span className="text-amber-400">HTTP_401_UNAUTHORIZED</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="uppercase tracking-widest text-[10px] text-slate-600">Session ID</span>
            <span className="select-all cursor-text hover:text-slate-300 transition-colors">
              sess_expired_9x29
            </span>
          </div>

          <div className="hidden md:block h-8 w-px bg-white/10"></div>

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
            <span>GATEKEEPER-V2</span>
          </div>
        </div>
      </div>
    </main>
  );
}
