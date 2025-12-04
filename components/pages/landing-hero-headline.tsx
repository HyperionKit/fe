import React from 'react';

export const HeroHeadline: React.FC = () => (
  <>
    <h1 
      className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]"
      style={{ textShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}
    >
      Ship Web3 Apps<br />
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
        10x Faster with AI
      </span>
    </h1>

    <p className="text-lg text-slate-400 font-light max-w-2xl mb-10 leading-relaxed">
      Combine AI-powered contract generation, built-in security auditing, and modular infrastructure to launch production-ready dApps in clicks.
    </p>
  </>
);