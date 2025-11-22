"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  titleSize?: string;
  subtitleSize?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl mb-6 text-white max-w-5xl leading-tight" style={{fontFamily: 'Be Vietnam Pro'}}>
          Tracking Every Breakthrough
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-4xl leading-relaxed" style={{fontFamily: 'Inter'}}>
          Stay updated with the latest milestones, enhancements, and pivotal moments from my development journey. This changelog reflects an open commitment to transparency and continuous innovation, sharing each step forward as Hyperkit evolves.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-12 md:pt-48 md:gap-12"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gray-400 border border-gray-600 p-2" />
              </div>
              {/* Horizontal connector line */}
              <div className="absolute left-8 md:left-8 top-1/2 w-12 h-px bg-gray-400 transform -translate-y-1/2"></div>
              <div className="hidden md:block md:pl-20">
                <h3 className={`font-bold text-white leading-none ${item.titleSize || 'text-2xl md:text-8xl'}`} style={{fontFamily: 'Be Vietnam Pro'}}>
                  {item.title}
                </h3>
                {item.subtitle && (
                  <h4 className={`font-bold text-white leading-tight mt-2 ${item.subtitleSize || 'text-lg md:text-3xl'}`} style={{fontFamily: 'Be Vietnam Pro'}}>
                    {item.subtitle}
                  </h4>
                )}
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile horizontal connector line */}
              <div className="md:hidden absolute left-8 top-1/2 w-12 h-px bg-gray-400 transform -translate-y-1/2"></div>
              <div className="md:hidden block mb-4 text-left">
                <h3 className={`font-bold text-white leading-none ${item.titleSize || 'text-4xl'}`} style={{fontFamily: 'Be Vietnam Pro'}}>
                  {item.title}
                </h3>
                {item.subtitle && (
                  <h4 className={`font-bold text-white leading-tight mt-1 ${item.subtitleSize || 'text-xl'}`} style={{fontFamily: 'Be Vietnam Pro'}}>
                    {item.subtitle}
                  </h4>
                )}
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 w-[2px]"
        >
          {/* Base line - extends to bottom */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-gray-600"></div>
          
          {/* Animated progress line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-white to-black"
          />
        </div>
      </div>
    </div>
  );
};

const RoadmapTimeline = () => {
  const timelineData: TimelineEntry[] = [
    {
      title: "2025",
      subtitle: "October, Week 1",
      titleSize: "text-8xl md:text-9xl",
      subtitleSize: "text-5xl md:text-4xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-green-500/30">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-white text-3xl font-bold" style={{fontFamily: 'Be Vietnam Pro'}}>
              Rebranding & Planning
            </h3>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full border border-green-500/50">
              ✓ Completed
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Finalize new logo and themes. Outline supported blockchain project types.
          </p>
          {/* 2x2 Grid - Hyperkit Branding Assets */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left - Hyperkit Abstract Logo */}
            <div className="rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700" style={{backgroundColor: '#7C3AED'}}>
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Hyperkit Abstract Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Top Right - Hyperkit Header Black */}
            <div className="rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700" style={{backgroundColor: '#7C3AED'}}>
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Header Black.svg" 
                  alt="Hyperkit Header Black" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Bottom Left - Hyperkit Header White */}
            <div className="rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700" style={{backgroundColor: '#7C3AED'}}>
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Header White.svg" 
                  alt="Hyperkit Header White" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Bottom Right - Hyperkit Abstract p-b */}
            <div className="rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700" style={{backgroundColor: '#7C3AED'}}>
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract p-b.svg" 
                  alt="Hyperkit Abstract p-b" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "October",
      subtitle: "Week 2",
      titleSize: "text-8xl md:text-8xl",
      subtitleSize: "text-5xl md:text-3xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-green-500/30">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-white text-3xl font-bold" style={{fontFamily: 'Be Vietnam Pro'}}>
              UI/UX & Landing Page
            </h3>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full border border-green-500/50">
              ✓ Completed
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Launch redesigned landing page and onboarding flow. Validate accessibility. Create wireframes/prototypes for AI project generation.
          </p>
          {/* 2x2 Grid - Page Design Mockups */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left - Product Page Mockup */}
            <div className="rounded-lg p-2 relative overflow-hidden aspect-square border border-gray-700" style={{backgroundColor: '#7C3AED'}}>
              <div className="relative z-10 w-full h-full">
                <img 
                  src="/UI/Design/Product Page.png" 
                  alt="Product Page Design" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Top Right - Launch App Page Mockup */}
            <div className="rounded-lg p-2 relative overflow-hidden aspect-square border border-gray-700" style={{backgroundColor: '#7C3AED'}}>
              <div className="relative z-10 w-full h-full">
                <img 
                  src="/UI/Design/Launch App Page.png" 
                  alt="Launch App Page Design" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Bottom Left - Landing Page Mockup */}
            <div className="rounded-lg p-2 relative overflow-hidden aspect-square border border-gray-700" style={{backgroundColor: '#7C3AED'}}>
              <div className="relative z-10 w-full h-full">
                <img 
                  src="/UI/Design/Landing page.png" 
                  alt="Landing Page Design" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Bottom Right - Build Page Mockup */}
            <div className="rounded-lg p-2 relative overflow-hidden aspect-square border border-gray-700" style={{backgroundColor: '#7C3AED'}}>
              <div className="relative z-10 w-full h-full">
                <img 
                  src="/UI/Design/Build page.png" 
                  alt="Build Page Design" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "October",
      subtitle: "Week 3",
      titleSize: "text-8xl md:text-8xl",
      subtitleSize: "text-5xl md:text-3xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-green-500/30">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-white text-3xl font-bold" style={{fontFamily: 'Be Vietnam Pro'}}>
              AI & Module Development
            </h3>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full border border-green-500/50">
              ✓ Completed
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Integrate selected AI models. Build and test artifact/local code generator. Start customizable module editor. Set up backend logging.
          </p>
          {/* 2x2 Grid - Image Placeholders for AI & Module Development */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left - AI Models Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/UI/Design/AI_Models.png" 
                  alt="AI Models Integration" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Top Right - Code Generator Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/UI/Design/code-generator-smart-contract.png" 
                  alt="Code Generator" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Bottom Left - Module Editor Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/UI/Design/Drag_and_drop.png" 
                  alt="Module Editor" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
      </div>
      
            {/* Bottom Right - Backend Logging Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/UI/Design/Backend_Logging.png" 
                  alt="Backend Logging" 
                  className="w-full h-full object-cover rounded-lg"
                />
        </div>
        </div>
      </div>
    </div>
  )
    },
    {
      title: "October",
      subtitle: "Week 4",
      titleSize: "text-8xl md:text-8xl",
      subtitleSize: "text-5xl md:text-3xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-green-500/30">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-white text-3xl font-bold" style={{fontFamily: 'Be Vietnam Pro'}}>
              Customization & Release
            </h3>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full border border-green-500/50">
              ✓ Completed
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Integrate drag and drop tools. Release first dashboard and blockchain dApps. MVP backend integration. Security/node validation for AI outputs. Prepare demos/videos for launch.
          </p>
          {/* 2x2 Grid - Image Placeholders for Customization & Release */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left - Drag & Drop Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/UI/Design/Drag_and_drop.png" 
                  alt="Drag & Drop Tools" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Top Right - Dashboard Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/UI/Design/Scaffold_AI_Builder.png" 
                  alt="First Dashboard" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Bottom Left - Backend Integration Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/UI/Design/CLI-Visual-Overview.png" 
                  alt="Backend Integration" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Bottom Right - Security Validation Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/UI/Design/How-HyperAgent-Manages-Settings.png" 
                  alt="Security Validation" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== MONTH 2: November 2025 - HyperKit Expansion ==========
    {
      title: "November",
      subtitle: "2025",
      titleSize: "text-7xl md:text-8xl",
      subtitleSize: "text-5xl md:text-4xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-yellow-500/30">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-white text-3xl font-bold" style={{fontFamily: 'Be Vietnam Pro'}}>
              HyperKit Expansion
            </h3>
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-semibold rounded-full border border-yellow-500/50">
              In Progress
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Release Python SDK, expand CLI tool, begin vault/swap smart contract development, launch visual dashboard Beta, and onboard 25+ new developers.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/UI/Design/python_sdk.png" 
                  alt="Python SDK" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/UI/Design/CLI-Visual-Overview.png" 
                  alt="CLI Tool Expansion" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Vault/Swap Contracts" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Visual Dashboard Beta" 
                  className="w-full h-full object-contain p-8"
                />
        </div>
        </div>
      </div>
    </div>
  )
    },
    // ========== MONTH 3: December 2025 - Feature Broadening & Community Build-Out ==========
    {
      title: "December",
      subtitle: "2025",
      titleSize: "text-7xl md:text-8xl",
      subtitleSize: "text-5xl md:text-4xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-blue-500/30">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-white text-3xl font-bold" style={{fontFamily: 'Be Vietnam Pro'}}>
              Feature Broadening & Community Build-Out
            </h3>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full border border-blue-500/50">
              Planned
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Complete vault/swapping contracts on public testnet, add cross-chain bridging via Metis SDK v2, improve dashboard, and host community workshops.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Testnet Contracts" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Cross-Chain Bridging" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Dashboard Improvements" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Community Workshop" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== MONTH 4: January 2026 - Security, Governance, Advanced Interoperability ==========
    {
      title: "2026",
      subtitle: "January",
      titleSize: "text-8xl md:text-9xl",
      subtitleSize: "text-5xl md:text-4xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-white text-3xl font-bold" style={{fontFamily: 'Be Vietnam Pro'}}>
              Security, Governance & Advanced Interoperability
            </h3>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-semibold rounded-full border border-purple-500/50">
              Planned
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Finalize audited contracts, deploy governance system Beta, integrate additional chain (Ethereum/Solana Testnet), and enhance community engagement.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Audited Contracts" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Governance System Beta" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Multi-Chain Integration" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Community Leaderboard" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== MONTH 5: February 2026 - Mainnet Prep, Publicity, and Funding Initiatives ==========
    {
      title: "February",
      subtitle: "2026",
      titleSize: "text-8xl md:text-9xl",
      subtitleSize: "text-5xl md:text-4xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-orange-500/30">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-white text-3xl font-bold" style={{fontFamily: 'Be Vietnam Pro'}}>
              Mainnet Prep, Publicity & Funding Initiatives
            </h3>
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-semibold rounded-full border border-orange-500/50">
              Planned
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Launch CLI/SDK/dashboard Release Candidates for mainnet, publish mainnet bridging contracts, kick off grant application window, and secure partnerships.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Mainnet Release Candidates" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Mainnet Bridging Contracts" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Grant Application Program" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Strategic Partnerships" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    // ========== MONTH 6: March 2026 - v1 Launch, Public Beta, Ecosystem Reports ==========
    {
      title: "March",
      subtitle: "2026",
      titleSize: "text-8xl md:text-9xl",
      subtitleSize: "text-5xl md:text-4xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-pink-500/30">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-white text-3xl font-bold" style={{fontFamily: 'Be Vietnam Pro'}}>
              v1 Launch, Public Beta & Ecosystem Reports
            </h3>
            <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-sm font-semibold rounded-full border border-pink-500/50">
              Planned
            </span>
          </div>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Launch HyperKit v1.0.0, publicly announce launch across major channels, allocate all public grants, and publish ecosystem reports.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="HyperKit v1.0.0 Launch" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Public Launch Announcement" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Grant Allocation" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square border border-gray-700">
              <div className="relative z-10 flex items-center justify-center h-full">
                <img 
                  src="/logo/brand/hyperkit/Hyperkit Abstract.svg" 
                  alt="Ecosystem Reports" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
  ];

  return <Timeline data={timelineData} />;
};

export default RoadmapTimeline;