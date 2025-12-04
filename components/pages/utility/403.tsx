"use client";

import { ShieldX, LayoutGrid, LifeBuoy } from "lucide-react";

export default function Error403() {
  return (
    <div className="bg-[#03040B] text-slate-300 min-h-screen flex flex-col relative overflow-hidden selection:bg-red-500/30">

      {/* Ambient Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-rose-900/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 grid-bg -z-10 h-full w-full pointer-events-none" />
      <div className="absolute inset-0 noise -z-10 h-full w-full pointer-events-none mix-blend-overlay" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10 py-20">

        {/* 403 Visual */}
        <div className="relative flex items-center justify-center gap-2 md:gap-6 mb-10 select-none">
          <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
            4
          </span>

          {/* Middle Graphic */}
          <div className="relative w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-red-500/10 blur-2xl pulse-red" />

            <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_-10px_rgba(239,68,68,0.3)]">
              <ShieldX className="w-10 h-10 md:w-14 md:h-14 text-red-400" strokeWidth={1.5} />
            </div>
          </div>

          <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
            3
          </span>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-xl mx-auto space-y-4 mb-10">
          <h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
            Access Forbidden
          </h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">
            Your account role does not have permission to view this resource.
            Please contact your workspace administrator for access.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xs sm:max-w-md">

          <button className="group relative w-full h-11 flex items-center justify-center gap-2 bg-white text-black rounded-full font-medium text-sm hover:bg-slate-200 transition-all duration-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
            <LayoutGrid className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span>Back to Dashboard</span>
          </button>

          <button className="group w-full h-11 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/10 transition-all duration-200">
            <LifeBuoy className="w-4 h-4 text-slate-400 group-hover:text-white transition-all" />
            <span>Contact Support</span>
          </button>

        </div>

        {/* Technical Details */}
        <div className="mt-16 w-full max-w-2xl border-t border-white/5 pt-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-500 font-mono bg-white/[0.02] border border-white/5 p-4 rounded-lg">

            <div className="flex flex-col gap-1">
              <span className="uppercase tracking-widest text-[10px] text-slate-600">
                Error Code
              </span>
              <span className="text-red-400">HTTP_403_FORBIDDEN</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="uppercase tracking-widest text-[10px] text-slate-600">
                Request ID
              </span>
              <span className="select-all cursor-text hover:text-slate-300 transition-colors">
                req_perm_denied_8z21
              </span>
            </div>

            <div className="hidden md:block h-8 w-px bg-white/10"></div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>POLICY-ENFORCED</span>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
