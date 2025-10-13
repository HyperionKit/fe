'use client';

import { useState } from 'react';
import { OptimizedImage, OptimizedIcon } from '@/components/ui/optimized-image';

export default function HeroPage() {
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handlePlayDemo = () => {
    setIsDemoPlaying(true);
    // Here you can add logic to start the actual demo
    // For now, we'll just show a placeholder
    console.log('Starting demo...');
    
    // Simulate demo completion after 3 seconds
    setTimeout(() => {
      setIsDemoPlaying(false);
    }, 3000);
  };

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center lg:text-left" style={{fontFamily: 'Inter'}}>
            Build DeFi, Bridge Chains,<br className="hidden sm:block" />
            Thrive in <span className="text-[#D68CFF]">Hyperion</span>
          </h1>
        </div>

        {/* Built on and backed by */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gray-800 px-3 sm:px-4 py-2 rounded-lg">
            <span className="text-white font-bold text-sm sm:text-base" style={{fontFamily: 'Inter'}}>Built on and backed by</span>
            <OptimizedImage 
              src="/logo/brand/metis/metis-blue-white-horizontal.svg" 
              alt="METIS" 
              width={120}
              height={32}
              className="h-6 sm:h-8 w-auto"
            />
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="bg-sky-400 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 mb-8 sm:mb-12 relative shadow-2xl shadow-white/40 h-[700px] flex items-center justify-center">
          {/* Play Demo Button in center */}
          <div className="flex items-center justify-center">
            <button 
              onClick={handlePlayDemo}
              disabled={isDemoPlaying}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full sm:rounded-[40px] font-semibold transition-all duration-300 text-sm sm:text-base ${
                isDemoPlaying 
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                  : 'bg-black text-white hover:bg-gray-800 hover:scale-105'
              }`} 
              style={{fontFamily: 'Inter'}}
            >
              {isDemoPlaying ? 'Playing Demo...' : 'Play Demo'}
              <OptimizedIcon 
                src="/icons/demo/play.png" 
                alt="Play" 
                width={32}
                height={32}
                className={`w-6 h-6 sm:w-8 sm:h-8 ${isDemoPlaying ? 'animate-pulse' : ''}`} 
              />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-8">
          {/* Command line instruction */}
          <div className="flex items-center w-full lg:w-auto">
            <div className="bg-transparent border border-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3 w-full lg:w-auto">
              <span className="text-white font-mono text-xs sm:text-sm" style={{fontFamily: 'Inter'}}>npm create hyperkit</span>
              <button 
                onClick={handleCopyCommand}
                className="flex items-center justify-center p-1 hover:bg-white/10 rounded transition-colors"
                title={isCopied ? 'Copied!' : 'Copy command'}
              >
                <img 
                  src="/icons/actions/copy.png" 
                  alt="Copy" 
                  className={`w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 transition-all duration-200 ${
                    isCopied ? 'opacity-50' : 'hover:opacity-80'
                  }`} 
                />
                {isCopied && (
                  <span className="ml-1 text-green-400 text-xs font-semibold">
                    ✓
                  </span>
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