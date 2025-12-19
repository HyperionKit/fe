import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Globe2, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  MapPin,
  Shield,
  Rocket,
  Infinity
} from 'lucide-react';

const BackgroundEffects: React.FC = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[50vh] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vh] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen" />
    <div className="absolute inset-0 z-0" 
      style={{
        backgroundSize: '50px 50px',
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }}
    />
  </div>
);

export default function HyperKitRoadmap() {
  return (
    <div className="min-h-screen bg-[#020205] text-slate-300 antialiased selection:bg-blue-500/30 selection:text-blue-100 overflow-x-hidden">
      
      <BackgroundEffects />

      {/* Main Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 lg:px-8">
        
        {/* Page Header */}
        <header className="mb-20 text-center relative">
          {/* Decorative Orbit Ring behind title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] border border-blue-500/20 rounded-full rotate-[-10deg] blur-[1px] pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-medium mb-6 backdrop-blur-md shadow-lg shadow-blue-900/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Roadmap 2025-2026
          </div>
          
          <h1 className="text-6xl md:text-8xl font-medium text-white tracking-tight mb-6">
            Product <span className="bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent animate-pulse">Evolution</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Charting the trajectory of the HyperKit ecosystem through the cosmos of development, from inception to singularity.
          </p>
        </header>

        {/* Feature Highlights Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* Feature 1 */}
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl p-6 relative group overflow-hidden hover:bg-white/[0.04] hover:border-blue-500/30 transition-all">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] group-hover:bg-blue-500/30 transition-colors"></div>
            <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Secure Vaults</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Zero-knowledge architecture ensuring complete privacy for asset storage and swapping protocols.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-blue-400 font-medium">
              <span>Live in v0.8</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl p-6 relative group overflow-hidden hover:bg-white/[0.04] hover:border-purple-500/30 transition-all">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px] group-hover:bg-purple-500/30 transition-colors"></div>
            <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Lightning Core</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Optimized Python SDK tailored for high-frequency interactions and low-latency dApp state management.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-purple-400 font-medium">
              <span>Optimizing</span>
              <Activity className="w-3 h-3" />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl p-6 relative group overflow-hidden hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-[50px] group-hover:bg-cyan-500/30 transition-colors"></div>
            <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Global Grid</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cross-chain bridging capabilities extending the HyperKit reach to Ethereum and Solana mainnets.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400 font-medium">
              <span>In Development</span>
              <MapPin className="w-3 h-3" />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar: Project Phases Timeline */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-white mb-8 flex items-center gap-2 uppercase tracking-widest opacity-80">
                <Compass className="w-4 h-4 text-blue-400" />
                Trajectory
              </h3>
              
              <div className="relative border-l border-white/5 ml-2 space-y-10 pb-4">
                {/* Glowing Line Overlay */}
                <div className="absolute top-0 bottom-0 -left-px w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

                {/* Timeline Items */}
                {[
                  { month: 'October 2025', active: true, weeks: ['W1 · Launch', 'W2 · Scale', 'W3 · Audit', 'W4 · Review'] },
                  { month: 'November 2025', weeks: 'W5 - W8' },
                  { month: 'December 2025', weeks: 'W9 - W12' },
                  { month: 'January 2026', weeks: 'W13 - W16' },
                  { month: 'February 2026', weeks: 'W17 - W20' },
                  { month: 'March 2026', weeks: 'W21 - W24' }
                ].map((item, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    <div className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-[#020205] group-hover:scale-125 transition-transform duration-300 ${
                      item.active 
                        ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' 
                        : 'bg-slate-800 border border-slate-600 group-hover:border-purple-500'
                    }`}></div>
                    <h4 className={`text-sm font-medium transition-colors ${
                      item.active ? 'text-white group-hover:text-blue-400' : 'text-slate-400 group-hover:text-white'
                    }`}>{item.month}</h4>
                    {Array.isArray(item.weeks) ? (
                      <div className="mt-2 space-y-1.5 text-xs text-slate-500 font-mono">
                        {item.weeks.map((week, widx) => (
                          <div key={widx} className="flex items-center gap-2">
                            <span className={`w-1 h-1 rounded-full ${widx === 0 ? 'bg-blue-400' : 'bg-slate-700'}`}></span> {week}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-2 text-xs text-slate-600 font-mono">{item.weeks}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:col-span-9 space-y-16">

            {/* Month 1 - Genesis Launch */}
            <section className="relative">
              <div className="absolute -left-16 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-transparent hidden lg:block opacity-20"></div>
              
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-px w-8 bg-blue-500/50"></span>
                    <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Month 1 · W1-4</span>
                  </div>
                  <h2 className="text-3xl font-medium text-white tracking-tight">Genesis Launch</h2>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Mission Complete
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-xl overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 border-b border-white/5 bg-white/[0.02] px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  <div className="col-span-8 md:col-span-7">Mission Objective</div>
                  <div className="col-span-4 md:col-span-3 text-right md:text-left">Status</div>
                  <div className="hidden md:block md:col-span-2 text-right">Integrity</div>
                </div>

                {/* Task Items */}
                <div className="divide-y divide-white/5 text-sm">
                  {[
                    'Finalize and Deploy New Logo Design',
                    'Implement New Universal Theme Across UI',
                    'Redesign Landing Page & Onboarding',
                    'UI/UX Rework for AI Generation Flow',
                    'Integrate 1-2 AI Models for Projects',
                    'Launch Customizable Module Editor'
                  ].map((task, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-white/[0.03] transition-colors group">
                      <div className="col-span-8 md:col-span-7 font-medium text-slate-200 group-hover:text-blue-200 transition-colors">{task}</div>
                      <div className="col-span-4 md:col-span-3 flex justify-end md:justify-start">
                        <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-bold tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">Completed</span>
                      </div>
                      <div className="hidden md:flex md:col-span-2 justify-end text-xs font-mono text-emerald-400">100%</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/[0.01] px-6 py-4 border-t border-white/5 text-center">
                  <span className="text-xs text-slate-500 hover:text-blue-400 transition-colors cursor-pointer">+ 9 more tasks archived</span>
                </div>
              </div>
            </section>

            {/* Month 2 - Core Expansion */}
            <section className="relative">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-px w-8 bg-purple-500/50"></span>
                    <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">Month 2 · W5-8</span>
                  </div>
                  <h2 className="text-3xl font-medium text-white tracking-tight">Core Expansion</h2>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    Active Phase
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-xl overflow-hidden ring-1 ring-purple-500/20">
                <div className="grid grid-cols-12 gap-4 border-b border-white/5 bg-white/[0.02] px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  <div className="col-span-8 md:col-span-7">Mission Objective</div>
                  <div className="col-span-4 md:col-span-3 text-right md:text-left">Status</div>
                  <div className="hidden md:block md:col-span-2 text-right">Integrity</div>
                </div>

                <div className="divide-y divide-white/5 text-sm">
                  {[
                    { task: 'Release Python SDK (Initial Versions)', progress: 50 },
                    { task: 'Publish New Documentation Set', progress: 60 },
                    { task: 'Expand CLI Tool for dApp Templates', progress: 25 },
                    { task: 'Begin Vault/Swap Contract Development', progress: 30 },
                    { task: 'Launch Visual Dashboard (Beta)', progress: 0 }
                  ].map((item, idx) => (
                    <div key={idx} className={`grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-white/[0.03] transition-colors ${item.progress > 0 ? 'bg-purple-500/[0.03]' : ''}`}>
                      <div className={`col-span-8 md:col-span-7 font-medium ${item.progress > 0 ? 'text-white' : 'text-slate-400'}`}>{item.task}</div>
                      <div className="col-span-4 md:col-span-3 flex justify-end md:justify-start">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase ${
                          item.progress > 0 
                            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                            : 'bg-slate-800 text-slate-500 border border-slate-700'
                        }`}>
                          {item.progress > 0 ? 'In Progress' : 'Pending'}
                        </span>
                      </div>
                      <div className="hidden md:flex md:col-span-2 justify-end items-center gap-3">
                        {item.progress > 0 ? (
                          <>
                            <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" style={{ width: `${item.progress}%` }}></div>
                            </div>
                            <span className="text-xs font-mono text-purple-400">{item.progress}%</span>
                          </>
                        ) : (
                          <span className="text-xs font-mono text-slate-600">0%</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Month 3 - System Broadening */}
            <section className="relative opacity-80">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-px w-8 bg-slate-700"></span>
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Month 3 · W9-12</span>
                  </div>
                  <h2 className="text-3xl font-medium text-slate-200 tracking-tight">System Broadening</h2>
                </div>
              </div>

              <div className="bg-white/[0.05] backdrop-blur-md border border-white/5 rounded-xl overflow-hidden">
                <div className="divide-y divide-white/5 text-sm">
                  {[
                    { task: 'Complete Vault/Swapping Contracts on Testnet', status: 'Pending', progress: 0 },
                    { task: 'Add Cross-Chain Bridging via Metis SDK v2', status: 'Pending', progress: 0 },
                    { task: 'Improve Dashboard for Common Workflows', status: 'Preparing', progress: 30 }
                  ].map((item, idx) => (
                    <div key={idx} className={`grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-white/[0.03] transition-colors ${item.status === 'Preparing' ? 'bg-blue-500/[0.02]' : ''}`}>
                      <div className={`col-span-8 md:col-span-7 font-medium ${item.status === 'Preparing' ? 'text-slate-300' : 'text-slate-400'}`}>{item.task}</div>
                      <div className="col-span-4 md:col-span-3 flex justify-end md:justify-start">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase ${
                          item.status === 'Preparing'
                            ? 'bg-blue-900/30 text-blue-400 border border-blue-500/20'
                            : 'bg-slate-800 text-slate-500 border border-slate-700'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <div className={`hidden md:flex md:col-span-2 justify-end text-xs font-mono ${item.status === 'Preparing' ? 'text-blue-500/50' : 'text-slate-600'}`}>
                        {item.progress}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Future Phases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60">
              {/* Month 4 */}
              <section className="bg-white/[0.05] backdrop-blur-md border border-dashed border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Month 4</span>
                  <Shield className="w-4 h-4 text-slate-600" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Governance & Security</h3>
                <ul className="space-y-3 mt-4">
                  {[
                    'Finalize Audited Contracts',
                    'Deploy Governance Beta',
                    'Integrate Solana Chain'
                  ].map((task, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> {task}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Month 5 */}
              <section className="bg-white/[0.05] backdrop-blur-md border border-dashed border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Month 5</span>
                  <Rocket className="w-4 h-4 text-slate-600" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Mainnet Ignition</h3>
                <ul className="space-y-3 mt-4">
                  {[
                    'Release Candidates (RC)',
                    'Secure Partnerships',
                    'Grant Applications'
                  ].map((task, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span> {task}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Footer */}
            <footer className="pt-20 border-t border-white/5 text-center relative">
              {/* Footer Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-blue-900/10 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="inline-flex items-center justify-center p-3 bg-white/[0.03] rounded-full mb-6">
                <Infinity className="w-6 h-6 text-slate-500" />
              </div>
              <p className="text-sm text-slate-500">© 2025 HyperKit Ecosystem. Engineered for the future.</p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}