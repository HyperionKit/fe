'use client';

import React from 'react';
import GradientBlinds from '../visual/gradient-blinds';

export default function BuildHeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Blinds Background */}
      <div className="absolute inset-0">
        <GradientBlinds
          dpr={0.8}
          paused={false}
          angle={45}
          noise={0.15}
          blindCount={24}
          blindMinWidth={50}
          mouseDampening={0.3}
          mirrorGradient={true}
          distortAmount={0.2}
          shineDirection="right"
          gradientColors={['#8B5CF6', '#7C3AED', '#6D28D9', '#5B21B6', '#4C1D95', '#000000']}
          spotlight={{
            radius: 0.5,
            softness: 0.7,
            opacity: 1,
            mouseDampening: 0.3
          }}
          mixBlendMode="lighten"
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-8 tracking-tight" style={{fontFamily: 'Be Vietnam Pro'}}>
          Hyperkit
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Inter'}}>
          SDK for building beautiful onchain applications. Ship in minutes, not weeks.
        </p>
      </div>

      {/* Connect Button - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-10">
        <button className="bg-black/80 text-white px-8 py-4 rounded-lg font-semibold hover:bg-black/90 transition-all duration-300 border border-white/20 backdrop-blur-sm">
          Connect now
        </button>
      </div>
    </div>
  );
}
