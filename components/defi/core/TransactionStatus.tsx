"use client";
import React, { useState, useEffect } from 'react';
import { useNetwork } from '@/contexts/NetworkContext';

interface TransactionStatusProps {
  status: 'idle' | 'approving' | 'pending' | 'confirmed' | 'failed';
  txHash?: string | null;
  error?: string | null;
  theme?: 'light' | 'dark';
  className?: string;
}

export const TransactionStatus: React.FC<TransactionStatusProps> = ({
  status,
  txHash,
  error,
  theme = 'light',
  className = ''
}) => {
  const { selectedNetwork } = useNetwork();
  const [explorerUrl, setExplorerUrl] = useState<string>('');

  useEffect(() => {
    if (txHash && selectedNetwork.blockExplorer) {
      setExplorerUrl(`${selectedNetwork.blockExplorer}/tx/${txHash}`);
    } else {
      setExplorerUrl('');
    }
  }, [txHash, selectedNetwork.blockExplorer, selectedNetwork.id]);

  if (status === 'idle') {
    return null;
  }

  const getStatusConfig = () => {
    switch (status) {
      case 'approving':
        return {
          icon: (
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ),
          message: 'Approving transaction...',
          bgColor: theme === 'light' ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/30 text-blue-300'
        };
      case 'pending':
        return {
          icon: (
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ),
          message: 'Transaction pending...',
          bgColor: theme === 'light' ? 'bg-yellow-100 text-yellow-700' : 'bg-yellow-900/30 text-yellow-300'
        };
      case 'confirmed':
        return {
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ),
          message: 'Transaction confirmed!',
          bgColor: theme === 'light' ? 'bg-green-100 text-green-700' : 'bg-green-900/30 text-green-300'
        };
      case 'failed':
        return {
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          ),
          message: error || 'Transaction failed',
          bgColor: theme === 'light' ? 'bg-red-100 text-red-700' : 'bg-red-900/30 text-red-300'
        };
      default:
        return null;
    }
  };

  const config = getStatusConfig();
  if (!config) return null;

  return (
    <div className={`p-2.5 rounded-lg flex items-center gap-2 ${config.bgColor} ${className}`}>
      {config.icon}
      <div className="flex-1">
        <p className="text-xs font-medium">{config.message}</p>
        {txHash && explorerUrl && (
          <a
            href={explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs underline mt-0.5 block ${
              theme === 'light' ? 'text-blue-600' : 'text-blue-400'
            }`}
          >
            View on explorer: {txHash.slice(0, 10)}...
          </a>
        )}
      </div>
    </div>
  );
};

export default TransactionStatus;

