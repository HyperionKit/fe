'use client';

import React from 'react';
import { ErrorBoundary } from '@/components/utils/error-boundary';
import LaunchAppHeroPage from '@/components/pages/launch-app-hero-page';
import LaunchRecentApp from '@/components/pages/launch-app-recent-app';
import LaunchAppCommunity from '@/components/pages/launch-app-community';

export default function LaunchAppPage() {
  return (
    <div className="w-full">
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <ErrorBoundary>
          <LaunchAppHeroPage/>
        </ErrorBoundary>
        <div className="py-16">
          <ErrorBoundary>
            <LaunchRecentApp/>
          </ErrorBoundary>
        </div>
        <div className="py-16">
          <ErrorBoundary>
            <LaunchAppCommunity/>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}