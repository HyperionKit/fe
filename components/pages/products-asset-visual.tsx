import React from 'react';
import { Layers } from 'lucide-react';

export const ImportAssetsVisual: React.FC = () => (
  <div className="mt-auto relative w-full h-48 flex items-end justify-center">
    <div className="absolute bottom-0 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full"></div>
    
    <div className="relative w-32 h-32 group-hover:scale-105 transition-transform duration-700 ease-out">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-12 bg-gradient-to-t from-slate-900 to-slate-800 border border-white/10 rounded-lg backdrop-blur-md z-30 flex items-center justify-center">
        <div className="w-16 h-1 bg-white/5 rounded-full"></div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-12 bg-gradient-to-t from-slate-800 to-slate-700 border border-white/10 rounded-lg backdrop-blur-md z-20 shadow-lg transform translate-y-2 opacity-90 flex items-center justify-center">
        <div className="w-12 h-1 bg-white/5 rounded-full"></div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-20 h-16 bg-gradient-to-br from-purple-900/80 to-slate-800 border-t border-l border-r border-white/20 rounded-lg backdrop-blur-md z-10 shadow-2xl transform translate-y-4 opacity-80 flex items-center justify-center">
        <Layers className="w-6 h-6 text-purple-300 opacity-80" />
      </div>
    </div>
  </div>
);