'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GridShader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    containerRef.current.appendChild(renderer.domElement);

    // Grid shader material
    const gridMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uResolution;
        varying vec2 vUv;

        void main() {
          vec2 uv = (vUv - 0.5) * 2.0;
          uv.x *= uResolution.x / uResolution.y;
          
          // Grid pattern
          vec2 grid = abs(fract(uv * 8.0) - 0.5) / fwidth(uv * 8.0);
          float line = min(grid.x, grid.y);
          float gridLines = 1.0 - min(line, 1.0);
          
          // Warping effect
          vec2 warpedUV = uv + sin(uv * 3.0 + uTime * 0.5) * 0.1;
          vec2 warpedGrid = abs(fract(warpedUV * 12.0) - 0.5) / fwidth(warpedUV * 12.0);
          float warpedLine = min(warpedGrid.x, warpedGrid.y);
          float warpedGridLines = 1.0 - min(warpedLine, 1.0);
          
          // Purple glow points
          vec2 glowUV = uv * 15.0;
          float glow = 0.0;
          for(int i = 0; i < 8; i++) {
            vec2 offset = vec2(
              sin(float(i) * 2.4 + uTime * 0.3) * 2.0,
              cos(float(i) * 1.7 + uTime * 0.4) * 2.0
            );
            float dist = length(glowUV - offset);
            glow += 1.0 / (1.0 + dist * dist) * 0.3;
          }
          
          // Mouse interaction
          vec2 mouseUV = (uMouse / uResolution) * 2.0 - 1.0;
          mouseUV.x *= uResolution.x / uResolution.y;
          float mouseDist = length(uv - mouseUV);
          float mouseEffect = 1.0 / (1.0 + mouseDist * 3.0);
          
          // Combine effects
          float finalGrid = max(gridLines * 0.3, warpedGridLines * 0.2);
          vec3 color = vec3(0.0, 0.2, 0.4) + finalGrid * vec3(0.0, 0.4, 0.8);
          color += glow * vec3(0.8, 0.2, 1.0);
          color += mouseEffect * vec3(0.2, 0.6, 1.0) * 0.5;
          
          gl_FragColor = vec4(color, 0.8);
        }
      `,
      transparent: true
    });

    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(10, 10);
    const mesh = new THREE.Mesh(geometry, gridMaterial);
    scene.add(mesh);

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      gridMaterial.uniforms.uMouse.value.set(event.clientX, event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (gridMaterial) {
        gridMaterial.uniforms.uTime.value = performance.now() * 0.001;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
      gridMaterial.uniforms.uResolution.value.set(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default GridShader;
