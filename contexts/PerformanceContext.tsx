'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { PerformanceConfig, performanceMonitor } from '@/lib/performance';

interface PerformanceContextType {
  config: PerformanceConfig;
  fps: number;
  isLowPower: boolean;
  shouldReduceMotion: boolean;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export const PerformanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<PerformanceConfig>(performanceMonitor.getConfig());
  const [fps, setFPS] = useState<number>(60);
  const [isLowPower, setIsLowPower] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = performanceMonitor.subscribe((newConfig) => {
      setConfig(newConfig);
      setIsLowPower(performanceMonitor.isLowPowerMode());
    });

    // Update FPS periodically
    const fpsInterval = setInterval(() => {
      setFPS(performanceMonitor.getFPS());
    }, 1000);

    return () => {
      unsubscribe();
      clearInterval(fpsInterval);
    };
  }, []);

  const shouldReduceMotion = performanceMonitor.shouldReduceMotion();

  return (
    <PerformanceContext.Provider value={{
      config,
      fps,
      isLowPower,
      shouldReduceMotion
    }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
};
