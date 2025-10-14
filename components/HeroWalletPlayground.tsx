import React, { useState } from "react";

const SNIPPETS = [
  {
    title: "Connect Wallet",
    description: "Start by connecting a wallet with one line of code",
    code: `import { connectWallet } from "@hyperkit/sdk";

const wallet = await connectWallet({
  login: "google",
  chainId: 1
});

console.log("Wallet ready:", wallet.address);
// Output: Wallet ready: 0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6`,
    expected: "Wallet ready: 0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
  },
  {
    title: "Sign Message",
    description: "Sign messages with your smart wallet",
    code: `const message = "Hello Hyperkit!";
const signature = await wallet.signMessage(message);

console.log("Signature:", signature);
// Output: Signature: 0x1234...5678`,
    expected: "Signature: 0x1234...5678"
  },
  {
    title: "Send Transaction",
    description: "Send transactions with gas sponsorship",
    code: `const tx = await wallet.sendTransaction({
  to: "0x...",
  value: "0.1",
  gasSponsored: true
});

console.log("Transaction hash:", tx.hash);
// Output: Transaction hash: 0xabcd...efgh`,
    expected: "Transaction hash: 0xabcd...efgh"
  },
  {
    title: "Batch Operations",
    description: "Execute multiple operations in one transaction",
    code: `const batch = await wallet.batch([
  { type: "transfer", to: "0x...", value: "0.1" },
  { type: "approve", token: "USDC", amount: "100" }
]);

console.log("Batch executed:", batch.txHash);
// Output: Batch executed: 0x9876...5432`,
    expected: "Batch executed: 0x9876...5432"
  }
];

export const HeroWalletPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput("Running...");
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setOutput(SNIPPETS[activeTab].expected + " (simulated)");
    setIsRunning(false);
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setOutput("");
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
        <h2 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'Inter'}}>
          Try Hyperkit API
        </h2>
        <p className="text-purple-100 text-sm">
          Experience the power of smart wallet development with live code examples
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
        <div className="flex flex-wrap gap-2">
          {SNIPPETS.map((snippet, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              {snippet.title}
            </button>
          ))}
        </div>
      </div>

      {/* Code Editor */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2" style={{fontFamily: 'Inter'}}>
            {SNIPPETS[activeTab].title}
          </h3>
          <p className="text-gray-400 text-sm">
            {SNIPPETS[activeTab].description}
          </p>
        </div>

        <div className="bg-gray-950 rounded-lg p-4 mb-4 border border-gray-700">
          <pre className="text-green-400 text-sm font-mono overflow-x-auto">
            <code>{SNIPPETS[activeTab].code}</code>
          </pre>
        </div>

        {/* Run Button */}
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={handleRun}
            disabled={isRunning}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
              isRunning
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
            style={{fontFamily: 'Inter'}}
          >
            {isRunning ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Running...
              </div>
            ) : (
              'Run Code'
            )}
          </button>
          
          <button
            onClick={() => setOutput("")}
            className="px-4 py-3 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
            style={{fontFamily: 'Inter'}}
          >
            Clear Output
          </button>
        </div>

        {/* Output */}
        {output && (
          <div className="bg-gray-950 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-400 font-semibold text-sm">Output:</span>
            </div>
            <pre className="text-green-400 text-sm font-mono">
              {output}
            </pre>
          </div>
        )}

        {/* Tips */}
        <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">💡</span>
            </div>
            <div>
              <p className="text-blue-200 text-sm font-medium mb-1">Pro Tip</p>
              <p className="text-blue-300 text-sm">
                All results are simulated for demo purposes. In production, these APIs connect to real blockchain networks and smart wallets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWalletPlayground;
