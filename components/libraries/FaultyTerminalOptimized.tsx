"use client";
import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, wrapEffect } from '@react-three/postprocessing';
import { Effect } from 'postprocessing';
import * as THREE from 'three';
import { usePerformance } from '@/contexts/PerformanceContext';

import './FaultyTerminal.css';

// Optimized vertex shader
const terminalVertexShader = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Optimized fragment shader with reduced complexity
const terminalFragmentShader = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float speed;
uniform float density;
uniform vec3 color1;
uniform vec3 color2;
uniform float glitchIntensity;
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

// Simplified matrix rain effect
float matrixRain(vec2 uv, float time) {
  float y = uv.y + time * speed;
  float x = uv.x;
  
  // Reduce complexity based on quality
  float step = quality == 0 ? 0.1 : (quality == 1 ? 0.05 : 0.02);
  
  float rain = 0.0;
  for (float i = 0.0; i < 1.0; i += step) {
    float xPos = fract(x + i);
    float yPos = fract(y + i * 0.5);
    
    float char = random(vec2(floor(xPos * 20.0), floor(yPos * 20.0)));
    float intensity = smoothstep(0.0, 0.1, char) * smoothstep(0.9, 0.8, char);
    
    rain += intensity * smoothstep(0.0, 0.1, yPos) * smoothstep(1.0, 0.9, yPos);
  }
  
  return rain;
}

// Simplified glitch effect
vec2 glitch(vec2 uv, float time) {
  if (quality == 0) return uv; // Skip glitch on low quality
  
  float glitchTime = time * 2.0;
  float glitchIntensity = glitchIntensity * (0.5 + 0.5 * sin(glitchTime));
  
  uv.x += sin(uv.y * 100.0 + glitchTime) * glitchIntensity * 0.01;
  uv.y += sin(uv.x * 100.0 + glitchTime) * glitchIntensity * 0.01;
  
  return uv;
}

void main() {
  vec2 uv = vUv;
  
  // Apply glitch effect
  uv = glitch(uv, time);
  
  // Matrix rain
  float rain = matrixRain(uv, time);
  
  // Scanlines
  float scanline = 0.0;
  if (quality > 0) {
    scanline = sin(uv.y * resolution.y * 0.5) * 0.1;
  }
  
  // Color mixing
  vec3 col = mix(color1, color2, rain);
  col += scanline;
  
  // Fade edges
  float fade = smoothstep(0.0, 0.1, uv.x) * smoothstep(0.0, 0.1, uv.y) *
               smoothstep(0.0, 0.1, 1.0 - uv.x) * smoothstep(0.0, 0.1, 1.0 - uv.y);
  
  col *= fade;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

const TerminalEffect = ({ 
  speed = 0.5,
  density = 0.5,
  color1 = [0.0, 1.0, 0.0],
  color2 = [0.0, 0.5, 0.0],
  glitchIntensity = 0.1
}: {
  speed?: number;
  density?: number;
  color1?: [number, number, number];
  color2?: [number, number, number];
  glitchIntensity?: number;
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
    density: isLowPower ? density * 0.7 : density,
    glitchIntensity: isLowPower ? 0 : glitchIntensity
  }), [isLowPower, speed, density, glitchIntensity]);

  const effect = useMemo(() => {
    if (!config.enableWebGL) return null;

    return new Effect('TerminalEffect', terminalFragmentShader, {
      uniforms: new Map([
        ['resolution', new THREE.Uniform(new THREE.Vector2(size.width, size.height))],
        ['time', new THREE.Uniform(0)],
        ['speed', new THREE.Uniform(effectiveSettings.speed)],
        ['density', new THREE.Uniform(effectiveSettings.density)],
        ['color1', new THREE.Uniform(new THREE.Vector3(...color1))],
        ['color2', new THREE.Uniform(new THREE.Vector3(...color2))],
        ['glitchIntensity', new THREE.Uniform(effectiveSettings.glitchIntensity)],
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

const useTerminalEffect = wrapEffect(TerminalEffect);

const FaultyTerminal = ({ 
  speed = 0.5,
  density = 0.5,
  color1 = [0.0, 1.0, 0.0],
  color2 = [0.0, 0.5, 0.0],
  glitchIntensity = 0.1,
  className = '',
  style = {}
}: {
  speed?: number;
  density?: number;
  color1?: [number, number, number];
  color2?: [number, number, number];
  glitchIntensity?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { config, isLowPower } = usePerformance();

  // Don't render if WebGL is disabled
  if (!config.enableWebGL) {
    return (
      <div 
        className={`faulty-terminal-fallback ${className}`}
        style={{
          background: `linear-gradient(45deg, rgba(${color1[0] * 255}, ${color1[1] * 255}, ${color1[2] * 255}, 0.1), rgba(0,0,0,0.9))`,
          ...style
        }}
      />
    );
  }

  return (
    <div className={`faulty-terminal-container ${className}`} style={style}>
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
          <useTerminalEffect
            speed={speed}
            density={density}
            color1={color1}
            color2={color2}
            glitchIntensity={glitchIntensity}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default FaultyTerminal;
