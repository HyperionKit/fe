declare global {
  interface Window {
    ethereum?: {
      request: (args: { 
        method: string; 
        params?: any[];
      }) => Promise<any>;
      on: (eventName: string, handler: (params: any) => void) => void;
      removeListener: (eventName: string, handler: (params: any) => void) => void;
      selectedAddress?: string;
      chainId?: string;
      isMetaMask?: boolean;
      isCoinbaseWallet?: boolean;
      isOKExWallet?: boolean;
      providers?: any[];
    };
    coinbaseWalletExtension?: any;
    okxwallet?: any;
    phantom?: {
      ethereum?: any;
    };
  }
}

// Type definitions for wallet network switching methods
interface WalletSwitchEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
}

interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
}

export {};
