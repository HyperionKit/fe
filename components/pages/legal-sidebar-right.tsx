import React from 'react';
import { NavLink } from '@/components/pages/legal-nav-links';

export const RightSidebar: React.FC = () => {
  const navItems: string[] = [
    'Acceptance',
    'Eligibility',
    'Use of service',
    'Intellectual property',
    'Payment',
    'Third-party links',
    'Disclaimers',
    'Indemnification',
    'Governing law',
    'Changes',
    'Contact'
  ];

  return (
    <div className="fixed right-8 top-32 w-56">
      <div className="text-xs uppercase text-gray-500 font-semibold mb-4 tracking-wider">
        ON THIS PAGE
      </div>
      <div className="space-y-2">
        {navItems.map((item, index) => (
          <NavLink key={index} label={item} />
        ))}
      </div>
    </div>
  );
};