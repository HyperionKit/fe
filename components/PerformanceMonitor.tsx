'use client';

import React, { useEffect, useState } from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';

interface PerformanceStats {
  fps: number;
  memoryUsage?: number;
  renderTime: number;
  isLowPower: boolean;
  quality: string;
}

const PerformanceMonitor: React.FC<{ show?: boolean }> = ({ show = false }) => {
  const { config, fps, isLowPower } = usePerformance();
  const [stats, setStats] = useState<PerformanceStats>({
    fps: 60,
    renderTime: 0,
    isLowPower: false,
    quality: 'high'
  });

  useEffect(() => {
    if (!show) return;

    const updateStats = () => {
      setStats({
        fps,
        memoryUsage: (performance as any).memory?.usedJSHeapSize,
        renderTime: performance.now(),
        isLowPower,
        quality: config.quality
      });
    };

    const interval = setInterval(updateStats, 1000);
    updateStats();

    return () => clearInterval(interval);
  }, [show, fps, isLowPower, config.quality]);

  if (!show) return null;

  const formatMemory = (bytes?: number) => {
    if (!bytes) return 'N/A';
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50 backdrop-blur-sm">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${fps > 50 ? 'bg-green-500' : fps > 30 ? 'bg-yellow-500' : 'bg-red-500'}`} />
          <span>FPS: {fps}</span>
        </div>
        <div>Memory: {formatMemory(stats.memoryUsage)}</div>
        <div>Quality: {stats.quality}</div>
        <div>Low Power: {isLowPower ? 'Yes' : 'No'}</div>
        <div>WebGL: {config.enableWebGL ? 'On' : 'Off'}</div>
        <div>Animations: {config.enableAnimations ? 'On' : 'Off'}</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
