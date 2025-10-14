"use client";

import React from 'react';

export default function LaunchAppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      {/* Header */}
      <div className="bg-blue-900 h-16 flex items-center px-6">
        <div className="flex items-center space-x-4">
          {/* Hyperkit Logo */}
          <img 
            src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
            alt="Hyperkit" 
            className="w-8 h-8"
          />
          
          {/* Show UI Button */}
          <button className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Show UI
          </button>
          
          {/* Progress/Timeline Bar */}
          <div className="flex items-center space-x-1">
            <div className="w-8 h-2 bg-blue-500 rounded"></div>
            <div className="w-2 h-2 bg-blue-800 rounded"></div>
            <div className="w-6 h-2 bg-blue-500 rounded"></div>
            <div className="w-2 h-2 bg-blue-300 rounded"></div>
            <div className="w-4 h-2 bg-blue-500 rounded"></div>
            <div className="w-3 h-2 bg-purple-600 rounded"></div>
            <div className="w-3 h-2 bg-purple-400 rounded"></div>
            <div className="w-5 h-2 bg-blue-500 rounded"></div>
            <div className="w-2 h-2 bg-blue-300 rounded"></div>
            <div className="w-3 h-2 bg-purple-400 rounded"></div>
          </div>
          
          {/* My Workspace Button */}
          <div className="ml-auto">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              My workspace
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Hero Section */}
        <div className="space-y-2">
          <div className="bg-blue-600 rounded-t-lg h-24"></div>
          <div className="bg-blue-400 rounded-lg h-8"></div>
        </div>

        {/* Progress Bar Section */}
        <div className="bg-white rounded-full h-4 flex items-center px-2">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded"></div>
            <div className="w-2 h-2 bg-blue-500 rounded"></div>
            <div className="w-2 h-2 bg-blue-500 rounded"></div>
            <div className="w-16 h-2 bg-blue-500 rounded"></div>
          </div>
          <div className="ml-auto w-4 h-4 bg-purple-600 rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded"></div>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="bg-blue-600 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Card 1 */}
            <div className="bg-white rounded p-3 flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-800 rounded"></div>
              <div className="flex-1 space-y-1">
                <div className="h-1.5 bg-blue-200 rounded w-3/4"></div>
                <div className="h-1.5 bg-blue-200 rounded w-1/2"></div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded p-3 flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-800 rounded"></div>
              <div className="flex-1 space-y-1">
                <div className="h-1.5 bg-blue-200 rounded w-3/4"></div>
                <div className="h-1.5 bg-blue-200 rounded w-1/2"></div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded p-3 flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-800 rounded"></div>
              <div className="flex-1 space-y-1">
                <div className="h-1.5 bg-blue-200 rounded w-3/4"></div>
                <div className="h-1.5 bg-blue-200 rounded w-1/2"></div>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white rounded p-3 flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-800 rounded"></div>
              <div className="flex-1 space-y-1">
                <div className="h-1.5 bg-blue-200 rounded w-3/4"></div>
                <div className="h-1.5 bg-blue-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Launcher */}
        <div className="bg-white rounded-lg p-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-12 h-2 bg-blue-200 rounded"></div>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-sm mx-4">
              <div className="relative">
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded"></div>
                <input 
                  type="text" 
                  placeholder="Search apps..." 
                  className="w-full pl-8 pr-3 py-1.5 border border-gray-300 rounded text-sm"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded"></div>
              </div>
            </div>
            
            {/* Window Controls */}
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded"></div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded"></div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex space-x-1 mb-4">
            <div className="w-12 h-4 bg-red-500 rounded"></div>
            <div className="w-8 h-4 bg-blue-500 rounded"></div>
            <div className="w-16 h-4 bg-blue-500 rounded"></div>
            <div className="w-10 h-4 bg-blue-500 rounded"></div>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-gray-50 rounded p-3 space-y-2">
                {/* Toggle Switch */}
                <div className="flex items-center justify-between">
                  <div className="w-6 h-3 bg-blue-500 rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <div className="flex-1 h-0.5 bg-purple-200 rounded">
                    <div className="w-1/2 h-full bg-blue-500 rounded"></div>
                  </div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>        
      </div>
    </div>
  );
}
