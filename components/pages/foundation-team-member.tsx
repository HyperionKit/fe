import React from 'react';

interface TeamMemberCardProps {
  initials: string;
  name: string;
  role: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ initials, name, role }) => (
  <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:ring-indigo-500/30 transition-all">
      <span className="text-xl font-semibold text-indigo-300">{initials}</span>
    </div>
    <h3 className="text-white text-lg font-medium mb-1">{name}</h3>
    <p className="text-xs text-indigo-400 font-medium uppercase tracking-wider mb-2">{role}</p>
  </div>
);