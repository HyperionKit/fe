export default function RewardPage() {
  return (
    <div className="min-h-auto bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Title and Description */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{fontFamily: 'Inter'}}>
            How Earn Recognition & Rewards?
          </h2>
          <p className="text-white text-base sm:text-lg leading-relaxed max-w-3xl px-4" style={{fontFamily: 'Inter'}}>
            Earn NFTs, tokens, and exclusive access through our point-based contribution system
          </p>
        </div>

        {/* Main Content - Left card and right grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left - Large rounded card with shadow */}
          <div className="bg-black-400 rounded-2xl sm:rounded-3xl h-64 sm:h-72 lg:h-80 w-auto p-4 sm:p-6 lg:p-8 flex items-start justify-start shadow-2xl shadow-gray-900 relative overflow-hidden">
            {/* Spline 3D Background - Slime City */}
            <iframe
              src="https://my.spline.design/slimecity-uqRTMug2sKdZQpSpa9cJymPz/"
              className="absolute w-full h-full pointer-events-none"
              style={{ 
                border: 'none', 
                zIndex: 1,
                top: '-5%',
                left: '-15%',
                transform: 'translateX(-0%)',
                width: '120%',
                height: '120%'
              }}
            />
            <div className="flex flex-col space-y-2 sm:space-y-3 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-22 lg:pb-25 pl-1 pr-1 z-15">
              <div className="text-white text-xs sm:text-sm font-normal leading-relaxed text-left" style={{fontFamily: 'Inter'}}>
                • Receive priority access to future Hyperion network event Badge holders get marketing recognition
              </div>
              <div className="text-white text-xs sm:text-sm font-normal leading-relaxed text-left" style={{fontFamily: 'Inter'}}>
                • Receive badges based on your objective and verifiable accomplishments
              </div>
              <div className="text-white text-xs sm:text-sm font-normal leading-relaxed text-left" style={{fontFamily: 'Inter'}}>
                • Badge holders get marketing recognition
              </div>
              <div className="text-white text-xs sm:text-sm font-normal leading-relaxed text-left" style={{fontFamily: 'Inter'}}>
                • Get Exclusive opportunities in role our tiered badge system
              </div>
            </div>
          </div>

          {/* Right - Grid section */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Small blue box on top */}
            <div className="bg-transparent h-12 sm:h-16 flex items-center justify-left">
              <span className="text-white text-3xl sm:text-4xl lg:text-6xl font-regular" style={{fontFamily: 'Inter'}}>Roles</span>
            </div>
            
            {/* Three boxes in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {/* First box - HyperContributor */}
              <div className="bg-gradient-to-br from-[#0C0C0D] to-[#7C3AED] h-48 sm:h-52 lg:h-58 w-full rounded-lg p-3 sm:p-4 shadow-2xl shadow-gray-900 hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-white text-base sm:text-lg font-semibold mb-2" style={{fontFamily: 'Inter'}}>HyperContributor</h3>
                    <p className="text-gray-300 text-xs mb-3" style={{fontFamily: 'Inter'}}>Entry-level contributors who complete basic tasks</p>
                    <ul className="text-gray-300 text-xs space-y-1" style={{fontFamily: 'Inter'}}>
                      <li>• Basic token allocations</li>
                      <li>• Community access</li>
                      <li>• Testing participation</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-end mt-3">
                    <span className="text-white text-xs mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
                    <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
                  </div>
                </div>
              </div>

              {/* Second box - HyperCoder */}
              <div className="bg-gradient-to-br from-[#3D3B40] to-[#7C3AED] h-48 sm:h-52 lg:h-58 w-full rounded-lg p-3 sm:p-4 shadow-2xl shadow-gray-900 hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-white text-base sm:text-lg font-semibold mb-2" style={{fontFamily: 'Inter'}}>HyperCoder</h3>
                    <p className="text-gray-300 text-xs mb-3" style={{fontFamily: 'Inter'}}>Active developers with significant contributions</p>
                    <ul className="text-gray-300 text-xs space-y-1" style={{fontFamily: 'Inter'}}>
                      <li>• Enhanced token allocations</li>
                      <li>• Beta access</li>
                      <li>• Priority support</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-end mt-3">
                    <span className="text-white text-xs mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
                    <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
                  </div>
                </div>
              </div>

              {/* Third box - HyperDeveloper */}
              <div className="bg-gradient-to-br from-[#1A1C1A] to-[#7C3AED] h-48 sm:h-52 lg:h-58 w-full rounded-lg p-3 sm:p-4 shadow-2xl shadow-gray-900 hover:scale-105 transition-transform duration-300 hover:cursor-pointer sm:col-span-2 lg:col-span-1">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-white text-base sm:text-lg font-semibold mb-2" style={{fontFamily: 'Inter'}}>HyperDeveloper</h3>
                    <p className="text-gray-300 text-xs mb-3" style={{fontFamily: 'Inter'}}>Elite developers with maximum engagement</p>
                    <ul className="text-gray-300 text-xs space-y-1" style={{fontFamily: 'Inter'}}>
                      <li>• Maximum token allocations</li>
                      <li>• Governance rights</li>
                      <li>• Direct collaboration</li>
                      <li>• Exclusive opportunities</li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-end mt-3">
                    <span className="text-white text-xs mr-2" style={{fontFamily: 'Inter'}}>Learn more</span>
                    <img src="/icons/rewards-page/arrow-01.svg" alt="Arrow" className="w-3 h-3 rotate-180" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}