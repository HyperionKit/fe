import React from 'react'
import LaunchAppHeroPage from '@/components/launch-app-hero-page'
import LaunchRecentApp from '@/components/launch-app-recent-app'
import LaunchAppCommunity from '@/components/launch-app-community'

const page = () => {
  return (
    <div className="w-full">
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <LaunchAppHeroPage/>
        <div className="py-25">
          <LaunchRecentApp/>
        </div>
        <div className="py-25">
          <LaunchAppCommunity/>
        </div>
      </div>
    </div>
  )
}
export default page