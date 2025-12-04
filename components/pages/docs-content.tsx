import React from 'react';
import { ChevronRight, ThumbsUp, ThumbsDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { Callout } from '@/components/pages/docs-callout';
import { CodeBlock } from '@/components/pages/docs-codeblock';

export const DocsContent: React.FC = () => {
  return (
    <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
        <a href="#" className="hover:text-slate-300 transition-colors">Docs</a>
        <ChevronRight className="w-3 h-3" />
        <a href="#" className="hover:text-slate-300 transition-colors">Getting Started</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-indigo-400">Installation</span>
      </div>

      {/* Page Header */}
      <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Installation</h1>
      <p className="text-lg text-slate-400 leading-relaxed mb-8">
        Get started with Hyperkit by installing the necessary dependencies and setting up your local environment. You can use our CLI to scaffold a new project or install the SDK manually.
      </p>

      {/* Warning Callout */}
      <Callout type="info" title="Prerequisites">
        Before you begin, ensure you have Node.js v18 or later installed. We also recommend using pnpm for faster package management.
      </Callout>

      <h2 id="quick-start" className="text-xl font-medium tracking-tight text-white mt-10 mb-4 scroll-mt-20">
        Automatic Setup
      </h2>
      <p className="leading-7 mb-4">
        The easiest way to start is using the <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">create-hyperkit</code> CLI tool. It will ask you a few questions and set up a pre-configured project with TypeScript, Tailwind, and the Hyperkit SDK.
      </p>

      <CodeBlock 
        code={`<span class="text-slate-500"># Install using npm</span>
<span class="text-blue-400">npm</span> <span class="text-purple-400">create</span> <span class="text-green-400">hyperkit@latest</span>

<span class="text-slate-500"># Or using pnpm (recommended)</span>
<span class="text-blue-400">pnpm</span> <span class="text-purple-400">create</span> <span class="text-green-400">hyperkit@latest</span>`}
      />

      <h2 id="manual-install" className="text-xl font-medium tracking-tight text-white mt-10 mb-4 scroll-mt-20">
        Manual Installation
      </h2>
      <p className="leading-7 mb-4">
        If you prefer to add Hyperkit to an existing project, install the core SDK and the React hooks package.
      </p>

      <CodeBlock 
        showTabs
        tabs={[
          { 
            name: 'npm', 
            code: '<span class="text-blue-400">npm</span> <span class="text-purple-400">install</span> <span class="text-green-400">@hyperkit/core @hyperkit/react</span>' 
          },
          { 
            name: 'pnpm', 
            code: '<span class="text-blue-400">pnpm</span> <span class="text-purple-400">add</span> <span class="text-green-400">@hyperkit/core @hyperkit/react</span>' 
          },
          { 
            name: 'yarn', 
            code: '<span class="text-blue-400">yarn</span> <span class="text-purple-400">add</span> <span class="text-green-400">@hyperkit/core @hyperkit/react</span>' 
          }
        ]}
      />

      <h2 id="configuration" className="text-xl font-medium tracking-tight text-white mt-10 mb-4 scroll-mt-20">
        Configuration
      </h2>
      <p className="leading-7 mb-4">
        Create a <code className="font-mono text-xs bg-white/10 px-1 py-0.5 rounded text-slate-200">hyperkit.config.ts</code> file in the root of your project. This is where you define your API keys, networks, and agent behaviors.
      </p>

      <CodeBlock 
        filename="hyperkit.config.ts"
        code={`<span class="text-purple-400">import</span> { defineConfig } <span class="text-purple-400">from</span> <span class="text-green-400">'@hyperkit/core'</span>;

<span class="text-purple-400">export default</span> <span class="text-blue-400">defineConfig</span>({
  <span class="text-purple-400">apiKey</span>: process.env.HYPERKIT_KEY,
  <span class="text-purple-400">environment</span>: <span class="text-green-400">'development'</span>,
  <span class="text-purple-400">networks</span>: [<span class="text-green-400">'hyperion'</span>, <span class="text-green-400">'metis'</span>],
  <span class="text-purple-400">agents</span>: {
    <span class="text-purple-400">autoAudit</span>: <span class="text-purple-400">true</span>
  }
});`}
      />

      <h2 id="next-steps" className="text-xl font-medium tracking-tight text-white mt-10 mb-4 scroll-mt-20">
        Next Steps
      </h2>
      <ul className="list-disc list-outside ml-4 mb-4 space-y-2 text-slate-400">
        <li>Check out the <a href="#" className="text-indigo-400 hover:underline">Quickstart guide</a> to build your first dApp.</li>
        <li>Read about <a href="#" className="text-indigo-400 hover:underline">Core Concepts</a> to understand the architecture.</li>
        <li>Browse the <a href="#" className="text-indigo-400 hover:underline">Template Gallery</a> for inspiration.</li>
      </ul>

      {/* Feedback Widget */}
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-500">Was this page helpful?</div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-slate-400 hover:text-white">
            <ThumbsUp className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-md border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-slate-400 hover:text-white">
            <ThumbsDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Page Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <a href="#" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-left">
          <div className="text-xs text-slate-500 mb-1">Previous</div>
          <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
            <ArrowLeft className="w-3 h-3" />
            Overview
          </div>
        </a>
        <a href="#" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
          <div className="text-xs text-slate-500 mb-1">Next</div>
          <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
            Quickstart
            <ArrowRight className="w-3 h-3" />
          </div>
        </a>
      </div>
    </main>
  );
};