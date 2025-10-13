"use client";

import React from 'react';

export default function AIChatPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-900 h-16 flex items-center px-6">
        <div className="flex items-center space-x-4 w-full">
          {/* Show UI Button */}
          <button className="bg-gray-700 text-white px-4 py-2 rounded text-sm font-medium">
            Show UI
          </button>
          
          {/* Separator */}
          <div className="w-px h-6 bg-white"></div>
          
          {/* Status Indicators - Center */}
          <div className="flex items-center space-x-1 flex-1 justify-center">
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
          
          {/* Right side indicators */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-2 bg-blue-300 rounded"></div>
            <div className="w-3 h-2 bg-purple-400 rounded"></div>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-200 flex flex-col">
          {/* Main sidebar content - mostly empty */}
          <div className="flex-1">
            {/* Empty space for content */}
          </div>
          
          {/* Bottom section */}
          <div className="bg-gray-200 p-4">
            {/* Progress bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded"></div>
                <div className="w-2 h-2 bg-blue-500 rounded"></div>
                <div className="w-2 h-2 bg-blue-500 rounded"></div>
                <div className="w-16 h-2 bg-blue-500 rounded"></div>
              </div>
              <div className="w-3 h-3 bg-purple-600 rounded"></div>
            </div>
            
            {/* Bottom buttons */}
            <div className="flex space-x-2">
              <button className="flex-1 border border-gray-400 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
                Button 1
              </button>
              <button className="flex-1 border border-gray-400 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
                Button 2
              </button>
              <button className="flex-1 border border-gray-400 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
                Button 3
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white rounded-tl-lg">
          {/* Empty white content area */}
        </div>
      </div>
    </div>
  );
}
