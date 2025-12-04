import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-gray-400 leading-relaxed text-base ${className}`}>
      {children}
    </p>
  );
};