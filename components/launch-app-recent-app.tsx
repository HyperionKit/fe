'use client';

import { useState, useCallback } from 'react';

interface AppCard {
  id: string;
  name: string;
  description: string;
  lastUpdate: string;
  time: string;
}

export default function LaunchAppRecentApp() {
  const [apps] = useState<AppCard[]>([
    {
      id: '1',
      name: 'Application',
      description: 'Description',
      lastUpdate: '2024/01/15',
      time: '14:30:25'
    },
    {
      id: '2',
      name: 'Application',
      description: 'Description',
      lastUpdate: '2024/01/15',
      time: '14:30:25'
    },
    {
      id: '3',
      name: 'Application',
      description: 'Description',
      lastUpdate: '2024/01/15',
      time: '14:30:25'
    },
    {
      id: '4',
      name: 'Application',
      description: 'Description',
      lastUpdate: '2024/01/15',
      time: '14:30:25'
    },
    {
      id: '5',
      name: 'Application',
      description: 'Description',
      lastUpdate: '2024/01/15',
      time: '14:30:25'
    },
    {
      id: '6',
      name: 'Application',
      description: 'Description',
      lastUpdate: '2024/01/15',
      time: '14:30:25'
    }
  ]);

  const handleViewAll = useCallback(() => {
    // TODO: Implement view all functionality
    console.log('View all recent apps');
  }, []);

  const handleAppClick = useCallback((appId: string) => {
    // TODO: Implement app click functionality
    console.log('Opening app:', appId);
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-6 lg:-mt-8">
      <div className="w-full max-w-5xl mx-auto">
        {/* Recent Apps Container */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6">
          {/* Header with Logo and Control Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-3 sm:mb-4">
            <h2 className="text-gray-600 text-lg sm:text-xl font-semibold" style={{fontFamily: 'Inter'}}>
              Recent Apps
            </h2>
            <div className="flex gap-1">
              <button 
                onClick={handleViewAll}
                className="bg-transparent text-gray-600 px-3 py-1 rounded flex items-center gap-1 hover:bg-gray-100 transition-colors"
                aria-label="View all recent apps"
              >
                <span className="text-sm font-medium">View all</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.map((app) => (
              <div 
                key={app.id}
                onClick={() => handleAppClick(app.id)}
                className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-start gap-3 cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-colors"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleAppClick(app.id);
                  }
                }}
                aria-label={`Open ${app.name} application`}
              >
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-300 rounded" style={{
                    background: 'repeating-linear-gradient(45deg, #d1d5db, #d1d5db 2px, #9ca3af 2px, #9ca3af 4px)'
                  }} />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-black font-bold text-sm">{app.name}</h3>
                  <p className="text-black text-xs">{app.description}</p>
                  <p className="text-gray-500 text-xs">last update: {app.lastUpdate} • Time: {app.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}