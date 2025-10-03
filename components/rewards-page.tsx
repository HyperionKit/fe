export default function RewardPage() {
  return (
    <div className="min-h-auto bg-black px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Title and Description */}
        <div className="flex flex-col items-center gap-3 mb-16 text-center">
          <h2 className="text-6xl font-bold text-white leading-tight" style={{fontFamily: 'Inter'}}>
            How Earn Recognition & Rewards?
          </h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl" style={{fontFamily: 'Inter'}}>
            Earn NFTs, tokens, and exclusive access through our point-based contribution system
          </p>
        </div>

        {/* Main Content - Left card and right grid */}
        <div className="grid grid-cols-2 gap-16">
          {/* Left - Large rounded card with shadow */}
          <div className="bg-black-400 rounded-3xl h-80 w-auto p-8 flex items-start justify-start shadow-2xl shadow-gray-900 relative overflow-hidden">
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
            <div className="flex flex-col space-y-1 pt-40 pb-25 pl-1 pr-1 z-15">
              <div className="text-white text-xs font-normal leading-relaxed text-left" style={{fontFamily: 'Inter'}}>
                • Receive priority access to future Hyperion network event Badge holders get marketing recognition
              </div>
              <div className="text-white text-xs font-normal leading-relaxed text-left" style={{fontFamily: 'Inter'}}>
                • Receive badges based on your objective and verifiable accomplishments
              </div>
              <div className="text-white text-xs font-normal leading-relaxed text-left" style={{fontFamily: 'Inter'}}>
                • Badge holders get marketing recognition
              </div>
              <div className="text-white text-xs font-normal leading-relaxed text-left" style={{fontFamily: 'Inter'}}>
                • Get Exclusive opportunities in role our tiered badge system
              </div>
            </div>
          </div>

          {/* Right - Grid section */}
          <div className="flex flex-col gap-4">
            {/* Small blue box on top */}
            <div className="bg-transparent h-16 w-50 flex items-center justify-left">
              <span className="text-white text-6xl font-regular" style={{fontFamily: 'Inter'}}>Roles</span>
            </div>
            
            {/* Three boxes in a row */}
            <div className="grid grid-cols-3 gap-4">
              {/* First box - HyperContributor */}
              <div className="bg-gradient-to-br from-[#0C0C0D] to-[#7C3AED] h-58 w-58 rounded-lg p-4 shadow-2xl shadow-gray-900 hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-semibold mb-2" style={{fontFamily: 'Inter'}}>HyperContributor</h3>
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
              <div className="bg-gradient-to-br from-[#3D3B40] to-[#7C3AED] h-58 w-58 rounded-lg p-4 shadow-2xl shadow-gray-900 hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-semibold mb-2" style={{fontFamily: 'Inter'}}>HyperCoder</h3>
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
              <div className="bg-gradient-to-br from-[#1A1C1A] to-[#7C3AED] h-58 w-58 rounded-lg p-4 shadow-2xl shadow-gray-900 hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-semibold mb-2" style={{fontFamily: 'Inter'}}>HyperDeveloper</h3>
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