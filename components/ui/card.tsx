import React from 'react';
import { CardSkeleton } from './skeleton';
import { LoadingWrapper } from './loading-wrapper';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
}

export function Card({ 
  children, 
  className = '', 
  isLoading = false,
  onClick 
}: CardProps) {
  const baseClasses = 'bg-gray-800 rounded-xl p-6 transition-all duration-300';
  const hoverClasses = onClick ? 'hover:bg-gray-700 cursor-pointer hover:scale-105' : '';
  const clickClasses = onClick ? 'cursor-pointer' : '';

  if (isLoading) {
    return <CardSkeleton className={className} />;
  }

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${clickClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// Interactive Card with 3D content
interface InteractiveCardProps {
  title: string;
  description: string;
  iframeSrc?: string;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
}

export function InteractiveCard({ 
  title, 
  description, 
  iframeSrc,
  isLoading = false,
  className = '',
  onClick 
}: InteractiveCardProps) {
  if (isLoading) {
    return <CardSkeleton className={className} />;
  }

  return (
    <div 
      className={`bg-black-400 rounded-none p-4 sm:p-6 relative overflow-hidden min-h-[300px] sm:min-h-[400px] ${className}`}
      onClick={onClick}
    >
      {iframeSrc && (
        <iframe
          src={iframeSrc}
          className="absolute w-full h-full pointer-events-none"
          style={{ 
            border: 'none', 
            zIndex: 1,
            top: '-5%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120%',
            height: '120%'
          }}
        />
      )}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight" style={{fontFamily: 'Inter'}}>
          {title}
        </h3>
        <p className="text-white text-sm sm:text-base leading-relaxed font-normal" style={{fontFamily: 'Inter'}}>
          {description}
        </p>
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center z-10">
        <span className="text-white text-xs sm:text-sm font-medium mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
        <svg className="w-3 h-3 sm:w-4 sm:h-4 rotate-180 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

// Card Grid with Loading States
interface CardGridProps {
  children: React.ReactNode;
  isLoading?: boolean;
  cardCount?: number;
  className?: string;
}

export function CardGrid({ 
  children, 
  isLoading = false, 
  cardCount = 3,
  className = '' 
}: CardGridProps) {
  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {Array.from({ length: cardCount }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return <>{children}</>;
}
