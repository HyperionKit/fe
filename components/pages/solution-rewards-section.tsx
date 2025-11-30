import React from 'react';
import { Sparkles, Medal, Megaphone, Crown, User, Code2, TerminalSquare } from 'lucide-react';
import { Badge } from '@/components/pages/solution-badge';
import { RecognitionFeature } from '@/components/pages/solution-recognition';
import { RoleCard } from '@/components/pages/solution-role-card';
import { SectionDivider } from '@/components/pages/solution-section-divider';

export const RewardsSection: React.FC = () => (
  <section className="w-full py-24 flex flex-col items-center">
    <Badge>Community & Growth</Badge>

    <div className="text-center max-w-3xl mx-auto mb-16 relative">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-6 pb-2">
        How Earn Recognition & Rewards?
      </h2>
      <p className="text-lg text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
        Earn NFTs, tokens, and exclusive access through our point-based contribution system.
      </p>
    </div>

    {/* Recognition Rewards List */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl w-full mb-24 px-4">
      <RecognitionFeature 
        icon={<Sparkles className="w-5 h-5" />}
        title="Priority Access"
        description="Receive priority access to future Hyperion network events and beta testing phases."
      />
      <RecognitionFeature 
        icon={<Medal className="w-5 h-5" />}
        title="Verifiable Accomplishments"
        description="Receive on-chain badges based on your objective accomplishments and contributions."
      />
      <RecognitionFeature 
        icon={<Megaphone className="w-5 h-5" />}
        title="Marketing Recognition"
        description="Badge holders get special marketing recognition, social shoutouts, and profile features."
      />
      <RecognitionFeature 
        icon={<Crown className="w-5 h-5" />}
        title="Exclusive Opportunities"
        description="Get exclusive investment and networking opportunities in our tiered badge system."
      />
    </div>

    <SectionDivider>Roles & Tiers</SectionDivider>

    {/* Cards Layout (Roles) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
      <RoleCard 
        tier="Tier 1"
        icon={<User className="w-4 h-4 text-slate-400" />}
        title="HyperContributor"
        description="Entry-level contributors who complete basic tasks."
        benefits={[
          'Basic token allocations',
          'Community access',
          'Testing participation'
        ]}
      />
      
      <RoleCard 
        tier="Tier 2"
        icon={<Code2 className="w-4 h-4 text-purple-200" />}
        title="HyperCoder"
        description="Active developers with significant contributions."
        benefits={[
          'Enhanced allocations',
          'Beta access',
          'Priority support',
          'Private repos'
        ]}
        variant="highlighted"
      />
      
      <RoleCard 
        tier="Tier 3"
        icon={<TerminalSquare className="w-4 h-4 text-slate-400" />}
        title="HyperDeveloper"
        description="Elite developers with maximum engagement."
        benefits={[
          'Maximum allocations',
          'Governance rights',
          'Direct collaboration',
          'Exclusive opportunities'
        ]}
      />
    </div>
  </section>
);