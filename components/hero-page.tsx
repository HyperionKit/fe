export default function HeroPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="mb-8">
          <div className="bg-blue-500 h-24 w-full max-w-lg rounded"></div>
        </div>

        {/* Two small boxes */}
        <div className="flex gap-2 mb-12">
          <div className="bg-cyan-300 h-7 w-40 rounded"></div>
          <div className="bg-blue-500 h-7 w-16 rounded"></div>
        </div>

        {/* Main Hero Section */}
        <div className="bg-sky-400 rounded-3xl p-32 mb-12 relative shadow-2xl shadow-white/40">
          {/* CTA Button in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-blue-600 h-10 w-36 rounded"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end">
          <div className="bg-cyan-400 h-10 w-44 rounded-lg"></div>
          
          <div className="flex flex-col items-end gap-4">
            <div className="bg-blue-600 h-16 w-96 rounded"></div>
            <div className="bg-cyan-300 h-10 w-28 rounded-lg"></div>
          </div>
        </div>
        <div className="mt-8 w-full bg-blue-600 h-24 rounded-lg">

        </div>
      </div>
    </div>
  );
}