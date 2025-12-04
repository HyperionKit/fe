import React from 'react';
import {
  Rocket, Layers, Terminal, Bot, LayoutTemplate, Globe,
  Webhook, ChevronsUpDown
} from 'lucide-react';

interface NavSection {
  title: string;
  icon: React.ReactNode;
  items: NavItem[];
}

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export const DocsSidebar: React.FC = () => {
  const sections: NavSection[] = [
    {
      title: "Getting Started",
      icon: <Rocket className="w-3.5 h-3.5 text-indigo-400" />,
      items: [
        { label: "Overview", href: "#" },
        { label: "Installation", href: "#", active: true },
        { label: "Quickstart: First App", href: "#" }
      ]
    },
    {
      title: "Core Concepts",
      icon: <Layers className="w-3.5 h-3.5 text-slate-500" />,
      items: [
        { label: "Architecture", href: "#" },
        { label: "Environments", href: "#" },
        { label: "Security", href: "#" }
      ]
    },
    {
      title: "SDK & CLI",
      icon: <Terminal className="w-3.5 h-3.5 text-slate-500" />,
      items: [
        { label: "SDK Overview", href: "#" },
        { label: "Server SDK", href: "#" },
        { label: "CLI Reference", href: "#" }
      ]
    },
    {
      title: "Agents",
      icon: <Bot className="w-3.5 h-3.5 text-slate-500" />,
      items: [
        { label: "What are Agents", href: "#" }
      ]
    },
    {
      title: "Components",
      icon: <LayoutTemplate className="w-3.5 h-3.5 text-slate-500" />,
      items: [
        { label: "Ready-made Components", href: "#" },
        { label: "Template Gallery", href: "#" }
      ]
    },
    {
      title: "Networks",
      icon: <Globe className="w-3.5 h-3.5 text-slate-500" />,
      items: [
        { label: "Hyperion", href: "#" },
        { label: "Metis", href: "#" },
        { label: "Avalanche", href: "#" }
      ]
    },
    {
      title: "API Reference",
      icon: <Webhook className="w-3.5 h-3.5 text-slate-500" />,
      items: [
        { label: "Authentication", href: "#" },
        { label: "Projects API", href: "#" },
        { label: "Agents API", href: "#" }
      ]
    }
  ];

  return (
    <aside className="hidden lg:block w-72 shrink-0">
      {/* Fixed container */}
      <div className="fixed top-14 left-0 w-72 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-white/10">
        {/* Project Selector - Sticky within sidebar */}
        <div className="sticky top-0 z-10 bg-[#05050A]/95 backdrop-blur-sm p-4 border-b border-white/10">
          <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 transition-colors group">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-5 h-5 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold">H</div>
              <span className="text-sm font-medium text-slate-200 truncate">Hyperkit Main</span>
            </div>
            <ChevronsUpDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 space-y-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="flex items-center gap-2 text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3 px-2">
                {section.icon}
                {section.title}
              </h3>
              <ul className="space-y-0.5 border-l border-white/5 ml-1.5 pl-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a 
                      href={item.href} 
                      className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
                        item.active 
                          ? 'text-indigo-400 bg-indigo-500/10 font-medium border-l-2 border-indigo-500 -ml-[9px] pl-3'
                          : 'text-slate-400 hover:text-indigo-300 hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};