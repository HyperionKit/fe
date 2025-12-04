'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface EcosystemCardProps {
  label: string;
  title: string;
  description: string;
  variant?: 'matte' | 'highlighted';
  showCursor?: boolean;
}

export const EcosystemCard: React.FC<EcosystemCardProps> = ({ 
  label, 
  title, 
  description, 
  variant = 'matte',
  showCursor = false
}) => {
  if (variant === 'highlighted') {
    return (
      <div className="group relative flex flex-col justify-between rounded-3xl border border-purple-500/30 bg-purple-900/10 p-8 shadow-[0_0_60px_-15px_rgba(124,58,237,0.3)] overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent opacity-100 pointer-events-none" />

        <div className="relative z-10 flex justify-between items-start mb-12">
          <span className="text-xs font-medium text-purple-200/80 uppercase tracking-wider">{label}</span>
          <ArrowUpRight className="w-6 h-6 text-purple-200" />
        </div>

        <div className="relative z-10 mt-auto space-y-3 pb-2">
          <h3 className="text-3xl font-semibold text-white tracking-tight drop-shadow-lg">
            {title}
          </h3>
          <p className="text-base text-purple-100/70 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Cursor Element */}
        {showCursor && (
          <div className="absolute top-1/2 right-8 translate-y-4 z-20 hidden md:flex items-center gap-2 animate-[float_3s_ease-in-out_infinite]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
              <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <div className="px-3 py-1.5 bg-slate-900/90 text-white text-xs font-medium rounded-full border border-white/10 shadow-xl backdrop-blur-md">
              Hey!
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
      <div className="flex justify-between items-start mb-12">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</span>
        <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors" />
      </div>
      
      <div className="mt-auto space-y-3">
        <h3 className="text-2xl font-medium text-slate-200 tracking-tight">{title}</h3>
        <p className="text-base text-slate-500 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};