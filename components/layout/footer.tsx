import React from 'react';
import { OptimizedLogo, OptimizedIcon } from '@/components/ui/optimized-image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 lg:py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Logo */}
          <div className="flex items-start sm:col-span-2 lg:col-span-1">
            <OptimizedLogo 
              src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
              alt="Hyperkit Logo" 
              width={200}
              height={80}
              className="w-auto h-16 sm:h-20 lg:h-25"
            />
          </div>

          {/* Column 1 - Developers */}
          <div className="flex flex-col space-y-sm">
            <h3 className="text-white text-lg font-bold mb-2" style={{fontFamily: 'Inter'}}>Developers</h3>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Documentation</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Changelog</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Status page</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Trust center</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Under the hood</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Example project</a>
            
            {/* Hyperion Icon and Text */}
            <div className="flex flex-col items-center gap-2 mt-4 sm:mt-6">
              <OptimizedIcon 
                src="/logo/brand/hyperion/hyperion-icon-white.png" 
                alt="Hyperion Icon" 
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <div className="text-center">
                <p className="text-white text-xs sm:text-sm font-medium" style={{fontFamily: 'Inter'}}>Hyperhack</p>
                <p className="text-white text-xs sm:text-sm font-medium" style={{fontFamily: 'Inter'}}>Winners</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Resources */}
          <div className="flex flex-col space-y-sm">
            <h3 className="text-white text-lg font-bold mb-2" style={{fontFamily: 'Inter'}}>Resources</h3>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Blog</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Customer Stories</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Modern Billing Stack</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Unbundled Monetization</a>
          </div>

          {/* Column 3 - Company */}
          <div className="flex flex-col space-y-sm">
            <h3 className="text-white text-lg font-bold mb-2" style={{fontFamily: 'Inter'}}>Company</h3>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Pricing</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Careers</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Partners</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Privacy policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>Terms of use</a>
            <a href="mailto:support@hyperkit.xyz" className="text-gray-400 hover:text-white transition-colors text-sm" style={{fontFamily: 'Inter'}}>support@hyperkit.xyz</a>
          </div>
          </div>
        </div>

        {/* Middle Section - Status */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 lg:mb-16 max-w-md">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-400 text-xs sm:text-sm" style={{fontFamily: 'Inter'}}>All systems development</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-gray-800">
            {/* Copyright */}
            <div className="text-gray-400 text-xs sm:text-sm" style={{fontFamily: 'Inter'}}>© 2024 Hyperkit. All rights reserved.</div>

            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6 items-center">
              <a 
                href="https://x.com/HyperionKit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Follow us on X (Twitter)"
              >
                <OptimizedIcon src="/icons/footer/social/x-white.svg" alt="X (Twitter)" width={24} height={24} />
              </a>
              <a 
                href="https://t.me/hyperionkit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Join our Telegram"
              >
                <OptimizedIcon src="/icons/footer/social/telegram-white.svg" alt="Telegram" width={24} height={24} />
              </a>
              <a 
                href="https://discord.com/invite/MDh7jY8vWe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Join our Discord"
              >
                <OptimizedIcon src="/icons/footer/social/discord-white.svg" alt="Discord" width={24} height={24} />
              </a>
              <a 
                href="https://github.com/HyperionKit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Visit our GitHub"
              >
                <OptimizedIcon src="/icons/footer/social/github-white.svg" alt="GitHub" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}