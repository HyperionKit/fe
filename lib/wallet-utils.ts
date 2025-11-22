// Centralized Wallet Utilities - DEMO MODE
// All wallet functionality is mocked for showcase purposes
// No real wallet connections are performed

export type WalletType = 'metamask' | 'coinbase' | 'okx' | 'phantom' | 'walletconnect' | 'unknown' | 'demo';

export interface WalletProvider {
  request: (args: { method: string; params?: any[] | any }) => Promise<any>;
  on?: (event: string, handler: Function) => void;
  removeListener?: (event: string, handler: Function) => void;
  isMetaMask?: boolean;
  isCoinbaseWallet?: boolean;
  isOKXWallet?: boolean;
  isPhantom?: boolean;
}

/**
 * Get the active wallet provider - MOCKED
 * Returns null in demo mode
 */
export function getActiveWalletProvider(): WalletProvider | null {
  // Demo mode - no real wallet provider
  return null;
}

/**
 * Detect the type of wallet provider - MOCKED
 * Returns 'demo' in demo mode
 */
export function detectWalletType(provider: WalletProvider | null): WalletType {
  // Demo mode - always return 'demo'
  return 'demo';
}

/**
 * Handle wallet-specific errors - MOCKED
 * Returns generic error messages
 */
export function handleWalletError(error: any, walletType: WalletType): string {
  if (error.message?.includes('rejected')) {
    return 'Transaction rejected by user';
  }
  
  if (error.message?.includes('insufficient')) {
    return 'Insufficient balance';
  }
  
  return error.message || 'Wallet error occurred';
}

/**
 * Check if wallet is connected - MOCKED
 * Returns false in demo mode
 */
export async function isWalletConnected(): Promise<boolean> {
  // Demo mode - no real wallet connection
  return false;
}

/**
 * Get connected wallet address - MOCKED
 * Returns null in demo mode
 */
export async function getConnectedAddress(): Promise<string | null> {
  // Demo mode - no real wallet connection
  return null;
}

/**
 * Verify wallet connection directly by querying the provider - MOCKED
 * Returns disconnected state in demo mode
 */
export async function verifyWalletConnection(): Promise<{
  isConnected: boolean;
  provider: WalletProvider | null;
  address: string | null;
}> {
  // Demo mode - always return disconnected
  return {
    isConnected: false,
    provider: null,
    address: null
  };
}
