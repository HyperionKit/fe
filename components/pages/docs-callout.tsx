import React from 'react';
import { Info, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  title: string;
  children: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({ 
  type = 'info', 
  title, 
  children 
}) => {
  const styles = {
    info: {
      bg: 'bg-indigo-500/5',
      border: 'border-indigo-500/20',
      icon: <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />,
      titleColor: 'text-indigo-200',
      textColor: 'text-indigo-300/80'
    },
    warning: {
      bg: 'bg-yellow-500/5',
      border: 'border-yellow-500/20',
      icon: <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />,
      titleColor: 'text-yellow-200',
      textColor: 'text-yellow-300/80'
    },
    success: {
      bg: 'bg-green-500/5',
      border: 'border-green-500/20',
      icon: <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />,
      titleColor: 'text-green-200',
      textColor: 'text-green-300/80'
    },
    error: {
      bg: 'bg-red-500/5',
      border: 'border-red-500/20',
      icon: <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />,
      titleColor: 'text-red-200',
      textColor: 'text-red-300/80'
    }
  };

  const style = styles[type];

  return (
    <div className={`flex gap-3 ${style.bg} border ${style.border} rounded-lg p-4 mb-8`}>
      {style.icon}
      <div className="space-y-1">
        <p className={`text-sm font-medium ${style.titleColor} m-0`}>{title}</p>
        <div className={`text-sm ${style.textColor} leading-relaxed`}>{children}</div>
      </div>
    </div>
  );
};