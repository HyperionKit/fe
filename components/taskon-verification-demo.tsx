'use client';

import React, { useState, useEffect } from 'react';
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi';
import { TASKON_TASKS, TaskOnTask, calculateUserScore } from '@/lib/taskon-config';

interface VerificationResult {
  isValid: boolean;
  message: string;
  taskDetails?: any;
  verificationData?: any;
  userProgress?: any;
}

interface TaskCompletion {
  taskId: string;
  completed: boolean;
  completions: number;
  lastVerified: string;
}

export default function TaskOnVerificationDemo() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  
  const [selectedTask, setSelectedTask] = useState<string>('');
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [userCompletions, setUserCompletions] = useState<TaskCompletion[]>([]);
  const [totalScore, setTotalScore] = useState(0);

  // Hyperion Testnet Chain ID
  const HYPERION_CHAIN_ID = 1337; // Update with actual Hyperion testnet chain ID

  useEffect(() => {
    if (isConnected && address) {
      // Initialize user completions
      const initialCompletions = TASKON_TASKS.map(task => ({
        taskId: task.id,
        completed: false,
        completions: 0,
        lastVerified: ''
      }));
      setUserCompletions(initialCompletions);
    }
  }, [isConnected, address]);

  useEffect(() => {
    if (userCompletions.length > 0) {
      const score = calculateUserScore(
        userCompletions.map(comp => ({
          taskId: comp.taskId,
          completions: comp.completions
        }))
      );
      setTotalScore(score);
    }
  }, [userCompletions]);

  const handleVerifyTask = async () => {
    if (!selectedTask || !address) return;

    setIsVerifying(true);
    setVerificationResult(null);

    try {
      const response = await fetch('/api/taskon/verify-enhanced', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: `wallet:${address}`,
          walletAddress: address,
          taskId: selectedTask,
          timestamp: Date.now()
        })
      });

      const result = await response.json();
      setVerificationResult(result);

      // Update user completions if verification was successful
      if (result.result.isValid) {
        setUserCompletions(prev => prev.map(comp => {
          if (comp.taskId === selectedTask) {
            return {
              ...comp,
              completed: true,
              completions: comp.completions + 1,
              lastVerified: new Date().toISOString()
            };
          }
          return comp;
        }));
      }
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationResult({
        isValid: false,
        message: 'Error during verification'
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleBatchVerification = async () => {
    if (!address) return;

    setIsVerifying(true);
    setVerificationResult(null);

    try {
      const taskIds = TASKON_TASKS.map(task => task.id).join(',');
      const response = await fetch(
        `/api/taskon/verify-enhanced?walletAddress=${address}&taskId=${taskIds}&batch=true&userId=wallet:${address}`
      );

      const result = await response.json();
      
      if (result.results) {
        // Update all completions based on batch results
        setUserCompletions(prev => prev.map(comp => {
          const batchResult = result.results.find((r: any) => r.result.taskDetails?.id === comp.taskId);
          if (batchResult && batchResult.result.isValid) {
            return {
              ...comp,
              completed: true,
              completions: comp.completions + 1,
              lastVerified: new Date().toISOString()
            };
          }
          return comp;
        }));

        setVerificationResult({
          isValid: true,
          message: `Batch verification completed. ${result.results.filter((r: any) => r.result.isValid).length} tasks verified.`
        });
      }
    } catch (error) {
      console.error('Batch verification error:', error);
      setVerificationResult({
        isValid: false,
        message: 'Error during batch verification'
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const getTaskById = (taskId: string): TaskOnTask | undefined => {
    return TASKON_TASKS.find(task => task.id === taskId);
  };

  const getCompletionStatus = (taskId: string) => {
    return userCompletions.find(comp => comp.taskId === taskId);
  };

  if (!isConnected) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">
            Wallet Not Connected
          </h2>
          <p className="text-yellow-700">
            Please connect your wallet to use the TaskOn verification system.
          </p>
        </div>
      </div>
    );
  }

  if (chain?.id !== HYPERION_CHAIN_ID) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">
            Wrong Network
          </h2>
          <p className="text-blue-700 mb-4">
            Please switch to Hyperion Testnet to use the TaskOn verification system.
          </p>
          <button
            onClick={() => switchNetwork?.(HYPERION_CHAIN_ID)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Switch to Hyperion Testnet
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          TaskOn Verification Demo
        </h1>
        
        {/* User Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Connected Wallet</p>
              <p className="font-mono text-sm text-gray-900">{address}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total Score</p>
              <p className="text-2xl font-bold text-blue-600">{totalScore}</p>
            </div>
          </div>
        </div>

        {/* Task Selection */}
        <div className="mb-6">
          <label htmlFor="task-select" className="block text-sm font-medium text-gray-700 mb-2">
            Select Task to Verify
          </label>
          <select
            id="task-select"
            value={selectedTask}
            onChange={(e) => setSelectedTask(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose a task...</option>
            {TASKON_TASKS.map((task) => (
              <option key={task.id} value={task.id}>
                {task.name} ({task.points} pts, max {task.maxCompletions}x)
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={handleVerifyTask}
            disabled={!selectedTask || isVerifying}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isVerifying ? 'Verifying...' : 'Verify Selected Task'}
          </button>
          
          <button
            onClick={handleBatchVerification}
            disabled={isVerifying}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isVerifying ? 'Verifying...' : 'Verify All Tasks'}
          </button>
        </div>

        {/* Verification Result */}
        {verificationResult && (
          <div className={`border rounded-lg p-4 mb-6 ${
            verificationResult.isValid 
              ? 'border-green-200 bg-green-50' 
              : 'border-red-200 bg-red-50'
          }`}>
            <h3 className={`font-semibold mb-2 ${
              verificationResult.isValid ? 'text-green-800' : 'text-red-800'
            }`}>
              {verificationResult.isValid ? '✓ Verification Successful' : '✗ Verification Failed'}
            </h3>
            <p className={`text-sm ${
              verificationResult.isValid ? 'text-green-700' : 'text-red-700'
            }`}>
              {verificationResult.message}
            </p>
            
            {verificationResult.verificationData && (
              <div className="mt-3 p-3 bg-white rounded border">
                <h4 className="font-medium text-gray-900 mb-2">Transaction Details</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-600">Hash:</span>
                    <p className="font-mono text-xs break-all">{verificationResult.verificationData.transactionHash}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Amount:</span>
                    <p>{verificationResult.verificationData.amount}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Block:</span>
                    <p>{verificationResult.verificationData.blockNumber}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Gas Used:</span>
                    <p>{verificationResult.verificationData.gasUsed}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Task Progress */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Task Progress</h3>
          <div className="grid gap-3">
            {TASKON_TASKS.map((task) => {
              const completion = getCompletionStatus(task.id);
              return (
                <div key={task.id} className="flex items-center justify-between p-3 bg-white rounded border">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{task.name}</h4>
                    <p className="text-sm text-gray-600">
                      {task.points} points • Max {task.maxCompletions} completions
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">
                      Completed: {completion?.completions || 0}/{task.maxCompletions}
                    </div>
                    <div className="text-lg font-semibold text-blue-600">
                      {Math.min((completion?.completions || 0), task.maxCompletions) * task.points} pts
                    </div>
                    {completion?.lastVerified && (
                      <div className="text-xs text-gray-500">
                        Last: {new Date(completion.lastVerified).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* API Information */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">API Endpoints</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <p><strong>Basic Verification:</strong> POST /api/taskon/verify</p>
            <p><strong>Enhanced Verification:</strong> POST /api/taskon/verify-enhanced</p>
            <p><strong>Test Endpoint:</strong> GET /api/taskon/verify?walletAddress=0x...&taskType=buy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
