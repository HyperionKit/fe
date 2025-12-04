'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { 
  Search, ChevronDown, Github, Sun, Menu 
} from 'lucide-react';

interface DocsHeaderProps {
  onMenuToggle: () => void;
}

export const DocsHeader: React.FC<DocsHeaderProps> = ({ onMenuToggle }) => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#05050A]/80 backdrop-blur-xl border-b border-white/10 h-14">
      <div className="w-full h-full px-4 lg:px-6 flex items-center justify-between">
        {/* Left: Logo & Section Nav */}
        <div className="flex items-center gap-6">
          <a href="/docs" className="flex items-center gap-2.5">
            <span className="text-slate-100 font-medium tracking-tight text-sm">Hyperkit Docs</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 ml-4 border-l border-white/10 pl-4 h-6">
            <a 
              href="/docs" 
              className={pathname === '/docs' ? 'text-xs font-medium text-white bg-white/5 px-3 py-1 rounded-md transition-colors' : 'text-xs font-medium text-slate-400 hover:text-white px-3 py-1 rounded-md transition-colors'}
            >
              Home
            </a>
            <a 
              href="/docs/sdk" 
              className={pathname?.startsWith('/docs/sdk') ? 'text-xs font-medium text-white bg-white/5 px-3 py-1 rounded-md transition-colors' : 'text-xs font-medium text-slate-400 hover:text-white px-3 py-1 rounded-md transition-colors'}
            >
              SDK
            </a>
            <a 
              href="/docs/agents" 
              className={pathname?.startsWith('/docs/agents') ? 'text-xs font-medium text-white bg-white/5 px-3 py-1 rounded-md transition-colors' : 'text-xs font-medium text-slate-400 hover:text-white px-3 py-1 rounded-md transition-colors'}
            >
              Agents
            </a>
            <a 
              href="/docs/api" 
              className={pathname?.startsWith('/docs/api') ? 'text-xs font-medium text-white bg-white/5 px-3 py-1 rounded-md transition-colors' : 'text-xs font-medium text-slate-400 hover:text-white px-3 py-1 rounded-md transition-colors'}
            >
              API
            </a>
            <a 
              href="/docs/changelog" 
              className={pathname?.startsWith('/docs/changelog') ? 'text-xs font-medium text-white bg-white/5 px-3 py-1 rounded-md transition-colors' : 'text-xs font-medium text-slate-400 hover:text-white px-3 py-1 rounded-md transition-colors'}
            >
              Changelog
            </a>
          </nav>
        </div>

        {/* Middle: Search */}
        <div className="hidden lg:flex flex-1 max-w-lg mx-8">
          <button className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-xs text-slate-400 hover:border-indigo-500/30 hover:bg-white/5 transition-all group">
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 group-hover:text-slate-300" />
              <span>Search documentation...</span>
            </div>
            <span className="bg-white/5 px-1.5 py-0.5 rounded text-[10px] border border-white/5">⌘K</span>
          </button>
        </div>

        {/* Right: Utilities */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center">
            <button className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 px-2.5 py-1.5 rounded border border-white/5 hover:border-white/10 transition-colors">
              <span>v2.4</span>
              <ChevronDown className="w-3 h-3 text-slate-500" />
            </button>
          </div>

          <div className="h-4 w-[1px] bg-white/10 mx-1"></div>
          
          <a href="#" className="text-slate-400 hover:text-white transition-colors p-1">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors p-1">
            <Sun className="w-4 h-4" />
          </a>

          <button onClick={onMenuToggle} className="lg:hidden text-slate-400 hover:text-white ml-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};