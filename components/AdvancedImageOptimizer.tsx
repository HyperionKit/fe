'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { usePerformance } from '@/contexts/PerformanceContext';

interface AdvancedImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  fallback?: React.ReactNode;
  lazy?: boolean;
  responsive?: boolean;
  webp?: boolean;
  avif?: boolean;
}

const AdvancedImageOptimizer: React.FC<AdvancedImageOptimizerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  fill = false,
  style,
  fallback,
  lazy = true,
  responsive = true,
  webp = true,
  avif = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLDivElement>(null);
  const { config, isLowPower } = usePerformance();

  // Performance-based quality adjustments
  const effectiveQuality = useMemo(() => {
    if (quality !== undefined) return quality;
    if (isLowPower) return 60;
    if (config.quality === 'medium') return 75;
    return 85;
  }, [quality, isLowPower, config.quality]);

  // Performance-based sizing
  const effectiveSizes = useMemo(() => {
    if (sizes) return sizes;
    if (isLowPower) return '100vw';
    if (config.quality === 'medium') return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
    return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  }, [sizes, isLowPower, config.quality]);

  // Generate optimized src based on performance
  const optimizedSrc = useMemo(() => {
    if (!webp && !avif) return src;
    
    // In a real implementation, you'd use a service like Cloudinary or ImageKit
    // For now, we'll return the original src
    return src;
  }, [src, webp, avif]);

  // Generate blur placeholder
  const generateBlurDataURL = useMemo(() => {
    if (blurDataURL) return blurDataURL;
    if (!width || !height) return undefined;
    
    const canvas = document.createElement('canvas');
    canvas.width = Math.min(width, 40);
    canvas.height = Math.min(height, 40);
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1a1a1a');
      gradient.addColorStop(1, '#2a2a2a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    return canvas.toDataURL();
  }, [blurDataURL, width, height]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !lazy) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, lazy]);

  // Error handling
  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Don't render if not in view and lazy loading is enabled
  if (!isInView && lazy) {
    return (
      <div
        ref={imgRef}
        className={`bg-gray-800 animate-pulse ${className}`}
        style={{ width, height, ...style }}
        aria-label="Loading image"
      />
    );
  }

  // Show fallback on error
  if (hasError && fallback) {
    return <>{fallback}</>;
  }

  // Show fallback on error without custom fallback
  if (hasError) {
    return (
      <div
        className={`bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
        aria-label="Image failed to load"
      >
        <div className="text-gray-500 text-sm">Failed to load image</div>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative ${className}`} style={style}>
      <Image
        src={optimizedSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={effectiveQuality}
        placeholder={placeholder}
        blurDataURL={generateBlurDataURL}
        sizes={effectiveSizes}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          objectFit: 'cover',
          ...(fill && { width: '100%', height: '100%' })
        }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default AdvancedImageOptimizer;
