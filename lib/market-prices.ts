// Market prices based on CoinGecko (as of November 21, 2025)
// These prices are used for swap estimations across all networks

export type TokenSymbol = 'USDT' | 'USDC' | 'DAI' | 'WETH';

export interface TokenPrice {
  symbol: TokenSymbol;
  priceUSD: number;
}

// Current market prices from CoinGecko
export const MARKET_PRICES: Record<TokenSymbol, TokenPrice> = {
  USDT: {
    symbol: 'USDT',
    priceUSD: 1.00
  },
  USDC: {
    symbol: 'USDC',
    priceUSD: 1.00
  },
  DAI: {
    symbol: 'DAI',
    priceUSD: 1.00
  },
  WETH: {
    symbol: 'WETH',
    priceUSD: 4172.38
  }
};

/**
 * Get token price in USD
 */
export function getTokenPrice(tokenSymbol: TokenSymbol): number {
  return MARKET_PRICES[tokenSymbol]?.priceUSD || 0;
}

/**
 * Calculate exchange rate between two tokens based on market prices
 * @param fromToken - Source token symbol
 * @param toToken - Destination token symbol
 * @param amount - Amount of fromToken
 * @returns Estimated amount of toToken
 */
export function calculateSwapEstimate(
  fromToken: TokenSymbol,
  toToken: TokenSymbol,
  amount: number
): number {
  const fromPrice = getTokenPrice(fromToken);
  const toPrice = getTokenPrice(toToken);

  if (fromPrice === 0 || toPrice === 0) {
    return 0;
  }

  // Calculate: (amount * fromPrice) / toPrice
  return (amount * fromPrice) / toPrice;
}

/**
 * Get exchange rate between two tokens
 * @param fromToken - Source token symbol
 * @param toToken - Destination token symbol
 * @returns Exchange rate (how many toToken per 1 fromToken)
 */
export function getExchangeRate(fromToken: TokenSymbol, toToken: TokenSymbol): number {
  const fromPrice = getTokenPrice(fromToken);
  const toPrice = getTokenPrice(toToken);

  if (fromPrice === 0 || toPrice === 0) {
    return 0;
  }

  return fromPrice / toPrice;
}

