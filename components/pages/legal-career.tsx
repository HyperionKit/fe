import { Sparkles, Layers, Megaphone, GitFork, Zap, FileCode , PenTool, Users, PanelsTopLeft, MonitorSmartphone, Presentation, ShieldCheck, Server } from 'lucide-react';
const iconSize = 16;

export default function CareersPage() {
return ( 

    <div className="min-h-screen  text-white"> 

    <section className="w-full max-w-6xl mx-auto p-8 lg:p-12">
    {/* Header Section */} 

    <div className="mb-16 border-b border-white/5 pb-12"> <div className="inline-flex items-center gap-2 text-violet-400 mb-6 bg-violet-500/10 px-3 py-1 rounded-full text-xs font-medium border border-violet-500/10"> <Sparkles className="w-3 h-3" /> <span>Core Team</span> </div>

      <h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6">
        Building the future<br /> 
        <span className="font-serif italic text-violet-400">from zero to one</span>.
      </h1>

      <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-8">
        We are a small, elite team solving the hardest problems in data infrastructure. 
        Here is the architecture of our founding team.
      </p>
      
      <div className="flex gap-6 mt-8">
        <div className="flex flex-col">
          <span className="text-2xl font-medium text-white">Remote</span>
          <span className="text-sm text-slate-500">Async-first culture</span>
        </div>
        <div className="w-px h-auto bg-white/10"></div>
        <div className="flex flex-col">
          <span className="text-2xl font-medium text-white">3</span>
          <span className="text-sm text-slate-500">Founding Members</span>
        </div>
      </div>
    </div>

    {/* Founding Roles Section */}
    <h2 className="text-3xl font-medium text-white mb-8">Founding Roles</h2>
    
    <div className="space-y-8">
      {/* Role 1: Chief Product & Ops Officer */}
      <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-violet-500/30 transition-all relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-40 h-40 bg-violet-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-violet-500/10 transition-all"></div>
        
        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 text-violet-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Chief Product & Ops Officer
            </h3>
            <p className="text-violet-400 text-sm mb-4">Justine — Product Lead</p>
            <div className="space-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-2">
                <FileCode size={iconSize} />
                <span>Smart Contracts</span>
            </div>
            <div className="flex items-center gap-2">
                <PenTool size={iconSize} />
                <span>UI & Design</span>
            </div>
            <div className="flex items-center gap-2">
                <Users size={iconSize} />
                <span>Community</span>
            </div>
            </div>
          </div>
          
          <div className="lg:w-3/4 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-6 lg:pt-0 space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                What you do
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Define and guide product features, design, user experience, and business model.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Write, deploy, and audit smart contracts for all blockchain components.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Manage community outreach (Twitter, Telegram) and maintain project governance.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Integrate proper engineering and AI agent instructions into docs.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Support frontend development by providing design, parameters, and feedback on Justine's code/UI team.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-500/5 rounded-lg p-4 border border-gray-500/20">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-3 h-3 text-violet-400" />
                <span>Impact</span>
              </h4>
              <p className="text-sm text-slate-300">
                You ensure the product gets built, works, and is well-documented 
while keeping the team and user community aligned. You’re the bridge
between code, design, docs, and users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Role 2: Chief Marketing & Frontend */}
      <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-40 h-40 bg-violet-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all"></div>
        
        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-violet-400">
              <Presentation className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Chief Marketing & Frontend
            </h3>
            <p className="text-blue-400 text-sm mb-4">Tristan — Product Evangelist</p>
            
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <PanelsTopLeft size={iconSize}/>
                <span>Frontend Code</span>
              </div>
              <div className="flex items-center gap-2">
                <Megaphone size={iconSize}/>
                <span>Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <MonitorSmartphone size={iconSize}/>
                <span>UI Implementation</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/4 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-6 lg:pt-0 space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                What you do
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Build and code the UI and frontend systems.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Translate Justine/leadership's UX and engineering user interface.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Deliver public pitches, demos, and presentations at hackathons or investor meetings.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Lead marketing campaigns, social outreach, and user onboarding.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Work closely with product Lead (Justine) to maintain vision cohesion.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-500/5 rounded-lg p-4 border border-gray-500/20">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-3 h-3 text-violet-400" />
                <span>Impact</span>
              </h4>
              <p className="text-sm text-slate-300">
                Tristan ensures Hyperkit is easy to use, visually appealing, and reaches
new audiences. He turns technical concepts and backend logic into
compelling interactive experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

{/* Role 2: Chief Marketing & Frontend */}
      <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-green-500/30 transition-all relative overflow-hidden group">
        <div className="absolute right-0 top-0 w-40 h-40 bg-green-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-green-500/10 transition-all"></div>
        
        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 text-violet-400">
              <Megaphone className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Chief Technology Officer
            </h3>
            <p className="text-green-400 text-sm mb-4">Aaron — Product Architect</p>
            
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Server size={iconSize}/>
                <span>Backend Architect</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={iconSize}/>
                <span>Security</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork size={iconSize}/>
                <span>Scalability</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/4 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-6 lg:pt-0 space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                What you do
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Originates the project idea and technical vision.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Designs backend architecture, APIs, smart contract integrations, and
system logic.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Audits all major code (security, correctness, performance) and sets code
standards.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Oversees platform reliability, scalability, and technical decision-making.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Guides future technical direction, ensuring project adapts to new trends.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-500/5 rounded-lg p-4 border border-gray-500/20">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-3 h-3 text-violet-400" />
                <span>Impact</span>
              </h4>
              <p className="text-sm text-slate-300">
                Aaron’s work keeps Hyperkit secure, scalable, and on the right
technical path. He ensures all code meets the highest standards and
supports long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="mt-12 bg-violet-400/5 text-center border border-white/10 p-16 rounded-xl">
    <h2 className="text-3xl font-semibold text-white mb-4">Want to work with us?</h2>
    <p className="text-slate-400/90 mb-8 max-w-md mx-auto leading-relaxed">
        We're a tiny team moving fast. We aren't currently hiring for new full-time roles, but we are always open to hearing from talented builders.
    </p>
    <button className="bg-white text-slate-900 px-8 py-3.5 rounded-xl font-medium hover:bg-slate-50 transition-all shadow-lg shadow-white/10">
        Say Hello
    </button>
    </div>
  </section>
</div>

);
}
