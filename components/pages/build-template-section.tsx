import React from 'react';
import { Search, Filter } from 'lucide-react';
import { TemplateCard } from '@/components/pages/build-template-card'; // Assuming separate file

export const TemplatesSection: React.FC = () => {
  const templates = [
    {
      title: 'NFT Minting Engine',
      creator: '0xBase...44',
      forks: '2.4k',
      tags: ['Solidity', 'React'],
      verified: true,
      badge: 'ERC-721',
      badgeColor: 'text-purple-400',
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Swap Interface',
      creator: 'Uniswap_V3_Fork',
      forks: '892',
      tags: ['AMM', 'Typescript'],
      price: '$49',
      badge: 'DEFI',
      badgeColor: 'text-indigo-400',
      imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'
    },
    {
      title: 'Governance Voting UI',
      creator: 'OpenZeppelin',
      forks: '5.6k',
      tags: ['Governor', 'Vote'],
      verified: true,
      badge: 'DAO',
      badgeColor: 'text-fuchsia-400',
      imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'
    },
    {
      title: 'Perpetual Futures DEX',
      creator: 'GMX_Fork',
      forks: '3.1k',
      tags: ['Leverage', 'Oracle'],
      verified: true,
      imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg'
    },
    {
      title: 'Dark Mode Wallet',
      creator: 'RainbowKit',
      forks: '4.5k',
      tags: ['Connect', 'Web3.js'],
      verified: true,
      imageUrl: 'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Staking Dashboard',
      creator: 'Lido_Clone',
      forks: '1.2k',
      tags: ['Rewards', 'APY'],
      verified: true,
      imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp'
    }
  ];

  const categories = ['All Protocols', 'DeFi', 'NFTs', 'DAO', 'Infra', 'GameFi'];

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-white">Ecosystem Templates</h2>
          <p className="text-lg text-slate-500 mt-2 font-light">Fork verified contracts and frontends built by the community.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-purple-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Search smart contracts..." 
              className="pl-10 pr-4 py-2.5 bg-[#0A0A0C] border border-white/10 rounded-lg text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 w-64 transition-all shadow-lg"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2.5 bg-[#0A0A0C] border border-white/10 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-12 pb-2 border-b border-white/5">
        {categories.map((cat, idx) => (
          <button 
            key={cat}
            className={idx === 0 
              ? "px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium whitespace-nowrap shadow-[0_0_10px_rgba(168,85,247,0.2)]"
              : "px-4 py-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 text-sm font-medium whitespace-nowrap transition-colors"
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, idx) => (
          <TemplateCard key={idx} {...template} />
        ))}
      </div>

      <div className="mt-24 flex justify-center">
        <button className="bg-white hover:bg-purple-400 text-black px-8 py-3 rounded-full font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-300">
          EXPLORE ALL 440+ TEMPLATES
        </button>
      </div>
    </>
  );
};