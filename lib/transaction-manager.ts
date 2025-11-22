// Transaction Management and Tracking - DEMO MODE
// Simplified transaction tracking for showcase purposes

import { NetworkId } from './networks';

export interface TransactionMetadata {
  type: 'swap' | 'bridge' | 'stake' | 'unstake' | 'faucet' | 'approve' | 'transfer' | 'other';
  token?: string;
  amount?: string;
  networkId: NetworkId;
  description?: string;
}

export interface TransactionState {
  hash: string;
  status: 'pending' | 'confirmed' | 'failed';
  metadata: TransactionMetadata;
  submittedAt: number;
  confirmedAt?: number;
  blockNumber?: number;
  gasUsed?: bigint;
  error?: string;
}

// Mock transaction response interface
interface MockTransactionResponse {
  hash: string;
  wait: () => Promise<{ status: number; hash: string; blockNumber?: number; gasUsed?: bigint }>;
}

export class TransactionManager {
  private transactions: Map<string, TransactionState> = new Map();
  private listeners: Map<string, Set<(state: TransactionState) => void>> = new Map();

  /**
   * Submit a transaction and track it - MOCKED
   */
  async submitTransaction(
    tx: MockTransactionResponse,
    metadata: TransactionMetadata
  ): Promise<TransactionState> {
    const state: TransactionState = {
      hash: tx.hash,
      status: 'pending',
      metadata,
      submittedAt: Date.now()
    };

    this.transactions.set(tx.hash, state);
    this.notifyListeners(tx.hash, state);

    // Simulate confirmation tracking
    this.trackTransaction(tx, metadata.networkId).catch(error => {
      console.error('Error tracking transaction:', error);
    });

    return state;
  }

  /**
   * Track transaction until confirmation - MOCKED
   */
  private async trackTransaction(tx: MockTransactionResponse, networkId: NetworkId): Promise<void> {
    try {
      // Simulate waiting for confirmation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const receipt = await tx.wait();
      
      const state = this.transactions.get(tx.hash);
      if (state) {
        state.status = receipt.status === 1 ? 'confirmed' : 'failed';
        state.confirmedAt = Date.now();
        state.blockNumber = receipt.blockNumber;
        state.gasUsed = receipt.gasUsed;
        
        if (receipt.status !== 1) {
          state.error = 'Transaction reverted';
        }
        
        this.transactions.set(tx.hash, state);
        this.notifyListeners(tx.hash, state);
      }
    } catch (error: any) {
      const state = this.transactions.get(tx.hash);
      if (state) {
        state.status = 'failed';
        state.error = error.message || 'Transaction failed';
        this.transactions.set(tx.hash, state);
        this.notifyListeners(tx.hash, state);
      }
    }
  }

  /**
   * Wait for transaction confirmation
   */
  async waitForConfirmation(hash: string, timeout: number = 60000): Promise<TransactionState> {
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeout) {
      const state = this.transactions.get(hash);
      if (state && state.status !== 'pending') {
        return state;
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    throw new Error('Transaction confirmation timeout');
  }

  /**
   * Get transaction state
   */
  getTransaction(hash: string): TransactionState | undefined {
    return this.transactions.get(hash);
  }

  /**
   * Get all transactions for a network
   */
  getTransactionHistory(networkId: NetworkId): TransactionState[] {
    return Array.from(this.transactions.values())
      .filter(tx => tx.metadata.networkId === networkId)
      .sort((a, b) => b.submittedAt - a.submittedAt);
  }

  /**
   * Add listener for transaction updates
   */
  onTransactionUpdate(hash: string, callback: (state: TransactionState) => void): () => void {
    if (!this.listeners.has(hash)) {
      this.listeners.set(hash, new Set());
    }
    this.listeners.get(hash)!.add(callback);
    
    // Return unsubscribe function
    return () => {
      const listeners = this.listeners.get(hash);
      if (listeners) {
        listeners.delete(callback);
        if (listeners.size === 0) {
          this.listeners.delete(hash);
        }
      }
    };
  }

  /**
   * Notify listeners of transaction state change
   */
  private notifyListeners(hash: string, state: TransactionState): void {
    const listeners = this.listeners.get(hash);
    if (listeners) {
      listeners.forEach(callback => {
        try {
          callback(state);
        } catch (error) {
          console.error('Error in transaction listener:', error);
        }
      });
    }
  }

  /**
   * Clear transaction history
   */
  clearHistory(networkId?: NetworkId): void {
    if (networkId) {
      const toRemove: string[] = [];
      this.transactions.forEach((state, hash) => {
        if (state.metadata.networkId === networkId) {
          toRemove.push(hash);
        }
      });
      toRemove.forEach(hash => this.transactions.delete(hash));
    } else {
      this.transactions.clear();
    }
    this.listeners.clear();
  }
}

// Export singleton instance
export const transactionManager = new TransactionManager();
