/**
 * Gas Estimation Hook - DEMO MODE
 * Returns fixed gas estimates for showcase purposes
 */

import { useQuery } from '@tanstack/react-query';
import { useNetwork } from '@/contexts/NetworkContext';

// Mock gas estimate interface
interface GasEstimate {
  gasLimit: bigint;
  gasPrice: bigint;
  maxFeePerGas?: bigint;
  maxPriorityFeePerGas?: bigint;
  estimatedCost: string;
}

export interface GasEstimateOptions {
  multiplier?: number;
}

/**
 * Hook to estimate gas for a transaction - MOCKED
 */
export function useGasEstimation(
  tx: any | null,
  options: GasEstimateOptions = {}
) {
  const { selectedNetwork } = useNetwork();

  return useQuery({
    queryKey: ['gasEstimation', selectedNetwork.id, tx ? JSON.stringify(tx) : null],
    queryFn: async () => {
      if (!tx) {
        throw new Error('Transaction is required');
      }
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Return fixed mock gas estimate
      const gasLimit = BigInt(21000);
      const gasPrice = BigInt('20000000000'); // 20 gwei
      
      return {
        gasLimit,
        gasPrice,
        maxFeePerGas: gasPrice,
        maxPriorityFeePerGas: gasPrice / BigInt(2),
        estimatedCost: '0.00042', // Mock cost
      } as GasEstimate;
    },
    enabled: !!tx,
    staleTime: 30000,
    retry: 1,
  });
}

/**
 * Hook to get current gas prices - MOCKED
 */
export function useGasPrices() {
  const { selectedNetwork } = useNetwork();

  return useQuery({
    queryKey: ['gasPrices', selectedNetwork.id],
    queryFn: async () => {
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Return fixed mock gas prices
      return {
        slow: BigInt('10000000000'), // 10 gwei
        standard: BigInt('20000000000'), // 20 gwei
        fast: BigInt('30000000000'), // 30 gwei
      };
    },
    staleTime: 30000,
    refetchInterval: 60000,
  });
}
