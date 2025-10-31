'use client';

import { useState, useEffect } from 'react';
import ShaderBackground from './shader-background';
import { TypingEffect } from '@/components/ui/typing-effect';

export default function MaintenancePage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Prevent body scrolling when maintenance page is mounted
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || isLoading) return;
    
    setError(null);
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubscribed(true);
        setEmail('');
        setError(null);
        // Reset subscription status after 5 seconds (optional)
        setTimeout(() => {
          setIsSubscribed(false);
        }, 5000);
      } else {
        setError(data.error || 'Failed to subscribe. Please try again.');
        console.error('Subscription error:', data.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Error subscribing:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Shader Background */}
      <ShaderBackground />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 sm:mb-6">
          <img 
            src="/logo/brand/hyperkit/Hyperkit Header White.svg" 
            alt="Hyperkit Logo" 
            className="w-auto h-50 sm:h-50 lg:h-50 mx-auto"
          />
        </div>

        {/* Main Content */}
        <div className="mb-6 sm:mb-8">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6" style={{fontFamily: 'Inter'}}>
              <TypingEffect 
                text="Under Development"
                speed={100}
                deleteSpeed={50}
                delay={3000}
                showCursor={true}
              />
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delayed" style={{fontFamily: 'Inter'}}>
              <span className="inline-block animate-gradient-text bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent bg-[length:200%_100%]">
                Please be patient while we build something amazing for you
              </span>
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
          <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2 sm:mb-4" style={{fontFamily: 'Inter'}}>
            Stay Updated
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8" style={{fontFamily: 'Inter'}}>
            Get notified when we launch and receive exclusive early access
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4 sm:space-y-6">
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm" style={{fontFamily: 'Inter'}}>
                  {error}
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  placeholder="Enter your email address"
                  required
                  disabled={isLoading}
                  className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${
                    error ? 'border-red-500/50' : 'border-gray-700'
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{fontFamily: 'Inter'}}
                />
                 <button
                   type="submit"
                   disabled={isLoading}
                   className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                     isLoading 
                       ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                       : 'bg-white text-black hover:bg-gray-100 hover:scale-105'
                   }`}
                   style={{fontFamily: 'Inter'}}
                 >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2" style={{fontFamily: 'Inter'}}>
                Thank you for subscribing!
              </h3>
              <p className="text-gray-400 text-sm sm:text-base" style={{fontFamily: 'Inter'}}>
                We'll notify you as soon as we're ready to launch
              </p>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-500 text-sm sm:text-base mb-4" style={{fontFamily: 'Inter'}}>
            Expected launch: Q2 2026
          </p>
          <div className="flex justify-center space-x-6 sm:space-x-8">
            <a 
              href="https://x.com/HyperionKit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Follow us on X (Twitter)"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/hyperionkit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Join our Telegram"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a 
              href="https://discord.com/invite/MDh7jY8vWe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Join our Discord"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/HyperionKit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Visit our GitHub"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-xs sm:text-sm" style={{fontFamily: 'Inter'}}>
            © 2025 Hyperkit. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

