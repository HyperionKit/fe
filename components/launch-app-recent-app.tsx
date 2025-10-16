export default function DashboardHero() {
  return (
    <div className="px-4 -mt-8">
      <div className="w-full max-w-5xl mx-auto">
        {/* Recent Apps Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          {/* Header with Logo and Control Buttons */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-gray-600 text-xl font-semibold" style={{fontFamily: 'Inter'}}>
              Recent Apps
            </h2>
            <div className="flex gap-1">
              <button className="bg-transparent text-gray-600 px-3 py-1 rounded flex items-center gap-1 hover:bg-gray-100 transition-colors">
                <span className="text-sm font-medium">View all</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Grid of Cards */}
          <div className="grid grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded" style={{
                  background: 'repeating-linear-gradient(45deg, #d1d5db, #d1d5db 2px, #9ca3af 2px, #9ca3af 4px)'
                }} />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-black font-bold text-sm">Application</h3>
                <p className="text-black text-xs">Description</p>
                <p className="text-gray-500 text-xs">last update: 2024/01/15 • Time: 14:30:25</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded" style={{
                  background: 'repeating-linear-gradient(45deg, #d1d5db, #d1d5db 2px, #9ca3af 2px, #9ca3af 4px)'
                }} />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-black font-bold text-sm">Application</h3>
                <p className="text-black text-xs">Description</p>
                <p className="text-gray-500 text-xs">last update: 2024/01/15 • Time: 14:30:25</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded" style={{
                  background: 'repeating-linear-gradient(45deg, #d1d5db, #d1d5db 2px, #9ca3af 2px, #9ca3af 4px)'
                }} />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-black font-bold text-sm">Application</h3>
                <p className="text-black text-xs">Description</p>
                <p className="text-gray-500 text-xs">last update: 2024/01/15 • Time: 14:30:25</p>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded" style={{
                  background: 'repeating-linear-gradient(45deg, #d1d5db, #d1d5db 2px, #9ca3af 2px, #9ca3af 4px)'
                }} />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-black font-bold text-sm">Application</h3>
                <p className="text-black text-xs">Description</p>
                <p className="text-gray-500 text-xs">last update: 2024/01/15 • Time: 14:30:25</p>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded" style={{
                  background: 'repeating-linear-gradient(45deg, #d1d5db, #d1d5db 2px, #9ca3af 2px, #9ca3af 4px)'
                }} />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-black font-bold text-sm">Application</h3>
                <p className="text-black text-xs">Description</p>
                <p className="text-gray-500 text-xs">last update: 2024/01/15 • Time: 14:30:25</p>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-300 rounded" style={{
                  background: 'repeating-linear-gradient(45deg, #d1d5db, #d1d5db 2px, #9ca3af 2px, #9ca3af 4px)'
                }} />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-black font-bold text-sm">Application</h3>
                <p className="text-black text-xs">Description</p>
                <p className="text-gray-500 text-xs">last update: 2024/01/15 • Time: 14:30:25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}