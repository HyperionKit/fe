/**
 * Approval Manager - DEMO MODE
 * All approval functionality is mocked for showcase purposes
 */

import { NetworkId } from './networks';
import { TokenSymbol } from './contracts';

export interface ApprovalStatus {
  isApproved: boolean;
  allowance: bigint;
  required: bigint;
  needsApproval: boolean;
}

export interface ApprovalOptions {
  infinite?: boolean;
  gasLimit?: bigint;
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
 * Check approval status for a token - MOCKED
 */
export async function checkApproval(
  tokenSymbol: TokenSymbol,
  spenderAddress: string,
  requiredAmount: bigint,
  networkId: NetworkId,
  userAddress?: string
): Promise<ApprovalStatus> {
  // Demo mode - always return approved for UI purposes
  return {
    isApproved: true,
    allowance: requiredAmount * BigInt(2), // Mock: always have enough allowance
    required: requiredAmount,
    needsApproval: false,
  };
}

/**
 * Ensure token is approved for spending - MOCKED
 */
export async function ensureApproval(
  tokenSymbol: TokenSymbol,
  spenderAddress: string,
  amount: bigint,
  networkId: NetworkId,
  options: ApprovalOptions = {}
): Promise<{ approved: boolean; txHash?: string; error?: string }> {
  // Demo mode - always return approved
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    approved: true,
    txHash: generateMockTxHash(),
  };
}

/**
 * Revoke approval (set to 0) - MOCKED
 */
export async function revokeApproval(
  tokenSymbol: TokenSymbol,
  spenderAddress: string,
  networkId: NetworkId
): Promise<{ success: boolean; txHash?: string; error?: string }> {
  // Demo mode - always return success
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    success: true,
    txHash: generateMockTxHash(),
  };
}

/**
 * Batch check approvals for multiple tokens - MOCKED
 */
export async function checkBatchApprovals(
  tokens: Array<{ symbol: TokenSymbol; amount: bigint }>,
  spenderAddress: string,
  networkId: NetworkId,
  userAddress?: string
): Promise<Record<TokenSymbol, ApprovalStatus>> {
  const results: Record<TokenSymbol, ApprovalStatus> = {} as any;
  
  // Return all as approved
  tokens.forEach((token) => {
    results[token.symbol] = {
      isApproved: true,
      allowance: token.amount * BigInt(2),
      required: token.amount,
      needsApproval: false,
    };
  });
  
  return results;
}
