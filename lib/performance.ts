// Global performance monitoring and optimization utilities
export interface PerformanceConfig {
  enableWebGL: boolean;
  enableAnimations: boolean;
  enableParticles: boolean;
  maxFPS: number;
  devicePixelRatio: number;
  quality: 'low' | 'medium' | 'high';
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private frameCount = 0;
  private lastTime = 0;
  private fps = 60;
  private config: PerformanceConfig;
  private listeners: ((config: PerformanceConfig) => void)[] = [];

  private constructor() {
    this.config = this.detectOptimalConfig();
    this.startMonitoring();
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private getDefaultConfig(): PerformanceConfig {
    return {
      enableWebGL: false,
      enableAnimations: false,
      enableParticles: false,
      maxFPS: 30,
      devicePixelRatio: 1,
      quality: 'low'
    };
  }

  private detectOptimalConfig(): PerformanceConfig {
    // Check if we're in browser environment
    if (typeof window === 'undefined') {
      return this.getDefaultConfig();
    }
    
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    const isLowEnd = this.isLowEndDevice();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let quality: 'low' | 'medium' | 'high' = 'high';
    let enableWebGL = true;
    let enableAnimations = true;
    let enableParticles = true;
    let maxFPS = 60;
    let devicePixelRatio = window.devicePixelRatio || 1;

    if (prefersReducedMotion || isLowEnd) {
      quality = 'low';
      enableWebGL = false;
      enableAnimations = false;
      enableParticles = false;
      maxFPS = 30;
      devicePixelRatio = 0.5;
    } else if (isMobile) {
      quality = 'low';
      enableWebGL = true;
      enableAnimations = true;
      enableParticles = false;
      maxFPS = 30;
      devicePixelRatio = 0.8;
    } else if (isTablet) {
      quality = 'medium';
      enableWebGL = true;
      enableAnimations = true;
      enableParticles = true;
      maxFPS = 45;
      devicePixelRatio = 1;
    }

    return {
      enableWebGL,
      enableAnimations,
      enableParticles,
      maxFPS,
      devicePixelRatio,
      quality
    };
  }

  private isLowEndDevice(): boolean {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
    
    try {
      // Check hardware concurrency
      const cores = navigator.hardwareConcurrency || 2;
      if (cores < 4) return true;

      // Check memory (if available)
      const memory = (navigator as any).deviceMemory;
      if (memory && memory < 4) return true;

      // Check connection
      const connection = (navigator as any).connection;
      if (connection && connection.effectiveType === 'slow-2g') return true;

      return false;
    } catch {
      return false;
    }
  }

  private startMonitoring(): void {
    // Check if we're in browser environment
    if (typeof window === 'undefined' || typeof requestAnimationFrame === 'undefined') {
      return;
    }

    const monitor = (currentTime: number) => {
      this.frameCount++;
      
      if (currentTime - this.lastTime >= 1000) {
        this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
        this.frameCount = 0;
        this.lastTime = currentTime;

        // Auto-degrade if performance is poor
        if (this.fps < 20 && this.config.quality !== 'low') {
          this.degradePerformance();
        } else if (this.fps > 50 && this.config.quality === 'low') {
          this.improvePerformance();
        }
      }

      requestAnimationFrame(monitor);
    };

    requestAnimationFrame(monitor);
  }

  private degradePerformance(): void {
    if (this.config.quality === 'high') {
      this.config.quality = 'medium';
      this.config.maxFPS = 45;
      this.config.devicePixelRatio = Math.min(this.config.devicePixelRatio, 1);
    } else if (this.config.quality === 'medium') {
      this.config.quality = 'low';
      this.config.maxFPS = 30;
      this.config.devicePixelRatio = 0.5;
      this.config.enableParticles = false;
    } else {
      this.config.enableWebGL = false;
      this.config.enableAnimations = false;
    }

    this.notifyListeners();
  }

  private improvePerformance(): void {
    if (this.config.quality === 'low') {
      this.config.quality = 'medium';
      this.config.maxFPS = 45;
      this.config.devicePixelRatio = 1;
      this.config.enableParticles = true;
    } else if (this.config.quality === 'medium') {
      this.config.quality = 'high';
      this.config.maxFPS = 60;
      this.config.devicePixelRatio = window.devicePixelRatio || 1;
    }

    this.notifyListeners();
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.config));
  }

  subscribe(listener: (config: PerformanceConfig) => void): () => void {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  getConfig(): PerformanceConfig {
    return { ...this.config };
  }

  getFPS(): number {
    return this.fps;
  }

  shouldReduceMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  isLowPowerMode(): boolean {
    return this.config.quality === 'low' || this.fps < 30;
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Utility functions
export const shouldReduceMotion = () => performanceMonitor.shouldReduceMotion();
export const isLowPowerMode = () => performanceMonitor.isLowPowerMode();
export const getPerformanceConfig = () => performanceMonitor.getConfig();
export const getFPS = () => performanceMonitor.getFPS();
