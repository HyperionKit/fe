'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo - Hyperkit Header White */}
        <div className="flex items-center">
          <img 
            src="/logo/brand/hyperkit/Hyperkit Header White.svg" 
            alt="Hyperkit" 
            className="h-12 sm:h-14 lg:h-18 w-auto"
          />
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center flex-1 justify-center gap-6 xl:gap-12">
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium text-sm xl:text-base" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/foundation.svg" alt="Foundation" className="w-4 h-4" />
            <span className="hidden xl:inline">Foundation</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium text-sm xl:text-base" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/products.png" alt="Products" className="w-4 h-4" />
            <span className="hidden xl:inline">Products</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium text-sm xl:text-base" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/explore.png" alt="Explore" className="w-4 h-4" />
            <span className="hidden xl:inline">Explore</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium text-sm xl:text-base" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/roadmap.png" alt="Roadmap" className="w-4 h-4" />
            <span className="hidden xl:inline">Roadmap</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium text-sm xl:text-base" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/build.svg" alt="Build" className="w-4 h-4" />
            <span className="hidden xl:inline">Build</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium text-sm xl:text-base" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/docs.svg" alt="Docs" className="w-4 h-4" />
            <span className="hidden xl:inline">Docs</span>
          </a>
        </div>
        
        {/* Desktop Launch App Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-transparent text-white px-4 xl:px-8 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap text-sm xl:text-base" style={{fontFamily: 'Be Vietnam Pro'}}>
            Launch App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:text-cyan-300 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors font-medium py-2" style={{fontFamily: 'Be Vietnam Pro'}}>
              <img src="/icons/navbar/foundation.svg" alt="Foundation" className="w-5 h-5" />
              Foundation
            </a>
            <a href="#" className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors font-medium py-2" style={{fontFamily: 'Be Vietnam Pro'}}>
              <img src="/icons/navbar/products.png" alt="Products" className="w-5 h-5" />
              Products
            </a>
            <a href="#" className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors font-medium py-2" style={{fontFamily: 'Be Vietnam Pro'}}>
              <img src="/icons/navbar/explore.png" alt="Explore" className="w-5 h-5" />
              Explore
            </a>
            <a href="#" className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors font-medium py-2" style={{fontFamily: 'Be Vietnam Pro'}}>
              <img src="/icons/navbar/roadmap.png" alt="Roadmap" className="w-5 h-5" />
              Roadmap
            </a>
            <a href="#" className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors font-medium py-2" style={{fontFamily: 'Be Vietnam Pro'}}>
              <img src="/icons/navbar/build.svg" alt="Build" className="w-5 h-5" />
              Build
            </a>
            <a href="#" className="flex items-center gap-3 text-white hover:text-cyan-300 transition-colors font-medium py-2" style={{fontFamily: 'Be Vietnam Pro'}}>
              <img src="/icons/navbar/docs.svg" alt="Docs" className="w-5 h-5" />
              Docs
            </a>
            <div className="pt-4 border-t border-gray-800">
              <button className="w-full bg-transparent text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors" style={{fontFamily: 'Be Vietnam Pro'}}>
                Launch App
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}