"use client";
import Link from 'next/link'
import { Github } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white text-black">

      {/* Hero Content */}
      <div className='px-8 pt-18 text-center'>
        <h1 className='text-2xl md:text-2xl font-bold mb-6 leading-tight text-violet-600'>Hyperkit</h1>
      </div>
      <div className="px-8 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Build DeFi, Bridge Chains, Thrive in{' '}
          <span className="bg-clip-text">
            Hyperion
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Modular tools and cross-chain magic with HyperKit empowering 
          developers to create, connect, and grow in minutes.
        </p>
        
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
            npm create hyperkit
          </button>
          <Link href="/docs" className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
            <span>Docs</span>
            <span>→</span>
          </Link>
          <Link href="https://github.com/HyperionKit" className="bg-black hover:bg-gray-800 text-white p-3 rounded-lg transition-all duration-300">
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;