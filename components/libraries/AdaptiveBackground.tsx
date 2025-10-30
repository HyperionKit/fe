'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { usePerformance } from '@/contexts/PerformanceContext';

// Import CSS alternatives
import PixelBlastCSS from './PixelBlastCSS';
import DitherCSS from './DitherCSS';
import FaultyTerminalCSS from './FaultyTerminalCSS';
import ASCIITextCSS from './ASCIITextCSS';
import GradientBlindsCSS from './GradientBlindsCSS';

// Import WebGL components (if available)
import PixelBlast from './PixelBlast';
import Dither from './Dither';
import FaultyTerminal from './FaultyTerminal';
import ASCIIText from './ASCIIText';
import GradientBlinds from './GradientBlinds';

interface AdaptiveBackgroundProps {
  type: 'pixelblast' | 'dither' | 'faultyterminal' | 'asciitext' | 'gradientblinds';
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

      case 'dither':
        return {
          ...baseProps,
          color: props.waveColor ? 
            `rgb(${props.waveColor[0] * 255}, ${props.waveColor[1] * 255}, ${props.waveColor[2] * 255})` : 
            props.color || '#B19EEF',
          patternSize: props.patternSize || 'medium'
        };

      case 'faultyterminal':
        return {
          ...baseProps,
          color: props.color || '#00FF00',
          glitchIntensity: props.glitchIntensity || 'medium'
        };

      case 'asciitext':
        return {
          ...baseProps,
          color: props.color || '#FFFFFF',
          patternSize: props.patternSize || 'medium'
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
  const renderComponent = () => {
    if (!useWebGL || !isWebGLAvailable) {
      // Use CSS alternatives
      switch (props.type) {
        case 'pixelblast':
          return <PixelBlastCSS {...cssProps} />;
        case 'dither':
          return <DitherCSS {...cssProps} />;
        case 'faultyterminal':
          return <FaultyTerminalCSS {...cssProps} />;
        case 'asciitext':
          return <ASCIITextCSS {...cssProps} />;
        case 'gradientblinds':
          return <GradientBlindsCSS {...cssProps} />;
        default:
          return <div className={props.className} style={props.style} />;
      }
    } else {
      // Use WebGL components
      switch (props.type) {
        case 'pixelblast':
          return <PixelBlast {...props} />;
        case 'dither':
          return <Dither {...props} />;
        case 'faultyterminal':
          return <FaultyTerminal {...props} />;
        case 'asciitext':
          return <ASCIIText {...props} />;
        case 'gradientblinds':
          return <GradientBlinds {...props} />;
        default:
          return <div className={props.className} style={props.style} />;
      }
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
            background: useWebGL ? 'rgba(0, 255, 0, 0.8)' : 'rgba(255, 165, 0, 0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            zIndex: 1000,
            fontFamily: 'monospace'
          }}
        >
          {useWebGL ? 'WebGL' : 'CSS'} | FPS: {fps}
        </div>
      )}
    </div>
  );
};

export default AdaptiveBackground;

