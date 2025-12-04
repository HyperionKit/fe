import React from 'react';
import { BackgroundGrid } from '@/components/pages/foundation-background';
import { EclipseRing } from '@/components/pages/foundation-eclipse-ring';
import { HeroTitle } from '@/components/pages/foundation-hero-title';

export const HeroSection: React.FC = () => (
  <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    {/* Background Effects */}
    <BackgroundGrid />
    <EclipseRing />

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
      <HeroTitle />
    </div>
  </header>
);