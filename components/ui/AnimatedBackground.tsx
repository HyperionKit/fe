'use client';

import React from 'react';

interface AuroraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = '',
  children
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Aurora gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-blue-600/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-600/10 via-transparent to-purple-600/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

interface GlassBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
}

export const GlassBackground: React.FC<GlassBackgroundProps> = ({
  className = '',
  children,
  blur = 'md'
}) => {
  const blurClass = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  }[blur];

  return (
    <div className={`relative ${className}`}>
      <div className={`absolute inset-0 bg-white/5 ${blurClass} border border-white/10 rounded-2xl`}></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

interface GradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  gradient?: 'purple' | 'blue' | 'indigo' | 'custom';
  customGradient?: string;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  className = '',
  children,
  gradient = 'purple',
  customGradient
}) => {
  const getGradientClass = () => {
    if (customGradient) return customGradient;
    
    switch (gradient) {
      case 'purple':
        return 'bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800';
      case 'blue':
        return 'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800';
      case 'indigo':
        return 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800';
      default:
        return 'bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800';
    }
  };

  return (
    <div className={`relative ${getGradientClass()} ${className}`}>
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
