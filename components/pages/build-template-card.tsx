import React from 'react';
import { GitFork } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  creator: string;
  forks: string;
  tags: string[];
  verified?: boolean;
  price?: string;
  badge?: string;
  badgeColor?: string;
  imageUrl: string;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  creator,
  forks,
  tags,
  verified = false,
  price,
  badge,
  badgeColor,
  imageUrl
}) => {
  return (
    <div className="group flex flex-col h-full">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#0A0A0C] mb-5 shadow-lg group-hover:shadow-purple-500/20 transition-all">
        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] to-transparent opacity-80 z-10"></div>
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 filter saturate-0 group-hover:saturate-100"
        />
        {badge && (
          <div className="absolute top-3 right-3 z-20">
            <span className={`px-2 py-1 bg-black/50 backdrop-blur border border-white/10 rounded text-[10px] font-mono ${badgeColor}`}>
              {badge}
            </span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">{title}</h3>
        {verified ? (
          <span className="text-xs font-bold text-green-400 tracking-wider">VERIFIED</span>
        ) : price ? (
          <span className="text-xs font-bold text-slate-500 tracking-wider">{price}</span>
        ) : null}
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-mono">
        <span className="text-slate-400">{creator}</span>
        <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
        <span className="flex items-center gap-1 hover:text-slate-300 transition-colors">
          <GitFork className="w-3 h-3" /> {forks}
        </span>
      </div>
      <div className="flex gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 bg-[#111] border border-white/10 rounded text-[10px] font-mono text-slate-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};