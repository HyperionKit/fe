'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface LazyImageBackgroundProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  loadingDelay?: number;
}

export function LazyImageBackground({
  src,
  alt,
  className = '',
  style,
  priority = false,
  loadingDelay = 0
}: LazyImageBackgroundProps) {
  const [shouldLoad, setShouldLoad] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setShouldLoad(true);
      return;
    }

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (loadingDelay > 0) {
            setTimeout(() => {
              setShouldLoad(true);
            }, loadingDelay);
          } else {
            setShouldLoad(true);
          }
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
  }, [priority, loadingDelay]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {shouldLoad ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover pointer-events-none"
          style={{
            zIndex: 1
          }}
          priority={priority}
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

