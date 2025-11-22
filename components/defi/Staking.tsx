"use client";
import React, { useState, useEffect, useMemo, useCallback } from 'react';
// DEMO MODE: ethers removed
import { useDebounce } from 'use-debounce';
import { useNetwork } from '@/contexts/NetworkContext';
import { getTokenContract as getTokenContractConfig } from '@/lib/contracts';
import { parseTokenAmount, formatTokenAmount } from '@/lib/web3';
import { calculateAPYFromContract, formatAPY } from '@/lib/apy-calculator';
import { useNetworkValidation } from '@/hooks/useNetworkValidation';
import { useContractAvailability } from '@/hooks/useContractAvailability';
import { TokenBalance } from './core/TokenBalance';
import { NetworkStatus } from './core/NetworkStatus';
import { TransactionStatus } from './core/TransactionStatus';

interface StakingProps {
  width?: string;
  height?: string;
  scale?: number;
  theme?: 'light' | 'dark';
  supportedTokens?: string[];
  onSuccess?: (txHash: string) => void;
}

type TabType = 'stake' | 'unstake' | 'claim';

export const Staking: React.FC<StakingProps> = ({
  width = "400px",
  height = "auto",
  scale = 1,
  theme = "light",
  supportedTokens = ['USDT', 'USDC'],
  onSuccess
}) => {
  const { selectedNetwork } = useNetwork();
  const networkValidation = useNetworkValidation();
  const contractAvailability = useContractAvailability();
  const [activeTab, setActiveTab] = useState<TabType>('stake');
  const [token, setToken] = useState(supportedTokens[0] || 'USDT');
  const [amount, setAmount] = useState('');
  const [apy, setApy] = useState<string>('');
  const [stakedAmount, setStakedAmount] = useState<string>('');
  const [claimableRewards, setClaimableRewards] = useState<string>('');
  const [isStaking, setIsStaking] = useState(false);
  const [isUnstaking, setIsUnstaking] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [txStatus, setTxStatus] = useState<'idle' | 'approving' | 'pending' | 'confirmed' | 'failed'>('idle');

  // Debounce inputs to prevent excessive calculations
  const [debouncedToken] = useDebounce(token, 200);
  const [debouncedAmount] = useDebounce(amount, 300);

  // Generate mock transaction hash
  const generateMockTxHash = useCallback((): string => {
    return '0x' + Array.from({ length: 64 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
  }, []);

  // Fetch APY, staked amount, and claimable rewards - MOCKED
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Demo mode - return mock data
        const { formatAPY } = await import('@/lib/apy-calculator');
        setApy(formatAPY(12.5)); // Fixed 12.5% APY

        // Mock staked amount and rewards
        const tokenData = getTokenContractConfig(selectedNetwork.id, debouncedToken as any);
        const mockStaked = (Math.random() * 5000).toFixed(4);
        setStakedAmount(mockStaked);
        
        const mockRewards = (Math.random() * 100).toFixed(4);
        setClaimableRewards(mockRewards);
      } catch (err: any) {
        console.warn('Error fetching staking data:', err);
      }
    };

    fetchData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [debouncedToken, selectedNetwork.id]);

  const refreshData = async () => {
    try {
      // Demo mode - update mock data
      const tokenData = getTokenContractConfig(selectedNetwork.id, token as any);
      const mockStaked = (Math.random() * 5000).toFixed(4);
      setStakedAmount(mockStaked);
      
      const mockRewards = (Math.random() * 100).toFixed(4);
      setClaimableRewards(mockRewards);
    } catch {
      // Ignore errors
    }
  };

  const stakeTokens = async () => {
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
    if (!contractAvailability.availability.STAKING_REWARDS) {
      const status = contractAvailability.getStatus('STAKING_REWARDS');
      setError(status?.message || 'StakingRewards contract is not available on this network');
      return;
    }

    setIsStaking(true);
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

      // Simulate stake transaction
      setTxStatus('pending');
      const delay = 1000 + Math.random() * 1000;
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

      // Update mock staked amount
      await refreshData();
      setAmount('');
    } catch (error: any) {
      if (error.message?.includes('rejected')) {
        setError('Transaction rejected by user');
        return;
      }
      
      setTxStatus('failed');
      if (error.message?.includes('insufficient')) {
        setError('Insufficient balance');
      } else {
        setError(error.message || 'Staking failed');
      }
    } finally {
      setIsStaking(false);
      setIsApproving(false);
    }
  };

  const unstakeTokens = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    const stakedNum = parseFloat(stakedAmount || '0');
    if (parseFloat(amount) > stakedNum) {
      setError('Cannot unstake more than staked amount');
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
    if (!contractAvailability.availability.STAKING_REWARDS) {
      const status = contractAvailability.getStatus('STAKING_REWARDS');
      setError(status?.message || 'StakingRewards contract is not available on this network');
      return;
    }

    setIsUnstaking(true);
    setError(null);
    setTxHash(null);
    setTxStatus('idle');

    try {
      // DEMO MODE: Mock transaction execution
      setTxStatus('pending');
      const delay = 1000 + Math.random() * 1000;
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

      // Update mock staked amount
      await refreshData();
      setAmount('');
    } catch (error: any) {
      setTxStatus('failed');
      if (error.message?.includes('rejected')) {
        setError('Transaction rejected by user');
        return;
      }
      
      if (error.message?.includes('insufficient')) {
        setError('Insufficient staked balance');
      } else {
        setError(error.message || 'Unstaking failed');
      }
    } finally {
      setIsUnstaking(false);
    }
  };

  const claimRewards = async () => {
    const claimableNum = parseFloat(claimableRewards || '0');
    if (claimableNum <= 0) {
      setError('No rewards available to claim');
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
    if (!contractAvailability.availability.STAKING_REWARDS) {
      const status = contractAvailability.getStatus('STAKING_REWARDS');
      setError(status?.message || 'StakingRewards contract is not available on this network');
      return;
    }

    setIsClaiming(true);
    setError(null);
    setTxHash(null);
    setTxStatus('idle');

    try {
      // DEMO MODE: Mock transaction execution
      setTxStatus('pending');
      const delay = 1000 + Math.random() * 1000;
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

      // Update mock rewards (reset to 0 after claiming)
      setClaimableRewards('0');
      await refreshData();
    } catch (error: any) {
      setTxStatus('failed');
      if (error.message?.includes('rejected')) {
        setError('Transaction rejected by user');
        return;
      }
      
      setError(error.message || 'Claim rewards failed');
    } finally {
      setIsClaiming(false);
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
        <div className="w-12 h-12 mx-auto mb-2 bg-orange-500 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Staking Pool
        </h3>
        <p className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
          Earn rewards by staking tokens
        </p>
      </div>

      {/* Tabs */}
      <div className="px-5 flex gap-2 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <button
          onClick={() => setActiveTab('stake')}
          className={`px-3 py-2 text-xs font-medium transition-colors ${
            activeTab === 'stake'
              ? theme === 'light'
                ? 'text-orange-600 border-b-2 border-orange-600'
                : 'text-orange-400 border-b-2 border-orange-400'
              : theme === 'light'
                ? 'text-gray-500 hover:text-gray-700'
                : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          Stake
        </button>
        <button
          onClick={() => setActiveTab('unstake')}
          className={`px-3 py-2 text-xs font-medium transition-colors ${
            activeTab === 'unstake'
              ? theme === 'light'
                ? 'text-orange-600 border-b-2 border-orange-600'
                : 'text-orange-400 border-b-2 border-orange-400'
              : theme === 'light'
                ? 'text-gray-500 hover:text-gray-700'
                : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          Unstake
        </button>
        <button
          onClick={() => setActiveTab('claim')}
          className={`px-3 py-2 text-xs font-medium transition-colors ${
            activeTab === 'claim'
              ? theme === 'light'
                ? 'text-orange-600 border-b-2 border-orange-600'
                : 'text-orange-400 border-b-2 border-orange-400'
              : theme === 'light'
                ? 'text-gray-500 hover:text-gray-700'
                : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          Claim
        </button>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-5 pb-4 space-y-3 mt-3">
        {/* Network Status */}
        <NetworkStatus theme={theme} compact />

        {/* Contract Availability Warning */}
        {!contractAvailability.isChecking && !contractAvailability.availability.STAKING_REWARDS && (
          <div className={`p-2 rounded text-xs ${theme === 'light' ? 'bg-yellow-100 text-yellow-700' : 'bg-yellow-900/30 text-yellow-300'}`}>
            StakingRewards contract is not available on {selectedNetwork.name}
          </div>
        )}

        {activeTab !== 'claim' && (
          <>
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
              {activeTab === 'stake' && (
                <TokenBalance
                  token={token}
                  networkId={selectedNetwork.id}
                  onMaxClick={(balance) => setAmount(balance)}
                  showMaxButton={true}
                  theme={theme}
                  className="mt-1.5"
                />
              )}
              {activeTab === 'unstake' && stakedAmount && parseFloat(stakedAmount) > 0 && (
                <div className={`text-xs mt-1.5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  Staked: {parseFloat(stakedAmount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })} {token}
                </div>
              )}
            </div>
          </>
        )}

        {apy && (
          <div className={`rounded-lg p-2.5 flex items-start gap-2 ${theme === 'light' ? 'bg-orange-100' : 'bg-orange-900/30'}`}>
            <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${theme === 'light' ? 'text-orange-600' : 'text-orange-400'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="min-w-0">
              <p className={`font-bold text-xs ${theme === 'light' ? 'text-orange-900' : 'text-orange-300'}`}>APY: {apy}%</p>
              <p className={`text-xs ${theme === 'light' ? 'text-orange-700' : 'text-orange-400'}`}>Estimated annual return</p>
            </div>
          </div>
        )}

        {stakedAmount && parseFloat(stakedAmount) > 0 && (
          <div className={`text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            Staked: {stakedAmount} {token}
          </div>
        )}

        {claimableRewards && parseFloat(claimableRewards) > 0 && (
          <div className={`rounded-lg p-2.5 ${theme === 'light' ? 'bg-green-100' : 'bg-green-900/30'}`}>
            <p className={`text-xs font-medium ${theme === 'light' ? 'text-green-900' : 'text-green-300'}`}>
              Claimable Rewards: {claimableRewards}
            </p>
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

        {activeTab === 'stake' && (
          <button
            onClick={stakeTokens}
            disabled={isStaking || isApproving || !amount || parseFloat(amount) <= 0 || !networkValidation.isValid || !contractAvailability.availability.STAKING_REWARDS}
            className={`w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-colors flex items-center justify-center gap-2 ${
              isStaking || isApproving || !amount || parseFloat(amount) <= 0 || !networkValidation.isValid || !contractAvailability.availability.STAKING_REWARDS
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {isApproving ? 'Approving...' : isStaking ? 'Staking...' : 'Stake Tokens'}
          </button>
        )}

        {activeTab === 'unstake' && (
          <button
            onClick={unstakeTokens}
            disabled={isUnstaking || !amount || parseFloat(amount) <= 0 || parseFloat(amount) > parseFloat(stakedAmount || '0') || !networkValidation.isValid || !contractAvailability.availability.STAKING_REWARDS}
            className={`w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-colors flex items-center justify-center gap-2 ${
              isUnstaking || !amount || parseFloat(amount) <= 0 || parseFloat(amount) > parseFloat(stakedAmount || '0') || !networkValidation.isValid || !contractAvailability.availability.STAKING_REWARDS
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            {isUnstaking ? 'Unstaking...' : 'Unstake Tokens'}
          </button>
        )}

        {activeTab === 'claim' && (
          <button
            onClick={claimRewards}
            disabled={isClaiming || !claimableRewards || parseFloat(claimableRewards) <= 0 || !networkValidation.isValid || !contractAvailability.availability.STAKING_REWARDS}
            className={`w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-colors flex items-center justify-center gap-2 ${
              isClaiming || !claimableRewards || parseFloat(claimableRewards) <= 0 || !networkValidation.isValid || !contractAvailability.availability.STAKING_REWARDS
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {isClaiming ? 'Claiming...' : `Claim Rewards (${claimableRewards})`}
          </button>
        )}
      </div>
    </div>
  );
};

export default Staking;
