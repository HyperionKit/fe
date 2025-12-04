import React from 'react';
import { PenLine, Clock } from 'lucide-react';

interface TOCItem {
  id: string;
  label: string;
}

interface DocsTOCProps {
  items: TOCItem[];
  footerHeight?: number;
}

export const DocsTOC: React.FC<DocsTOCProps> = ({ items, footerHeight = 0 }) => {
  return (
    <aside className="hidden xl:block w-64 shrink-0">
      {/* Fixed container with dynamic height */}
      <div 
        className="fixed top-14 right-0 w-64 overflow-y-auto py-10 px-6"
        style={{ 
          height: `calc(100vh - 3.5rem - ${footerHeight}px)`,
          maxHeight: `calc(100vh - 3.5rem - ${footerHeight}px)`
        }}
      >
        <div className="space-y-6">
          <div>
            <h5 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">On this page</h5>
            <ul className="space-y-3 border-l border-white/10">
              {items.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className="block pl-4 text-xs text-slate-400 hover:text-indigo-400 hover:border-indigo-400 border-l border-transparent -ml-[1px] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-white/5 space-y-3">
            <a href="#" className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors">
              <PenLine className="w-3.5 h-3.5" />
              Edit on GitHub
            </a>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              Last updated 2 days ago
            </div>
          </div>

          <div className="pt-6">
            <h5 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">Related</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-slate-400 hover:text-indigo-400 transition-colors">Config Reference</a></li>
              <li><a href="#" className="text-xs text-slate-400 hover:text-indigo-400 transition-colors">Environment Variables</a></li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};