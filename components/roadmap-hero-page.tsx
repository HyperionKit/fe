import React from 'react'
import Dither from './libraries/Dither'

const RoadmapHeroPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Dither Background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <Dither
          waveColor={[0.3, 0.2, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="text-16xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-center leading-tight whitespace-nowrap" style={{fontFamily: 'Be Vietnam Pro'}}>
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