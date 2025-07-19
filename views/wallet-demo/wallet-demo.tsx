export default function ConnectWalletDemo() {
  return (
    <div className="space-y-1">
    {/* Comments */}
    <div className="text-gray-500">
        <div>{"// Follow docs.metis.org/hyperkit/docs/getting-started"}</div>
        <div>{"// to install dependencies"}</div>
    </div>

    <div className="mt-4"></div>

    {/* Import statement */}
    <div className="flex">
        <span className="text-purple-400">import</span>
        <span className="text-white ml-2">{"{"}</span>
    </div>

    {/* Import items */}
    <div className="ml-4 space-y-0">
        <div className="text-white">ConnectWalletPage</div>
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
        <span className="text-blue-400 ml-2">WalletAdvancedDemo</span>
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

        <div className="ml-4 space-y-0">
            <div className="flex">
            <span className="text-gray-400">{"<"}</span>
            <span className="text-blue-400">ConnectWalletPage</span>
            <span className="text-gray-400">{" />"}</span>
            </div>
        </div>
        </div>

        <div className="text-white"></div>
    </div>

    <div className="text-white">{"}"}</div>
    </div>
  );
}