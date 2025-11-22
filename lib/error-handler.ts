// Centralized Error Handling - DEMO MODE
// Simplified error handling for showcase purposes

export enum ErrorType {
  USER_REJECTION = 'USER_REJECTION',
  CONTRACT_ERROR = 'CONTRACT_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  INSUFFICIENT_BALANCE = 'INSUFFICIENT_BALANCE',
  RATE_LIMIT = 'RATE_LIMIT',
  INVALID_INPUT = 'INVALID_INPUT',
  WALLET_NOT_CONNECTED = 'WALLET_NOT_CONNECTED',
  NETWORK_MISMATCH = 'NETWORK_MISMATCH',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

export interface ErrorInfo {
  type: ErrorType;
  message: string;
  shouldRetry: boolean;
  userMessage: string;
  originalError?: any;
}

/**
 * Handle Web3 errors and convert them to standardized error info - SIMPLIFIED
 */
export function handleWeb3Error(error: any): ErrorInfo {
  // User rejection errors
  if (error.message?.includes('rejected') || error.message?.includes('Rejected')) {
    return {
      type: ErrorType.USER_REJECTION,
      message: 'User rejected the transaction',
      shouldRetry: false,
      userMessage: 'Transaction rejected by user'
    };
  }

  // Insufficient balance
  if (error.message?.includes('insufficient') || error.message?.includes('Insufficient')) {
    return {
      type: ErrorType.INSUFFICIENT_BALANCE,
      message: error.message || 'Insufficient balance',
      shouldRetry: false,
      userMessage: 'Insufficient balance for this transaction'
    };
  }

  // Invalid input
  if (error.message?.includes('invalid') || error.message?.includes('Invalid')) {
    return {
      type: ErrorType.INVALID_INPUT,
      message: error.message || 'Invalid input',
      shouldRetry: false,
      userMessage: 'Invalid input. Please check your values and try again.'
    };
  }

  // Unknown error
  return {
    type: ErrorType.UNKNOWN_ERROR,
    message: error.message || 'An unknown error occurred',
    shouldRetry: false,
    userMessage: error.message || 'An error occurred. Please try again.',
    originalError: error
  };
}

/**
 * Get user-friendly error message
 */
export function getUserFriendlyMessage(error: any): string {
  const errorInfo = handleWeb3Error(error);
  return errorInfo.userMessage;
}

/**
 * Check if error is retryable
 */
export function isRetryableError(error: any): boolean {
  const errorInfo = handleWeb3Error(error);
  return errorInfo.shouldRetry;
}

/**
 * Check if error is a user rejection (should not be logged)
 */
export function isUserRejection(error: any): boolean {
  const errorInfo = handleWeb3Error(error);
  return errorInfo.type === ErrorType.USER_REJECTION;
}
