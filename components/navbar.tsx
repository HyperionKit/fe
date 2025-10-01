export default function Navbar() {
  return (
    <nav>
      <div className="max-w-7xl mx-auto flex items-center px-8 py-6 gap-4">
        {/* Logo - Cyan rectangle */}
        <div className="bg-cyan-200 p-4">
            <div className="w-32 h-6 bg-cyan-200"></div>
        </div>
        
        {/* Nav items and CTA together */}
        <div className="flex items-center flex-1 bg-cyan-100 px-4 py-2 justify-between">
          <div className="flex gap-8 items-center flex-1 justify-center">
            <div className="w-20 h-6 bg-blue-600"></div>
            <div className="w-20 h-6 bg-blue-800"></div>
            <div className="w-20 h-6 bg-gray-900 border-2 border-white"></div>
            <div className="w-20 h-6 bg-cyan-300"></div>
            <div className="w-20 h-6 bg-blue-500"></div>
            <div className="w-20 h-6 bg-blue-600"></div>
          </div>
          
          {/* CTA Button - Bright blue */}
          <div className="bg-blue-600 px-8 py-2">
              <div className="w-28 h-6 bg-blue-600"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}