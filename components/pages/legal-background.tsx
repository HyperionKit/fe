import React from 'react';

export const BackgroundEffects: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
  </div>
);