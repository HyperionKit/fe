"use client";
import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, wrapEffect } from '@react-three/postprocessing';
import { Effect } from 'postprocessing';
import * as THREE from 'three';
import { usePerformance } from '@/contexts/PerformanceContext';

// Optimized vertex shader
const asciiVertexShader = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Optimized fragment shader
const asciiFragmentShader = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform vec3 color;
uniform float waveAmplitude;
uniform float waveFrequency;
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
  
  // Wave effect
  float wave = sin(uv.x * waveFrequency + time) * waveAmplitude;
  uv.y += wave;
  
  // ASCII-like pattern
  vec2 grid = uv * 20.0;
  vec2 gridId = floor(grid);
  vec2 gridUv = fract(grid);
  
  // Reduce complexity based on quality
  float step = quality == 0 ? 0.2 : (quality == 1 ? 0.1 : 0.05);
  
  float ascii = 0.0;
  for (float i = 0.0; i < 1.0; i += step) {
    float char = random(gridId + i);
    float intensity = smoothstep(0.0, 0.1, char) * smoothstep(0.9, 0.8, char);
    ascii += intensity;
  }
  
  vec3 col = color * ascii;
  
  // Fade edges
  float fade = smoothstep(0.0, 0.1, uv.x) * smoothstep(0.0, 0.1, uv.y) *
               smoothstep(0.0, 0.1, 1.0 - uv.x) * smoothstep(0.0, 0.1, 1.0 - uv.y);
  
  col *= fade;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

const ASCIITextEffect = ({ 
  color = [1.0, 1.0, 1.0],
  waveAmplitude = 0.1,
  waveFrequency = 5.0
}: {
  color?: [number, number, number];
  waveAmplitude?: number;
  waveFrequency?: number;
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

  const effect = useMemo(() => {
    if (!config.enableWebGL) return null;

    return new Effect('ASCIITextEffect', asciiFragmentShader, {
      uniforms: new Map([
        ['resolution', new THREE.Uniform(new THREE.Vector2(size.width, size.height))],
        ['time', new THREE.Uniform(0)],
        ['color', new THREE.Uniform(new THREE.Vector3(...color))],
        ['waveAmplitude', new THREE.Uniform(waveAmplitude)],
        ['waveFrequency', new THREE.Uniform(waveFrequency)],
        ['quality', new THREE.Uniform(quality)]
      ])
    });
  }, [config.enableWebGL, size.width, size.height, color, waveAmplitude, waveFrequency, quality]);

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

const useASCIITextEffect = wrapEffect(ASCIITextEffect);

const ASCIIText = ({ 
  color = [1.0, 1.0, 1.0],
  waveAmplitude = 0.1,
  waveFrequency = 5.0,
  className = '',
  style = {}
}: {
  color?: [number, number, number];
  waveAmplitude?: number;
  waveFrequency?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { config, isLowPower } = usePerformance();

  // Don't render if WebGL is disabled
  if (!config.enableWebGL) {
    return (
      <div 
        className={`ascii-text-fallback ${className}`}
        style={{
          background: `linear-gradient(45deg, rgba(${color[0] * 255}, ${color[1] * 255}, ${color[2] * 255}, 0.1), rgba(0,0,0,0.9))`,
          ...style
        }}
      />
    );
  }

  return (
    <div className={`ascii-text-container ${className}`} style={style}>
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
          <useASCIITextEffect
            color={color}
            waveAmplitude={waveAmplitude}
            waveFrequency={waveFrequency}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default ASCIIText;
