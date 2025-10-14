'use client';

import React, { useState } from 'react';

interface TabItem {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface ModernTabsProps {
  items: TabItem[];
  defaultActiveId?: string;
  className?: string;
  variant?: 'underline' | 'pills' | 'cards';
}

export const ModernTabs: React.FC<ModernTabsProps> = ({
  items,
  defaultActiveId,
  className = '',
  variant = 'underline'
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveId || items[0]?.id);

  const getTabButtonClasses = (isActive: boolean) => {
    const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2';
    
    switch (variant) {
      case 'underline':
        return `${baseClasses} ${
          isActive
            ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50 dark:bg-purple-900/20'
            : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
        }`;
      case 'pills':
        return `${baseClasses} ${
          isActive
            ? 'bg-purple-600 text-white shadow-lg'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
        }`;
      case 'cards':
        return `${baseClasses} ${
          isActive
            ? 'bg-white text-purple-600 shadow-lg border-2 border-purple-200 dark:bg-gray-800 dark:border-purple-600'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
        }`;
      default:
        return baseClasses;
    }
  };

  const getContentClasses = () => {
    switch (variant) {
      case 'underline':
        return 'mt-4 p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700';
      case 'pills':
        return 'mt-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg';
      case 'cards':
        return 'mt-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700';
      default:
        return 'mt-4 p-6';
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Navigation */}
      <div className={`flex flex-wrap gap-2 ${
        variant === 'underline' ? 'border-b border-gray-200 dark:border-gray-700' : ''
      }`}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={getTabButtonClasses(activeTab === item.id)}
            style={{ fontFamily: 'Inter' }}
          >
            {item.icon && <span className="text-sm">{item.icon}</span>}
            {item.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={getContentClasses()}>
        {items.find(item => item.id === activeTab)?.content}
      </div>
    </div>
  );
};

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  hover = true,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      } ${
        hover ? 'hover:scale-105 hover:shadow-xl' : ''
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        fontFamily: 'Inter'
      }}
    >
      {children}
    </div>
  );
};
