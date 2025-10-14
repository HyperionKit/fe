'use client';

import React, { Suspense, lazy } from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';

// Lazy load all page components
const FoundationPage = lazy(() => import('./foundation-page'));
const ProductsPage = lazy(() => import('./products-overview-page'));
const BuildPage = lazy(() => import('./build-page'));
const RoadmapPage = lazy(() => import('./roadmap-timeline'));
const AIChatPage = lazy(() => import('./ai-chat-page'));
const LaunchAppPage = lazy(() => import('./launch-app-page'));

// Loading component with performance-aware styling
const LoadingSpinner: React.FC<{ isLowPower?: boolean }> = ({ isLowPower = false }) => (
  <div className={`flex items-center justify-center min-h-screen bg-black ${isLowPower ? 'opacity-75' : ''}`}>
    <div className={`${isLowPower ? 'w-8 h-8' : 'w-12 h-12'} border-2 border-purple-500 border-t-transparent rounded-full animate-spin`} />
  </div>
);

// Performance-aware page wrapper
const LazyPageWrapper: React.FC<{ 
  children: React.ReactNode; 
  fallback?: React.ReactNode;
}> = ({ children, fallback }) => {
  const { isLowPower } = usePerformance();
  
  return (
    <Suspense fallback={fallback || <LoadingSpinner isLowPower={isLowPower} />}>
      {children}
    </Suspense>
  );
};

// Export lazy-loaded page components
export const LazyFoundationPage = () => (
  <LazyPageWrapper>
    <FoundationPage />
  </LazyPageWrapper>
);

export const LazyProductsPage = () => (
  <LazyPageWrapper>
    <ProductsPage />
  </LazyPageWrapper>
);

export const LazyBuildPage = () => (
  <LazyPageWrapper>
    <BuildPage />
  </LazyPageWrapper>
);

export const LazyRoadmapPage = () => (
  <LazyPageWrapper>
    <RoadmapPage />
  </LazyPageWrapper>
);

export const LazyAIChatPage = () => (
  <LazyPageWrapper>
    <AIChatPage />
  </LazyPageWrapper>
);

export const LazyLaunchAppPage = () => (
  <LazyPageWrapper>
    <LaunchAppPage />
  </LazyPageWrapper>
);
