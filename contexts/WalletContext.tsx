"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useNetwork } from './NetworkContext';
import { formatTokenAmount } from '@/lib/web3';
import { TOKEN_CONTRACTS, TokenSymbol } from '@/lib/contracts';

// Mock wallet address for demo
const MOCK_ADDRESS = '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6';

interface WalletContextType {
  address: string | null;
  isConnected: boolean;
  chainId: number | null;
  tokenBalances: Record<string, string>;
  isLoading: boolean;
  isConnecting: boolean;
  error: string | null;
  connect: (walletType?: string) => Promise<void>;
  disconnect: () => void;
  refreshBalances: () => Promise<void>;
  checkConnection: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

/**
 * Generate mock balance for a token
 */
function generateMockBalance(): string {
  // Generate random balance between 0 and 10000
  const balance = Math.random() * 10000;
  return balance.toFixed(Math.floor(Math.random() * 4) + 2); // 2-6 decimal places
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const { selectedNetwork } = useNetwork();
  const [address, setAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [chainId, setChainId] = useState<number | null>(null);
  const [tokenBalances, setTokenBalances] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for existing connection on mount - MOCKED
  const checkConnection = useCallback(async () => {
    if (typeof window === 'undefined') return;

    // Demo mode - no automatic connection
    setIsLoading(false);
  }, []);

  // Check connection on mount
  useEffect(() => {
    checkConnection();
  }, [checkConnection]);

  // Fetch token balances - MOCKED
  const refreshBalances = useCallback(async () => {
    if (!address || typeof window === 'undefined') {
      setTokenBalances({});
      return;
    }

    try {
      const balances: Record<string, string> = {};
      const tokens = TOKEN_CONTRACTS[selectedNetwork.id];

      // Generate mock balances for all tokens
      Object.keys(tokens).forEach((symbol) => {
        balances[symbol] = generateMockBalance();
      });

      setTokenBalances(balances);
    } catch (err) {
      console.error('Error fetching token balances:', err);
    }
  }, [address, selectedNetwork.id]);

  // Refresh balances when address or network changes
  useEffect(() => {
    if (isConnected && address) {
      refreshBalances();
    } else {
      setTokenBalances({});
    }
  }, [isConnected, address, selectedNetwork.id, refreshBalances]);

  // Connect wallet - MOCKED
  const connect = useCallback(async (walletType?: string) => {
    if (typeof window === 'undefined') return;

    setIsConnecting(true);
    setError(null);

    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Set mock address and connection state
      setAddress(MOCK_ADDRESS);
      setIsConnected(true);
      setChainId(selectedNetwork.chainId);

      // Refresh balances
      await refreshBalances();
    } catch (err: any) {
      setError(err.message || 'Failed to connect wallet');
      throw err;
    } finally {
      setIsConnecting(false);
    }
  }, [refreshBalances, selectedNetwork.chainId]);

  // Disconnect wallet
  const disconnect = useCallback(() => {
    setAddress(null);
    setIsConnected(false);
    setChainId(null);
    setTokenBalances({});
    setError(null);
  }, []);

  const value: WalletContextType = {
    address,
    isConnected,
    chainId,
    tokenBalances,
    isLoading,
    isConnecting,
    error,
    connect,
    disconnect,
    refreshBalances,
    checkConnection
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet(): WalletContextType {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
