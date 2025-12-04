import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  iconBorderColor: string;
  iconColor: string;
  title: string;
  description: string;
  linkColor: string;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  icon,
  iconBgColor,
  iconBorderColor,
  iconColor,
  title,
  description,
  linkColor,
  children,
  className = ''
}) => (
  <div className={`group relative bg-[#0A0A0F] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors duration-500 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
    
    <div className="p-8 h-full flex flex-col z-10 relative">
      <div className={`mb-4 w-10 h-10 rounded-lg ${iconBgColor} flex items-center justify-center border ${iconBorderColor}`}>
        {React.cloneElement(icon as React.ReactElement, { className: `w-5 h-5 ${iconColor}` })}
      </div>
      <h3 className="text-xl font-medium text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
        {description}
      </p>
      <a href="#" className={`text-sm ${linkColor} hover:opacity-80 font-medium inline-flex items-center gap-1 mb-8 transition-colors`}>
        Learn more <ArrowRight className="w-4 h-4" />
      </a>
      {children}
    </div>
  </div>
);