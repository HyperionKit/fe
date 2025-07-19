export default function BuyDemo() {
  return (
    <div className="text-gray-300">
      <div className="mb-4">
        <span className="text-blue-400">// Buy Component Demo</span>
      </div>
      <pre className="text-green-400">
{`import { BuyComponent } from 'hyperionkit'

function App() {
  return (
    <BuyComponent 
      onPurchase={(amount, token) => {
        console.log('Purchase:', amount, token)
      }}
      supportedTokens={['ETH', 'METIS', 'USDC']}
      theme="dark"
    />
  )
}`}
      </pre>
      <div className="mt-4 text-sm text-gray-400">
        <p>• Integrated crypto purchase flow</p>
        <p>• Multiple payment methods</p>
        <p>• Real-time price updates</p>
      </div>
    </div>
  )
}
