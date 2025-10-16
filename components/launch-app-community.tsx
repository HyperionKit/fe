export default function LaunchAppCommunity() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <div className="mb-6">
          {/* Top Bar with Logo and Search */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full" />
              <div className="h-4 w-48 bg-cyan-300 rounded" />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search apps..." 
                  className="outline-none text-sm text-gray-600 w-48"
                />
              </div>
              <div className="w-16 h-8 bg-blue-500 rounded" />
              <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded" />
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-1.5">
            <div className="px-6 py-2 bg-red-500 rounded-full" />
            <div className="px-6 py-2 bg-red-400 rounded-full" />
            <div className="px-6 py-2 bg-red-500 rounded-full" />
            <div className="px-6 py-2 bg-red-400 rounded-full opacity-70" />
            <div className="px-6 py-2 bg-red-500 rounded-full" />
            <div className="flex-1" />
          </div>
          
          {/* Secondary Nav */}
          <div className="flex justify-end gap-2 mt-3">
            <div className="w-16 h-6 bg-cyan-300 rounded" />
            <div className="w-6 h-6 bg-blue-700 rounded" />
          </div>
        </div>
        
        {/* App Grid */}
        <div className="grid grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-2xl p-6">
              {/* App Buttons */}
              <div className="flex gap-3 mb-8 justify-center">
                <div className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full shadow-lg">
                  <div className="w-16 h-3 bg-cyan-400 rounded" />
                </div>
                <div className="px-8 py-3 bg-black rounded-full shadow-lg">
                  <div className="w-16 h-3 bg-blue-500 rounded" />
                </div>
              </div>
              
              {/* App Info Footer */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full" />
                <div className="flex-1">
                  <div className="h-2 bg-cyan-400 rounded w-20 mb-2" />
                  <div className="h-6 bg-purple-100 rounded" />
                </div>
                <div className="w-12 h-6 bg-cyan-400 rounded" />
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                <div className="w-6 h-6 bg-white rounded" />
                <div className="w-6 h-6 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}