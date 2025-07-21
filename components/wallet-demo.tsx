"use client"

import { useState, useEffect } from "react"
import { Settings, Menu, X } from "lucide-react"

// Mock components since we don't have the actual imports
const ConnectWalletPage = ({ styles }) => (
  <div className="bg-gray-800 p-6 rounded-lg border border-gray-600 w-fit mx-auto">
    <h3 className="text-white text-lg font-semibold mb-4 text-center">Connect Wallet</h3>
    <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium transition-colors block mx-auto">
      Connect to MetaMask
    </button>
  </div>
)

const ConnectWalletDemo = () => (
  <div className="text-gray-300 text-xs leading-relaxed">
    <pre className="whitespace-pre-wrap">{`import { ConnectWalletPage } from 'hyperionkit';

export default function App() {
  return (
    <ConnectWalletPage 
      styles={walletStyles}
    />
  );
}`}</pre>
  </div>
)

const BuyDemo = () => (
  <div className="text-gray-300 text-xs leading-relaxed">
    <pre className="whitespace-pre-wrap">{`import { BuyComponent } from 'hyperionkit';

export default function Buy() {
  return (
    <BuyComponent 
      onPurchase={(data) => {
        console.log('Purchase:', data);
      }}
    />
  );
}`}</pre>
  </div>
)

const FundDemo = () => (
  <div className="text-gray-300 text-xs leading-relaxed">
    <pre className="whitespace-pre-wrap">{`import { SwapComponent } from 'hyperionkit';

export default function Swap() {
  return (
    <SwapComponent 
      onSwap={(amount) => {
        console.log('Swapped:', amount);
      }}
    />
  );
}`}</pre>
  </div>
)

const EarnDemo = () => (
  <div className="text-gray-300 text-xs leading-relaxed">
    <pre className="whitespace-pre-wrap">{`import { StakeComponent } from 'hyperionkit';

export default function Stake() {
  return (
    <StakeComponent 
      rewardPools={pools}
      onStake={(pool, amount) => {
        console.log('Staked:', pool, amount);
      }}
    />
  );
}`}</pre>
  </div>
)

const TransactDemo = () => (
  <div className="text-gray-300 text-xs leading-relaxed">
    <pre className="whitespace-pre-wrap">{`import { BridgeComponent } from 'hyperionkit';

export default function Bridge() {
  return (
    <BridgeComponent 
      onBridge={(tx) => {
        console.log('BridgeTransaction:', tx);
      }}
    />
  );
}`}</pre>
  </div>
)

// Mock styles
const styles = {
  pageContainer: "page-container",
  connectButton: "connect-button",
  errorCard: "error-card",
  connectedButton: "connected-button",
}

const walletStyles = {
  pageContainer: styles.pageContainer,
  connectButton: styles.connectButton,
  errorCard: styles.errorCard,
  connectedButton: styles.connectedButton,
}

export default function WalletDemo() {
  const [activeTab, setActiveTab] = useState("Wallet")
  const [isMounted, setIsMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navItems = ["Wallet", "Buy", "Swap", "Stake", "Bridge"]
  const rightNavItems = ["Docs", "AI docs", "Playground"]

  const renderTabContent = () => {
    switch (activeTab) {
      case "Wallet":
        return {
          component: <ConnectWalletPage styles={walletStyles}/>,
          demo: <ConnectWalletDemo />,
          description: "Enable users to onboard and log into your app with a wallet."
        }
      case "Buy":
        return {
          component: <div className="text-center text-gray-300 p-8">Buy Component Coming Soon</div>,
          demo: <BuyDemo />,
          description: "Let users purchase crypto directly within your app."
        }
      case "Swap":
        return {
          component: <div className="text-center text-gray-300 p-8">Swap Component Coming Soon</div>,
          demo: <FundDemo />,
          description: "Enable users to exchange crypto to their wallets easily."
        }
      case "Stake":
        return {
          component: <div className="text-center text-gray-300 p-8">Stake Component Coming Soon</div>,
          demo: <EarnDemo />,
          description: "Allow users to stake and earn rewards and tokens."
        }
      case "Bridge":
        return {
          component: <div className="text-center text-gray-300 p-8">Bridge Component Coming Soon</div>,
          demo: <TransactDemo />,
          description: "Facilitate seamless bridge transactions for your users."
        }
      default:
        return {
          component: <ConnectWalletPage styles={walletStyles}/>,
          demo: <ConnectWalletDemo />,
          description: "Enable users to onboard and log into your app with a wallet."
        }
    }
  }

  const tabContent = renderTabContent()

  return (
    <div className="bg-black text-white rounded-lg shadow-2xl border border-gray-700 overflow-hidden w-full max-w-7xl mx-auto">
      {/* Mobile Description Banner */}
      <div className="block sm:hidden px-4 py-3 bg-gray-900/50 border-b border-gray-800">
        <p className="text-xs text-gray-400 text-center">
          {tabContent.description}
        </p>
      </div>

      {/* Top Navigation */}
      <nav className="border-b border-gray-800">
        {/* Mobile Navigation */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                {isMounted && (isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />)}
                {!isMounted && <span className="w-5 h-5 inline-block" />}
              </button>
              <span className="text-sm font-medium text-white">{activeTab}</span>
            </div>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              {isMounted && <Settings className="w-4 h-4" />}
              {!isMounted && <span className="w-4 h-4 inline-block" />}
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="bg-gray-900 border-t border-gray-800">
              <div className="px-4 py-2">
                <div className="mb-3">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Navigation</p>
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setActiveTab(item)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors mb-1 ${
                        activeTab === item 
                          ? "text-white bg-violet-600" 
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Resources</p>
                  {rightNavItems.map((item) => (
                    <button 
                      key={item} 
                      className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors mb-1"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-1 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-md whitespace-nowrap ${
                  activeTab === item 
                    ? "text-white bg-gray-800 border-b-2 border-violet-500" 
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3 lg:space-x-6">
            {rightNavItems.map((item) => (
              <button key={item} className="text-sm font-medium text-gray-400 hover:text-white transition-colors whitespace-nowrap hidden md:block">
                {item}
              </button>
            ))}
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              {isMounted && <Settings className="w-4 h-4" />}
              {!isMounted && <span className="w-4 h-4 inline-block" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[600px]">
        {/* Left Panel - Interactive Component */}
        <div className="w-full lg:w-1/2 flex flex-col bg-gray-950/30 min-h-[300px] lg:min-h-0 order-2 lg:order-1">
          {/* Desktop Description */}
          <div className="hidden sm:block px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
            <p className="text-sm text-gray-400 max-w-md">
              {tabContent.description}
            </p>
          </div>
          
          {/* Centered Content Container */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
            {tabContent.component}
          </div>
        </div>

        {/* Right Panel - Code Display */}
        <div className="w-full lg:w-1/2 bg-gray-900 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-gray-800">
          <div className="h-full overflow-y-auto">
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[200px] lg:min-h-0">
              <div className="mb-3 pb-2 border-b border-gray-800">
                <span className="text-gray-500 text-xs">Code Example</span>
              </div>
              {tabContent.demo}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}