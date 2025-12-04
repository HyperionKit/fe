import React from 'react';
import { Badge } from '@/components/pages/landing-badge';
import { HeroHeadline } from '@/components/pages/landing-hero-headline';
import { CTAButtons } from '@/components/pages/landing-CTA-buttons';
import { TerminalWindow } from '@/components/pages/landing-terminal-window';

export const HeroSection: React.FC = () => (
  <section className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
    <Badge>Hyperkit v1.0</Badge>
    <HeroHeadline />
    <CTAButtons />
    <TerminalWindow />
  </section>
);