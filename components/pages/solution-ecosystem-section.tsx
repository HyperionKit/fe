import React from 'react';
import { Badge } from '@/components/pages/solution-badge';
import { SectionHeader } from '@/components/pages/solution-header';
import { EcosystemCard } from '@/components/pages/solution-ecosystem-card';

export const EcosystemSection: React.FC = () => (
  <section className="w-full py-24 flex flex-col items-center">
    <Badge>Hyperion Ecosystem</Badge>
    
    <SectionHeader 
      title={<>Composable Cross-Chain<br /> Ecosystem</>}
      description="Build on Hyperion's Interoperable Future. Adapt upon other apps in the Metis ecosystem."
    />

    {/* Cards Layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
      <EcosystemCard 
        label="Components"
        title="Ship Faster with Standard Components"
        description="Faster Focus on Innovation, Not Setup. Remove complexity with standard components."
      />
      
      <EcosystemCard 
        label="HyperKit"
        title="AI and DeFi Synergy"
        description="AI meets DeFi. Power your Apps with HyperKit's Tools."
        variant="highlighted"
        showCursor={true}
      />
      
      <EcosystemCard 
        label="Deployment"
        title="Serverless Deployment"
        description='Just "npm create hyperkit" to start. Deploy DeFi Serverless One Command.'
      />
    </div>

    {/* Decorative bottom reflections */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6 opacity-30 pointer-events-none mix-blend-overlay">
      <div className="h-24 rounded-t-3xl border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="h-24 rounded-t-3xl border-t border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-transparent" />
      <div className="h-24 rounded-t-3xl border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent" />
    </div>
  </section>
);