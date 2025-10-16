'use client';

import { useState, useCallback } from 'react';

export default function LaunchAppCommunity() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Website');
  const [sortBy, setSortBy] = useState('featured');

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  }, [searchQuery]);

  const handleTabChange = useCallback((tab: string) => {
    setActiveTab(tab);
    // TODO: Implement tab filtering
    console.log('Filtering by:', tab);
  }, []);

  const handleSortChange = useCallback((sort: string) => {
    setSortBy(sort);
    // TODO: Implement sorting
    console.log('Sorting by:', sort);
  }, []);
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <div className="mb-8">
          {/* Top Bar with Logo and Search */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <img 
                src="/icons/launch-app/community/community-build.png" 
                alt="Community Build" 
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold text-gray-800 mb-1" style={{fontFamily: 'Inter'}}>
                Build by Community
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <form onSubmit={handleSearch} className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-white">
                <img src="/icons/launch-app/community/search.png" alt="Search" className="w-4 h-4" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search apps" 
                  className="outline-none text-sm text-gray-600 w-48"
                />
              </form>
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                <span className="text-sm font-medium">View all</span>
                <img src="/icons/launch-app/community/see-all.png" alt="View all" className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-base mb-1" style={{fontFamily: 'Inter'}}>
            Discover a curated collection of applications built by our community.
          </p>
          
          {/* Navigation Tabs and Controls */}
          <div className="flex items-center justify-between mb-4">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-2">
              {['Website', 'Game', 'Productivity', 'Prototype', 'App'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
              className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white hover:bg-gray-50 transition-colors"
              aria-label="Sort by"
            >
              <span className="text-sm text-gray-700">{sortBy}</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* App Grid */}
        <div className="grid grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-purple-50 rounded-2xl p-6 border border-purple-100 group hover:shadow-lg transition-all duration-300">
              {/* App Preview Area */}
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                {/* Default placeholder */}
                <div className="w-full h-full bg-gray-200 rounded-lg group-hover:opacity-0 transition-opacity duration-300" />
                
                {/* Hover buttons - shown on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <button className="px-6 py-3 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                      Remix App
                    </button>
                    <button className="px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              
              {/* App Info Footer */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">Username</p>
                  <p className="text-xs text-gray-500">10,000</p>
                </div>
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                <img src="/icons/launch-app/community/remix.png" alt="Remix" className="w-5 h-5" />
                <img src="/icons/launch-app/community/share.png" alt="Share" className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}