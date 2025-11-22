"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mock wallet address for demo
const MOCK_ADDRESS = '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6';

interface WalletInfo {
  address: string;
  type: 'metamask' | 'okx';
}

export default function WhitelistPage() {
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Check if user is already whitelisted on component mount
  useEffect(() => {
    if (walletInfo?.address) {
      checkWhitelistStatus(walletInfo.address);
    }
  }, [walletInfo]);

  const checkWhitelistStatus = async (address: string) => {
    try {
      const response = await fetch('/api/whitelist/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address }),
      });
      
      const data = await response.json();
      if (data.isWhitelisted) {
        setIsJoined(true);
        setSuccess('You are already whitelisted!');
      }
    } catch (err) {
      console.error('Error checking whitelist status:', err);
    }
  };

  const connectMetamask = async () => {
    setIsConnecting(true);
    setError(null);
    
    try {
      // DEMO MODE: Mock wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setWalletInfo({
        address: MOCK_ADDRESS,
        type: 'metamask'
      });
      setSuccess('Metamask wallet connected successfully! (Demo Mode)');
    } catch (err) {
      setError('Failed to connect Metamask wallet.');
    } finally {
      setIsConnecting(false);
    }
  };

  const connectOKX = async () => {
    setIsConnecting(true);
    setError(null);
    
    try {
      // DEMO MODE: Mock wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setWalletInfo({
        address: MOCK_ADDRESS,
        type: 'okx'
      });
      setSuccess('OKX wallet connected successfully! (Demo Mode)');
    } catch (err) {
      setError('Failed to connect OKX wallet.');
    } finally {
      setIsConnecting(false);
    }
  };

  const joinWhitelist = async () => {
    if (!walletInfo) return;
    
    setIsJoining(true);
    setError(null);
    
    try {
      const response = await fetch('/api/whitelist/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: walletInfo.address,
          walletType: walletInfo.type,
          timestamp: new Date().toISOString()
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsJoined(true);
        setSuccess('Successfully joined the whitelist!');
      } else {
        setError(data.error || 'Failed to join whitelist');
      }
    } catch (err) {
      setError('Failed to join whitelist. Please try again.');
    } finally {
      setIsJoining(false);
    }
  };

  const disconnectWallet = () => {
    setWalletInfo(null);
    setIsJoined(false);
    setSuccess(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Join Whitelist
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect your wallet to join our exclusive whitelist and get early access to Hyperkit features.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Demo Mode - All wallet connections are simulated
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          {!walletInfo ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Connect Your Wallet
              </h2>
              
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800">{error}</p>
                </div>
              )}

              {success && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800">{success}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={connectMetamask}
                  disabled={isConnecting}
                  className="flex items-center justify-center gap-3 p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <img 
                    src="/logo/brand/wallets/metamask-icon-fox.svg" 
                    alt="MetaMask" 
                    className="w-8 h-8"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/icons/wallet.svg';
                    }}
                  />
                  <span className="font-semibold text-gray-900">
                    {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
                  </span>
                </button>

                <button
                  onClick={connectOKX}
                  disabled={isConnecting}
                  className="flex items-center justify-center gap-3 p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <img 
                    src="/logo/brand/wallets/okx-logo-brandlogo.svg" 
                    alt="OKX" 
                    className="w-8 h-8"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/icons/wallet.svg';
                    }}
                  />
                  <span className="font-semibold text-gray-900">
                    {isConnecting ? 'Connecting...' : 'Connect OKX'}
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Wallet Connected
                </h2>
                <button
                  onClick={disconnectWallet}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Disconnect
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Wallet Address</p>
                <p className="font-mono text-gray-900 break-all">{walletInfo.address}</p>
                <p className="text-xs text-gray-500 mt-1">Type: {walletInfo.type}</p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800">{error}</p>
                </div>
              )}

              {success && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800">{success}</p>
                </div>
              )}

              {!isJoined && (
                <button
                  onClick={joinWhitelist}
                  disabled={isJoining}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isJoining ? 'Joining...' : 'Join Whitelist'}
                </button>
              )}

              {isJoined && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">✓</div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">
                    You're Whitelisted!
                  </h3>
                  <p className="text-green-700">
                    Thank you for joining. You'll receive updates about early access.
                  </p>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
