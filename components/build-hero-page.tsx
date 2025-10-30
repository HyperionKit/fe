import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-cyan-200 flex flex-col justify-between p-8">
      {/* Top centered blue box */}
      <div className="flex justify-center pt-16">
        <div className="w-80 h-28 bg-blue-600 rounded-lg"></div>
      </div>
      
      {/* Bottom right blue box */}
      <div className="flex justify-end">
        <div className="w-44 h-16 bg-blue-400 rounded-lg"></div>
      </div>
    </div>
  );
}