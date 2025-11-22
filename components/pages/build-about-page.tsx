import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Section - Blue with cyan box */}
      <div className="bg-blue-500 p-12">
        <div className="w-full max-w-2xl h-32 bg-cyan-300"></div>
      </div>
      
      {/* Bottom Section - Cyan background with grid */}
      <div className="bg-cyan-300 p-12">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col">
            <div className="w-full h-8 bg-sky-400"></div>
            <div className="w-full flex-1 bg-blue-500" style={{ height: '240px' }}></div>
          </div>
          
          {/* Right Column - 3 stacked boxes */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-20 bg-blue-600"></div>
            <div className="w-full h-20 bg-blue-600"></div>
            <div className="w-full h-20 bg-blue-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}