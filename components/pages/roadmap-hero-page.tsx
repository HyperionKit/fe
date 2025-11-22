'use client';

import React from 'react'
import { LazyVideoBackground } from '@/components/ui/lazy-video-background'

const RoadmapHeroPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <LazyVideoBackground
        src="/videos/milestone-roadmap.mp4"
        priority={true}
        className="absolute inset-0"
        style={{
          top: '-5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120%',
          height: '120%'
        }}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 text-center leading-tight" style={{fontFamily: 'Be Vietnam Pro'}}>
          One Milestone at a Time
        </h1>
        
        {/* Subtitle - Large and Prominent */}
        <p className="text-3xl md:text-4xl lg:text-5xl text-white/90 mb-12 text-center leading-tight font-medium" style={{fontFamily: 'Inter'}}>
          Pioneering Tomorrow's DeFi
        </p>
      </div>
    </div>
  )
}

export default RoadmapHeroPage