import React from 'react';
import { BackgroundEffects } from '@/components/pages/landing-background-effects';
import { HeroSection } from '@/components/pages/landing-hero-section';
import TrustedNetworks from '@/components/visual/Networks';
import CTASection  from '@/components/pages/CTA-Section';
import FeatureGrid from '@/components/features/FeatureGrid';
export default function App() {
  return (
    <div className="antialiased overflow-x-hidden selection:bg-purple-500/30 selection:text-white" style={{ backgroundColor: '#030014', color: '#E2E8F0' }}>
      <BackgroundEffects />
      
      <main className="relative z-10 pt-32 pb-20">
        <HeroSection />
        <TrustedNetworks/>
        <FeatureGrid />
        <CTASection />
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #030014; }
        ::-webkit-scrollbar-thumb { background: #2E2C45; border-radius: 3px; }
      `}</style>
    </div>
  );
}