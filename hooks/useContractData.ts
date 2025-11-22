/**
 * Contract Data Hooks - DEMO MODE
 * Returns mock contract data for showcase purposes
 */

import { useQuery } from '@tanstack/react-query';
import { useNetwork } from '@/contexts/NetworkContext';
import { formatTokenAmount } from '@/lib/web3';
import { getTokenContract } from '@/lib/contracts';

/**
 * Generate mock balance
 */
function generateMockBalance(): bigint {
  const balance = Math.random() * 10000;
  return BigInt(Math.floor(balance * 1e6));
}

/**
 * Hook to fetch faucet cooldown status - MOCKED
 */
export function useFaucetCooldown(token: string) {
  const { selectedNetwork } = useNetwork();

  return useQuery({
    queryKey: ['faucet', 'cooldown', selectedNetwork.id, token],
    queryFn: async () => {
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Mock: can request after 24 hours (use localStorage to track)
      const storageKey = `faucet-cooldown-${selectedNetwork.id}-${token}`;
      const lastRequest = typeof window !== 'undefined' 
        ? localStorage.getItem(storageKey) 
        : null;
      
      const now = BigInt(Math.floor(Date.now() / 1000));
      const dripInterval = BigInt(24 * 60 * 60); // 24 hours
      const lastDripTime = lastRequest ? BigInt(parseInt(lastRequest)) : 0n;
      const timeUntilNext = lastDripTime + dripInterval;
      const canRequest = now >= timeUntilNext;
      const remaining = canRequest ? 0n : timeUntilNext - now;

      return {
        canRequest,
        remaining,
        lastDripTime,
        dripInterval,
      };
    },
    enabled: !!token,
    staleTime: 10000,
    refetchInterval: 60000,
  });
}

/**
 * Hook to fetch faucet limits - MOCKED
 */
export function useFaucetLimits(token: string) {
  const { selectedNetwork } = useNetwork();

  return useQuery({
    queryKey: ['faucet', 'limits', selectedNetwork.id, token],
    queryFn: async () => {
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const tokenData = getTokenContract(selectedNetwork.id, token as any);
      
      // Mock limits based on token
      const limits: Record<string, { maxBalance: string; dripAmount: string }> = {
        DAI: { maxBalance: '50', dripAmount: '1' },
        WETH: { maxBalance: '10', dripAmount: '0.01' },
      };
      
      const defaultLimits = { maxBalance: '100', dripAmount: '10' };
      const tokenLimits = limits[token] || defaultLimits;
      
      const maxBalance = BigInt(Math.floor(parseFloat(tokenLimits.maxBalance) * 10 ** tokenData.decimals));
      const dripAmount = BigInt(Math.floor(parseFloat(tokenLimits.dripAmount) * 10 ** tokenData.decimals));

      return {
        maxBalance,
        dripAmount,
        formattedMaxBalance: tokenLimits.maxBalance,
        formattedDripAmount: tokenLimits.dripAmount,
      };
    },
    enabled: !!token,
    staleTime: 300000,
  });
}

/**
 * Hook to fetch staking data - MOCKED
 */
export function useStakingData(token: string) {
  const { selectedNetwork } = useNetwork();

  return useQuery({
    queryKey: ['staking', selectedNetwork.id, token],
    queryFn: async () => {
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const tokenData = getTokenContract(selectedNetwork.id, token as any);
      
      // Mock staked amount and rewards
      const staked = generateMockBalance();
      const claimableRewards = BigInt(Math.floor(Math.random() * 100 * 1e18));
      
      const formattedStaked = formatTokenAmount(staked, tokenData.decimals);
      const formattedRewards = formatTokenAmount(claimableRewards, 18);

      return {
        staked,
        formattedStaked,
        claimableRewards,
        formattedRewards,
      };
    },
    enabled: !!token,
    staleTime: 10000,
    refetchInterval: 30000,
  });
}

/**
 * Hook to fetch bridge fee - MOCKED
 */
export function useBridgeFee() {
  const { selectedNetwork } = useNetwork();

  return useQuery({
    queryKey: ['bridge', 'fee', selectedNetwork.id],
    queryFn: async () => {
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Mock bridge fee: 0.001 native token
      return BigInt('1000000000000000'); // 0.001 ETH in wei
    },
    staleTime: 300000,
  });
}

/**
 * Hook to fetch APY - MOCKED
 */
export function useStakingAPY() {
  const { selectedNetwork } = useNetwork();

  return useQuery({
    queryKey: ['staking', 'apy', selectedNetwork.id],
    queryFn: async () => {
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const { formatAPY } = await import('@/lib/apy-calculator');
      // Return fixed APY of 12.5%
      return formatAPY(12.5);
    },
    staleTime: 300000,
  });
}
