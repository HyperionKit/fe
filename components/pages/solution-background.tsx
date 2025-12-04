import React from 'react';

export const BackgroundEffects: React.FC = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[50vh] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vh] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen" />
    <div className="absolute inset-0 z-0" 
      style={{
        backgroundSize: '50px 50px',
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }}
    />
  </div>
);