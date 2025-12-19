'use client';

import React from 'react';
import {
  ChevronRight,
  Sparkles,
  Sun,
  MoreVertical,
  Link,
  FileCode,
  Search,
  MessageSquare,
  Check
} from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="max-w-none mx-auto px-4 flex flex-col items-center text-center">
      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
          Hyperkit v1.0
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-[clamp(5rem,12vw,16rem)] font-semibold tracking-[-0.03em] text-white mb-8 relative z-10 leading-[0.88]">
        Decentralize your <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white to-indigo-400 animate-pulse">
          vision.
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-lg text-slate-400 font-light max-w-2xl mb-10 leading-relaxed">
        Combine AI-powered contract generation, built-in security auditing, and modular infrastructure to launch production-ready dApps in clicks.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
        <button className="px-8 py-3 rounded-full bg-gradient-to-b from-brand-500 to-brand-600 text-white text-sm font-medium shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 transition-all">
          Get Started
        </button>

        <button className="px-8 py-3 rounded-full border border-white/10 bg-transparent text-slate-300 text-sm font-medium hover:bg-white/5 hover:text-white transition-all flex items-center gap-1 group">
          Explore SDK
          <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* App Visual / Terminal Wrapper */}
      <div className="w-full relative group">
        {/* Glow behind app */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/30 to-purple-600/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>

        {/* Main Window */}
        <div className="relative rounded-xl border border-white/10 bg-[#0A0910] shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* Top Glow Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50"></div>

          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 items-center">
                <div className="w-2.5 h-2.5 rounded-full border border-white/10"></div>
                <span className="text-xs font-medium text-slate-300">
                  Hyperkit Pro
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/5 text-slate-500 border border-white/5">
                  Beta
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-500">
              <span className="text-xs hover:text-white cursor-pointer transition-colors">
                Docs
              </span>
              <span className="text-xs hover:text-white cursor-pointer transition-colors">
                Feedback
              </span>
              <Sun className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
              <MoreVertical className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Inner Layout */}
          <div className="flex min-h-[400px]">
            {/* Sidebar */}
            <div className="hidden md:flex w-64 flex-col border-r border-white/5 bg-white/[0.01] p-4 gap-6">
              <div>
                <h3 className="text-xs font-semibold text-white mb-3 px-2">
                  Hyperkit
                </h3>

                <div className="space-y-1">
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-md bg-white/5 border border-white/5">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase">
                        Connected To
                      </span>
                      <span className="text-xs text-brand-300">
                        Hyperion Testnet
                      </span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 cursor-pointer group transition-colors">
                    <Link className="w-3 h-3 text-slate-500 group-hover:text-white" />
                    <span className="text-xs text-slate-400 group-hover:text-white truncate">
                      rpc.hyperion.io
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 px-2 py-1.5 text-slate-400 hover:text-white cursor-pointer transition-colors">
                  <FileCode className="w-3 h-3" />
                  <span className="text-xs font-medium">
                    Smart Contracts
                  </span>
                </div>

                <div className="flex items-center gap-2 px-2 py-1.5 text-slate-400 hover:text-white cursor-pointer transition-colors">
                  <Search className="w-3 h-3" />
                  <span className="text-xs font-medium">Search</span>
                </div>

                <div className="flex items-center gap-2 px-2 py-1.5 text-slate-400 hover:text-white cursor-pointer transition-colors">
                  <MessageSquare className="w-3 h-3" />
                  <span className="text-xs font-medium">AI Chat</span>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between p-4 pb-0">
                <h2 className="text-sm font-medium text-slate-200">
                  Deploying: ERC-721 Collection
                </h2>

                <button className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-slate-400 hover:text-white hover:border-white/20 transition-all">
                  Explain Process
                  <Sparkles className="w-2.5 h-2.5" />
                </button>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-xs leading-relaxed space-y-4">
                <p className="text-slate-500 mb-4 text-[10px] uppercase tracking-wide">
                  Terminal Output
                </p>

                <div className="group/line flex gap-3 opacity-80 hover:opacity-100 transition-opacity">
                  <span className="text-brand-400 select-none">➜</span>
                  <span className="text-slate-200">
                    npx hyperkit init my-dapp --chain hyperion
                  </span>
                </div>

                <div className="pl-5 space-y-2 border-l border-white/5 ml-1">
                  <div className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-slate-400">
                      Analyzing requirements with AI...
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-slate-400">
                      Generating Smart Contracts{' '}
                      <span className="text-slate-600">(ERC-721)</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    <span className="text-slate-400">
                      Auditing security{' '}
                      <span className="text-green-500/80 bg-green-500/10 px-1 rounded">
                        0 vulnerabilities found
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded bg-brand-500/5 border border-brand-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-brand-300/70 mb-1">
                        Contract Deployed Successfully
                      </span>
                      <span className="text-slate-200">
                        0x71C9...9A2F
                      </span>
                    </div>

                    <a
                      href="#"
                      className="text-[10px] text-brand-400 hover:text-brand-300 underline decoration-brand-500/30"
                    >
                      View on Explorer
                    </a>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <span className="text-brand-400 select-none">➜</span>
                  <span className="w-2 h-4 bg-slate-500 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
