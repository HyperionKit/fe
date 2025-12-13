import React, { useState } from 'react';
import { Terminal, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showTabs?: boolean;
  tabs?: Array<{ name: string; code: string }>;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'bash', 
  filename,
  showTabs = false,
  tabs = []
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const displayCode = showTabs && tabs.length > 0 ? tabs[activeTab].code : code;

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0F]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
        {showTabs && tabs.length > 0 ? (
          <div className="flex items-center gap-4">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`text-xs font-medium pb-2 -mb-2.5 transition-colors ${
                  activeTab === idx
                    ? 'text-indigo-400 border-b-2 border-indigo-400'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        ) : filename ? (
          <span className="text-xs text-slate-400">{filename}</span>
        ) : (
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal</span>
          </div>
        )}
        <button className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
          <Copy className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-6">
          <code dangerouslySetInnerHTML={{ __html: displayCode }} />
        </pre>
      </div>
    </div>
  );
};