'use client';

import React, { useState } from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';

const PerformanceSettings: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { config, fps } = usePerformance();
  const [isOpen, setIsOpen] = useState(false);

  const qualityOptions = [
    { value: 'low', label: 'Low (30 FPS)', description: 'Best for low-end devices' },
    { value: 'medium', label: 'Medium (45 FPS)', description: 'Balanced performance' },
    { value: 'high', label: 'High (60 FPS)', description: 'Best visual quality' }
  ];

  const currentQuality = qualityOptions.find(opt => opt.value === config.quality) || qualityOptions[2];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors backdrop-blur-sm"
        aria-label="Performance settings"
      >
        <div className={`w-2 h-2 rounded-full ${fps > 50 ? 'bg-green-500' : fps > 30 ? 'bg-yellow-500' : 'bg-red-500'}`} />
        <span className="text-sm">{currentQuality.label}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-black/90 text-white rounded-lg p-4 backdrop-blur-sm border border-gray-700 z-50">
          <h3 className="font-semibold mb-3">Performance Settings</h3>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-300">Quality Level</label>
              <div className="mt-1 space-y-2">
                {qualityOptions.map((option) => (
                  <label key={option.value} className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="quality"
                      value={option.value}
                      checked={config.quality === option.value}
                      onChange={() => {
                        // This would need to be implemented in the performance context
                        console.log('Quality changed to:', option.value);
                      }}
                      className="mt-1"
                    />
                    <div>
                      <div className="text-sm font-medium">{option.label}</div>
                      <div className="text-xs text-gray-400">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-700">
              <div className="flex items-center justify-between text-sm">
                <span>Current FPS:</span>
                <span className={`font-mono ${fps > 50 ? 'text-green-400' : fps > 30 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {fps}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span>WebGL:</span>
                <span className={config.enableWebGL ? 'text-green-400' : 'text-red-400'}>
                  {config.enableWebGL ? 'Enabled' : 'Disabled'}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span>Animations:</span>
                <span className={config.enableAnimations ? 'text-green-400' : 'text-red-400'}>
                  {config.enableAnimations ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-700">
              <button
                onClick={() => {
                  // Reset to auto-detect
                  window.location.reload();
                }}
                className="w-full px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors"
              >
                Auto-Detect Performance
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceSettings;
