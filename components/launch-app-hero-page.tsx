'use client';

import { useState, useRef, useCallback, memo } from 'react';

const LaunchAppHeroPage = memo(function LaunchAppHeroPage() {
  const [query, setQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = useCallback(async () => {
    if (!query.trim() || isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      // Redirect to ai.hyperionkit.xyz
      window.location.href = 'https://ai.hyperionkit.xyz';
    } catch (error) {
      console.error('Error submitting query:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [query, isSubmitting]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }, [handleSubmit]);

  const handleTextareaResize = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + 'px';
  }, []);
  
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20">
      <div className="w-full max-w-4xl space-y-3 sm:space-y-4">
        {/* Top Bar */}
        <div className="relative">
          <div className="h-auto min-h-[80px] sm:h-20 lg:h-24 bg-transparent rounded-lg shadow-2xl py-4 sm:py-0" />
          {/* Text overlay with transparent background */}
          <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4">
            <h1 className="text-white text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide bg-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] text-center leading-tight" style={{fontFamily: 'Inter'}}>
              What build today?
            </h1>
          </div>
          {/* White separator line */}
          <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-7 left-4 right-4 sm:left-8 sm:right-8 lg:left-15 lg:right-15 h-0.5 sm:h-1 bg-white rounded-full" />
        </div>
        
        {/* Bottom Bar */}
        <div className="relative mt-8 sm:mt-10 lg:mt-12">
          <div className="h-auto min-h-[80px] sm:h-20 lg:h-25 bg-transparent rounded-lg shadow-2xl py-4 sm:py-0" />
          {/* Text overlay with transparent background */}
          <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4">
            <h2 className="text-white text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide bg-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] text-center leading-tight" style={{fontFamily: 'Inter'}}>
              AI That's Made for You
            </h2>
          </div>
        </div>
        
        {/* Chat UI Section */}
        <div className="mt-8 sm:mt-10 lg:mt-12 mb-8 sm:mb-10 lg:mb-12 px-2 sm:px-4 pt-12 sm:pt-16 lg:pt-25">
          <div className="w-full max-w-6xl mx-auto shadow-[0_0_300px_rgba(124,58,237,0.6)] sm:shadow-[0_0_400px_rgba(124,58,237,0.7)] lg:shadow-[0_0_500px_rgba(124,58,237,0.8)] shadow-purple-500/70">
            {/* Upload Interface Container */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 lg:p-6">
              {/* Textfield and Upload Button */}
              <div className="flex justify-between items-start mb-4 sm:mb-5 lg:mb-6 gap-2 sm:gap-3 lg:gap-4">
                <div className="flex-1 bg-transparent rounded-lg">
                  <textarea 
                    ref={textareaRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onInput={handleTextareaResize}
                    placeholder="Ask Alith to create a dashboard"
                    className="w-full min-h-[40px] max-h-32 px-3 sm:px-4 py-2 text-base sm:text-lg font-medium text-gray-600 bg-transparent border-none outline-none placeholder-gray-500 resize-none overflow-hidden focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    rows={1}
                    disabled={isSubmitting}
                  />
                </div>
                <button 
                  onClick={handleSubmit}
                  disabled={!query.trim() || isSubmitting}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
                  aria-label="Submit query"
                >
                  {isSubmitting ? (
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                      <path d="M18 14.9314L12.3811 9.3125L6.76221 14.9314" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  )}
                </button>
              </div>
              
              {/* File Thumbnails */}
              <div className="flex gap-1 sm:gap-1.5 flex-wrap">
                {/* Plus Icon */}
                <button className="p-1.5 sm:p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-transparent rounded flex items-center justify-center">
                    <img src="/icons/launch-app/chat-page/plus.png" alt="Plus" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>
                
                {/* Supabase Icon */}
                <button className="p-1.5 sm:p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-transparent rounded flex items-center justify-center">
                    <img src="/icons/launch-app/chat-page/supabase.png" alt="Supabase" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>
                
                {/* Build Alt Icon */}
                <button className="p-1.5 sm:p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-transparent rounded flex items-center justify-center">
                    <img src="/icons/launch-app/chat-page/build-alt.png" alt="Build" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>
                
                {/* History Icon */}
                <button className="p-1.5 sm:p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-transparent rounded flex items-center justify-center">
                    <img src="/icons/launch-app/chat-page/history.png" alt="History" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>
                
                {/* AI Icon */}
                <button className="p-1.5 sm:p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-transparent rounded flex items-center justify-center">
                    <img src="/icons/launch-app/chat-page/ai.png" alt="AI" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LaunchAppHeroPage;