'use client';

import React, { useState, useEffect } from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';
import { performanceAnalytics } from '@/lib/performanceAnalytics';
import { bundleAnalyzer } from '@/lib/bundleAnalyzer';

interface PerformanceDashboardProps {
  show?: boolean;
  className?: string;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
  show = false, 
  className = '' 
}) => {
  const { config, fps, isLowPower } = usePerformance();
  const [metrics, setMetrics] = useState(performanceAnalytics.getMetrics());
  const [bundleAnalysis, setBundleAnalysis] = useState(bundleAnalyzer.getAnalysis());
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!show) return;

    // Start monitoring
    performanceAnalytics.startMonitoring();

    // Update metrics every second
    const interval = setInterval(() => {
      setMetrics(performanceAnalytics.getMetrics());
      setBundleAnalysis(bundleAnalyzer.getAnalysis());
      setRecommendations(performanceAnalytics.getRecommendations());
    }, 1000);

    return () => {
      clearInterval(interval);
      performanceAnalytics.stopMonitoring();
    };
  }, [show]);

  if (!show) return null;

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (ms: number) => {
    return ms.toFixed(2) + 'ms';
  };

  const getPerformanceColor = (value: number, thresholds: [number, number]) => {
    if (value <= thresholds[0]) return 'text-green-400';
    if (value <= thresholds[1]) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className={`fixed bottom-4 right-4 bg-black/90 text-white rounded-lg backdrop-blur-sm border border-gray-700 z-50 ${className}`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Performance Dashboard</h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isExpanded ? '▼' : '▶'}
          </button>
        </div>

        {/* Core Metrics */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">FPS:</span>
            <span className={`font-mono ${getPerformanceColor(fps, [50, 30])}`}>
              {fps}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm">Memory:</span>
            <span className="font-mono text-blue-400">
              {formatBytes(metrics.memoryUsage)}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm">Quality:</span>
            <span className={`font-mono ${
              config.quality === 'high' ? 'text-green-400' :
              config.quality === 'medium' ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {config.quality.toUpperCase()}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm">WebGL:</span>
            <span className={config.enableWebGL ? 'text-green-400' : 'text-red-400'}>
              {config.enableWebGL ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>

        {/* Expanded Metrics */}
        {isExpanded && (
          <div className="space-y-3 border-t border-gray-700 pt-3">
            {/* Core Web Vitals */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Core Web Vitals</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>FCP:</span>
                  <span className={getPerformanceColor(metrics.firstContentfulPaint, [1800, 3000])}>
                    {formatTime(metrics.firstContentfulPaint)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>LCP:</span>
                  <span className={getPerformanceColor(metrics.largestContentfulPaint, [2500, 4000])}>
                    {formatTime(metrics.largestContentfulPaint)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>CLS:</span>
                  <span className={getPerformanceColor(metrics.cumulativeLayoutShift, [0.1, 0.25])}>
                    {metrics.cumulativeLayoutShift.toFixed(3)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>FID:</span>
                  <span className={getPerformanceColor(metrics.firstInputDelay, [100, 300])}>
                    {formatTime(metrics.firstInputDelay)}
                  </span>
                </div>
              </div>
            </div>

            {/* Bundle Analysis */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Bundle Analysis</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Total Size:</span>
                  <span className="font-mono">{formatBytes(bundleAnalysis.totalSize)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Gzipped:</span>
                  <span className="font-mono">{formatBytes(bundleAnalysis.totalGzippedSize)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Optimization:</span>
                  <span className={getPerformanceColor(bundleAnalysis.optimizationScore, [70, 50])}>
                    {bundleAnalysis.optimizationScore}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Bundles:</span>
                  <span>{bundleAnalysis.bundles.length}</span>
                </div>
              </div>
            </div>

            {/* WebGL Performance */}
            <div>
              <h4 className="text-sm font-semibold mb-2">WebGL Performance</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>Render Time:</span>
                  <span className={getPerformanceColor(metrics.webglPerformance, [16, 33])}>
                    {formatTime(metrics.webglPerformance)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Image Load:</span>
                  <span className={getPerformanceColor(metrics.imageLoadTime, [1000, 3000])}>
                    {formatTime(metrics.imageLoadTime)}
                  </span>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold mb-2">Recommendations</h4>
                <div className="space-y-1">
                  {recommendations.slice(0, 3).map((rec, index) => (
                    <div key={index} className="text-xs text-yellow-400">
                      • {rec}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bundle Details */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Bundle Details</h4>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {bundleAnalysis.bundles.slice(0, 5).map((bundle, index) => (
                  <div key={index} className="text-xs flex justify-between">
                    <span className="truncate max-w-24">{bundle.name}</span>
                    <span className="font-mono">{formatBytes(bundle.size)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex gap-2 mt-3 pt-3 border-t border-gray-700">
          <button
            onClick={() => {
              const report = performanceAnalytics.generateReport(config.quality, isLowPower);
              console.log('Performance Report:', report);
            }}
            className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors"
          >
            Export
          </button>
          <button
            onClick={() => {
              performanceAnalytics.clearReports();
              setMetrics(performanceAnalytics.getMetrics());
            }}
            className="px-2 py-1 bg-gray-600 hover:bg-gray-700 rounded text-xs transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
