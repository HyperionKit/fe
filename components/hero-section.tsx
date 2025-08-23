"use client";
import Link from 'next/link'
import { Github } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  // Prevent hydration mismatch by only rendering icons after client mount
  const [isMounted, setIsMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText("npm create hyperkit");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white text-black flex flex-col justify-center">
      {/* Hero Content */}
      <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 text-center'>
        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-violet-600'>
          Hyperkit
        </h1>
      </div>
      
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-6 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight max-w-5xl mx-auto">
          Build DeFi, Bridge Chains,{' '}
          <br className="hidden sm:inline" />
          Thrive in{' '}
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Hyperion
          </span>
        </h1>
       
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed px-2">
          Modular tools and cross-chain magic with HyperKit empowering
          developers to create, connect, and grow in minutes.
        </p>
       
        {/* Enhanced responsive button layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 max-w-4xl mx-auto">
          {/* Primary CTA Button */}
          <button
            onClick={handleCopyCommand}
            className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[200px] sm:min-w-[240px]"
          >
            {copied ? "Copied!" : "npm create hyperkit"}
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto">
            {/* Whitelist Button */}
            <Link 
              href="https://ai.hyperionkit.xyz" 
              className="flex-1 sm:flex-none bg-black hover:bg-gray-800 active:bg-gray-900 text-white px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[120px]"
            >
              HyperKit AI
            </Link>

            {/* Docs and GitHub Container */}
            <div className="flex gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto">
              <Link 
                href="/docs" 
                className="flex-1 sm:flex-none bg-black hover:bg-gray-800 active:bg-gray-900 text-white px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[100px]"
              >
                <span>Docs</span>
                <span className="text-lg md:text-xl">→</span>
              </Link>
              
              <Link 
                href="https://github.com/HyperionKit" 
                className="bg-black hover:bg-gray-800 active:bg-gray-900 text-white p-3 md:p-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                aria-label="View on GitHub"
              >
                {/* Only render icon after client mount to prevent hydration mismatch */}
                {isMounted && <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                {/* Fallback for SSR */}
                {!isMounted && <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 inline-block" />}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;