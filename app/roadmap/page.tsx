import React from 'react'
import RoadmapHeroPage from '@/components/roadmap-hero-page'
import RoadmapTimeline from '@/components/roadmap-timeline'

const page = () => {
  return (
    <div className="w-full">
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <RoadmapHeroPage />
        <RoadmapTimeline />
      </div>
    </div>
  )
}

export default page