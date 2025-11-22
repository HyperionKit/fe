/**
 * Batch Operations - DEMO MODE
 * All batch operations are mocked for showcase purposes
 */

import { NetworkId } from './networks';
import { TokenSymbol } from './contracts';
import { ensureApproval } from './approval-manager';

export interface BatchApprovalOperation {
  tokenSymbol: TokenSymbol;
  spenderAddress: string;
  amount: bigint;
  infinite?: boolean;
}

export interface BatchTransferOperation {
  tokenSymbol: TokenSymbol;
  to: string;
  amount: bigint;
}

/**
 * Generate mock transaction hash
 */
function generateMockTxHash(): string {
  return '0x' + Array.from({ length: 64 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
}

/**
 * Batch approve multiple tokens - MOCKED
 */
export async function batchApprove(
  operations: BatchApprovalOperation[],
  networkId: NetworkId
): Promise<Array<{ tokenSymbol: TokenSymbol; success: boolean; txHash?: string; error?: string }>> {
  // Demo mode - simulate batch approval
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return operations.map((op) => ({
    tokenSymbol: op.tokenSymbol,
    success: true,
    txHash: generateMockTxHash(),
  }));
}

/**
 * Batch transfer multiple tokens - MOCKED
 */
export async function batchTransfer(
  operations: BatchTransferOperation[],
  networkId: NetworkId
): Promise<Array<{ tokenSymbol: TokenSymbol; success: boolean; txHash?: string; error?: string }>> {
  // Demo mode - simulate batch transfer
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return operations.map((op) => ({
    tokenSymbol: op.tokenSymbol,
    success: true,
    txHash: generateMockTxHash(),
  }));
}

/**
 * Batch check balances for multiple tokens - MOCKED
 */
export async function batchCheckBalances(
  tokenSymbols: TokenSymbol[],
  userAddress: string,
  networkId: NetworkId
): Promise<Record<TokenSymbol, bigint>> {
  // Demo mode - return mock balances
  const balances: Record<TokenSymbol, bigint> = {} as any;
  
  tokenSymbols.forEach((symbol) => {
    // Generate random balance between 0 and 10000
    const randomBalance = Math.random() * 10000;
    balances[symbol] = BigInt(Math.floor(randomBalance * 1e6)); // Convert to wei-like units
  });
  
  return balances;
}
