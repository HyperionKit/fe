"use client";

import { Hexagon, BellOff, Newspaper, Zap } from "lucide-react";

export default function UnsubscribeConfirmation() {
  return (
    <div className="bg-[#050508] text-slate-300 min-h-screen flex items-center justify-center p-4 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Gradient/Glow Effects */}
      <div
        className="fixed top-0 left-0 right-0 h-[500px] pointer-events-none -z-10 w-full"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1) 0%, rgba(5, 5, 8, 0) 70%)",
        }}
      ></div>

      {/* Card */}
      <div className="relative max-w-[560px] w-full group">
        {/* Subtle Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-b from-slate-700/20 to-indigo-500/0 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-40"></div>

        <div className="relative bg-[#0A0A0F] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50 p-8">
          {/* Header / Logo */}
          <div className="flex items-center justify-center gap-2 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 mb-6">
            <Hexagon className="text-white w-8 h-8 stroke-[1.5]" />
            <span className="text-xl font-semibold tracking-tight text-white">
              Hyperkit
            </span>
          </div>

          {/* Main Content */}
          <div className="text-center">
            <div className="mb-6 relative inline-block">
              <div className="absolute inset-0 bg-slate-500 blur-xl opacity-10 rounded-full"></div>
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-full p-3 shadow-inner inline-flex justify-center items-center">
                <BellOff className="w-8 h-8 text-slate-400 stroke-[1.5]" />
              </div>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-white mb-4">
              Unsubscribe Confirmed
            </h1>
            <p className="text-base text-slate-400 leading-relaxed font-normal max-w-md mx-auto">
              You have been removed from the list. You will no longer receive updates or news from Hyperkit.
            </p>
          </div>

          {/* Preferences Status Card */}
          <div className="mt-8">
            <div className="glass-panel rounded-lg overflow-hidden">
              <div className="p-5">
                {/* Card Label */}
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                    Updated Preferences
                  </p>
                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5 border border-red-500/20 bg-red-500/10 px-2 py-0.5 rounded-full">
                    <div className="w-1 h-1 rounded-full bg-red-400"></div>
                    <span className="text-[10px] text-red-200 font-medium tracking-wide">
                      Inactive
                    </span>
                  </div>
                </div>

                {/* Detail Row 1: Marketing */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center border border-white/5">
                      <Newspaper className="w-4 h-4 text-slate-500 stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-sm text-slate-300 font-medium tracking-tight">
                        Marketing Emails
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Weekly digests and news
                      </span>
                    </div>
                  </div>
                  <div className="w-8 h-4 bg-white/10 rounded-full relative opacity-60">
                    <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-slate-500 rounded-full shadow-sm"></div>
                  </div>
                </div>

                {/* Detail Row 2: Product Updates */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center border border-white/5">
                      <Zap className="w-4 h-4 text-slate-500 stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-sm text-slate-300 font-medium tracking-tight">
                        Product Updates
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Feature releases and changelog
                      </span>
                    </div>
                  </div>
                  <div className="w-8 h-4 bg-white/10 rounded-full relative opacity-60">
                    <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-slate-500 rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white px-8 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-200 border border-white/10 text-center no-underline hover:border-white/20"
            >
              Resubscribe by mistake?
            </a>
            <p className="mt-6 text-xs text-slate-600 font-normal">
              Questions? Contact{" "}
              <a
                href="#"
                className="text-slate-500 hover:text-slate-300 underline decoration-slate-700 underline-offset-4 transition-colors"
              >
                support@hyperkit.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
