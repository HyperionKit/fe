import React from 'react';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <div className="mb-6">
      <div className="text-xs uppercase text-gray-500 font-semibold mb-3 tracking-wider">
        {title}
      </div>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
};