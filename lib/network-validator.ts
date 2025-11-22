/**
 * Network Validation Utilities - DEMO MODE
 * All network validation is mocked for showcase purposes
 */

import { NetworkId, NetworkConfig, getNetworkById, getNetworkByChainId } from './networks';

export interface NetworkValidationResult {
  isValid: boolean;
  isChecking: boolean;
  error: string | null;
  walletChainId: number | null;
  selectedChainId: number;
  mismatch: boolean;
}

/**
 * Check if wallet chain matches selected network - MOCKED
 * Always returns matches in demo mode
 */
export async function checkNetworkMatch(selectedNetworkId: NetworkId): Promise<{
  matches: boolean;
  walletChainId: number | null;
  selectedChainId: number;
  error?: string;
}> {
  const selectedNetwork = getNetworkById(selectedNetworkId);
  
  // Demo mode - always return matches
  return {
    matches: true,
    walletChainId: selectedNetwork.chainId, // Use selected network's chainId for UI
    selectedChainId: selectedNetwork.chainId
  };
}

/**
 * Validate network before transaction and prompt switch if needed - MOCKED
 * Always returns valid in demo mode
 */
export async function validateNetworkBeforeTransaction(
  networkId: NetworkId
): Promise<{
  isValid: boolean;
  error: string | null;
  promptSwitch: () => Promise<void>;
}> {
  // Demo mode - always valid
  return {
    isValid: true,
    error: null,
    promptSwitch: async () => {
      // Demo mode - do nothing
    }
  };
}

/**
 * Get user-friendly network mismatch error message
 */
export function getNetworkMismatchError(
  walletChainId: number | null,
  selectedNetworkId: NetworkId
): string {
  if (walletChainId === null) {
    return 'Demo mode - no wallet connection required';
  }
  
  const selectedNetwork = getNetworkById(selectedNetworkId);
  return `Demo mode - network selection is for display only`;
}

/**
 * Check if wallet is connected - MOCKED
 */
export function isWalletConnected(): boolean {
  // Demo mode - always return false (no real wallet)
  return false;
}
