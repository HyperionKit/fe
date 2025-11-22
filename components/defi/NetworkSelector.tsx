"use client";
import React, { useState } from 'react';
import { useNetwork } from '@/contexts/NetworkContext';
import { useWallet } from '@/contexts/WalletContext';
import { SUPPORTED_NETWORKS, NetworkId } from '@/lib/networks';
import { useContractAvailability } from '@/hooks/useContractAvailability';
import { useNetworkValidation } from '@/hooks/useNetworkValidation';

interface NetworkSelectorProps {
  width?: string;
  height?: string;
  theme?: 'light' | 'dark';
  onNetworkChange?: (networkId: string) => void;
  compact?: boolean;
}

export const NetworkSelector: React.FC<NetworkSelectorProps> = ({
  width = "auto",
  height = "auto",
  theme = "light",
  onNetworkChange,
  compact = false
}) => {
  const { selectedNetwork, switchNetwork } = useNetwork();
  const { isConnected } = useWallet();
  const networkValidation = useNetworkValidation();
  const contractAvailability = useContractAvailability();
  const [isSwitching, setIsSwitching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync button handler - MOCKED
  const handleSync = async () => {
    if (!isConnected) {
      setError('Please connect your wallet first');
      return;
    }

    try {
      setIsSwitching(true);
      // Demo mode - just update UI state
      // Use selected network's chainId for display
      setError(null);
    } catch (err: any) {
      setError('Demo mode - network sync is UI only');
    } finally {
      setIsSwitching(false);
    }
  };

  const handleNetworkChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const networkId = e.target.value as NetworkId;
    
    // Update local state immediately (demo mode)
    switchNetwork(networkId);
    if (onNetworkChange) {
      onNetworkChange(networkId);
    }

    // Demo mode - no real network switching
    setIsSwitching(true);
    setError(null);
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsSwitching(false);
  };

  // Get network status indicator - MOCKED
  const getNetworkStatus = (networkId: NetworkId) => {
    if (!isConnected) return 'disconnected';
    // Demo mode - always show as connected
    return 'connected';
  };

  // Compact version for top-right corner
  if (compact) {
    const status = getNetworkStatus(selectedNetwork.id);
    return (
      <div className="flex items-center gap-2">
        {/* Network Status Indicator */}
        {isConnected && (
          <div className="flex items-center gap-1">
            {status === 'connected' && (
              <div className="w-2 h-2 rounded-full bg-green-500" title="Network connected (Demo)" />
            )}
          </div>
        )}
        {error && (
          <span className="text-xs text-red-400" title={error}>
            ⚠️
          </span>
        )}
        <select
          value={selectedNetwork.id}
          onChange={handleNetworkChange}
          disabled={isSwitching}
          className={`text-xs px-2 py-1.5 rounded-md border transition-colors font-medium ${
            theme === 'light' 
              ? 'bg-white border-gray-300 text-gray-800 hover:border-gray-400' 
              : 'bg-gray-700 border-gray-600 text-white hover:border-gray-500'
          } ${isSwitching ? 'opacity-50 cursor-wait' : ''}`}
          style={{ minWidth: '180px' }}
        >
          {SUPPORTED_NETWORKS.map((network) => (
            <option key={network.id} value={network.id}>
              {network.name} {isConnected && '✓'}
            </option>
          ))}
        </select>
        {/* Sync Button - Hidden in demo mode */}
      </div>
    );
  }

  // Full version (original)
  const status = getNetworkStatus(selectedNetwork.id);
  const availableContracts = contractAvailability.availability;

  return (
    <div 
      className={`${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}
      style={{ width, height }}
    >
      <div className="flex items-center justify-between mb-2">
        <label className={`block text-xs font-medium ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          Network
        </label>
        {/* Network Status Badge */}
        {isConnected && (
          <div className="flex items-center gap-2">
            {status === 'connected' && (
              <span className={`text-xs px-2 py-0.5 rounded ${
                theme === 'light' ? 'bg-green-100 text-green-700' : 'bg-green-900/30 text-green-300'
              }`}>
                ✓ Connected (Demo)
              </span>
            )}
          </div>
        )}
        {!isConnected && (
          <span className={`text-xs px-2 py-0.5 rounded ${
            theme === 'light' ? 'bg-gray-100 text-gray-600' : 'bg-gray-700 text-gray-400'
          }`}>
            Preview Mode
          </span>
        )}
      </div>

      {error && (
        <div className={`mb-2 p-2 rounded text-xs ${
          theme === 'light' 
            ? 'bg-red-100 text-red-700' 
            : 'bg-red-900/30 text-red-400'
        }`}>
          {error}
        </div>
      )}

      <select
        value={selectedNetwork.id}
        onChange={handleNetworkChange}
        disabled={isSwitching}
        className={`w-full p-3 rounded-lg border transition-colors ${
          theme === 'light' 
            ? 'bg-white border-gray-300 text-gray-800 hover:border-gray-400' 
            : 'bg-gray-700 border-gray-600 text-white hover:border-gray-500'
        } ${isSwitching ? 'opacity-50 cursor-wait' : ''}`}
      >
        {SUPPORTED_NETWORKS.map((network) => {
          const networkStatus = getNetworkStatus(network.id);
          const contractsCount = Object.values(availableContracts).filter(Boolean).length;
          return (
            <option key={network.id} value={network.id}>
              {network.name} ({network.currencySymbol}) - Chain ID: {network.chainId}
              {isConnected && networkStatus === 'connected' && ' ✓'}
            </option>
          );
        })}
      </select>

      <div className="mt-2 space-y-1">
        <p className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
          {isSwitching ? 'Switching network...' : `Selected: ${selectedNetwork.name} (Demo Mode)`}
        </p>
        {/* Contract Availability Info */}
        {!contractAvailability.isChecking && (
          <p className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
            Available Contracts: {Object.values(availableContracts).filter(Boolean).length}/5
          </p>
        )}
      </div>
    </div>
  );
};

export default NetworkSelector;
