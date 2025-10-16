export default function DashboardHero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-5xl">
        {/* Dashboard Container */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl p-6">
          {/* Header with Logo and Control Buttons */}
          <div className="flex justify-between items-center mb-4">
            <div className="w-16 h-8 bg-blue-300 rounded-lg" />
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-blue-400 rounded" />
              <div className="w-6 h-6 bg-cyan-400 rounded" />
            </div>
          </div>
          
          {/* Grid of Cards */}
          <div className="grid grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-900 rounded-lg flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-blue-500 rounded w-16" />
                <div className="h-1.5 bg-blue-300 rounded w-full" />
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-900 rounded-lg flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-blue-500 rounded w-16" />
                <div className="h-1.5 bg-blue-300 rounded w-full" />
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-900 rounded-lg flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-blue-500 rounded w-16" />
                <div className="h-1.5 bg-blue-300 rounded w-full" />
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-900 rounded-lg flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-blue-500 rounded w-16" />
                <div className="h-1.5 bg-blue-300 rounded w-full" />
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-900 rounded-lg flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-blue-500 rounded w-16" />
                <div className="h-1.5 bg-blue-300 rounded w-full" />
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-900 rounded-lg flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-blue-500 rounded w-16" />
                <div className="h-1.5 bg-blue-300 rounded w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}