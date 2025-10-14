'use client';

import React from 'react';
import { useDemo } from './DemoProvider';

const DemoNotifications: React.FC = () => {
  const { state, removeNotification } = useDemo();

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return '📢';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-500/20 border-green-500/30 text-green-300';
      case 'error':
        return 'bg-red-500/20 border-red-500/30 text-red-300';
      case 'warning':
        return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300';
      case 'info':
        return 'bg-blue-500/20 border-blue-500/30 text-blue-300';
      default:
        return 'bg-gray-500/20 border-gray-500/30 text-gray-300';
    }
  };

  if (state.notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {state.notifications.map((notification) => (
        <div
          key={notification.id}
          className={`max-w-sm p-4 rounded-lg border backdrop-blur-sm ${getNotificationColor(notification.type)} animate-in slide-in-from-right-5 duration-300`}
        >
          <div className="flex items-start gap-3">
            <span className="text-lg flex-shrink-0">
              {getNotificationIcon(notification.type)}
            </span>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm mb-1" style={{fontFamily: 'Inter'}}>
                {notification.title}
              </h4>
              <p className="text-sm opacity-90" style={{fontFamily: 'Inter'}}>
                {notification.message}
              </p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="flex-shrink-0 text-current opacity-60 hover:opacity-100 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DemoNotifications;
