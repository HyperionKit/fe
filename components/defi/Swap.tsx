"use client";
import React, { useState, useEffect, useMemo, useCallback } from 'react';
// DEMO MODE: ethers removed
import { useDebounce } from 'use-debounce';
import { useNetwork } from '@/contexts/NetworkContext';
import { getTokenContract as getTokenContractConfig } from '@/lib/contracts';
import { parseTokenAmount, formatTokenAmount } from '@/lib/web3';
import { useNetworkValidation } from '@/hooks/useNetworkValidation';
import { useContractAvailability } from '@/hooks/useContractAvailability';
import { calculateSwapEstimate } from '@/lib/market-prices';
import { TokenBalance } from './core/TokenBalance';
import { NetworkStatus } from './core/NetworkStatus';
import { TransactionStatus } from './core/TransactionStatus';

interface SwapProps {
  width?: string;
  height?: string;
  scale?: number;
  theme?: 'light' | 'dark';
  supportedTokens?: string[];
  onSuccess?: (txHash: string) => void;
}

export const Swap: React.FC<SwapProps> = ({
  width = "400px",
  height = "auto",
  scale = 1,
  theme = "light",
  supportedTokens = ['USDT', 'USDC', 'WETH', 'DAI'],
  onSuccess
}) => {
  const { selectedNetwork } = useNetwork();
  const networkValidation = useNetworkValidation();
  const contractAvailability = useContractAvailability();
  const [fromToken, setFromToken] = useState('USDT');
  const [toToken, setToToken] = useState('USDC');
  const [amount, setAmount] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [estimatedOutput, setEstimatedOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [txStatus, setTxStatus] = useState<'idle' | 'approving' | 'pending' | 'confirmed' | 'failed'>('idle');

  // Debounce amount input to prevent excessive calculations
  const [debouncedAmount] = useDebounce(amount, 300);
  const [debouncedFromToken] = useDebounce(fromToken, 200);
  const [debouncedToToken] = useDebounce(toToken, 200);

  // Calculate estimated output using market prices (CoinGecko)
  // Memoized calculation with debounced inputs
  const estimatedOutputMemo = useMemo(() => {
    if (!debouncedAmount || parseFloat(debouncedAmount) <= 0) {
      return '';
    }

    try {
      const amountNum = parseFloat(debouncedAmount);
      
      // Use market prices for estimation (based on CoinGecko)
      const estimated = calculateSwapEstimate(
        debouncedFromToken as any,
        debouncedToToken as any,
        amountNum
      );
      
      if (estimated > 0) {
        // Format to reasonable precision (6 decimal places max)
        return estimated.toFixed(6).replace(/\.?0+$/, '');
      }
      return '';
    } catch (err) {
      // Handle calculation errors
      console.warn('Error calculating output:', err);
      return '';
    }
  }, [debouncedAmount, debouncedFromToken, debouncedToToken]);

  // Update state when memoized value changes
  useEffect(() => {
    setEstimatedOutput(estimatedOutputMemo);
  }, [estimatedOutputMemo]);

  // Memoize token data
  const fromTokenData = useMemo(() => {
    try {
      return getTokenContractConfig(selectedNetwork.id, fromToken as any);
    } catch {
      return null;
    }
  }, [selectedNetwork.id, fromToken]);

  const toTokenData = useMemo(() => {
    try {
      return getTokenContractConfig(selectedNetwork.id, toToken as any);
    } catch {
      return null;
    }
  }, [selectedNetwork.id, toToken]);

  // Generate mock transaction hash
  const generateMockTxHash = useCallback((): string => {
    return '0x' + Array.from({ length: 64 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
  }, []);

  const swapTokens = useCallback(async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount');
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
    if (!contractAvailability.availability.LIQUIDITY_POOL) {
      const status = contractAvailability.getStatus('LIQUIDITY_POOL');
      setError(status?.message || 'LiquidityPool contract is not available on this network');
      return;
    }

    setIsSwapping(true);
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

      // Simulate swap transaction
      setTxStatus('pending');
      const delay = 1000 + Math.random() * 1000; // 1000-2000ms
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
      
      if (onSuccess) {
        onSuccess(mockTxHash);
      }
    } catch (error: any) {
      if (error.message?.includes('rejected')) {
        setError('Transaction rejected by user');
        return;
      }
      
      setTxStatus('failed');
      if (error.message?.includes('insufficient')) {
        setError('Insufficient balance');
      } else {
        setError(error.message || 'Swap failed');
      }
    } finally {
      setIsSwapping(false);
      setIsApproving(false);
    }
  }, [amount, fromToken, toToken, selectedNetwork.id, networkValidation, contractAvailability, onSuccess, generateMockTxHash]);

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
        <div className="w-12 h-12 mx-auto mb-2 bg-green-500 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Token Swap
        </h3>
        <p className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
          Exchange tokens instantly
        </p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-5 pb-4 space-y-3">
        {/* Network Status */}
        <NetworkStatus theme={theme} compact />

        {/* Contract Availability Warning */}
        {!contractAvailability.isChecking && !contractAvailability.availability.LIQUIDITY_POOL && (
          <div className={`p-2 rounded text-xs ${theme === 'light' ? 'bg-yellow-100 text-yellow-700' : 'bg-yellow-900/30 text-yellow-300'}`}>
            LiquidityPool contract is not available on {selectedNetwork.name}
          </div>
        )}

        <div>
          <label className={`text-xs font-medium mb-1.5 block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            FROM
          </label>
          <select
            value={fromToken}
            onChange={(e) => {
              setFromToken(e.target.value);
              if (e.target.value === toToken) {
                setToToken(supportedTokens.find(t => t !== e.target.value) || supportedTokens[0]);
              }
            }}
            className={`w-full p-2.5 rounded-lg border text-sm ${theme === 'light' ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-700 border-gray-600 text-white'}`}
          >
            {supportedTokens.map(token => (
              <option key={token} value={token} className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
                {token}
              </option>
            ))}
          </select>
          <TokenBalance
            token={fromToken}
            networkId={selectedNetwork.id}
            onMaxClick={(balance) => setAmount(balance)}
            showMaxButton={true}
            theme={theme}
            className="mt-1.5"
          />
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
          {estimatedOutput && (
            <p className={`text-xs mt-1 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
              Est: {estimatedOutput} {toToken}
            </p>
          )}
        </div>

        <div className="flex justify-center py-1">
          <button
            onClick={() => {
              const temp = fromToken;
              setFromToken(toToken);
              setToToken(temp);
            }}
            className={`p-1.5 rounded-lg transition-colors ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
            aria-label="Swap tokens"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        <div>
          <label className={`text-xs font-medium mb-1.5 block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            TO
          </label>
          <select
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
            className={`w-full p-2.5 rounded-lg border text-sm ${theme === 'light' ? 'bg-white border-gray-300 text-gray-900' : 'bg-gray-700 border-gray-600 text-white'}`}
          >
            {supportedTokens.filter(t => t !== fromToken).map(token => (
              <option key={token} value={token} className={theme === 'light' ? 'text-gray-900' : 'text-white'}>
                {token}
              </option>
            ))}
          </select>
        </div>

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
          onClick={swapTokens}
          disabled={
            isSwapping ||
            isApproving ||
            !amount ||
            parseFloat(amount) <= 0 ||
            !networkValidation.isValid ||
            !contractAvailability.availability.LIQUIDITY_POOL
          }
          className={`w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-colors ${
            isSwapping || isApproving || !amount || parseFloat(amount) <= 0 || !networkValidation.isValid || !contractAvailability.availability.LIQUIDITY_POOL
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isApproving ? 'Approving...' : isSwapping ? 'Swapping...' : 'Swap Tokens'}
        </button>
      </div>
    </div>
  );
};

export default Swap;

