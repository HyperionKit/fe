import React from 'react';
import { TeamMemberCard } from '@/components/pages/foundation-team-member';

export const TeamSection: React.FC = () => (
  <section id="team" className="py-24 border-t border-white/5 bg-[#020205]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl text-white font-medium tracking-tight mb-4">
          Team Behind
        </h2>
        <p className="text-slate-400 text-lg font-light">Building the future of Hyperkit</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TeamMemberCard 
          image="./Profile/Aaron jay Sopeña.jpeg"
          name="Aaron Jay Sopeña"
          role="Co-founder & CTO"
        />
        <TeamMemberCard 
          image="./Profile/Justine Lupasi.jpeg"
          name="Justine Lupasi"
          role="Co-founder & CPOO"
        />
        <TeamMemberCard 
          image="./Profile/Tristan Triñanes.jpeg"
          name="Tristan Triñanes"
          role="Co-founder & CMFO"
        />
      </div>
    </div>
  </section>
);