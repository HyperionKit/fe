"use client"

import { useState } from "react"
import { Settings } from "lucide-react"

export default function WalletDemo() {
  const [activeTab, setActiveTab] = useState("Wallet")

  const navItems = ["Wallet", "Buy", "Fund", "Earn", "Transact"]
  const rightNavItems = ["Docs", "AI docs", "Playground"]

  return (
    <div className="bg-black text-white rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`text-sm font-medium transition-colors ${
                activeTab === item ? "text-white" : "text-gray-400 hover:text-white"
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
        {/* Left Panel - Connect Wallet Button */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="text-center">
            <p className="text-gray-300 mb-8 text-lg">Enable users to onboard and log into your app with a wallet.</p>
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Right Panel - Code Display */}
        <div className="w-1/2 bg-gray-900 p-6 font-mono text-sm overflow-y-auto">
          <div className="space-y-1">
            {/* Comments */}
            <div className="text-gray-500">
              <div>{"// Follow docs.base.org/builderkits/onchainkit/getting-started"}</div>
              <div>{"// to install dependencies"}</div>
            </div>

            <div className="mt-4"></div>

            {/* Import statement */}
            <div className="flex">
              <span className="text-purple-400">import</span>
              <span className="text-white ml-2">{"{"}</span>
            </div>

            {/* Import items */}
            <div className="ml-4 space-y-0">
              <div className="text-white">ConnectWallet,</div>
              <div className="text-white">Wallet,</div>
              <div className="text-white">WalletDropdown,</div>
              <div className="text-white">WalletAdvancedAddressDetails,</div>
              <div className="text-white">WalletAdvancedTokenHoldings,</div>
              <div className="text-white">WalletAdvancedTransactionActions,</div>
              <div className="text-white">WalletAdvancedWalletActions,</div>
            </div>

            <div className="flex">
              <span className="text-white">{"}"}</span>
              <span className="text-purple-400 ml-2">from</span>
              <span className="text-orange-400 ml-2">{"'@metis/hyperkit/wallet'"}</span>
              <span className="text-white">;</span>
            </div>

            <div className="mt-4"></div>

            {/* Function declaration */}
            <div className="flex">
              <span className="text-purple-400">function</span>
              <span className="text-blue-400 ml-2">WalletAdvancedDemo</span>
              <span className="text-white">() {"{"}</span>
            </div>

            {/* Return statement */}
            <div className="ml-2">
              <div className="flex">
                <span className="text-purple-400">return</span>
                <span className="text-white ml-2">{"("}</span>
              </div>

              {/* JSX */}
              <div className="ml-4 space-y-0">
                <div className="flex">
                  <span className="text-gray-400">{"<"}</span>
                  <span className="text-blue-400">Wallet</span>
                  <span className="text-gray-400">{">"}</span>
                </div>

                <div className="ml-4 space-y-0">
                  <div className="flex">
                    <span className="text-gray-400">{"<"}</span>
                    <span className="text-blue-400">ConnectWallet</span>
                    <span className="text-gray-400">{" />"}</span>
                  </div>

                  <div className="flex">
                    <span className="text-gray-400">{"<"}</span>
                    <span className="text-blue-400">WalletDropdown</span>
                    <span className="text-gray-400">{">"}</span>
                  </div>

                  <div className="ml-4 space-y-0">
                    <div className="flex">
                      <span className="text-gray-400">{"<"}</span>
                      <span className="text-blue-400">WalletAdvancedWalletActions</span>
                      <span className="text-gray-400">{" />"}</span>
                    </div>

                    <div className="flex">
                      <span className="text-gray-400">{"<"}</span>
                      <span className="text-blue-400">WalletAdvancedAddressDetails</span>
                      <span className="text-gray-400">{" />"}</span>
                    </div>

                    <div className="flex">
                      <span className="text-gray-400">{"<"}</span>
                      <span className="text-blue-400">WalletAdvancedTransactionActions</span>
                      <span className="text-gray-400">{" />"}</span>
                    </div>

                    <div className="flex">
                      <span className="text-gray-400">{"<"}</span>
                      <span className="text-blue-400">WalletAdvancedTokenHoldings</span>
                      <span className="text-gray-400">{" />"}</span>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="text-gray-400">{"</"}</span>
                    <span className="text-blue-400">WalletDropdown</span>
                    <span className="text-gray-400">{">"}</span>
                  </div>
                </div>

                <div className="flex">
                  <span className="text-gray-400">{"</"}</span>
                  <span className="text-blue-400">Wallet</span>
                  <span className="text-gray-400">{">"}</span>
                </div>
              </div>

              <div className="text-white">)</div>
            </div>

            <div className="text-white">{"}"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
