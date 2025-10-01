import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div className="flex items-start">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>

          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <div className="h-2 w-12 bg-blue-500 mb-2"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <div className="h-2 w-12 bg-blue-500 mb-2"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <div className="h-2 w-12 bg-blue-500 mb-2"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
            <div className="h-2 w-32 bg-blue-500"></div>
          </div>
        </div>

        {/* Middle Section - Email Signup */}
        <div className="mb-16 max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="h-2 w-24 bg-blue-500"></div>
          </div>
          <div className="h-2 w-20 bg-blue-500"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8 border-t border-gray-800">
          {/* Copyright */}
          <div className="h-2 w-20 bg-blue-500"></div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}