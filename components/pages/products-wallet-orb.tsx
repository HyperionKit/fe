import React from 'react';
import { Sparkles } from 'lucide-react';

export const WalletOrbVisual: React.FC = () => (
  <div className="mt-auto relative w-full h-48 flex items-center justify-center">
    <div className="absolute w-40 h-40 bg-indigo-600/20 blur-[50px] rounded-full animate-pulse"></div>
    <div className="absolute w-48 h-48 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
    <div className="absolute w-36 h-36 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
    
    <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-400 shadow-[0_0_30px_rgba(99,102,241,0.5)] animate-[float_6s_ease-in-out_infinite] flex items-center justify-center z-10">
      <div className="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
      <Sparkles className="w-6 h-6 text-white relative z-20" />
    </div>
  </div>
);