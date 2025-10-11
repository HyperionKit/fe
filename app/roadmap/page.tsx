import React from 'react'
import RoadmapHeroPage from '@/components/roadmap-hero-page'
import RoadmapTimeline from '@/components/roadmap-timeline'

const page = () => {
  return (
    <div className="w-full">
      <div className="pt-16 sm:pt-18 lg:pt-20">
        <RoadmapHeroPage />
        <RoadmapTimeline />
      </div>
    </div>
  )
}

export default page