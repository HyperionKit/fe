'use client';

import React, { useState, useEffect } from 'react';
import { useDemo } from './DemoProvider';
import { useDemoWallet, useDemoTransaction, useDemoAuth, useDemoProgress } from './useDemoHooks';

interface InteractiveDemoProps {
  featureId: string;
  onClose: () => void;
}

const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ featureId, onClose }) => {
  const { demo, state } = useDemo();
  const { connected, address, balance, connect, disconnect } = useDemoWallet();
  const { status, txHash, sendTransaction, reset: resetTransaction } = useDemoTransaction();
  const { user, authenticate, logout } = useDemoAuth();
  const { progress, isRunning, start: startProgress, reset: resetProgress } = useDemoProgress();

  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const feature = demo.features.find(f => f.id === featureId);
  if (!feature) return null;

  const steps = feature.demoSteps;
  const currentStepData = steps[currentStep];

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsCompleted(true);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, steps.length, isRunning]);

  const handleStart = () => {
    setCurrentStep(0);
    setIsCompleted(false);
    startProgress();
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsCompleted(false);
    resetProgress();
    resetTransaction();
  };

  const renderStepContent = () => {
    switch (featureId) {
      case 'zero-friction-signup':
        return <OnboardingStep step={currentStep} />;
      case 'gasless-transactions':
        return <TransactionStep step={currentStep} />;
      case 'programmable-account':
        return <AccountStep step={currentStep} />;
      case 'cross-chain-bridging':
        return <BridgeStep step={currentStep} />;
      case 'developer-integration':
        return <IntegrationStep step={currentStep} />;
      default:
        return <DefaultStep step={currentStep} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-700">
          <div>
            <h2 className="text-2xl font-bold text-white" style={{fontFamily: 'Be Vietnam Pro'}}>
              {feature.title}
            </h2>
            <p className="text-gray-400 text-sm" style={{fontFamily: 'Inter'}}>
              Interactive Demo
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-neutral-700 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <div className="bg-neutral-800 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>
              {currentStepData}
            </h3>
            {renderStepContent()}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentStep >= steps.length - 1}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={handleStart}
                disabled={isRunning}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isRunning ? 'Running...' : 'Start Demo'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Step Components
const OnboardingStep: React.FC<{ step: number }> = ({ step }) => {
  const { user, authenticate, isAuthenticating } = useDemoAuth();
  const { connected, connect } = useDemoWallet();

  switch (step) {
    case 0:
      return (
        <div className="text-center">
          <div className="text-6xl mb-4">🚀</div>
          <p className="text-gray-300 mb-6">Welcome to Hyperkit! Let's get you started.</p>
          <button
            onClick={() => authenticate('google')}
            disabled={isAuthenticating}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isAuthenticating ? 'Connecting...' : 'Sign in with Google'}
          </button>
        </div>
      );
    case 1:
      return (
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <p className="text-gray-300 mb-6">Authentication successful! Creating your smart wallet...</p>
          <div className="animate-spin w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      );
    case 2:
      return (
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <p className="text-gray-300 mb-6">Smart wallet created successfully!</p>
          <div className="bg-neutral-700 rounded-lg p-4 text-left">
            <div className="text-sm text-gray-400 mb-2">Wallet Address:</div>
            <div className="text-green-400 font-mono text-sm">0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6</div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="text-center">
          <div className="text-6xl mb-4">🏠</div>
          <p className="text-gray-300 mb-6">Welcome to your dashboard! You're ready to start transacting.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-white">$1,234.56</div>
              <div className="text-sm text-gray-400">Balance</div>
            </div>
            <div className="bg-neutral-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-white">0</div>
              <div className="text-sm text-gray-400">Transactions</div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const TransactionStep: React.FC<{ step: number }> = ({ step }) => {
  const { status, txHash, sendTransaction, reset } = useDemoTransaction();
  const [amount, setAmount] = useState('100');
  const [recipient, setRecipient] = useState('0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6');

  switch (step) {
    case 0:
      return (
        <div>
          <p className="text-gray-300 mb-6">Let's send some USDC. No gas fees required!</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Amount (USDC)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Recipient Address</label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white font-mono text-sm"
              />
            </div>
            <button
              onClick={() => sendTransaction(recipient, amount)}
              className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Transaction
            </button>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-gray-300 mb-6">Transaction is being processed...</p>
          <div className="animate-spin w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      );
    case 2:
      return (
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <p className="text-gray-300 mb-6">Transaction completed successfully!</p>
          <div className="bg-neutral-700 rounded-lg p-4 text-left">
            <div className="text-sm text-gray-400 mb-2">Transaction Hash:</div>
            <div className="text-green-400 font-mono text-sm break-all">{txHash}</div>
            <div className="text-sm text-gray-400 mt-2">Gas Used: 21,000 (Sponsored)</div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const AccountStep: React.FC<{ step: number }> = ({ step }) => {
  const [operations, setOperations] = useState<any[]>([]);

  switch (step) {
    case 0:
      return (
        <div>
          <p className="text-gray-300 mb-6">Let's batch multiple operations into a single transaction.</p>
          <div className="space-y-4">
            <div className="bg-neutral-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Available Operations:</h4>
              <div className="space-y-2">
                {['Approve USDC', 'Swap USDC to ETH', 'Send ETH to friend'].map((op, index) => (
                  <button
                    key={index}
                    onClick={() => setOperations(prev => [...prev, { id: index, name: op }])}
                    className="w-full text-left px-3 py-2 bg-neutral-600 rounded hover:bg-neutral-500 transition-colors"
                  >
                    + {op}
                  </button>
                ))}
              </div>
            </div>
            {operations.length > 0 && (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Selected Operations:</h4>
                {operations.map((op, index) => (
                  <div key={index} className="text-green-300 text-sm">• {op.name}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    case 1:
      return (
        <div className="text-center">
          <div className="text-6xl mb-4">⚡</div>
          <p className="text-gray-300 mb-6">Executing batch transaction...</p>
          <div className="animate-spin w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      );
    case 2:
      return (
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <p className="text-gray-300 mb-6">Batch transaction completed! All operations executed in a single transaction.</p>
          <div className="bg-neutral-700 rounded-lg p-4 text-left">
            <div className="text-sm text-gray-400 mb-2">Gas Saved: 60%</div>
            <div className="text-sm text-gray-400">Operations: {operations.length}</div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const BridgeStep: React.FC<{ step: number }> = ({ step }) => {
  const [fromChain, setFromChain] = useState('ethereum');
  const [toChain, setToChain] = useState('polygon');
  const [amount, setAmount] = useState('1000');

  switch (step) {
    case 0:
      return (
        <div>
          <p className="text-gray-300 mb-6">Let's bridge USDC from Ethereum to Polygon.</p>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">From Chain</label>
                <select
                  value={fromChain}
                  onChange={(e) => setFromChain(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white"
                >
                  <option value="ethereum">Ethereum</option>
                  <option value="polygon">Polygon</option>
                  <option value="arbitrum">Arbitrum</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">To Chain</label>
                <select
                  value={toChain}
                  onChange={(e) => setToChain(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white"
                >
                  <option value="ethereum">Ethereum</option>
                  <option value="polygon">Polygon</option>
                  <option value="arbitrum">Arbitrum</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Amount (USDC)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white"
              />
            </div>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Start Bridge
            </button>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="text-center">
          <div className="text-6xl mb-4">🌉</div>
          <p className="text-gray-300 mb-6">Finding optimal bridge route...</p>
          <div className="animate-spin w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      );
    case 2:
      return (
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <p className="text-gray-300 mb-6">Bridge completed! Your USDC is now on Polygon.</p>
          <div className="bg-neutral-700 rounded-lg p-4 text-left">
            <div className="text-sm text-gray-400 mb-2">Route: Ethereum → Polygon</div>
            <div className="text-sm text-gray-400">Fee Saved: 40%</div>
            <div className="text-sm text-gray-400">Time: 3 minutes</div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const IntegrationStep: React.FC<{ step: number }> = ({ step }) => {
  switch (step) {
    case 0:
      return (
        <div>
          <p className="text-gray-300 mb-6">Let's integrate Hyperkit into your React app.</p>
          <div className="bg-neutral-700 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-2">1. Install the package:</div>
            <div className="bg-black rounded p-2 text-green-400 font-mono text-sm">
              npm install @hyperkit/react
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <p className="text-gray-300 mb-6">2. Add the provider to your app:</p>
          <div className="bg-neutral-700 rounded-lg p-4">
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`import { HyperkitProvider } from '@hyperkit/react'

function App() {
  return (
    <HyperkitProvider config={config}>
      <YourApp />
    </HyperkitProvider>
  )
}`}
            </pre>
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <p className="text-gray-300 mb-6">3. Use the components:</p>
          <div className="bg-neutral-700 rounded-lg p-4">
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`import { ConnectButton, TransactionButton } from '@hyperkit/components'

function Wallet() {
  return (
    <div>
      <ConnectButton />
      <TransactionButton 
        action="send"
        amount="100"
        token="USDC"
      />
    </div>
  )
}`}
            </pre>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <p className="text-gray-300 mb-6">Integration complete! Your app now has smart wallet functionality.</p>
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
            <div className="text-green-400 font-semibold">Integration Time: 10 minutes</div>
            <div className="text-green-300 text-sm">vs 2+ hours with other solutions</div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const DefaultStep: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="text-center">
      <div className="text-6xl mb-4">🚀</div>
      <p className="text-gray-300">Demo step {step + 1}</p>
    </div>
  );
};

export default InteractiveDemo;
