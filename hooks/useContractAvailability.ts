/**
 * Contract Availability Hook
 * Checks contract deployment status on current network
 */

import { useState, useEffect, useCallback } from 'react';
import { useNetwork } from '@/contexts/NetworkContext';
import { getAvailableContracts, checkContractAvailability, ContractStatus } from '@/lib/contract-availability';
import { DeFiContracts } from '@/lib/contracts';

export interface ContractAvailabilityMap {
  LIQUIDITY_POOL: boolean;
  BRIDGE: boolean;
  STAKING_REWARDS: boolean;
  FAUCET: boolean;
}

export interface UseContractAvailabilityReturn {
  availability: ContractAvailabilityMap;
  isChecking: boolean;
  getStatus: (contractType: keyof DeFiContracts) => ContractStatus | null;
  refresh: () => Promise<void>;
}

export function useContractAvailability(): UseContractAvailabilityReturn {
  const { selectedNetwork } = useNetwork();
  const [availability, setAvailability] = useState<ContractAvailabilityMap>({
    LIQUIDITY_POOL: false,
    BRIDGE: false,
    STAKING_REWARDS: false,
    FAUCET: false
  });
  const [isChecking, setIsChecking] = useState<boolean>(true);
  const [statuses, setStatuses] = useState<Record<string, ContractStatus>>({});

  const checkAvailability = useCallback(async () => {
    setIsChecking(true);
    try {
      const available = await getAvailableContracts(selectedNetwork.id);
      setAvailability(available as ContractAvailabilityMap);
      
      // Also get detailed statuses
      const contractTypes: (keyof DeFiContracts)[] = [
        'LIQUIDITY_POOL',
        'BRIDGE',
        'STAKING_REWARDS',
        'FAUCET'
      ];
      
      const statusPromises = contractTypes.map(async (type) => {
        const status = await checkContractAvailability(selectedNetwork.id, type);
        return [type, status] as [string, ContractStatus];
      });
      
      const statusResults = await Promise.all(statusPromises);
      const statusMap: Record<string, ContractStatus> = {};
      statusResults.forEach(([type, status]) => {
        statusMap[type] = status;
      });
      setStatuses(statusMap);
    } catch (err) {
      console.error('Error checking contract availability:', err);
    } finally {
      setIsChecking(false);
    }
  }, [selectedNetwork.id]);

  const getStatus = useCallback((contractType: keyof DeFiContracts): ContractStatus | null => {
    return statuses[contractType] || null;
  }, [statuses]);

  // Check availability on mount and when network changes
  useEffect(() => {
    checkAvailability();
  }, [checkAvailability]);

  return {
    availability,
    isChecking,
    getStatus,
    refresh: checkAvailability
  };
}

