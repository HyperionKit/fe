import React from 'react';
import { Layers, Globe, Bot } from 'lucide-react';
import { ProjectCard } from '@/components/pages/build-project-card'; // Assuming separate file

export const DeploymentsSection: React.FC = () => {
  const projects = [
    {
      title: 'Yield Aggregator',
      description: 'Cross-chain liquidity farming protocol V2.',
      status: 'ACTIVE' as const,
      network: 'ETH Mainnet',
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      iconBg: 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30'
    },
    {
      title: 'Synapse DAO',
      description: 'Governance framework for on-chain voting.',
      status: 'AUDITING' as const,
      network: 'Polygon',
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      iconBg: 'bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30'
    },
    {
      title: 'Untitled Token',
      description: 'Waiting for deployment...',
      status: 'DRAFT' as const,
      icon: <span className="font-mono text-slate-400">0x</span>,
      iconBg: 'bg-white/5 border border-white/10'
    },
    {
      title: 'Trading Bot X',
      description: 'Arbitrage bot on Solana network.',
      status: 'ACTIVE' as const,
      network: 'Solana',
      icon: <Bot className="w-5 h-5 text-pink-400" />,
      iconBg: 'bg-pink-500/10 border border-pink-500/20'
    }
  ];

  return (
    <div className="mb-32">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-white flex items-center gap-3">
            Active Deployments
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Real-time status of your on-chain infrastructure.
          </p>
        </div>

        <button className="text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-widest border-b border-transparent hover:border-purple-400">
          View Network
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};