import React from 'react';
import { Server, Cloud, Lock, Database, ShieldCheck, Code2, GitBranch, Package, Layers, Key, Blocks, Wallet, FileCode, AlertTriangle, Check, Siren, ArrowRight, ExternalLink } from 'lucide-react';

export default function SecurityPolicy() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-slate-100 min-h-screen">
      <div className="mb-12 border-b border-white/5 pb-8">
        <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
          Security Policy
        </h1>
        <p className="text-slate-500">
          Last updated: <span className="text-slate-400">December 1, 2025</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-3 space-y-16 mb-12">
          
          {/* 1. Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Security overview</h2>
            <p className="text-slate-400 leading-relaxed text-sm mb-3">
              HyperKit takes the security of our infrastructure, platform, and users seriously. This Security Policy describes the technical and organizational measures we use to help protect the confidentiality, integrity, and availability of data processed through our website, dashboard, SDKs, APIs, and related services ("Service").
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              While no system can be completely secure, HyperKit follows security-by-design principles, multi-layered defenses, and industry best practices for cloud and Web3 infrastructure.
            </p>
          </div>

          {/* 2. Infrastructure */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Server className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">2. Infrastructure and data protection</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/[0.02] p-5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-white font-medium text-sm mb-2 flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-slate-500" /> Cloud infrastructure
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The Service is hosted on reputable cloud providers with strong physical and network security controls, including access controls, monitoring, and redundancy.
                </p>
              </div>
              <div className="bg-white/[0.02] p-5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-white font-medium text-sm mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-slate-500" /> Transport security
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Data in transit is protected using modern encryption protocols (HTTPS/TLS). We use firewalls and security groups to restrict access to internal services.
                </p>
              </div>
              <div className="bg-white/[0.02] p-5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-white font-medium text-sm mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4 text-slate-500" /> Data at rest
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Where applicable, we use encryption at rest provided by our cloud infrastructure and apply least-privilege access to storage systems.
                </p>
              </div>
              <div className="bg-white/[0.02] p-5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-white font-medium text-sm mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-slate-500" /> Access control
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Access to production systems is restricted to authorized personnel and uses role-based access control (RBAC) and multi-factor authentication.
                </p>
              </div>
            </div>
          </div>

          {/* 3. App Security */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-violet-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">3. Application and development security</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <GitBranch className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Secure development lifecycle</h4>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    HyperKit follows secure coding practices, code review, and automated checks to reduce vulnerabilities before deployment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Package className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Dependency management</h4>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    We monitor and update dependencies, frameworks, and libraries to address known security issues when feasible.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Environment separation</h4>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    We use separate environments for development, testing, and production and limit direct access to production data.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Key className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Secrets management</h4>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    Sensitive credentials (such as API keys and private keys) are stored in secure secret management systems and never hard-coded.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Web3 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Blocks className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">4. Web3 and key management considerations</h2>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              HyperKit provides tools, SDKs, and infrastructure for Web3 and DeFi development. Security responsibilities are shared between HyperKit and you as a builder.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white/[0.02] p-6 rounded-lg border-l-2 border-l-emerald-500">
                <h3 className="text-white font-medium flex items-center gap-2 mb-2">
                  <Wallet className="w-4 h-4 text-emerald-400" /> User wallets and keys
                </h3>
                <p className="text-sm text-slate-400">
                  HyperKit does not store your private keys. You are responsible for securing your wallets, seed phrases, and any signing keys used with our tooling.
                </p>
              </div>
              
              <div className="bg-white/[0.02] p-6 rounded-lg border-l-2 border-l-emerald-500">
                <h3 className="text-white font-medium flex items-center gap-2 mb-2">
                  <FileCode className="w-4 h-4 text-emerald-400" /> Smart contracts and agents
                </h3>
                <p className="text-sm text-slate-400">
                  Example contracts, agents, or templates provided by HyperKit are for educational and development purposes and may require independent audit and review before use in production. You are responsible for the security of contracts you deploy.
                </p>
              </div>

              <div className="bg-white/[0.02] p-6 rounded-lg border-l-2 border-l-amber-500/50">
                <h3 className="text-white font-medium flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" /> Network and protocol risk
                </h3>
                <p className="text-sm text-slate-400">
                  Interactions with blockchains, bridges, and DeFi protocols inherently carry risk (e.g., protocol bugs, network forks, MEV, liquidity risks). HyperKit cannot guarantee the security or behavior of any external network or protocol.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Monitoring */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Monitoring, logging, and incident response</h2>
            <ul className="list-disc pl-5 space-y-4 marker:text-slate-600 text-sm text-slate-400">
              <li>
                <strong className="text-slate-300">Monitoring and logging:</strong> We maintain logs and monitoring across critical infrastructure and application components to detect unusual activity, performance anomalies, and potential abuse.
              </li>
              <li>
                <strong className="text-slate-300">Incident response:</strong> If we become aware of a security incident affecting the Service, we will investigate, take appropriate remedial actions, and, where required, notify affected users and/or regulators.
              </li>
              <li>
                <strong className="text-slate-300">Business continuity:</strong> We leverage cloud-native redundancy, backups, and infrastructure-as-code practices to support resilience and recovery in case of outages or failures.
              </li>
            </ul>
          </div>

          {/* 6. Customer Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Customer responsibilities</h2>
            <p className="text-sm text-slate-400 mb-4">
              Security is a shared responsibility between HyperKit and users of the Service. To help protect your projects and data, you should:
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>Use strong, unique passwords and enable multi-factor authentication where available.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>Restrict dashboard and API access to trusted team members and enforce least privilege.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>Secure your wallets, private keys, and signing infrastructure.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>Perform independent audits and reviews of smart contracts, agents, and integrations before deploying to production.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>Keep your local development environment, dependencies, and tooling up to date and patched.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                <span>Educate your team and users on common threats such as phishing, malicious browser extensions, and social engineering.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Sidebar / Info Rail */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* 7. Vulnerability Disclosure */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              7. Vulnerability Disclosure
            </h3>
            <div className="bg-white/[0.02] p-6 rounded-xl border-l-4 border-l-violet-500/20 relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-24 h-24 bg-violet-500/10 blur-2xl rounded-full -mr-10 -mt-10 group-hover:bg-violet-500/20 transition-all"></div>
              <h3 className="text-white font-medium mb-2 flex items-center gap-2 relative z-10">
                <Siren className="w-4 h-4 text-violet-400" /> Report Issue
              </h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed relative z-10">
                Found a security issue? Please report it responsibly. We welcome reports to help us improve.
              </p>
              <div className="space-y-2 relative z-10">
                <div className="p-2 rounded bg-white/5 border border-white/5 text-xs text-slate-300 font-mono select-all">
                  security@hyperkit.xyz
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/5 text-xs text-slate-300 font-mono select-all">
                  legal@hyperionkit.xyz
                </div>
              </div>
              <p className="text-[10px] text-slate-500 mt-4 leading-relaxed relative z-10">
                Please do not publicly disclose vulnerabilities until we have reviewed and addressed them.
              </p>
            </div>
          </div>

          {/* 8. Compliance & Updates */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              8. Compliance
            </h3>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                HyperKit aligns with security and privacy best practices for cloud and Web3 infrastructure. We may update this policy to reflect new requirements.
              </p>
              <div className="pt-4 border-t border-white/5">
                <h4 className="text-white text-xs font-medium mb-2">Due Diligence Inquiries</h4>
                <a 
                  href="mailto:security@hyperkit.xyz" 
                  className="text-xs text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1.5"
                >
                  security@hyperkit.xyz <ArrowRight className="w-3 h-3" />
                </a>
                <a 
                  href="https://hyperionkit.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1.5 mt-2"
                >
                  hyperionkit.xyz <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}