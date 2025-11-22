"use client";
import React, { useState, useEffect } from 'react';
import { useNetwork } from '@/contexts/NetworkContext';
import { formatTokenAmount } from '@/lib/web3';
import { TOKEN_CONTRACTS, TokenSymbol } from '@/lib/contracts';

// Mock wallet address for demo
const MOCK_ADDRESS = '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6';

interface ConnectWalletProps {
  width?: string;
  height?: string;
  theme?: 'light' | 'dark';
  onSuccess?: (address: string) => void;
  onDisconnect?: () => void;
}

type WalletType = 'metamask' | 'coinbase' | 'okx' | 'phantom' | 'walletconnect';

/**
 * Generate mock balance for a token
 */
function generateMockBalance(): string {
  const balance = Math.random() * 10000;
  return balance.toFixed(Math.floor(Math.random() * 4) + 2);
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({
  width = "400px",
  height = "auto",
  theme = "light",
  onSuccess,
  onDisconnect
}) => {
  const [isConnecting, setIsConnecting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [connectedAddress, setConnectedAddress] = useState<string | null>(null);
  const [ensName, setEnsName] = useState<string | null>(null);
  const [isCheckingConnection, setIsCheckingConnection] = useState(false);
  const [tokenBalances, setTokenBalances] = useState<Record<string, string>>({});
  const [isLoadingBalances, setIsLoadingBalances] = useState(false);
  const { selectedNetwork } = useNetwork();

  // Helper function to format address
  const formatAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Fetch token balances - MOCKED
  const fetchTokenBalances = async () => {
    if (!connectedAddress) {
      return;
    }

    setIsLoadingBalances(true);
    try {
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const balances: Record<string, string> = {};
      const tokens = TOKEN_CONTRACTS[selectedNetwork.id];

      // Generate mock balances for all tokens
      Object.keys(tokens).forEach((symbol) => {
        balances[symbol] = generateMockBalance();
      });

      setTokenBalances(balances);
    } catch (err) {
      console.error('Error fetching token balances:', err);
    } finally {
      setIsLoadingBalances(false);
    }
  };

  // Add token to wallet - MOCKED
  const addTokenToWallet = async (tokenSymbol: string) => {
    // Demo mode - just show success message
    setError(null);
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 300));
    // In demo mode, we don't actually add tokens
  };

  // Check for existing connection on mount - MOCKED
  useEffect(() => {
    const checkExistingConnection = async () => {
      setIsCheckingConnection(true);
      // Demo mode - no automatic connection
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsCheckingConnection(false);
    };

    checkExistingConnection();
  }, [onSuccess, onDisconnect]);

  // Fetch balances when address or network changes
  useEffect(() => {
    if (connectedAddress) {
      fetchTokenBalances();
    } else {
      setTokenBalances({});
    }
  }, [connectedAddress, selectedNetwork.id]);

  const connectWallet = async (walletType: WalletType) => {
    // Prevent double connection
    if (connectedAddress) {
      setError('Wallet is already connected');
      return;
    }
    if (typeof window === 'undefined') {
      setError('Please use a browser environment');
      return;
    }

    setIsConnecting(walletType);
    setError(null);

    try {
      // DEMO MODE: Mock wallet connection
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Set mock address
      const address = MOCK_ADDRESS;
      setConnectedAddress(address);
      setEnsName(null); // No ENS in demo mode
      
      if (onSuccess) {
        onSuccess(address);
      }
    } catch (err: any) {
      setError(err.message || `Failed to connect ${walletType}`);
    } finally {
      setIsConnecting(null);
    }
  };

  const disconnectWallet = async () => {
    try {
      // Clear local state
      setConnectedAddress(null);
      setEnsName(null);
      setError(null);
      setTokenBalances({});
      
      if (onDisconnect) {
        onDisconnect();
      }
    } catch (err: any) {
      setError(err.message || 'Failed to disconnect wallet');
    }
  };

  const wallets = [
    {
      id: 'metamask' as WalletType,
      name: 'MetaMask',
      icon: '/logo/brand/wallets/metamask-icon-fox.svg',
      available: true // Demo mode - all wallets available
    },
    {
      id: 'coinbase' as WalletType,
      name: 'Coinbase Wallet',
      icon: '/logo/brand/wallets/coinbase-logo.svg',
      available: true
    },
    {
      id: 'okx' as WalletType,
      name: 'OKX Wallet',
      icon: '/logo/brand/wallets/okx-logo-brandlogo.svg',
      available: true
    },
    {
      id: 'phantom' as WalletType,
      name: 'Phantom',
      icon: '/logo/brand/wallets/Phantom_Logo.svg',
      available: true
    },
    {
      id: 'walletconnect' as WalletType,
      name: 'WalletConnect',
      icon: '/logo/brand/wallets/walletconnect-logo.svg',
      available: true
    }
  ];

  // Show connected state
  if (connectedAddress && !isCheckingConnection) {
    return (
      <div 
        className={`p-6 rounded-lg border-2 border-gray-200 ${
          theme === 'light' 
            ? 'bg-white border-gray-200 text-gray-800' 
            : 'bg-gray-900 border-gray-700 text-white'
        }`}
        style={{ width, height }}
      >
        <div className="text-center mb-6">
          <div className="mb-4">
            <img 
              src="/logo/brand/hyperkit/Hyperkit Header Black.svg" 
              alt="Hyperkit" 
              className="h-8 mx-auto"
            />
          </div>
          <h3 className={`text-2xl font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`} style={{fontFamily: 'Inter'}}>
            Wallet Connected
          </h3>
          <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
            Demo Mode - Mock Wallet
          </p>
        </div>

        <div className={`mb-4 p-4 rounded-lg border ${
          theme === 'light' 
            ? 'bg-green-50 border-green-200' 
            : 'bg-green-900/20 border-green-700'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className={`w-3 h-3 rounded-full ${
              theme === 'light' ? 'bg-green-500' : 'bg-green-400'
            }`}></div>
            <span className={`text-sm font-semibold ${
              theme === 'light' ? 'text-green-800' : 'text-green-300'
            }`}>
              Connected
            </span>
          </div>
          
          <div className="text-center">
            <p className={`text-lg font-mono font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              {formatAddress(connectedAddress)}
            </p>
            <p className={`text-xs mt-2 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
              {connectedAddress}
            </p>
          </div>
        </div>

        {/* Token Balances Section */}
        <div className={`mb-4 p-3 rounded-lg border ${
          theme === 'light' 
            ? 'bg-gray-50 border-gray-200' 
            : 'bg-gray-800 border-gray-700'
        }`}>
          <h4 className={`text-sm font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Token Balances
          </h4>
          {isLoadingBalances ? (
            <p className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
              Loading balances...
            </p>
          ) : (
            <div className="space-y-1">
              {Object.entries(tokenBalances).map(([symbol, balance]) => (
                <div key={symbol} className="flex justify-between text-xs">
                  <span className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                    {symbol}:
                  </span>
                  <span className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    {parseFloat(balance).toLocaleString('en-US', { 
                      minimumFractionDigits: 2, 
                      maximumFractionDigits: 6 
                    })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Token Buttons */}
        <div className="mb-4">
          <h4 className={`text-sm font-semibold mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            Add Tokens to Wallet
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(TOKEN_CONTRACTS[selectedNetwork.id]).slice(0, 4).map((symbol) => (
              <button
                key={symbol}
                onClick={() => addTokenToWallet(symbol)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  theme === 'light'
                    ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    : 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50'
                }`}
              >
                + {symbol}
              </button>
            ))}
          </div>
        </div>

        {/* Disconnect Button */}
        <button
          onClick={disconnectWallet}
          className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${
            theme === 'light'
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          Disconnect Wallet
        </button>
      </div>
    );
  }

  // Show connection UI
  return (
    <div 
      className={`p-6 rounded-lg border-2 border-gray-200 ${
        theme === 'light' 
          ? 'bg-white border-gray-200 text-gray-800' 
          : 'bg-gray-900 border-gray-700 text-white'
      }`}
      style={{ width, height }}
    >
      <div className="text-center mb-6">
        <div className="mb-4">
          <img 
            src="/logo/brand/hyperkit/Hyperkit Header Black.svg" 
            alt="Hyperkit" 
            className="h-8 mx-auto"
          />
        </div>
        <h3 className={`text-2xl font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`} style={{fontFamily: 'Inter'}}>
          Connect Wallet
        </h3>
        <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
          Demo Mode - Connect to view mock wallet
        </p>
      </div>

      {error && (
        <div className={`mb-4 p-3 rounded-lg ${
          theme === 'light' 
            ? 'bg-red-100 text-red-700' 
            : 'bg-red-900/30 text-red-400'
        }`}>
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-2">
        {wallets.map((wallet) => (
          <button
            key={wallet.id}
            onClick={() => connectWallet(wallet.id)}
            disabled={isConnecting !== null}
            className={`w-full p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
              theme === 'light'
                ? 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                : 'border-gray-700 hover:border-gray-600 hover:bg-gray-800'
            } ${
              isConnecting !== null ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            <div className="flex items-center gap-3">
              <img 
                src={wallet.icon} 
                alt={wallet.name} 
                className="w-8 h-8"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/icons/wallet.svg';
                }}
              />
              <span className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {wallet.name}
              </span>
            </div>
            {isConnecting === wallet.id && (
              <div className="animate-spin">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      <p className={`mt-4 text-xs text-center ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
        Demo Mode: All wallet connections are simulated
      </p>
    </div>
  );
};

export default ConnectWallet;
