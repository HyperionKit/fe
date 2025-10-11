import React from 'react'

const FoundationHeroPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-5xl bg-blue-600 p-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-10 bg-cyan-300"></div>
            <div className="w-full h-24 bg-sky-400"></div>
            <div className="w-full h-20 bg-sky-500"></div>
            <div className="w-full h-20 bg-sky-500"></div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-10 bg-sky-400"></div>
            <div className="w-full h-24 bg-sky-500"></div>
            <div className="w-full h-20 bg-sky-500"></div>
            <div className="w-full h-20 bg-sky-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoundationHeroPage