"use client";
import React, { useState, useEffect, useMemo, useCallback } from 'react';
// DEMO MODE: ethers removed
import { useDebounce } from 'use-debounce';
import { useNetwork } from '@/contexts/NetworkContext';
import { NETWORKS, NetworkId } from '@/lib/networks';
import { getTokenContract as getTokenContractConfig, isContractAvailable } from '@/lib/contracts';
import { parseTokenAmount, formatTokenAmount } from '@/lib/web3';
import { useNetworkValidation } from '@/hooks/useNetworkValidation';
import { useContractAvailability } from '@/hooks/useContractAvailability';
// DEMO MODE: ABI removed
import { TokenBalance } from './core/TokenBalance';
import { NetworkStatus } from './core/NetworkStatus';
import { TransactionStatus } from './core/TransactionStatus';

interface BridgeProps {
  width?: string;
  height?: string;
  scale?: number;
  theme?: 'light' | 'dark';
  supportedTokens?: string[];
  supportedNetworks?: NetworkId[];
  onSuccess?: (txHash: string) => void;
}

export const Bridge: React.FC<BridgeProps> = ({
  width = "400px",
  height = "auto",
  scale = 1,
  theme = "light",
  supportedTokens = ['USDT', 'USDC'],
  supportedNetworks,
  onSuccess
}) => {
  const { selectedNetwork } = useNetwork();
  const networkValidation = useNetworkValidation();
  const contractAvailability = useContractAvailability();
  const availableNetworks = supportedNetworks || (Object.keys(NETWORKS) as NetworkId[]);
  const [fromNetwork, setFromNetwork] = useState<NetworkId>(selectedNetwork.id);
  const [toNetwork, setToNetwork] = useState<NetworkId>(
    availableNetworks.find(n => n !== selectedNetwork.id) || availableNetworks[0]
  );
  const [token, setToken] = useState(supportedTokens[0] || 'USDT');
  const [amount, setAmount] = useState('');
  const [isBridging, setIsBridging] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [txStatus, setTxStatus] = useState<'idle' | 'approving' | 'pending' | 'confirmed' | 'failed'>('idle');
  const [bridgeBalances, setBridgeBalances] = useState<Record<string, string>>({});
  const [withdrawalStatus, setWithdrawalStatus] = useState<string>('');
  const [isLoadingBalances, setIsLoadingBalances] = useState(false);
  const [bridgeFee, setBridgeFee] = useState<string>('0');
  const [nativeBalance, setNativeBalance] = useState<string>('0');

  // Debounce inputs to prevent excessive calculations
  const [debouncedAmount] = useDebounce(amount, 300);
  const [debouncedToken] = useDebounce(token, 200);
  const [debouncedFromNetwork] = useDebounce(fromNetwork, 200);

  // Check bridge balance for a token - MOCKED
  const checkBridgeBalance = async (tokenSymbol: string, networkId: NetworkId) => {
    // Demo mode - return mock balance
    return (Math.random() * 1000).toFixed(4);
  };

  // Check withdrawal status by withdrawal ID - MOCKED
  const checkWithdrawalStatus = async (withdrawalId: string, networkId: NetworkId) => {
    // Demo mode - return mock status
    return 'Processed';
  };

  // Load bridge balances on mount and when network/token changes
  useEffect(() => {
    const loadBalances = async () => {
      if (!isContractAvailable(fromNetwork, 'BRIDGE')) {
        setBridgeBalances({});
        return;
      }

      setIsLoadingBalances(true);
      try {
        const balances: Record<string, string> = {};
        // Check balances in parallel but handle failures gracefully
        await Promise.allSettled(
          supportedTokens.map(async (tokenSymbol) => {
            try {
              const balance = await checkBridgeBalance(tokenSymbol, fromNetwork);
              // Only set balance if it's greater than 0 to avoid cluttering UI
              if (parseFloat(balance) > 0) {
                balances[tokenSymbol] = balance;
              }
            } catch (error) {
              // Silently ignore individual token balance errors
            }
          })
        );
        setBridgeBalances(balances);
      } catch (error) {
        // Only log unexpected errors
        if (error && typeof error === 'object' && 'code' in error && error.code !== 'CALL_EXCEPTION') {
          console.warn('Unexpected error loading bridge balances:', error);
        }
      } finally {
        setIsLoadingBalances(false);
      }
    };

    loadBalances();
  }, [fromNetwork, supportedTokens]);

  // Fetch bridge fee and native balance
  useEffect(() => {
    const fetchBridgeFee = async () => {
      if (!contractAvailability.availability.BRIDGE) {
        setBridgeFee('0');
        setNativeBalance('0');
        return;
      }

      try {
          // DEMO MODE: Mock bridge fee and native balance
        setBridgeFee('0.001'); // Mock bridge fee
        setNativeBalance((Math.random() * 10).toFixed(4)); // Mock native balance
      } catch (error) {
        console.warn('Error fetching bridge fee:', error);
        setBridgeFee('0');
        setNativeBalance('0');
      }
    };

    fetchBridgeFee();
    const interval = setInterval(fetchBridgeFee, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, [fromNetwork, contractAvailability.availability.BRIDGE]);

  // Generate mock transaction hash
  const generateMockTxHash = useCallback((): string => {
    return '0x' + Array.from({ length: 64 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
  }, []);

  const bridgeTokens = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    if (fromNetwork === toNetwork) {
      setError('Source and destination networks must be different');
      return;
    }

    // Validate network before transaction
    if (!networkValidation.isValid) {
      if (networkValidation.mismatch) {
        try {
          await networkValidation.promptSwitch();
          await new Promise(resolve => setTimeout(resolve, 500));
        } catch (err: any) {
          setError(err.message || 'Failed to switch network. Please switch manually.');
          return;
        }
      } else {
        setError(networkValidation.error || 'Network validation failed');
        return;
      }
    }

    // Check contract availability
    if (!contractAvailability.availability.BRIDGE) {
      const status = contractAvailability.getStatus('BRIDGE');
      setError(status?.message || 'Bridge contract is not available on this network');
      return;
    }

    setIsBridging(true);
    setError(null);
    setTxHash(null);
    setTxStatus('idle');

    try {
      // DEMO MODE: Mock transaction execution
      // Simulate approval phase
      setIsApproving(true);
      setTxStatus('approving');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsApproving(false);

      // Simulate bridge transaction
      setTxStatus('pending');
      const delay = 1500 + Math.random() * 1000; // 1500-2500ms
      await new Promise(resolve => setTimeout(resolve, delay));

      // Simulate 95% success rate
      const success = Math.random() > 0.05;
      
      if (!success) {
        throw new Error('Transaction failed: Insufficient gas');
      }

      // Generate mock transaction hash
      const mockTxHash = generateMockTxHash();
      setTxHash(mockTxHash);
      setTxStatus('confirmed');

      // Mock bridge balance update
      const newBalance = (parseFloat(bridgeBalances[token] || '0') + parseFloat(amount)).toFixed(6);
      setBridgeBalances(prev => ({ ...prev, [token]: newBalance }));

      if (onSuccess) {
        onSuccess(mockTxHash);
      }
    } catch (error: any) {
      setTxStatus('failed');
      if (error.message?.includes('rejected')) {
        setError('Transaction rejected by user');
        return;
      }
      
      if (error.message?.includes('insufficient')) {
        setError('Insufficient balance');
      } else {
        setError(error.message || 'Bridge failed');
      }
    } finally {
      setIsBridging(false);
      setIsApproving(false);
    }
  };

  return (
    <div 
      className={`rounded-lg overflow-hidden flex flex-col ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}
      style={{ 
        width, 
        height: height === 'auto' ? 'auto' : height,
        maxHeight: height === 'auto' ? '600px' : undefined,
        transform: `scale(${scale})`,
        minWidth: '400px'
      }}
    >
      {/* Header - Fixed */}
      <div className="text-center mb-4 px-5 pt-5 flex-shrink-0">
        <div className="w-12 h-12 mx-auto mb-2 bg-purple-500 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Cross-Chain Bridge
        </h3>
        <p className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
          Move tokens between networks
        </p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-5 pb-4 space-y-3">
        {/* Network Status */}
        <NetworkStatus theme={theme} compact />

        {/* Contract Availability Warning */}
        {!contractAvailability.isChecking && !contractAvailability.availability.BRIDGE && (
          <div className={`p-2 rounded text-xs ${theme === 'light' ? 'bg-yellow-100 text-yellow-700' : 'bg-yellow-900/30 text-yellow-300'}`}>
            Bridge contract is not available on {selectedNetwork.name}
          </div>
        )}

        <div>
          <label className={`text-xs font-medium mb-1.5 block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            FROM NETWORK
          </label>
          <select
            value={fromNetwork}
            onChange={(e) => {
              const newFromNetwork = e.target.value as NetworkId;
              setFromNetwork(newFromNetwork);
              if (newFromNetwork === toNetwork) {
                setToNetwork(availableNetworks.find(n => n !== newFromNetwork) || availableNetworks[0]);
              }
            }}
            className={`w-full p-2.5 rounded-lg border text-sm ${theme === 'light' ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-700 border-gray-600 text-white'}`}
          >
            {availableNetworks.map(networkId => {
              const network = NETWORKS[networkId];
              return (
                <option key={networkId} value={networkId} className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
                  {network.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex justify-center py-1">
          <button
            onClick={() => {
              const temp = fromNetwork;
              setFromNetwork(toNetwork);
              setToNetwork(temp);
            }}
            className={`p-1.5 rounded-lg transition-colors ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
            aria-label="Swap networks"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </button>
        </div>

        <div>
          <label className={`text-xs font-medium mb-1.5 block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            TO NETWORK
          </label>
          <select
            value={toNetwork}
            onChange={(e) => setToNetwork(e.target.value as NetworkId)}
            className={`w-full p-2.5 rounded-lg border text-sm ${theme === 'light' ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-700 border-gray-600 text-white'}`}
          >
            {availableNetworks.filter(n => n !== fromNetwork).map(networkId => {
              const network = NETWORKS[networkId];
              return (
                <option key={networkId} value={networkId} className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
                  {network.name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label className={`text-xs font-medium mb-1.5 block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            TOKEN
          </label>
          <select
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className={`w-full p-2.5 rounded-lg border text-sm ${theme === 'light' ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-700 border-gray-600 text-white'}`}
          >
            {supportedTokens.map(t => (
              <option key={t} value={t} className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={`text-xs font-medium mb-1.5 block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            AMOUNT
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
            className={`w-full p-2.5 rounded-lg border text-sm ${theme === 'light' ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-400' : 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'}`}
          />
          <TokenBalance
            token={token}
            networkId={fromNetwork}
            onMaxClick={(balance) => setAmount(balance)}
            showMaxButton={true}
            theme={theme}
            className="mt-1.5"
          />
        </div>


        {/* Bridge Fee Display */}
        {parseFloat(bridgeFee) > 0 && (
          <div className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Bridge Fee: {bridgeFee} {NETWORKS[fromNetwork].currencySymbol}
            {parseFloat(nativeBalance) < parseFloat(bridgeFee) && (
              <span className={`ml-2 ${theme === 'light' ? 'text-red-600' : 'text-red-400'}`}>
                (Insufficient balance)
              </span>
            )}
          </div>
        )}

        {/* Withdrawal Status Display */}
        {withdrawalStatus && (
          <div className={`p-2 rounded text-xs ${theme === 'light' ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/30 text-blue-300'}`}>
            {withdrawalStatus}
          </div>
        )}
      </div>

      {/* Fixed Footer with Button */}
      <div className="px-5 pb-5 flex-shrink-0 space-y-2">
        <TransactionStatus
          status={txStatus}
          txHash={txHash}
          error={error}
          theme={theme}
        />

        {error && txStatus !== 'failed' && (
          <div className={`p-2 rounded text-xs ${theme === 'light' ? 'bg-red-100 text-red-700' : 'bg-red-900/30 text-red-300'}`}>
            {error}
          </div>
        )}

        <button
          onClick={bridgeTokens}
          disabled={
            isBridging ||
            isApproving ||
            !amount ||
            parseFloat(amount) <= 0 ||
            fromNetwork === toNetwork ||
            !networkValidation.isValid ||
            !contractAvailability.availability.BRIDGE
          }
          className={`w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-colors ${
            isBridging || isApproving || !amount || parseFloat(amount) <= 0 || fromNetwork === toNetwork || !networkValidation.isValid || !contractAvailability.availability.BRIDGE
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-purple-500 hover:bg-purple-600'
          }`}
        >
          {isApproving ? 'Approving...' : isBridging ? 'Bridging...' : 'Bridge Tokens'}
        </button>
      </div>
    </div>
  );
};

export default Bridge;

