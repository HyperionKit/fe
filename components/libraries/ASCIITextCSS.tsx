'use client';

import React from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';

interface ASCIITextCSSProps {
  className?: string;
  style?: React.CSSProperties;
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  speed?: 'slow' | 'medium' | 'fast';
  patternSize?: 'small' | 'medium' | 'large';
}

const ASCIITextCSS: React.FC<ASCIITextCSSProps> = ({
  className = '',
  style = {},
  intensity = 'medium',
  color = '#FFFFFF',
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
    } : { r: 255, g: 255, b: 255 };
  };

  const rgb = hexToRgb(color);
  const colorRgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, `;

  // Intensity-based opacity values
  const opacityValues = {
    low: { primary: 0.02, secondary: 0.01, tertiary: 0.005 },
    medium: { primary: 0.05, secondary: 0.02, tertiary: 0.01 },
    high: { primary: 0.08, secondary: 0.04, tertiary: 0.02 }
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
    slow: '6s',
    medium: '3s',
    fast: '1.5s'
  };

  const duration = animationDuration[effectiveSpeed];

  const cssStyles = {
    '--ascii-color': color,
    '--ascii-opacity-primary': opacity.primary,
    '--ascii-opacity-secondary': opacity.secondary,
    '--ascii-opacity-tertiary': opacity.tertiary,
    '--pattern-size': size,
    '--animation-duration': duration,
    '--animation-play-state': shouldAnimate ? 'running' : 'paused'
  } as React.CSSProperties;

  return (
    <div
      className={`ascii-text-css ${className}`}
      style={{ ...cssStyles, ...style }}
      aria-label="ASCII Text CSS background"
    >
      <style jsx>{`
        .ascii-text-css {
          position: relative;
          width: 100%;
          height: 100%;
          background: 
            repeating-linear-gradient(
              0deg,
              var(--ascii-color) var(--ascii-opacity-primary) 0px,
              var(--ascii-color) var(--ascii-opacity-primary) 1px,
              transparent 1px,
              transparent 2px
            ),
            repeating-linear-gradient(
              90deg,
              var(--ascii-color) var(--ascii-opacity-primary) 0px,
              var(--ascii-color) var(--ascii-opacity-primary) 1px,
              transparent 1px,
              transparent 2px
            );
          background-size: var(--pattern-size) var(--pattern-size);
          animation: asciiWave var(--animation-duration) ease-in-out infinite;
          animation-play-state: var(--animation-play-state);
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
        }

        .ascii-text-css::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              45deg,
              var(--ascii-color) var(--ascii-opacity-secondary) 0px,
              var(--ascii-color) var(--ascii-opacity-secondary) 1px,
              transparent 1px,
              transparent 3px
            );
          background-size: calc(var(--pattern-size) * 0.5) calc(var(--pattern-size) * 0.5);
          animation: asciiDiagonal calc(var(--animation-duration) * 1.5) ease-in-out infinite;
          animation-play-state: var(--animation-play-state);
        }

        .ascii-text-css::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 25% 25%, var(--ascii-color) var(--ascii-opacity-tertiary), transparent 50%),
            radial-gradient(circle at 75% 75%, var(--ascii-color) var(--ascii-opacity-tertiary), transparent 50%);
          background-size: calc(var(--pattern-size) * 2) calc(var(--pattern-size) * 2);
          animation: asciiPulse calc(var(--animation-duration) * 2) ease-in-out infinite;
          animation-play-state: var(--animation-play-state);
        }

        @keyframes asciiWave {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.8;
          }
          25% { 
            transform: translateY(-5px) scale(1.05);
            opacity: 1;
          }
          50% { 
            transform: translateY(-10px) scale(0.95);
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-5px) scale(1.02);
            opacity: 0.9;
          }
        }

        @keyframes asciiDiagonal {
          0%, 100% { 
            transform: translateX(0) rotate(0deg);
            opacity: 0.5;
          }
          50% { 
            transform: translateX(10px) rotate(180deg);
            opacity: 0.8;
          }
        }

        @keyframes asciiPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .ascii-text-css,
          .ascii-text-css::before,
          .ascii-text-css::after {
            animation: none;
            background: 
              repeating-linear-gradient(
                0deg,
                var(--ascii-color) var(--ascii-opacity-primary) 0px,
                var(--ascii-color) var(--ascii-opacity-primary) 1px,
                transparent 1px,
                transparent 2px
              );
          }
        }

        /* Low power mode optimizations */
        @media (max-width: 768px) {
          .ascii-text-css {
            background-size: calc(var(--pattern-size) * 1.5) calc(var(--pattern-size) * 1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default ASCIITextCSS;

