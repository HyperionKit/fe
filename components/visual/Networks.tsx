'use client';

import React from 'react';
import Image from 'next/image';

const TrustedNetworks = () => {
  const networks = [
    { 
      logo: '/logo/brand/hyperion/hyperion.png',
      alt: 'Hyperion Network'
    },
    {  
      logo: '/logo/brand/hyperion/mantle.png',
      alt: 'Mantle Network'
    },
    { 
      logo: '/logo/brand/hyperion/avalanche.png',
      alt: 'Avalanche Network'
    },
    { 
      logo: '/logo/brand/hyperion/metis.png',
      alt: 'Metis Network'
    },
  ];

  return (
    <section className="py-12 border-b-white/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-medium text-slate-600 uppercase tracking-widest mb-8">
          Deploy instantly across trusted networks
        </p>
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {networks.map((network, index) => (
            <div
              key={index}
              className="flex items-center gap-3 group cursor-pointer hover:opacity-100 transition-opacity"
            >
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src={network.logo}
                  alt={network.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedNetworks;