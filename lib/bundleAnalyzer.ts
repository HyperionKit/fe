// Advanced Bundle Analysis and Optimization
interface BundleInfo {
  name: string;
  size: number;
  gzippedSize: number;
  dependencies: string[];
  isOptimized: boolean;
  priority: 'high' | 'medium' | 'low';
}

interface BundleAnalysis {
  totalSize: number;
  totalGzippedSize: number;
  bundles: BundleInfo[];
  recommendations: string[];
  optimizationScore: number;
}

class BundleAnalyzer {
  private static instance: BundleAnalyzer;
  private bundles: BundleInfo[] = [];
  private isAnalyzing = false;

  private constructor() {
    this.analyzeBundles();
  }

  static getInstance(): BundleAnalyzer {
    if (!BundleAnalyzer.instance) {
      BundleAnalyzer.instance = new BundleAnalyzer();
    }
    return BundleAnalyzer.instance;
  }

  private async analyzeBundles(): Promise<void> {
    if (this.isAnalyzing) return;
    this.isAnalyzing = true;

    try {
      // Analyze loaded scripts
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      for (const script of scripts) {
        const src = script.getAttribute('src');
        if (src) {
          const bundleInfo = await this.analyzeScript(src);
          if (bundleInfo) {
            this.bundles.push(bundleInfo);
          }
        }
      }

      // Analyze loaded stylesheets
      const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      for (const stylesheet of stylesheets) {
        const href = stylesheet.getAttribute('href');
        if (href) {
          const bundleInfo = await this.analyzeStylesheet(href);
          if (bundleInfo) {
            this.bundles.push(bundleInfo);
          }
        }
      }

      console.log('Bundle analysis completed:', this.getAnalysis());
    } catch (error) {
      console.error('Bundle analysis failed:', error);
    } finally {
      this.isAnalyzing = false;
    }
  }

  private async analyzeScript(src: string): Promise<BundleInfo | null> {
    try {
      const response = await fetch(src, { method: 'HEAD' });
      const contentLength = response.headers.get('content-length');
      const contentEncoding = response.headers.get('content-encoding');
      
      const size = contentLength ? parseInt(contentLength) : 0;
      const gzippedSize = contentEncoding === 'gzip' ? size : Math.round(size * 0.3);
      
      return {
        name: this.extractBundleName(src),
        size,
        gzippedSize,
        dependencies: this.extractDependencies(src),
        isOptimized: this.isOptimized(src),
        priority: this.getPriority(src)
      };
    } catch (error) {
      console.warn('Failed to analyze script:', src, error);
      return null;
    }
  }

  private async analyzeStylesheet(href: string): Promise<BundleInfo | null> {
    try {
      const response = await fetch(href, { method: 'HEAD' });
      const contentLength = response.headers.get('content-length');
      const contentEncoding = response.headers.get('content-encoding');
      
      const size = contentLength ? parseInt(contentLength) : 0;
      const gzippedSize = contentEncoding === 'gzip' ? size : Math.round(size * 0.3);
      
      return {
        name: this.extractBundleName(href),
        size,
        gzippedSize,
        dependencies: [],
        isOptimized: this.isOptimized(href),
        priority: this.getPriority(href)
      };
    } catch (error) {
      console.warn('Failed to analyze stylesheet:', href, error);
      return null;
    }
  }

  private extractBundleName(src: string): string {
    const url = new URL(src, window.location.origin);
    const pathname = url.pathname;
    
    if (pathname.includes('_next/static/')) {
      const parts = pathname.split('/');
      return parts[parts.length - 1] || 'unknown';
    }
    
    return pathname.split('/').pop() || 'unknown';
  }

  private extractDependencies(src: string): string[] {
    // This is a simplified version - in production you'd parse the actual bundle
    const dependencies: string[] = [];
    
    if (src.includes('react')) dependencies.push('react');
    if (src.includes('three')) dependencies.push('three');
    if (src.includes('framer')) dependencies.push('framer-motion');
    if (src.includes('next')) dependencies.push('next');
    
    return dependencies;
  }

  private isOptimized(src: string): boolean {
    // Check if bundle is optimized
    return src.includes('_next/static/') && 
           (src.includes('.min.') || src.includes('chunks/'));
  }

  private getPriority(src: string): 'high' | 'medium' | 'low' {
    if (src.includes('_next/static/css/')) return 'high';
    if (src.includes('_next/static/js/')) return 'high';
    if (src.includes('_next/static/chunks/')) return 'medium';
    return 'low';
  }

  getAnalysis(): BundleAnalysis {
    const totalSize = this.bundles.reduce((sum, bundle) => sum + bundle.size, 0);
    const totalGzippedSize = this.bundles.reduce((sum, bundle) => sum + bundle.gzippedSize, 0);
    
    const recommendations = this.generateRecommendations();
    const optimizationScore = this.calculateOptimizationScore();

    return {
      totalSize,
      totalGzippedSize,
      bundles: [...this.bundles],
      recommendations,
      optimizationScore
    };
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    const analysis = this.getAnalysis();

    // Size recommendations
    if (analysis.totalSize > 2 * 1024 * 1024) { // 2MB
      recommendations.push('Total bundle size is large (>2MB), consider code splitting');
    }

    if (analysis.totalGzippedSize > 500 * 1024) { // 500KB
      recommendations.push('Gzipped size is large (>500KB), consider tree shaking');
    }

    // Bundle-specific recommendations
    const largeBundles = this.bundles.filter(bundle => bundle.size > 200 * 1024);
    if (largeBundles.length > 0) {
      recommendations.push(`Large bundles detected: ${largeBundles.map(b => b.name).join(', ')}`);
    }

    const unoptimizedBundles = this.bundles.filter(bundle => !bundle.isOptimized);
    if (unoptimizedBundles.length > 0) {
      recommendations.push(`Unoptimized bundles detected: ${unoptimizedBundles.map(b => b.name).join(', ')}`);
    }

    // Dependency recommendations
    const reactBundles = this.bundles.filter(bundle => bundle.dependencies.includes('react'));
    if (reactBundles.length > 1) {
      recommendations.push('Multiple React bundles detected, consider deduplication');
    }

    return recommendations;
  }

  private calculateOptimizationScore(): number {
    const analysis = this.getAnalysis();
    let score = 100;

    // Penalize large bundles
    if (analysis.totalSize > 2 * 1024 * 1024) score -= 20;
    if (analysis.totalGzippedSize > 500 * 1024) score -= 15;

    // Penalize unoptimized bundles
    const unoptimizedCount = this.bundles.filter(bundle => !bundle.isOptimized).length;
    score -= unoptimizedCount * 5;

    // Penalize duplicate dependencies
    const allDependencies = this.bundles.flatMap(bundle => bundle.dependencies);
    const uniqueDependencies = new Set(allDependencies);
    if (allDependencies.length > uniqueDependencies.size) {
      score -= 10;
    }

    return Math.max(0, score);
  }

  // Get bundle optimization suggestions
  getOptimizationSuggestions(): string[] {
    const suggestions: string[] = [];
    const analysis = this.getAnalysis();

    if (analysis.optimizationScore < 70) {
      suggestions.push('Enable code splitting for better performance');
      suggestions.push('Implement tree shaking to remove unused code');
      suggestions.push('Use dynamic imports for non-critical components');
    }

    if (analysis.totalSize > 1 * 1024 * 1024) {
      suggestions.push('Consider using a CDN for static assets');
      suggestions.push('Implement lazy loading for images and components');
    }

    const webglBundles = this.bundles.filter(bundle => 
      bundle.dependencies.some(dep => 
        ['three', 'ogl', 'postprocessing'].includes(dep)
      )
    );

    if (webglBundles.length > 0) {
      suggestions.push('Consider lazy loading WebGL components');
      suggestions.push('Implement performance-based quality settings for 3D effects');
    }

    return suggestions;
  }

  // Monitor bundle loading performance
  monitorBundleLoading(): void {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource' && entry.name.includes('_next/static/')) {
          console.log('Bundle loaded:', {
            name: entry.name,
            duration: entry.duration,
            size: entry.transferSize,
            cached: entry.transferSize === 0
          });
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });
  }

  // Get performance metrics for bundles
  getBundleMetrics(): Record<string, any> {
    const metrics: Record<string, any> = {};
    
    this.bundles.forEach(bundle => {
      metrics[bundle.name] = {
        size: bundle.size,
        gzippedSize: bundle.gzippedSize,
        compressionRatio: bundle.size > 0 ? (1 - bundle.gzippedSize / bundle.size) : 0,
        isOptimized: bundle.isOptimized,
        priority: bundle.priority
      };
    });

    return metrics;
  }
}

export const bundleAnalyzer = BundleAnalyzer.getInstance();
export type { BundleInfo, BundleAnalysis };
