export default function LaunchAppHeroPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-4xl space-y-4">
        {/* Top Blue Bar */}
        <div className="relative">
          <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-2xl shadow-blue-500/30" />
          {/* White separator line */}
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white rounded-full mx-4" />
        </div>
        {/* Bottom Cyan Bar */}
        <div className="h-24 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-lg shadow-2xl shadow-cyan-400/30 mt-6" />
      </div>
    </div>
  );
}