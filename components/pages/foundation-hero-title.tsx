import React from 'react';

export const HeroTitle: React.FC = () => (
  <>
    <h1 
      className="text-white font-medium text-6xl md:text-8xl tracking-[0.2em] md:tracking-[0.5em] mb-6 uppercase"
      style={{ textShadow: '0 0 20px rgba(129, 140, 248, 0.5)' }}
    >
      HyperKit
    </h1>
    
    <p className="text-indigo-200/80 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed mb-10">
      Empowers developers with modular DeFi tools and sparking innovation and community-driven growth in the Hyperion ecosystem.
    </p>

    <div className="flex gap-4">
      <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
        <span className="relative z-10">Explore Ecosystem</span>
        <div className="absolute inset-0 bg-slate-200 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
      <a 
        href="https://docs.hyperionkit.xyz/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-white/10"
      >
        <span className="relative z-10">Read Docs</span>
      </a>
    </div>
  </>
);