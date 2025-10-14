'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { OptimizedImage, OptimizedIcon } from '@/components/ui/optimized-image';
import Orb from './libraries/Orb';
import OrbInput from './libraries/OrbInput';
import { Compare } from './libraries/Compare';
import ConnectWallet from './libraries/ConnectWallet';
import { useDemoWallet, useDemoTransaction, useDemoAuth } from './static/useDemoHooks';
import { smartWalletDemo } from '@/foundation/products-demo';

export default function ProductsOverviewPage() {
  // Demo hooks for simulation
  const { connected, address, balance, connect, disconnect } = useDemoWallet();
  const { status, txHash, sendTransaction, reset: resetTransaction } = useDemoTransaction();
  const { user, authenticate, logout } = useDemoAuth();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const toggleVariants = {
    off: { 
      x: 0,
      backgroundColor: "#374151"
    },
    on: { 
      x: 20,
      backgroundColor: "#7C3AED",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const slideVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      height: 0
    },
    visible: { 
      opacity: 1, 
      x: 0,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const demoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // State for toggle switches
  const [authSettings, setAuthSettings] = useState({
    email: false,
    sms: false,
    social: false,
    passkey: false,
    passkeyAfterSignup: false,
    externalWallets: false
  });

  const [brandingSettings, setBrandingSettings] = useState({
    theme: 'dark', // 'light' or 'dark'
    color: '#7C3AED',
    cornerRadius: 'Large'
  });

  const [codePreview, setCodePreview] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const featureCards = [
    {
      title: "Import your web3 assets in minutes",
      description: "Seamlessly integrate with existing web3 infrastructure using our simple API."
    },
    {
      title: "Unlock the power of automation",
      description: "AI-powered tools that generate, optimize, and deploy your DeFi applications automatically."
    }
  ];

  // Toggle functions
  const toggleAuth = (key: keyof typeof authSettings) => {
    setAuthSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleCodePreview = () => {
    setCodePreview(prev => !prev);
  };

  const setTheme = (theme: 'light' | 'dark') => {
    setBrandingSettings(prev => ({
      ...prev,
      theme
    }));
  };

  const setCornerRadius = (radius: string) => {
    setBrandingSettings(prev => ({
      ...prev,
      cornerRadius: radius
    }));
  };

  // Generate dynamic code preview based on enabled settings
  const generateCodePreview = () => {
    const enabledAuthMethods = [];
    if (authSettings.email) enabledAuthMethods.push('email');
    if (authSettings.sms) enabledAuthMethods.push('sms');
    if (authSettings.social) enabledAuthMethods.push('social');
    if (authSettings.passkey) enabledAuthMethods.push('passkey');
    if (authSettings.externalWallets) enabledAuthMethods.push('externalWallets');

    // Check if any authentication methods are enabled
    const hasAuthMethods = enabledAuthMethods.length > 0;
    
    // Check if any branding settings are customized (not default)
    const hasCustomBranding = brandingSettings.theme !== 'dark' || 
                             brandingSettings.color !== '#7C3AED' || 
                             brandingSettings.cornerRadius !== 'Large';

    let configSections = [];

    // Add authentication section if any methods are enabled
    if (hasAuthMethods) {
      const authConfig = enabledAuthMethods.map(method => {
        switch (method) {
          case 'email':
            return `    email: {
      enabled: true,
      verificationRequired: true,
      allowSignup: true
    }`;
          case 'sms':
            return `    sms: {
      enabled: true,
      verificationRequired: true,
      allowSignup: true
    }`;
          case 'social':
            return `    social: {
      enabled: true,
      providers: ["google", "twitter"],
      allowSignup: true
    }`;
          case 'passkey':
            return `    passkey: {
      enabled: true,
      allowSignup: true,
      fallbackToPassword: false
    }`;
          case 'externalWallets':
            return `    externalWallets: {
      enabled: true,
      providers: ["metamask", "coinbase", "okx", "phantom", "walletconnect"],
      allowSignup: true
    }`;
          default:
            return '';
        }
      }).join(',\n');

      configSections.push(`  // Authentication Methods
  authentication: {
${authConfig}
  }`);
    }

    // Add branding section if customized
    if (hasCustomBranding) {
      configSections.push(`  // UI Branding Configuration
  branding: {
    theme: '${brandingSettings.theme}',
    primaryColor: '${brandingSettings.color}',
    borderRadius: '${brandingSettings.cornerRadius.toLowerCase()}',
    logo: '/logo/hyperkit-logo.svg',
    customCSS: null
  }`);
    }

    // Always add SDK and Security sections
    configSections.push(`  // SDK Configuration
  sdk: {
    apiKey: process.env.HYPERKIT_API_KEY,
    environment: 'production',
    features: {
      gasless: true,
      batchTransactions: true,
      socialRecovery: true,
      accountAbstraction: true
    },
    network: {
      chainId: 1, // Ethereum Mainnet
      rpcUrl: process.env.RPC_URL
    }
  }`);

    configSections.push(`  // Security Settings
  security: {
    sessionTimeout: 3600, // 1 hour
    maxLoginAttempts: 5,
    requireMFA: false
  }`);

    const configBody = configSections.length > 0 ? `{\n${configSections.join(',\n\n')}\n}` : '{}';

    return `// hyperkit-config.js
import { Hyperkit } from '@hyperkit/sdk';

const hyperkitConfig = ${configBody};

// Initialize Hyperkit SDK
const hyperkit = new Hyperkit(hyperkitConfig);

export default hyperkit;`;
  };


  return (
    <motion.div 
      className="max-w-7xl mx-auto px-8 py-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Core Feature Cards Row */}
      <motion.div 
        className="flex flex-wrap lg:flex-nowrap gap-8 mb-50"
        variants={containerVariants}
      >
        {featureCards.map((card, i) => (
          <motion.div
            key={i}
            className="
              flex-1 min-w-[300px] max-w-xl 
              bg-neutral-900 border border-neutral-700 
              rounded-[1.4rem]
              shadow-2xl 
              overflow-hidden flex flex-col
              relative cursor-pointer"
            style={{ height: "500px" }}
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Card Top: Placeholder or Orb + OrbInput */}
            <div className="flex-1 flex flex-col items-center justify-center bg-black relative p-6">
              {i === 1 ? (
                // Second card - Orb + OrbInput below
                <div className="flex flex-col items-center justify-center w-full h-full">
                  {/* Orb */}
                  <div className="flex items-center justify-center mb-6">
                    <div style={{ width: '200px', height: '200px', position: 'relative' }}>
                      <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                        showTextAnimation={true}
                      />
                    </div>
                  </div>
                  {/* OrbInput Below */}
                  <div className="flex justify-center">
                    <OrbInput />
                  </div>
                </div>
              ) : !card.img ? (
                // First card - Compare component (Manual vs HyperionKit)
                <div className="flex items-center justify-center w-full h-full">
                  <Compare
                    firstImage="/images/first.png"
                    secondImage="/images/second.png"
                    className="w-full h-full"
                    slideMode="hover"
                    showHandlebar={true}
                    autoplay={true}
                    autoplayDuration={4000}
                  >
                  </Compare>
                </div>
              ) : null}
            </div>
            {/* Card Bottom: Title, Description, Action */}
            <div className="bg-black/90 border-t border-neutral-700 p-4">
              <p className="font-medium text-base text-white" style={{fontFamily: 'Inter'}}>{card.title}</p>
              <p className="text-xs opacity-80 mt-2 mb-2 text-gray-300" style={{fontFamily: 'Inter'}}>{card.description}</p>
              <a className="text-xs text-purple-400 underline hover:text-purple-300 transition-colors" href={card.link}>
                Learn more
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Builder Wallet Section */}
      <section className="mb-20 pt-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-white" style={{fontFamily: 'Be Vietnam Pro'}}>
          Build seamless{" "}
          <span className="text-purple-500">
            wallets with clean code
          </span>
        </h2>
        <p className="text-center mb-7 text-base opacity-75 text-gray-300" style={{fontFamily: 'Inter'}}>
          No need to handle complex contract layouts or blockchain boilerplate. 
          Our tools make wallet integration simple and secure.
        </p>

        <motion.div 
          className="flex flex-col lg:flex-row gap-10 items-start"
          variants={containerVariants}
        >
          {/* Left Panel - Configuration Options */}
          <motion.div 
            className="w-full lg:w-80 bg-gray-100 rounded-2xl shadow-lg p-6 border border-gray-200"
            variants={cardVariants}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter'}}>
              Authentication
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <OptimizedIcon
                    src="/icons/products/imgi_4_email.png"
                    alt="Email"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-gray-900 text-sm" style={{fontFamily: 'Inter'}}>Email</span>
                </div>
                <motion.button 
                  onClick={() => toggleAuth('email')}
                  className="w-10 h-6 rounded-full relative"
                  variants={toggleVariants}
                  animate={authSettings.email ? "on" : "off"}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-4 h-4 bg-white rounded-full absolute top-1"
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <OptimizedIcon
                    src="/icons/products/imgi_5_sms.png"
                    alt="SMS"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-gray-900 text-sm" style={{fontFamily: 'Inter'}}>SMS</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Beta</span>
                </div>
                <motion.button 
                  onClick={() => toggleAuth('sms')}
                  className="w-10 h-6 rounded-full relative"
                  variants={toggleVariants}
                  animate={authSettings.sms ? "on" : "off"}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-4 h-4 bg-white rounded-full absolute top-1"
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <OptimizedIcon
                    src="/icons/products/imgi_6_social.png"
                    alt="Social"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-gray-900 text-sm" style={{fontFamily: 'Inter'}}>Social</span>
                  <div className="flex gap-1 ml-2">
                    <OptimizedIcon src="/icons/products/imgi_7_google.png" alt="Google" width={16} height={16} className="w-4 h-4" />
                    <OptimizedIcon src="/icons/products/imgi_8_twitter.png" alt="Twitter" width={16} height={16} className="w-4 h-4" />
                  </div>
                </div>
                <motion.button 
                  onClick={() => toggleAuth('social')}
                  className="w-10 h-6 rounded-full relative"
                  variants={toggleVariants}
                  animate={authSettings.social ? "on" : "off"}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-4 h-4 bg-white rounded-full absolute top-1"
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>
              <div className="p-2 rounded-lg hover:bg-gray-50 transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <OptimizedIcon
                      src="/icons/products/imgi_12_passkey.png"
                      alt="Passkey"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-gray-900 text-sm" style={{fontFamily: 'Inter'}}>Passkey</span>
                  </div>
                  <motion.button 
                    onClick={() => toggleAuth('passkey')}
                    className="w-10 h-6 rounded-full relative"
                    variants={toggleVariants}
                    animate={authSettings.passkey ? "on" : "off"}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="w-4 h-4 bg-white rounded-full absolute top-1"
                      layout
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 ml-8" style={{fontFamily: 'Inter'}}>add passkey after sign-up</span>
                  <motion.button 
                    onClick={() => toggleAuth('passkeyAfterSignup')}
                    className="w-10 h-6 rounded-full relative"
                    variants={toggleVariants}
                    animate={authSettings.passkeyAfterSignup ? "on" : "off"}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="w-4 h-4 bg-white rounded-full absolute top-1"
                      layout
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter'}}>
              Connect
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <OptimizedIcon
                    src="/icons/products/imgi_13_wallet.png"
                    alt="External Wallets"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-gray-900 text-sm" style={{fontFamily: 'Inter'}}>External Wallets</span>
                </div>
                <motion.button 
                  onClick={() => toggleAuth('externalWallets')}
                  className="w-10 h-6 rounded-full relative"
                  variants={toggleVariants}
                  animate={authSettings.externalWallets ? "on" : "off"}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-4 h-4 bg-white rounded-full absolute top-1"
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter'}}>
              Configuration
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50 border border-purple-200">
                <div className="flex items-center gap-3">
                  <OptimizedIcon
                    src="/icons/products/imgi_14_settings.png"
                    alt="Smart Account"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <div>
                    <span className="text-gray-900 text-sm font-medium" style={{fontFamily: 'Inter'}}>Smart Account</span>
                    <p className="text-xs text-gray-600">Smart EOA (EIP-7702)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter'}}>
              Branding
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 text-sm" style={{fontFamily: 'Inter'}}>Theme</span>
                </div>
            <div className="flex gap-2">
                  <button 
                    onClick={() => setTheme('light')}
                    className={`p-1 rounded transition-colors ${
                      brandingSettings.theme === 'light' ? 'bg-purple-100' : 'hover:bg-gray-100'
                    }`}
                  >
                    <OptimizedIcon 
                      src="/icons/products/imgi_17_sun.png" 
                      alt="Light" 
                      width={20} 
                      height={20} 
                      className={`w-5 h-5 ${
                        brandingSettings.theme === 'light' ? 'text-purple-600' : 'text-gray-400'
                      }`} 
                    />
                  </button>
                  <button 
                    onClick={() => setTheme('dark')}
                    className={`p-1 rounded transition-colors ${
                      brandingSettings.theme === 'dark' ? 'bg-purple-100' : 'hover:bg-gray-100'
                    }`}
                  >
                    <OptimizedIcon 
                      src="/icons/products/imgi_18_moon.png" 
                      alt="Dark" 
                      width={20} 
                      height={20} 
                      className={`w-5 h-5 ${
                        brandingSettings.theme === 'dark' ? 'text-purple-600' : 'text-gray-900'
                      }`} 
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <OptimizedIcon
                    src="/icons/products/imgi_15_brand.png"
                    alt="Color"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-gray-900 text-sm" style={{fontFamily: 'Inter'}}>Color</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-600 rounded-full border-2 border-white shadow-sm"></div>
                  <span className="text-xs text-gray-500">#7C3AED</span>
                </div>
              </div>
            </div>

            {/* Show More Button */}
            <div className="mb-4">
              <button 
                onClick={() => setShowMoreOptions(!showMoreOptions)}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <span className="text-gray-900 text-sm font-medium" style={{fontFamily: 'Inter'}}>
                  Show More
                </span>
                <OptimizedIcon
                  src="/icons/products/imgi_19_chevron.png"
                  alt="Chevron"
                  width={16}
                  height={16}
                  className={`w-4 h-4 transition-transform ${showMoreOptions ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {/* Show More Options */}
            {showMoreOptions && (
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter'}}>
                  Corner Radius
                </h3>
                <div className="flex gap-2 mb-4">
                  {['None', 'Small', 'Medium', 'Large'].map((size, index) => (
                    <button
                      key={size}
                      onClick={() => setCornerRadius(size)}
                      className={`px-3 py-1 text-xs rounded transition-colors ${
                        brandingSettings.cornerRadius === size
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter'}}>
                  Illustration Style
                </h3>
                <div className="flex gap-2 mb-4">
                  {Array.from({length: 4}).map((_, index) => (
                    <div key={index} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">@</span>
                    </div>
                  ))}
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm text-gray-900 mb-2" style={{fontFamily: 'Inter'}}>
                    Support URL (optional)
                  </label>
                  <input 
                    type="text" 
                    placeholder="https://support.example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <OptimizedIcon
                      src="/icons/products/imgi_16_upload.png"
                      alt="Upload"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-gray-900 text-sm" style={{fontFamily: 'Inter'}}>Logo (optional)</span>
                  </div>
                  <button className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors">
                    Upload
                  </button>
                </div>
              </div>
            )}
            
            <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-200">
              © 2025 Hyperkit. All rights reserved.
            </div>
            </div>
            
           {/* Right Panel - Sign In Modal Demo */}
            <motion.div 
              className="flex-1 bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center p-12 relative h-[840px]"
              variants={demoVariants}
            >
              {/* Code Preview Badge with Toggle */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow">
                  Code Preview
                </div>
                <motion.button 
                  onClick={toggleCodePreview}
                  className="w-10 h-6 rounded-full relative"
                  variants={toggleVariants}
                  animate={codePreview ? "on" : "off"}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-4 h-4 bg-white rounded-full absolute top-1"
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </motion.button>
            </div>
            
             {/* Code Preview or Sign In Modal Content */}
             <AnimatePresence mode="wait">
               {codePreview ? (
                 <motion.div 
                   key="code-preview"
                   className="bg-gray-900 rounded-2xl w-full max-w-4xl h-[600px] flex flex-col"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.3, ease: "easeInOut" }}
                 >
                 <div className="flex items-center gap-2 p-6 pb-4 border-b border-gray-700">
                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                   <span className="text-gray-400 text-sm ml-4 font-semibold">hyperkit-config.js</span>
                 </div>
                 <div className="flex-1 overflow-y-auto">
                   <pre className="text-green-400 text-sm font-mono p-6 leading-relaxed">
{generateCodePreview()}
                   </pre>
                 </div>
               </div>
             ) : (
               <motion.div 
                 key="signin-modal"
                 className={`border border-gray-200 rounded-2xl shadow-xl w-[480px] min-h-[200px] flex flex-col items-center justify-center text-center px-10 py-10 transition-all duration-300 ${
                   brandingSettings.theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white'
                 }`} 
                 style={{
                   borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                               brandingSettings.cornerRadius === 'Small' ? '8px' :
                               brandingSettings.cornerRadius === 'Medium' ? '16px' : '24px'
                 }}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 0.3, ease: "easeInOut" }}
               >
                 <div className="w-full max-w-sm">
                   <div className="flex items-center justify-center mb-8">
                     <h3 className={`text-2xl font-bold ${brandingSettings.theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: 'Inter'}}>
                       Sign in
                     </h3>
                   </div>
            
                   {/* Dynamic Authentication Components Based on Toggle States */}
                   <div className="space-y-6">
                     {/* Email Authentication */}
                     <AnimatePresence>
                       {authSettings.email && (
                         <motion.div 
                           className="space-y-4"
                           initial={{ opacity: 0, height: 0, y: -20 }}
                           animate={{ opacity: 1, height: "auto", y: 0 }}
                           exit={{ opacity: 0, height: 0, y: -20 }}
                           transition={{ duration: 0.3, ease: "easeInOut" }}
                         >
                         <div className="text-center">
                           <label className={`block text-sm font-semibold mb-3 ${brandingSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                             Email Address
                           </label>
                           <input
                             type="email"
                             placeholder="Enter your email address"
                             className={`w-full px-4 py-4 border rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                               brandingSettings.theme === 'dark' 
                                 ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                                 : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                             }`}
                             style={{
                               borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                           brandingSettings.cornerRadius === 'Small' ? '8px' :
                                           brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                             }}
                           />
                         </div>
                         <button
                           className={`w-full py-4 px-6 rounded-xl text-sm font-bold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                             brandingSettings.theme === 'dark'
                               ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25'
                               : 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-500/25'
                           }`}
                           style={{
                             borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                         brandingSettings.cornerRadius === 'Small' ? '8px' :
                                         brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                           }}
                         >
                           Continue with Email
                         </button>
                         </div>
                       )}
                     </AnimatePresence>

                     {/* SMS Authentication */}
                     <AnimatePresence>
                       {authSettings.sms && (
                         <motion.div 
                           className="space-y-4"
                           initial={{ opacity: 0, height: 0, y: -20 }}
                           animate={{ opacity: 1, height: "auto", y: 0 }}
                           exit={{ opacity: 0, height: 0, y: -20 }}
                           transition={{ duration: 0.3, ease: "easeInOut" }}
                         >
                         <div className="text-center">
                           <label className={`block text-sm font-semibold mb-3 ${brandingSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                             Phone Number
                           </label>
                           <input
                             type="tel"
                             placeholder="+1 (555) 123-4567"
                             className={`w-full px-4 py-4 border rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                               brandingSettings.theme === 'dark' 
                                 ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                                 : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                             }`}
                             style={{
                               borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                           brandingSettings.cornerRadius === 'Small' ? '8px' :
                                           brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                             }}
                           />
                         </div>
                         <button
                           className={`w-full py-4 px-6 rounded-xl text-sm font-bold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                             brandingSettings.theme === 'dark'
                               ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
                               : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
                           }`}
                           style={{
                             borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                         brandingSettings.cornerRadius === 'Small' ? '8px' :
                                         brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                           }}
                         >
                           Send Verification Code
                         </button>
                         </div>
                       )}
                     </AnimatePresence>

                     {/* Social Authentication */}
                     <AnimatePresence>
                       {authSettings.social && (
                         <motion.div 
                           className="space-y-4"
                           initial={{ opacity: 0, height: 0, y: -20 }}
                           animate={{ opacity: 1, height: "auto", y: 0 }}
                           exit={{ opacity: 0, height: 0, y: -20 }}
                           transition={{ duration: 0.3, ease: "easeInOut" }}
                         >
                         <div className="text-center">
                           <label className={`block text-sm font-semibold mb-4 ${brandingSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                             Continue with Social
                           </label>
                           <div className="flex gap-4 justify-center">
                             <motion.button
                               className={`w-14 h-14 rounded-xl transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center shadow-md hover:shadow-lg ${
                                 brandingSettings.theme === 'dark'
                                   ? 'bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
                                   : 'bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400'
                               }`}
                               whileHover={{ scale: 1.05, y: -2 }}
                               whileTap={{ scale: 0.95 }}
                               style={{
                                 borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                             brandingSettings.cornerRadius === 'Small' ? '8px' :
                                             brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                               }}
                               title="Google"
                             >
                               <img 
                                 src="/logo/brand/wallets/google-logo.svg" 
                                 alt="Google" 
                                 className={`w-7 h-7 ${
                                   brandingSettings.theme === 'dark' ? 'brightness-0 invert' : ''
                                 }`} 
                               />
                             </button>
                             <motion.button
                               className={`w-14 h-14 rounded-xl transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center shadow-md hover:shadow-lg ${
                                 brandingSettings.theme === 'dark'
                                   ? 'bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
                                   : 'bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400'
                               }`}
                               whileHover={{ scale: 1.05, y: -2 }}
                               whileTap={{ scale: 0.95 }}
                               style={{
                                 borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                             brandingSettings.cornerRadius === 'Small' ? '8px' :
                                             brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                               }}
                               title="X (Twitter)"
                             >
                               <img 
                                 src="/logo/brand/wallets/x-twitter-logo.svg" 
                                 alt="X (Twitter)" 
                                 className={`w-7 h-7 ${
                                   brandingSettings.theme === 'dark' ? 'brightness-0 invert' : ''
                                 }`} 
                               />
                             </button>
                           </div>
                         </div>
                         </div>
                       )}
                     </AnimatePresence>

                     {/* Passkey Authentication */}
                     <AnimatePresence>
                       {authSettings.passkey && (
                         <motion.div 
                           className="space-y-4"
                           initial={{ opacity: 0, height: 0, y: -20 }}
                           animate={{ opacity: 1, height: "auto", y: 0 }}
                           exit={{ opacity: 0, height: 0, y: -20 }}
                           transition={{ duration: 0.3, ease: "easeInOut" }}
                         >
                         <div className="text-center">
                           <label className={`block text-sm font-semibold mb-4 ${brandingSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                             Biometric Authentication
                           </label>
                           <button
                             className={`w-full py-4 px-6 rounded-xl text-sm font-bold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-md hover:shadow-lg ${
                               brandingSettings.theme === 'dark'
                                 ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500'
                                 : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 hover:border-gray-400'
                             }`}
                             style={{
                               borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                           brandingSettings.cornerRadius === 'Small' ? '8px' :
                                           brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                             }}
                           >
                             <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                               <span className="text-white text-sm">🔑</span>
                             </div>
                             Use Passkey
                           </button>
                         </div>
                         </div>
                       )}
                     </AnimatePresence>

                     {/* External Wallets */}
                     <AnimatePresence>
                       {authSettings.externalWallets && (
                         <motion.div 
                           className="space-y-4"
                           initial={{ opacity: 0, height: 0, y: -20 }}
                           animate={{ opacity: 1, height: "auto", y: 0 }}
                           exit={{ opacity: 0, height: 0, y: -20 }}
                           transition={{ duration: 0.3, ease: "easeInOut" }}
                         >
                         <div className="text-center">
                           <label className={`block text-sm font-semibold mb-4 ${brandingSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                             Connect Wallet
                           </label>
                           <div className="space-y-4">
                             {/* Primary Wallet - MetaMask */}
                             <div className="flex justify-center">
                               <motion.button
                                 className={`w-20 h-20 rounded-xl transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center shadow-lg hover:shadow-xl ${
                                   brandingSettings.theme === 'dark'
                                     ? 'bg-orange-600 hover:bg-orange-700'
                                     : 'bg-orange-600 hover:bg-orange-700'
                                 }`}
                                 whileHover={{ scale: 1.05, y: -2 }}
                                 whileTap={{ scale: 0.95 }}
                                 style={{
                                   borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                               brandingSettings.cornerRadius === 'Small' ? '8px' :
                                               brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                                 }}
                                 title="MetaMask"
                               >
                                 <img 
                                   src="/logo/brand/wallets/metamask-icon-fox.svg" 
                                   alt="MetaMask" 
                                   className="w-10 h-10"
                                 />
                               </button>
                             </div>

                             {/* More Wallets Section */}
                             <div className="space-y-3">
                               <div className="flex items-center justify-center">
                                 <div className={`flex-1 h-px ${brandingSettings.theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                                 <span className={`px-4 text-xs font-semibold ${brandingSettings.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                   More wallets
                                 </span>
                                 <div className={`flex-1 h-px ${brandingSettings.theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                               </div>
                               
                               <div className="flex flex-wrap gap-3 justify-center">
                                 <motion.button
                                   className={`w-12 h-12 rounded-xl transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center shadow-md hover:shadow-lg ${
                                     brandingSettings.theme === 'dark'
                                       ? 'bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
                                       : 'bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400'
                                   }`}
                                   whileHover={{ scale: 1.05, y: -2 }}
                                   whileTap={{ scale: 0.95 }}
                                   style={{
                                     borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                                 brandingSettings.cornerRadius === 'Small' ? '8px' :
                                                 brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                                   }}
                                   title="Coinbase"
                                 >
                                   <img 
                                     src="/logo/brand/wallets/coinbase-logo.svg" 
                                     alt="Coinbase" 
                                     className="w-6 h-6"
                                   />
                                 </button>

                                 <motion.button
                                   className={`w-12 h-12 rounded-xl transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center shadow-md hover:shadow-lg ${
                                     brandingSettings.theme === 'dark'
                                       ? 'bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
                                       : 'bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400'
                                   }`}
                                   style={{
                                     borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                                 brandingSettings.cornerRadius === 'Small' ? '8px' :
                                                 brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                                   }}
                                   title="OKX"
                                   whileHover={{ scale: 1.05, y: -2 }}
                                   whileTap={{ scale: 0.95 }}
                                 >
                                   <img 
                                     src="/logo/brand/wallets/okx-logo-brandlogo.svg" 
                                     alt="OKX" 
                                     className={`w-6 h-6 ${
                                       brandingSettings.theme === 'dark' ? 'brightness-0 invert' : ''
                                     }`} 
                                   />
                                 </button>

                                 <motion.button
                                   className={`w-12 h-12 rounded-xl transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center shadow-md hover:shadow-lg ${
                                     brandingSettings.theme === 'dark'
                                       ? 'bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
                                       : 'bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400'
                                   }`}
                                   style={{
                                     borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                                 brandingSettings.cornerRadius === 'Small' ? '8px' :
                                                 brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                                   }}
                                   title="Phantom"
                                   whileHover={{ scale: 1.05, y: -2 }}
                                   whileTap={{ scale: 0.95 }}
                                 >
                                   <img 
                                     src="/logo/brand/wallets/Phantom_Logo.svg" 
                                     alt="Phantom" 
                                     className="w-6 h-6 rounded-full"
                                   />
                                 </button>

                                 <motion.button
                                   className={`w-12 h-12 rounded-xl transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center shadow-md hover:shadow-lg ${
                                     brandingSettings.theme === 'dark'
                                       ? 'bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500'
                                       : 'bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400'
                                   }`}
                                   style={{
                                     borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                                 brandingSettings.cornerRadius === 'Small' ? '8px' :
                                                 brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                                   }}
                                   title="WalletConnect"
                                   whileHover={{ scale: 1.05, y: -2 }}
                                   whileTap={{ scale: 0.95 }}
                                 >
                                   <img 
                                     src="/logo/brand/wallets/walletconnect-logo.svg" 
                                     alt="WalletConnect" 
                                     className="w-6 h-6"
                                   />
                                 </button>
                               </div>
                             </div>
                           </div>
                         </div>
                         </div>
                       )}
                     </AnimatePresence>

                     {/* Show message when no auth methods are enabled */}
                     <AnimatePresence>
                       {!authSettings.email && !authSettings.sms && !authSettings.social && !authSettings.passkey && !authSettings.externalWallets && (
                         <motion.div 
                           className="text-center py-16"
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.9 }}
                           transition={{ duration: 0.3, ease: "easeInOut" }}
                         >
                         <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                           brandingSettings.theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                         }`}>
                           <img 
                             src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                             alt="Hyperkit" 
                             className="w-auto h-30"
                           />
                         </div>
                         <h4 className={`text-xl font-bold mb-3 ${brandingSettings.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                           Choose Authentication Method
                         </h4>
                         </div>
                       )}
                     </AnimatePresence>
                   </div>

                   {/* Terms and Conditions */}
                   <div className="mt-4 pt-4 border-t border-gray-200">
                     <p className={`text-xs leading-relaxed ${brandingSettings.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} style={{fontFamily: 'Inter'}}>
                       By signing in, you agree to the{' '}
                       <span className={`font-medium ${brandingSettings.theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Terms of Service</span>{' '}
                       protected by{' '}
                       <span className={`font-medium ${brandingSettings.theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Hyperkit</span>
                     </p>
                   </div>
                 </div>
               </motion.div>
             )}
             </AnimatePresence>
           </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}