import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8 w-full">
      <div className="w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div className="flex items-start">
            <img 
              src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
              alt="Hyperkit Logo" 
              className="w-auto h-25"
            />
          </div>

          {/* Column 1 - Developers */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-lg font-bold mb-2" style={{fontFamily: 'Inter'}}>Developers</h3>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Documentation</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Changelog</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Status page</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Trust center</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Under the hood</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Example project</a>
            
            {/* Hyperion Icon and Text */}
            <div className="flex flex-col items-center gap-2 mt-6">
              <img 
                src="/logo/brand/hyperion/hyperion-icon-white.png" 
                alt="Hyperion Icon" 
                className="w-8 h-8"
              />
              <div className="text-center">
                <p className="text-white text-sm font-medium" style={{fontFamily: 'Inter'}}>Hyperhack</p>
                <p className="text-white text-sm font-medium" style={{fontFamily: 'Inter'}}>Winners</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Resources */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-lg font-bold mb-2" style={{fontFamily: 'Inter'}}>Resources</h3>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Blog</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Customer Stories</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Modern Billing Stack</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Unbundled Monetization</a>
          </div>

          {/* Column 3 - Company */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-lg font-bold mb-2" style={{fontFamily: 'Inter'}}>Company</h3>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Pricing</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Careers</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Partners</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Privacy policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>Terms of use</a>
            <a href="mailto:support@hyperkit.xyz" className="text-gray-400 hover:text-white transition-colors" style={{fontFamily: 'Inter'}}>support@hyperkit.xyz</a>
          </div>
        </div>

        {/* Middle Section - Status */}
        <div className="mb-16 max-w-md">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-gray-400 text-sm" style={{fontFamily: 'Inter'}}>All systems development</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8 border-t border-gray-800">
          {/* Copyright */}
          <div className="text-gray-400 text-sm" style={{fontFamily: 'Inter'}}>© 2024 Hyperkit. All rights reserved.</div>

          {/* Social Icons */}
          <div className="flex gap-6 items-center">
            <img src="/icons/footer/social/x-white.svg" alt="X (Twitter)" className="w-6 h-6 hover:opacity-80 transition-opacity" />
            <img src="/icons/footer/social/telegram-white.svg" alt="Telegram" className="w-6 h-6 hover:opacity-80 transition-opacity" />
            <img src="/icons/footer/social/discord-white.svg" alt="Discord" className="w-6 h-6 hover:opacity-80 transition-opacity" />
            <img src="/icons/footer/social/github-white.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
}