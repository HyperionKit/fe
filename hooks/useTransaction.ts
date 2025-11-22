// Custom hook for transaction management - DEMO MODE
// Simplified transaction tracking for showcase purposes

import { useCallback, useState } from 'react';
import { transactionManager, TransactionMetadata } from '@/lib/transaction-manager';
import { useNetwork } from '@/contexts/NetworkContext';
import { handleWeb3Error, isRetryableError, isUserRejection } from '@/lib/error-handler';

// Mock transaction response interface
interface MockTransactionResponse {
  hash: string;
  wait: () => Promise<{ status: number; hash: string; blockNumber?: number; gasUsed?: bigint }>;
}

export function useTransaction() {
  const { selectedNetwork } = useNetwork();
  const [pendingTxs, setPendingTxs] = useState<string[]>([]);

  const submitTransaction = useCallback(async (
    tx: MockTransactionResponse,
    metadata: Omit<TransactionMetadata, 'networkId'>
  ): Promise<string> => {
    const fullMetadata: TransactionMetadata = {
      ...metadata,
      networkId: selectedNetwork.id
    };

    const state = await transactionManager.submitTransaction(tx, fullMetadata);
    setPendingTxs(prev => [...prev, state.hash]);
    
    // Wait for confirmation
    try {
      await transactionManager.waitForConfirmation(state.hash);
      setPendingTxs(prev => prev.filter(hash => hash !== state.hash));
    } catch (error) {
      setPendingTxs(prev => prev.filter(hash => hash !== state.hash));
      throw error;
    }

    return state.hash;
  }, [selectedNetwork.id]);

  const getTransaction = useCallback((txHash: string) => {
    return transactionManager.getTransaction(txHash);
  }, []);

  const getHistory = useCallback(() => {
    return transactionManager.getTransactionHistory(selectedNetwork.id);
  }, [selectedNetwork.id]);

  const retryTransaction = useCallback(async (txHash: string): Promise<string> => {
    const tx = getTransaction(txHash);
    if (!tx) {
      throw new Error('Transaction not found');
    }

    if (!isRetryableError(tx.error)) {
      throw new Error('Transaction is not retryable');
    }

    // Demo mode - retry not implemented
    throw new Error('Retry functionality not available in demo mode');
  }, [getTransaction]);

  return {
    submitTransaction,
    getTransaction,
    getHistory,
    retryTransaction,
    pendingTxs,
    hasPendingTxs: pendingTxs.length > 0
  };
}
