export default function HeroPage() {
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
            <img 
              src="/logo/brand/metis/metis-blue-white-horizontal.svg" 
              alt="METIS" 
              className="h-6 sm:h-8 w-auto"
            />
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="bg-sky-400 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 mb-8 sm:mb-12 relative shadow-2xl shadow-white/40 min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
          {/* Play Demo Button in center */}
          <div className="flex items-center justify-center">
            <button className="flex items-center gap-2 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full sm:rounded-[40px] font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base" style={{fontFamily: 'Inter'}}>
              Play Demo
              <img src="/icons/demo/play.png" alt="Play" className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-8">
          {/* Command line instruction */}
          <div className="flex items-center w-full lg:w-auto">
            <div className="bg-transparent border border-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center gap-2 sm:gap-3 w-full lg:w-auto">
              <span className="text-white font-mono text-xs sm:text-sm" style={{fontFamily: 'Inter'}}>npm create hyperkit</span>
              <img src="/icons/actions/copy.png" alt="Copy" className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            </div>
          </div>
          
          {/* Right side content */}
          <div className="flex flex-col items-center lg:items-end gap-4 sm:gap-6 max-w-md text-center lg:text-right">
            <p className="text-white text-base sm:text-lg leading-relaxed" style={{fontFamily: 'Inter'}}>
              Modular tools and cross-chain magic with empowering developers to create, connect, and grow in minutes.
            </p>
            <button className="bg-transparent border border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base" style={{fontFamily: 'Inter'}}>
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