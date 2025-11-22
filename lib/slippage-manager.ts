/**
 * Slippage Manager
 * Manages slippage tolerance settings and calculations
 */

const STORAGE_KEY = 'defi_slippage_tolerance';
const DEFAULT_SLIPPAGE = 0.5; // 0.5% default
const MIN_SLIPPAGE = 0.1; // 0.1% minimum
const MAX_SLIPPAGE = 50; // 50% maximum

class SlippageManager {
  private slippage: number = DEFAULT_SLIPPAGE;

  constructor() {
    this.loadFromStorage();
  }

  /**
   * Load slippage from localStorage
   */
  private loadFromStorage(): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const value = parseFloat(stored);
        if (!isNaN(value) && value >= MIN_SLIPPAGE && value <= MAX_SLIPPAGE) {
          this.slippage = value;
        }
      }
    } catch (error) {
      console.error('Error loading slippage:', error);
    }
  }

  /**
   * Save slippage to localStorage
   */
  private saveToStorage(): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, this.slippage.toString());
    } catch (error) {
      console.error('Error saving slippage:', error);
    }
  }

  /**
   * Get current slippage tolerance (in percentage)
   */
  get(): number {
    return this.slippage;
  }

  /**
   * Set slippage tolerance (in percentage)
   */
  set(value: number): void {
    if (value < MIN_SLIPPAGE || value > MAX_SLIPPAGE) {
      throw new Error(`Slippage must be between ${MIN_SLIPPAGE}% and ${MAX_SLIPPAGE}%`);
    }

    this.slippage = value;
    this.saveToStorage();
  }

  /**
   * Reset to default
   */
  reset(): void {
    this.slippage = DEFAULT_SLIPPAGE;
    this.saveToStorage();
  }

  /**
   * Calculate minimum amount out with slippage
   */
  calculateMinAmountOut(amountOut: bigint, decimals: number = 18): bigint {
    const slippageBps = BigInt(Math.floor(this.slippage * 100)); // Convert to basis points
    const slippageAmount = (amountOut * slippageBps) / 10000n;
    return amountOut - slippageAmount;
  }

  /**
   * Calculate maximum amount in with slippage
   */
  calculateMaxAmountIn(amountIn: bigint, decimals: number = 18): bigint {
    const slippageBps = BigInt(Math.floor(this.slippage * 100)); // Convert to basis points
    const slippageAmount = (amountIn * slippageBps) / 10000n;
    return amountIn + slippageAmount;
  }

  /**
   * Check if slippage is within acceptable range
   */
  isAcceptable(actualAmount: bigint, expectedAmount: bigint): boolean {
    if (expectedAmount === 0n) {
      return false;
    }

    const difference = actualAmount > expectedAmount
      ? actualAmount - expectedAmount
      : expectedAmount - actualAmount;

    const slippagePercent = Number((difference * 10000n) / expectedAmount) / 100;
    return slippagePercent <= this.slippage;
  }
}

// Export singleton instance
export const slippageManager = new SlippageManager();

