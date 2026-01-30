import React from 'react';

interface InvestorCardProps {
  image: string;
  name: string;
  role: string;
}

export const InvestorCard: React.FC<InvestorCardProps> = ({ image, name, role }) => (
  <div className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-all">
    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h4 className="text-white font-medium">{name}</h4>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  </div>
);