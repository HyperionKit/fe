import React from 'react';
import { TerminalHeader } from '@/components/pages/landing-terminal-header';
import { TerminalSidebar } from '@/components/pages/landing-terminal-sidebar';
import { TerminalContent } from '@/components/pages/landing-terminal-content';

export const TerminalWindow: React.FC = () => (
  <div className="w-full relative group">
    {/* Glow behind app */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-purple-600/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />
    
    {/* Main Window */}
    <div className="relative rounded-xl border border-white/10 bg-[#0A0910] shadow-2xl overflow-hidden backdrop-blur-sm">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      
      <TerminalHeader />

      {/* Inner Layout */}
      <div className="flex min-h-[400px]">
        <TerminalSidebar />
        <TerminalContent />
      </div>
    </div>
  </div>
);