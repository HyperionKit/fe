export default function EarnDemo() {
  return (
    <div className="text-gray-300">
      <div className="mb-4">
        <span className="text-blue-400">// Stake Component Demo - Hyperion Testnet</span>
      </div>
      <pre className="text-green-400">
{`import { EarnComponent } from 'hyperionkit'

function App() {
  return (
    <EarnComponent 
      contractAddress="0xB94d264074571A5099C458f74b526d1e4EE0314B"
      onStake={(amount, pool) => {
        console.log('Staked:', amount, 'in', pool)
      }}
      pools={[
        { name: 'USDT Pool', apy: '15.2%', token: '0x9b52D326D4866055F6c23297656002992e4293FC' },
        { name: 'USDC Pool', apy: '14.8%', token: '0x31424DB0B7a929283C394b4DA412253Ab6D61682' },
        { name: 'DAI Pool', apy: '13.5%', token: '0xdE896235F5897EC6D13Aa5b43964F9d2d34D82Fb' },
        { name: 'WETH Pool', apy: '12.1%', token: '0xc8BB7DB0a07d2146437cc20e1f3a133474546dD4' }
      ]}
      userBalance="1000 USDT"
      network="Hyperion Testnet"
    />
  )
}`}
      </pre>
      <div className="mt-4 text-sm text-gray-400">
        <p>• Staking via StakingRewards contract</p>
        <p>• Multiple token pools with competitive APY</p>
        <p>• Contract: 0xB94d264074571A5099C458f74b526d1e4EE0314B</p>
      </div>
    </div>
  )
}
