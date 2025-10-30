"use client";
import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, wrapEffect } from '@react-three/postprocessing';
import { Effect } from 'postprocessing';
import * as THREE from 'three';
import { usePerformance } from '@/contexts/PerformanceContext';

import './gradient-blinds.css';

// Optimized vertex shader
const blindsVertexShader = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Optimized fragment shader
const blindsFragmentShader = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float speed;
uniform float frequency;
uniform vec3 color1;
uniform vec3 color2;
uniform float opacity;
uniform int quality;

varying vec2 vUv;

// Simplified random function
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Simplified noise function
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vec2 uv = vUv;
  
  // Blinds effect
  float blinds = sin(uv.y * frequency + time * speed) * 0.5 + 0.5;
  
  // Add some noise for texture
  float noiseValue = 0.0;
  if (quality > 0) {
    noiseValue = noise(uv * 10.0) * 0.1;
  }
  
  blinds += noiseValue;
  blinds = smoothstep(0.3, 0.7, blinds);
  
  // Color mixing
  vec3 col = mix(color1, color2, blinds);
  
  // Fade edges
  float fade = smoothstep(0.0, 0.1, uv.x) * smoothstep(0.0, 0.1, uv.y) *
               smoothstep(0.0, 0.1, 1.0 - uv.x) * smoothstep(0.0, 0.1, 1.0 - uv.y);
  
  col *= fade * opacity;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

const GradientBlindsEffect = ({ 
  speed = 0.5,
  frequency = 5.0,
  color1 = [0.2, 0.1, 0.4],
  color2 = [0.8, 0.3, 0.9],
  opacity = 0.8
}: {
  speed?: number;
  frequency?: number;
  color1?: [number, number, number];
  color2?: [number, number, number];
  opacity?: number;
}) => {
  const { size } = useThree();
  const { config, isLowPower } = usePerformance();
  const timeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  // Performance-based quality settings
  const quality = useMemo(() => {
    if (isLowPower) return 0; // Low quality
    if (config.quality === 'medium') return 1; // Medium quality
    return 2; // High quality
  }, [isLowPower, config.quality]);

  // Performance-based effect settings
  const effectiveSettings = useMemo(() => ({
    speed: isLowPower ? speed * 0.5 : speed,
    frequency: isLowPower ? frequency * 0.7 : frequency,
    opacity: isLowPower ? opacity * 0.8 : opacity
  }), [isLowPower, speed, frequency, opacity]);

  const effect = useMemo(() => {
    if (!config.enableWebGL) return null;

    return new Effect('GradientBlindsEffect', blindsFragmentShader, {
      uniforms: new Map([
        ['resolution', new THREE.Uniform(new THREE.Vector2(size.width, size.height))],
        ['time', new THREE.Uniform(0)],
        ['speed', new THREE.Uniform(effectiveSettings.speed)],
        ['frequency', new THREE.Uniform(effectiveSettings.frequency)],
        ['color1', new THREE.Uniform(new THREE.Vector3(...color1))],
        ['color2', new THREE.Uniform(new THREE.Vector3(...color2))],
        ['opacity', new THREE.Uniform(effectiveSettings.opacity)],
        ['quality', new THREE.Uniform(quality)]
      ])
    });
  }, [config.enableWebGL, size.width, size.height, effectiveSettings, color1, color2, quality]);

  useFrame((state, delta) => {
    if (!effect || !config.enableWebGL) return;

    // Throttle updates based on performance
    const now = state.clock.getElapsedTime();
    const targetFPS = config.maxFPS;
    const frameInterval = 1000 / targetFPS;
    
    if (now - lastFrameTimeRef.current < frameInterval / 1000) return;
    lastFrameTimeRef.current = now;

    timeRef.current += delta;
    
    const uniforms = effect.uniforms;
    if (uniforms) {
      const timeUniform = uniforms.get('time');
      if (timeUniform) timeUniform.value = timeRef.current;
    }
  });

  if (!config.enableWebGL) {
    return null;
  }

  return <primitive object={effect} />;
};

const useGradientBlindsEffect = wrapEffect(GradientBlindsEffect);

const GradientBlinds = ({ 
  speed = 0.5,
  frequency = 5.0,
  color1 = [0.2, 0.1, 0.4],
  color2 = [0.8, 0.3, 0.9],
  opacity = 0.8,
  className = '',
  style = {}
}: {
  speed?: number;
  frequency?: number;
  color1?: [number, number, number];
  color2?: [number, number, number];
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { config, isLowPower } = usePerformance();

  // Don't render if WebGL is disabled
  if (!config.enableWebGL) {
    return (
      <div 
        className={`gradient-blinds-fallback ${className}`}
        style={{
          background: `linear-gradient(45deg, rgba(${color1[0] * 255}, ${color1[1] * 255}, ${color1[2] * 255}, ${opacity}), rgba(${color2[0] * 255}, ${color2[1] * 255}, ${color2[2] * 255}, ${opacity}))`,
          ...style
        }}
      />
    );
  }

  return (
    <div className={`gradient-blinds-container ${className}`} style={style}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={isLowPower ? 0.5 : config.devicePixelRatio}
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: !isLowPower,
          alpha: true,
          powerPreference: isLowPower ? "low-power" : "high-performance"
        }}
      >
        <EffectComposer>
          <useGradientBlindsEffect
            speed={speed}
            frequency={frequency}
            color1={color1}
            color2={color2}
            opacity={opacity}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default GradientBlinds;
