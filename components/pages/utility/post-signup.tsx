'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Code2, PenTool, Box, User, Camera, Mail, Plus, Link } from 'lucide-react';

export default function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const goNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      finishWizard();
    }
  };

  const goBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const finishWizard = () => {
    // Replace this with actual redirect logic
    alert('Setup Complete! Redirecting to Dashboard...');
  };

  const titles = { 1: 'Profile', 2: 'Workspace', 3: 'Team' };

  return (
    <main className="flex-grow flex items-center justify-center p-4 relative z-10 w-full max-w-xl mx-auto bg-[#03040B] text-slate-300 selection:bg-indigo-500/30 overflow-hidden min-h-screen">
      
      {/* Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 grid-bg -z-10 h-full w-full pointer-events-none" />
      <div className="absolute inset-0 noise -z-10 h-full w-full pointer-events-none mix-blend-overlay" />

      <div className="w-full bg-[#0A0B10] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col min-h-[500px]">

        {/* Progress Header */}
        <div className="px-8 pt-8 pb-4 border-b border-white/5 bg-[#0A0B10]">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-2">
            <span>{`Step ${currentStep} of ${totalSteps}`}</span>
            <span className="text-slate-300">{titles[currentStep]}</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex-grow relative">

          {/* Step 1: Personal Info */}
          {currentStep === 1 && (
            <div className="animate-step h-full flex flex-col space-y-6">
              <div>
                <h1 className="text-xl font-medium text-white tracking-tight mb-2">Welcome to Hyperion</h1>
                <p className="text-sm text-slate-400">Let's start by setting up your personal profile.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 ml-1">Full Name</label>
                  <input type="text" placeholder="e.g. Jordan Lee" className="w-full bg-[#0e0f16] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all placeholder:text-slate-600" />
                </div>

                {/* Role Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-300 ml-1">What is your role?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'Developer', icon: <Code2 className="w-4 h-4" /> },
                      { name: 'Designer', icon: <PenTool className="w-4 h-4" /> },
                      { name: 'Product', icon: <Box className="w-4 h-4" /> },
                      { name: 'Other', icon: <User className="w-4 h-4" /> },
                    ].map((role, idx) => (
                      <label key={idx} className="cursor-pointer group">
                        <input type="radio" name="role" className="peer sr-only role-radio" defaultChecked={idx === 0} />
                        <div className="relative p-3 rounded-lg border border-white/10 bg-[#0e0f16] hover:bg-white/5 transition-all group-hover:border-white/20 flex items-center gap-3">
                          <div className="p-2 rounded bg-white/5 text-slate-400">{role.icon}</div>
                          <span className="text-sm font-medium text-slate-200">{role.name}</span>
                          <div className="check-icon absolute top-2 right-2 opacity-0 transform scale-50 transition-all duration-300">
                            <Check className="w-4 h-4 text-indigo-400" />
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Workspace */}
          {currentStep === 2 && (
            <div className="animate-step h-full flex flex-col space-y-6">
              <div>
                <h1 className="text-xl font-medium text-white tracking-tight mb-2">Create Workspace</h1>
                <p className="text-sm text-slate-400">Give your team a home. You can change this later.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-indigo-400 cursor-pointer hover:bg-white/5 transition-colors group relative overflow-hidden">
                    <Camera className="w-6 h-6 z-10" />
                    <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center text-[10px] text-white">Edit</div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">Workspace Icon</h3>
                    <p className="text-xs text-slate-500 mt-1">Recommended size 256x256px</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 ml-1">Workspace Name</label>
                  <input type="text" defaultValue="Acme Inc." className="w-full bg-[#0e0f16] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all placeholder:text-slate-600" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 ml-1">Workspace URL</label>
                  <div className="flex rounded-lg border border-white/10 bg-[#0e0f16] focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500/50 transition-all overflow-hidden">
                    <div className="bg-white/5 px-3 py-2.5 border-r border-white/5 flex items-center">
                      <span className="text-xs text-slate-500 font-mono">hyperion.so/</span>
                    </div>
                    <input type="text" defaultValue="acme-inc" className="flex-grow bg-transparent border-none px-3 py-2.5 text-sm text-white focus:outline-none font-mono placeholder:text-slate-600" />
                  </div>
                  <p className="text-[10px] text-slate-500 ml-1">This will be the unique URL for your team.</p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Invite */}
          {currentStep === 3 && (
            <div className="animate-step h-full flex flex-col space-y-4">
              <div>
                <h1 className="text-xl font-medium text-white tracking-tight mb-2">Invite your team</h1>
                <p className="text-sm text-slate-400">Collaboration is better with friends. Invite them now.</p>
              </div>

              {[0, 1].map((_, idx) => (
                <div key={idx} className="flex gap-2">
                  <div className="relative flex-grow">
                    <div className="absolute left-3 top-2.5 text-slate-600">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input type="email" placeholder="colleague@example.com" className="w-full bg-[#0e0f16] border border-white/10 rounded-lg px-4 py-2.5 pl-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all placeholder:text-slate-600" />
                  </div>
                  <select className="bg-[#0e0f16] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500/50">
                    <option>Member</option>
                    <option>Admin</option>
                  </select>
                </div>
              ))}

              <button className="text-xs text-indigo-400 font-medium hover:text-indigo-300 flex items-center gap-1 mt-2">
                <Plus className="w-3 h-3" /> Add another
              </button>

              <div className="pt-6 mt-2 border-t border-white/5">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-indigo-500/10 text-indigo-400">
                      <Link className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">Invite Link</div>
                      <div className="text-[10px] text-slate-400">Anyone with the link can join</div>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 rounded text-xs font-medium bg-white text-black hover:bg-slate-200 transition-colors">Copy</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer / Navigation */}
        <div className="px-8 py-6 border-t border-white/5 bg-[#0A0B10] flex items-center justify-between">
          <button onClick={goBack} className={`text-sm font-medium text-slate-500 hover:text-white transition-colors flex items-center gap-2 ${currentStep === 1 ? 'invisible' : ''}`}>
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <button onClick={goNext} className="bg-white text-black hover:bg-slate-200 font-medium text-sm px-6 py-2.5 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-white/5 flex items-center gap-2">
            {currentStep === totalSteps ? 'Finish setup' : 'Continue'} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .grid-bg {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }
        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-step {
          animation: fade-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .role-radio:checked + div {
          border-color: #6366f1;
          background-color: rgba(99, 102, 241, 0.05);
        }
        .role-radio:checked + div .check-icon {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </main>
  );
}
