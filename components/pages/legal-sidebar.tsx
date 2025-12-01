import React from 'react';
import { 
  GitCommit, Scale, FileText, ScrollText, ShieldAlert, Briefcase  
} from 'lucide-react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  page: string;
  active: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, page, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
      active ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
    }`}
  >
    {icon}
    {label}
  </button>
);

const ErrorBadge: React.FC<{ color: string; label: string; page: string; active: boolean; onClick: () => void }> = 
  ({ color, label, page, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
      active ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
    }`}
  >
    <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
    {label}
  </button>
);

export const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange }) => (
  <aside className="w-64 border-r border-white/5 bg-slate-950/50 backdrop-blur-xl z-20 flex flex-col h-full relative shrink-0 mt-12">
    <div className="p-6">
      
      <nav className="space-y-0.5 overflow-y-auto max-h-[calc(100vh-200px)] pr-2">
        <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-3 px-3">Legal</div>
        <NavButton
          icon={<Scale className="w-4 h-4" />}
          label="Legal Hub"
          page="legal"
          active={activePage === 'legal'}
          onClick={() => onPageChange('legal')}
        />
        <NavButton
          icon={<FileText className="w-4 h-4" />}
          label="Privacy Policy"
          page="privacy"
          active={activePage === 'privacy'}
          onClick={() => onPageChange('privacy')}
        />
        <NavButton
          icon={<ScrollText className="w-4 h-4" />}
          label="Terms of Use"
          page="terms"
          active={activePage === 'terms'}
          onClick={() => onPageChange('terms')}
        />
        <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-3 mt-3 px-3">Product</div>
        <NavButton
          icon={<GitCommit className="w-4 h-4" />}
          label="Changelog"
          page="changelog"
          active={activePage === 'changelog'}
          onClick={() => onPageChange('changelog')}
        />
        
        <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mt-6 mb-3 px-3">Trust & Security</div>
        <NavButton
          icon={<ShieldAlert  className="w-4 h-4" />}
          label="Security Policy"
          page="securitypolicy"
          active={activePage === 'SecurityPolicy'}
          onClick={() => onPageChange('SecurityPolicy')}
        />

        <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mt-6 mb-3 px-3">Company</div>
        <NavButton
          icon={<Briefcase   className="w-4 h-4" />}
          label="Team & Roles"
          page="teamroles"
          active={activePage === 'TeamRoles'}
          onClick={() => onPageChange('TeamRoles')}
        />
      </nav>
    </div>
    
  </aside>
);