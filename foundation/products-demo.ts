/**
 * Static Demo Foundation for Smart Wallet/AA Showcase
 * 
 * This file contains all demo data, features, and simulated flows
 * for showcasing Hyperkit smart wallet capabilities without any
 * backend or SDK dependencies.
 */

export interface DemoFeature {
  id: string;
  title: string;
  description: string;
  demoSteps: string[];
  codeExample: string;
  category: 'onboarding' | 'transaction' | 'account' | 'security' | 'integration';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  uxTip?: string;
  ruleBadges?: string[];
  interactiveDemo?: boolean;
}

export interface DemoUser {
  id: string;
  name: string;
  avatar: string;
  role: 'developer' | 'designer' | 'product-manager' | 'investor';
  preferences: {
    theme: 'light' | 'dark';
    language: string;
    experience: 'beginner' | 'intermediate' | 'expert';
  };
}

export interface DemoFlow {
  id: string;
  name: string;
  description: string;
  steps: DemoStep[];
  estimatedDuration: string;
  successRate: number;
  averageTime: string;
}

export interface DemoStep {
  id: string;
  title: string;
  description: string;
  action: string;
  result: string;
  duration: number;
  interactive: boolean;
}

export const smartWalletDemo = {
  productName: "Hyperkit",
  version: "1.0.0",
  description: "The complete smart wallet SDK for seamless Web3 onboarding and transactions",
  
  features: [
    {
      id: "zero-friction-signup",
      title: "Zero-Friction Signup",
      description: "Onboard users with social login, passkeys, or email in under 4 seconds. No seed phrases, no complex setup.",
      demoSteps: [
        "User clicks 'Sign in with Google'",
        "OAuth flow completes in 2 seconds",
        "Smart wallet automatically created",
        "User lands on dashboard ready to transact"
      ],
      codeExample: `import { ConnectButton } from '@hyperkit/react'

<ConnectButton 
  provider="google"
  onSuccess={(wallet) => console.log('Wallet created:', wallet)}
  theme="dark"
  cornerRadius="large"
/>`,
      category: "onboarding",
      difficulty: "beginner",
      estimatedTime: "4 seconds",
      uxTip: "Most users complete onboarding in <4s with Passkey authentication",
      ruleBadges: ["onboarding-ux", "accessibility-compliance"],
      interactiveDemo: true
    },
    {
      id: "gasless-transactions",
      title: "Gasless Transactions",
      description: "Every transaction is sponsored by default. Users never see gas prompts for common actions.",
      demoSteps: [
        "User clicks 'Send 100 USDC'",
        "Transaction automatically sponsored",
        "No MetaMask popup or gas selection",
        "Transaction completes in 3 seconds"
      ],
      codeExample: `import { SmartWallet } from '@hyperkit/core'

const wallet = new SmartWallet({
  paymaster: 'https://paymaster.hyperkit.com',
  gasless: true
})

await wallet.send({
  to: '0x...',
  value: '1000000000000000000',
  gasSponsored: true
})`,
      category: "transaction",
      difficulty: "beginner",
      estimatedTime: "3 seconds",
      uxTip: "Zero gas friction increases transaction completion by 340%",
      ruleBadges: ["tx-flow", "performance-optimization"],
      interactiveDemo: true
    },
    {
      id: "programmable-account",
      title: "Programmable Account",
      description: "Batch multiple actions, set up auto-pay, and customize transaction flows with Account Abstraction.",
      demoSteps: [
        "Import AA SDK and initialize",
        "Batch approve + swap + send in one transaction",
        "Set up recurring payments",
        "Track all actions in dashboard"
      ],
      codeExample: `import { AASDK } from '@hyperkit/aa'

const aa = new AASDK({
  factory: '0x...',
  entryPoint: '0x...'
})

await aa.batch([
  { type: 'approve', token: 'USDC', spender: '0x...' },
  { type: 'swap', from: 'USDC', to: 'ETH', amount: '100' },
  { type: 'send', to: '0x...', value: '0.1' }
])`,
      category: "account",
      difficulty: "intermediate",
      estimatedTime: "2 minutes",
      uxTip: "Batch transactions reduce gas costs by 60% and improve UX",
      ruleBadges: ["smart-wallet-config", "performance-optimization"],
      interactiveDemo: true
    },
    {
      id: "social-recovery",
      title: "Social Recovery",
      description: "Recover your wallet using trusted contacts instead of seed phrases. More secure and user-friendly.",
      demoSteps: [
        "Set up 3-5 trusted guardians",
        "If wallet is lost, request recovery",
        "Guardians approve recovery request",
        "New wallet created with same address"
      ],
      codeExample: `import { SocialRecovery } from '@hyperkit/recovery'

const recovery = new SocialRecovery({
  guardians: ['0x...', '0x...', '0x...'],
  threshold: 3
})

await recovery.setup()
await recovery.requestRecovery()`,
      category: "security",
      difficulty: "intermediate",
      estimatedTime: "5 minutes",
      uxTip: "Social recovery reduces wallet loss by 95% compared to seed phrases",
      ruleBadges: ["smart-wallet-config", "accessibility-compliance"],
      interactiveDemo: false
    },
    {
      id: "cross-chain-bridging",
      title: "Cross-Chain Bridging",
      description: "Seamlessly move assets between chains with one-click bridging and automatic gas optimization.",
      demoSteps: [
        "Select source and destination chains",
        "Choose asset and amount",
        "Bridge automatically finds best route",
        "Assets arrive in 2-5 minutes"
      ],
      codeExample: `import { CrossChain } from '@hyperkit/bridge'

const bridge = new CrossChain({
  chains: ['ethereum', 'polygon', 'arbitrum'],
  autoRoute: true
})

await bridge.transfer({
  from: 'ethereum',
  to: 'polygon',
  asset: 'USDC',
  amount: '1000'
})`,
      category: "transaction",
      difficulty: "intermediate",
      estimatedTime: "5 minutes",
      uxTip: "Auto-routing saves users 40% on bridge fees",
      ruleBadges: ["tx-flow", "performance-optimization"],
      interactiveDemo: true
    },
    {
      id: "developer-integration",
      title: "Developer Integration",
      description: "Integrate smart wallet features into your dApp with just a few lines of code. Full TypeScript support.",
      demoSteps: [
        "Install @hyperkit/react package",
        "Add provider to your app",
        "Use pre-built components",
        "Customize theme and behavior"
      ],
      codeExample: `import { HyperkitProvider } from '@hyperkit/react'
import { ConnectButton, TransactionButton } from '@hyperkit/components'

function App() {
  return (
    <HyperkitProvider config={config}>
      <ConnectButton />
      <TransactionButton 
        action="send"
        amount="100"
        token="USDC"
      />
    </HyperkitProvider>
  )
}`,
      category: "integration",
      difficulty: "beginner",
      estimatedTime: "10 minutes",
      uxTip: "Average integration time is 10 minutes vs 2+ hours with other solutions",
      ruleBadges: ["performance-optimization", "accessibility-compliance"],
      interactiveDemo: true
    }
  ],

  flows: [
    {
      id: "complete-onboarding",
      name: "Complete Onboarding Flow",
      description: "End-to-end user onboarding from landing page to first transaction",
      steps: [
        {
          id: "landing",
          title: "Land on Hyperkit",
          description: "User visits your dApp and sees the connect button",
          action: "Click 'Connect Wallet'",
          result: "Authentication modal opens",
          duration: 1,
          interactive: true
        },
        {
          id: "authenticate",
          title: "Choose Authentication",
          description: "User selects preferred login method",
          action: "Click 'Sign in with Google'",
          result: "OAuth flow initiates",
          duration: 2,
          interactive: true
        },
        {
          id: "wallet-creation",
          title: "Smart Wallet Creation",
          description: "System creates smart wallet automatically",
          action: "Wait for wallet creation",
          result: "Wallet address generated",
          duration: 3,
          interactive: false
        },
        {
          id: "dashboard",
          title: "Dashboard Access",
          description: "User lands on main dashboard",
          action: "View wallet balance and options",
          result: "Ready to transact",
          duration: 1,
          interactive: true
        }
      ],
      estimatedDuration: "7 seconds",
      successRate: 94,
      averageTime: "6.2 seconds"
    },
    {
      id: "first-transaction",
      name: "First Transaction Flow",
      description: "User's first transaction with gasless sponsorship",
      steps: [
        {
          id: "select-asset",
          title: "Select Asset",
          description: "User chooses token to send",
          action: "Click on USDC balance",
          result: "Send modal opens",
          duration: 1,
          interactive: true
        },
        {
          id: "enter-details",
          title: "Enter Transaction Details",
          description: "User enters recipient and amount",
          action: "Type address and amount",
          result: "Transaction preview shown",
          duration: 2,
          interactive: true
        },
        {
          id: "confirm-transaction",
          title: "Confirm Transaction",
          description: "User confirms the transaction",
          action: "Click 'Send'",
          result: "Transaction submitted",
          duration: 1,
          interactive: true
        },
        {
          id: "transaction-complete",
          title: "Transaction Complete",
          description: "Transaction is processed and confirmed",
          action: "Wait for confirmation",
          result: "Success notification shown",
          duration: 3,
          interactive: false
        }
      ],
      estimatedDuration: "7 seconds",
      successRate: 98,
      averageTime: "6.8 seconds"
    }
  ],

  demoUsers: [
    {
      id: "alice-dev",
      name: "Alice Developer",
      avatar: "👩‍💻",
      role: "developer",
      preferences: {
        theme: "dark",
        language: "en",
        experience: "expert"
      }
    },
    {
      id: "bob-designer",
      name: "Bob Designer",
      avatar: "🎨",
      role: "designer",
      preferences: {
        theme: "light",
        language: "en",
        experience: "intermediate"
      }
    },
    {
      id: "carol-pm",
      name: "Carol Product Manager",
      avatar: "📊",
      role: "product-manager",
      preferences: {
        theme: "dark",
        language: "en",
        experience: "intermediate"
      }
    },
    {
      id: "david-investor",
      name: "David Investor",
      avatar: "💼",
      role: "investor",
      preferences: {
        theme: "light",
        language: "en",
        experience: "beginner"
      }
    }
  ],

  stats: {
    totalUsers: "50,000+",
    transactionsProcessed: "2.5M+",
    averageOnboardingTime: "4.2s",
    gasSaved: "$2.3M+",
    developerSatisfaction: "4.9/5",
    uptime: "99.9%"
  },

  integrations: [
    {
      name: "React",
      logo: "⚛️",
      description: "Full React component library with hooks",
      difficulty: "beginner",
      timeToIntegrate: "5 minutes"
    },
    {
      name: "Vue",
      logo: "💚",
      description: "Vue 3 composition API support",
      difficulty: "beginner",
      timeToIntegrate: "5 minutes"
    },
    {
      name: "Angular",
      logo: "🅰️",
      description: "Angular service and component integration",
      difficulty: "intermediate",
      timeToIntegrate: "15 minutes"
    },
    {
      name: "Vanilla JS",
      logo: "🟨",
      description: "Pure JavaScript SDK for any framework",
      difficulty: "intermediate",
      timeToIntegrate: "20 minutes"
    }
  ],

  pricing: {
    free: {
      name: "Starter",
      price: "$0",
      features: [
        "Up to 1,000 transactions/month",
        "Basic social login",
        "Email support",
        "Standard themes"
      ],
      limits: {
        transactions: 1000,
        users: 100,
        chains: 3
      }
    },
    pro: {
      name: "Pro",
      price: "$99",
      features: [
        "Up to 10,000 transactions/month",
        "All authentication methods",
        "Priority support",
        "Custom themes",
        "Advanced analytics"
      ],
      limits: {
        transactions: 10000,
        users: 1000,
        chains: 10
      }
    },
    enterprise: {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited transactions",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee"
      ],
      limits: {
        transactions: -1,
        users: -1,
        chains: -1
      }
    }
  }
};

export default smartWalletDemo;
