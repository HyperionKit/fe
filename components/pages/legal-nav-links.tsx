import React from 'react';

interface NavLinkProps {
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ label }) => {
  return (
    <a 
      href="#" 
      className="block text-sm text-gray-400 hover:text-white transition-colors py-1"
    >
      {label}
    </a>
  );
};