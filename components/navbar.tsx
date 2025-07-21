"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCampaignsOpen, setIsMobileCampaignsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      setIsDarkMode(JSON.parse(saved));
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Store dark mode preference (but don't apply to document yet)
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
      if (!target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigationLinks = [
    { href: "/#", label: "Explore" },
    { href: "/#", label: "Builders" },
    { href: "/#", label: "Community" },
    { href: "/#", label: "About" },
    { href: "/#", label: "Socials" }
  ];

  const campaignLinks = [
    { href: "/#", label: "Active Campaigns" },
    { href: "/#", label: "Upcoming Campaigns" },
    { href: "/#", label: "Completed Campaigns" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/Hyperkit_Logo.png"
                alt="Hyperkit Logo"
                width={150}
                height={100}
                className="w-[150px] h-[100px] object-contain"
              />
            </Link>
            <div className="bg-gradient-to-b from-teal-400 to-teal-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
              Qwei 1.96
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-2 bg-violet-600 px-6 py-2 rounded-xl">
            {navigationLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-white hover:text-violet-200 transition-colors px-3 py-1 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 hover:text-violet-600 hover:bg-gray-100 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Campaigns Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-violet-600 transition-colors px-3 py-2 rounded-md"
              >
                <span>Campaigns</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    {campaignLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-violet-600 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mobile-menu-container">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-violet-600 focus:outline-none p-2 rounded-md transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <svg 
                className={`h-6 w-6 transition-transform ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 mobile-menu-container overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {/* Navigation Links */}
          <div className="space-y-1">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-3 py-3 text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-gray-50 rounded-md transition-all duration-300 transform ${
                  isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-2 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle - Mobile */}
          <div className={`pt-4 border-t border-gray-200 mt-4 transition-all duration-300 transform ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-2 opacity-0'
          }`}
          style={{
            transitionDelay: isMobileMenuOpen ? `${navigationLinks.length * 50}ms` : '0ms'
          }}>
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-3 w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              {isDarkMode ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Campaigns Section - Now as Dropdown */}
          <div className={`pt-4 border-t border-gray-200 mt-4 transition-all duration-300 transform ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-2 opacity-0'
          }`}
          style={{
            transitionDelay: isMobileMenuOpen ? `${(navigationLinks.length + 1) * 50}ms` : '0ms'
          }}>
            <button
              onClick={() => setIsMobileCampaignsOpen(!isMobileCampaignsOpen)}
              className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-violet-600 hover:bg-gray-50 rounded-md transition-colors"
            >
              <span>Campaigns</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                  isMobileCampaignsOpen ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Campaigns Dropdown with Animation */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileCampaignsOpen 
                ? 'max-h-48 opacity-100' 
                : 'max-h-0 opacity-0'
            }`}>
              <div className="mt-1 space-y-1 pl-3">
                {campaignLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`block px-6 py-2 text-sm text-gray-600 hover:text-violet-600 hover:bg-gray-50 rounded-md transition-all duration-300 transform ${
                      isMobileCampaignsOpen 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-2 opacity-0'
                    }`}
                    style={{
                      transitionDelay: isMobileCampaignsOpen ? `${index * 75}ms` : '0ms'
                    }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileCampaignsOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;