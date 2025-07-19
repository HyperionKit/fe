"use client"

import { useState } from "react"
import { Settings } from "lucide-react"
import ConnectWalletPage from 'hyperionkit';
import ConnectWalletDemo from '@/views/wallet-demo/wallet-demo';
import BuyDemo from '@/views/wallet-demo/buy-demo';
import FundDemo from '@/views/wallet-demo/fund-demo';
import EarnDemo from '@/views/wallet-demo/earn-demo';
import TransactDemo from '@/views/wallet-demo/transact-demo';
import styles from 'hyperionkit/src/hyperkit.module.css';

// Ensure required style keys exist for ConnectWalletPage
const walletStyles = {
  pageContainer: styles.pageContainer,
  connectButton: styles.connectButton,
  errorCard: styles.errorCard,
  connectedButton: styles.connectedButton, // optional
};

export default function WalletDemo() {
  const [activeTab, setActiveTab] = useState("Wallet")

  const navItems = ["Wallet", "Buy", "Fund", "Earn", "Transact"]
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
          component: <div className="text-center text-gray-300">Buy Component Coming Soon</div>,
          demo: <BuyDemo />,
          description: "Let users purchase crypto directly within your app."
        }
      case "Fund":
        return {
          component: <div className="text-center text-gray-300">Fund Component Coming Soon</div>,
          demo: <FundDemo />,
          description: "Enable users to fund their wallets easily."
        }
      case "Earn":
        return {
          component: <div className="text-center text-gray-300">Earn Component Coming Soon</div>,
          demo: <EarnDemo />,
          description: "Allow users to earn rewards and tokens."
        }
      case "Transact":
        return {
          component: <div className="text-center text-gray-300">Transact Component Coming Soon</div>,
          demo: <TransactDemo />,
          description: "Facilitate seamless transactions for your users."
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
    <div className="bg-black text-white rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                activeTab === item 
                  ? "text-white bg-gray-800 border-b-2 border-blue-500" 
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          {rightNavItems.map((item) => (
            <button key={item} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              {item}
            </button>
          ))}
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex h-[600px]">
        {/* Left Panel - Interactive Component */}
        <div className="w-1/2 flex items-center justify-center p-8 bg-gray-950/30">
          <div className="text-center w-full">
            <div className="w-full flex items-center justify-center">
              {tabContent.component}
            </div>
          </div>
        </div>

        {/* Right Panel - Code Display */}
        <div className="w-1/2 bg-gray-900 p-6 font-mono text-sm overflow-y-auto border-l border-gray-800">
          {tabContent.demo}
        </div>
      </div>
    </div>
  )
}
