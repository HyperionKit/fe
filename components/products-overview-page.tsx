'use client';

import React, { useState, useEffect } from 'react';
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
    cornerRadius: 'Large',
    illustrationStyle: 'modern' as 'modern' | 'minimal' | 'playful' | 'corporate',
    supportUrl: '',
    logo: null as File | null
  });

  const [codePreview, setCodePreview] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showCornerRadius, setShowCornerRadius] = useState(false);
  const [showIllustrationStyle, setShowIllustrationStyle] = useState(false);
  const [showSupportUrl, setShowSupportUrl] = useState(false);
  const [showLogoUpload, setShowLogoUpload] = useState(false);

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMoreOptions) {
        const target = event.target as HTMLElement;
        const tooltip = document.querySelector('[data-tooltip="show-more"]');
        const button = document.querySelector('[data-button="show-more"]');
        
        if (tooltip && !tooltip.contains(target) && !button?.contains(target)) {
          setShowMoreOptions(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMoreOptions]);

  const featureCards = [
    {
      title: "Import your web3 assets in minutes",
      description: "Seamlessly integrate with existing web3 infrastructure using our simple API.",
      img: null,
      link: "#"
    },
    {
      title: "Unlock the power of automation",
      description: "AI-powered tools that generate, optimize, and deploy your DeFi applications automatically.",
      img: null,
      link: "#"
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

  const setIllustrationStyle = (style: string) => {
    setBrandingSettings(prev => ({
      ...prev,
      illustrationStyle: style as 'modern' | 'minimal' | 'playful' | 'corporate'
    }));
  };

  const setSupportUrl = (url: string) => {
    setBrandingSettings(prev => ({
      ...prev,
      supportUrl: url
    }));
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBrandingSettings(prev => ({
        ...prev,
        logo: file
      }));
    }
  };

  // Get icon style based on illustration style
  const getIconStyle = () => {
    switch (brandingSettings.illustrationStyle) {
      case 'minimal':
        return {
          borderRadius: '4px',
          padding: '8px',
          background: brandingSettings.theme === 'dark' ? '#374151' : '#f9fafb',
          border: '1px solid #e5e7eb'
        };
      case 'playful':
        return {
          borderRadius: '50%',
          padding: '12px',
          background: `linear-gradient(135deg, ${brandingSettings.color}20, ${brandingSettings.color}40)`,
          border: '2px solid transparent',
          transform: 'scale(1.1)'
        };
      case 'corporate':
        return {
          borderRadius: '2px',
          padding: '6px',
          background: brandingSettings.theme === 'dark' ? '#1f2937' : '#ffffff',
          border: '2px solid #d1d5db',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        };
      case 'modern':
      default:
        return {
          borderRadius: '12px',
          padding: '10px',
          background: brandingSettings.theme === 'dark' ? '#374151' : '#ffffff',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        };
    }
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
                             brandingSettings.cornerRadius !== 'Large' ||
                             brandingSettings.illustrationStyle !== 'modern' ||
                             brandingSettings.supportUrl !== '' ||
                             (brandingSettings.logo !== null && showLogoUpload);

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
      let brandingConfig = [];
      
      brandingConfig.push(`    theme: '${brandingSettings.theme}'`);
      brandingConfig.push(`    primaryColor: '${brandingSettings.color}'`);
      brandingConfig.push(`    borderRadius: '${brandingSettings.cornerRadius.toLowerCase()}'`);
      
      if (brandingSettings.illustrationStyle !== 'modern') {
        brandingConfig.push(`    illustrationStyle: '${brandingSettings.illustrationStyle}'`);
      }
      
      if (brandingSettings.supportUrl !== '') {
        brandingConfig.push(`    supportUrl: '${brandingSettings.supportUrl}'`);
      }
      
      if (brandingSettings.logo !== null && showLogoUpload) {
        brandingConfig.push(`    logo: '${brandingSettings.logo.name}'`);
      } else {
        brandingConfig.push(`    logo: '/logo/hyperkit-logo.svg'`);
      }
      
      configSections.push(`  // UI Branding Configuration
  branding: {
${brandingConfig.join(',\n')}
  }`);
    }

    // Always add SDK and Security sections
    configSections.push(`  // SDK Configuration
  sdk: {
    apiKey: process.env.HYPERKIT_API_KEY,
    environment: 'production',
    version: '1.0.0'
  }`);

    configSections.push(`  // Security Configuration
  security: {
    encryption: true,
    auditLogging: true,
    rateLimiting: true
  }`);

    const configBody = configSections.length > 0 ? `{\n${configSections.join(',\n\n')}\n}` : '{}';

    return `// hyperkit-config.js
import { Hyperkit } from '@hyperkit/sdk';

const hyperkitConfig = ${configBody};

// Initialize Hyperkit SDK
const hyperkit = new Hyperkit(hyperkitConfig);

export default hyperkit;`;
  };

  // Calculate dynamic spacing based on number of enabled components
  const getDynamicSpacing = () => {
    const enabledCount = Object.values(authSettings).filter(Boolean).length;
    const hasLogo = brandingSettings.logo !== null && showLogoUpload;
    
    // Adjust spacing based on number of components and logo presence
    if (enabledCount === 0) return 'space-y-0';
    if (enabledCount === 1) return hasLogo ? 'space-y-4' : 'space-y-6';
    if (enabledCount === 2) return hasLogo ? 'space-y-3' : 'space-y-4';
    if (enabledCount === 3) return hasLogo ? 'space-y-2' : 'space-y-3';
    if (enabledCount === 4) return hasLogo ? 'space-y-1' : 'space-y-2';
    return hasLogo ? 'space-y-1' : 'space-y-1'; // 5+ components
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-0">
      {/* Hyperkit Logo Header */}
      <div className="text-center mb-12">
        <img 
          src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
          alt="Hyperkit" 
          className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" style={{fontFamily: 'Inter'}}>
          Smart Wallet SDK
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{fontFamily: 'Inter'}}>
          Build seamless DeFi experiences with our modular smart wallet infrastructure
        </p>
      </div>
      
      {/* Core Feature Cards Row */}
      <div className="flex flex-wrap lg:flex-nowrap gap-8 mb-50">
        {featureCards.map((card, i) => (
          <div
            key={i}
            className="
              flex-1 min-w-[300px] max-w-xl 
              bg-neutral-900 border border-neutral-700 
              rounded-[1.4rem]
              shadow-2xl 
              overflow-hidden flex flex-col
              relative"
            style={{ height: "500px" }}
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
          </div>
        ))}
      </div>
      
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

        <div className="flex flex-col lg:flex-row gap-10 items-start min-h-[900px]">
          {/* Left Panel - Configuration Options */}
          <div className="w-full h-225 lg:w-90 bg-gray-100 rounded-2xl shadow-lg p-6 border border-gray-200">
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
                <button 
                  onClick={() => toggleAuth('email')}
                  className={`w-10 h-6 rounded-full relative transition-colors ${
                    authSettings.email ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                    authSettings.email ? 'translate-x-5' : 'translate-x-1'
                  }`}></div>
                </button>
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
                <button 
                  onClick={() => toggleAuth('sms')}
                  className={`w-10 h-6 rounded-full relative transition-colors ${
                    authSettings.sms ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                    authSettings.sms ? 'translate-x-5' : 'translate-x-1'
                  }`}></div>
                </button>
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
                <button 
                  onClick={() => toggleAuth('social')}
                  className={`w-10 h-6 rounded-full relative transition-colors ${
                    authSettings.social ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                    authSettings.social ? 'translate-x-5' : 'translate-x-1'
                  }`}></div>
                </button>
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
                  <button 
                    onClick={() => toggleAuth('passkey')}
                    className={`w-10 h-6 rounded-full relative transition-colors ${
                      authSettings.passkey ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      authSettings.passkey ? 'translate-x-5' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 ml-8" style={{fontFamily: 'Inter'}}>add passkey after sign-up</span>
                  <button 
                    onClick={() => toggleAuth('passkeyAfterSignup')}
                    className={`w-10 h-6 rounded-full relative transition-colors ${
                      authSettings.passkeyAfterSignup ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      authSettings.passkeyAfterSignup ? 'translate-x-5' : 'translate-x-1'
                    }`}></div>
                  </button>
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
                <button 
                  onClick={() => toggleAuth('externalWallets')}
                  className={`w-10 h-6 rounded-full relative transition-colors ${
                    authSettings.externalWallets ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                    authSettings.externalWallets ? 'translate-x-5' : 'translate-x-1'
                  }`}></div>
                </button>
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
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className={`w-5 h-5 ${
                        brandingSettings.theme === 'dark' ? 'text-purple-600' : 'text-gray-900'
                      }`}
                    >
                      <path 
                        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
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
                  <input
                    type="color"
                    value={brandingSettings.color}
                    onChange={(e) => setBrandingSettings(prev => ({ ...prev, color: e.target.value }))}
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm cursor-pointer"
                    title="Choose color"
                  />
                  <span className="text-xs text-gray-500 font-mono">{brandingSettings.color}</span>
                </div>
              </div>
            </div>
            
            {/* Show More Button with Tooltip */}
            <div className="mb-4 relative">
              <button 
                data-button="show-more"
                onClick={() => setShowMoreOptions(!showMoreOptions)}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <span className="text-gray-900 text-sm font-medium" style={{fontFamily: 'Inter'}}>
                  Show More
                </span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className={`w-4 h-4 text-gray-600 transition-transform ${showMoreOptions ? 'rotate-90' : ''}`}
                >
                  <path 
                    d="M9 18L15 12L9 6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Tooltip Popup */}
              {showMoreOptions && (
                <div 
                  data-tooltip="show-more"
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 w-73"
                >
                  {/* Tooltip Arrow */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45"></div>
                  <div className="space-y-4">
                    {/* Corner Radius Section */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900" style={{fontFamily: 'Inter'}}>
                        Corner Radius
                      </h3>
                      <button
                        onClick={() => setShowCornerRadius(!showCornerRadius)}
                        className={`w-8 h-4 rounded-full transition-colors ${
                          showCornerRadius ? 'bg-purple-600' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
                          showCornerRadius ? 'translate-x-4' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>
                    {showCornerRadius && (
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
                    )}
                    
                    {/* Illustration Style Section */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900" style={{fontFamily: 'Inter'}}>
                        Illustration Style
                      </h3>
                      <button
                        onClick={() => setShowIllustrationStyle(!showIllustrationStyle)}
                        className={`w-8 h-4 rounded-full transition-colors ${
                          showIllustrationStyle ? 'bg-purple-600' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
                          showIllustrationStyle ? 'translate-x-4' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>
                    {showIllustrationStyle && (
                      <div className="flex gap-2 mb-4">
                        {[
                          { value: 'modern', label: 'Modern', icon: '🎨' },
                          { value: 'minimal', label: 'Minimal', icon: '⚪' },
                          { value: 'playful', label: 'Playful', icon: '🎪' },
                          { value: 'corporate', label: 'Corporate', icon: '🏢' }
                        ].map((style) => (
                          <button
                            key={style.value}
                            onClick={() => setIllustrationStyle(style.value)}
                            className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center text-xs transition-colors ${
                              brandingSettings.illustrationStyle === style.value
                                ? 'bg-purple-600 text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                            title={style.label}
                          >
                            <span className="text-lg">{style.icon}</span>
                          </button>
                        ))}
                      </div>
                    )}
            
                    {/* Support URL Section */}
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm text-gray-900" style={{fontFamily: 'Inter'}}>
                        Support URL (optional)
                      </label>
                      <button
                        onClick={() => setShowSupportUrl(!showSupportUrl)}
                        className={`w-8 h-4 rounded-full transition-colors ${
                          showSupportUrl ? 'bg-purple-600' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
                          showSupportUrl ? 'translate-x-4' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>
                    {showSupportUrl && (
                      <div className="mb-4">
                        <input 
                          type="url" 
                          value={brandingSettings.supportUrl}
                          onChange={(e) => setSupportUrl(e.target.value)}
                          placeholder="https://support.example.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    )}
            
                    {/* Logo Upload Section */}
                    <div className="flex items-center justify-between mb-2">
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
                      <button
                        onClick={() => setShowLogoUpload(!showLogoUpload)}
                        className={`w-8 h-4 rounded-full transition-colors ${
                          showLogoUpload ? 'bg-purple-600' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
                          showLogoUpload ? 'translate-x-4' : 'translate-x-0.5'
                        }`}></div>
                      </button>
                    </div>
                    {showLogoUpload && (
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-2">
                          {brandingSettings.logo && (
                            <span className="text-xs text-gray-600 truncate max-w-20">
                              {brandingSettings.logo.name}
                            </span>
                          )}
                          <label className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors cursor-pointer">
                            {brandingSettings.logo ? 'Change' : 'Upload'}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleLogoUpload}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-200">
              © 2025 Hyperkit. All rights reserved.
            </div>
            </div>
            
           {/* Right Panel - Sign In Modal Demo */}
            <div className="flex-1 bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center p-6 relative h-[900px] overflow-hidden">
              {/* Code Preview Badge with Toggle */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow">
                  Code Preview
                </div>
                <button 
                  onClick={toggleCodePreview}
                  className={`w-10 h-6 rounded-full relative transition-colors ${
                    codePreview ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                    codePreview ? 'translate-x-5' : 'translate-x-1'
                  }`}></div>
                </button>
            </div>
            
             {/* Code Preview or Sign In Modal Content */}
             {codePreview ? (
               <div className="bg-gray-900 rounded-2xl w-full max-w-4xl h-[600px] flex flex-col">
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
               <div className={`border border-gray-200 rounded-2xl shadow-xl w-[400px] min-h-[400px] max-h-[680px] flex flex-col items-center justify-start text-center px-6 py-6 transition-all duration-300 ${
                 brandingSettings.theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white'
               }`} style={{
                 borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                             brandingSettings.cornerRadius === 'Small' ? '8px' :
                             brandingSettings.cornerRadius === 'Medium' ? '16px' : '24px',
                 borderColor: brandingSettings.color,
                 boxShadow: `0 25px 50px -12px ${brandingSettings.color}20`
               }}>
                 <div className="w-full max-w-sm">
                   <div className="flex flex-col items-center mb-3">
                     <h3 className={`text-xl font-bold ${brandingSettings.theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: 'Inter'}}>
                       Sign in
                     </h3>
                     {/* Uploaded Logo Display */}
                     {brandingSettings.logo && showLogoUpload && (
                       <div className="mt-2 mb-1 flex justify-center">
                         <img 
                           src={URL.createObjectURL(brandingSettings.logo)} 
                           alt="Brand Logo" 
                           className="h-16 w-auto object-contain max-w-20"
                         />
                       </div>
                     )}
            </div>
            
                   {/* Dynamic Authentication Components Based on Toggle States */}
                   <div className={`w-full ${getDynamicSpacing()}`}>
                     {/* Email Authentication */}
                     {authSettings.email && (
                       <div className="space-y-3">
                         <div className="text-center">
                           <label className={`block text-sm font-semibold mb-2 ${brandingSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                             Email Address
                           </label>
                           <input
                             type="email"
                             placeholder="Enter your email address"
                             className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
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
                           className={`w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-white shadow-md hover:shadow-lg`}
                           style={{
                             backgroundColor: brandingSettings.color,
                             borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                         brandingSettings.cornerRadius === 'Small' ? '8px' :
                                         brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                           }}
                         >
                           Continue with Email
                         </button>
                       </div>
                     )}

                     {/* SMS Authentication */}
                     {authSettings.sms && (
                       <div className="space-y-3">
                         <div className="text-center">
                           <label className={`block text-sm font-semibold mb-2 ${brandingSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                             Phone Number
                           </label>
            <input 
                             type="tel"
                             placeholder="+1 (555) 123-4567"
                             className={`w-full px-4 py-2.5 border rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
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
                           className={`w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-white shadow-md hover:shadow-lg`}
                           style={{
                             backgroundColor: brandingSettings.color,
                             borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                         brandingSettings.cornerRadius === 'Small' ? '8px' :
                                         brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                           }}
                         >
                           Send Verification Code
                         </button>
                       </div>
                     )}

                     {/* Social Authentication */}
                     {authSettings.social && (
                       <div className="space-y-3">
                         <div className="text-center">
                           <label className={`block text-sm font-semibold mb-3 ${brandingSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                             Continue with Social
                           </label>
                           <div className="flex gap-3 justify-center">
                             <button
                               className="transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center"
                               style={{
                                 ...getIconStyle(),
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
                             <button
                               className="transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center"
                               style={{
                                 ...getIconStyle(),
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

                     {/* Passkey Authentication */}
                     {authSettings.passkey && (
                       <div className="space-y-3">
                         <div className="text-center">
                           <label className={`block text-sm font-semibold mb-3 ${brandingSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                             Biometric Authentication
                           </label>
                           <button
                             className={`w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-sm hover:shadow-md ${
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

                     {/* External Wallets */}
                     {authSettings.externalWallets && (
                       <div className="space-y-3">
                         <div className="text-center">
                           <label className={`block text-sm font-semibold mb-3 ${brandingSettings.theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                             Connect Wallet
                           </label>
                           <div className="space-y-2">
                             {/* All Wallets in One Row */}
                             <div className="flex flex-wrap gap-2 justify-center">
                                 {/* MetaMask */}
                                 <button
                                   className="transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center"
                                   style={{
                                     ...getIconStyle(),
                                     borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                                 brandingSettings.cornerRadius === 'Small' ? '8px' :
                                                 brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                                   }}
                                   title="MetaMask"
                                 >
                                   <img 
                                     src="/logo/brand/wallets/metamask-icon-fox.svg" 
                                     alt="MetaMask" 
                                     className="w-6 h-6"
                                   />
                                 </button>

                                 {/* Coinbase */}
                                 <button
                                   className="transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center"
                                   style={{
                                     ...getIconStyle(),
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

                                 <button
                                   className="transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center"
                                   style={{
                                     ...getIconStyle(),
                                     borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                                 brandingSettings.cornerRadius === 'Small' ? '8px' :
                                                 brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                                   }}
                                   title="OKX"
                                 >
                                   <img 
                                     src="/logo/brand/wallets/okx-logo-brandlogo.svg" 
                                     alt="OKX" 
                                     className={`w-6 h-6 ${
                                       brandingSettings.theme === 'dark' ? 'brightness-0 invert' : ''
                                     }`} 
                                   />
                                 </button>

                                 <button
                                   className="transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center"
                                   style={{
                                     ...getIconStyle(),
                                     borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                                 brandingSettings.cornerRadius === 'Small' ? '8px' :
                                                 brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                                   }}
                                   title="Phantom"
                                 >
                                   <img 
                                     src="/logo/brand/wallets/Phantom_Logo.svg" 
                                     alt="Phantom" 
                                     className="w-6 h-6 rounded-full"
                                   />
                                 </button>

                                 <button
                                   className="transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95] flex items-center justify-center"
                                   style={{
                                     ...getIconStyle(),
                                     borderRadius: brandingSettings.cornerRadius === 'None' ? '0px' : 
                                                 brandingSettings.cornerRadius === 'Small' ? '8px' :
                                                 brandingSettings.cornerRadius === 'Medium' ? '12px' : '16px'
                                   }}
                                   title="WalletConnect"
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
                     )}

                     {/* Show message when no auth methods are enabled */}
                     {!authSettings.email && !authSettings.sms && !authSettings.social && !authSettings.passkey && !authSettings.externalWallets && (
                       <div className="text-center py-16">
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
                   </div>

                   {/* Terms and Conditions */}
                   <div className="mt-6 pt-4 border-t border-gray-200">
                     <p className={`text-xs leading-relaxed text-center ${brandingSettings.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} style={{fontFamily: 'Inter'}}>
                       By signing in, you agree to the{' '}
                       <span className={`font-semibold ${brandingSettings.theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Terms of Service</span>{' '}
                       protected by{' '}
                       <span className={`font-semibold ${brandingSettings.theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Hyperkit</span>
                     </p>
                     {brandingSettings.supportUrl && (
                       <div className="mt-2 text-center">
                         <a 
                           href={brandingSettings.supportUrl} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className={`text-xs underline hover:no-underline ${brandingSettings.theme === 'dark' ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}
                         >
                           Need help? Contact Support
                         </a>
                       </div>
                     )}
                   </div>
                 </div>
               </div>
             )}
           </div>
        </div>
      </section>
    </div>
  );
}

