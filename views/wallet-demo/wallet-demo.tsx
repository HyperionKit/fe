export default function ConnectWalletDemo() {
  return (
    <div className="space-y-1">
    {/* Comments */}
    <div className="text-gray-500">
        <div>{"// Hyperion Testnet Smart Contract Integration"}</div>
        <div>{"// All contracts are verified and deployed on Hyperion testnet"}</div>
    </div>

    <div className="mt-4"></div>

    {/* Import statement */}
    <div className="flex">
        <span className="text-purple-400">import</span>
        <span className="text-white ml-2">{"{"}</span>
    </div>

    {/* Import items */}
    <div className="ml-4 space-y-0">
        <div className="text-white">BuyComponent,</div>
        <div className="text-white">EarnComponent,</div>
        <div className="text-white">SwapComponent,</div>
        <div className="text-white">BridgeComponent,</div>
        <div className="text-white">FaucetComponent</div>
    </div>

    <div className="flex">
        <span className="text-white">{"}"}</span>
        <span className="text-purple-400 ml-2">from</span>
        <span className="text-orange-400 ml-2">{"hyperionkit"}</span>
        <span className="text-white">;</span>
    </div>

    <div className="mt-4"></div>

    {/* Function declaration */}
    <div className="flex">
        <span className="text-purple-400">function</span>
        <span className="text-blue-400 ml-2">HyperionWalletDemo</span>
        <span className="text-white">() {"{"}</span>
    </div>

    {/* Return statement */}
    <div className="ml-2">
        <div className="flex">
        <span className="text-purple-400">return</span>
        <span className="text-white ml-2">{"("}</span>
        </div>

        {/* JSX */}
        <div className="ml-4 space-y-0">
            <div className="text-gray-400">{"<"}</div>
            <div className="text-blue-400 ml-4">div</div>
            <div className="text-white ml-4">className="space-y-6"</div>
            <div className="text-gray-400 ml-4">{">"}</div>
            
            <div className="ml-8 space-y-2">
                <div className="text-gray-400">{"<"}</div>
                <div className="text-blue-400 ml-4">BuyComponent</div>
                <div className="text-white ml-4">contractAddress="0x0adFd197aAbbC194e8790041290Be57F18d576a3"</div>
                <div className="text-gray-400 ml-4">{"/>"}</div>
                
                <div className="text-gray-400">{"<"}</div>
                <div className="text-blue-400 ml-4">SwapComponent</div>
                <div className="text-white ml-4">contractAddress="0x91C39DAA7617C5188d0427Fc82e4006803772B74"</div>
                <div className="text-gray-400 ml-4">{"/>"}</div>
                
                <div className="text-gray-400">{"<"}</div>
                <div className="text-blue-400 ml-4">EarnComponent</div>
                <div className="text-white ml-4">contractAddress="0xB94d264074571A5099C458f74b526d1e4EE0314B"</div>
                <div className="text-gray-400 ml-4">{"/>"}</div>
                
                <div className="text-gray-400">{"<"}</div>
                <div className="text-blue-400 ml-4">BridgeComponent</div>
                <div className="text-white ml-4">contractAddress="0xfF064Fd496256e84b68dAE2509eDA84a3c235550"</div>
                <div className="text-gray-400 ml-4">{"/>"}</div>
                
                <div className="text-gray-400">{"<"}</div>
                <div className="text-blue-400 ml-4">FaucetComponent</div>
                <div className="text-white ml-4">contractAddress="0xE1B8C7168B0c48157A5e4B80649C5a1b83bF4cC4"</div>
                <div className="text-gray-400 ml-4">{"/>"}</div>
            </div>
            
            <div className="text-gray-400 ml-4">{"</"}</div>
            <div className="text-blue-400 ml-4">div</div>
            <div className="text-gray-400 ml-4">{">"}</div>
        </div>

        <div className="text-white"></div>
    </div>

    <div className="text-white">{"}"}</div>
    </div>
  );
}