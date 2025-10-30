import React from 'react';
import HeroPage from '@/components/hero-page';
import TimelinePage from '@/components/timeline-page';
import CardPage from '@/components/cards-page';
import RewardPage from '@/components/rewards-page';

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