// Web3 Utilities - DEMO MODE
// All blockchain functionality is mocked for showcase purposes
// No real transactions or wallet connections are performed

import { NetworkId, getNetworkById } from './networks';
import { getTokenContract as getTokenContractConfig, getDeFiContract, TokenSymbol } from './contracts';

// Mock provider interface for compatibility
interface MockProvider {
  getCode?: (address: string) => Promise<string>;
  getNetwork?: () => Promise<{ chainId: bigint }>;
}

// Mock contract interface for compatibility
interface MockContract {
  connect?: (signer: any) => MockContract;
  balanceOf?: (address: string) => Promise<bigint>;
  approve?: (spender: string, amount: bigint) => Promise<any>;
  allowance?: (owner: string, spender: string) => Promise<bigint>;
  [key: string]: any;
}

/**
 * Get Web3 provider - MOCKED (returns null in demo mode)
 */
export async function getProvider(networkId?: NetworkId): Promise<MockProvider | null> {
  // Demo mode - no real provider
  return null;
}

/**
 * Get signer from connected wallet - MOCKED
 */
export async function getSigner(networkId?: NetworkId): Promise<any> {
  throw new Error('Demo mode - no real wallet connection. This is a showcase application.');
}

/**
 * Get current chain ID from wallet - MOCKED
 * Returns the selected network's chainId for UI purposes
 */
export async function getCurrentChainId(): Promise<number | null> {
  // In demo mode, return null or use NetworkContext
  // This will be handled by NetworkContext for UI display
  return null;
}

/**
 * Validate if current network matches expected network - MOCKED
 */
export async function validateNetwork(expectedChainId: number): Promise<boolean> {
  // Always return true in demo mode
  return true;
}

/**
 * Get token contract instance - MOCKED
 */
export async function getTokenContract(tokenSymbol: TokenSymbol, networkId?: NetworkId): Promise<MockContract> {
  const network = networkId || 'hyperion';
  const token = getTokenContractConfig(network, tokenSymbol);
  
  // Return mock contract object
  return {
    address: token.address,
    balanceOf: async () => BigInt(0),
    approve: async () => ({ hash: generateMockTxHash(), wait: async () => ({ status: 1, hash: generateMockTxHash() }) }),
    allowance: async () => BigInt(0),
  } as MockContract;
}

/**
 * Get LiquidityPool contract instance - MOCKED
 */
export async function getLiquidityPoolContract(networkId?: NetworkId): Promise<MockContract> {
  const network = networkId || 'hyperion';
  const address = getDeFiContract(network, 'LIQUIDITY_POOL');
  if (!address) {
    throw new Error(`LiquidityPool contract not found for network ${network}`);
  }
  
  return createMockContract(address);
}

/**
 * Get StakingRewards contract instance - MOCKED
 */
export async function getStakingRewardsContract(networkId?: NetworkId): Promise<MockContract> {
  const network = networkId || 'hyperion';
  const address = getDeFiContract(network, 'STAKING_REWARDS');
  if (!address) {
    throw new Error(`StakingRewards contract not found for network ${network}`);
  }
  
  return createMockContract(address);
}

/**
 * Get Bridge contract instance - MOCKED
 */
export async function getBridgeContract(networkId?: NetworkId): Promise<MockContract> {
  const network = networkId || 'hyperion';
  const address = getDeFiContract(network, 'BRIDGE');
  if (!address) {
    throw new Error(`Bridge contract not found for network ${network}`);
  }
  
  return createMockContract(address);
}

/**
 * Check if a contract is deployed at an address - MOCKED
 * Always returns true in demo mode
 */
export async function isContractDeployed(address: string, networkId?: NetworkId): Promise<boolean> {
  // In demo mode, always return true for UI purposes
  return true;
}

/**
 * Get Faucet contract instance - MOCKED
 */
export async function getFaucetContract(networkId?: NetworkId): Promise<MockContract | null> {
  const network = networkId || 'hyperion';
  const address = getDeFiContract(network, 'FAUCET');
  if (!address) {
    return null;
  }
  
  return createMockContract(address);
}

/**
 * Get the active wallet provider - MOCKED
 * Re-exported from wallet-utils for backward compatibility
 */
export function getActiveWalletProvider(): any {
  // Import here to avoid circular dependency
  const { getActiveWalletProvider: getWalletProviderFromUtils } = require('./wallet-utils');
  return getWalletProviderFromUtils();
}

/**
 * Switch wallet network to the specified network - MOCKED
 * Only updates UI state, no real network switching
 */
export async function switchWalletNetwork(networkId: NetworkId): Promise<void> {
  // Demo mode - network switching is UI only
  // The NetworkContext will handle the UI update
  // No real wallet network switching is performed
  return Promise.resolve();
}

/**
 * Format token amount from bigint to human-readable string
 * Uses simple math instead of ethers
 */
export function formatTokenAmount(amount: bigint, decimals: number): string {
  const divisor = BigInt(10 ** decimals);
  const wholePart = amount / divisor;
  const fractionalPart = amount % divisor;
  
  if (fractionalPart === BigInt(0)) {
    return wholePart.toString();
  }
  
  const fractionalStr = fractionalPart.toString().padStart(decimals, '0');
  const trimmedFractional = fractionalStr.replace(/0+$/, '');
  
  if (trimmedFractional === '') {
    return wholePart.toString();
  }
  
  return `${wholePart}.${trimmedFractional}`;
}

/**
 * Parse token amount from string to bigint
 * Uses simple math instead of ethers
 */
export function parseTokenAmount(amount: string, decimals: number): bigint {
  const parts = amount.split('.');
  const wholePart = parts[0] || '0';
  const fractionalPart = (parts[1] || '').padEnd(decimals, '0').slice(0, decimals);
  
  const wholeBigInt = BigInt(wholePart) * BigInt(10 ** decimals);
  const fractionalBigInt = BigInt(fractionalPart || '0');
  
  return wholeBigInt + fractionalBigInt;
}

/**
 * Decode custom error from contract revert data - MOCKED
 * Returns null in demo mode
 */
export function decodeCustomError(errorData: string, abi: any[]): { name: string; args: any[] } | null {
  // Demo mode - no error decoding
  return null;
}

/**
 * Generate mock transaction hash for demo purposes
 */
function generateMockTxHash(): string {
  return '0x' + Array.from({ length: 64 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
}

/**
 * Create a mock contract object
 */
function createMockContract(address: string): MockContract {
  return {
    address,
    connect: () => createMockContract(address),
    balanceOf: async () => BigInt(0),
    approve: async () => ({
      hash: generateMockTxHash(),
      wait: async () => ({ status: 1, hash: generateMockTxHash() })
    }),
    allowance: async () => BigInt(0),
    // Add common contract methods as mocks
    stake: async () => ({
      hash: generateMockTxHash(),
      wait: async () => ({ status: 1, hash: generateMockTxHash() })
    }),
    unstake: async () => ({
      hash: generateMockTxHash(),
      wait: async () => ({ status: 1, hash: generateMockTxHash() })
    }),
    swap: async () => ({
      hash: generateMockTxHash(),
      wait: async () => ({ status: 1, hash: generateMockTxHash() })
    }),
    deposit: async () => ({
      hash: generateMockTxHash(),
      wait: async () => ({ status: 1, hash: generateMockTxHash() })
    }),
    drip: async () => ({
      hash: generateMockTxHash(),
      wait: async () => ({ status: 1, hash: generateMockTxHash() })
    }),
    getReward: async () => ({
      hash: generateMockTxHash(),
      wait: async () => ({ status: 1, hash: generateMockTxHash() })
    }),
    claimRewards: async () => ({
      hash: generateMockTxHash(),
      wait: async () => ({ status: 1, hash: generateMockTxHash() })
    }),
  } as MockContract;
}
