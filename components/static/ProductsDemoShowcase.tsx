'use client';

import React, { useState } from 'react';
import { useDemo } from './DemoProvider';
import { useDemoWallet, useDemoTransaction, useDemoAuth, useDemoProgress } from './useDemoHooks';
import { DemoFeature } from '@/foundation/products-demo';
import InteractiveDemo from './InteractiveDemo';
import DemoNotifications from './DemoNotifications';

interface ProductsDemoShowcaseProps {
  className?: string;
}

const ProductsDemoShowcase: React.FC<ProductsDemoShowcaseProps> = ({ className = '' }) => {
  const { demo, state, startDemo, stopDemo, nextStep, previousStep, getCurrentStep, getDemoProgress } = useDemo();
  const { connected, address, balance, connect, disconnect } = useDemoWallet();
  const { status, txHash, sendTransaction, reset: resetTransaction } = useDemoTransaction();
  const { user, authenticate, logout } = useDemoAuth();
  const { progress, isRunning, start: startProgress, reset: resetProgress } = useDemoProgress();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({});
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Features', icon: '🌟' },
    { id: 'onboarding', name: 'Onboarding', icon: '🚀' },
    { id: 'transaction', name: 'Transactions', icon: '💸' },
    { id: 'account', name: 'Account', icon: '👤' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'integration', name: 'Integration', icon: '⚡' }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels', color: 'bg-gray-500' },
    { id: 'beginner', name: 'Beginner', color: 'bg-green-500' },
    { id: 'intermediate', name: 'Intermediate', color: 'bg-yellow-500' },
    { id: 'advanced', name: 'Advanced', color: 'bg-red-500' }
  ];

  const filteredFeatures = demo.features.filter(feature => {
    if (selectedCategory !== 'all' && feature.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'all' && feature.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const handleStartDemo = (feature: DemoFeature) => {
    if (feature.interactiveDemo) {
      setActiveDemo(feature.id);
    } else {
      startDemo(feature.id);
      startProgress();
    }
  };

  const handleStopDemo = () => {
    stopDemo();
    resetProgress();
  };

  const handleNextStep = () => {
    nextStep();
  };

  const handlePreviousStep = () => {
    previousStep();
  };

  const toggleCode = (featureId: string) => {
    setShowCode(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  const getRuleBadgeColor = (rule: string) => {
    const colors: { [key: string]: string } = {
      'onboarding-ux': 'bg-blue-500',
      'tx-flow': 'bg-green-500',
      'performance-optimization': 'bg-purple-500',
      'accessibility-compliance': 'bg-orange-500',
      'smart-wallet-config': 'bg-red-500'
    };
    return colors[rule] || 'bg-gray-500';
  };

  return (
    <div className={`w-full ${className}`}>
      <DemoNotifications />
      {activeDemo && (
        <InteractiveDemo
          featureId={activeDemo}
          onClose={() => setActiveDemo(null)}
        />
      )}
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily: 'Be Vietnam Pro'}}>
          Smart Wallet Features
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto" style={{fontFamily: 'Inter'}}>
          Experience the power of Hyperkit's smart wallet technology through interactive demos. 
          No backend required - everything runs in your browser.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {Object.entries(demo.stats).map(([key, value]) => (
          <div key={key} className="bg-neutral-800 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1" style={{fontFamily: 'Be Vietnam Pro'}}>
              {value}
            </div>
            <div className="text-sm text-gray-400 capitalize" style={{fontFamily: 'Inter'}}>
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-neutral-700 text-gray-300 hover:bg-neutral-600'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="flex gap-2">
          {difficulties.map(difficulty => (
            <button
              key={difficulty.id}
              onClick={() => setSelectedDifficulty(difficulty.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedDifficulty === difficulty.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-neutral-700 text-gray-300 hover:bg-neutral-600'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${difficulty.color} inline-block mr-2`}></span>
              {difficulty.name}
            </button>
          ))}
        </div>
      </div>

      {/* Demo Controls */}
      {state.isDemoRunning && state.activeFeature && (
        <div className="bg-neutral-800 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white" style={{fontFamily: 'Be Vietnam Pro'}}>
              Running Demo: {state.activeFeature.title}
            </h3>
            <button
              onClick={handleStopDemo}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Stop Demo
            </button>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Progress</span>
              <span>{Math.round(getDemoProgress())}%</span>
            </div>
            <div className="w-full bg-neutral-700 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getDemoProgress()}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-300">
              Step {state.currentStep + 1} of {state.activeFeature.demoSteps.length}: {getCurrentStep()}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePreviousStep}
                disabled={state.currentStep === 0}
                className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <button
                onClick={handleNextStep}
                disabled={state.currentStep >= state.activeFeature.demoSteps.length - 1}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFeatures.map((feature) => (
          <div
            key={feature.id}
            className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300 group"
          >
            {/* Feature Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2" style={{fontFamily: 'Be Vietnam Pro'}}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3" style={{fontFamily: 'Inter'}}>
                  {feature.description}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  feature.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                  feature.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {feature.difficulty}
                </span>
                <span className="text-xs text-gray-400">
                  {feature.estimatedTime}
                </span>
              </div>
            </div>

            {/* Rule Badges */}
            {feature.ruleBadges && feature.ruleBadges.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {feature.ruleBadges.map((rule) => (
                  <span
                    key={rule}
                    className={`px-2 py-1 rounded text-xs font-medium ${getRuleBadgeColor(rule)} text-white`}
                  >
                    {rule}
                  </span>
                ))}
              </div>
            )}

            {/* UX Tip */}
            {feature.uxTip && (
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 text-sm">💡</span>
                  <p className="text-blue-300 text-sm" style={{fontFamily: 'Inter'}}>
                    {feature.uxTip}
                  </p>
                </div>
              </div>
            )}

            {/* Demo Steps */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2" style={{fontFamily: 'Inter'}}>
                Demo Steps:
              </h4>
              <ul className="space-y-1">
                {feature.demoSteps.map((step, index) => (
                  <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-purple-400 text-xs mt-1">•</span>
                    <span style={{fontFamily: 'Inter'}}>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Example */}
            <div className="mb-4">
              <button
                onClick={() => toggleCode(feature.id)}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors mb-2"
              >
                {showCode[feature.id] ? 'Hide' : 'Show'} Code Example
              </button>
              {showCode[feature.id] && (
                <pre className="bg-black/50 text-xs rounded-lg p-3 font-mono overflow-x-auto text-green-400 border border-neutral-700">
                  {feature.codeExample}
                </pre>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {feature.interactiveDemo ? (
                <button
                  onClick={() => handleStartDemo(feature)}
                  disabled={state.isDemoRunning}
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                >
                  {state.isDemoRunning ? 'Demo Running...' : 'Start Demo'}
                </button>
              ) : (
                <button
                  disabled
                  className="flex-1 px-4 py-2 bg-neutral-700 text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium"
                >
                  Coming Soon
                </button>
              )}
              
              <button
                onClick={() => toggleCode(feature.id)}
                className="px-4 py-2 bg-neutral-700 text-gray-300 rounded-lg hover:bg-neutral-600 transition-colors text-sm font-medium"
              >
                {showCode[feature.id] ? '📝' : '💻'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Integration Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8" style={{fontFamily: 'Be Vietnam Pro'}}>
          Framework Integrations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {demo.integrations.map((integration, index) => (
            <div key={index} className="bg-neutral-800 rounded-xl p-6 text-center hover:bg-neutral-700 transition-colors">
              <div className="text-4xl mb-3">{integration.logo}</div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{fontFamily: 'Be Vietnam Pro'}}>
                {integration.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3" style={{fontFamily: 'Inter'}}>
                {integration.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <span className={`px-2 py-1 rounded ${
                  integration.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {integration.difficulty}
                </span>
                <span>{integration.timeToIntegrate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDemoShowcase;
