import React from 'react'
import PixelBlast from './libraries/PixelBlast'

const FoundationHeroPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 relative">
      {/* PixelBlast Background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>
      
      <div className="container max-w-6xl space-y-5 relative z-10">
        {/* Top Section - Light Blue */}
        <div className="w-full h-44 bg-gradient-to-r from-sky-300/80 to-cyan-300/80 backdrop-blur-sm rounded-lg"></div>
        
        {/* Bottom Section - Darker Blue */}
        <div className="w-full h-16 bg-gradient-to-r from-blue-400/80 to-sky-400/80 backdrop-blur-sm rounded-lg"></div>
      </div>
    </div>
  )
}

export default FoundationHeroPage