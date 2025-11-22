/**
 * Contract Availability Utilities - DEMO MODE
 * All contracts are marked as available for showcase purposes
 */

import { NetworkId, DeFiContracts } from './contracts';
import { getDeFiContract, isContractAvailable, getAllContracts } from './contracts';

export interface ContractAvailability {
  [key: string]: boolean;
}

export interface ContractStatus {
  available: boolean;
  deployed: boolean;
  address: string | null;
  message: string;
}

/**
 * Check if a contract is available on a network - MOCKED
 * Always returns available in demo mode
 */
export async function checkContractAvailability(
  networkId: NetworkId,
  contractType: keyof DeFiContracts
): Promise<ContractStatus> {
  const address = getDeFiContract(networkId, contractType);
  const configAvailable = isContractAvailable(networkId, contractType);
  
  if (!address || !configAvailable) {
    const networkName = networkId.charAt(0).toUpperCase() + networkId.slice(1);
    return {
      available: false,
      deployed: false,
      address: null,
      message: `${contractType.replace(/_/g, ' ')} is not configured for ${networkName} network.`
    };
  }
  
  // Demo mode - always return available
  return {
    available: true,
    deployed: true,
    address,
    message: `${contractType.replace(/_/g, ' ')} is available on ${networkId} network (Demo Mode)`
  };
}

/**
 * Get all available contracts for a network - MOCKED
 */
export async function getAvailableContracts(networkId: NetworkId): Promise<ContractAvailability> {
  const contracts = getAllContracts(networkId);
  const availability: ContractAvailability = {};
  
  const contractTypes: (keyof DeFiContracts)[] = [
    'LIQUIDITY_POOL',
    'BRIDGE',
    'STAKING_REWARDS',
    'FAUCET'
  ];
  
  // In demo mode, mark all configured contracts as available
  contractTypes.forEach((contractType) => {
    const address = getDeFiContract(networkId, contractType);
    availability[contractType] = !!address && isContractAvailable(networkId, contractType);
  });
  
  return availability;
}

/**
 * Get user-friendly status message for a contract
 */
export function getContractStatusMessage(
  networkId: NetworkId,
  contractType: keyof DeFiContracts
): string {
  const address = getDeFiContract(networkId, contractType);
  const networkName = networkId.charAt(0).toUpperCase() + networkId.slice(1);
  const contractName = contractType.replace(/_/g, ' ');
  
  if (!address) {
    return `${contractName} is not available on ${networkName} network.`;
  }
  
  return `${contractName} is available on ${networkName} network (Demo Mode)`;
}

/**
 * Check if required contracts are available for a DeFi operation - MOCKED
 */
export async function checkRequiredContracts(
  networkId: NetworkId,
  requiredContracts: (keyof DeFiContracts)[]
): Promise<{
  allAvailable: boolean;
  missing: string[];
  statuses: Record<string, ContractStatus>;
}> {
  const statuses: Record<string, ContractStatus> = {};
  const missing: string[] = [];
  
  await Promise.all(
    requiredContracts.map(async (contractType) => {
      const status = await checkContractAvailability(networkId, contractType);
      statuses[contractType] = status;
      if (!status.available) {
        missing.push(contractType);
      }
    })
  );
  
  return {
    allAvailable: missing.length === 0,
    missing,
    statuses
  };
}
