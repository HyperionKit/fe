'use client';

import React from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';

interface DitherCSSProps {
  className?: string;
  style?: React.CSSProperties;
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  speed?: 'slow' | 'medium' | 'fast';
  patternSize?: 'small' | 'medium' | 'large';
}

const DitherCSS: React.FC<DitherCSSProps> = ({
  className = '',
  style = {},
  intensity = 'medium',
  color = '#B19EEF',
  speed = 'medium',
  patternSize = 'medium'
}) => {
  const { config, isLowPower } = usePerformance();

  // Performance-based settings
  const effectiveIntensity = isLowPower ? 'low' : intensity;
  const effectiveSpeed = isLowPower ? 'slow' : speed;
  const effectivePatternSize = isLowPower ? 'large' : patternSize;
  const shouldAnimate = config.enableAnimations;

  // Convert color to RGB values
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 177, g: 158, b: 239 };
  };

  const rgb = hexToRgb(color);
  const colorRgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, `;

  // Intensity-based opacity values
  const opacityValues = {
    low: { primary: 0.05, secondary: 0.02, tertiary: 0.01 },
    medium: { primary: 0.1, secondary: 0.05, tertiary: 0.02 },
    high: { primary: 0.15, secondary: 0.08, tertiary: 0.04 }
  };

  const opacity = opacityValues[effectiveIntensity];

  // Pattern size values
  const patternSizes = {
    small: '10px',
    medium: '20px',
    large: '30px'
  };

  const size = patternSizes[effectivePatternSize];

  // Speed-based animation duration
  const animationDuration = {
    slow: '8s',
    medium: '4s',
    fast: '2s'
  };

  const duration = animationDuration[effectiveSpeed];

  const cssStyles = {
    '--dither-color': color,
    '--dither-opacity-primary': opacity.primary,
    '--dither-opacity-secondary': opacity.secondary,
    '--dither-opacity-tertiary': opacity.tertiary,
    '--pattern-size': size,
    '--animation-duration': duration,
    '--animation-play-state': shouldAnimate ? 'running' : 'paused'
  } as React.CSSProperties;

  return (
    <div
      className={`dither-css ${className}`}
      style={{ ...cssStyles, ...style }}
      aria-label="Dither CSS background"
    >
      <style jsx>{`
        .dither-css {
          position: relative;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(45deg, 
              var(--dither-color) var(--dither-opacity-primary) 25%, 
              transparent 25%),
            linear-gradient(-45deg, 
              var(--dither-color) var(--dither-opacity-primary) 25%, 
              transparent 25%),
            linear-gradient(45deg, 
              transparent 75%, 
              var(--dither-color) var(--dither-opacity-secondary) 75%),
            linear-gradient(-45deg, 
              transparent 75%, 
              var(--dither-color) var(--dither-opacity-secondary) 75%);
          background-size: var(--pattern-size) var(--pattern-size);
          background-position: 0 0, 0 calc(var(--pattern-size) / 2), calc(var(--pattern-size) / 2) calc(var(--pattern-size) / -2), calc(var(--pattern-size) / -2) 0;
          animation: ditherMove var(--animation-duration) linear infinite;
          animation-play-state: var(--animation-play-state);
          transform: translateZ(0);
          will-change: background-position;
          backface-visibility: hidden;
        }

        .dither-css::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(90deg, 
              var(--dither-color) var(--dither-opacity-tertiary) 0%, 
              transparent 50%, 
              var(--dither-color) var(--dither-opacity-tertiary) 100%);
          background-size: calc(var(--pattern-size) * 2) calc(var(--pattern-size) * 2);
          animation: ditherWave calc(var(--animation-duration) * 1.5) ease-in-out infinite;
          animation-play-state: var(--animation-play-state);
        }

        .dither-css::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 25% 25%, var(--dither-color) var(--dither-opacity-tertiary), transparent 50%),
            radial-gradient(circle at 75% 75%, var(--dither-color) var(--dither-opacity-tertiary), transparent 50%);
          background-size: calc(var(--pattern-size) * 3) calc(var(--pattern-size) * 3);
          animation: ditherPulse calc(var(--animation-duration) * 3) ease-in-out infinite;
          animation-play-state: var(--animation-play-state);
        }

        @keyframes ditherMove {
          0% { 
            background-position: 0 0, 0 calc(var(--pattern-size) / 2), calc(var(--pattern-size) / 2) calc(var(--pattern-size) / -2), calc(var(--pattern-size) / -2) 0;
          }
          100% { 
            background-position: var(--pattern-size) var(--pattern-size), var(--pattern-size) calc(var(--pattern-size) * 1.5), calc(var(--pattern-size) * 1.5) calc(var(--pattern-size) * 0.5), calc(var(--pattern-size) * 0.5) var(--pattern-size);
          }
        }

        @keyframes ditherWave {
          0%, 100% { 
            transform: translateX(0) scale(1);
            opacity: 0.5;
          }
          50% { 
            transform: translateX(10px) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes ditherPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.2);
            opacity: 0.6;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .dither-css,
          .dither-css::before,
          .dither-css::after {
            animation: none;
            background: 
              linear-gradient(45deg, 
                var(--dither-color) var(--dither-opacity-primary) 25%, 
                transparent 25%);
          }
        }

        /* Low power mode optimizations */
        @media (max-width: 768px) {
          .dither-css {
            background-size: calc(var(--pattern-size) * 1.5) calc(var(--pattern-size) * 1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default DitherCSS;

