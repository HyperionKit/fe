'use client';

import React from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';

interface PixelBlastCSSProps {
  className?: string;
  style?: React.CSSProperties;
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  speed?: 'slow' | 'medium' | 'fast';
}

const PixelBlastCSS: React.FC<PixelBlastCSSProps> = ({
  className = '',
  style = {},
  intensity = 'medium',
  color = '#B19EEF',
  speed = 'medium'
}) => {
  const { config, isLowPower } = usePerformance();

  // Performance-based settings
  const effectiveIntensity = isLowPower ? 'low' : intensity;
  const effectiveSpeed = isLowPower ? 'slow' : speed;
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
    low: { primary: 0.1, secondary: 0.05, tertiary: 0.02 },
    medium: { primary: 0.2, secondary: 0.1, tertiary: 0.05 },
    high: { primary: 0.3, secondary: 0.15, tertiary: 0.08 }
  };

  const opacity = opacityValues[effectiveIntensity];

  // Speed-based animation duration
  const animationDuration = {
    slow: '12s',
    medium: '8s',
    fast: '4s'
  };

  const duration = animationDuration[effectiveSpeed];

  const cssStyles = {
    '--pixel-color': color,
    '--pixel-opacity-primary': opacity.primary,
    '--pixel-opacity-secondary': opacity.secondary,
    '--pixel-opacity-tertiary': opacity.tertiary,
    '--animation-duration': duration,
    '--animation-play-state': shouldAnimate ? 'running' : 'paused'
  } as React.CSSProperties;

  return (
    <div
      className={`pixel-blast-css ${className}`}
      style={{ ...cssStyles, ...style }}
      aria-label="PixelBlast CSS background"
    >
      <style jsx>{`
        .pixel-blast-css {
          position: relative;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, var(--pixel-color) var(--pixel-opacity-primary), transparent 50%),
            radial-gradient(circle at 80% 20%, var(--pixel-color) var(--pixel-opacity-secondary), transparent 50%),
            radial-gradient(circle at 40% 80%, var(--pixel-color) var(--pixel-opacity-tertiary), transparent 50%),
            radial-gradient(circle at 60% 30%, var(--pixel-color) var(--pixel-opacity-secondary), transparent 40%),
            radial-gradient(circle at 30% 70%, var(--pixel-color) var(--pixel-opacity-primary), transparent 60%);
          background-size: 200px 200px, 150px 150px, 180px 180px, 120px 120px, 160px 160px;
          background-position: 0% 0%, 100% 0%, 50% 100%, 0% 50%, 100% 50%;
          animation: pixelFloat var(--animation-duration) ease-in-out infinite;
          animation-play-state: var(--animation-play-state);
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
        }

        .pixel-blast-css::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 70% 80%, var(--pixel-color) var(--pixel-opacity-tertiary), transparent 30%),
            radial-gradient(circle at 10% 20%, var(--pixel-color) var(--pixel-opacity-secondary), transparent 40%);
          background-size: 100px 100px, 80px 80px;
          background-position: 0% 0%, 100% 100%;
          animation: pixelFloatSecondary calc(var(--animation-duration) * 1.5) ease-in-out infinite reverse;
          animation-play-state: var(--animation-play-state);
        }

        .pixel-blast-css::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 50% 50%, var(--pixel-color) var(--pixel-opacity-primary), transparent 70%);
          background-size: 300px 300px;
          animation: pixelPulse calc(var(--animation-duration) * 2) ease-in-out infinite;
          animation-play-state: var(--animation-play-state);
        }

        @keyframes pixelFloat {
          0%, 100% { 
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
            opacity: 0.8;
          }
          25% { 
            transform: translate3d(10px, -15px, 0) rotate(90deg) scale(1.1);
            opacity: 1;
          }
          50% { 
            transform: translate3d(-5px, -25px, 0) rotate(180deg) scale(0.9);
            opacity: 0.6;
          }
          75% { 
            transform: translate3d(15px, -10px, 0) rotate(270deg) scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes pixelFloatSecondary {
          0%, 100% { 
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.5;
          }
          50% { 
            transform: translate3d(-20px, 10px, 0) scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes pixelPulse {
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
          .pixel-blast-css,
          .pixel-blast-css::before,
          .pixel-blast-css::after {
            animation: none;
            background: 
              radial-gradient(circle at 50% 50%, var(--pixel-color) var(--pixel-opacity-primary), transparent 60%);
          }
        }

        /* Low power mode optimizations */
        @media (max-width: 768px) {
          .pixel-blast-css {
            background-size: 100px 100px, 75px 75px, 90px 90px, 60px 60px, 80px 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default PixelBlastCSS;

