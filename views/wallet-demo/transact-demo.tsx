export default function TransactDemo() {
  return (
    <div className="text-gray-300">
      <div className="mb-4">
        <span className="text-blue-400">// Bridge Component Demo - Hyperion Testnet</span>
      </div>
      <pre className="text-green-400">
{`import { BridgeComponent } from 'hyperionkit'

function App() {
  return (
    <BridgeComponent 
      contractAddress="0xfF064Fd496256e84b68dAE2509eDA84a3c235550"
      onBridge={(amount, fromChain, toChain, token) => {
        console.log('Bridge:', amount, 'from', fromChain, 'to', toChain, token)
      }}
      supportedChains={['Ethereum', 'Polygon', 'BSC', 'Arbitrum']}
      supportedTokens={[
        { symbol: 'USDT', address: '0x9b52D326D4866055F6c23297656002992e4293FC' },
        { symbol: 'USDC', address: '0x31424DB0B7a929283C394b4DA412253Ab6D61682' },
        { symbol: 'WETH', address: '0xc8BB7DB0a07d2146437cc20e1f3a133474546dD4' }
      ]}
      minAmount={1}
      maxAmount={100000}
      network="Hyperion Testnet"
    />
  )
}`}
      </pre>
      <div className="mt-4 text-sm text-gray-400">
        <p>• Cross-chain bridging via Bridge contract</p>
        <p>• Multi-chain support with major networks</p>
        <p>• Contract: 0xfF064Fd496256e84b68dAE2509eDA84a3c235550</p>
      </div>
    </div>
  )
}
