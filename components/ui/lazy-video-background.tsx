'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface LazyVideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  loadingDelay?: number;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export function LazyVideoBackground({
  src,
  poster,
  className = '',
  style,
  priority = false,
  loadingDelay = 0,
  loop = true,
  muted = true,
  playsInline = true
}: LazyVideoBackgroundProps) {
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (priority) {
      setShouldLoad(true);
      return;
    }

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Auto-play video when it loads
  // Use separate effects to ensure dependency arrays remain consistent
  useEffect(() => {
    if (!shouldLoad || hasError || !videoRef.current) {
      return;
    }

    const video = videoRef.current;
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Video autoplay failed:', err);
        // Autoplay might fail, but that's okay
      });
    }
  }, [shouldLoad, hasError]);

  // Handle video error - memoized for stable reference
  const handleVideoError = useCallback(() => {
    console.error('Video failed to load:', src);
    setHasError(true);
  }, [src]);

  // Handle video load - memoized for stable reference
  const handleVideoLoad = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might fail, continue anyway
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={className} style={style}>
      {shouldLoad && !hasError ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          autoPlay={priority}
          preload="auto"
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
          className="absolute w-full h-full object-cover pointer-events-none"
          style={{
            zIndex: 1
          }}
        />
      ) : (
        <div 
          className="absolute w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black"
          style={{ zIndex: 1 }}
        />
      )}
    </div>
  );
}

