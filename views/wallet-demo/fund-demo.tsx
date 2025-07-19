export default function FundDemo() {
  return (
    <div className="text-gray-300">
      <div className="mb-4">
        <span className="text-blue-400">// Fund Component Demo</span>
      </div>
      <pre className="text-green-400">
{`import { FundComponent } from 'hyperionkit'

function App() {
  return (
    <FundComponent 
      onDeposit={(amount, method) => {
        console.log('Deposit:', amount, method)
      }}
      methods={['bank', 'card', 'crypto']}
      minAmount={10}
      maxAmount={10000}
    />
  )
}`}
      </pre>
      <div className="mt-4 text-sm text-gray-400">
        <p>• Multiple funding methods</p>
        <p>• Instant deposits</p>
        <p>• Secure transactions</p>
      </div>
    </div>
  )
}
