'use client';

import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  animation?: 'fadeIn' | 'slideUp' | 'typewriter' | 'bounce' | 'glow';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 1000,
  as: Component = 'h1',
  animation = 'fadeIn'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    switch (animation) {
      case 'fadeIn':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'slideUp':
        return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
      case 'typewriter':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'bounce':
        return `${baseClasses} ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`;
      case 'glow':
        return `${baseClasses} ${isVisible ? 'opacity-100 drop-shadow-lg' : 'opacity-0'} ${isVisible ? 'animate-pulse' : ''}`;
      default:
        return baseClasses;
    }
  };

  return (
    <Component 
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        fontFamily: 'Inter'
      }}
    >
      {text}
    </Component>
  );
};

interface FallingTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const FallingText: React.FC<FallingTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 100,
  as: Component = 'h1'
}) => {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentChar = 0;
      const interval = setInterval(() => {
        if (currentChar <= text.length) {
          setVisibleChars(currentChar);
          currentChar++;
        } else {
          clearInterval(interval);
        }
      }, stagger);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay, stagger]);

  return (
    <Component className={className} style={{ fontFamily: 'Inter' }}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out ${
            index < visibleChars
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: `${index * 50}ms`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Component>
  );
};

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 150,
  as: Component = 'h1'
}) => {
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const words = text.split(' ');
      let currentWord = 0;
      const interval = setInterval(() => {
        if (currentWord <= words.length) {
          setVisibleWords(currentWord);
          currentWord++;
        } else {
          clearInterval(interval);
        }
      }, stagger);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay, stagger]);

  return (
    <Component className={className} style={{ fontFamily: 'Inter' }}>
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-out mr-2 ${
            index < visibleWords
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{
            transitionDelay: `${index * 100}ms`
          }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
};
