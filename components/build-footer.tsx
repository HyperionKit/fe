'use client';

import React from 'react';
import { OptimizedLogo, OptimizedIcon } from '@/components/ui/optimized-image';

export default function BuildFooter() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Side - Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <OptimizedLogo
                src="/logo/brand/hyperkit/Hyperkit Header White.svg"
                alt="HYPERKIT"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">X</div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">O</div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">B</div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">O</div>
            </div>
            
            <div className="text-sm text-gray-400">• All systems normal</div>
            
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-cyan-300 rounded-full"></div>
              <span className="text-sm">Hyperhack Winners</span>
            </div>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>Developers</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Status page</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Trust center</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Under the hood</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Example project</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Modern Billing Stack</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Unbundled Monetization</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-cyan-300 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Privacy policy</a></li>
              <li><a href="#" className="hover:text-cyan-300 transition-colors">Terms of use</a></li>
              <li><a href="mailto:support@hyperkit.xyz" className="hover:text-cyan-300 transition-colors">support@hyperkit.xyz</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
