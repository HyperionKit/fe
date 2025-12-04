import React from 'react';
import { HeroSection } from '@/components/pages/foundation-hero-section';
import { StorySection } from '@/components/pages/foundation-story-section';
import { VisionMissionSection } from '@/components/pages/foundation-vision-mission-section';
import { TeamSection } from '@/components/pages/foundation-team-section';
import { InvestorsSection } from '@/components/pages/foundation-investor-section';

export default function App() {
  return (
    <div className="text-slate-300 antialiased overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200" style={{ backgroundColor: '#020205' }}>
      <HeroSection />
      <StorySection />
      <VisionMissionSection />
      <TeamSection />
      <InvestorsSection />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
