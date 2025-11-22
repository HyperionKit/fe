/**
 * Network Registry
 * Centralized network configuration management with runtime registration support
 */

import { NetworkConfig, NetworkId } from './networks';
import { NETWORKS } from './networks';

class NetworkRegistry {
  private networks: Map<NetworkId, NetworkConfig> = new Map();

  constructor() {
    // Initialize with default networks
    Object.values(NETWORKS).forEach((network) => {
      this.networks.set(network.id, network);
    });
  }

  /**
   * Register a new network at runtime
   */
  register(network: NetworkConfig): void {
    if (!this.validate(network)) {
      throw new Error(`Invalid network configuration: ${network.id}`);
    }

    this.networks.set(network.id, network);
  }

  /**
   * Get network by ID
   */
  get(id: NetworkId): NetworkConfig | undefined {
    return this.networks.get(id);
  }

  /**
   * Get network by ID with fallback
   */
  getWithFallback(id: NetworkId, fallbackId: NetworkId = 'hyperion'): NetworkConfig {
    return this.networks.get(id) || this.networks.get(fallbackId) || this.list()[0];
  }

  /**
   * List all registered networks
   */
  list(): NetworkConfig[] {
    return Array.from(this.networks.values());
  }

  /**
   * Check if network exists
   */
  has(id: NetworkId): boolean {
    return this.networks.has(id);
  }

  /**
   * Validate network configuration
   */
  validate(config: Partial<NetworkConfig>): boolean {
    if (!config.id || typeof config.id !== 'string') {
      return false;
    }

    if (!config.name || typeof config.name !== 'string') {
      return false;
    }

    if (!config.chainId || typeof config.chainId !== 'number' || config.chainId <= 0) {
      return false;
    }

    if (!config.rpcUrl || typeof config.rpcUrl !== 'string') {
      return false;
    }

    if (!config.currencySymbol || typeof config.currencySymbol !== 'string') {
      return false;
    }

    // blockExplorer is optional but should be string if provided
    if (config.blockExplorer !== undefined && typeof config.blockExplorer !== 'string') {
      return false;
    }

    // isTestnet is optional but should be boolean if provided
    if (config.isTestnet !== undefined && typeof config.isTestnet !== 'boolean') {
      return false;
    }

    return true;
  }

  /**
   * Remove a network (use with caution)
   */
  remove(id: NetworkId): boolean {
    // Don't allow removing default networks
    const defaultNetworks = ['hyperion', 'mantle', 'metis', 'lazai'];
    if (defaultNetworks.includes(id)) {
      console.warn(`Cannot remove default network: ${id}`);
      return false;
    }

    return this.networks.delete(id);
  }

  /**
   * Clear all non-default networks
   */
  clearCustom(): void {
    const defaultNetworks = ['hyperion', 'mantle', 'metis', 'lazai'];
    const keysToDelete: NetworkId[] = [];

    this.networks.forEach((_, id) => {
      if (!defaultNetworks.includes(id)) {
        keysToDelete.push(id);
      }
    });

    keysToDelete.forEach((id) => this.networks.delete(id));
  }
}

// Export singleton instance
export const networkRegistry = new NetworkRegistry();

// Export convenience functions
export function registerNetwork(network: NetworkConfig): void {
  networkRegistry.register(network);
}

export function getNetworkById(id: NetworkId): NetworkConfig | undefined {
  return networkRegistry.get(id);
}

export function getNetworkByIdWithFallback(id: NetworkId, fallbackId?: NetworkId): NetworkConfig {
  return networkRegistry.getWithFallback(id, fallbackId);
}

export function listNetworks(): NetworkConfig[] {
  return networkRegistry.list();
}

export function hasNetwork(id: NetworkId): boolean {
  return networkRegistry.has(id);
}

export function validateNetwork(config: Partial<NetworkConfig>): boolean {
  return networkRegistry.validate(config);
}

