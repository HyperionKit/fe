/**
 * Network Validation Hook - DEMO MODE
 * Always returns valid in demo mode
 */

import { useState, useCallback } from 'react';
import { useNetwork } from '@/contexts/NetworkContext';
import { validateNetworkBeforeTransaction } from '@/lib/network-validator';

export interface UseNetworkValidationReturn {
  isValid: boolean;
  isChecking: boolean;
  error: string | null;
  walletChainId: number | null;
  selectedChainId: number;
  mismatch: boolean;
  promptSwitch: () => Promise<void>;
  refresh: () => Promise<void>;
}

export function useNetworkValidation(): UseNetworkValidationReturn {
  const { selectedNetwork } = useNetwork();
  const [isValid] = useState<boolean>(true);
  const [isChecking] = useState<boolean>(false);
  const [error] = useState<string | null>(null);
  const [walletChainId] = useState<number | null>(selectedNetwork.chainId);
  const [mismatch] = useState<boolean>(false);

  const promptSwitch = useCallback(async () => {
    // Demo mode - do nothing, network switching is UI only
    const validation = await validateNetworkBeforeTransaction(selectedNetwork.id);
    // No-op in demo mode
  }, [selectedNetwork.id]);

  const refresh = useCallback(async () => {
    // Demo mode - always valid
  }, []);

  return {
    isValid: true, // Always valid in demo mode
    isChecking: false,
    error: null,
    walletChainId: selectedNetwork.chainId, // Use selected network's chainId for UI
    selectedChainId: selectedNetwork.chainId,
    mismatch: false,
    promptSwitch,
    refresh
  };
}
