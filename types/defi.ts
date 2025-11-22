/**
 * DeFi Type Definitions
 * Centralized type definitions for DeFi operations
 */

import { NetworkId } from '@/lib/networks';
import { TokenSymbol } from '@/lib/contracts';

export type TransactionType = 'swap' | 'bridge' | 'stake' | 'unstake' | 'faucet' | 'approve' | 'transfer' | 'other';

export type TransactionStatus = 'idle' | 'approving' | 'pending' | 'confirmed' | 'failed';

export interface DeFiTransactionParams {
  networkId: NetworkId;
  type: TransactionType;
  token?: TokenSymbol;
  amount?: string;
  fromToken?: TokenSymbol;
  toToken?: TokenSymbol;
  fromNetwork?: NetworkId;
  toNetwork?: NetworkId;
}

export interface ContractError {
  code: string | number;
  message: string;
  data?: string;
  reason?: string;
}

export interface TokenInfo {
  symbol: TokenSymbol;
  address: string;
  decimals: number;
  balance: bigint;
  formattedBalance: string;
}

export interface FaucetLimits {
  maxBalance: bigint;
  dripAmount: bigint;
  formattedMaxBalance: string;
  formattedDripAmount: string;
}

export interface StakingInfo {
  staked: bigint;
  formattedStaked: string;
  claimableRewards: bigint;
  formattedRewards: string;
  apy: string;
}

export interface BridgeInfo {
  fee: bigint;
  formattedFee: string;
  nativeBalance: bigint;
  formattedNativeBalance: string;
}

export interface SwapEstimate {
  amountOut: bigint;
  formattedAmountOut: string;
  priceImpact?: number;
  minAmountOut: bigint;
  formattedMinAmountOut: string;
}

