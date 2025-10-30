"use client";
import React from 'react';

interface ConnectWalletProps {
  width?: string;
  height?: string;
  theme?: 'light' | 'dark';
  onSuccess?: (address: string) => void;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({
  width = "400px",
  height = "auto",
  theme = "light",
  onSuccess
}) => {
  const handleConnect = () => {
    // Simulate wallet connection
    const mockAddress = "0x1234567890abcdef1234567890abcdef12345678";
    if (onSuccess) {
      onSuccess(mockAddress);
    }
  };

  return (
    <div 
      className={`p-6 rounded-lg border-2 border-dashed ${
        theme === 'light' 
          ? 'bg-gray-50 border-gray-300 text-gray-800' 
          : 'bg-gray-900 border-gray-600 text-white'
      }`}
      style={{ width, height }}
    >
      <div className="text-center">
        <div className="mb-4">
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
            theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
          }`}>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 010.808 6.808c5.076-5.076 13.308-5.076 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05c-3.124-3.124-8.19-3.124-11.314 0a1 1 0 01-1.414-1.414c4.109-4.109 10.77-4.109 14.879 0a1 1 0 01-1.414 1.414zM12.12 13.88c-1.171-1.171-3.073-1.171-4.244 0a1 1 0 01-1.415-1.415c2.053-2.053 5.378-2.053 7.432 0a1 1 0 01-1.415 1.415zM9 16a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">Connect Wallet</h3>
        <p className="text-sm mb-4 opacity-75">
          Connect your wallet to get started
        </p>
        <button
          onClick={handleConnect}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            theme === 'light'
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;
