export default function SwapDemo() {
  return (
    <div className="text-gray-300">
      <div className="mb-4">
        <span className="text-blue-400">// Swap Component Demo - Hyperion Testnet</span>
      </div>
      <pre className="text-green-400">
{`import { SwapComponent } from 'hyperionkit'

function App() {
  return (
    <SwapComponent 
      contractAddress="0x91C39DAA7617C5188d0427Fc82e4006803772B74"
      onSwap={(fromToken, toToken, amount, slippage) => {
        console.log('Swap:', amount, 'from', fromToken, 'to', toToken, 'slippage:', slippage)
      }}
      supportedTokens={[
        { symbol: 'USDT', address: '0x9b52D326D4866055F6c23297656002992e4293FC', decimals: 6 },
        { symbol: 'USDC', address: '0x31424DB0B7a929283C394b4DA412253Ab6D61682', decimals: 6 },
        { symbol: 'DAI', address: '0xdE896235F5897EC6D13Aa5b43964F9d2d34D82Fb', decimals: 18 },
        { symbol: 'WETH', address: '0xc8BB7DB0a07d2146437cc20e1f3a133474546dD4', decimals: 18 }
      ]}
      slippageTolerance={0.5} // 0.5%
      network="Hyperion Testnet"
    />
  )
}`}
      </pre>
      <div className="mt-4 text-sm text-gray-400">
        <p>• AMM token swaps via LiquidityPool contract</p>
        <p>• Support for major stablecoins and WETH</p>
        <p>• Contract: 0x91C39DAA7617C5188d0427Fc82e4006803772B74</p>
      </div>
    </div>
  )
}
