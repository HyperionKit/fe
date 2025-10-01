export default function RewardPage() {
  return (
    <div className="min-h-auto bg-black px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Two stacked bars */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <div className="bg-cyan-300 h-8 w-full max-w-xl"></div>
          <div className="bg-cyan-400 h-3 w-full max-w-md"></div>
        </div>

        {/* Main Content - Left card and right grid */}
        <div className="grid grid-cols-2 gap-16">
          {/* Left - Large rounded card with shadow */}
          <div className="bg-sky-400 rounded-3xl h-56 shadow-2xl shadow-gray-900"></div>

          {/* Right - Grid section */}
          <div className="flex flex-col gap-6">
            {/* Small blue box on top */}
            <div className="bg-blue-600 h-8 w-24"></div>
            
            {/* Three boxes in a row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-600 h-32"></div>
              <div className="bg-cyan-200 h-32"></div>
              <div className="bg-cyan-400 h-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}