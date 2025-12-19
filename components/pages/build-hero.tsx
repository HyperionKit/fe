import React from 'react';
import { Cpu, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-28 relative">
      <h1 className="text-6xl lg:text-8xl font-semibold tracking-tighter text-white mb-8 relative z-10 leading-tight">
        Decentralize your <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white to-indigo-400 animate-pulse">vision.</span>
      </h1>
      <p className="text-lg text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
        Build unstoppable dApps, DAOs, and protocols with AI-driven smart contracts. <br className="hidden md:block" />Start from a prompt or fork a verified template.
      </p>

      <div className="w-full max-w-3xl relative group">
        <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
        
        <div className="relative bg-[#050508] rounded-xl border border-white/10 p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl">
          <div className="flex-1 w-full relative">
            <textarea 
              rows={1} 
              className="w-full pl-5 pr-12 py-4 bg-transparent text-lg text-white placeholder:text-slate-600 focus:outline-none resize-none overflow-hidden font-light" 
              placeholder="Describe your dApp logic..."
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end px-2 pb-2 md:pb-0">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-purple-400 bg-purple-950/30 border border-purple-500/20 rounded-lg hover:bg-purple-900/40 transition-colors">
                <Cpu className="w-3.5 h-3.5" />
                Hyper Model
              </button>
            </div>
            <button className="h-10 w-10 bg-gradient-to-br from-white to-slate-200 hover:from-purple-400 hover:to-purple-200 text-black rounded-lg flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)]">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <span className="text-xs font-mono text-slate-600 py-2 mr-2 uppercase tracking-widest">Trending:</span>
        {['NFT Marketplace', 'DAO Governance', 'Staking Vault', 'Token Bridge'].map((tag) => (
          <button key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs font-medium text-slate-300 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-950/20 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};