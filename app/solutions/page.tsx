import React from 'react';
import { BackgroundEffects } from '@/components/pages/solution-background';
import { Divider } from '@/components/pages/solution-divider';
import { EcosystemSection } from '@/components/pages/solution-ecosystem-section';
import { RewardsSection } from '@/components/pages/solution-rewards-section';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030014] text-slate-300 overflow-x-hidden selection:bg-purple-500/30 selection:text-white pb-24">
      <BackgroundEffects />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        <EcosystemSection />
        <Divider />
        <RewardsSection />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}