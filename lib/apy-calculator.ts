/**
 * APY Calculator Utility - DEMO MODE
 * Returns fixed APY values for showcase purposes
 */

/**
 * Calculate APY from reward rate - MOCKED
 */
export function calculateStakingAPY(
  rewardRate: bigint,
  totalStaked: bigint,
  rewardTokenDecimals: number = 18,
  stakingTokenDecimals: number = 18
): number {
  // Demo mode - return fixed APY
  return 12.5;
}

/**
 * Format APY for display
 */
export function formatAPY(apy: number, decimals: number = 2): string {
  if (isNaN(apy) || !isFinite(apy)) {
    return '0.00';
  }

  if (apy > 999999.99) {
    return '999,999.99';
  }

  return apy.toFixed(decimals);
}

/**
 * Calculate APY from contract data - MOCKED
 * Returns fixed APY value for demo
 */
export async function calculateAPYFromContract(
  stakingContract: any,
  rewardTokenDecimals: number = 18,
  stakingTokenDecimals: number = 18
): Promise<number> {
  // Demo mode - return fixed APY of 12.5%
  return 12.5;
}
