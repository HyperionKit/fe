import React from 'react';
import { Link, FileCode, Search, MessageSquare } from 'lucide-react';

export const TerminalSidebar: React.FC = () => (
  <div className="hidden md:flex w-64 flex-col border-r border-white/5 bg-white/[0.01] p-4 gap-6">
    <div>
      <h3 className="text-xs font-semibold text-white mb-3 px-2">Hyperkit</h3>
      <div className="space-y-1">
        <div className="flex items-center justify-between px-2 py-1.5 rounded-md bg-white/5 border border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase">Connected To</span>
            <span className="text-xs text-purple-300">Hyperion Testnet</span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
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
        <span className="text-xs font-medium">Smart Contracts</span>
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
);