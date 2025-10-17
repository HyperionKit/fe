"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Progress Bar Component
const ProgressBar = ({ progress, phase }: { progress: number; phase: string }) => {
  const progressBarWidth = Math.min(progress, 100);
  
  // Determine status based on progress
  const getStatus = (progress: number) => {
    if (progress >= 100) return { status: 'Completed', color: 'text-green-400', bgColor: 'bg-green-500' };
    if (progress > 0) return { status: 'In Progress', color: 'text-yellow-400', bgColor: 'bg-yellow-500' };
    return { status: 'Not Started', color: 'text-red-400', bgColor: 'bg-red-500' };
  };
  
  const statusInfo = getStatus(progress);
  
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400" style={{fontFamily: 'Inter'}}>
            {phase} Progress
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${statusInfo.color} ${statusInfo.bgColor} bg-opacity-20`} style={{fontFamily: 'Inter'}}>
            {statusInfo.status}
          </span>
        </div>
        <span className="text-sm font-semibold text-white" style={{fontFamily: 'Inter'}}>
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${statusInfo.bgColor}`}
          initial={{ width: 0 }}
          animate={{ width: `${progressBarWidth}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

interface TimelineEntry {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  titleSize?: string;
  subtitleSize?: string;
  progress?: number;
  phase?: string;
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
  // Calculate progress based on actual project files
  const calculateProgress = (criteria: string[]) => {
    // Based on actual project analysis from the Gantt timeline script
    const progressMap: { [key: string]: number } = {
      'logo': 100, // Logo files exist in public/logo/brand/hyperkit/
      'theme': 75, // Theme files exist in app/globals.css and components/
      'docs': 50, // Some docs exist in reports/ and scripts/
      'landing': 75, // Landing page exists in app/page.tsx and components/hero-page.tsx
      'a11y': 0, // No accessibility tests yet
      'tests': 0, // No test files yet
      'ai': 25, // AI components exist in components/ai-chat-page.tsx and app/ai/
      'backend': 0, // No backend files yet
      'modules': 0, // No module editor yet
      'preview': 0, // No preview functionality yet
      'nlp': 0, // No NLP integration yet
      'dashboard': 0, // No dashboard yet
      'security': 0, // No security scanning yet
      'dragdrop': 0, // No drag-drop library yet
      'early-access': 0, // No early access program yet
      'integration-docs': 0 // No integration docs yet
    };
    
    const totalProgress = criteria.reduce((acc, criterion) => {
      const key = criterion.toLowerCase().replace(/[^a-z]/g, '');
      return acc + (progressMap[key] || 0);
    }, 0);
    
    return Math.round(totalProgress / criteria.length);
  };

  const timelineData: TimelineEntry[] = [
    {
      title: "2025",
      subtitle: "October, Week 1",
      titleSize: "text-8xl md:text-9xl",
      subtitleSize: "text-5x1 md:text-4xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-white text-3xl font-bold mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>
            Rebranding & Planning
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Finalize new logo and themes. Outline supported blockchain project types.
          </p>
          <ProgressBar progress={calculateProgress(['logo', 'theme', 'docs'])} phase="Rebranding & Planning" />
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
      subtitleSize: "text-5x1 md:text-3xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-white text-3xl font-bold mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>
            UI/UX & Landing Page
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Launch redesigned landing page and onboarding flow. Validate accessibility. Create wireframes/prototypes for AI project generation.
          </p>
          <ProgressBar progress={calculateProgress(['landing', 'theme', 'a11y'])} phase="UI/UX & Landing Page" />
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
      subtitleSize: "text-5x1 md:text-3xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-white text-3xl font-bold mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>
            AI & Module Development
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Integrate selected AI models. Build and test artifact/local code generator. Start customizable module editor. Set up backend logging.
          </p>
          <ProgressBar progress={calculateProgress(['ai', 'backend', 'modules'])} phase="AI & Module Development" />
          {/* 2x2 Grid - Image Placeholders for AI & Module Development */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left - AI Models Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                }}></div>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="w-16 h-16 bg-gray-600 rounded-lg animate-pulse"></div>
              </div>
            </div>
            
            {/* Top Right - Code Generator Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                }}></div>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="w-16 h-16 bg-gray-600 rounded-lg animate-pulse"></div>
              </div>
            </div>
            
            {/* Bottom Left - Module Editor Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                }}></div>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="w-16 h-16 bg-gray-600 rounded-lg animate-pulse"></div>
              </div>
      </div>
      
            {/* Bottom Right - Backend Logging Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                }}></div>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="w-16 h-16 bg-gray-600 rounded-lg animate-pulse"></div>
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
      subtitleSize: "text-5x1 md:text-3xl",
      content: (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-white text-3xl font-bold mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>
            Customization & Release
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed" style={{fontFamily: 'Inter'}}>
            Integrate drag and drop tools. Release first dashboard and blockchain dApps. MVP backend integration. Security/node validation for AI outputs. Prepare demos/videos for launch.
          </p>
          <ProgressBar progress={calculateProgress(['preview', 'dashboard', 'security', 'dragdrop', 'early-access'])} phase="Customization & Release" />
          {/* 2x2 Grid - Image Placeholders for Customization & Release */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left - Drag & Drop Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                }}></div>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="w-16 h-16 bg-gray-600 rounded-lg animate-pulse"></div>
              </div>
            </div>
            
            {/* Top Right - Dashboard Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                }}></div>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="w-16 h-16 bg-gray-600 rounded-lg animate-pulse"></div>
              </div>
            </div>
            
            {/* Bottom Left - Backend Integration Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                }}></div>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="w-16 h-16 bg-gray-600 rounded-lg animate-pulse"></div>
              </div>
      </div>
      
            {/* Bottom Right - Security Validation Image */}
            <div className="bg-gray-800 rounded-lg p-4 relative overflow-hidden aspect-square">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                }}></div>
              </div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="w-16 h-16 bg-gray-600 rounded-lg animate-pulse"></div>
        </div>
        </div>
      </div>
    </div>
  )
}
  ];

  return <Timeline data={timelineData} />;
};

export default RoadmapTimeline;