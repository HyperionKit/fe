import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface RoleCardProps {
  tier: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  variant?: 'matte' | 'highlighted';
}

export const RoleCard: React.FC<RoleCardProps> = ({ 
  tier, 
  icon, 
  title, 
  description, 
  benefits,
  variant = 'matte'
}) => {
  if (variant === 'highlighted') {
    return (
      <div className="group relative flex flex-col justify-between rounded-3xl border border-purple-500/30 bg-purple-900/10 p-8 shadow-[0_0_60px_-15px_rgba(124,58,237,0.3)] overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent opacity-100 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <span className="text-xs font-medium text-purple-200/80 uppercase tracking-wider">{tier}</span>
            <div className="p-2 rounded-full bg-purple-500/20 border border-purple-500/30">
              {icon}
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-white tracking-tight drop-shadow-lg mb-2">{title}</h3>
          <p className="text-sm text-purple-100/70 leading-relaxed font-normal mb-8 min-h-[40px]">
            {description}
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center text-sm text-white/90">
                <Check className="w-3.5 h-3.5 mr-3 text-purple-300" /> {benefit}
              </li>
            ))}
          </ul>
        </div>

        <a href="#" className="relative z-10 inline-flex items-center text-sm font-medium text-purple-200 hover:text-white transition-colors mt-auto group-hover:translate-x-1 duration-300">
          Learn more <ArrowRight className="w-4 h-4 ml-1.5" />
        </a>
      </div>
    );
  }

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{tier}</span>
          <div className="p-2 rounded-full bg-white/5 border border-white/5">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-medium text-slate-200 tracking-tight mb-2">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed font-normal mb-8 min-h-[40px]">
          {description}
        </p>

        <ul className="space-y-3 mb-8">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-400">
              <Check className="w-3.5 h-3.5 mr-3 text-purple-400" /> {benefit}
            </li>
          ))}
        </ul>
      </div>

      <a href="#" className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors mt-auto group-hover:translate-x-1 duration-300">
        Learn more <ArrowRight className="w-4 h-4 ml-1.5" />
      </a>
    </div>
  );
};