import React from 'react';

interface VisionMissionCardProps {
  icon: React.ReactNode;
  title: string;
  content: string[];
  color: 'indigo' | 'purple';
}

export const VisionMissionCard: React.FC<VisionMissionCardProps> = ({ 
  icon, 
  title, 
  content,
  color
}) => {
  const colorClasses = color === 'indigo' 
    ? 'hover:border-indigo-500/40 bg-indigo-500/10 group-hover:bg-indigo-500/20 text-indigo-400 shadow-indigo-500/5'
    : 'hover:border-purple-500/40 bg-purple-500/10 group-hover:bg-purple-500/20 text-purple-400 shadow-purple-500/5';

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-[#080812] border border-white/10 p-8 ${colorClasses.split(' ')[0]} transition-all duration-300`}>
      <div className={`absolute top-0 right-0 w-32 h-32 ${colorClasses.split(' ')[1]} rounded-full blur-3xl -mr-16 -mt-16 ${colorClasses.split(' ')[2]} transition-colors`} />
      
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 shadow-lg ${colorClasses.split(' ')[4]}`}>
          {icon}
        </div>
        <h2 className="text-2xl text-white font-medium tracking-tight">{title}</h2>
      </div>

      <div className="space-y-4 text-slate-400 text-sm font-light leading-relaxed">
        {content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};