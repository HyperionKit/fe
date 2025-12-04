"use client";

import { Hexagon, Mail, AtSign, Sparkles, Zap } from "lucide-react";

export default function SubscribePage() {
  return (
    <div className="bg-[#050508] text-slate-300 min-h-screen flex items-center justify-center p-4 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Gradient/Glow Effects */}
      <div
        className="fixed top-0 left-0 right-0 h-[600px] pointer-events-none -z-10 w-full"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(5, 5, 8, 0) 70%)",
        }}
      ></div>

      {/* Card */}
      <div className="relative max-w-[560px] w-full group">
        {/* Subtle Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-b from-indigo-500/20 to-purple-500/0 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-40"></div>

        <div className="relative bg-[#0A0A0F] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50 p-8">
          {/* Header / Logo */}
          <div className="flex items-center justify-center gap-2 hover:opacity-100 transition-all duration-500 mb-6">
            <Hexagon className="text-white w-8 h-8 stroke-[1.5]" />
            <span className="text-xl font-semibold tracking-tight text-white">
              Hyperkit
            </span>
          </div>

          {/* Main Content */}
          <div className="text-center">
            <div className="mb-6 relative inline-block">
              <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 rounded-full"></div>
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-full p-3 shadow-inner ring-1 ring-white/5 inline-flex justify-center items-center">
                <Mail className="w-8 h-8 text-indigo-400 stroke-[1.5]" />
              </div>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-white mb-4">
              Stay in the loop
            </h1>
            <p className="text-base text-slate-400 leading-relaxed font-normal max-w-md mx-auto">
              Join 10,000+ developers. Get product updates, engineering deep
              dives, and news delivered to your inbox.
            </p>
          </div>

          {/* Form Card */}
          <div className="mt-8">
            <div className="glass-panel rounded-lg overflow-hidden">
              <div className="p-5">
                {/* Email Input Section */}
                <div className="mb-6">
                  <label className="block text-left text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative group/input">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <AtSign className="h-4 w-4 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors" />
                    </div>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="block w-full pl-10 pr-3 py-2.5 bg-[#050508]/50 border border-white/10 rounded-md text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.3),0_0_20px_rgba(99,102,241,0.1)] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Preferences Label */}
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                    Customize Preferences
                  </p>
                </div>

                {/* Detail Row 1: Weekly Digest */}
                <div className="flex items-center justify-between mb-3 group/item cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center border border-white/5 group-hover/item:border-white/10 transition-colors">
                      <Sparkles className="w-4 h-4 text-indigo-400 stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-sm text-slate-200 font-medium tracking-tight">
                        Weekly Digest
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Best content of the week
                      </span>
                    </div>
                  </div>
                  {/* Visual Toggle (On) */}
                  <div className="w-9 h-5 bg-indigo-600 rounded-full relative transition-colors shadow-inner">
                    <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>

                {/* Detail Row 2: Product Updates */}
                <div className="flex items-center justify-between group/item cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center border border-white/5 group-hover/item:border-white/10 transition-colors">
                      <Zap className="w-4 h-4 text-indigo-400 stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-sm text-slate-200 font-medium tracking-tight">
                        Product Updates
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Changelog and new features
                      </span>
                    </div>
                  </div>
                  {/* Visual Toggle (On) */}
                  <div className="w-9 h-5 bg-indigo-600 rounded-full relative transition-colors shadow-inner">
                    <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block w-full bg-white hover:bg-slate-200 text-black px-8 py-3 rounded-full font-semibold text-sm tracking-tight transition-all duration-200 text-center no-underline shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              Confirm Subscription
            </a>
            <p className="mt-6 text-xs text-slate-600 font-normal">
              By subscribing, you agree to our{" "}
              <a
                href="#"
                className="text-slate-500 hover:text-slate-400 transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
