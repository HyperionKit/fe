import React from 'react'

const FoundationHeroPage = () => {
  return (
    <div className="min-h-screen bg-blue-600 p-6 flex gap-20">
      {/* Left Column */}
      <div className="flex flex-col gap-12 w-96">
        <div className="w-64 h-16 bg-cyan-300"></div>
        <div className="flex-1 bg-cyan-200"></div>
      </div>
      
      {/* Right Column */}
      <div className="flex flex-col gap-4 flex-1">
        <div className="w-full h-10 bg-cyan-300"></div>
        <div className="flex gap-4 flex-1">
          <div className="flex-1 bg-sky-400"></div>
          <div className="w-44 bg-blue-500"></div>
        </div>
        <div className="flex gap-4">
          <div className="w-44 h-44 bg-cyan-400"></div>
          <div className="w-44 h-44 bg-cyan-200"></div>
        </div>
      </div>
    </div>
  )
}

export default FoundationHeroPage