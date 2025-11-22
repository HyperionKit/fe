import React from 'react';
import HeroPage from '@/components/pages/hero-page';
import TimelinePage from '@/components/pages/timeline-page';
import CardPage from '@/components/pages/cards-page';
import RewardPage from '@/components/pages/rewards-page';

export default function Home() {
  return (
    <div className="w-full">
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <HeroPage/>
        <TimelinePage/>
        <CardPage/>
        <RewardPage/>
      </div>
    </div>
  );
}