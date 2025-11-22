// Custom hook for contract instance management - DEMO MODE
// Returns mock contract instances

import { useCallback } from 'react';
import { useNetwork } from '@/contexts/NetworkContext';

// Mock contract interface
interface MockContract {
  address: string;
  [key: string]: any;
}

export function useContract() {
  const { selectedNetwork } = useNetwork();

  const getContract = useCallback(async (
    address: string,
    abi: any[]
  ): Promise<MockContract> => {
    // Demo mode - return mock contract
    return {
      address,
      // Add common methods as mocks
      balanceOf: async () => BigInt(0),
      approve: async () => ({ hash: '0x' + '0'.repeat(64), wait: async () => ({ status: 1 }) }),
    } as MockContract;
  }, [selectedNetwork.id]);

  return {
    getContract,
    networkId: selectedNetwork.id
  };
}
