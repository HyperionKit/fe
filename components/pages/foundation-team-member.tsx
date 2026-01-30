import React from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, role }) => (
  <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
    <div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-1 ring-white/10 group-hover:ring-indigo-500/30 transition-all">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="w-full h-full object-cover"
        unoptimized
      />
    </div>
    <h3 className="text-white text-lg font-medium mb-1">{name}</h3>
    <p className="text-xs text-indigo-400 font-medium uppercase tracking-wider mb-2">{role}</p>
  </div>
);