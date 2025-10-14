// Advanced Performance Analytics
interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  bundleSize: number;
  imageLoadTime: number;
  webglPerformance: number;
}

interface PerformanceReport {
  timestamp: number;
  userAgent: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  connectionType: string;
  metrics: PerformanceMetrics;
  quality: 'low' | 'medium' | 'high';
  isLowPower: boolean;
}

class PerformanceAnalytics {
  private static instance: PerformanceAnalytics;
  private metrics: PerformanceMetrics;
  private reports: PerformanceReport[] = [];
  private observer: PerformanceObserver | null = null;
  private isMonitoring = false;

  private constructor() {
    this.metrics = this.initializeMetrics();
  }

  static getInstance(): PerformanceAnalytics {
    if (!PerformanceAnalytics.instance) {
      PerformanceAnalytics.instance = new PerformanceAnalytics();
    }
    return PerformanceAnalytics.instance;
  }

  private initializeMetrics(): PerformanceMetrics {
    return {
      fps: 60,
      memoryUsage: 0,
      renderTime: 0,
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
      timeToInteractive: 0,
      bundleSize: 0,
      imageLoadTime: 0,
      webglPerformance: 0
    };
  }

  startMonitoring(): void {
    if (this.isMonitoring) return;
    this.isMonitoring = true;

    // Monitor Core Web Vitals
    this.observeCoreWebVitals();
    
    // Monitor memory usage
    this.observeMemoryUsage();
    
    // Monitor FPS
    this.observeFPS();
    
    // Monitor bundle size
    this.observeBundleSize();
    
    // Monitor image loading
    this.observeImageLoading();
    
    // Monitor WebGL performance
    this.observeWebGLPerformance();

    console.log('Performance analytics started');
  }

  stopMonitoring(): void {
    if (!this.isMonitoring) return;
    this.isMonitoring = false;

    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    console.log('Performance analytics stopped');
  }

  private observeCoreWebVitals(): void {
    // First Contentful Paint
    this.observePaintTiming('first-contentful-paint', (entry) => {
      this.metrics.firstContentfulPaint = entry.startTime;
    });

    // Largest Contentful Paint
    this.observeLCP((entry) => {
      this.metrics.largestContentfulPaint = entry.startTime;
    });

    // Cumulative Layout Shift
    this.observeCLS((entries) => {
      this.metrics.cumulativeLayoutShift = entries.reduce((sum, entry) => {
        return sum + (entry.value || 0);
      }, 0);
    });

    // First Input Delay
    this.observeFID((entry) => {
      this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
    });
  }

  private observePaintTiming(name: string, callback: (entry: PerformanceEntry) => void): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === name) {
            callback(entry);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }

  private observeLCP(callback: (entry: PerformanceEntry) => void): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        callback(lastEntry);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }

  private observeCLS(callback: (entries: PerformanceEntry[]) => void): void {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        callback([{ value: clsValue } as PerformanceEntry]);
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  }

  private observeFID(callback: (entry: PerformanceEntry) => void): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          callback(entry);
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    }
  }

  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory;
        this.metrics.memoryUsage = memory.usedJSHeapSize;
      }, 1000);
    }
  }

  private observeFPS(): void {
    let frameCount = 0;
    let lastTime = performance.now();

    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        this.metrics.fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFrames);
    };

    requestAnimationFrame(countFrames);
  }

  private observeBundleSize(): void {
    // Estimate bundle size from loaded scripts
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('_next/static/')) {
        // This is a rough estimate - in production you'd want more accurate measurement
        totalSize += 100000; // Assume 100KB per script
      }
    });
    
    this.metrics.bundleSize = totalSize;
  }

  private observeImageLoading(): void {
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    const startTime = performance.now();

    images.forEach(img => {
      if (img.complete) {
        loadedImages++;
      } else {
        img.addEventListener('load', () => {
          loadedImages++;
          if (loadedImages === images.length) {
            this.metrics.imageLoadTime = performance.now() - startTime;
          }
        });
      }
    });
  }

  private observeWebGLPerformance(): void {
    // Monitor WebGL performance through canvas elements
    const canvases = document.querySelectorAll('canvas');
    let totalWebGLTime = 0;
    let webGLFrames = 0;

    canvases.forEach(canvas => {
      const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
      if (gl) {
        const startTime = performance.now();
        const render = () => {
          const frameTime = performance.now() - startTime;
          totalWebGLTime += frameTime;
          webGLFrames++;
          
          if (webGLFrames > 0) {
            this.metrics.webglPerformance = totalWebGLTime / webGLFrames;
          }
          
          requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
      }
    });
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  generateReport(quality: 'low' | 'medium' | 'high', isLowPower: boolean): PerformanceReport {
    const report: PerformanceReport = {
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      deviceType: this.getDeviceType(),
      connectionType: this.getConnectionType(),
      metrics: this.getMetrics(),
      quality,
      isLowPower
    };

    this.reports.push(report);
    return report;
  }

  private getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  private getConnectionType(): string {
    const connection = (navigator as any).connection;
    return connection ? connection.effectiveType : 'unknown';
  }

  getReports(): PerformanceReport[] {
    return [...this.reports];
  }

  clearReports(): void {
    this.reports = [];
  }

  // Send reports to analytics service
  sendReports(endpoint: string): void {
    if (this.reports.length === 0) return;

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reports: this.reports,
        timestamp: Date.now()
      })
    }).catch(error => {
      console.error('Failed to send performance reports:', error);
    });
  }

  // Get performance recommendations
  getRecommendations(): string[] {
    const recommendations: string[] = [];
    const metrics = this.metrics;

    if (metrics.fps < 30) {
      recommendations.push('Consider reducing animation complexity or enabling low-power mode');
    }

    if (metrics.memoryUsage > 100 * 1024 * 1024) { // 100MB
      recommendations.push('Memory usage is high, consider optimizing images and reducing WebGL effects');
    }

    if (metrics.largestContentfulPaint > 2500) {
      recommendations.push('LCP is slow, consider optimizing images and reducing bundle size');
    }

    if (metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Layout shift detected, ensure images have proper dimensions');
    }

    if (metrics.firstInputDelay > 100) {
      recommendations.push('Input delay is high, consider reducing JavaScript execution time');
    }

    return recommendations;
  }
}

export const performanceAnalytics = PerformanceAnalytics.getInstance();
export type { PerformanceMetrics, PerformanceReport };
