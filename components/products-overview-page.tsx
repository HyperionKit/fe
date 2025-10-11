import React from 'react'

const FoundationHeroPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 gap-6">
      {/* Top Header */}
      <div className="w-full max-w-4xl">
        <div className="w-full h-12 bg-sky-400 mb-1"></div>
        <div className="w-full h-12 bg-blue-500"></div>
      </div>
      
      {/* Main Content */}
      <div className="w-full max-w-6xl bg-cyan-200 rounded-3xl p-6 relative">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <div className="w-56 bg-gray-100 rounded-2xl p-4 flex flex-col gap-3">
            {/* Avatar and input */}
            <div className="w-full h-12 bg-cyan-300 rounded-lg"></div>
            
            {/* Menu items with toggles */}
            <div className="w-full h-8 bg-blue-400 rounded-full flex items-center justify-between px-3">
              <div className="w-16 h-3 bg-cyan-200 rounded"></div>
              <div className="w-6 h-3 bg-gray-700 rounded-full"></div>
            </div>
            
            <div className="w-full h-8 bg-blue-500 rounded-full"></div>
            
            <div className="w-full h-8 bg-blue-500 rounded-full flex items-center px-3 gap-1">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
              <div className="w-3 h-3 bg-white rounded-sm"></div>
              <div className="w-3 h-3 bg-white rounded-sm"></div>
              <div className="w-3 h-3 bg-white rounded-sm"></div>
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            
            <div className="w-full h-8 bg-blue-400 rounded-full flex items-center justify-between px-3">
              <div className="flex gap-1">
                <div className="w-12 h-3 bg-cyan-200 rounded"></div>
                <div className="w-4 h-3 bg-cyan-400 rounded"></div>
              </div>
              <div className="w-6 h-3 bg-gray-700 rounded-full"></div>
            </div>
            
            <div className="w-20 h-3 bg-blue-400 rounded"></div>
            
            <div className="w-full h-8 bg-blue-400 rounded-full"></div>
            
            <div className="flex gap-2">
              <div className="w-12 h-6 bg-blue-500 rounded"></div>
              <div className="w-20 h-6 bg-blue-500 rounded"></div>
            </div>
            
            <div className="w-full h-10 bg-blue-500 rounded"></div>
            
            <div className="flex gap-2">
              <div className="w-12 h-6 bg-blue-500 rounded"></div>
              <div className="w-16 h-6 bg-blue-500 rounded"></div>
              <div className="w-8 h-6 bg-cyan-400 rounded"></div>
            </div>
            
            <div className="flex gap-2">
              <div className="flex-1 h-6 bg-blue-500 rounded"></div>
              <div className="flex-1 h-6 bg-cyan-400 rounded"></div>
            </div>
            
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-cyan-400 rounded"></div>
              <div className="w-10 h-6 bg-cyan-400 rounded"></div>
              <div className="w-10 h-6 bg-cyan-400 rounded"></div>
            </div>
            
            <div className="flex gap-2">
              <div className="w-12 h-6 bg-blue-500 rounded"></div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              <div className="w-10 h-10 bg-cyan-400 rounded-lg"></div>
              <div className="w-10 h-10 bg-cyan-400 rounded-lg"></div>
              <div className="w-10 h-10 bg-cyan-400 rounded-lg"></div>
              <div className="w-10 h-10 bg-cyan-400 rounded-lg"></div>
            </div>
            
            <div className="w-16 h-4 bg-blue-500 rounded"></div>
            
            <input 
              type="text" 
              placeholder="Website, telegram, or email, etc..." 
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg"
            />
            
            <div className="text-xs text-gray-500 mt-4">© 2024 Hyperlink. All rights reserved.</div>
          </div>
          
          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-2xl flex items-center justify-center relative">
            {/* Code Preview Toggle */}
            <div className="absolute top-4 right-4 bg-gray-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
              Code Preview
              <div className="w-8 h-4 bg-gray-500 rounded-full relative">
                <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Sign in Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
              <p className="text-xs text-gray-600">
                By signing in, you agree to the <span className="font-semibold">Terms of Service</span><br />
                protected by <span className="font-semibold">Hyperlink</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoundationHeroPage