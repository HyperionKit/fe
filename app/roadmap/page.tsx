import React from 'react'
import RoadmapHeroPage from '@/components/roadmap-hero-page'
import RoadmapTimeline from '@/components/roadmap-timeline'

// Disable static generation for this page due to React Three Fiber
export const dynamic = 'force-dynamic'

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