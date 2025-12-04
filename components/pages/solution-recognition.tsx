import React from 'react';

interface RecognitionFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const RecognitionFeature: React.FC<RecognitionFeatureProps> = ({ 
  icon, 
  title, 
  description 
}) => (
  <div className="flex items-start gap-4">
    <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-300 shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium text-white mb-1">{title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  </div>
);