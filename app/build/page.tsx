import React from 'react';
import { HeroSection } from '@/components/pages/build-hero';
import { DeploymentsSection } from '@/components/pages/build-deployment';
import { TemplatesSection } from '@/components/pages/build-template-section';

export default function Base44App() {
  return (
    <div className="bg-[#030205] text-slate-200 antialiased relative min-h-screen">
      <style>{`
        .bg-web3 {
          background-color: #030205;
          background-image: 
            radial-gradient(at 0% 0%, rgba(168, 85, 247, 0.12) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(124, 58, 237, 0.12) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(192, 132, 252, 0.05) 0px, transparent 50%);
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }

        .glass-card:hover {
          border-color: rgba(192, 132, 252, 0.3);
          box-shadow: 0 0 30px rgba(192, 132, 252, 0.1);
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-pattern opacity-60"></div>
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        <HeroSection />
        <DeploymentsSection />
        <TemplatesSection />
      </main>
    </div>
  );
}