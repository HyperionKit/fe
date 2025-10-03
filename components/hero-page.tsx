export default function HeroPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white leading-tight" style={{fontFamily: 'Inter'}}>
            Build DeFi, Bridge Chains,<br />
            Thrive in <span className="text-[#D68CFF]">Hyperion</span>
          </h1>
        </div>

        {/* Built on and backed by */}
        <div className="inline-flex items-center gap-3 mb-12 bg-gray-800 px-4 py-2 rounded-lg">
          <span className="text-white font-bold" style={{fontFamily: 'Inter'}}>Built on and backed by</span>
            <img 
              src="/logo/brand/metis/metis-blue-white-horizontal.svg" 
              alt="METIS" 
              className="h-8 w-auto"
            />
        </div>

        {/* Main Hero Section */}
        <div className="bg-sky-400 rounded-3xl p-70 mb-12 relative shadow-2xl shadow-white/40">
          {/* Play Demo Button in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-[40px] font-semibold hover:bg-gray-800 transition-colors" style={{fontFamily: 'Inter'}}>
              Play Demo
              <img src="/icons/demo/play.png" alt="Play" className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-start">
          {/* Command line instruction */}
          <div className="flex items-center">
            <div className="bg-transparent border border-white px-4 py-3 rounded-lg flex items-center gap-3">
              <span className="text-white font-mono text-sm" style={{fontFamily: 'Inter'}}>npm create hyperkit</span>
              <img src="/icons/actions/copy.png" alt="Copy" className="w-4 h-4" />
            </div>
          </div>
          
          {/* Right side content */}
          <div className="flex flex-col items-end gap-6 max-w-md">
            <p className="text-white text-lg text-right leading-relaxed" style={{fontFamily: 'Inter'}}>
              Modular tools and cross-chain magic with empowering developers to create, connect, and grow in minutes.
            </p>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold " style={{fontFamily: 'Inter'}}>
              Innovate now
            </button>
          </div>
        </div>
        {/* Trusted by the best */}
        <div className="mt-16 text-center">
          <p className="text-white text-sm mb-6" style={{fontFamily: 'Inter'}}>Trusted by the best</p>
          <div className="flex justify-center items-center gap-12">
            <div className="flex items-center gap-2">
              <img src="/logo/brand/metis/metis-blue-white-horizontal.svg" alt="METIS" className="h-12 w-auto" />
            </div>
            <div className="flex items-center gap-2">
              <img src="/logo/brand/hyperion/hyperion-logo-white.svg" alt="Hyperion" className="h-16 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}