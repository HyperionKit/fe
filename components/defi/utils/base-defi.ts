/**
 * Base DeFi Component Utilities - DEMO MODE
 * Shared utilities and hooks for all DeFi components
 */

import { useNetwork } from '@/contexts/NetworkContext';
import { useContractAvailability } from '@/hooks/useContractAvailability';
import { useNetworkValidation } from '@/hooks/useNetworkValidation';
import { NetworkId } from '@/lib/networks';
import { getUserFriendlyMessage } from '@/lib/error-handler';

// Error context interface
export interface ErrorContext {
  networkId: NetworkId;
  contractType?: string;
  token?: string;
  operation?: string;
}

/**
 * Hook for common DeFi component setup
 */
export function useBaseDeFi(contractType: 'FAUCET' | 'BRIDGE' | 'LIQUIDITY_POOL' | 'STAKING_REWARDS') {
  const { selectedNetwork } = useNetwork();
  const networkValidation = useNetworkValidation();
  const contractAvailability = useContractAvailability();

  const isNetworkValid = networkValidation.isValid;
  const isContractAvailable = contractAvailability.availability[contractType] ?? false;

  const getErrorContext = (token?: string, operation?: string): ErrorContext => ({
    networkId: selectedNetwork.id,
    contractType,
    token,
    operation,
  });

  const formatError = (error: any, token?: string, operation?: string): string => {
    // Use simplified error handler
    return getUserFriendlyMessage(error);
  };

  return {
    selectedNetwork,
    isNetworkValid,
    isContractAvailable,
    getErrorContext,
    formatError,
  };
}

/**
 * Validate amount input
 */
export function validateAmount(amount: string): { valid: boolean; error?: string } {
  if (!amount || amount.trim() === '') {
    return { valid: false, error: 'Please enter an amount' };
  }

  const num = parseFloat(amount);
  if (isNaN(num) || num <= 0) {
    return { valid: false, error: 'Amount must be greater than 0' };
  }

  if (num > Number.MAX_SAFE_INTEGER) {
    return { valid: false, error: 'Amount is too large' };
  }

  return { valid: true };
}

/**
 * Format transaction status for display
 */
export function formatTransactionStatus(
  status: 'idle' | 'approving' | 'pending' | 'confirmed' | 'failed'
): string {
  switch (status) {
    case 'idle':
      return 'Ready';
    case 'approving':
      return 'Approving...';
    case 'pending':
      return 'Pending...';
    case 'confirmed':
      return 'Confirmed';
    case 'failed':
      return 'Failed';
    default:
      return 'Unknown';
  }
}

/**
 * Check if transaction is in progress
 */
export function isTransactionInProgress(
  status: 'idle' | 'approving' | 'pending' | 'confirmed' | 'failed'
): boolean {
  return status === 'approving' || status === 'pending';
}
