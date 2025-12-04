import React from 'react';
import { ChevronRight } from 'lucide-react';

export const CTAButtons: React.FC = () => (
  <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
    <button className="px-8 py-3 rounded-full bg-gradient-to-b from-purple-500 to-purple-600 text-white text-sm font-medium shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 transition-all">
      Get Started
    </button>
    <button className="px-8 py-3 rounded-full border border-white/10 bg-transparent text-slate-300 text-sm font-medium hover:bg-white/5 hover:text-white transition-all flex items-center gap-1 group">
      Explore SDK <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
    </button>
  </div>
);