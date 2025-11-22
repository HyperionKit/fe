// Network Configuration for Multi-Chain Support - DEMO MODE
// RPC URLs are non-functional - for UI display only

// NetworkId is now a string to support dynamic networks
export type NetworkId = string;

export interface NetworkConfig {
  id: NetworkId;
  name: string;
  chainId: number;
  rpcUrl: string;
  currencySymbol: string;
  blockExplorer: string;
  isTestnet: boolean;
}

export const NETWORKS: Record<NetworkId, NetworkConfig> = {
  hyperion: {
    id: 'hyperion',
    name: 'Hyperion Testnet',
    chainId: 133717,
    rpcUrl: 'https://hyperion-testnet.metisdevops.link', // Non-functional in demo mode
    currencySymbol: 'tMETIS',
    blockExplorer: 'https://hyperion-testnet-explorer.metisdevops.link',
    isTestnet: true
  },
  mantle: {
    id: 'mantle',
    name: 'Mantle Testnet',
    chainId: 5003,
    rpcUrl: 'https://rpc.sepolia.mantle.xyz', // Non-functional in demo mode
    currencySymbol: 'MNT',
    blockExplorer: 'https://sepolia.mantlescan.xyz',
    isTestnet: true
  },
  metis: {
    id: 'metis',
    name: 'Metis Testnet',
    chainId: 55902,
    rpcUrl: 'https://metis-sepolia-rpc.publicnode.com', // Non-functional in demo mode
    currencySymbol: 'tMETIS',
    blockExplorer: 'https://sepolia-explorer.metisdevops.link',
    isTestnet: true
  },
  lazai: {
    id: 'lazai',
    name: 'LazAI Testnet',
    chainId: 133718,
    rpcUrl: 'https://testnet.lazai.network', // Non-functional in demo mode
    currencySymbol: 'LAZAI',
    blockExplorer: 'https://testnet-explorer.lazai.network',
    isTestnet: true
  }
} as const;

export const SUPPORTED_NETWORKS: NetworkConfig[] = Object.values(NETWORKS);

/**
 * Get network configuration by network ID
 */
export function getNetworkById(networkId: NetworkId): NetworkConfig {
  return NETWORKS[networkId];
}

/**
 * Get network configuration by chain ID
 */
export function getNetworkByChainId(chainId: number): NetworkConfig | undefined {
  return SUPPORTED_NETWORKS.find(network => network.chainId === chainId);
}

