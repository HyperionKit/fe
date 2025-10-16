'use client';

export default function LaunchAppHeroPage() {
  return (
    <div className="min-h-screen bg-transparent flex items-cente justify-center px-1 pt-20">
      <div className="w-full max-w-4xl space-y-4">
        {/* Top Bar */}
        <div className="relative">
          <div className="h-24 bg-transparent rounded-lg shadow-2xl" />
          {/* Text overlay with transparent background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-9xl sm:text-8xl md:text-7xl font-bold tracking-wide bg-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" style={{fontFamily: 'Inter'}}>
              What build today?
            </h1>
          </div>
          {/* White separator line */}
          <div className="absolute -bottom-7 left-0 right-0 w-auto h-1 bg-white rounded-full mx-15" />
        </div>
        {/* Bottom Bar */}
        <div className="relative">
          <div className="h-25 bg-transparent rounded-lg shadow-2xl mt-6" />
          {/* Text overlay with transparent background */}
          <div className="absolute inset-0 flex items-center justify-center mt-6">
            <h2 className="text-white text-9xl sm:text-8xl md:text-7xl font-bold tracking-wide bg-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" style={{fontFamily: 'Inter'}}>
              AI Thats Make for You
            </h2>
          </div>
        </div>
        
        {/* Chat UI Section */}
        <div className="mt-12 mb-12 px-1 pt-25">
          <div className="w-full max-w-6xl mx-auto shadow-[0_0_500px_rgba(124,58,237,0.8)] shadow-purple-500/70">
            {/* Upload Interface Container */}
            <div className="bg-gray-50 rounded-2xl shadow-2xl p-6">
              {/* Textfield and Upload Button */}
              <div className="flex justify-between items-start mb-6 gap-4">
                <div className="flex-1 bg-transparent rounded-lg">
                  <textarea 
                    placeholder="Ask Alith to create a dashboard"
                    className="w-full min-h-[40px] max-h-32 px-4 py-2 text-lg font-medium text-gray-600 bg-transparent border-none outline-none placeholder-gray-500 resize-none overflow-hidden"
                    rows={1}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = 'auto';
                      target.style.height = target.scrollHeight + 'px'  ;
                    }}
                  />
                </div>
                <button className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-auto text-white">
                    <path d="M18 14.9314L12.3811 9.3125L6.76221 14.9314" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
              
              {/* File Thumbnails */}
              <div className="flex gap-1">
                {/* Plus Icon */}
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-4 h-4 bg-transparent rounded flex items-center justify-center">
                    <img src="/icons/launch-app/chat-page/plus.png" alt="Plus" className="w-4 h-4" />
                  </div>
                </button>
                
                {/* Supabase Icon */}
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-4 h-4 bg-transparent rounded flex items-center justify-center">
                    <img src="/icons/launch-app/chat-page/supabase.png" alt="Supabase" className="w-4 h-4" />
                  </div>
                </button>
                
                {/* Build Alt Icon */}
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-4 h-4 bg-transparent rounded flex items-center justify-center">
                    <img src="/icons/launch-app/chat-page/build-alt.png" alt="Build" className="w-4 h-4" />
                  </div>
                </button>
                
                {/* History Icon */}
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-4 h-4 bg-transparent rounded flex items-center justify-center">
                    <img src="/icons/launch-app/chat-page/history.png" alt="History" className="w-4 h-4" />
                  </div>
                </button>
                
                {/* AI Icon */}
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-4 h-4 bg-transparent rounded flex items-center justify-center">
                    <img src="/icons/launch-app/chat-page/ai.png" alt="AI" className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}