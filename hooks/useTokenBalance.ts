/**
 * Token Balance Hook - DEMO MODE
 * Returns mock token balances for showcase purposes
 */

import { useQuery } from '@tanstack/react-query';
import { useNetwork } from '@/contexts/NetworkContext';
import { formatTokenAmount } from '@/lib/web3';
import { getTokenContract as getTokenContractConfig, TokenSymbol } from '@/lib/contracts';
import { useDebounce } from 'use-debounce';

export interface UseTokenBalanceOptions {
  enabled?: boolean;
  refetchInterval?: number;
  staleTime?: number;
}

/**
 * Generate mock balance
 */
function generateMockBalance(): string {
  const balance = Math.random() * 10000;
  return balance.toFixed(Math.floor(Math.random() * 4) + 2);
}

/**
 * Hook to fetch token balance for a user - MOCKED
 */
export function useTokenBalance(
  tokenSymbol: TokenSymbol,
  networkId?: string,
  userAddress?: string,
  options: UseTokenBalanceOptions = {}
) {
  const { selectedNetwork } = useNetwork();
  const network = networkId || selectedNetwork.id;
  
  // Debounce token symbol changes
  const [debouncedToken] = useDebounce(tokenSymbol, 200);

  return useQuery({
    queryKey: ['balance', debouncedToken, network, userAddress],
    queryFn: async () => {
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 300));

      // Return mock balance
      const mockBalance = generateMockBalance();
      const tokenData = getTokenContractConfig(network as any, debouncedToken);
      const balanceBigInt = BigInt(Math.floor(parseFloat(mockBalance) * 10 ** tokenData.decimals));
      
      return {
        raw: balanceBigInt,
        formatted: mockBalance,
        decimals: tokenData.decimals,
        symbol: debouncedToken,
      };
    },
    enabled: options.enabled !== false && !!debouncedToken && !!network,
    staleTime: options.staleTime ?? 10000,
    refetchInterval: options.refetchInterval ?? 30000,
    retry: 2,
  });
}

/**
 * Hook to fetch multiple token balances - MOCKED
 */
export function useTokenBalances(
  tokenSymbols: TokenSymbol[],
  networkId?: string,
  userAddress?: string,
  options: UseTokenBalanceOptions = {}
) {
  const { selectedNetwork } = useNetwork();
  const network = networkId || selectedNetwork.id;
  
  // Debounce token symbols
  const [debouncedTokens] = useDebounce(tokenSymbols, 200);

  return useQuery({
    queryKey: ['balances', debouncedTokens.sort().join(','), network, userAddress],
    queryFn: async () => {
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 300));

      // Return mock balances for all tokens
      const balances = debouncedTokens.map((tokenSymbol) => {
        const mockBalance = generateMockBalance();
        const tokenData = getTokenContractConfig(network as any, tokenSymbol);
        const balanceBigInt = BigInt(Math.floor(parseFloat(mockBalance) * 10 ** tokenData.decimals));
        
        return {
          symbol: tokenSymbol,
          raw: balanceBigInt,
          formatted: mockBalance,
          decimals: tokenData.decimals,
        };
      });

      return balances;
    },
    enabled: options.enabled !== false && debouncedTokens.length > 0 && !!network,
    staleTime: options.staleTime ?? 10000,
    refetchInterval: options.refetchInterval ?? 30000,
    retry: 2,
  });
}
