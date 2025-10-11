import React from 'react'

const FoundationHeroPage = () => {
  return (
    <div className="min-h-auto bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-2xl flex flex-col items-center gap-8">
        {/* Top blue bar */}
        <div className="w-52 h-8 bg-blue-500"></div>
        
        {/* Three columns */}
        <div className="flex gap-6">
          {/* Column 1 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <div className="w-20 h-6 bg-blue-500"></div>
            <div className="w-20 h-4 bg-cyan-300"></div>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <div className="w-20 h-6 bg-blue-500"></div>
            <div className="w-20 h-4 bg-cyan-300"></div>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <div className="w-20 h-6 bg-blue-500"></div>
            <div className="w-20 h-4 bg-cyan-300"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoundationHeroPage