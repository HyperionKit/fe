'use client';
import React from 'react';

interface SectionHeaderProps {
  title: React.ReactNode;
  description: string;
  showLine?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  description, 
  showLine = true 
}) => (
  <div className="text-center max-w-4xl mx-auto mb-20 relative">
    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-6 pb-2">
      {title}
    </h1>
    <p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
      {description}
    </p>
    {showLine && (
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-8 w-px h-24 bg-gradient-to-b from-purple-500/50 to-transparent" />
    )}
  </div>
);