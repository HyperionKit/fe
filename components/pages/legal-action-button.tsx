import React from 'react';

interface ActionButtonProps {
  label: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ label }) => {
  return (
    <button className="px-5 py-2 text-sm text-gray-300 border border-gray-700/50 rounded-lg hover:bg-gray-800/30 hover:border-gray-600 transition-all">
      {label}
    </button>
  );
};