import React from 'react'

const FoundationHeroPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-5">
        {/* Top Section - Light Blue */}
        <div className="w-full h-44 bg-gradient-to-r from-sky-300 to-cyan-300"></div>
        
        {/* Bottom Section - Darker Blue */}
        <div className="w-full h-16 bg-gradient-to-r from-blue-400 to-sky-400"></div>
      </div>
    </div>
  )
}

export default FoundationHeroPage