import React from 'react';
import { Sparkles, ShieldCheck, Globe, Activity, CheckCircle2 } from 'lucide-react';

export default function Web3Toolset() {
  return (
    <div className="min-h-screen text-white px-4 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">
            Everything you need to ship
          </h2>
          <p className="text-slate-400 text-lg font-light">
            Comprehensive toolset for the modern Web3 developer. From prompt to
            production in minutes.
          </p>
        </div>

        {/* Grid Layout - 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* AI Contract Generation - Spans 2 columns */}
          <div className="md:col-span-2 rounded-2xl p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">AI Contract Generation</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Describe your logic in plain English. Hyperkit's LLM engine
                generates gas-optimized Solidity code, writes tests, and prepares
                deployment scripts automatically.
              </p>
              
              {/* Visual representation */}
              <div className="mt-8 p-4 rounded-lg bg-[#05050A] border border-white/5 font-mono text-[10px] text-slate-400 shadow-inner">
                <span className="text-purple-400">&gt;&gt;</span> Generate an ERC20 token with staking...
                <div className="mt-2 text-slate-500 pl-4 border-l border-white/5">
                  <span className="text-blue-400">contract</span>{' '}
                  <span className="text-yellow-100">TokenStaking</span>{' '}
                  <span className="text-blue-400">is</span> ERC20, Ownable {'{ ... }'}
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Auditing - Single column */}
          <div className="rounded-2xl p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/20 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20 relative z-10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2 relative z-10">Real-time Auditing</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
              Automated security analysis runs on every commit. Detect reentrancy,
              overflow, and gas issues.
            </p>
            <div className="flex items-center gap-2 p-2 rounded bg-green-500/5 border border-green-500/10 relative z-10">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              <span className="text-[10px] font-medium text-green-400">Audit Passed (100%)</span>
            </div>
          </div>

          {/* Multi-chain Deploy - Single column */}
          <div className="rounded-2xl p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-orange-500/20 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20 relative z-10">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2 relative z-10">Multi-chain Deploy</h3>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10">
              One configuration, any chain. Deploy to 10+ EVM networks
              simultaneously with unified address management.
            </p>
          </div>

          {/* Live Monitoring - Spans 2 columns */}
          <div className="md:col-span-2 rounded-2xl p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-300 group flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></div>
            <div className="flex-1 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Live Monitoring</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Track gas usage, contract interactions, and errors in real-time. Set
                up alerts for suspicious activity instantly.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-24 flex items-end justify-between px-2 gap-1 opacity-80 relative z-10">
              <div className="w-1/6 h-[40%] bg-purple-500/20 rounded-t-sm"></div>
              <div className="w-1/6 h-[60%] bg-purple-500/30 rounded-t-sm"></div>
              <div className="w-1/6 h-[50%] bg-purple-500/20 rounded-t-sm"></div>
              <div className="w-1/6 h-[80%] bg-purple-500/50 rounded-t-sm"></div>
              <div className="w-1/6 h-[70%] bg-purple-500/40 rounded-t-sm"></div>
              <div className="w-1/6 h-[95%] bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm shadow-[0_0_15px_rgba(124,58,237,0.5)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}