import React from 'react';

export const BackgroundEffects: React.FC = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    {/* Grid Pattern */}
    <div 
      className="absolute inset-0 opacity-60"
      style={{
        backgroundSize: '50px 50px',
        backgroundImage:
          'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
      }}
    />
    
    {/* Beam Light */}
    <div 
      className="absolute top-0 right-0 w-[800px] h-[600px] transform rotate-[-15deg] translate-x-1/4 -translate-y-1/4 pointer-events-none"
      style={{
        background:
          'linear-gradient(135deg, rgba(167, 139, 250, 0.18) 0%, transparent 50%)',
        filter: 'blur(80px)' // Increased blur
      }}
    />
    
    {/* Ambient Light */}
    <div 
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-70"
      style={{
        background:
          'radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.18) 0%, transparent 55%), radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.22) 0%, transparent 45%)',
        filter: 'blur(120px)' // New blur for softness
      }}
    />
  </div>
);
