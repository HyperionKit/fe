export default function ChatUi() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Upload Interface Container */}
        <div className="bg-gray-50 rounded-2xl shadow-2xl p-6">
          {/* Header with Progress Bar and Upload Button */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex-1 max-w-xs h-4 bg-blue-500 rounded-lg" />
            <button className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center ml-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </button>
          </div>
          
          {/* File Thumbnails */}
          <div className="flex gap-3">
            {/* File 1 - Two squares side by side */}
            <div className="flex gap-1">
              <div className="w-8 h-8 bg-blue-600 rounded" />
              <div className="w-8 h-8 bg-blue-600 rounded" />
            </div>
            
            {/* File 2 - Two squares side by side */}
            <div className="flex gap-1">
              <div className="w-8 h-8 bg-blue-600 rounded" />
              <div className="w-8 h-8 bg-blue-600 rounded" />
            </div>
            
            {/* File 3 - Single square */}
            <div className="w-8 h-8 bg-blue-600 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}