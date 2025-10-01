export default function TimelinePage() {
  return (
    <div className="min-h-auto bg-black px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Two stacked boxes */}
        <div className="flex flex-col gap-4 mb-12 items-center">
          <div className="bg-cyan-300 h-16 w-full max-w-lg rounded"></div>
          <div className="bg-blue-500 h-6 w-xl rounded"></div>
        </div>

        {/* Main Hero Section - Large cyan box */}
        <div className="bg-cyan-200 h-96 w-full rounded"></div>
      </div>
    </div>
  );
}