import React from 'react';
import Navbar from '@/components/navbar';
import HeroPage from '@/components/hero-page';
import TimelinePage from '@/components/timeline-page';
import CardPage from '@/components/cards-page';
import RewardPage from '@/components/rewards-page';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar/>
      <HeroPage/>
      <TimelinePage/>
      <CardPage/>
      <RewardPage/>
      <Footer/>
    </div>
  );
}