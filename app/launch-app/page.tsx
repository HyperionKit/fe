import React from 'react'
import LaunchAppHeroPage from '@/components/launch-app-hero-page'
import LaunchAppChatUI from '@/components/launch-app-chat-ui'
import LaunchRecentApp from '@/components/launch-app-recent-app'
import LaunchAppCommunity from '@/components/launch-app-community'

const page = () => {
  return (
    <div className="w-full">
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <LaunchAppHeroPage/>
        <LaunchAppChatUI/>
        <LaunchRecentApp/>
        <LaunchAppCommunity/>
      </div>
    </div>
  )
}
export default page