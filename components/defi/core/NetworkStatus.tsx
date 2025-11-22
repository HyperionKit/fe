"use client";
import React from 'react';
import { useNetwork } from '@/contexts/NetworkContext';
import { useNetworkValidation } from '@/hooks/useNetworkValidation';
import { useWallet } from '@/contexts/WalletContext';

interface NetworkStatusProps {
  theme?: 'light' | 'dark';
  showChainId?: boolean;
  showFixButton?: boolean;
  compact?: boolean;
  className?: string;
}

export const NetworkStatus: React.FC<NetworkStatusProps> = ({
  theme = 'light',
  showChainId = false,
  showFixButton = true,
  compact = false,
  className = ''
}) => {
  const { selectedNetwork } = useNetwork();
  const { isValid, isChecking, error, mismatch, promptSwitch } = useNetworkValidation();
  const { isConnected } = useWallet();

  if (!isConnected) {
    return (
      <div className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} ${className}`}>
        {compact ? 'Not connected' : 'Wallet not connected'}
      </div>
    );
  }

  if (isChecking) {
    return (
      <div className={`text-xs ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'} ${className}`}>
        Checking network...
      </div>
    );
  }

  if (mismatch || !isValid) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs ${
          theme === 'light'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-yellow-900/30 text-yellow-300'
        }`}>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{compact ? 'Network mismatch' : 'Network mismatch detected'}</span>
        </div>
        {showFixButton && (
          <button
            onClick={promptSwitch}
            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
              theme === 'light'
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Fix
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs ${
        theme === 'light'
          ? 'bg-green-100 text-green-800'
          : 'bg-green-900/30 text-green-300'
      }`}>
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>{compact ? selectedNetwork.name : `Connected to ${selectedNetwork.name}`}</span>
        {showChainId && (
          <span className="opacity-75">({selectedNetwork.chainId})</span>
        )}
      </div>
    </div>
  );
};

export default NetworkStatus;

