'use client';

import React from 'react';
import { OptimizedImage, OptimizedIcon } from '@/components/ui/optimized-image';

export default function ProductsHeroPage() {
  return (
    <section className="mb-6">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-left text-white" style={{fontFamily: 'Be Vietnam Pro'}}>
          Integrate today.{" "}
          <span className="text-purple-500">Build smarter.</span>
        </h1>
        <p className="text-sm opacity-80 mt-3 mb-4 max-w-2xl text-gray-300" style={{fontFamily: 'Inter'}}>
          A simple, powerful toolkit to help you create decentralized apps quickly and efficiently. 
          No complex setup, just clean code and powerful features.
        </p>
      </div>
    </section>
  );
}