'use client';

import React, { useState, useEffect } from 'react';

// Mock components for demonstration
const ConnectWallet = ({ width, height, theme, onSuccess }: any) => (
  <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100" style={{ width, height }}>
    <div className="text-center mb-6">
      <div className="w-60 h-16 bg-transparent from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
        <img 
          src="/logo/brand/hyperkit/Hyperkit Header Black.svg" 
          alt="Hyperkit" 
          className="w-80 h-80"
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Inter'}}>Connect Wallet</h3>
      <p className="text-gray-600 text-sm">Choose your preferred connection method</p>
    </div>
    <div className="space-y-4">
      <button 
        onClick={() => onSuccess('0x742d35Cc...8b6')}
        className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-semibold"
      >
        <div className="flex items-center justify-center gap-3">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Connect with Google
        </div>
      </button>
      <button className="w-full py-4 px-6 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 font-semibold">
        <div className="flex items-center justify-center gap-3">
          <img 
            src="/logo/brand/wallets/metamask-icon-fox.svg" 
            alt="MetaMask" 
            className="w-5 h-5"
          />
          Connect with MetaMask
        </div>
      </button>
    </div>
  </div>
);

const Swap = ({ width, height, scale, theme, supportedTokens, onSuccess }: any) => (
  <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100" style={{ width, height, transform: `scale(${scale || 1})` }}>
    <div className="text-center mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Inter'}}>Token Swap</h3>
      <p className="text-gray-600 text-sm">Exchange tokens instantly</p>
    </div>
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">From</label>
        <div className="relative">
          <select className="w-full py-4 px-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors text-gray-900 font-medium">
            {supportedTokens?.map((token: string) => (
              <option key={token} value={token}>{token}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">To</label>
        <div className="relative">
          <select className="w-full py-4 px-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors text-gray-900 font-medium">
            {supportedTokens?.map((token: string) => (
              <option key={token} value={token}>{token}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      <button 
        onClick={() => onSuccess('0x1234...5678')}
        className="w-full py-4 px-6 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-semibold"
      >
        <div className="flex items-center justify-center gap-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Swap Tokens
        </div>
      </button>
    </div>
  </div>
);

const Bridge = ({ width, height, scale, theme, supportedTokens, supportedNetworks, onSuccess }: any) => (
  <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100" style={{ width, height, transform: `scale(${scale || 1})` }}>
    <div className="text-center mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Inter'}}>Cross-Chain Bridge</h3>
      <p className="text-gray-600 text-sm">Move tokens between networks</p>
    </div>
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">From Network</label>
        <div className="relative">
          <select className="w-full py-4 px-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-gray-900 font-medium">
            {supportedNetworks?.map((network: string) => (
              <option key={network} value={network}>{network}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">To Network</label>
        <div className="relative">
          <select className="w-full py-4 px-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-gray-900 font-medium">
            {supportedNetworks?.map((network: string) => (
              <option key={network} value={network}>{network}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      <button 
        onClick={() => onSuccess('0x5678...9abc')}
        className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl hover:from-purple-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-semibold"
      >
        <div className="flex items-center justify-center gap-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          Bridge Tokens
        </div>
      </button>
    </div>
  </div>
);

const Staking = ({ width, height, scale, theme, supportedTokens, onSuccess }: any) => (
  <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100" style={{ width, height, transform: `scale(${scale || 1})` }}>
    <div className="text-center mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Inter'}}>Staking Pool</h3>
      <p className="text-gray-600 text-sm">Earn rewards by staking tokens</p>
    </div>
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Token</label>
        <div className="relative">
          <select className="w-full py-4 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium">
            {supportedTokens?.map((token: string) => (
              <option key={token} value={token}>{token}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Amount</label>
        <input 
          type="number" 
          placeholder="0.0" 
          className="w-full py-4 px-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-gray-900 font-medium" 
        />
      </div>
      <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold text-orange-800">APY: 12.5%</span>
        </div>
        <p className="text-xs text-orange-700">Estimated annual return</p>
      </div>
      <button 
        onClick={() => onSuccess('0x9abc...def0')}
        className="w-full py-4 px-6 bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-xl hover:from-orange-700 hover:to-red-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-semibold"
      >
        <div className="flex items-center justify-center gap-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Stake Tokens
        </div>
      </button>
    </div>
  </div>
);

const Faucet = ({ width, height, scale, theme, supportedTokens, onSuccess }: any) => (
  <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100" style={{ width, height, transform: `scale(${scale || 1})` }}>
    <div className="text-center mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Inter'}}>Testnet Faucet</h3>
      <p className="text-gray-600 text-sm">Get free test tokens for development</p>
    </div>
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Select Token</label>
        <div className="relative">
          <select className="w-full py-4 px-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors text-gray-900 font-medium">
            {supportedTokens?.map((token: string) => (
              <option key={token} value={token}>{token}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-200">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-cyan-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-cyan-800 mb-1">Rate Limit</p>
            <p className="text-xs text-cyan-700">1 request per hour per wallet</p>
          </div>
        </div>
      </div>
      <button 
        onClick={() => onSuccess('0xdef0...1234')}
        className="w-full py-4 px-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-xl hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-semibold"
      >
        <div className="flex items-center justify-center gap-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Request Tokens
        </div>
      </button>
    </div>
  </div>
);

// AI Playground Component
const AIPlayground = ({ width, height, theme, onSuccess, isGenerating, setIsGenerating, generationStep, setGenerationStep }: any) => {
  const handleActionDeploy = () => {
    setIsGenerating(true);
    setGenerationStep(0);
    
    // Simulate step-by-step generation
    const steps = [
      "Analyzing requirements...",
      "Generating smart contract...",
      "Creating UI components...",
      "Setting up deployment...",
      "Optimizing gas usage...",
      "Finalizing application..."
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setGenerationStep(index + 1);
      }, (index + 1) * 1000);
    });

    // Complete generation after all steps
    setTimeout(() => {
      setIsGenerating(false);
      // Keep generationStep at 6 to show all files
    }, steps.length * 1000 + 500);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100" style={{ width, height }}>
      <div className="text-center mb-4">
        <div className="w-80 h-16 bg-transparent from-blue-500 to-purple-600 rounded-2xl mx-auto mb-3 flex items-center justify-center">
          <img 
            src="/logo/brand/hyperkit/Hyperkit Header Black.svg" 
            alt="Hyperkit" 
            className="w-80 h-12"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1" style={{fontFamily: 'Inter'}}>AI-Powered Playground</h3>
        <p className="text-gray-600 text-xs">Generate, optimize, and deploy DeFi applications automatically</p>
      </div>
      
      <div className="space-y-4">
        {/* AI Tools Section */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-3 border border-purple-200">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-md flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-800">Code Generator</span>
            </div>
            <p className="text-xs text-gray-600">Auto-generate smart contracts</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-md flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-800">Optimizer</span>
            </div>
            <p className="text-xs text-gray-600">Gas & performance optimization</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 border border-orange-200">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-md flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-800">Deployer</span>
            </div>
            <p className="text-xs text-gray-600">One-click deployment</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-3 border border-cyan-200">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-md flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-800">Analytics</span>
            </div>
            <p className="text-xs text-gray-600">Real-time monitoring</p>
          </div>
        </div>
        
        {/* AI Input Section */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">Describe your DeFi application</label>
          <div className="relative">
            <textarea 
              value="A yield farming protocol for USDC staking with 10% APY rewards and automated compound interest..."
              className="w-full py-3 px-3 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed resize-none"
              rows={2}
              readOnly
            />
            <div className="absolute inset-0 bg-transparent cursor-not-allowed"></div>
          </div>
        </div>
        
        {/* AI Status */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-3 border border-purple-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span className="text-xs font-semibold text-purple-800">AI Agent</span>
            <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">Demo</span>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="flex justify-center">
          {generationStep === 0 ? (
            <button 
              onClick={handleActionDeploy}
              disabled={isGenerating}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-700 text-white rounded-lg hover:from-purple-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Action & Deploy
              </div>
            </button>
          ) : (
            <div className="flex gap-2 w-full">
              <button 
                onClick={handleActionDeploy}
                disabled={isGenerating}
                className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-700 text-white rounded-lg hover:from-purple-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Regenerate
                </div>
              </button>
              <button 
                onClick={() => {
                  setIsGenerating(false);
                  setGenerationStep(0);
                }}
                className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-sm"
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


const AIPlaygroundDemo = ({ isGenerating, generationStep }: { isGenerating: boolean; generationStep: number }) => {
  const [hoveredFile, setHoveredFile] = useState<string | null>(null);
  const [fileRefs, setFileRefs] = useState<{ [key: string]: React.RefObject<HTMLDivElement | null> }>({});

  // Initialize file refs
  useEffect(() => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {};
    fileChanges.forEach(file => {
      refs[file.name] = React.createRef<HTMLDivElement | null>();
    });
    setFileRefs(refs);
  }, []);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hoveredFile && !(event.target as Element).closest('[data-tooltip]')) {
        setHoveredFile(null);
      }
    };

    if (hoveredFile) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hoveredFile]);

  // Update tooltip position when scrolling within the file list container
  useEffect(() => {
    const fileListContainer = document.querySelector('[data-file-list]');
    
    const handleScroll = () => {
      // Force re-render of tooltip position by updating hoveredFile state
      if (hoveredFile) {
        setHoveredFile(hoveredFile);
      }
    };

    if (fileListContainer && hoveredFile) {
      fileListContainer.addEventListener('scroll', handleScroll);
      
      return () => {
        fileListContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [hoveredFile]);

  const fileChanges = [
    {
      name: "YieldFarmingProtocol.sol",
      type: "created",
      changes: "+127 lines",
      code: `// YieldFarmingProtocol.sol
contract YieldFarmingProtocol {
    mapping(address => uint256) public stakedAmount;
    mapping(address => uint256) public rewardDebt;
    uint256 public totalStaked;
    uint256 public rewardRate = 1000; // 10% APY
    
    function stake() external payable {
        require(msg.value > 0, "Amount must be > 0");
        stakedAmount[msg.sender] += msg.value;
        totalStaked += msg.value;
        rewardDebt[msg.sender] = stakedAmount[msg.sender] * rewardRate / 100;
    }
    
    function claimRewards() external {
        uint256 rewards = calculateRewards(msg.sender);
        require(rewards > 0, "No rewards to claim");
        payable(msg.sender).transfer(rewards);
        rewardDebt[msg.sender] = 0;
    }
}`
    },
    {
      name: "YieldFarmingUI.tsx",
      type: "created", 
      changes: "+89 lines",
      code: `// YieldFarmingUI.tsx
import React, { useState } from 'react';
import { useContract } from 'hyperionkit';

export const YieldFarmingUI = () => {
  const [amount, setAmount] = useState('');
  const { contract } = useContract('YieldFarmingProtocol');
  
  const handleStake = async () => {
    await contract.stake({ value: amount });
  };
  
  return (
    <div className="yield-farming-container">
      <input 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount to stake"
      />
      <button onClick={handleStake}>Stake</button>
    </div>
  );
};`
    },
    {
      name: "deploy.js",
      type: "created",
      changes: "+45 lines", 
      code: `// deploy.js
const { ethers } = require('hardhat');

async function main() {
  const YieldFarming = await ethers.getContractFactory('YieldFarmingProtocol');
  const yieldFarming = await YieldFarming.deploy();
  
  await yieldFarming.deployed();
  
  console.log('YieldFarming deployed to:', yieldFarming.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });`
    },
    {
      name: "package.json",
      type: "modified",
      changes: "+12 lines",
      code: `{
  "name": "yield-farming-protocol",
  "version": "1.0.0",
  "dependencies": {
    "@hyperionkit/sdk": "^2.1.0",
    "ethers": "^5.7.0",
    "react": "^18.2.0"
  },
  "scripts": {
    "deploy": "hardhat run scripts/deploy.js",
    "test": "hardhat test"
  }
}`
    }
  ];



  return (
    <div className="text-gray-300 text-xs leading-relaxed relative">
      {/* Generation Overlay */}
      {isGenerating && (
        <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm rounded-lg z-20 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 max-w-md w-full mx-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-purple-400">AI Agent Generating...</span>
              <span className="text-xs text-purple-500 ml-auto">{Math.round((generationStep / 6) * 100)}%</span>
            </div>
            
            <div className="space-y-3">
              {[
                "Analyzing requirements...",
                "Generating smart contract...",
                "Creating UI components...",
                "Setting up deployment...",
                "Optimizing gas usage...",
                "Finalizing application..."
              ].map((step, index) => (
                <div key={index} className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                  index < generationStep 
                    ? 'text-green-400' 
                    : index === generationStep 
                    ? 'text-purple-400 font-semibold' 
                    : 'text-gray-500'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    index < generationStep 
                      ? 'bg-green-500' 
                      : index === generationStep 
                      ? 'bg-purple-500 animate-pulse' 
                      : 'bg-gray-600'
                  }`}></div>
                  <span>{step}</span>
                  {index < generationStep && (
                    <svg className="w-4 h-4 text-green-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* File Changes Display - Progressive file tree animation */}
      {generationStep > 0 && (
        <>
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-400">AI Agent Demo</span>
            </div>
            <p className="text-gray-400 text-xs">
              {isGenerating ? "Generating DeFi application files..." : "Generated DeFi application files"}
            </p>
          </div>

          <div className="space-y-2" data-file-list>
            {fileChanges.map((file, index) => {
              // Show files progressively during generation, all visible after completion
              const shouldShow = generationStep >= (index + 1);
              const isCurrentlyGenerating = isGenerating && generationStep === (index + 1);
              const isCompleted = !isGenerating && generationStep >= 6;
              
              return (
                <div 
                  key={index} 
                  className={`relative transition-all duration-500 ${
                    shouldShow 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-2'
                  }`}
                >
                  <div 
                    ref={fileRefs[file.name]}
                    className={`flex items-center justify-between p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 cursor-pointer transition-all duration-300 ${
                      isCurrentlyGenerating 
                        ? 'ring-2 ring-purple-500 bg-gray-800/80' 
                        : hoveredFile === file.name 
                          ? 'ring-2 ring-blue-500 bg-gray-800/90' 
                          : ''
                    }`}
                    onClick={() => setHoveredFile(hoveredFile === file.name ? null : file.name)}
                    data-tooltip
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isCurrentlyGenerating 
                          ? 'bg-purple-500 animate-pulse' 
                          : file.type === 'created' 
                            ? 'bg-green-500' 
                            : 'bg-yellow-500'
                      }`}></div>
                      <span className="text-gray-200 font-medium">{file.name}</span>
                      <span className={`text-xs px-2 py-1 rounded transition-all duration-300 ${
                        isCurrentlyGenerating
                          ? 'bg-purple-900 text-purple-300'
                          : file.type === 'created' 
                            ? 'bg-green-900 text-green-300' 
                            : 'bg-yellow-900 text-yellow-300'
                      }`}>
                        {isCurrentlyGenerating ? 'generating...' : file.type}
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs">{file.changes}</span>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Show deployment status only after all files are generated */}
          {generationStep >= 6 && (
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-700 rounded-lg animate-fadeIn">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-400">Deployment Status</span>
              </div>
              <div className="text-xs text-gray-300 space-y-1">
                <div>📦 Contract: 0x742d35Cc...8b6</div>
                <div>⛽ Gas: 1,250,000</div>
                <div>💰 Cost: 0.05 ETH</div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Empty state when no generation has started */}
      {generationStep === 0 && (
        <div className="flex items-center justify-center h-32 text-gray-500">
          <div className="text-center">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-sm">Click "Action & Deploy" to start generation</p>
          </div>
        </div>
      )}

      {/* Simple Dropdown for File Details */}
      {hoveredFile && (() => {
        const file = fileChanges.find(f => f.name === hoveredFile);
        return file ? (
          <div className="mt-4 p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg animate-fadeIn">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">{file.name}</h3>
              <button 
                onClick={() => setHoveredFile(null)}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${file.type === 'created' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <span className="text-sm text-gray-300">{file.changes}</span>
              </div>
              
              <div className="bg-gray-800 p-3 rounded border border-gray-700">
                <div className="text-xs text-gray-400 mb-2">Code Preview:</div>
                <pre className="text-xs text-gray-300 font-mono overflow-x-auto max-h-60">
                  {file.code}
                </pre>
              </div>
            </div>
          </div>
        ) : null;
      })()}
    </div>
  );
};

// Code demo components
const ConnectWalletDemo = () => (
  <div className="text-gray-300 text-xs leading-relaxed">
    <pre className="whitespace-pre-wrap">{`import { ConnectWallet } from 'hyperionkit';
    
export default function App() {
  return (
    <ConnectWallet 
      width="400px"
      height="auto"
      theme="light"
      onSuccess={(address) => {
        console.log('Connected:', address);
      }}
    />
  );
}`}</pre>
  </div>
);

const SwapDemo = () => (
  <div className="text-gray-300 text-xs leading-relaxed">
    <pre className="whitespace-pre-wrap">{`import { Swap } from 'hyperionkit';
    
export default function SwapPage() {
  return (
    <Swap 
      width="500px"
      theme="light"
      supportedTokens={['USDT', 'USDC', 'WETH', 'DAI']}
      onSuccess={(txHash) => {
        console.log('Swap successful:', txHash);
      }}
    />
  );
}`}</pre>
  </div>
);

const BridgeDemo = () => (
  <div className="text-gray-300 text-xs leading-relaxed">
    <pre className="whitespace-pre-wrap">{`import { Bridge } from 'hyperionkit';
    
export default function BridgePage() {
  return (
    <Bridge 
      width="500px"
      theme="light"
      supportedTokens={['USDT', 'USDC']}
      supportedNetworks={['metis-hyperion-testnet', 'metisSepolia']}
      onSuccess={(txHash) => {
        console.log('Bridge successful:', txHash);
      }}
    />
  );
}`}</pre>
  </div>
);

const StakingDemo = () => (
  <div className="text-gray-300 text-xs leading-relaxed">
    <pre className="whitespace-pre-wrap">{`import { Staking } from 'hyperionkit';
    
export default function StakingPage() {
  return (
    <Staking 
      width="500px"
      theme="light"
      supportedTokens={['USDT', 'USDC']}
      onSuccess={(txHash) => {
        console.log('Stake successful:', txHash);
      }}
    />
  );
}`}</pre>
  </div>
);

const FaucetDemo = () => (
  <div className="text-gray-300 text-xs leading-relaxed">
    <pre className="whitespace-pre-wrap">{`import { Faucet } from 'hyperionkit';
    
export default function FaucetPage() {
  return (
    <Faucet 
      width="500px"
      theme="light"
      supportedTokens={['USDT', 'USDC', 'WETH', 'DAI']}
      onSuccess={(txHash) => {
        console.log('Faucet drip successful:', txHash);
      }}
    />
  );
}`}</pre>
  </div>
);

export const EnhancedHeroDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Wallet");
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaygroundMode, setIsPlaygroundMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = ["Wallet", "Swap", "Bridge", "Staking", "Faucet"];
  const rightNavItems = ["Docs", "AI docs"];

  const renderTabContent = () => {
    // If playground mode is active, show AI Playground
    if (isPlaygroundMode) {
      return {
        component: (
          <AIPlayground 
            width="500px"
            height="auto"
            theme="light"
            onSuccess={(result: string) => console.log('AI Generated:', result)}
            isGenerating={isGenerating}
            setIsGenerating={setIsGenerating}
            generationStep={generationStep}
            setGenerationStep={setGenerationStep}
          />
        ),
        demo: <AIPlaygroundDemo isGenerating={isGenerating} generationStep={generationStep} />
      };
    }

    switch (activeTab) {
      case "Wallet":
        return {
          component: (
            <ConnectWallet 
              width="500px"
              height="auto"
              theme="light"
              onSuccess={(address: string) => console.log('Connected:', address)}
            />
          ),
          demo: <ConnectWalletDemo />
        };
      case "Swap":
        return {
          component: (
            <Swap 
              width="500px"
              height="auto"
              scale={1.0}
              theme="light"
              supportedTokens={['USDT', 'USDC', 'WETH', 'DAI']}
              onSuccess={(txHash: string) => console.log('Swap successful:', txHash)}
            />
          ),
          demo: <SwapDemo />
        };
      case "Bridge":
        return {
          component: (
            <Bridge 
              width="500px"
              height="auto"
              scale={1.0}
              theme="light"
              supportedTokens={['USDT', 'USDC']}
              supportedNetworks={['metis-hyperion-testnet', 'metisSepolia']}
              onSuccess={(txHash: string) => console.log('Bridge successful:', txHash)}
            />
          ),
          demo: <BridgeDemo />
        };
      case "Staking":
        return {
          component: (
            <Staking 
              width="500px"
              height="auto"
              scale={1.0}
              theme="light"
              supportedTokens={['USDT', 'USDC']}
              onSuccess={(txHash: string) => console.log('Stake successful:', txHash)}
            />
          ),
          demo: <StakingDemo />
        };
      case "Faucet":
        return {
          component: (
            <Faucet 
              width="500px"
              height="auto"
              scale={1.0}
              theme="light"
              supportedTokens={['USDT', 'USDC', 'WETH', 'DAI']}
              onSuccess={(txHash: string) => console.log('Faucet drip successful:', txHash)}
            />
          ),
          demo: <FaucetDemo />
        };
      default:
        return {
          component: (
            <ConnectWallet 
              width="500px"
              height="auto"
              theme="light"
              onSuccess={(address: string) => console.log('Connected:', address)}
            />
          ),
          demo: <ConnectWalletDemo />
        };
    }
  };

  const tabContent = renderTabContent();

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700 overflow-hidden w-full max-w-7xl mx-auto">
      {/* Top Navigation */}
      <nav className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm">
        {/* Mobile Navigation */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                {isMounted && (isMobileMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ))}
                {!isMounted && <span className="w-5 h-5 inline-block" />}
              </button>
              <span className="text-sm font-medium text-white">{activeTab}</span>
            </div>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              {isMounted && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
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
                        setActiveTab(item);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors mb-1 ${
                        activeTab === item 
                          ? "text-black bg-white border border-gray-200" 
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
                  <button 
                    onClick={() => {
                      setIsPlaygroundMode(!isPlaygroundMode);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors mb-1 ${
                      isPlaygroundMode 
                        ? "text-black bg-white border border-gray-200" 
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {isPlaygroundMode ? "Exit Playground" : "Playground"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center justify-between px-8 py-5">
          <div className="flex items-center space-x-2 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`text-sm font-semibold transition-all duration-300 px-4 py-3 rounded-xl whitespace-nowrap ${
                  activeTab === item 
                    ? "text-black bg-white shadow-lg border border-gray-200" 
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50 hover:shadow-md"
                }`}
                style={{fontFamily: 'Inter'}}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4 lg:space-x-8">
            {rightNavItems.map((item) => (
              <button key={item} className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap hidden md:block hover:bg-gray-700/30 px-3 py-2 rounded-lg">
                {item}
              </button>
            ))}
            <button 
              onClick={() => setIsPlaygroundMode(!isPlaygroundMode)}
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                isPlaygroundMode 
                  ? "text-black bg-white shadow-lg border border-gray-200" 
                  : "text-gray-300 hover:text-white hover:bg-gray-700/30"
              }`}
            >
              {isPlaygroundMode ? "Exit Playground" : "Playground"}
            </button>
            <button className="p-3 text-gray-300 hover:text-white transition-colors hover:bg-gray-700/30 rounded-lg">
              {isMounted && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
              {!isMounted && <span className="w-5 h-5 inline-block" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[650px]" data-playground-container>
        {/* Left Panel - Interactive Component */}
        <div className="w-full lg:w-1/2 flex flex-col bg-gradient-to-br from-gray-950/50 to-gray-900/30 min-h-[350px] lg:min-h-0 order-2 lg:order-1 p-8">
          {/* Centered Content Container */}
          <div className="flex-1 flex items-center justify-center">
            {tabContent.component}
          </div>
        </div>

        {/* Right Panel - Code Display */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-gray-700">
          <div className="h-full overflow-y-auto">
            <div className="p-6 sm:p-8 font-mono text-sm min-h-[250px] lg:min-h-0">
              <div className="mb-6 pb-3 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm font-medium ml-4" style={{fontFamily: 'Inter'}}>
                    {isPlaygroundMode ? "Output" : "Code Example"}
                  </span>
                </div>
              </div>
              <div className="text-gray-200 leading-relaxed">
                {tabContent.demo}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default EnhancedHeroDemo;
