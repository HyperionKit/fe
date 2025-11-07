'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';

// Import CSS alternatives
import PixelBlastCSS from './PixelBlastCSS';
import FaultyTerminalCSS from './FaultyTerminalCSS';
import GradientBlindsCSS from './GradientBlindsCSS';

interface AdaptiveBackgroundProps {
  type: 'pixelblast' | 'faultyterminal' | 'gradientblinds';
  className?: string;
  style?: React.CSSProperties;
  // Common props
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  speed?: 'slow' | 'medium' | 'fast';
  // Specific props
  waveColor?: [number, number, number];
  color1?: string;
  color2?: string;
  patternSize?: 'small' | 'medium' | 'large';
  blindSize?: 'small' | 'medium' | 'large';
  glitchIntensity?: 'low' | 'medium' | 'high';
  // WebGL specific props
  antialias?: boolean;
  liquid?: boolean;
  noiseAmount?: number;
  pixelSize?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
  mouseRadius?: number;
  enableMouseInteraction?: boolean;
  disableAnimation?: boolean;
  density?: number;
  opacity?: number;
}

const AdaptiveBackground: React.FC<AdaptiveBackgroundProps> = (props) => {
  const { config, isLowPower, fps } = usePerformance();
  const [useWebGL, setUseWebGL] = useState(false);
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(false);

  // Test WebGL availability and performance
  useEffect(() => {
    const testWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
        
        if (!gl) {
          setIsWebGLAvailable(false);
          setUseWebGL(false);
          return;
        }

        setIsWebGLAvailable(true);
        
        // Performance-based decision
        const shouldUseWebGL = 
          config.enableWebGL && 
          !isLowPower && 
          config.quality !== 'low' && 
          fps > 30;

        setUseWebGL(shouldUseWebGL);
      } catch (error) {
        console.warn('WebGL test failed:', error);
        setIsWebGLAvailable(false);
        setUseWebGL(false);
      }
    };

    testWebGL();
  }, [config.enableWebGL, isLowPower, config.quality, fps]);

  // Convert WebGL props to CSS props
  const cssProps = useMemo(() => {
    const baseProps = {
      className: props.className,
      style: props.style,
      intensity: props.intensity || 'medium',
      speed: props.speed || 'medium'
    };

    switch (props.type) {
      case 'pixelblast':
        return {
          ...baseProps,
          color: props.waveColor ? 
            `rgb(${props.waveColor[0] * 255}, ${props.waveColor[1] * 255}, ${props.waveColor[2] * 255})` : 
            props.color || '#B19EEF'
        };

      case 'faultyterminal':
        return {
          ...baseProps,
          color: props.color || '#00FF00',
          glitchIntensity: props.glitchIntensity || 'medium'
        };

      case 'gradientblinds':
        return {
          ...baseProps,
          color1: props.color1 || '#B19EEF',
          color2: props.color2 || '#E879F9',
          blindSize: props.blindSize || 'medium'
        };

      default:
        return baseProps;
    }
  }, [props]);

  // Render appropriate component
  // Note: WebGL components disabled due to React 19 compatibility issues
  // Dither component removed - use MP4 video backgrounds instead
  // Always use CSS alternatives for now
  const renderComponent = () => {
    switch (props.type) {
      case 'pixelblast':
        return <PixelBlastCSS {...cssProps} />;
      case 'faultyterminal':
        return <FaultyTerminalCSS {...cssProps} />;
      case 'gradientblinds':
        return <GradientBlindsCSS {...cssProps} />;
      default:
        return <div className={props.className} style={props.style} />;
    }
  };

  return (
    <div className="adaptive-background-wrapper">
      {renderComponent()}
      
      {/* Performance indicator (development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div 
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(255, 165, 0, 0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            zIndex: 1000,
            fontFamily: 'monospace'
          }}
        >
          CSS | FPS: {fps}
        </div>
      )}
    </div>
  );
};

export default AdaptiveBackground;

