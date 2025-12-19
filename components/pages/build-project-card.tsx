import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  status: 'ACTIVE' | 'AUDITING' | 'DRAFT';
  network?: string;
  icon: React.ReactNode;
  iconBg: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  status, 
  network, 
  icon, 
  iconBg 
}) => {
  const statusStyles = {
    ACTIVE: 'bg-green-500/10 border-green-500/20 text-green-400',
    AUDITING: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    DRAFT: 'bg-slate-800 border-slate-700 text-slate-400'
  };

  return (
    <div className="group glass-card rounded-xl p-1 relative overflow-hidden transition-all duration-500 hover:-translate-y-1">
      <div className="bg-[#0A0A0C] rounded-lg p-5 h-full flex flex-col relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center`}>
            {icon}
          </div>
          <div className={`px-2 py-1 rounded ${statusStyles[status]} text-[10px] font-mono`}>{status}</div>
        </div>
        <h3 className="font-medium text-white mb-1 group-hover:text-purple-300 transition-colors">{title}</h3>
        <p className="text-xs text-slate-500 mb-6">{description}</p>
        {network && (
          <div className="mt-auto border-t border-white/5 pt-4 flex items-center justify-between">
            <span className="text-[10px] text-slate-500 font-mono">{network}</span>
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 border border-black"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
