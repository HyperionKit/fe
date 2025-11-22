'use client';

import { LazyImageBackground } from '@/components/ui/lazy-image-background';

export default function CardPage() {
  return (
    <div className="w-full min-h-screen bg-black" style={{margin: 0, padding: 0, maxWidth: '100vw', overflow: 'hidden'}}>
      <div className="w-full h-full" style={{margin: 0, padding: 0}}>
        {/* Mobile Layout - Stacked Cards */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 gap-0 min-h-screen">
            {/* Card 1 - Mobile Full Width */}
            <div className="bg-black-400 rounded-none p-4 sm:p-6 relative overflow-hidden min-h-[300px] sm:min-h-[400px]">
              <LazyImageBackground
                src="/images/composable-cross-chain.jpeg"
                alt="Composable Cross-Chain"
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
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[2]"></div>
              
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-[11]">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight" style={{fontFamily: 'Inter', textShadow: '0 2px 12px rgba(0,0,0,0.95), 0 0 4px rgba(0,0,0,0.8)'}}>
                  Composable Cross-Chain Ecosystem
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-normal" style={{fontFamily: 'Inter', textShadow: '0 1px 8px rgba(0,0,0,0.9)'}}>
                  Build on Hyperion's Interoperable Future. upon other apps in the Metis ecosystem.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center z-[11] backdrop-blur-sm bg-black/30 px-3 py-2 rounded-lg">
                <span className="text-white text-xs sm:text-sm font-medium mr-2" style={{fontFamily: 'Inter', textShadow: '0 1px 4px rgba(0,0,0,0.9)'}}>Learn more</span>
                <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 sm:w-4 sm:h-4 rotate-180" />
              </div>
            </div>

            {/* Card 2 - Mobile */}
            <div className="bg-black-400 rounded-none p-4 sm:p-6 relative overflow-hidden min-h-[250px] sm:min-h-[300px]">
              <LazyImageBackground
                src="/images/ship-faster-components.jpeg"
                alt="Ship Faster Components"
                className="absolute inset-0"
                style={{
                  top: '0%',
                  left: '0%',
                  width: '120%',
                  height: '120%'
                }}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/40 z-[2]"></div>
              
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-[11] backdrop-blur-sm bg-black/20 p-4 rounded-lg max-w-[90%]">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-3 leading-tight" style={{fontFamily: 'Inter', textShadow: '0 2px 12px rgba(0,0,0,0.95), 0 0 4px rgba(0,0,0,0.8)'}}>
                  Ship Faster with Standard Components
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg leading-tight font-normal mb-3" style={{fontFamily: 'Inter', textShadow: '0 1px 8px rgba(0,0,0,0.9)'}}>
                  Faster Focus on Innovation, Not Setup. Remove complexity with standard components, so you can focus on making your app stand out.
                </p>
                <div className="flex items-center">
                  <span className="text-white text-xs sm:text-sm font-medium mr-2" style={{fontFamily: 'Inter', textShadow: '0 1px 4px rgba(0,0,0,0.9)'}}>Learn more</span>
                  <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
                </div>
              </div>
            </div>

            {/* Card 3 - Mobile */}
            <div className="bg-black-500 rounded-none p-4 sm:p-6 relative overflow-hidden min-h-[250px] sm:min-h-[300px]">
              <LazyImageBackground
                src="/images/ai-defi-synergy.jpg"
                alt="AI DeFi Synergy"
                className="absolute inset-0"
                style={{
                  top: '-10%',
                  left: '0%',
                  width: '120%',
                  height: '120%'
                }}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-[2]"></div>
              
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-[11] backdrop-blur-sm bg-black/20 p-4 rounded-lg max-w-[90%]">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 leading-tight" style={{fontFamily: 'Inter', textShadow: '0 2px 12px rgba(0,0,0,0.95), 0 0 4px rgba(0,0,0,0.8)'}}>
                  AI and DeFi Synergy
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-normal mb-4" style={{fontFamily: 'Inter', textShadow: '0 1px 8px rgba(0,0,0,0.9)'}}>
                  AI meets DeFi. Power your Apps with HyperKit's Tools.
                </p>
                <div className="flex items-center">
                  <span className="text-white text-xs sm:text-sm font-medium mr-2" style={{fontFamily: 'Inter', textShadow: '0 1px 4px rgba(0,0,0,0.9)'}}>Learn more</span>
                  <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
                </div>
              </div>
            </div>

            {/* Card 4 - Mobile */}
            <div className="bg-black-600 rounded-none p-4 sm:p-6 relative overflow-hidden min-h-[250px] sm:min-h-[300px]">
              <LazyImageBackground
                src="/images/serverless-deployment.jpeg"
                alt="Serverless Deployment"
                className="absolute inset-0"
                style={{
                  top: '0%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120%',
                  height: '120%'
                }}
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60 z-[2]"></div>
              
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-[11] backdrop-blur-sm bg-black/20 p-4 rounded-lg max-w-[85%]">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{fontFamily: 'Inter', textShadow: '0 2px 12px rgba(0,0,0,0.95), 0 0 4px rgba(0,0,0,0.8)'}}>
                  Serverless Deployment
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed font-normal" style={{fontFamily: 'Inter', textShadow: '0 1px 8px rgba(0,0,0,0.9)'}}>
                  Just "npm create hyperkit" to start. Deploy DeFi Serverless One Command, Instant Results.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center z-[11] backdrop-blur-sm bg-black/30 px-3 py-2 rounded-lg">
                <span className="text-white text-xs sm:text-sm font-medium mr-2" style={{fontFamily: 'Inter', textShadow: '0 1px 4px rgba(0,0,0,0.9)'}}>Learn more</span>
                <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Grid */}
        <div className="hidden lg:grid grid-rows-2 gap-0 h-screen w-full" style={{margin: 0, padding: 0, gridTemplateColumns: '40% 30% 30%'}}>
          {/* Card 1 - Main card - spans 2 rows, largest - Priority load */}
          <div className="bg-black-400 col-span-1 row-span-2 rounded-none p-8 relative overflow-hidden">
            <LazyImageBackground
              src="/images/composable-cross-chain.jpeg"
              alt="Composable Cross-Chain"
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
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[2]"></div>
            
            <div className="absolute top-8 left-8 z-[11] max-w-[80%]">
              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{fontFamily: 'Inter', textShadow: '0 4px 16px rgba(0,0,0,0.95), 0 0 8px rgba(0,0,0,0.8)'}}>
                Composable Cross-Chain Ecosystem
              </h3>
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-normal" style={{fontFamily: 'Inter', textShadow: '0 2px 10px rgba(0,0,0,0.9)'}}>
                Build on Hyperion's Interoperable Future. upon other apps in the Metis ecosystem.
              </p>
            </div>
            <div className="absolute bottom-8 right-8 flex items-center z-[11] backdrop-blur-md bg-black/40 px-4 py-3 rounded-lg">
              <span className="text-white text-base md:text-lg font-medium mr-2" style={{fontFamily: 'Inter', textShadow: '0 1px 6px rgba(0,0,0,0.9)'}}>Learn more</span>
              <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-4 h-4 rotate-180" />
            </div>
          </div>
          
          {/* Card 2 - Top right - Lazy load with delay */}
          <div className="bg-black-400 col-span-1 row-span-1 rounded-none p-6 relative overflow-hidden">
            <LazyImageBackground
              src="/images/ship-faster-components.jpeg"
              alt="Ship Faster Components"
              className="absolute inset-0"
              style={{
                top: '0%',
                left: '0%',
                width: '120%',
                height: '120%'
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/30 z-[2]"></div>
            
            <div className="absolute bottom-6 left-6 z-[11] backdrop-blur-sm bg-black/25 p-5 rounded-lg max-w-[90%]">
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-3 leading-relaxed" style={{fontFamily: 'Inter', textShadow: '0 2px 12px rgba(0,0,0,0.95), 0 0 6px rgba(0,0,0,0.8)'}}>
                Ship Faster with Standard Components
              </h3>
              <p className="text-white text-sm md:text-base lg:text-lg leading-tight font-normal mb-3" style={{fontFamily: 'Inter', textShadow: '0 1px 8px rgba(0,0,0,0.9)'}}>
                Faster Focus on Innovation, Not Setup. Remove complexity with standard components, so you can focus on making your app stand out.
              </p>
              <div className="flex items-center">
                <span className="text-white text-sm md:text-base font-medium mr-2" style={{fontFamily: 'Inter', textShadow: '0 1px 6px rgba(0,0,0,0.9)'}}>Learn more</span>
                <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
              </div>
            </div>
          </div>
          
          {/* Card 3 - Top right - Lazy load with delay */}
          <div className="bg-black-500 col-span-1 row-span-1 rounded-none p-6 relative overflow-hidden">
            <LazyImageBackground
              src="/images/ai-defi-synergy.jpg"
              alt="AI DeFi Synergy"
              className="absolute inset-0"
              style={{
                top: '-10%',
                left: '0%',
                width: '120%',
                height: '120%'
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-[2]"></div>
            
            <div className="absolute bottom-6 left-6 z-[11] backdrop-blur-sm bg-black/25 p-5 rounded-lg max-w-[90%]">
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-tight" style={{fontFamily: 'Inter', textShadow: '0 2px 12px rgba(0,0,0,0.95), 0 0 6px rgba(0,0,0,0.8)'}}>
                AI and DeFi Synergy
              </h3>
              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-normal mb-4" style={{fontFamily: 'Inter', textShadow: '0 1px 8px rgba(0,0,0,0.9)'}}>
                AI meets DeFi. Power your Apps with HyperKit's Tools.
              </p>
              <div className="flex items-center">
                <span className="text-white text-sm md:text-base font-medium mr-2" style={{fontFamily: 'Inter', textShadow: '0 1px 6px rgba(0,0,0,0.9)'}}>Learn more</span>
                <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
              </div>
            </div>
          </div>
          
          {/* Card 4 - Bottom right - spans 2 columns - Lazy load with delay */}
          <div className="bg-black-600 col-span-2 row-span-1 rounded-none p-6 relative overflow-hidden">
            <LazyImageBackground
              src="/images/serverless-deployment.jpeg"
              alt="Serverless Deployment"
              className="absolute inset-0"
              style={{
                top: '0%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120%',
                height: '120%'
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60 z-[2]"></div>
            
            <div className="absolute bottom-15 left-6 z-[11] backdrop-blur-sm bg-black/25 p-5 rounded-lg max-w-[70%]">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{fontFamily: 'Inter', textShadow: '0 4px 16px rgba(0,0,0,0.95), 0 0 8px rgba(0,0,0,0.8)'}}>
                Serverless Deployment
              </h3>
              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-normal" style={{fontFamily: 'Inter', textShadow: '0 2px 10px rgba(0,0,0,0.9)'}}>
                Just "npm create hyperkit" to start. Deploy DeFi Serverless One Command, Instant Results.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 flex items-center z-[11] backdrop-blur-md bg-black/40 px-4 py-3 rounded-lg">
              <span className="text-white text-sm md:text-base font-medium mr-2" style={{fontFamily: 'Inter', textShadow: '0 1px 6px rgba(0,0,0,0.9)'}}>Learn more</span>
              <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}