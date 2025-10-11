import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-cyan-200 relative">
      {/* Top centered blue box */}
      <div className="flex justify-center pt-32">
        <div className="w-80 h-28 bg-blue-600"></div>
      </div>
      
      {/* Bottom right blue box */}
      <div className="absolute bottom-0 right-0 w-44 h-16 bg-blue-400"></div>
    </div>
  );
}