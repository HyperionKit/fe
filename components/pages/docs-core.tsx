import React, { useState, useEffect } from 'react';
import { 
  Monitor, Cpu, Database, Cloud, Key, Globe, Check, X, Minus,
  AlertCircle, TriangleAlert, ArrowLeft, ArrowRight, Book, Github
} from 'lucide-react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';

const CoreConceptsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  const tocItems = [
    { id: 'architecture', label: 'Architecture' },
    { id: 'authentication', label: 'Authentication' },
    { id: 'permissions', label: 'Permissions' },
    { id: 'error-handling', label: 'Error Handling' }
  ];

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      const updateFooterHeight = () => {
        setFooterHeight(footer.offsetHeight);
      };
      
      updateFooterHeight();
      window.addEventListener('resize', updateFooterHeight);
      
      return () => window.removeEventListener('resize', updateFooterHeight);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <DocsHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1 pt-14 w-full" style={{ paddingBottom: `${footerHeight}px` }}>
        <DocsSidebar footerHeight={footerHeight} />
        
        {/* Main Content */}
        <main className="flex-1 min-w-0 max-w-4xl mx-auto py-10 px-6 lg:px-12 pb-24">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <a href="/docs" className="hover:text-slate-300 transition-colors">Docs</a>
            <span>/</span>
            <span className="text-indigo-400">Core Concepts</span>
          </div>

          {/* SECTION: ARCHITECTURE */}
          <div id="architecture" className="scroll-mt-24 mb-20">
            <h1 className="text-4xl font-medium tracking-tight text-white mb-6">Architecture</h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Hyperkit operates on a distributed, event-driven mesh architecture designed to handle high-throughput agent orchestration.
            </p>

            <div className="bg-[#0A0A0F] border border-white/10 rounded-xl p-8 mb-8 overflow-hidden relative">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 max-w-3xl mx-auto">
                {/* Node 1 */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center shadow-2xl">
                    <Monitor className="w-8 h-8 text-slate-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">Client SDK</span>
                </div>

                {/* Connection */}
                <div className="hidden lg:flex flex-1 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent relative w-full max-w-[100px]">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                </div>

                {/* Node 2 (Central) */}
                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-md"></div>
                    <div className="relative w-32 h-32 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 shadow-2xl">
                      <Cpu className="w-8 h-8 text-indigo-400" />
                      <span className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest">Engine</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300">Hyperkit Core</span>
                </div>

                {/* Connection */}
                <div className="hidden lg:flex flex-1 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent relative w-full max-w-[100px]">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                </div>

                {/* Node 3 */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono text-slate-400">State Store</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                    <Cloud className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-mono text-slate-400">Edge Runtime</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-base font-medium tracking-tight text-slate-200 mt-8 mb-3">The Control Plane</h3>
            <p className="leading-7 mb-6 text-slate-400">
              The control plane manages the lifecycle of your agents. It is responsible for <span className="text-indigo-300">state hydration</span>, concurrency control, and ensuring atomic operations across your distributed workflows.
            </p>
          </div>

          {/* SECTION: AUTHENTICATION */}
          <div id="authentication" className="scroll-mt-24 mb-20 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-medium tracking-tight text-white mb-6 pb-2 border-b border-white/5">Authentication</h2>
            <p className="leading-7 mb-6 text-slate-400">
              Hyperkit uses a dual-layer authentication strategy designed for both server-side and client-side security. All requests must be authenticated using standard Bearer tokens.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded bg-indigo-500/10 text-indigo-400">
                    <Key className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-medium text-white">Secret Keys</h4>
                </div>
                <p className="text-xs text-slate-400 leading-5">Used for server-side operations. Grants full read/write access to your environment. Never expose this on the client.</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-mono bg-black/30 p-2 rounded border border-white/5 text-slate-500">
                  <span>sk_live_...</span>
                </div>
              </div>

              <div className="p-5 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded bg-emerald-500/10 text-emerald-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-medium text-white">Public Keys</h4>
                </div>
                <p className="text-xs text-slate-400 leading-5">Safe for client-side usage. Restricted to invoking specific public workflows and agents.</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-mono bg-black/30 p-2 rounded border border-white/5 text-slate-500">
                  <span>pk_live_...</span>
                </div>
              </div>
            </div>

            <h3 className="text-base font-medium tracking-tight text-slate-200 mt-8 mb-3">Initializing the Client</h3>
            <div className="my-6 rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0F]">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                <span className="text-xs text-slate-400">lib/hyperkit.ts</span>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm leading-6">
                  <span className="text-purple-400">import</span> {'{'}Hyperkit{'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@hyperkit/node'</span>;{'\n\n'}
                  <span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-blue-400">Hyperkit</span>({'{'}
                  {'\n  '}<span className="text-slate-400">apiKey</span>: process.env.HYPERKIT_SECRET_KEY,
                  {'\n  '}<span className="text-slate-400">options</span>: {'{'}
                  {'\n    '}<span className="text-slate-400">timeout</span>: <span className="text-pink-400">5000</span>,
                  {'\n    '}<span className="text-slate-400">retries</span>: <span className="text-pink-400">3</span>
                  {'\n  }{'}'}
                  {'\n}'});
                </pre>
              </div>
            </div>
          </div>

          {/* SECTION: PERMISSIONS */}
          <div id="permissions" className="scroll-mt-24 mb-20 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-medium tracking-tight text-white mb-6 pb-2 border-b border-white/5">Permissions & Roles</h2>
            <p className="leading-7 mb-6 text-slate-400">
              Hyperkit implements a granular Role-Based Access Control (RBAC) system. Policies are defined in your dashboard and enforced at the edge.
            </p>

            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 my-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="text-xs font-medium text-slate-300 border-b border-white/10 py-3 pl-4">Role</th>
                    <th className="text-xs font-medium text-slate-300 border-b border-white/10 py-3 px-4">Scope</th>
                    <th className="text-xs font-medium text-slate-300 border-b border-white/10 py-3 px-4">Deploy</th>
                    <th className="text-xs font-medium text-slate-300 border-b border-white/10 py-3 px-4">Logs</th>
                    <th className="text-xs font-medium text-slate-300 border-b border-white/10 py-3 px-4 text-right">Access Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3 pl-4 text-sm font-medium text-white">Admin</td>
                    <td className="py-3 px-4 text-xs font-mono text-indigo-300">*</td>
                    <td className="py-3 px-4"><Check className="w-4 h-4 text-emerald-400" /></td>
                    <td className="py-3 px-4"><Check className="w-4 h-4 text-emerald-400" /></td>
                    <td className="py-3 px-4 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Full</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 pl-4 text-sm font-medium text-white">Developer</td>
                    <td className="py-3 px-4 text-xs font-mono text-slate-400">dev/*</td>
                    <td className="py-3 px-4"><Check className="w-4 h-4 text-emerald-400" /></td>
                    <td className="py-3 px-4"><Check className="w-4 h-4 text-emerald-400" /></td>
                    <td className="py-3 px-4 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Write</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 pl-4 text-sm font-medium text-white">Auditor</td>
                    <td className="py-3 px-4 text-xs font-mono text-slate-400">global</td>
                    <td className="py-3 px-4"><X className="w-4 h-4 text-slate-600" /></td>
                    <td className="py-3 px-4"><Check className="w-4 h-4 text-emerald-400" /></td>
                    <td className="py-3 px-4 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20">Read</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 pl-4 text-sm font-medium text-white">Agent</td>
                    <td className="py-3 px-4 text-xs font-mono text-slate-400">self</td>
                    <td className="py-3 px-4"><X className="w-4 h-4 text-slate-600" /></td>
                    <td className="py-3 px-4"><Minus className="w-4 h-4 text-slate-600" /></td>
                    <td className="py-3 px-4 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">Restricted</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION: ERROR HANDLING */}
          <div id="error-handling" className="scroll-mt-24 mb-20 border-t border-white/5 pt-10">
            <h2 className="text-2xl font-medium tracking-tight text-white mb-6 pb-2 border-b border-white/5">Error Handling</h2>
            <p className="leading-7 mb-6 text-slate-400">
              All API errors follow a standardized JSON structure defined in <code className="font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded text-indigo-200/90 border border-white/5">RFC 7807</code>. The SDK automatically parses these into typed exceptions.
            </p>

            <h3 className="text-base font-medium tracking-tight text-slate-200 mt-8 mb-3">Error Object Structure</h3>
            <div className="my-6 rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0F]">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
                <span className="text-xs text-slate-400">JSON Response</span>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm leading-6">
                  <span className="text-slate-400">{'{'}</span>{'\n'}
                  {'  '}<span className="text-green-400">"type"</span>: <span className="text-green-400">"https://hyperkit.dev/errors/rate-limit-exceeded"</span>,{'\n'}
                  {'  '}<span className="text-green-400">"title"</span>: <span className="text-green-400">"Rate Limit Exceeded"</span>,{'\n'}
                  {'  '}<span className="text-green-400">"status"</span>: <span className="text-pink-400">429</span>,{'\n'}
                  {'  '}<span className="text-green-400">"detail"</span>: <span className="text-green-400">"You have exceeded the allowance of 1000 requests per minute."</span>,{'\n'}
                  {'  '}<span className="text-green-400">"instance"</span>: <span className="text-green-400">"/v1/agents/deploy"</span>{'\n'}
                  <span className="text-slate-400">{'}'}</span>
                </pre>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <div className="flex gap-4 p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-red-200 mb-1">Critical Errors</h4>
                  <p className="text-sm text-red-200/60">500-level errors indicate a failure within the Hyperkit Mesh. These are automatically reported to our status page.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                <TriangleAlert className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-yellow-200 mb-1">Idempotency</h4>
                  <p className="text-sm text-yellow-200/60">In case of network failures, retry requests with the same <code className="text-xs bg-black/20 px-1 rounded">Idempotency-Key</code> header to prevent duplicate operations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Page Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 pt-8 border-t border-white/5">
            <a href="#" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-left">
              <div className="text-xs text-slate-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center gap-2">
                <ArrowLeft className="w-3 h-3" />
                Installation
              </div>
            </a>
            <a href="#" className="group block p-4 rounded-xl border border-white/10 hover:border-indigo-500/30 hover:bg-white/5 transition-all text-right">
              <div className="text-xs text-slate-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-200 group-hover:text-indigo-400 flex items-center justify-end gap-2">
                Agents
                <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          </div>
        </main>

        <DocsTOC items={tocItems} footerHeight={footerHeight} />
      </div>
    </div>
  );
};

export default CoreConceptsPage;