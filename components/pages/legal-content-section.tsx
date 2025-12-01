import React from 'react';

interface ContentSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ number, title, children }) => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-white mb-6">
        {number}. {title}
      </h2>
      {children}
    </section>
  );
};