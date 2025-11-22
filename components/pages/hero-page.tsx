'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Copy, Zap, Clock, Rocket, CheckCircle2 } from 'lucide-react';
import { OptimizedImage, OptimizedIcon } from '@/components/ui/optimized-image';
import EnhancedHeroDemo from '../demo/EnhancedHeroDemo';

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
        <div className="mb-4 sm:mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight text-center lg:text-left" style={{fontFamily: 'Inter'}}>
            Build Smarter. Deploy Faster.<br className="hidden sm:block" />
            Thrive in <span className="text-[#D68CFF]">Hyperkit</span>
          </h1>
        </div>

        {/* Value Proposition Subheadline */}
        <div className="mb-6 sm:mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 text-center lg:text-left mb-4 max-w-4xl" style={{fontFamily: 'Inter'}}>
            Ship DeFi apps in <span className="text-[#D68CFF] font-bold">minutes</span>, not weeks.
            <span className="block mt-2 text-lg sm:text-xl md:text-2xl text-white/70">
              Join developers building the future of Web3
            </span>
          </p>
          
          {/* Social Proof Badge */}
          <div className="flex items-center gap-3 mt-4 text-center lg:text-left">
            <div className="flex -space-x-2">
              {/* Avatar stack - Developer profiles */}
              <img 
                src="https://avatars.githubusercontent.com/u/126247858?v=4" 
                alt="Developer 1" 
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="https://avatars.githubusercontent.com/u/118997864?v=4" 
                alt="Developer 2" 
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="https://avatars.githubusercontent.com/u/180379912?v=4" 
                alt="Developer 3" 
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="text-white/80 text-sm sm:text-base">
              <span className="font-bold text-white">3</span> developers building with HyperKit
            </span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-white/80 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>Open Source</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>In Development</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span>Decentralized Network</span>
          </div>
        </div>

        {/* Primary CTA - Above the fold */}
        <div className="mb-8 sm:mb-12">
          <div className="relative">
            {/* Glow effect behind CTA - Monochromatic */}
            <div className="absolute inset-0 bg-[#7C3AED]/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
            {/* Additional geometric accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#7C3AED]/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#6D28D9]/10 rounded-full blur-2xl -z-10"></div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              {/* npm create hyperkit Button - Left side */}
              <button
                onClick={handleCopyCommand}
                className="group relative bg-white/5 border border-white/20 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-xl font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 backdrop-blur-sm active:scale-95 transform flex items-center justify-center gap-3 min-w-[240px] sm:min-w-[280px] w-full sm:w-auto font-mono"
                style={{fontFamily: 'Inter'}}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isCopied ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <span>npm create hyperkit</span>
                      <Copy className="w-4 h-4" />
                    </>
                  )}
                </span>
              </button>

              {/* Try AI Button - Right side */}
              <Link
                href="/maintenance"
                className="group relative bg-[#7C3AED] active:bg-[#6D28D9] text-white px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-xl font-bold text-lg sm:text-xl md:text-2xl transition-all duration-300 shadow-2xl active:scale-95 transform flex items-center justify-center gap-3 min-w-[280px] sm:min-w-[320px] w-full sm:w-auto border border-white/20 backdrop-blur-sm"
                style={{fontFamily: 'Inter'}}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>Try AI</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
            
            {/* Benefit text below CTA */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-4 text-white/70 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#D68CFF]" />
                <span>No credit card required</span>
              </div>
              <span className="text-white/30 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D68CFF]" />
                <span>Setup in 30 seconds</span>
              </div>
              <span className="text-white/30 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-[#D68CFF]" />
                <span>Start building immediately</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Interactive Demo Section */}
        <div className="mb-8 sm:mb-12">
          <EnhancedHeroDemo />
        </div>

        {/* Additional Info Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-8 mb-8">
          {/* Left side - Description */}
          <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 max-w-md text-center lg:text-left">
            <p className="text-white text-base sm:text-lg leading-relaxed" style={{fontFamily: 'Inter'}}>
              Modular tools and cross-chain magic empowering developers to create, connect, and grow in minutes.
            </p>
            
            {/* Additional CTA Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/maintenance"
                className="text-white/80 hover:text-white text-sm sm:text-base font-medium transition-colors flex items-center gap-2 group"
                style={{fontFamily: 'Inter'}}
              >
                <span>Launch App</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-white/40 hidden sm:inline">|</span>
              <Link
                href="/products"
                className="text-white/80 hover:text-white text-sm sm:text-base font-medium transition-colors flex items-center gap-2 group"
                style={{fontFamily: 'Inter'}}
              >
                <span>View Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Right side - Quick Stats or Features */}
          <div className="flex flex-col items-center lg:items-end gap-3 text-center lg:text-right">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div>
                <div className="text-[#D68CFF] text-2xl sm:text-3xl font-bold">3</div>
                <div className="text-white/70 text-sm">Active Developers</div>
              </div>
              <div>
                <div className="text-[#D68CFF] text-2xl sm:text-3xl font-bold">Testing</div>
                <div className="text-white/70 text-sm">Projects Built</div>
              </div>
            </div>
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