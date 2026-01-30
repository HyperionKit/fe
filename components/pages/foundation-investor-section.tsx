import React from 'react';
import { InvestorCard } from '@/components/pages/foundation-investor-card';

export const InvestorsSection: React.FC = () => (
  <section id="investors" className="py-24 bg-gradient-to-b from-[#020205] to-[#050510] border-t border-white/5 relative overflow-hidden">
    {/* Background grid fade */}
    <div 
      className="absolute bottom-0 w-full h-[500px] pointer-events-none"
      style={{
        background: 'linear-gradient(to top, rgba(99,102,241,0.05) 1px, transparent 1px)',
        backgroundSize: '100% 4px'
      }}
    />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">
          Backed by incredible investors
        </h2>
        <p className="text-slate-400 font-light">
          We're proud to build with some of the brightest minds in web3 and AI. Chances are, you're already using tools influenced by our partners and contributors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
        <InvestorCard 
          image="./Profile/Elena Sinelnikova.png"
          name="Elena Sinelnikova"
          role="Co-founder of Metis"
        />
        <InvestorCard 
          image="./Profile/Natalia Ameline.png"
          name="Natalia Ameline"
          role="Co-founder of Metis"
        />
      </div>

      <div className="text-center border-t border-white/5 pt-12">
        <p className="text-xs text-slate-500 uppercase tracking-widest mb-8">Trusted By</p>
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 rounded-full border border-white/5">
          <img 
            src="/logo/brand/metis/metis-blue-white-horizontal.png" 
            alt="Metis" 
            className="h-8 w-auto"
          />
        </div>
      </div>
    </div>
  </section>
);