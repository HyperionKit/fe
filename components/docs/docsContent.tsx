import Link from "next/link"
import { Copy, Terminal } from "lucide-react"
import { Alert, AlertDescription } from "@/components/docs/customAlert" // Custom Alert
import { Button } from "@/components/docs/customButton" // Custom Button

export function DocsContent() {
  return (
    <article className="prose max-w-none">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Getting Started</h1>
        <Button variant="outline" size="sm" className="gap-1 bg-transparent">
          <Copy className="h-4 w-4" />
          Copy page
        </Button>
      </div>
      <p>Hyperkit is your go-to SDK for building beautiful onchain applications. Ship in minutes, not weeks.</p>
      <p>Anyone can build an onchain app in 15 minutes with Hyperkit. No blockchain experience required.</p>
      <h2 id="why-hyperkit">Why Hyperkit?</h2>
      <p>
        Hyperkit streamlines app development by providing a comprehensive toolkit that combines powerful onchain
        features with developer-friendly design:
      </p>
      <ul>
        <li>
          <strong>Ergonomic design:</strong> Full-stack tools that make complex onchain interactions intuitive
        </li>
        <li>
          <strong>Battle-tested patterns:</strong> Industry best practices packaged into ready-to-use solutions
        </li>
        <li>
          <strong>Purpose-built components:</strong> Pre-built modules for common onchain workflows
        </li>
        <li>
          <strong>Framework agnostic:</strong> Compatible with any React-supporting framework
        </li>
        <li>
          <strong>Supercharged by Base:</strong> Deep integration with Base&apos;s protocol features and ecosystem
        </li>
      </ul>
      <h2 id="automatic-installation">Automatic Installation</h2>
      <div className="relative rounded-md bg-gray-900 p-4 font-mono text-sm text-gray-50">
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            Terminal
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:bg-gray-800 hover:text-gray-50">
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy code</span>
          </Button>
        </div>
        <pre className="overflow-x-auto">
          <code>npm create hyperkit@latest</code>
        </pre>
      </div>
      <p>
        After the prompts, <code>create hyperkit</code> will create a folder with your project name and install the
        required dependencies.
      </p>
      <p>You can also checkout our pre-built templates:</p>
      <ul>
        <li>
          <Link href="#">Hyperkit Commerce</Link>
        </li>
        <li>
          <Link href="#">NFT minting</Link>
        </li>
        <li>
          <Link href="#">Funding flow</Link>
        </li>
        <li>
          <Link href="#">Social profile</Link>
        </li>
      </ul>
      <Alert className="border-green-500 bg-green-50 text-green-800">
        <AlertDescription className="flex items-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 shrink-0 text-green-400"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <p>
            These docs are LLM-friendly—reference{" "}
            <Link href="#" className="font-semibold text-green-700 underline">
              Hyperkit AI Prompting Guide
            </Link>{" "}
            in your code editor to streamline builds and prompt smarter.
          </p>
        </AlertDescription>
      </Alert>
      <h2 id="manual-installation">Manual Installation</h2>
      <p>Add Hyperkit to your existing project manually.</p>
      <h2 id="metis-protocol">Metis Protocol</h2>
      <p>
        Metis is an Ethereum Layer 2 scaling solution that aims to address the challenges of scalability, speed, and
        cost on the Ethereum blockchain. Built on Optimistic Rollup technology, Metis provides a highly scalable and
        low-cost environment for dApps and transactions.
      </p>
      <h3>Key Features of Metis:</h3>
      <ul>
        <li>
          <strong>Optimistic Rollup:</strong> Processes transactions off-chain and submits them to Ethereum in batches,
          significantly reducing gas fees and increasing throughput.
        </li>
        <li>
          <strong>EVM Compatibility:</strong> Fully compatible with the Ethereum Virtual Machine, allowing developers to
          easily migrate existing Ethereum dApps or build new ones.
        </li>
        <li>
          <strong>Low Gas Fees & Fast Transactions:</strong> Offers significantly lower transaction costs and faster
          confirmation times compared to Ethereum mainnet.
        </li>
        <li>
          <strong>Decentralized Autonomous Companies (DACs):</strong> Introduces a unique framework for building and
          managing DACs, enabling decentralized governance and collaboration for businesses and communities.
        </li>
        <li>
          <strong>Storage Layer:</strong> Integrates a decentralized storage solution to handle data availability,
          further enhancing scalability and reducing costs.
        </li>
      </ul>
      <p>
        Metis is designed to support a wide range of applications, from DeFi and NFTs to gaming and enterprise
        solutions, making blockchain technology more accessible and efficient for mass adoption.
      </p>
      <h2 id="hyperion-protocol">Hyperion Protocol (Hyperion Network)</h2>
      <p>
        Hyperion Protocol is building a decentralized spatial blockchain network that aims to revolutionize global
        mapping and location services. It leverages blockchain technology to create a secure, private, and open mapping
        ecosystem, challenging traditional centralized mapping solutions.
      </p>
      <h3>Key Features of Hyperion:</h3>
      <ul>
        <li>
          <strong>MapChain:</strong> A decentralized mapping infrastructure that allows users to contribute, verify, and
          utilize spatial data.
        </li>
        <li>
          <strong>Atlas:</strong> A decentralized map service that provides high-precision location data and navigation
          without relying on centralized servers.
        </li>
        <li>
          <strong>Titan:</strong> A privacy-preserving location sharing protocol that enables users to control their
          location data and share it securely.
        </li>
        <li>
          <strong>Proof-of-Location (PoL):</strong> A consensus mechanism that verifies the authenticity of location
          data contributed to the network, ensuring data integrity.
        </li>
        <li>
          <strong>Decentralized Crowdsourcing:</strong> Incentivizes users to contribute mapping data, fostering a
          community-driven approach to global mapping.
        </li>
      </ul>
      <p>
        Hyperion's vision is to create a self-governing, decentralized spatial ecosystem where users own their data and
        can access reliable, censorship-resistant location services.
      </p>
    </article>
  )
}
