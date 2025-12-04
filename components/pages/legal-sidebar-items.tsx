import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active = false }) => {
  return (
    <div 
      className={`flex items-center gap-3 text-sm py-2.5 px-3 rounded cursor-pointer transition-colors ${
        active 
          ? 'text-white bg-gray-800/70' 
          : 'text-gray-400 hover:bg-gray-800/50'
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};