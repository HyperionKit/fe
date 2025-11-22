/**
 * Unified DeFi Transaction Hook - DEMO MODE
 * Mocks transaction execution for showcase purposes
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { NetworkId } from '@/lib/networks';
import { ensureApproval, ApprovalOptions } from '@/lib/approval-manager';
import { TokenSymbol } from '@/lib/contracts';
import { useNetwork } from '@/contexts/NetworkContext';

export type TransactionStatus = 'idle' | 'approving' | 'pending' | 'confirmed' | 'failed';

export interface DeFiTransactionConfig<TParams> {
  // Transaction execution function - will be mocked
  executeTransaction: (params: TParams) => Promise<any>;
  
  // Approval configuration (if needed)
  approval?: {
    tokenSymbol: TokenSymbol;
    spenderAddress: string;
    getAmount: (params: TParams) => bigint;
    options?: ApprovalOptions;
  };
  
  // Validation function (optional)
  validateParams?: (params: TParams) => Promise<{ valid: boolean; error?: string }>;
  
  // Error context for better error messages
  errorContext?: (params: TParams) => any;
  
  // Callbacks
  onSuccess?: (txHash: string, receipt?: any) => void;
  onError?: (error: string) => void;
  
  // Contract ABI for error decoding (optional)
  contractABI?: any[];
}

export interface UseDeFiTransactionReturn<TParams> {
  execute: (params: TParams) => Promise<void>;
  status: TransactionStatus;
  txHash: string | null;
  error: string | null;
  isExecuting: boolean;
  isApproving: boolean;
  reset: () => void;
}

/**
 * Generate mock transaction hash
 */
function generateMockTxHash(): string {
  return '0x' + Array.from({ length: 64 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
}

export function useDeFiTransaction<TParams>(
  config: DeFiTransactionConfig<TParams>
): UseDeFiTransactionReturn<TParams> {
  const { selectedNetwork } = useNetwork();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (params: TParams) => {
      // Step 1: Validate parameters
      if (config.validateParams) {
        const validation = await config.validateParams(params);
        if (!validation.valid) {
          throw new Error(validation.error || 'Invalid parameters');
        }
      }

      // Step 2: Handle approval if needed (mocked)
      if (config.approval) {
        const amount = config.approval.getAmount(params);
        const approvalResult = await ensureApproval(
          config.approval.tokenSymbol,
          config.approval.spenderAddress,
          amount,
          selectedNetwork.id,
          config.approval.options
        );

        if (!approvalResult.approved) {
          throw new Error(approvalResult.error || 'Token approval failed');
        }
      }

      // Step 3: Mock transaction execution
      // Simulate delay (500-2000ms)
      const delay = 500 + Math.random() * 1500;
      await new Promise(resolve => setTimeout(resolve, delay));

      // Simulate 95% success rate
      const success = Math.random() > 0.05;
      
      if (!success) {
        throw new Error('Transaction failed: Insufficient gas');
      }

      // Generate mock transaction hash and receipt
      const txHash = generateMockTxHash();
      const receipt = {
        status: 1,
        hash: txHash,
        blockNumber: Math.floor(Math.random() * 1000000),
        gasUsed: BigInt(21000 + Math.floor(Math.random() * 50000))
      };

      return { txHash, receipt };
    },
    onSuccess: (data, params) => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: ['balance'] });
      queryClient.invalidateQueries({ queryKey: ['contract'] });
      
      if (config.onSuccess) {
        config.onSuccess(data.txHash, data.receipt);
      }
    },
    onError: (error: any, params) => {
      const errorMessage = error.message || 'Transaction failed';
      
      if (config.onError) {
        config.onError(errorMessage);
      }
    },
  });

  const execute = useCallback(
    async (params: TParams) => {
      await mutation.mutateAsync(params);
    },
    [mutation]
  );

  const reset = useCallback(() => {
    mutation.reset();
  }, [mutation]);

  // Determine status
  let status: TransactionStatus = 'idle';
  if (mutation.isPending) {
    status = 'pending';
  } else if (mutation.isSuccess) {
    status = 'confirmed';
  } else if (mutation.isError) {
    status = 'failed';
  }

  return {
    execute,
    status,
    txHash: mutation.data?.txHash || null,
    error: mutation.error ? (mutation.error as Error).message : null,
    isExecuting: mutation.isPending,
    isApproving: false,
    reset,
  };
}
