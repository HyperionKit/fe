import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export const Changelog: React.FC = () => (
  <section className="w-full max-w-6xl mx-auto animate-slide-up p-8 lg:p-12 min-h-full">
    {/* HEADER */}
    <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-8">
      <div>
        <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
          Changelog
        </h1>
        <p className="text-slate-400 text-lg">New updates and improvements to Datacore.</p>
      </div>

      <button className="hidden md:flex px-4 py-2.5 rounded-lg glass-panel text-sm text-white hover:bg-white/5 transition-colors items-center gap-2">
        <Mail className="w-4 h-4" /> Subscribe to updates
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
      {/* LEFT TIMELINE */}
      <div className="lg:col-span-3">
        <div className="relative border-l border-white/10 space-y-12">

          {/* ENTRY 1 — AI AGENTS PUBLIC BETA */}
          <div className="relative pl-8 group">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
              <h2 className="text-xl font-medium text-white tracking-tight">
                AI Agents Public Beta
              </h2>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  v2.4.0
                </span>
                <span className="text-slate-500">October 24, 2025</span>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-violet-500/20 text-violet-300 border border-violet-500/10">
                Feature
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-slate-400 border border-white/5">
                Agents
              </span>
            </div>

            <div className="text-slate-400 text-sm leading-relaxed max-w-2xl">
              <p className="mb-4">
                We're excited to announce the public beta of Hyperkit Agents. You can now build, deploy, and monitor autonomous agents directly from the studio.
              </p>

              <ul className="space-y-1 mt-4">
                <li className="flex items-start gap-2">
                  <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">NEW</span>
                  <span>Introduced the Agent Builder in Studio for visual workflow design.</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">NEW</span>
                  <span>Added Python SDK support for `hyperkit.agents` namespace.</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">IMPROVED</span>
                  <span>Memory persistence now supports vector embeddings by default.</span>
                </li>
              </ul>

              <a href="#" className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 mt-4 text-xs font-medium transition-colors">
                Read the documentation <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* ENTRY 2 — DASHBOARD PERFORMANCE FIXES */}
          <div className="relative pl-8 group">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.4)]" />

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
              <h2 className="text-xl font-medium text-white tracking-tight">
                Dashboard Performance & Studio Fixes
              </h2>

              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                  v2.3.5
                </span>
                <span className="text-slate-500">October 12, 2025</span>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/10">
                Improvement
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-slate-400 border border-white/5">
                Studio
              </span>
            </div>

            <div className="text-slate-400 text-sm leading-relaxed max-w-2xl">
              <p className="mb-4">
                This release focuses on optimizing the rendering engine for large datasets within the Studio dashboard.
              </p>

              <ul className="space-y-1 mt-4">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">UPDATE</span>
                  <span>Dashboard load times reduced by 40% for workspaces with &gt;10k nodes.</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">FIX</span>
                  <span>Fixed layout engine freezing issue on Safari 17.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ENTRY 3 — SDK AUTH UPDATE */}
          <div className="relative pl-8 group">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
              <h2 className="text-xl font-medium text-white tracking-tight">
                SDK Authentication Update
              </h2>

              <div className="flex items-center gap-2 text-xs font-medium">
                <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  v2.3.0
                </span>
                <span className="text-slate-500">November 26, 2025</span>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-red-500/20 text-red-300 border border-red-500/10">
                Breaking
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold tracking-wider bg-white/5 text-slate-400 border border-white/5">
                SDK
              </span>
            </div>

            <div className="text-slate-400 text-sm leading-relaxed max-w-2xl">
              <p className="mb-4">
                We have updated the authentication protocol to support rotated API keys.
              </p>

              <ul className="space-y-1 mt-4">
                <li className="flex items-start gap-2">
                  <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">BREAKING</span>
                  <span>Legacy API keys (prefix `sk_live_`) are now deprecated and will stop working on Nov 1st.</span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="bg-slate-500/20 text-slate-400 text-[10px] font-bold px-1.5 py-0.5 rounded mt-0.5">REMOVED</span>
                  <span>Removed `auth.basic()` method from Node.js SDK.</span>
                </li>
              </ul>

              <a href="#" className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 mt-4 text-xs font-medium transition-colors">
                Migration Guide <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Older Releases Link */}
          <div className="relative pl-8 mb-8">
            <div className="absolute -left-[3px] top-2 w-1.5 h-1.5 rounded-full bg-slate-800" />
            <button className="text-sm text-slate-500 hover:text-white transition-colors">
              Load older releases...
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR FILTERS */}
      <div className="lg:col-span-1">
        <div className="sticky top-8 space-y-12">

          {/* PRODUCT AREA */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Product Area
            </h3>
            <div className="space-y-3">
              {["Platform", "Studio", "SDK", "Agents", "Docs"].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border border-violet-500/40 bg-violet-600 checked:bg-violet-600 checked:border-violet-400"
                  />
                  <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* TYPE FILTER */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Type
            </h3>
            <div className="space-y-3">
              {["Feature", "Improvement", "Fix", "Breaking Change"].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border border-violet-500/40 bg-violet-600 checked:bg-violet-600 checked:border-violet-400"
                  />
                  <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* EMAIL SUBSCRIBE BOX */}
          <div>
            <p className="text-sm text-slate-500 mb-3">Want these delivered to your inbox?</p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500"
              />
              <button className="p-2 rounded-lg bg-white text-slate-900 hover:bg-slate-200 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);
