'use client';

import { LazyVideoBackground } from '@/components/ui/lazy-video-background';

export default function CardPage() {
  return (
    <div className="w-full min-h-screen bg-black" style={{margin: 0, padding: 0, maxWidth: '100vw', overflow: 'hidden'}}>
      <div className="w-full h-full" style={{margin: 0, padding: 0}}>
        {/* Mobile Layout - Stacked Cards */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 gap-0 min-h-screen">
            {/* Card 1 - Mobile Full Width */}
            <div className="bg-black-400 rounded-none p-4 sm:p-6 relative overflow-hidden min-h-[300px] sm:min-h-[400px]">
              <LazyVideoBackground
                src="/videos/composable-cross-chain.mp4"
                priority={true}
                className="absolute inset-0"
                style={{
                  top: '-5%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120%',
                  height: '120%'
                }}
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight" style={{fontFamily: 'Inter'}}>
                  Composable Cross-Chain Ecosystem
                </h3>
                <p className="text-white text-sm sm:text-base leading-relaxed font-normal" style={{fontFamily: 'Inter'}}>
                  Build on Hyperion's Interoperable Future. upon other apps in the Metis ecosystem.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center z-10">
                <span className="text-white text-xs sm:text-sm font-medium mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
                <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 sm:w-4 sm:h-4 rotate-180" />
              </div>
            </div>

            {/* Card 2 - Mobile */}
            <div className="bg-black-400 rounded-none p-4 sm:p-6 relative overflow-hidden min-h-[250px] sm:min-h-[300px]">
              <LazyVideoBackground
                src="/videos/ship-faster-components.mp4"
                className="absolute inset-0"
                style={{
                  top: '0%',
                  left: '0%',
                  width: '120%',
                  height: '120%'
                }}
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-3 leading-tight" style={{fontFamily: 'Inter'}}>
                  Ship Faster with Standard Components
                </h3>
                <p className="text-white text-xs sm:text-sm leading-tight font-normal mb-3" style={{fontFamily: 'Inter'}}>
                  Faster Focus on Innovation, Not Setup. Remove complexity with standard components, so you can focus on making your app stand out.
                </p>
                <div className="flex items-center">
                  <span className="text-white text-xs sm:text-sm font-medium mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
                  <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
                </div>
              </div>
            </div>

            {/* Card 3 - Mobile */}
            <div className="bg-black-500 rounded-none p-4 sm:p-6 relative overflow-hidden min-h-[250px] sm:min-h-[300px]">
              <LazyVideoBackground
                src="/videos/ai-defi-synergy.mp4"
                className="absolute inset-0"
                style={{
                  top: '-10%',
                  left: '0%',
                  width: '120%',
                  height: '120%'
                }}
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2 leading-tight" style={{fontFamily: 'Inter'}}>
                  AI and DeFi Synergy
                </h3>
                <p className="text-white text-sm sm:text-base leading-relaxed font-normal mb-4" style={{fontFamily: 'Inter'}}>
                  AI meets DeFi. Power your Apps with HyperKit's Tools.
                </p>
                <div className="flex items-center">
                  <span className="text-white text-xs sm:text-sm font-medium mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
                  <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
                </div>
              </div>
            </div>

            {/* Card 4 - Mobile */}
            <div className="bg-black-600 rounded-none p-4 sm:p-6 relative overflow-hidden min-h-[250px] sm:min-h-[300px]">
              <LazyVideoBackground
                src="/videos/serverless-deployment.mp4"
                className="absolute inset-0"
                style={{
                  top: '0%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120%',
                  height: '120%'
                }}
              />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-4 leading-tight" style={{fontFamily: 'Inter'}}>
                  Serverless Deployment
                </h3>
                <p className="text-white text-xs sm:text-sm leading-relaxed font-normal" style={{fontFamily: 'Inter'}}>
                  Just "npm create hyperkit" to start. Deploy DeFi Serverless One Command, Instant Results.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center z-10">
                <span className="text-white text-xs sm:text-sm font-medium mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
                <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Grid */}
        <div className="hidden lg:grid grid-rows-2 gap-0 h-screen w-full" style={{margin: 0, padding: 0, gridTemplateColumns: '40% 30% 30%'}}>
          {/* Card 1 - Main card - spans 2 rows, largest - Priority load */}
          <div className="bg-black-400 col-span-1 row-span-2 rounded-none p-8 relative overflow-hidden">
            <LazyVideoBackground
              src="/videos/composable-cross-chain.mp4"
              priority={true}
              className="absolute inset-0"
              style={{
                top: '-5%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120%',
                height: '120%'
              }}
            />
            <div className="absolute top-8 left-8 z-10">
              <h3 className="text-white text-2xl font-bold mb-6 leading-tight" style={{fontFamily: 'Inter'}}>
                Composable Cross-Chain Ecosystem
              </h3>
              <p className="text-white text-lg leading-relaxed font-normal" style={{fontFamily: 'Inter'}}>
                Build on Hyperion's Interoperable Future. upon other apps in the Metis ecosystem.
              </p>
            </div>
            <div className="absolute bottom-8 right-8 flex items-center z-10">
              <span className="text-white text-base font-medium mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
              <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-4 h-4 rotate-180" />
            </div>
          </div>
          
          {/* Card 2 - Top right - Lazy load with delay */}
          <div className="bg-black-400 col-span-1 row-span-1 rounded-none p-6 relative overflow-hidden">
            <LazyVideoBackground
              src="/videos/ship-faster-components.mp4"
              className="absolute inset-0"
              style={{
                top: '0%',
                left: '0%',
                width: '120%',
                height: '120%'
              }}
            />
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white text-lg font-bold mb-3 leading-relaxed" style={{fontFamily: 'Inter'}}>
                Ship Faster with Standard Components
              </h3>
              <p className="text-white text-xs leading-tight font-normal mb-3" style={{fontFamily: 'Inter'}}>
                Faster Focus on Innovation, Not Setup. Remove complexity with standard components, so you can focus on making your app stand out.
              </p>
              <div className="flex items-center">
                <span className="text-white text-sm font-medium mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
                <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
              </div>
            </div>
          </div>
          
          {/* Card 3 - Top right - Lazy load with delay */}
          <div className="bg-black-500 col-span-1 row-span-1 rounded-none p-6 relative overflow-hidden">
            <LazyVideoBackground
              src="/videos/ai-defi-synergy.mp4"
              className="absolute inset-0"
              style={{
                top: '-10%',
                left: '0%',
                width: '120%',
                height: '120%'
              }}
            />
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white text-2xl font-bold mb-2 leading-tight" style={{fontFamily: 'Inter'}}>
                AI and DeFi Synergy
              </h3>
              <p className="text-white text-lg leading-relaxed font-normal mb-4" style={{fontFamily: 'Inter'}}>
                AI meets DeFi. Power your Apps with HyperKit's Tools.
              </p>
              <div className="flex items-center">
                <span className="text-white text-sm font-medium mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
                <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
              </div>
            </div>
          </div>
          
          {/* Card 4 - Bottom right - spans 2 columns - Lazy load with delay */}
          <div className="bg-black-600 col-span-2 row-span-1 rounded-none p-6 relative overflow-hidden">
            <LazyVideoBackground
              src="/videos/serverless-deployment.mp4"
              className="absolute inset-0"
              style={{
                top: '0%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120%',
                height: '120%'
              }}
            />
            <div className="absolute bottom-15 left-6 z-10">
              <h3 className="text-white text-2xl font-bold mb-4 leading-tight" style={{fontFamily: 'Inter'}}>
                Serverless Deployment
              </h3>
              <p className="text-white text-sm leading-relaxed font-normal" style={{fontFamily: 'Inter'}}>
                Just "npm create hyperkit" to start. Deploy DeFi Serverless One Command, Instant Results.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 flex items-center z-10">
              <span className="text-white text-sm font-medium mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
              <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}