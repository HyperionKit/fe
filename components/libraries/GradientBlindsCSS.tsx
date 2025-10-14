'use client';

import React from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';

interface GradientBlindsCSSProps {
  className?: string;
  style?: React.CSSProperties;
  intensity?: 'low' | 'medium' | 'high';
  color1?: string;
  color2?: string;
  speed?: 'slow' | 'medium' | 'fast';
  blindSize?: 'small' | 'medium' | 'large';
}

const GradientBlindsCSS: React.FC<GradientBlindsCSSProps> = ({
  className = '',
  style = {},
  intensity = 'medium',
  color1 = '#B19EEF',
  color2 = '#E879F9',
  speed = 'medium',
  blindSize = 'medium'
}) => {
  const { config, isLowPower } = usePerformance();

  // Performance-based settings
  const effectiveIntensity = isLowPower ? 'low' : intensity;
  const effectiveSpeed = isLowPower ? 'slow' : speed;
  const effectiveBlindSize = isLowPower ? 'large' : blindSize;
  const shouldAnimate = config.enableAnimations;

  // Convert colors to RGB values
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 177, g: 158, b: 239 };
  };

  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  // Intensity-based opacity values
  const opacityValues = {
    low: { primary: 0.1, secondary: 0.05, tertiary: 0.02 },
    medium: { primary: 0.2, secondary: 0.1, tertiary: 0.05 },
    high: { primary: 0.3, secondary: 0.15, tertiary: 0.08 }
  };

  const opacity = opacityValues[effectiveIntensity];

  // Blind size values
  const blindSizes = {
    small: '10px',
    medium: '20px',
    large: '30px'
  };

  const size = blindSizes[effectiveBlindSize];

  // Speed-based animation duration
  const animationDuration = {
    slow: '8s',
    medium: '4s',
    fast: '2s'
  };

  const duration = animationDuration[effectiveSpeed];

  const cssStyles = {
    '--blind-color1': color1,
    '--blind-color2': color2,
    '--blind-opacity-primary': opacity.primary,
    '--blind-opacity-secondary': opacity.secondary,
    '--blind-opacity-tertiary': opacity.tertiary,
    '--blind-size': size,
    '--animation-duration': duration,
    '--animation-play-state': shouldAnimate ? 'running' : 'paused'
  } as React.CSSProperties;

  return (
    <div
      className={`gradient-blinds-css ${className}`}
      style={{ ...cssStyles, ...style }}
      aria-label="Gradient Blinds CSS background"
    >
      <style jsx>{`
        .gradient-blinds-css {
          position: relative;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(
              90deg,
              var(--blind-color1) var(--blind-opacity-primary) 0%,
              var(--blind-color2) var(--blind-opacity-secondary) 25%,
              var(--blind-color1) var(--blind-opacity-primary) 50%,
              var(--blind-color2) var(--blind-opacity-secondary) 75%,
              var(--blind-color1) var(--blind-opacity-primary) 100%
            );
          background-size: 100% var(--blind-size);
          animation: blindsMove var(--animation-duration) ease-in-out infinite;
          animation-play-state: var(--animation-play-state);
          transform: translateZ(0);
          will-change: background-position;
          backface-visibility: hidden;
        }

        .gradient-blinds-css::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(
              0deg,
              var(--blind-color2) var(--blind-opacity-tertiary) 0%,
              transparent 50%,
              var(--blind-color1) var(--blind-opacity-tertiary) 100%
            );
          background-size: 100% calc(var(--blind-size) * 0.5);
          animation: blindsOverlay calc(var(--animation-duration) * 1.5) ease-in-out infinite;
          animation-play-state: var(--animation-play-state);
        }

        .gradient-blinds-css::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent calc(var(--blind-size) - 2px),
              var(--blind-color1) var(--blind-opacity-secondary) calc(var(--blind-size) - 2px),
              var(--blind-color1) var(--blind-opacity-secondary) var(--blind-size)
            );
          animation: blindsEdge calc(var(--animation-duration) * 0.5) ease-in-out infinite;
          animation-play-state: var(--animation-play-state);
        }

        @keyframes blindsMove {
          0%, 100% { 
            background-position: 0 0;
            opacity: 0.8;
          }
          25% { 
            background-position: 0 calc(var(--blind-size) * 0.25);
            opacity: 1;
          }
          50% { 
            background-position: 0 calc(var(--blind-size) * 0.5);
            opacity: 0.6;
          }
          75% { 
            background-position: 0 calc(var(--blind-size) * 0.75);
            opacity: 0.9;
          }
        }

        @keyframes blindsOverlay {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-5px) scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes blindsEdge {
          0%, 100% { 
            opacity: 0.3;
            transform: scaleX(1);
          }
          50% { 
            opacity: 0.6;
            transform: scaleX(1.1);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .gradient-blinds-css,
          .gradient-blinds-css::before,
          .gradient-blinds-css::after {
            animation: none;
            background: 
              linear-gradient(
                90deg,
                var(--blind-color1) var(--blind-opacity-primary) 0%,
                var(--blind-color2) var(--blind-opacity-secondary) 50%,
                var(--blind-color1) var(--blind-opacity-primary) 100%
              );
          }
        }

        /* Low power mode optimizations */
        @media (max-width: 768px) {
          .gradient-blinds-css {
            background-size: 100% calc(var(--blind-size) * 1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default GradientBlindsCSS;

