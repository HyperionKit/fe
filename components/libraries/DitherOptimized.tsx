"use client";
import { useRef, useEffect, forwardRef, useMemo } from 'react';
import { Canvas, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import { EffectComposer, wrapEffect } from '@react-three/postprocessing';
import { Effect } from 'postprocessing';
import * as THREE from 'three';
import { usePerformance } from '@/contexts/PerformanceContext';

import './Dither.css';

// Optimized shaders with reduced complexity
const waveVertexShader = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const waveFragmentShader = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform vec2 mousePos;
uniform int enableMouseInteraction;
uniform float mouseRadius;
uniform int quality;

varying vec2 vUv;

// Simplified noise function for better performance
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Simplified fbm for better performance
float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = waveFrequency;
  
  // Reduce octaves based on quality
  int octaves = quality == 0 ? 2 : (quality == 1 ? 3 : 4);
  
  for (int i = 0; i < 4; i++) {
    if (i >= octaves) break;
    value += amplitude * noise(p);
    p *= 2.0;
    amplitude *= waveAmplitude;
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  uv -= 0.5;
  uv.x *= resolution.x / resolution.y;
  
  float f = fbm(uv - time * waveSpeed);
  
  if (enableMouseInteraction == 1) {
    vec2 mouseNDC = (mousePos / resolution - 0.5) * vec2(1.0, -1.0);
    mouseNDC.x *= resolution.x / resolution.y;
    float dist = length(uv - mouseNDC);
    float effect = 1.0 - smoothstep(0.0, mouseRadius, dist);
    f -= 0.3 * effect;
  }
  
  vec3 col = mix(vec3(0.0), waveColor, f);
  gl_FragColor = vec4(col, 1.0);
}
`;

const WaveEffect = forwardRef<Effect, { 
  waveColor?: [number, number, number];
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
  colorNum?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
}>(({ 
  waveColor = [0.3, 0.2, 0.5],
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.3,
  colorNum = 4,
  waveAmplitude = 0.3,
  waveFrequency = 3,
  waveSpeed = 0.05
}, ref) => {
  const { size, viewport } = useThree();
  const { config, isLowPower } = usePerformance();
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const effectRef = useRef<Effect>(null);
  const frameCountRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  // Performance-based quality settings
  const quality = useMemo(() => {
    if (isLowPower) return 0; // Low quality
    if (config.quality === 'medium') return 1; // Medium quality
    return 2; // High quality
  }, [isLowPower, config.quality]);

  // Performance-based effect settings
  const effectiveSettings = useMemo(() => ({
    waveSpeed: isLowPower ? waveSpeed * 0.5 : waveSpeed,
    waveFrequency: isLowPower ? waveFrequency * 0.7 : waveFrequency,
    waveAmplitude: isLowPower ? waveAmplitude * 0.8 : waveAmplitude,
    enableMouseInteraction: config.enableWebGL && enableMouseInteraction ? 1 : 0,
    mouseRadius: isLowPower ? mouseRadius * 1.5 : mouseRadius
  }), [isLowPower, config.enableWebGL, waveSpeed, waveFrequency, waveAmplitude, enableMouseInteraction, mouseRadius]);

  const effect = useMemo(() => {
    if (!config.enableWebGL) return null;

    return new Effect('WaveEffect', waveFragmentShader, {
      uniforms: new Map([
        ['resolution', new THREE.Uniform(new THREE.Vector2(size.width, size.height))],
        ['time', new THREE.Uniform(0)],
        ['waveSpeed', new THREE.Uniform(effectiveSettings.waveSpeed)],
        ['waveFrequency', new THREE.Uniform(effectiveSettings.waveFrequency)],
        ['waveAmplitude', new THREE.Uniform(effectiveSettings.waveAmplitude)],
        ['waveColor', new THREE.Uniform(new THREE.Vector3(...waveColor))],
        ['mousePos', new THREE.Uniform(new THREE.Vector2(0, 0))],
        ['enableMouseInteraction', new THREE.Uniform(effectiveSettings.enableMouseInteraction)],
        ['mouseRadius', new THREE.Uniform(effectiveSettings.mouseRadius)],
        ['quality', new THREE.Uniform(quality)]
      ])
    });
  }, [config.enableWebGL, size.width, size.height, effectiveSettings, waveColor, quality]);

  useEffect(() => {
    if (effect && ref) {
      if (typeof ref === 'function') {
        ref(effect);
      } else {
        ref.current = effect;
      }
    }
  }, [effect, ref]);

  useFrame((state, delta) => {
    if (!effect || !config.enableWebGL || disableAnimation) return;

    // Throttle updates based on performance
    const now = state.clock.getElapsedTime();
    const targetFPS = config.maxFPS;
    const frameInterval = 1000 / targetFPS;
    
    if (now - lastFrameTimeRef.current < frameInterval / 1000) return;
    lastFrameTimeRef.current = now;

    timeRef.current += delta * effectiveSettings.waveSpeed;
    
    const uniforms = effect.uniforms;
    if (uniforms) {
      const timeUniform = uniforms.get('time');
      if (timeUniform) timeUniform.value = timeRef.current;
      
      const mouseUniform = uniforms.get('mousePos');
      if (mouseUniform) mouseUniform.value.set(mouseRef.current.x, mouseRef.current.y);
    }
  });

  const handlePointerMove = useMemo(() => (event: ThreeEvent<PointerEvent>) => {
    if (!config.enableWebGL || !effectiveSettings.enableMouseInteraction) return;
    
    const rect = event.target.getBoundingClientRect();
    mouseRef.current.x = event.clientX - rect.left;
    mouseRef.current.y = event.clientY - rect.top;
  }, [config.enableWebGL, effectiveSettings.enableMouseInteraction]);

  if (!config.enableWebGL) {
    return null;
  }

  return (
    <primitive
      ref={effectRef}
      object={effect}
      onPointerMove={handlePointerMove}
    />
  );
});

WaveEffect.displayName = 'WaveEffect';

const useWaveEffect = wrapEffect(WaveEffect);

const Dither = ({ 
  waveColor = [0.3, 0.2, 0.5],
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.3,
  colorNum = 4,
  waveAmplitude = 0.3,
  waveFrequency = 3,
  waveSpeed = 0.05,
  className = '',
  style = {}
}: {
  waveColor?: [number, number, number];
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
  colorNum?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { config, isLowPower } = usePerformance();

  // Don't render if WebGL is disabled
  if (!config.enableWebGL) {
    return (
      <div 
        className={`dither-fallback ${className}`}
        style={{
          background: `linear-gradient(45deg, rgba(${waveColor[0] * 255}, ${waveColor[1] * 255}, ${waveColor[2] * 255}, 0.1), rgba(0,0,0,0.8))`,
          ...style
        }}
      />
    );
  }

  return (
    <div className={`dither-container ${className}`} style={style}>
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
          <useWaveEffect
            ref={useRef()}
            waveColor={waveColor}
            disableAnimation={disableAnimation}
            enableMouseInteraction={enableMouseInteraction}
            mouseRadius={mouseRadius}
            colorNum={colorNum}
            waveAmplitude={waveAmplitude}
            waveFrequency={waveFrequency}
            waveSpeed={waveSpeed}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Dither;
