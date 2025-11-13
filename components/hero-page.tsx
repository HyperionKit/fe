'use client';

import { useState } from 'react';
import { OptimizedImage, OptimizedIcon } from '@/components/ui/optimized-image';
import EnhancedHeroDemo from './EnhancedHeroDemo';

export default function HeroPage() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText('npm create hyperkit');
      setIsCopied(true);
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy command:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'npm create hyperkit';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
      
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  const handleInnovateNow = () => {
    // Here you can add logic to navigate to a specific page or open a modal
    console.log('Innovate now clicked');
    // For example, you could scroll to a specific section or open a contact form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight text-center lg:text-left" style={{fontFamily: 'Inter'}}>
            Build DeFi, Bridge Chains,<br className="hidden sm:block" />
            Thrive in <span className="text-[#D68CFF]">Crosschain</span>
          </h1>
        </div>

        {/* Enhanced Interactive Demo Section */}
        <div className="mb-8 sm:mb-12">
          <EnhancedHeroDemo />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-8">
          {/* Command line instruction */}
          <div className="flex items-center w-full lg:w-auto">
            <div className={`relative border px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg flex items-center gap-3 sm:gap-4 w-full lg:w-auto transition-all duration-200 ${
              isCopied 
                ? 'border-green-500/50 bg-trasnparent' 
                : 'border-white/25 bg-white/5 hover:bg-white/10 hover:border-white/40'
            }`}>
              
              <span className={`font-mono text-sm sm:text-base select-all transition-colors duration-200 text `}>
                npm create hyperkit
              </span>
              
              <button 
                onClick={handleCopyCommand}
                className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md transition-all duration-200 ${
                  isCopied
                    ? 'bg-green-500 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
                title={isCopied ? 'Copied!' : 'Copy command'}
              >
                {isCopied ? (
                  <>
                    <span className="text-sm font-semibold">✓</span>
                    <span className="hidden sm:inline text-xs font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <img 
                      src="/icons/actions/copy.png" 
                      alt="" 
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      aria-hidden="true"
                    />
                    <span className="hidden sm:inline text-xs font-medium">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Right side content */}
          <div className="flex flex-col items-center lg:items-end gap-4 sm:gap-6 max-w-md text-center lg:text-right">
            <p className="text-white text-base sm:text-lg leading-relaxed" style={{fontFamily: 'Inter'}}>
              Modular tools and cross-chain magic with empowering developers to create, connect, and grow in minutes.
            </p>
            <button 
              onClick={handleInnovateNow}
              className="bg-transparent border border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300 hover:scale-105" 
              style={{fontFamily: 'Inter'}}
            >
              Innovate now
            </button>
          </div>
        </div>

        {/* Trusted by the best */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-white text-xs sm:text-sm mb-4 sm:mb-6" style={{fontFamily: 'Inter'}}>Trusted by the best</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="flex items-center gap-2">
              <img src="/logo/brand/metis/metis-blue-white-horizontal.svg" alt="METIS" className="h-8 sm:h-10 lg:h-12 w-auto" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/logo/brand/hyperion/hyperion-logo-white.svg" alt="Hyperion" className="h-10 sm:h-12 lg:h-16 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}