import React from 'react';
import { Bot, Zap, Database, Globe } from 'lucide-react';

export const AIAutomationVisual: React.FC = () => (
  <div className="mt-auto relative w-full h-48 flex items-center justify-center">
    <div className="absolute w-full h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900 border border-pink-500/30 rounded-xl flex items-center justify-center z-20 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
        <Bot className="w-6 h-6 text-pink-400" />
      </div>

      <div className="absolute top-10 left-10 w-8 h-8 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center z-10 animate-[bounce_3s_infinite]">
        <Zap className="w-3 h-3 text-yellow-400" />
      </div>
      <div className="absolute bottom-10 right-10 w-8 h-8 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center z-10 animate-[bounce_4s_infinite]">
        <Database className="w-3 h-3 text-blue-400" />
      </div>
      <div className="absolute top-10 right-12 w-8 h-8 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center z-10 animate-[bounce_3.5s_infinite]">
        <Globe className="w-3 h-3 text-green-400" />
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="url(#lineGrad)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="url(#lineGrad)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="url(#lineGrad)" strokeWidth="1" />
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'transparent' }} />
            <stop offset="50%" style={{ stopColor: '#ec4899' }} />
            <stop offset="100%" style={{ stopColor: 'transparent' }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);