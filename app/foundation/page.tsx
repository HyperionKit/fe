import React from 'react';
import FoundationHeroPage from '@/components/foundation-hero-page';
import FoundationStoryPage from '@/components/foundation-story-page';
import FoundationTeamPage from '@/components/foundation-team-page';
import FoundationObjectivePage from '@/components/foundation-objective-page';
import FoundationInvestorPage from '@/components/foundation-investor-page';

export default function Home() {
  return (
    <div className="w-full">
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <FoundationHeroPage/>
        <FoundationStoryPage/>
        <FoundationTeamPage/>
        <FoundationObjectivePage/>
        <FoundationInvestorPage/>
      </div>
    </div>
  );
}