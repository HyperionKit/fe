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
      // TODO: Implement actual AI query logic
      console.log('Submitting query:', query);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
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
    <div className="min-h-screen bg-transparent flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
      <div className="w-full max-w-4xl space-y-4 sm:space-y-6">
        {/* Top Bar */}
        <div className="relative">
          <div className="h-16 sm:h-20 md:h-24 bg-transparent rounded-lg shadow-2xl" />
          {/* Text overlay with transparent background */}
          <div className="absolute inset-0 flex items-center justify-center px-2">
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide bg-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] text-center" style={{fontFamily: 'Inter'}}>
              What build today?
            </h1>
          </div>
          {/* White separator line */}
          <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-7 left-0 right-0 w-auto h-0.5 sm:h-1 bg-white rounded-full mx-4 sm:mx-8 md:mx-15" />
        </div>
        {/* Bottom Bar */}
        <div className="relative">
          <div className="h-16 sm:h-20 md:h-25 bg-transparent rounded-lg shadow-2xl mt-4 sm:mt-6" />
          {/* Text overlay with transparent background */}
          <div className="absolute inset-0 flex items-center justify-center mt-4 sm:mt-6 px-2">
            <h2 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide bg-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] text-center" style={{fontFamily: 'Inter'}}>
              AI Thats Make for You
            </h2>
          </div>
        </div>
        
        {/* Chat UI Section */}
        <div className="mt-8 sm:mt-12 mb-8 sm:mb-12 px-2 sm:px-4 pt-12 sm:pt-20 md:pt-25">
          <div className="w-full max-w-6xl mx-auto shadow-[0_0_500px_rgba(124,58,237,0.8)] shadow-purple-500/70">
            {/* Upload Interface Container */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6">
              {/* Textfield and Upload Button */}
              <div className="flex justify-between items-start mb-4 sm:mb-6 gap-2 sm:gap-4">
                <div className="flex-1 bg-transparent rounded-lg">
                  <textarea 
                    ref={textareaRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onInput={handleTextareaResize}
                    placeholder="Ask Alith to create a dashboard"
                    className="w-full min-h-[40px] max-h-32 px-2 sm:px-4 py-2 text-sm sm:text-base md:text-lg font-medium text-gray-600 bg-transparent border-none outline-none placeholder-gray-500 resize-none overflow-hidden focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
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
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-auto text-white">
                      <path d="M18 14.9314L12.3811 9.3125L6.76221 14.9314" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  )}
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
});

export default LaunchAppHeroPage;