export default function EarnDemo() {
  return (
    <div className="text-gray-300">
      <div className="mb-4">
        <span className="text-blue-400">// Stake Component Demo</span>
      </div>
      <pre className="text-green-400">
{`import { EarnComponent } from 'hyperionkit'

function App() {
  return (
    <EarnComponent 
      onStake={(amount, pool) => {
        console.log('Staked:', amount, 'in', pool)
      }}
      pools={[
        { name: 'METIS Pool', apy: '12.5%' },
        { name: 'ETH Pool', apy: '8.2%' }
      ]}
      userBalance="1000 METIS"
    />
  )
}`}
      </pre>
      <div className="mt-4 text-sm text-gray-400">
        <p>• Staking rewards</p>
        <p>• Multiple yield pools</p>
        <p>• Real-time APY tracking</p>
      </div>
    </div>
  )
}
