"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/Hyperkit_Logo.png"
                alt="Hyperkit Logo"
                width={150}
                height={100}
              />
            </Link>
            <div className="bg-gradient-to-b from-teal-400 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Qwei 1.96
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2 bg-violet-600 px-6 py-2 rounded-xl">
            <Link href="/#" className="text-white hover:text-violet-200 transition-colors px-3 py-1">
              Explore
            </Link>
            <Link href="/#" className="text-white hover:text-violet-200 transition-colors px-3 py-1">
              Builders
            </Link>
            <Link href="/#" className="text-white hover:text-violet-200 transition-colors px-3 py-1">
              Community
            </Link>
            <Link href="/#" className="text-white hover:text-violet-200 transition-colors px-3 py-1">
              About
            </Link>
            <Link href="/#" className="text-white hover:text-violet-200 transition-colors px-3 py-1">
              Socials
            </Link>
          </div>

          {/* Right Side - Campaigns Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
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
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  >
                    Active Campaigns
                  </Link>
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  >
                    Upcoming Campaigns
                  </Link>
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  >
                    Completed Campaigns
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;