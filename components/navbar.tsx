export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black w-full">
      <div className="max-w-6xl mx-auto flex items-center px-8 py-3 gap-4">
        {/* Logo - Hyperkit Header White */}
        <div className="flex items-center">
            <img 
                src="/logo/brand/hyperkit/Hyperkit Header White.svg" 
                alt="Hyperkit" 
                className="h-18 w-auto"
            />
        </div>
        
        {/* Spacer */}
        <div className="w-12"></div>
        
        {/* Navigation Links */}
        <div className="flex items-center flex-1 justify-center gap-12">
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/foundation.svg" alt="Foundation" className="w-4 h-4" />
            Foundation
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/products.png" alt="Products" className="w-4 h-4" />
            Products
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/explore.png" alt="Explore" className="w-4 h-4" />
            Explore
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/roadmap.png" alt="Roadmap" className="w-4 h-4" />
            Roadmap
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/build.svg" alt="Build" className="w-4 h-4" />
            Build
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium" style={{fontFamily: 'Be Vietnam Pro'}}>
            <img src="/icons/navbar/docs.svg" alt="Docs" className="w-4 h-4" />
            Docs
          </a>
        </div>
        
        {/* Spacer */}
        <div className="w-8"></div>
        
        {/* Launch App Button */}
        <button className="bg-transparent text-white px-8 py-2 rounded-lg font-semibold hover:bg-gray-0 transition-colors whitespace-nowrap" style={{fontFamily: 'Be Vietnam Pro'}}>
          Launch App
        </button>
      </div>
    </nav>
  );
}