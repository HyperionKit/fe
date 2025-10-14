'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { usePerformance } from '@/contexts/PerformanceContext';

interface OptimizedImageProps {
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
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
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
  style
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const { config, isLowPower } = usePerformance();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) {
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
  }, [priority]);

  // Performance-based quality adjustments
  const effectiveQuality = quality || (isLowPower ? 60 : 85);
  const effectiveSizes = sizes || (isLowPower ? '100vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw');

  // Generate blur placeholder if not provided
  const generateBlurDataURL = (w: number, h: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, '#1a1a1a');
      gradient.addColorStop(1, '#2a2a2a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    }
    return canvas.toDataURL();
  };

  const defaultBlurDataURL = blurDataURL || (width && height ? generateBlurDataURL(width, height) : undefined);

  if (!isInView && !priority) {
    return (
      <div
        ref={imgRef}
        className={`bg-gray-800 animate-pulse ${className}`}
        style={{ width, height, ...style }}
        aria-label="Loading image"
      />
    );
  }

  return (
    <div ref={imgRef} className={`relative ${className}`} style={style}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={effectiveQuality}
        placeholder={placeholder}
        blurDataURL={defaultBlurDataURL}
        sizes={effectiveSizes}
        onLoad={() => setIsLoaded(true)}
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

export default OptimizedImage;
