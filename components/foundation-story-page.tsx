import React from 'react'

const FoundationStoryPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-blue-600 p-12 flex flex-col items-center gap-5">
        {/* Light cyan bar - taller */}
        <div className="w-3/5 h-20 bg-cyan-200"></div>
        
        {/* Three cyan bars - shorter */}
        <div className="w-3/5 h-16 bg-cyan-300"></div>
        <div className="w-3/5 h-16 bg-cyan-300"></div>
        <div className="w-3/5 h-16 bg-cyan-300"></div>
      </div>
    </div>
  )
}

export default FoundationStoryPage