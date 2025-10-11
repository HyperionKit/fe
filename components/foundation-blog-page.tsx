import React from 'react'

const FoundationHeroPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-5xl bg-blue-500 p-12">
        {/* Top bar */}
        <div className="w-40 h-10 bg-blue-600 mb-8"></div>
        
        {/* Three cards */}
        <div className="grid grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="w-full h-20 bg-cyan-200"></div>
              <div className="w-full h-4 bg-cyan-300"></div>
              <div className="w-16 h-2 bg-cyan-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FoundationHeroPage