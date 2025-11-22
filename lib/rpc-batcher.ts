/**
 * RPC Batcher - DEMO MODE
 * All RPC batching is mocked for showcase purposes
 */

import { NetworkId } from './networks';

export interface BatchCall {
  address: string;
  abi: any[];
  functionName: string;
  args?: any[];
}

export interface BatchCallResult {
  success: boolean;
  data?: any;
  error?: string;
}

/**
 * Execute multiple contract calls in a single batch - MOCKED
 */
export async function batchRpcCalls(
  calls: BatchCall[],
  networkId: NetworkId
): Promise<BatchCallResult[]> {
  if (calls.length === 0) {
    return [];
  }

  // Demo mode - return mock successful results
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return calls.map(() => ({
    success: true,
    data: BigInt(0), // Mock data
  }));
}

/**
 * Batch balance checks for multiple tokens - MOCKED
 */
export async function batchBalanceChecks(
  tokenAddresses: string[],
  userAddress: string,
  networkId: NetworkId
): Promise<Record<string, bigint>> {
  // Demo mode - return mock balances
  const balances: Record<string, bigint> = {};
  
  tokenAddresses.forEach((address) => {
    // Generate random balance
    const randomBalance = Math.random() * 10000;
    balances[address] = BigInt(Math.floor(randomBalance * 1e6));
  });
  
  return balances;
}

/**
 * Batch contract availability checks - MOCKED
 */
export async function batchContractAvailabilityChecks(
  contractAddresses: string[],
  networkId: NetworkId
): Promise<Record<string, boolean>> {
  // Demo mode - all contracts are available
  const availability: Record<string, boolean> = {};
  
  contractAddresses.forEach((address) => {
    availability[address] = true;
  });
  
  return availability;
}
