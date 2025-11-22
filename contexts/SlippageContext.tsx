"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { slippageManager } from '@/lib/slippage-manager';

interface SlippageContextType {
  slippage: number;
  setSlippage: (value: number) => void;
  resetSlippage: () => void;
  calculateMinAmountOut: (amountOut: bigint, decimals?: number) => bigint;
  calculateMaxAmountIn: (amountIn: bigint, decimals?: number) => bigint;
  isAcceptable: (actualAmount: bigint, expectedAmount: bigint) => boolean;
}

const SlippageContext = createContext<SlippageContextType | undefined>(undefined);

export function SlippageProvider({ children }: { children: ReactNode }) {
  const [slippage, setSlippageState] = useState<number>(slippageManager.get());

  useEffect(() => {
    // Sync with manager
    setSlippageState(slippageManager.get());
  }, []);

  const setSlippage = (value: number) => {
    try {
      slippageManager.set(value);
      setSlippageState(value);
    } catch (error) {
      console.error('Error setting slippage:', error);
      throw error;
    }
  };

  const resetSlippage = () => {
    slippageManager.reset();
    setSlippageState(slippageManager.get());
  };

  const calculateMinAmountOut = (amountOut: bigint, decimals: number = 18) => {
    return slippageManager.calculateMinAmountOut(amountOut, decimals);
  };

  const calculateMaxAmountIn = (amountIn: bigint, decimals: number = 18) => {
    return slippageManager.calculateMaxAmountIn(amountIn, decimals);
  };

  const isAcceptable = (actualAmount: bigint, expectedAmount: bigint) => {
    return slippageManager.isAcceptable(actualAmount, expectedAmount);
  };

  return (
    <SlippageContext.Provider
      value={{
        slippage,
        setSlippage,
        resetSlippage,
        calculateMinAmountOut,
        calculateMaxAmountIn,
        isAcceptable,
      }}
    >
      {children}
    </SlippageContext.Provider>
  );
}

export function useSlippage() {
  const context = useContext(SlippageContext);
  if (context === undefined) {
    throw new Error('useSlippage must be used within a SlippageProvider');
  }
  return context;
}

