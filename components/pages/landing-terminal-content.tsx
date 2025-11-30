import React from 'react';
import { Sparkles, Check } from 'lucide-react';

export const TerminalContent: React.FC = () => (
  <div className="flex-1 flex flex-col">
    {/* Breadcrumb/Title */}
    <div className="flex items-center justify-between p-4 pb-0">
      <h2 className="text-sm font-medium text-slate-200">Deploying: ERC-721 Collection</h2>
      <button className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-slate-400 hover:text-white hover:border-white/20 transition-all">
        Explain Process <Sparkles className="w-2.5 h-2.5" />
      </button>
    </div>

    {/* Terminal Content */}
    <div className="p-6 font-mono text-xs leading-relaxed space-y-4">
      <p className="text-slate-500 mb-4 text-[10px] uppercase tracking-wide">Terminal Output</p>
      
      <div className="group/line flex gap-3 opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-purple-400 select-none">➜</span>
        <div>
          <span className="text-slate-200">npx hyperkit init my-dapp --chain hyperion</span>
        </div>
      </div>

      <div className="pl-5 space-y-2 border-l border-white/5 ml-1">
        <div className="flex items-center gap-2">
          <Check className="w-3 h-3 text-green-500" />
          <span className="text-slate-400">Analyzing requirements with AI...</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-3 h-3 text-green-500" />
          <span className="text-slate-400">
            Generating Smart Contracts <span className="text-slate-600">(ERC-721)</span>
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

      <div className="mt-4 p-3 rounded bg-purple-500/5 border border-purple-500/20">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-purple-300/70 mb-1">
              Contract Deployed Successfully
            </span>
            <span className="text-slate-200">0x71C9...9A2F</span>
          </div>
          <a href="#" className="text-[10px] text-purple-400 hover:text-purple-300 underline decoration-purple-500/30">
            View on Explorer
          </a>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <span className="text-purple-400 select-none">➜</span>
        <span className="w-2 h-4 bg-slate-500 animate-pulse" />
      </div>
    </div>
  </div>
);