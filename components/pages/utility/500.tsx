"use client";

import { ServerOff, RotateCw, Activity } from "lucide-react";

export default function Error500Page() {
  return (
    <div className="bg-[#03040B] text-slate-300 min-h-screen flex flex-col relative overflow-hidden selection:bg-rose-500/30">
      {/* Ambient Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-rose-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-indigo-900/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute inset-0 grid-bg -z-10 h-full w-full pointer-events-none"></div>
      <div className="absolute inset-0 noise -z-10 h-full w-full pointer-events-none mix-blend-overlay"></div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10 py-20">
        {/* 500 Visual */}
        <div className="relative flex items-center justify-center gap-2 md:gap-6 mb-10 select-none">
          <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
            5
          </span>

          {/* Graphic Element for Middle Zero */}
          <div className="relative w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-rose-500/10 blur-2xl animate-[pulse-red_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>

            <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full border border-rose-500/20 bg-rose-500/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_-10px_rgba(225,29,72,0.3)]">
              <ServerOff className="w-10 h-10 md:w-14 md:h-14 text-rose-400" strokeWidth={1.5} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full border-2 border-[#03040B]"></div>
            </div>
          </div>

          <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
            0
          </span>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-xl mx-auto space-y-4 mb-10">
          <h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
            Internal Server Error
          </h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
            We apologize for the inconvenience. Our servers encountered an unexpected condition. The engineering team has been notified.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xs sm:max-w-md">
          <button
            onClick={() => window.location.reload()}
            className="group relative w-full h-11 flex items-center justify-center gap-2 bg-white text-black rounded-full font-medium text-sm hover:bg-slate-200 transition-all duration-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
          >
            <RotateCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span>Try Again</span>
          </button>

          <a
            href="#"
            className="group w-full h-11 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all duration-200"
          >
            <Activity className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            <span>Hyperkit Status</span>
          </a>
        </div>

        {/* Technical Details Box */}
        <div className="mt-16 w-full max-w-2xl border-t border-white/5 pt-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-500 font-mono bg-white/[0.02] border border-white/5 p-4 rounded-lg">
            <div className="flex flex-col gap-1">
              <span className="uppercase tracking-widest text-[10px] text-slate-600">Error Code</span>
              <span className="text-rose-400">HTTP_500_UNEXPECTED</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="uppercase tracking-widest text-[10px] text-slate-600">Trace ID</span>
              <span className="select-all cursor-text hover:text-slate-300 transition-colors">
                req_892j29f8_x02_k92
              </span>
            </div>
            <div className="hidden md:block h-8 w-px bg-white/10"></div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
              <span>US-EAST-1</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
