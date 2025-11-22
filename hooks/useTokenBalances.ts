// Custom hook for token balance management
// Provides token balance fetching and caching

import { useCallback } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { TokenSymbol } from '@/lib/contracts';

export function useTokenBalances() {
  const { tokenBalances, refreshBalances, address, isConnected } = useWallet();

  const getBalance = useCallback((token: TokenSymbol): string => {
    return tokenBalances[token] || '0';
  }, [tokenBalances]);

  const hasBalance = useCallback((token: TokenSymbol, minAmount: string = '0'): boolean => {
    const balance = getBalance(token);
    return parseFloat(balance) >= parseFloat(minAmount);
  }, [getBalance]);

  return {
    balances: tokenBalances,
    getBalance,
    hasBalance,
    refreshBalances,
    isLoading: !isConnected && address === null
  };
}

