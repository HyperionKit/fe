'use client';

import React from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';

interface FaultyTerminalCSSProps {
  className?: string;
  style?: React.CSSProperties;
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  speed?: 'slow' | 'medium' | 'fast';
  glitchIntensity?: 'low' | 'medium' | 'high';
}

const FaultyTerminalCSS: React.FC<FaultyTerminalCSSProps> = ({
  className = '',
  style = {},
  intensity = 'medium',
  color = '#00FF00',
  speed = 'medium',
  glitchIntensity = 'medium'
}) => {
  const { config, isLowPower } = usePerformance();

  // Performance-based settings
  const effectiveIntensity = isLowPower ? 'low' : intensity;
  const effectiveSpeed = isLowPower ? 'slow' : speed;
  const effectiveGlitchIntensity = isLowPower ? 'low' : glitchIntensity;
  const shouldAnimate = config.enableAnimations;

  // Convert color to RGB values
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 255, b: 0 };
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

  // Glitch intensity values
  const glitchValues = {
    low: { offset: '1px', duration: '0.2s' },
    medium: { offset: '2px', duration: '0.1s' },
    high: { offset: '3px', duration: '0.05s' }
  };

  const glitch = glitchValues[effectiveGlitchIntensity];

  // Speed-based animation duration
  const animationDuration = {
    slow: '4s',
    medium: '2s',
    fast: '1s'
  };

  const duration = animationDuration[effectiveSpeed];

  const cssStyles = {
    '--terminal-color': color,
    '--terminal-opacity-primary': opacity.primary,
    '--terminal-opacity-secondary': opacity.secondary,
    '--terminal-opacity-tertiary': opacity.tertiary,
    '--glitch-offset': glitch.offset,
    '--glitch-duration': glitch.duration,
    '--animation-duration': duration,
    '--animation-play-state': shouldAnimate ? 'running' : 'paused'
  } as React.CSSProperties;

  return (
    <div
      className={`faulty-terminal-css ${className}`}
      style={{ ...cssStyles, ...style }}
      aria-label="Faulty Terminal CSS background"
    >
      <style jsx>{`
        .faulty-terminal-css {
          position: relative;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(90deg, 
              var(--terminal-color) var(--terminal-opacity-primary) 0%, 
              transparent 50%, 
              var(--terminal-color) var(--terminal-opacity-primary) 100%);
          background-size: 2px 100%;
          animation: terminalScan var(--animation-duration) linear infinite;
          animation-play-state: var(--animation-play-state);
          transform: translateZ(0);
          will-change: background-position;
          backface-visibility: hidden;
        }

        .faulty-terminal-css::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              var(--terminal-color) var(--terminal-opacity-tertiary) 2px,
              var(--terminal-color) var(--terminal-opacity-tertiary) 4px
            );
          animation: terminalGlitch var(--glitch-duration) infinite;
          animation-play-state: var(--animation-play-state);
        }

        .faulty-terminal-css::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(
              0deg,
              var(--terminal-color) var(--terminal-opacity-secondary) 0%,
              transparent 50%,
              var(--terminal-color) var(--terminal-opacity-secondary) 100%
            );
          background-size: 100% 4px;
          animation: terminalFlicker calc(var(--animation-duration) * 0.5) ease-in-out infinite;
          animation-play-state: var(--animation-play-state);
        }

        @keyframes terminalScan {
          0% { 
            background-position: 0 0;
            opacity: 0.8;
          }
          50% { 
            background-position: 0 50%;
            opacity: 1;
          }
          100% { 
            background-position: 0 100%;
            opacity: 0.6;
          }
        }

        @keyframes terminalGlitch {
          0%, 100% { 
            transform: translateX(0);
            opacity: 1;
          }
          25% { 
            transform: translateX(var(--glitch-offset));
            opacity: 0.8;
          }
          50% { 
            transform: translateX(0);
            opacity: 1;
          }
          75% { 
            transform: translateX(calc(var(--glitch-offset) * -1));
            opacity: 0.9;
          }
        }

        @keyframes terminalFlicker {
          0%, 100% { 
            opacity: 0.3;
            transform: scaleY(1);
          }
          50% { 
            opacity: 0.8;
            transform: scaleY(1.1);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .faulty-terminal-css,
          .faulty-terminal-css::before,
          .faulty-terminal-css::after {
            animation: none;
            background: 
              linear-gradient(90deg, 
                var(--terminal-color) var(--terminal-opacity-primary) 0%, 
                transparent 50%, 
                var(--terminal-color) var(--terminal-opacity-primary) 100%);
          }
        }

        /* Low power mode optimizations */
        @media (max-width: 768px) {
          .faulty-terminal-css {
            background-size: 3px 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default FaultyTerminalCSS;

