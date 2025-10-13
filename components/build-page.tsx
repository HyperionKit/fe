'use client';

import React from 'react';
import BuildHeroSection from './build-hero-section';
import FaultyTerminal from './libraries/FaultyTerminal';

export default function BuildPage() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar - Black Background with Navigation */}
      <div className="w-64 bg-black p-6 flex flex-col">
        {/* Navigation Links */}
        <div className="space-y-1 flex-1">
          {/* Introduction + */}
          <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <span className="text-white text-sm" style={{fontFamily: 'Inter'}}>Introduction</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          
          {/* Installation + */}
          <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <span className="text-white text-sm" style={{fontFamily: 'Inter'}}>Installation</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          
          {/* Config + */}
          <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <span className="text-white text-sm" style={{fontFamily: 'Inter'}}>Config</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          
          {/* Guides */}
          <div className="py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <span className="text-white text-sm" style={{fontFamily: 'Inter'}}>Guides</span>
          </div>
          
          {/* Branding */}
          <div className="py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <span className="text-white text-sm" style={{fontFamily: 'Inter'}}>Branding</span>
          </div>
          
          {/* Spacer */}
          <div className="h-4"></div>
          
          {/* Github */}
          <div className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-white text-sm" style={{fontFamily: 'Inter'}}>Github</span>
          </div>
          
          {/* Playground */}
          <div className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <span className="text-white text-sm" style={{fontFamily: 'Inter'}}>Playground</span>
          </div>
          
          {/* Support */}
          <div className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
            </svg>
            <span className="text-white text-sm" style={{fontFamily: 'Inter'}}>Support</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Hero Section with Gradient Background */}
        <BuildHeroSection />
        
        {/* Combined Section - Pillar Statement + Challenge */}
        <div className="bg-black py-16 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Pillar Statement Card */}
            <div className="mb-16">
              <div className="bg-black rounded-2xl p-8 border-l-4 border-purple-500">
                <p className="text-white text-base leading-relaxed" style={{fontFamily: 'Inter'}}>
                  We focus on three core pillars:{' '}
                  <span className="text-purple-400 font-medium">cross-chain interoperability</span>,{' '}
                  <span className="text-purple-400 font-medium">open DeFi infrastructure</span>, and{' '}
                  <span className="text-purple-400 font-medium">transparent community governance</span>—essential yet often overlooked drivers needed to scale breakthrough blockchain applications in a rapidly advancing digital landscape for global economic empowerment.
                </p>
              </div>
            </div>

            {/* The Challenge Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-400 mb-4" style={{fontFamily: 'Inter'}}>
                  DECENTRALIZED TECHNOLOGY SOLUTIONS
                </div>
                <h2 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight" style={{fontFamily: 'Be Vietnam Pro'}}>
                  <div>The</div>
                  <div className="text-purple-500">Challenge.</div>
                </h2>
              </div>
              
              {/* Right Column */}
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Inter'}}>
                  Despite massive advancements and growing institutional interest, truly breakthrough blockchain solutions still face barriers on the path to mainstream adoption.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Inter'}}>
                  Innovative technologies like cross-chain interoperability, scalable DeFi infrastructure, and secure community governance—often remain underfunded or risk-averse due to uncertain returns and lengthy development timelines. Private investors are hesitant to support early-stage protocols in capital-intensive sectors, and adoption can stall when the risk outweighs perceived rewards.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Inter'}}>
                  At Hyperkit, we're committed to de-risking crucial innovations, fostering developer confidence, and building the foundations needed for global adoption. By combining transparent collaboration, incentive alignment, and modular tools, we help communities and projects realize their full potential in a rapidly evolving web3 ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Builder Grants & Rewards Grid */}
        <div className="h-screen relative">
          {/* FaultyTerminal Background */}
          <div className="absolute inset-0 z-0">
            <FaultyTerminal
              scale={1.5}
              gridMul={[2, 1]}
              digitSize={1.2}
              timeScale={1}
              pause={false}
              scanlineIntensity={1}
              glitchAmount={1}
              flickerAmount={1}
              noiseAmp={1}
              chromaticAberration={0}
              dither={0}
              curvature={0}
              tint="#8B5CF6"
              mouseReact={true}
              mouseStrength={0.5}
              pageLoadAnimation={false}
              brightness={0.8}
            />
          </div>
          
          <div className="grid grid-cols-2 h-full relative z-10">
            {/* Top Left - 3D Icon Only */}
            <div className="bg-purple-600/80 backdrop-blur-sm flex items-center justify-center border-r border-purple-500 border-b border-purple-500">
              <div className="w-120 h-auto flex items-center justify-center">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Hyperkit Abstract" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Top Right - Split into two sections */}
            <div className="bg-purple-600/40 backdrop-blur-sm flex flex-col border-b border-purple-500">
              {/* Upper Right - HYPERKIT with icon */}
              <div className="flex-1 bg-purple-600/20 backdrop-blur-sm flex items-center justify-center gap-6 border-b border-purple-500">
                <div className="w-80 h-auto flex items-center justify-center">
                  <img 
                    src="/logo/brand/hyperkit/Hyperkit Header White.svg" 
                    alt="Hyperkit White" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Lower Right - HYPERKIT with button */}
              <div className="flex-1 bg-purple-600/20 backdrop-blur-sm flex items-center justify-center gap-6">
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src="/logo/brand/hyperkit/Hyperkit Header Black.svg" 
                    alt="HYPERKIT" 
                    className="w-80 h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Left - Builder Grants */}
            <div className="bg-purple-600/80 backdrop-blur-sm flex flex-col justify-between p-8 border-r border-purple-500">
              <h3 className="text-2xl font-bold text-white" style={{fontFamily: 'Be Vietnam Pro'}}>
                Builder Grants
              </h3>
              <div className="text-right">
                <span className="text-white text-lg font-medium">Apply now</span>
              </div>
            </div>

            {/* Bottom Right - Builder Rewards */}
            <div className="bg-purple-600/80 backdrop-blur-sm flex flex-col justify-between p-8">
              <h3 className="text-2xl font-bold text-white" style={{fontFamily: 'Be Vietnam Pro'}}>
                Builder Rewards
              </h3>
              <div className="text-right">
                <span className="text-white text-lg font-medium">Learn more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
