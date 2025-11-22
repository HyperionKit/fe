// Input Validation Utilities - DEMO MODE
// Validates user inputs, addresses, amounts, and network availability

import { NetworkId, getNetworkById } from './networks';
import { TokenSymbol, getTokenContract } from './contracts';
import { parseTokenAmount, formatTokenAmount } from './web3';

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Validate Ethereum address - MOCKED
 */
export function validateAddress(address: string): ValidationResult {
  if (!address) {
    return { valid: false, error: 'Address is required' };
  }
  
  // Simple address validation (starts with 0x and has 42 characters)
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return { valid: false, error: 'Invalid Ethereum address' };
  }
  
  return { valid: true };
}

/**
 * Validate token amount
 */
export function validateAmount(amount: string, decimals: number): ValidationResult {
  if (!amount || amount.trim() === '') {
    return { valid: false, error: 'Amount is required' };
  }
  
  const numAmount = parseFloat(amount);
  
  if (isNaN(numAmount)) {
    return { valid: false, error: 'Amount must be a valid number' };
  }
  
  if (numAmount <= 0) {
    return { valid: false, error: 'Amount must be greater than 0' };
  }
  
  if (numAmount > Number.MAX_SAFE_INTEGER) {
    return { valid: false, error: 'Amount is too large' };
  }
  
  // Check decimal places
  const decimalPlaces = amount.includes('.') ? amount.split('.')[1].length : 0;
  if (decimalPlaces > decimals) {
    return { valid: false, error: `Amount cannot have more than ${decimals} decimal places` };
  }
  
  return { valid: true };
}

/**
 * Validate network availability - MOCKED
 */
export async function validateNetworkAvailability(networkId: NetworkId): Promise<ValidationResult> {
  try {
    // Demo mode - always return valid
    return { valid: true };
  } catch (error: any) {
    return {
      valid: false,
      error: `Network ${networkId} is not available: ${error.message}`
    };
  }
}

/**
 * Validate sufficient balance - MOCKED
 */
export async function validateSufficientBalance(
  address: string,
  token: TokenSymbol,
  amount: string,
  networkId: NetworkId
): Promise<ValidationResult> {
  try {
    // Validate address first
    const addressValidation = validateAddress(address);
    if (!addressValidation.valid) {
      return addressValidation;
    }
    
    // Validate amount
    const tokenData = getTokenContract(networkId, token);
    const amountValidation = validateAmount(amount, tokenData.decimals);
    if (!amountValidation.valid) {
      return amountValidation;
    }
    
    // Demo mode - always return valid (mock balance check)
    return { valid: true };
  } catch (error: any) {
    return {
      valid: false,
      error: `Failed to validate balance: ${error.message}`
    };
  }
}

/**
 * Validate transaction parameters
 */
export function validateTransactionParams(params: {
  to?: string;
  value?: string;
  data?: string;
}): ValidationResult {
  if (params.to) {
    const addressValidation = validateAddress(params.to);
    if (!addressValidation.valid) {
      return addressValidation;
    }
  }
  
  if (params.value) {
    const numValue = parseFloat(params.value);
    if (isNaN(numValue) || numValue < 0) {
      return { valid: false, error: 'Invalid transaction value' };
    }
  }
  
  return { valid: true };
}
