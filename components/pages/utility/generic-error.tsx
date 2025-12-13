"use client";

import React from "react";
import { TriangleAlert, RefreshCw, Activity, Copy, AlertCircle } from "lucide-react";

export default function AppError() {
  return (
    <div
      className="bg-[#03040B] text-slate-300 min-h-screen flex flex-col relative overflow-hidden selection:bg-amber-500/30"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-orange-900/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 grid-bg -z-10 h-full w-full pointer-events-none" />
      <div className="absolute inset-0 noise -z-10 h-full w-full pointer-events-none mix-blend-overlay" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10 py-16">
        {/* Icon Visual */}
        <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl animate-pulse-amber"></div>
          <div className="relative w-20 h-20 rounded-2xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)] rotate-3">
            <TriangleAlert className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
          </div>
          <div className="absolute w-20 h-20 rounded-2xl border border-white/5 bg-white/[0.02] -rotate-6 -z-10"></div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-xl mx-auto space-y-4 mb-10">
          <h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Something went wrong</h1>
          <p className="text-base text-slate-400 leading-relaxed font-light">
            An unexpected error occurred in the application. Our team has been notified. Try reloading the page.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs sm:max-w-md mb-12">
          <button
            onClick={() => window.location.reload()}
            className="group relative w-full h-10 flex items-center justify-center gap-2 bg-white text-black rounded-md font-medium text-sm hover:bg-slate-200 transition-all duration-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
          >
            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span>Reload Application</span>
          </button>

          <a className="group w-full h-10 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white rounded-md font-medium text-sm hover:bg-white/10 transition-all duration-200">
            <Activity className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
            <span>Check System Status</span>
          </a>
        </div>

        {/* Stack Trace / Error Log Box */}
        <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="rounded-lg border border-white/10 bg-[#0A0B10] overflow-hidden shadow-2xl">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <span className="ml-2 text-xs font-mono text-slate-500">app-crash.log</span>
              </div>
              <button className="text-[10px] uppercase tracking-wider font-medium text-slate-500 hover:text-white transition-colors flex items-center gap-1.5">
                <Copy className="w-3 h-3" /> Copy Stack
              </button>
            </div>

            {/* Code Area */}
            <div className="p-4 overflow-x-auto code-scroll">
              <pre className="font-mono text-xs leading-6 text-slate-400">
                <span className="text-red-400">
                  Error: Minified React error #418; visit https://reactjs.org/docs/error-decoder.html
                </span>
                {"\n"}at Object.renderPage (<span className="text-amber-400">./src/studio/core/renderer.js:142:12</span>)
                {"\n"}at performWork (<span className="text-slate-500">./node_modules/react-dom/cjs/react-dom.prod.js:23:4</span>)
                {"\n"}at Layout.Header (<span className="text-slate-500">./src/components/layout/header.tsx:42:10</span>)
                {"\n"}<span className="text-slate-600 italic">// This error occurred during the render phase of the Studio layout</span>
                {"\n"}<span className="text-slate-600">&gt; </span>
                <span className="text-slate-300">Component stack trace available in console...</span>
              </pre>
            </div>

            {/* Footer Info */}
            <div className="bg-amber-500/5 border-t border-amber-500/10 px-4 py-2 flex items-center gap-2">
              <AlertCircle className="w-3 h-3 text-amber-500" />
              <span className="text-[10px] font-medium text-amber-500/80 tracking-wide uppercase">Critical Exception</span>
              <span className="text-[10px] text-slate-600 ml-auto font-mono">ID: err_8f7a22</span>
            </div>
          </div>
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

        .animate-pulse-amber {
          animation: pulse-amber 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse-amber {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .code-scroll::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .code-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .code-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .code-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
