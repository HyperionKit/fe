import React from 'react';
import { Box, Wallet, Cpu } from 'lucide-react';
import { Header } from '@/components/pages/products-header';
import { Card } from '@/components/pages/products-card';
import { ImportAssetsVisual } from '@/components/pages/products-asset-visual';
import { WalletOrbVisual } from '@/components/pages/products-wallet-orb';
import { AIAutomationVisual } from '@/components/pages/products-ai-automation-visual';
import { CodeIntegrationCard } from '@/components/pages/products-code-integration-card';

const Web3Toolkit: React.FC = () => {
  return (
    <div className="bg-[#05050A] text-slate-300 min-h-screen relative overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.15)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>
      <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <Header />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            icon={<Box />}
            iconBgColor="bg-purple-500/10"
            iconBorderColor="border-purple-500/20"
            iconColor="text-purple-400"
            title="Import your web3 assets in minutes"
            description="Seamlessly integrate with existing web3 infrastructure using our simple API."
            linkColor="text-purple-400"
          >
            <ImportAssetsVisual />
          </Card>

          <Card
            icon={<Wallet />}
            iconBgColor="bg-indigo-500/10"
            iconBorderColor="border-indigo-500/20"
            iconColor="text-indigo-400"
            title="Generate a Wallet with Hyperkit"
            description="Unlock the power of automation. Create secure wallets instantly."
            linkColor="text-indigo-400"
          >
            <WalletOrbVisual />
          </Card>

          <Card
            icon={<Cpu />}
            iconBgColor="bg-pink-500/10"
            iconBorderColor="border-pink-500/20"
            iconColor="text-pink-400"
            title="AI-powered tools"
            description="Generate, optimize, and deploy your DeFi applications automatically."
            linkColor="text-pink-400"
          >
            <AIAutomationVisual />
          </Card>

          <CodeIntegrationCard />
        </div>
      </main>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Web3Toolkit;