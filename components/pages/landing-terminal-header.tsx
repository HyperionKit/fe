import React from 'react';
import { Sun, MoreVertical } from 'lucide-react';

export const TerminalHeader: React.FC = () => (
  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
    <div className="flex items-center gap-3">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full border border-white/10" />
        <span className="text-xs font-medium text-slate-300">Hyperkit Pro</span>
        <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/5 text-slate-500 border border-white/5">
          Beta
        </span>
      </div>
    </div>
    <div className="flex items-center gap-3 text-slate-500">
      <span className="text-xs hover:text-white cursor-pointer transition-colors">Docs</span>
      <span className="text-xs hover:text-white cursor-pointer transition-colors">Feedback</span>
      <Sun className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
      <MoreVertical className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
    </div>
  </div>
);