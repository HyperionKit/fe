import React from 'react';

export const EclipseRing: React.FC = () => (
  <>
    {/* The Eclipse Ring */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] md:h-[800px] rounded-[100%] border-t border-indigo-500/30 shadow-[0_-10px_80px_rgba(99,102,241,0.3)] bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none opacity-80 mt-[-200px] md:mt-[-300px]" />
    
    {/* Center Glow Spot */}
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />
  </>
);