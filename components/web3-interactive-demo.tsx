'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import { 
  SiNpm, 
  SiCoder,
  SiRocket,
  SiZap,
  SiBox
} from 'react-icons/si';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  action: 'click' | 'type' | 'highlight' | 'wait' | 'scroll' | 'drag';
  target?: string;
  content?: string;
  duration?: number;
  codeChange?: string;
  terminalCommand?: string;
  icon?: React.ReactNode;
}

const demoSteps: DemoStep[] = [
  {
    id: 'welcome',
    title: 'WELCOME TO HYPERKIT',
    description: 'Build DeFi applications in minutes with our modular toolkit. Experience the future of web3 development.',
    action: 'wait',
    duration: 3000,
    icon: <SiZap className="text-cyan-400 text-2xl" />
  },
  {
    id: 'install',
    title: 'INSTALL HYPERKIT',
    description: 'One command to rule them all. Initialize your DeFi project with our battle-tested components.',
    action: 'click',
    target: '.terminal-command',
    terminalCommand: 'npm create hyperkit my-defi-app',
    icon: <SiNpm className="text-red-400 text-2xl" />
  },
  {
    id: 'explore-components',
    title: 'EXPLORE COMPONENTS',
    description: 'Drag and drop DeFi components. Each one is production-ready and fully customizable.',
    action: 'highlight',
    target: '.component-palette',
    icon: <SiBox className="text-purple-400 text-2xl" />
  },
  {
    id: 'live-coding',
    title: 'LIVE CODING',
    description: 'Edit code and see changes instantly. Real React components running in your browser.',
    action: 'type',
    content: '// Try changing the button text or adding new components!',
    codeChange: `import { Button, Card, Input, WalletConnect } from '@hyperkit/ui';

export default function MyDeFiApp() {
  return (
    <Card className="p-6 max-w-md mx-auto bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">My DeFi App</h2>
      <div className="space-y-4">
        <Input 
          placeholder="Enter wallet address" 
          className="w-full bg-gray-800 border-gray-600 text-white"
        />
        <WalletConnect 
          onConnect={() => alert('Wallet connected!')}
          className="w-full"
        />
        <Button 
          onClick={() => alert('Transaction initiated!')}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600"
        >
          Execute Trade
        </Button>
      </div>
    </Card>
  );
}`,
    icon: <SiCoder className="text-green-400 text-2xl" />
  },
  {
    id: 'deploy',
    title: 'DEPLOY TO HYPERION',
    description: 'One-click deployment to the Hyperion network. Your app is live and ready for users.',
    action: 'click',
    target: '.deploy-button',
    icon: <SiRocket className="text-orange-400 text-2xl" />
  }
];

const initialCode = `import { Button, Card, WalletConnect } from '@hyperkit/ui';

export default function MyDeFiApp() {
  return (
    <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-white">My DeFi App</h2>
      <WalletConnect 
        onConnect={() => alert('Wallet connected!')}
        className="w-full mb-4"
      />
      <Button 
        onClick={() => alert('Hello DeFi!')}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600"
      >
        Connect Wallet
      </Button>
    </Card>
  );
}`;

export default function Web3InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlightedElement, setHighlightedElement] = useState<string | null>(null);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [code, setCode] = useState(initialCode);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);

  const terminalRef = useRef<HTMLDivElement>(null);

  const highlightElement = (targetSelector: string, duration = 3000) => {
    setHighlightedElement(targetSelector);
    setTimeout(() => {
      setHighlightedElement(null);
    }, duration);
  };

  const getHighlightPosition = () => {
    if (!highlightedElement) return {};
    const element = document.querySelector(highlightedElement);
    if (!element) return {};
    
    const rect = element.getBoundingClientRect();
    const container = document.querySelector('.relative');
    if (!container) return {};
    
    const containerRect = container.getBoundingClientRect();
    
    return {
      left: rect.left - containerRect.left - 8,
      top: rect.top - containerRect.top - 8,
      width: rect.width + 16,
      height: rect.height + 16,
    };
  };

  const simulateTyping = (text: string, speed = 50) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTerminalOutput(prev => [...prev, text[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTerminalOutput(prev => [...prev, '\n$ ']);
        }, 500);
      }
    }, speed);
  };

  const executeStep = (step: DemoStep) => {
    switch (step.action) {
      case 'click':
        if (step.target) {
          highlightElement(step.target, 2000);
        }
        break;
      case 'type':
        if (step.content) {
          simulateTyping(step.content);
        }
        if (step.codeChange) {
          setTimeout(() => {
            setCode(step.codeChange!);
          }, 2000);
        }
        break;
      case 'highlight':
        if (step.target) {
          highlightElement(step.target, 4000);
        }
        break;
      case 'wait':
        // Just wait for the specified duration
        break;
    }
  };

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsPlaying(false);
      setCurrentStep(0);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setTerminalOutput([]);
    setCode(initialCode);
  };

  const handleDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 3000);
  };

  useEffect(() => {
    if (isPlaying && currentStep < demoSteps.length) {
      const step = demoSteps[currentStep];
      executeStep(step);
      
      const timeout = setTimeout(() => {
        nextStep();
      }, step.duration || 4000);

      return () => clearTimeout(timeout);
    }
  }, [currentStep, isPlaying]);

  const currentStepData = demoSteps[currentStep];

  return (
    <div className="relative w-full h-full min-h-[700px]">
      {/* Highlight Overlay */}
      {highlightedElement && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="highlight-overlay w-full h-full relative">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <div 
              className="highlight-spot absolute border-2 border-cyan-400 rounded-xl animate-pulse shadow-2xl shadow-cyan-400/50 transition-all duration-500"
              style={{
                ...getHighlightPosition(),
                boxShadow: '0 0 0 2px rgba(34, 211, 238, 0.5), 0 0 20px rgba(34, 211, 238, 0.3)'
              }}>
            </div>
          </div>
        </div>
      )}

      {/* Step Guide Overlay */}
      {isPlaying && currentStepData && (
        <div className="absolute top-8 left-8 z-40 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl p-8 max-w-md border border-gray-700 shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
            {currentStepData.icon}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium tracking-wide">STEP {currentStep + 1} OF {demoSteps.length}</span>
              </div>
              <div className="flex-1 bg-gray-700 rounded-full h-1">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1 rounded-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
          <h3 className="text-white text-xl font-extrabold mb-3 tracking-tight">{currentStepData.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{currentStepData.description}</p>
        </div>
      )}

      {/* Success Toast */}
      {showSuccess && (
        <div className="absolute top-8 right-8 z-50 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-right border border-green-400/20">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            </div>
            <div>
              <div className="font-bold text-lg">Deployment Successful!</div>
              <div className="text-sm opacity-90">Your DeFi app is live on Hyperion</div>
            </div>
          </div>
        </div>
      )}

      {/* Main Demo Card */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700 overflow-hidden w-full max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="p-10 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <SiBox className="text-cyan-400 text-4xl" />
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white">HYPERKIT DEMO</h2>
                <p className="text-gray-400 text-lg">Interactive DeFi Development Experience</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={startDemo}
                disabled={isPlaying}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold rounded-xl hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isPlaying ? 'PLAYING...' : '▶ LAUNCH DEMO'}
              </button>
              <button
                onClick={() => setIsPlaying(false)}
                className="px-6 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all duration-300 border border-gray-600"
              >
                ⏹ STOP
              </button>
            </div>
          </div>
        </div>

        {/* Demo Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-10">
          {/* Left Panel - Terminal & Components */}
          <div className="space-y-8">
            {/* Terminal Section */}
            <div className="bg-black/80 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <SiNpm className="text-red-400 text-2xl" />
                <h3 className="text-xl font-bold text-white">TERMINAL</h3>
              </div>
              
              <div ref={terminalRef} className="font-mono text-sm min-h-32 text-green-400 whitespace-pre-wrap">
                {terminalOutput.map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
                <span className="animate-pulse text-cyan-400">_</span>
              </div>
              
              <div className={`terminal-command mt-4 p-4 rounded-xl cursor-pointer transition-all duration-500 border-2 ${
                highlightedElement === '.terminal-command' 
                  ? 'bg-cyan-900/30 border-cyan-400 shadow-lg shadow-cyan-400/25 scale-105' 
                  : 'bg-gray-800 border-gray-600 hover:bg-gray-700 hover:border-cyan-500'
              }`}>
                <span className="text-cyan-400 font-bold text-lg">$</span> npm create hyperkit
              </div>
            </div>

            {/* Component Palette */}
            <div className={`component-palette p-6 rounded-xl border-2 transition-all duration-500 ${
              highlightedElement === '.component-palette' 
                ? 'bg-purple-900/20 border-purple-400 shadow-lg shadow-purple-400/25 scale-105' 
                : 'bg-gray-800 border-gray-700'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <SiBox className="text-purple-400 text-2xl" />
                <h4 className="text-xl font-bold text-white">COMPONENT LIBRARY</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg cursor-pointer hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 border border-blue-500/20">
                  <div className="font-bold text-sm">WalletConnect</div>
                  <div className="text-xs opacity-75">Connect wallets</div>
                </div>
                <div className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg cursor-pointer hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 border border-blue-500/20">
                  <div className="font-bold text-sm">DeFiCard</div>
                  <div className="text-xs opacity-75">Trading cards</div>
                </div>
                <div className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg cursor-pointer hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 border border-blue-500/20">
                  <div className="font-bold text-sm">SwapButton</div>
                  <div className="text-xs opacity-75">Token swaps</div>
                </div>
                <div className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg cursor-pointer hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 border border-blue-500/20">
                  <div className="font-bold text-sm">LiquidityPool</div>
                  <div className="text-xs opacity-75">Pool management</div>
                </div>
              </div>
            </div>

            {/* Deploy Button */}
            <button
              onClick={handleDeploy}
              disabled={isDeploying}
              className={`deploy-button w-full py-4 rounded-xl font-bold text-lg transition-all duration-500 ${
                highlightedElement === '.deploy-button' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-400/25 scale-105' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 hover:scale-105'
              } text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg border border-white/10`}
            >
              <div className="flex items-center justify-center gap-3">
                <SiRocket className="text-2xl" />
                {isDeploying ? 'DEPLOYING TO HYPERION...' : 'DEPLOY TO HYPERION'}
              </div>
            </button>
          </div>

          {/* Right Panel - Sandpack Code Editor */}
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
            <div className="p-6 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <SiCoder className="text-green-400 text-2xl" />
                <h3 className="text-xl font-bold text-white">LIVE CODE EDITOR</h3>
              </div>
              <p className="text-gray-400 text-sm mt-1">Edit code and see changes instantly</p>
            </div>
            
            <div className="h-[500px]">
              <Sandpack
                template="react"
                files={{
                  '/App.js': code,
                }}
                options={{
                  showTabs: false,
                  showLineNumbers: true,
                  showInlineErrors: true,
                  wrapContent: true,
                  editorHeight: 500,
                  editorWidthPercentage: 100,
                  showNavigator: false,
                  showRefreshButton: false,
                }}
                theme="dark"
                customSetup={{
                  dependencies: {
                    '@hyperkit/ui': 'latest',
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {isPlaying && (
          <div className="px-10 pb-8">
            <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
