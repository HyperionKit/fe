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
        {/* Hyperkit Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
            alt="Hyperkit" 
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-center leading-tight" style={{fontFamily: 'Be Vietnam Pro'}}>
          One Milestone at a Time
        </h1>
        
        {/* Subtitle - Large and Prominent */}
        <p className="text-3xl md:text-4xl lg:text-5xl text-white/90 mb-12 text-center leading-tight font-medium" style={{fontFamily: 'Inter'}}>
          Pioneering Tomorrow's DeFi
        </p>
        
        {/* Additional Branding */}
        <div className="flex justify-center items-center gap-8 mt-8">
          <img 
            src="/logo/brand/hyperkit/Hyperkit Header Black.svg" 
            alt="Hyperkit Header Black" 
            className="h-8 opacity-80"
          />
          <img 
            src="/logo/brand/hyperkit/Hyperkit Header White.svg" 
            alt="Hyperkit Header White" 
            className="h-8 opacity-80"
          />
        </div>
      </div>
    </div>
  )
}

export default RoadmapHeroPage