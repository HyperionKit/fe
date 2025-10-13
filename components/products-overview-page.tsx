'use client';

import React from 'react';
import { OptimizedImage, OptimizedIcon } from '@/components/ui/optimized-image';
import Orb from './libraries/Orb';
import OrbInput from './libraries/OrbInput';
import { Compare } from './libraries/Compare';
import ConnectWallet from './libraries/ConnectWallet';

export default function ProductsOverviewPage() {
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

  return (
    <div className="max-w-7xl mx-auto px-8 py-0">
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

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Panel - Configuration Options */}
          <div className="w-full lg:w-80 bg-gray-100 rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6" style={{fontFamily: 'Inter'}}>
              Authentication
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
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
                <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
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
                <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
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
                    <OptimizedIcon src="/icons/products/imgi_10_facebook.png" alt="Facebook" width={16} height={16} className="w-4 h-4" />
                  </div>
                </div>
                <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform"></div>
                </div>
              </div>
              <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors space-y-2">
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
                  <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 ml-8" style={{fontFamily: 'Inter'}}>add passkey after sign-up</span>
                  <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform"></div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter'}}>
              Connect
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
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
                <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform"></div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter'}}>
              Configuration
            </h3>
            <div className="space-y-4 mb-8">
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
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-gray-900 text-sm" style={{fontFamily: 'Inter'}}>Theme</span>
                </div>
                <div className="flex gap-2">
                  <OptimizedIcon src="/icons/products/imgi_17_sun.png" alt="Light" width={20} height={20} className="w-5 h-5 text-gray-400" />
                  <OptimizedIcon src="/icons/products/imgi_18_moon.png" alt="Dark" width={20} height={20} className="w-5 h-5 text-gray-900" />
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
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
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
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

            <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{fontFamily: 'Inter'}}>
              Corner Radius
            </h3>
            <div className="flex gap-2 mb-8">
              {['None', 'Small', 'Medium', 'Large'].map((size, index) => (
                <button
                  key={size}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    size === 'Large' 
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
            <div className="flex gap-2 mb-8">
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

            <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-200">
              © 2025 Hyperkit. All rights reserved.
            </div>
          </div>

           {/* Right Panel - Sign In Modal Demo */}
            <div className="flex-1 min-h-[1240px] bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center p-12 relative">
              {/* Code Preview Badge with Toggle */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow">
                  Code Preview
                </div>
                <div className="w-10 h-6 bg-gray-300 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform"></div>
                </div>
              </div>
             
             {/* Sign In Modal Content - Static Demo */}
             <div className="bg-white border border-gray-100 rounded-2xl shadow-lg w-[400px] h-[120px] flex flex-col items-center justify-center text-center px-8">
               <h3 className="text-lg font-bold text-gray-900 mb-2" style={{fontFamily: 'Inter'}}>
                 Sign in
               </h3>
               <p className="text-sm text-gray-600 leading-relaxed" style={{fontFamily: 'Inter'}}>
                 By signing in, you agree to the{' '}
                 <span className="text-gray-800 font-medium">Terms of Service</span>{' '}
                 protected by{' '}
                 <span className="text-gray-800 font-medium">Hyperkit</span>
               </p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}