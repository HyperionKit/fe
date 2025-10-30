'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook for simulating wallet loading states
 */
export function useDemoWallet({ delay = 750, autoStart = true } = {}) {
  const [loading, setLoading] = useState(autoStart);
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState('0.0');

  useEffect(() => {
    if (autoStart) {
      const timer = setTimeout(() => {
        setLoading(false);
        setConnected(true);
        setAddress('0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6');
        setBalance('1,234.56');
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, autoStart]);

  const connect = useCallback(async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setConnected(true);
    setAddress('0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6');
    setBalance('1,234.56');
  }, []);

  const disconnect = useCallback(() => {
    setConnected(false);
    setAddress(null);
    setBalance('0.0');
  }, []);

  return {
    loading,
    connected,
    address,
    balance,
    connect,
    disconnect
  };
}

/**
 * Hook for simulating transaction states
 */
export function useDemoTransaction() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [txHash, setTxHash] = useState<string | null>(null);
  const [gasUsed, setGasUsed] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendTransaction = useCallback(async (to: string, amount: string) => {
    setStatus('pending');
    setError(null);
    
    // Simulate transaction processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate 95% success rate
    if (Math.random() > 0.05) {
      setStatus('success');
      setTxHash('0x' + Math.random().toString(16).substr(2, 64));
      setGasUsed('21,000');
    } else {
      setStatus('error');
      setError('Transaction failed: Insufficient gas');
    }
  }, []);

  const reset = useCallback(() => {
    setStatus('idle');
    setTxHash(null);
    setGasUsed(null);
    setError(null);
  }, []);

  return {
    status,
    txHash,
    gasUsed,
    error,
    sendTransaction,
    reset
  };
}

/**
 * Hook for simulating batch operations
 */
export function useDemoBatch() {
  const [operations, setOperations] = useState<any[]>([]);
  const [isBatching, setIsBatching] = useState(false);
  const [batchStatus, setBatchStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');

  const addOperation = useCallback((operation: any) => {
    setOperations(prev => [...prev, { ...operation, id: Math.random().toString(36).substr(2, 9) }]);
  }, []);

  const removeOperation = useCallback((id: string) => {
    setOperations(prev => prev.filter(op => op.id !== id));
  }, []);

  const executeBatch = useCallback(async () => {
    if (operations.length === 0) return;
    
    setIsBatching(true);
    setBatchStatus('pending');
    
    // Simulate batch execution
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setBatchStatus('success');
    setIsBatching(false);
  }, [operations]);

  const clearBatch = useCallback(() => {
    setOperations([]);
    setBatchStatus('idle');
  }, []);

  return {
    operations,
    isBatching,
    batchStatus,
    addOperation,
    removeOperation,
    executeBatch,
    clearBatch
  };
}

/**
 * Hook for simulating authentication flows
 */
export function useDemoAuth() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authMethod, setAuthMethod] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  const authenticate = useCallback(async (method: 'google' | 'twitter' | 'email' | 'passkey') => {
    setIsAuthenticating(true);
    setAuthMethod(method);
    
    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setUser({
      id: Math.random().toString(36).substr(2, 9),
      name: `User ${Math.floor(Math.random() * 1000)}`,
      email: `user${Math.floor(Math.random() * 1000)}@example.com`,
      method
    });
    
    setIsAuthenticating(false);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setAuthMethod(null);
  }, []);

  return {
    isAuthenticating,
    authMethod,
    user,
    authenticate,
    logout
  };
}

/**
 * Hook for simulating loading states with progress
 */
export function useDemoProgress({ duration = 3000, steps = 5 } = {}) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    setIsRunning(true);
    setProgress(0);
    setCurrentStep(0);
    
    const stepDuration = duration / steps;
    let step = 0;
    
    intervalRef.current = setInterval(() => {
      step++;
      setCurrentStep(step);
      setProgress((step / steps) * 100);
      
      if (step >= steps) {
        setIsRunning(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, stepDuration);
  }, [duration, steps]);

  const stop = useCallback(() => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const reset = useCallback(() => {
    setProgress(0);
    setCurrentStep(0);
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    progress,
    currentStep,
    isRunning,
    start,
    stop,
    reset
  };
}

/**
 * Hook for simulating notifications and toasts
 */
export function useDemoNotifications() {
  const [notifications, setNotifications] = useState<any[]>([]);

  const addNotification = useCallback((notification: {
    type: 'success' | 'error' | 'info' | 'warning';
    title: string;
    message: string;
    duration?: number;
  }) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = {
      ...notification,
      id,
      timestamp: Date.now()
    };

    setNotifications(prev => [...prev, newNotification]);

    if (notification.duration) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration);
    }
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll
  };
}

/**
 * Hook for simulating demo interactions
 */
export function useDemoInteraction() {
  const [isInteracting, setIsInteracting] = useState(false);
  const [interactionType, setInteractionType] = useState<string | null>(null);
  const [interactionData, setInteractionData] = useState<any>(null);

  const startInteraction = useCallback((type: string, data?: any) => {
    setIsInteracting(true);
    setInteractionType(type);
    setInteractionData(data);
  }, []);

  const endInteraction = useCallback(() => {
    setIsInteracting(false);
    setInteractionType(null);
    setInteractionData(null);
  }, []);

  return {
    isInteracting,
    interactionType,
    interactionData,
    startInteraction,
    endInteraction
  };
}
