'use client';

import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  duration = 500,
  className = ''
}) => {
  return (
    <div
      className={`animate-in fade-in-0 slide-in-from-bottom-4 ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

export const SlideIn: React.FC<SlideInProps> = ({ 
  children, 
  direction = 'left',
  delay = 0,
  duration = 500,
  className = ''
}) => {
  const directionClass = {
    left: 'slide-in-from-left-4',
    right: 'slide-in-from-right-4',
    up: 'slide-in-from-top-4',
    down: 'slide-in-from-bottom-4'
  }[direction];

  return (
    <div
      className={`animate-in ${directionClass} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

interface PulseProps {
  children: React.ReactNode;
  className?: string;
}

export const Pulse: React.FC<PulseProps> = ({ children, className = '' }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {children}
    </div>
  );
};

interface BounceProps {
  children: React.ReactNode;
  className?: string;
}

export const Bounce: React.FC<BounceProps> = ({ children, className = '' }) => {
  return (
    <div className={`animate-bounce ${className}`}>
      {children}
    </div>
  );
};

interface ShakeProps {
  children: React.ReactNode;
  className?: string;
}

export const Shake: React.FC<ShakeProps> = ({ children, className = '' }) => {
  return (
    <div className={`animate-shake ${className}`}>
      {children}
    </div>
  );
};

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary',
  className = ''
}) => {
  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }[size];

  const colorClass = {
    primary: 'border-purple-600 border-t-transparent',
    secondary: 'border-gray-600 border-t-transparent',
    white: 'border-white border-t-transparent'
  }[color];

  return (
    <div
      className={`animate-spin rounded-full border-2 ${sizeClass} ${colorClass} ${className}`}
    />
  );
};

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  className = '',
  showPercentage = true
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between text-sm text-gray-400 mb-2">
        <span>Progress</span>
        {showPercentage && <span>{Math.round(progress)}%</span>}
      </div>
      <div className="w-full bg-neutral-700 rounded-full h-2">
        <div 
          className="bg-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
};

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 50,
  className = ''
}) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

interface FloatingProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export const Floating: React.FC<FloatingProps> = ({ 
  children, 
  intensity = 'medium',
  className = ''
}) => {
  const intensityClass = {
    low: 'animate-float-low',
    medium: 'animate-float-medium',
    high: 'animate-float-high'
  }[intensity];

  return (
    <div className={`${intensityClass} ${className}`}>
      {children}
    </div>
  );
};

interface GlowProps {
  children: React.ReactNode;
  color?: 'purple' | 'blue' | 'green' | 'red' | 'yellow';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export const Glow: React.FC<GlowProps> = ({ 
  children, 
  color = 'purple',
  intensity = 'medium',
  className = ''
}) => {
  const colorClass = {
    purple: 'shadow-purple-500/50',
    blue: 'shadow-blue-500/50',
    green: 'shadow-green-500/50',
    red: 'shadow-red-500/50',
    yellow: 'shadow-yellow-500/50'
  }[color];

  const intensityClass = {
    low: 'shadow-lg',
    medium: 'shadow-xl',
    high: 'shadow-2xl'
  }[intensity];

  return (
    <div className={`${colorClass} ${intensityClass} ${className}`}>
      {children}
    </div>
  );
};

export default {
  FadeIn,
  SlideIn,
  Pulse,
  Bounce,
  Shake,
  LoadingSpinner,
  ProgressBar,
  Typewriter,
  Floating,
  Glow
};
