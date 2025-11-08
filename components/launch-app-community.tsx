'use client';

import { useState, useCallback } from 'react';

interface App {
  id: number;
  name: string;
  creator: string;
  remixes: number;
  description: string;
  category: string;
}

export default function LaunchAppCommunity() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Website');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const apps: App[] = [
    { id: 1, name: 'E-Commerce Dashboard', creator: 'AlexDev', remixes: 10234, description: 'A comprehensive e-commerce dashboard with real-time analytics, inventory management, and sales tracking. Features interactive charts and responsive design.', category: 'Website' },
    { id: 2, name: 'Meditation Timer', creator: 'ZenMaster', remixes: 8456, description: 'Beautifully designed meditation and focus timer with ambient sounds, breathing exercises, and progress tracking for mindfulness practice.', category: 'Productivity' },
    { id: 3, name: 'Space Shooter', creator: 'PixelPro', remixes: 15678, description: 'Retro-style space shooter game with power-ups, boss battles, and leaderboards. Includes smooth controls and stunning particle effects.', category: 'Game' },
  ];

  const handleSearch = useCallback(() => {
    console.log('Searching for:', searchQuery);
  }, [searchQuery]);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    console.log('Filtering by:', tab);
  }, []);

  const handleSortChange = useCallback((sort: string) => {
    setSortBy(sort);
    console.log('Sorting by:', sort);
  }, []);

  const handleViewDetails = useCallback((app: App) => {
    setSelectedApp(app);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedApp(null);
  }, []);

  const handleRemix = useCallback((app: App) => {
    console.log('Remixing app:', app.name);
    window.open('https://ai.hyperionkit.xyz', '_blank');
  }, []);

  const handleViewApp = useCallback((app: App) => {
    console.log('Viewing app:', app.name);
    window.open('https://ai.hyperionkit.xyz', '_blank');
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          {/* Top Bar with Logo and Search */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4 sm:mb-6">
            <div className="flex items-center gap-3">
              <img 
                src="/icons/launch-app/community/community-build.png" 
                alt="Community Build" 
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800" style={{fontFamily: 'Inter'}}>
                Build by Community
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 sm:px-4 py-2 bg-white flex-1 sm:flex-initial">
                <img src="/icons/launch-app/community/search.png" alt="Search" className="w-4 h-4" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Search apps" 
                  className="outline-none text-sm text-gray-600 w-full sm:w-48"
                />
              </div>
              <button className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                <span className="text-sm font-medium">View all</span>
                <img src="/icons/launch-app/community/see-all.png" alt="View all" className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-1" style={{fontFamily: 'Inter'}}>
            Discover a curated collection of applications built by our community.
          </p>
          
          {/* Navigation Tabs and Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2 sm:pb-0">
              {['Website', 'Game', 'Productivity', 'Prototype', 'App'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Featured Dropdown */}
            <button 
              onClick={() => handleSortChange(sortBy === 'featured' ? 'newest' : 'featured')}
              className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white hover:bg-gray-50 transition-colors w-full sm:w-auto"
              aria-label="Sort by"
            >
              <span className="text-sm text-gray-700 capitalize">{sortBy}</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* App Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {apps.map((app) => (
            <div 
              key={app.id} 
              className="bg-purple-50 rounded-2xl p-4 sm:p-6 border border-purple-100 transition-all duration-300"
              onMouseEnter={() => setHoveredCard(app.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* App Preview Area */}
              <div className="h-40 sm:h-48 bg-gray-200 rounded-lg mb-3 sm:mb-4 flex items-center justify-center overflow-hidden relative group">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-purple-300">{app.name.charAt(0)}</span>
                </div>
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/60 bg-opacity-60 flex items-center justify-center gap-2 sm:gap-3 transition-opacity duration-300 px-2 ${
                  hoveredCard === app.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button 
                    onClick={() => handleRemix(app)}
                    className="px-3 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    Remix
                  </button>
                  <button 
                    onClick={() => handleViewDetails(app)}
                    className="px-3 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
              
              {/* App Info Footer */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {app.creator.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-800 truncate">{app.creator}</p>
                  <p className="text-xs text-gray-500">{app.remixes.toLocaleString()}</p>
                </div>
                <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0" />
                <button 
                  onClick={() => handleRemix(app)}
                  className="hover:scale-110 transition-transform flex-shrink-0"
                >
                  <img src="/icons/launch-app/community/remix.png" alt="Remix" className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="hover:scale-110 transition-transform flex-shrink-0">
                  <img src="/icons/launch-app/community/share.png" alt="Share" className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedApp && (
        <div 
          className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative animate-scale-in max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="space-y-4 sm:space-y-6">
              {/* Header */}
              <div className="pr-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2" style={{fontFamily: 'Inter'}}>
                  {selectedApp.name}
                </h2>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {selectedApp.creator.charAt(0)}
                    </div>
                    <span className="font-medium">{selectedApp.creator}</span>
                  </div>
                  <span>•</span>
                  <span>{selectedApp.category}</span>
                </div>
              </div>

              {/* Preview */}
              <div className="h-48 sm:h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                <span className="text-5xl sm:text-6xl font-bold text-purple-300">{selectedApp.name.charAt(0)}</span>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 sm:gap-6 py-3 sm:py-4 border-y border-gray-200">
                <div className="flex items-center gap-2">
                  <img src="/icons/launch-app/community/remix.png" alt="Remix" className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{selectedApp.remixes.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Remixes</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">{(selectedApp.remixes * 3.2).toFixed(0)}</p>
                    <p className="text-xs text-gray-500">Views</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{selectedApp.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button
                  onClick={() => handleRemix(selectedApp)}
                  className="flex-1 px-4 sm:px-6 py-3 bg-purple-600 text-white rounded-lg text-sm sm:text-base font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                >
                  <img src="/icons/launch-app/community/remix.png" alt="Remix" className="w-4 h-4 sm:w-5 sm:h-5 brightness-0 invert" />
                  Remix App
                </button>
                <button
                  onClick={() => handleViewApp(selectedApp)}
                  className="flex-1 px-4 sm:px-6 py-3 bg-black text-white rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View App
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}