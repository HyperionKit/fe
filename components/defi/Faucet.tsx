"use client";
import React, { useState, useEffect, useCallback } from 'react';
// DEMO MODE: ethers removed
import { useDebounce } from 'use-debounce';
import { useNetwork } from '@/contexts/NetworkContext';
// DEMO MODE: Removed real contract imports - all functionality is mocked
// DEMO MODE: ABI removed

// Hardcoded faucet limits (override contract values for DAI and WETH)
const FAUCET_LIMITS: Record<string, { maxBalance: string; dripAmount: string }> = {
  DAI: {
    maxBalance: '50',
    dripAmount: '1'
  },
  WETH: {
    maxBalance: '10',
    dripAmount: '0.01'
  }
};

interface FaucetProps {
  width?: string;
  height?: string;
  scale?: number;
  theme?: 'light' | 'dark';
  supportedTokens?: string[];
  onSuccess?: (txHash: string) => void;
}

export const Faucet: React.FC<FaucetProps> = ({
  width = "400px",
  height = "auto",
  scale = 1,
  theme = "light",
  supportedTokens = ['USDT', 'USDC', 'WETH', 'DAI'],
  onSuccess
}) => {
  const { selectedNetwork } = useNetwork();
  const [token, setToken] = useState(supportedTokens[0] || 'USDT');
  const [canRequest, setCanRequest] = useState<boolean | null>(null);
  const [timeUntilNext, setTimeUntilNext] = useState<string>('');
  const [blockingError, setBlockingError] = useState<string>(''); // Separate blocking errors from cooldown
  const [isRequesting, setIsRequesting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [explorerUrl, setExplorerUrl] = useState<string>('');
  const [maxBalance, setMaxBalance] = useState<string>('');
  const [userBalance, setUserBalance] = useState<string>('');
  const [dripAmount, setDripAmount] = useState<string>('');

  // Debounce token selection to prevent excessive contract calls
  const [debouncedToken] = useDebounce(token, 200);

  // DEMO MODE: Mock function to check if user can request tokens
  const checkCanRequest = useCallback(async () => {
    // DEMO MODE: Mock cooldown check using localStorage
    try {
      // DEMO MODE: Always assume faucet is available (mocked)
      // Set mock limits
      const limits = FAUCET_LIMITS[token] || { maxBalance: '100', dripAmount: '10' };
      setMaxBalance(limits.maxBalance);
      setDripAmount(limits.dripAmount);
      setUserBalance((Math.random() * 50).toFixed(4)); // Mock user balance

      // Check cooldown from localStorage
      const storageKey = `faucet-cooldown-${selectedNetwork.id}-${token}`;
      const lastRequest = typeof window !== 'undefined' 
        ? localStorage.getItem(storageKey) 
        : null;
      
      const now = Date.now();
      const cooldownMs = 24 * 60 * 60 * 1000; // 24 hours
      const canRequestNow = !lastRequest || (now - parseInt(lastRequest)) >= cooldownMs;
      
      setCanRequest(canRequestNow);
      
      if (!canRequestNow && lastRequest) {
        const remaining = cooldownMs - (now - parseInt(lastRequest));
        const hours = Math.floor(remaining / (60 * 60 * 1000));
        const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
        
        if (hours > 0) {
          setTimeUntilNext(`${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`);
        } else {
          setTimeUntilNext(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
        }
        setBlockingError('');
      } else {
        setTimeUntilNext('');
        setBlockingError('');
      }
    } catch (err: any) {
      setCanRequest(null);
      setTimeUntilNext('');
      setBlockingError('');
    }
  }, [token, selectedNetwork.id]);

  // Check if user can request tokens on mount and when token/network changes
  useEffect(() => {
    // Reset state when network or token changes (network-specific cooldown)
    setCanRequest(null);
    setTimeUntilNext('');
    setBlockingError('');
    setError(null);

    checkCanRequest();
    // Refresh every 60 seconds to update countdown
    const interval = setInterval(checkCanRequest, 60000);
    return () => clearInterval(interval);
  }, [debouncedToken, selectedNetwork.id, checkCanRequest]);

  // Update explorer URL when txHash or network changes
  useEffect(() => {
    if (txHash && selectedNetwork.blockExplorer) {
      setExplorerUrl(`${selectedNetwork.blockExplorer}/tx/${txHash}`);
    } else {
      setExplorerUrl('');
    }
  }, [txHash, selectedNetwork.blockExplorer, selectedNetwork.id]);

  // Generate mock transaction hash
  const generateMockTxHash = (): string => {
    return '0x' + Array.from({ length: 64 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
  };

  // DEMO MODE: Mock function to request tokens
  const requestTokens = useCallback(async () => {
    setIsRequesting(true);
    setError(null);
    setTxHash(null);

    try {
      // Check if user can request before attempting
      if (canRequest === false) {
        setError(`Rate limit: Please wait ${timeUntilNext || '24 hours'} before requesting again.`);
        setIsRequesting(false);
        return;
      }

      // DEMO MODE: Mock transaction execution
      // Simulate delay
      const delay = 1000 + Math.random() * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));

      // Simulate 95% success rate
      const success = Math.random() > 0.05;
      
      if (!success) {
        throw new Error('Transaction failed: Insufficient gas (mocked)');
      }

      // Generate mock transaction hash
      const mockTxHash = generateMockTxHash();
      setTxHash(mockTxHash);

      // Store cooldown in localStorage
      const storageKey = `faucet-cooldown-${selectedNetwork.id}-${token}`;
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, Date.now().toString());
      }

      // Update canRequest state
      setCanRequest(false);
      
      if (onSuccess) {
        onSuccess(mockTxHash);
      }

      // Refresh check after a delay
      setTimeout(() => {
        checkCanRequest();
      }, 1000);

    } catch (error: any) {
      if (error.message?.includes('rejected')) {
        setError('Transaction rejected by user (mocked)');
        return;
      }
      
      if (error.message?.includes('rate limit') || error.message?.includes('too soon')) {
        setError('Rate limit: 1 request per 24 hours per wallet (mocked)');
      } else {
        setError(error.message || 'Request failed (mocked)');
      }
    } finally {
      setIsRequesting(false);
    }
  }, [canRequest, timeUntilNext, selectedNetwork.id, token, onSuccess, checkCanRequest]);

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
        <div className="w-12 h-12 mx-auto mb-2 bg-blue-400 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Testnet Faucet
        </h3>
        <p className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
          Get free test tokens for development
        </p>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-5 pb-4 space-y-3">
        <div>
          <label className={`text-xs font-medium mb-1.5 block ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
            SELECT TOKEN
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

        <div className={`rounded-lg p-2.5 flex items-start gap-2 ${theme === 'light' ? 'bg-blue-100' : 'bg-blue-900/30'}`}>
          <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="min-w-0">
            <p className={`font-bold text-xs ${theme === 'light' ? 'text-blue-900' : 'text-blue-300'}`}>Rate Limit</p>
            <p className={`text-xs ${theme === 'light' ? 'text-blue-700' : 'text-blue-400'}`}>1 request per 24 hours per wallet</p>
          </div>
        </div>

        {/* Balance Information Display */}
        {maxBalance && (
          <div className={`rounded-lg p-2.5 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}`}>
            <div className={`text-xs ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              <div className="flex justify-between mb-1">
                <span>Your Balance:</span>
                <span className={`font-semibold ${parseFloat(userBalance) >= parseFloat(maxBalance) ? 'text-red-600' : ''}`}>
                  {userBalance || '0'} {token}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Maximum Allowed:</span>
                <span className="font-semibold">{maxBalance} {token}</span>
              </div>
              {dripAmount && (
                <div className="flex justify-between mt-1 pt-1 border-t border-gray-400">
                  <span>Drip Amount:</span>
                  <span className="font-semibold">{dripAmount} {token}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Blocking Error Display - Shows errors that prevent requests */}
        {blockingError && (
          <div className={`p-2 rounded text-xs ${theme === 'light' ? 'bg-yellow-100 text-yellow-700' : 'bg-yellow-900/30 text-yellow-300'}`}>
            {blockingError}
          </div>
        )}

        {/* Cooldown Message - Only show when there's an actual cooldown (not an error) */}
        {canRequest === false && timeUntilNext && !blockingError && (
          <div className={`p-2 rounded text-xs ${theme === 'light' ? 'bg-yellow-100 text-yellow-700' : 'bg-yellow-900/30 text-yellow-300'}`}>
            You have already requested tokens. Please wait {timeUntilNext} before requesting again.
          </div>
        )}

        {/* Fallback cooldown message if no specific time available */}
        {canRequest === false && !timeUntilNext && !blockingError && (
          <div className={`p-2 rounded text-xs ${theme === 'light' ? 'bg-yellow-100 text-yellow-700' : 'bg-yellow-900/30 text-yellow-300'}`}>
            You have already requested tokens. Please wait 24 hours before requesting again.
          </div>
        )}
      </div>

      {/* Fixed Footer with Button */}
      <div className="px-5 pb-5 flex-shrink-0 space-y-2">
        {error && (
          <div className={`p-2 rounded text-xs ${theme === 'light' ? 'bg-red-100 text-red-700' : 'bg-red-900/30 text-red-300'}`}>
            {error}
          </div>
        )}

        {txHash && (
          <div className={`p-2 rounded text-xs ${theme === 'light' ? 'bg-green-100 text-green-700' : 'bg-green-900/30 text-green-300'}`}>
            <div className="mb-1">Success! Hash: {txHash.slice(0, 10)}...</div>
            {explorerUrl && (
              <a
                href={explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs underline ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}
              >
                View on explorer →
              </a>
            )}
          </div>
        )}

        <button
          onClick={requestTokens}
          disabled={isRequesting || canRequest === false}
          className={`w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-colors flex items-center justify-center gap-2 ${
            isRequesting || canRequest === false
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-400 hover:bg-blue-500'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {isRequesting ? 'Requesting...' : 'Request Tokens'}
        </button>
      </div>
    </div>
  );
};

export default Faucet;

