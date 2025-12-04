import React from 'react';

export const NetworkVisual: React.FC = () => (
  <div className="w-full aspect-square max-w-md mx-auto relative">
    <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />
    <div className="absolute inset-4 rounded-full border border-dashed border-indigo-500/20 animate-[spin_40s_linear_infinite_reverse]" />
    <div 
      className="absolute inset-0"
      style={{ background: 'radial-gradient(circle at center, rgba(99,102,241,0.1), transparent 70%)' }}
    />
    
    {/* Nodes */}
    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-indigo-400 rounded-sm shadow-[0_0_15px_currentColor] animate-pulse" />
    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-sm shadow-[0_0_15px_currentColor] animate-pulse" style={{ animationDelay: '75ms' }} />
    <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-sm shadow-[0_0_15px_currentColor] animate-pulse" style={{ animationDelay: '150ms' }} />
    
    {/* Connecting Lines */}
    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
      <path d="M100,100 Q200,50 300,150" fill="none" stroke="url(#lineGradient)" strokeWidth="1" />
      <path d="M150,300 Q250,200 350,250" fill="none" stroke="url(#lineGradient2)" strokeWidth="1" />
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>

    {/* Floating Badge */}
    <div className="absolute top-10 right-0 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 rounded-lg">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] text-slate-400 uppercase tracking-wide">Status</span>
      </div>
      <span className="block text-sm text-white font-medium">Interoperable</span>
    </div>
  </div>
);