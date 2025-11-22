"use client";
import React from 'react';
import { useTokenBalances } from '@/hooks/useTokenBalances';
import { TokenSymbol } from '@/lib/contracts';
import { NetworkId } from '@/lib/networks';

interface TokenBalanceProps {
  token: TokenSymbol | string;
  networkId?: NetworkId;
  onMaxClick?: (balance: string) => void;
  showMaxButton?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export const TokenBalance: React.FC<TokenBalanceProps> = ({
  token,
  networkId,
  onMaxClick,
  showMaxButton = true,
  theme = 'light',
  className = ''
}) => {
  const { getBalance, isLoading } = useTokenBalances();
  const balance = getBalance(token as TokenSymbol);

  const handleMaxClick = () => {
    if (onMaxClick && balance && parseFloat(balance) > 0) {
      onMaxClick(balance);
    }
  };

  if (isLoading) {
    return (
      <div className={`text-xs ${theme === 'light' ? 'text-gray-400' : 'text-gray-500'} ${className}`}>
        Loading balance...
      </div>
    );
  }

  const balanceNum = parseFloat(balance || '0');
  const formattedBalance = balanceNum.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  });

  return (
    <div className={`flex items-center justify-between text-xs ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} ${className}`}>
      <span>
        Balance: {formattedBalance} {token}
      </span>
      {showMaxButton && balanceNum > 0 && (
        <button
          onClick={handleMaxClick}
          className={`ml-2 px-2 py-0.5 rounded text-xs font-medium transition-colors ${
            theme === 'light'
              ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              : 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50'
          }`}
        >
          Max
        </button>
      )}
    </div>
  );
};

export default TokenBalance;

