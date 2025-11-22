"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { NetworkId, NetworkConfig, getNetworkById, SUPPORTED_NETWORKS } from '@/lib/networks';

interface NetworkContextType {
  selectedNetwork: NetworkConfig;
  setSelectedNetwork: (networkId: NetworkId) => void;
  switchNetwork: (networkId: NetworkId) => void;
  isNetworkSupported: (chainId: number) => boolean;
}

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

const STORAGE_KEY = 'hyperkit-selected-network';
const DEFAULT_NETWORK: NetworkId = 'hyperion';

export function NetworkProvider({ children }: { children: ReactNode }) {
  const [selectedNetworkId, setSelectedNetworkId] = useState<NetworkId>(DEFAULT_NETWORK);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && (stored === 'hyperion' || stored === 'mantle' || stored === 'metis' || stored === 'lazai')) {
        setSelectedNetworkId(stored as NetworkId);
      }
    }
  }, []);

  // Demo mode - no wallet chain syncing
  // Network selection is UI-only

  // Persist to localStorage when network changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, selectedNetworkId);
    }
  }, [selectedNetworkId]);

  const switchNetwork = (networkId: NetworkId) => {
    setSelectedNetworkId(networkId);
  };

  const isNetworkSupported = (chainId: number): boolean => {
    return SUPPORTED_NETWORKS.some(network => network.chainId === chainId);
  };

  const selectedNetwork = getNetworkById(selectedNetworkId);

  const value: NetworkContextType = {
    selectedNetwork,
    setSelectedNetwork: switchNetwork,
    switchNetwork,
    isNetworkSupported
  };

  return (
    <NetworkContext.Provider value={value}>
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork(): NetworkContextType {
  const context = useContext(NetworkContext);
  if (context === undefined) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
}

