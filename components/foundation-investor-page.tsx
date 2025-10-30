import React from 'react'

const FoundationHeroPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-blue-600 p-8">
        {/* Top Section */}
        <div className="mb-8">
          <div className="w-96 h-12 bg-cyan-300 mb-2"></div>
          <div className="w-3/5 h-12 bg-sky-400"></div>
        </div>
        
        {/* Bottom Section */}
        <div className="bg-blue-500 p-6 grid grid-cols-5 gap-6">
          {/* Left 4 columns - List items */}
          <div className="col-span-4 grid grid-cols-4 gap-4">
            {[...Array(28)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-200 rounded-full flex-shrink-0"></div>
                <div className="flex-1 h-3 bg-cyan-300"></div>
              </div>
            ))}
          </div>
          
          {/* Right column - Grid */}
          <div className="flex flex-col gap-3">
            <div className="w-full h-12 bg-cyan-300"></div>
            <div className="grid grid-cols-2 gap-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-12 bg-cyan-300"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoundationHeroPage