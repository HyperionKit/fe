export default function BuyDemo() {
  return (
    <div className="text-gray-300">
      <div className="mb-4">
        <span className="text-blue-400">// Buy Component Demo - Hyperion Testnet</span>
      </div>
      <pre className="text-green-400">
{`import { BuyComponent } from 'hyperionkit'

function App() {
  return (
    <BuyComponent 
      contractAddress="0x0adFd197aAbbC194e8790041290Be57F18d576a3"
      onPurchase={(amount, token) => {
        console.log('Purchase:', amount, token)
      }}
      supportedTokens={[
        { symbol: 'USDT', address: '0x9b52D326D4866055F6c23297656002992e4293FC' },
        { symbol: 'USDC', address: '0x31424DB0B7a929283C394b4DA412253Ab6D61682' },
        { symbol: 'DAI', address: '0xdE896235F5897EC6D13Aa5b43964F9d2d34D82Fb' },
        { symbol: 'WETH', address: '0xc8BB7DB0a07d2146437cc20e1f3a133474546dD4' }
      ]}
      theme="dark"
      network="Hyperion Testnet"
    />
  )
}`}
      </pre>
      <div className="mt-4 text-sm text-gray-400">
        <p>• Direct purchase via BuyVault contract</p>
        <p>• Supported: USDT, USDC, DAI, WETH</p>
        <p>• Contract: 0x0adFd197aAbbC194e8790041290Be57F18d576a3</p>
      </div>
    </div>
  )
}
