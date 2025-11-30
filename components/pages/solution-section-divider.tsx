import React from 'react';

interface SectionDividerProps {
  children: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ children }) => (
  <div className="w-full max-w-7xl mb-12 flex items-center gap-4 px-4">
    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1" />
    <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">{children}</span>
    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1" />
  </div>
);