// Smart Contract Addresses and Configuration - DEMO MODE
// Contract addresses for display only - no real interactions
// Multi-network support for Hyperion, Mantle, Metis, and LazAI testnets

import { NetworkId } from './networks';

export type TokenSymbol = 'USDT' | 'USDC' | 'DAI' | 'WETH';

export interface TokenContract {
  name: string;
  symbol: TokenSymbol;
  address: string;
  decimals: number;
  totalSupply: string;
}

export interface DeFiContracts {
  LIQUIDITY_POOL: string;
  BUY_VAULT: string;
  STAKING_REWARDS: string;
  BRIDGE: string;
  FAUCET: string;
}

// Token contracts for each network
export const TOKEN_CONTRACTS: Record<NetworkId, Record<TokenSymbol, TokenContract>> = {
  hyperion: {
    USDT: {
      name: 'Tether USD',
      symbol: 'USDT',
      address: '0x9b52D326D4866055F6c23297656002992e4293FC',
      decimals: 6,
      totalSupply: '40000000'
    },
    USDC: {
      name: 'USD Coin',
      symbol: 'USDC',
      address: '0x31424DB0B7a929283C394b4DA412253Ab6D61682',
      decimals: 6,
      totalSupply: '40000000'
    },
    DAI: {
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      address: '0xdE896235F5897EC6D13Aa5b43964F9d2d34D82Fb',
      decimals: 18,
      totalSupply: '40000000'
    },
    WETH: {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      address: '0xc8BB7DB0a07d2146437cc20e1f3a133474546dD4',
      decimals: 18,
      totalSupply: '40000000'
    }
  },
  mantle: {
    USDT: {
      name: 'Tether USD',
      symbol: 'USDT',
      address: '0x6aE086fB835D53D7fae1B57Cc8A55FEEaEC6ba5b',
      decimals: 6,
      totalSupply: '40000000'
    },
    USDC: {
      name: 'USD Coin',
      symbol: 'USDC',
      address: '0x76837E513b3e6E6eFc828757764Ed5d0Fd24f2dE',
      decimals: 6,
      totalSupply: '40000000'
    },
    DAI: {
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      address: '0xd6Ff774460085767e2c6b3DabcA5AE3D5a57e27a',
      decimals: 18,
      totalSupply: '40000000'
    },
    WETH: {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      address: '0xCa7b49d1C243a9289aE2316051eb15146125914d',
      decimals: 18,
      totalSupply: '40000000'
    }
  },
  metis: {
    USDT: {
      name: 'Tether USD',
      symbol: 'USDT',
      address: '0x88b47706dF760cC4Cd5a13ae36A2809C8adD8898',
      decimals: 6,
      totalSupply: '40000000'
    },
    USDC: {
      name: 'USD Coin',
      symbol: 'USDC',
      address: '0x16d44fBBc8E1F3FBB6ac0674a44EECfa528604DD',
      decimals: 6,
      totalSupply: '40000000'
    },
    DAI: {
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      address: '0x23E380def17aAA8554297069422039517B2997b9',
      decimals: 18,
      totalSupply: '40000000'
    },
    WETH: {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      address: '0x1A3d532875aD585776c814E7749a5e7a58b3E49b',
      decimals: 18,
      totalSupply: '40000000'
    }
  },
  lazai: {
    USDT: {
      name: 'Tether USD',
      symbol: 'USDT',
      address: '0x9D81C1a89bE608417B5Bb1C1cF5858594D01E8a3',
      decimals: 6,
      totalSupply: '40000000'
    },
    USDC: {
      name: 'USD Coin',
      symbol: 'USDC',
      address: '0x677B021cCBA318A93BACB1653fD7bE0882ceE9Fd',
      decimals: 6,
      totalSupply: '40000000'
    },
    DAI: {
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      address: '0xeC53e4a54b3AB36fb684966c222Ff6f347C7e84c',
      decimals: 18,
      totalSupply: '40000000'
    },
    WETH: {
      name: 'Wrapped Ether',
      symbol: 'WETH',
      address: '0xef63df9fa0E5f79127AaC0B2a0ec969CC30be532',
      decimals: 18,
      totalSupply: '40000000'
    }
  }
} as const;

// DeFi contracts for each network
// Use Map for runtime registration support while maintaining backward compatibility
const defiContractsMap = new Map<NetworkId, DeFiContracts>();

// Initialize with default contracts
const DEFAULT_DEFI_CONTRACTS: Record<string, DeFiContracts> = {
  hyperion: {
    LIQUIDITY_POOL: '0x91C39DAA7617C5188d0427Fc82e4006803772B74',
    BUY_VAULT: '0x0adFd197aAbbC194e8790041290Be57F18d576a3',
    STAKING_REWARDS: '0xB94d264074571A5099C458f74b526d1e4EE0314B',
    BRIDGE: '0xfF064Fd496256e84b68dAE2509eDA84a3c235550',
    FAUCET: '0xE1B8C7168B0c48157A5e4B80649C5a1b83bF4cC4'
  },
  mantle: {
    LIQUIDITY_POOL: '0x93c714601b8bc0C9A9d605CEc99786847654598e',
    BUY_VAULT: '0x1E0B86323fdFFa099AAeEe9B3C8B2f8C6E20fFa5',
    STAKING_REWARDS: '0x1a80Db4cf9E26BafCf672c534Ab219630fFE1A5E',
    BRIDGE: '0xd6629696A52E914433b0924f1f49d42216708276',
    FAUCET: '0x0e04CB9E80579aA464Af122457fa2c477c126868'
  },
  metis: {
    LIQUIDITY_POOL: '0x5AC81bC04fc19871E103667ee4b3f0B77b960D7d',
    BUY_VAULT: '0xf3d5C21e02943539364A3A4dd2Cba88408024A5f',
    STAKING_REWARDS: '0xCfaf530E5c6568D3953DfFcB2363Ae4F77332afa',
    BRIDGE: '0x1AC16E6C537438c82A61A106B876Ef69C7e247d2',
    FAUCET: '0x50888Ced4d0BCcB1CD7494245716Ac005A42a8D9'
  },
  lazai: {
    LIQUIDITY_POOL: '0xE07471cbe06bC3Dd3F74001A2EFBEeA1D60f51f8',
    BUY_VAULT: '0x66d12d47034F8D6221586e32bac8bE6819467E07',
    STAKING_REWARDS: '0x84d0A880C970A53154D4d6B25E3825046D677603',
    BRIDGE: '0xf2D33cF11d102F94148c38f943C99408f7C898cf',
    FAUCET: '0x04107Dd22f966aB3f9A130798FEc45602476F6a5'
  }
} as const;

// Initialize map with default contracts
Object.entries(DEFAULT_DEFI_CONTRACTS).forEach(([networkId, contracts]) => {
  defiContractsMap.set(networkId, contracts);
});

// Export for backward compatibility
export const DEFI_CONTRACTS: Record<string, DeFiContracts> = DEFAULT_DEFI_CONTRACTS;

// Trading pairs with liquidity (1,000,000 tokens each) - same for all networks
export const TRADING_PAIRS = [
  { tokenA: 'USDT', tokenB: 'USDC', liquidity: '1000000' },
  { tokenA: 'USDT', tokenB: 'DAI', liquidity: '1000000' },
  { tokenA: 'USDT', tokenB: 'WETH', liquidity: '1000000' },
  { tokenA: 'USDC', tokenB: 'DAI', liquidity: '1000000' },
  { tokenA: 'USDC', tokenB: 'WETH', liquidity: '1000000' },
  { tokenA: 'DAI', tokenB: 'WETH', liquidity: '1000000' }
] as const;

/**
 * Get token contract for a specific network
 */
export function getTokenContract(networkId: NetworkId, tokenSymbol: TokenSymbol): TokenContract {
  return TOKEN_CONTRACTS[networkId][tokenSymbol];
}

/**
 * Get DeFi contract address for a specific network
 */
export function getDeFiContract(networkId: NetworkId, contractType: keyof DeFiContracts): string | undefined {
  const contracts = defiContractsMap.get(networkId) || DEFI_CONTRACTS[networkId];
  return contracts?.[contractType];
}

/**
 * Get all contract addresses for a network
 */
export function getAllContracts(networkId: NetworkId): DeFiContracts | undefined {
  return defiContractsMap.get(networkId) || DEFI_CONTRACTS[networkId];
}

/**
 * Check if a contract is available on a network
 */
export function isContractAvailable(
  networkId: NetworkId,
  contractType: keyof DeFiContracts
): boolean {
  const contracts = defiContractsMap.get(networkId) || DEFI_CONTRACTS[networkId];
  if (!contracts) return false;
  const contract = contracts[contractType];
  return !!contract && contract !== '0x0000000000000000000000000000000000000000';
}

/**
 * Register contract address for a network at runtime
 */
export function registerContractAddress(
  networkId: NetworkId,
  contractType: keyof DeFiContracts,
  address: string
): void {
  if (!address || address === '0x0000000000000000000000000000000000000000') {
    throw new Error('Invalid contract address');
  }

  // Validate address format
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    throw new Error('Invalid address format');
  }

  const existing = defiContractsMap.get(networkId);
  if (existing) {
    existing[contractType] = address;
    defiContractsMap.set(networkId, existing);
  } else {
    // Create new entry for this network
    const newContracts: DeFiContracts = {
      LIQUIDITY_POOL: contractType === 'LIQUIDITY_POOL' ? address : '',
      BUY_VAULT: contractType === 'BUY_VAULT' ? address : '',
      STAKING_REWARDS: contractType === 'STAKING_REWARDS' ? address : '',
      BRIDGE: contractType === 'BRIDGE' ? address : '',
      FAUCET: contractType === 'FAUCET' ? address : '',
    };
    newContracts[contractType] = address;
    defiContractsMap.set(networkId, newContracts);
  }
}

/**
 * Register all contracts for a network at runtime
 */
export function registerAllContracts(
  networkId: NetworkId,
  contracts: DeFiContracts
): void {
  // Validate all addresses
  Object.entries(contracts).forEach(([type, address]) => {
    if (address && address !== '0x0000000000000000000000000000000000000000') {
      if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
        throw new Error(`Invalid address format for ${type}`);
      }
    }
  });

  defiContractsMap.set(networkId, contracts);
}
