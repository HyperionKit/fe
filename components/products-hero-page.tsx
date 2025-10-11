import React from 'react'

const FoundationHeroPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Top Header Bars */}
        <div className="flex mb-2">
          <div className="w-96 h-14 bg-sky-400"></div>
          <div className="w-28 h-14 bg-cyan-300"></div>
        </div>
        
        {/* Main Content - Two Column Grid */}
        <div className="grid grid-cols-2 gap-1">
          {/* Left Column */}
          <div className="bg-cyan-300 rounded-bl-3xl">
            <div className="h-96"></div>
            <div className="bg-blue-500 p-6">
              <div className="w-8 h-8 bg-blue-700 mb-3"></div>
              <div className="w-44 h-8 bg-cyan-200"></div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="bg-cyan-300 rounded-br-3xl">
            <div className="h-96"></div>
            <div className="bg-blue-500 p-6">
              <div className="w-8 h-8 bg-blue-700 mb-3"></div>
              <div className="w-44 h-8 bg-cyan-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoundationHeroPage