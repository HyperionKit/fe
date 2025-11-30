import React from 'react';
import { NetworkVisual } from '@/components/pages/foundation-network-visual';

export const StorySection: React.FC = () => (
  <section id="story" className="relative py-24 border-y border-white/5 bg-[#030308]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <NetworkVisual />
        </div>

        <div className="text-left order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-6">Our Story</h2>
          <div className="space-y-6 text-slate-400 font-light leading-relaxed">
            <p>
              HyperKit was born from a bold vision: to create powerful DeFi tools that work seamlessly across different blockchain networks. We believe that the future of decentralized finance lies in interoperability, modularity, and community-driven innovation.
            </p>
            <p>
              Our journey began when we recognized the fragmented nature of the DeFi ecosystem. Developers were struggling with complex integrations, limited cross-chain functionality, and a lack of standardized tools. We saw an opportunity to build something different – a platform that would make DeFi development accessible, efficient, and truly decentralized.
            </p>
            <p>
              Today, we're building an ecosystem where developers can create, deploy, and scale decentralized applications without the traditional barriers. Our commitment to open-source development, transparent governance, and community participation drives everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);