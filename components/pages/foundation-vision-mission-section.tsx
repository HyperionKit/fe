import React from 'react';
import { Eye, Crosshair } from 'lucide-react';
import { VisionMissionCard } from '@/components/pages/foundation-vision-mission';

export const VisionMissionSection: React.FC = () => (
  <section id="vision" className="py-24 relative overflow-hidden">
    {/* Center Orb Glow */}
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at center, rgba(167, 139, 250, 0.4) 0%, rgba(99, 102, 241, 0.1) 40%, transparent 70%)'
      }}
    />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <VisionMissionCard 
          icon={<Eye className="w-5 h-5 text-indigo-400" />}
          title="Our Vision"
          color="indigo"
          content={[
            "We envision a decentralized future where financial tools are accessible, interoperable, and driven by open collaboration. Our vision is to break down the barriers between different blockchain ecosystems, creating a unified platform where developers can build without limitations.",
            "By fostering open-source development and community-driven innovation, we aim to create an inclusive environment where anyone can participate in the DeFi revolution, regardless of their technical background.",
            "Our ultimate goal is to empower individuals and organizations worldwide with the tools they need to build, deploy, and scale decentralized applications that truly serve the needs of their communities."
          ]}
        />

        <VisionMissionCard 
          icon={<Crosshair className="w-5 h-5 text-purple-400" />}
          title="Our Mission"
          color="purple"
          content={[
            "Our mission is to build modular, reliable DeFi infrastructure that enables seamless cross-chain connectivity and empowers developers to create innovative financial applications. We are committed to providing the foundational tools that make decentralized finance accessible.",
            "We believe in community-driven growth and actively support developers through comprehensive documentation, developer tools, and educational resources. Our platform is designed to be developer-friendly to reduce complexity.",
            "Through continuous innovation and refinement of our protocols, we strive to enable secure, scalable, and open financial systems that can serve as the backbone for the next generation of decentralized applications."
          ]}
        />
      </div>
    </div>
  </section>
);