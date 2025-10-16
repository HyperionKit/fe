import React from 'react'
import { ErrorBoundary } from '@/components/error-boundary'
import LaunchAppHeroPage from '@/components/launch-app-hero-page'
import LaunchRecentApp from '@/components/launch-app-recent-app'
import LaunchAppCommunity from '@/components/launch-app-community'

const page = () => {
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
  )
}
export default page