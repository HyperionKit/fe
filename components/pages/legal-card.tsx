import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface LegalCardProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

export const LegalCard: React.FC<LegalCardProps> = ({
  icon: Icon,
  iconColor,
  title,
  description,
  buttonText,
  onClick
}) => (
  <button
    onClick={onClick}
    className="glass-panel p-6 rounded-xl hover:bg-white/5 text-left transition-all group border border-white/5 hover:border-white/10"
    style={{
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)'
    }}
  >
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <h3 className="text-white font-medium text-lg mb-2">{title}</h3>
    <p className="text-sm text-slate-400 leading-relaxed mb-4">{description}</p>
    <span className="text-xs text-slate-500 flex items-center gap-1 group-hover:text-white transition-colors">
      {buttonText} <ArrowRight className="w-3 h-3" />
    </span>
  </button>
);
