import React from 'react';

export const BackgroundGrid: React.FC = () => (
  <div 
    className="absolute inset-0 pointer-events-none"
    style={{
      background: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
      backgroundSize: '100px 100px',
      maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
    }}
  />
);