import React from 'react';

export const Header: React.FC = () => (
  <div className="text-center max-w-3xl mx-auto mb-24">
    <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-white mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
      Integrate today. <br className="hidden md:block" /> Build smarter.
    </h1>
    <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
      A simple, powerful toolkit to help you create decentralized apps quickly and efficiently. No complex setup, just clean code and powerful features.
    </p>
    
    <div className="mt-10 flex justify-center gap-4">
      <button className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-slate-200 transition-colors">
        Start Building
      </button>
      <button className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
        Documentation
      </button>
    </div>
  </div>
);