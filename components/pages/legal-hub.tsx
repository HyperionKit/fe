"use client";

import React from "react";
import {
  ScrollText,
  FileText,
  Shield,
  Scale,
  Database,
  Mail
} from "lucide-react";
import { LegalCard } from "@/components/pages/legal-card";

interface LegalHubProps {
  onPageChange: (page: string) => void;
}

export const LegalHub: React.FC<LegalHubProps> = ({ onPageChange }) => (
  <section className="w-full max-w-5xl mx-auto animate-slide-up p-8 lg:p-12">
    {/* Header */}
    <div className="mb-12 border-b border-white/5 pb-8">
      <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
        Legal Center
      </h1>
      <p className="text-slate-400 text-lg max-w-2xl">
        Transparent terms and policies to protect your data and rights. Find all
        our legal documentation below.
      </p>
    </div>

    {/* Core Terms Section */}
    <p className="text-slate-400 text-lg max-w-2xl mb-6">
      Core Terms and Policies
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      <LegalCard
        icon={ScrollText}
        iconColor="text-violet-400"
        title="Terms of Use"
        description="The rules for using HyperKit’s website, dashboard, SDKs, APIs, and related services, including eligibility, account use, payments, and acceptable use."
        buttonText="Read terms"
        onClick={() => onPageChange("terms")}
      />

      <LegalCard
        icon={FileText}
        iconColor="text-emerald-400"
        title="Privacy Policy"
        description="How we collect, use, share, and protect your personal data and other information when you interact with HyperKit."
        buttonText="View policy"
        onClick={() => onPageChange("privacy")}
      />

      <LegalCard
        icon={Shield}
        iconColor="text-blue-400"
        title="Security Policy"
        description="The technical and organizational measures we take to secure our infrastructure, platform, and users, plus your responsibilities in a shared Web3 security model."
        buttonText="View policies"
      />
    </div>

    {/* Additional Section */}
    <p className="text-slate-400 text-lg max-w-2xl mb-6">
      Additional legal information
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16 border-b border-white/5 pb-16">
      {/* Hard-coded LegalCard with NO ARROW */}
      <div
        className="glass-panel p-6 rounded-xl hover:bg-white/5 text-left transition-all group border border-white/5 hover:border-white/10"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
          <Scale className="w-5 h-5 text-yellow-400" />
        </div>
        <h3 className="text-white font-medium text-lg mb-2">
          Legal Notice & Disclaimers
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Important information about the limitations of our responsibilities,
          including no legal/financial advice, protocol risk, and your
          obligations under applicable law.
        </p>
      </div>

      {/* Hard-coded LegalCard with NO ARROW */}
      <div
        className="glass-panel p-6 rounded-xl hover:bg-white/5 text-left transition-all group border border-white/5 hover:border-white/10"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
          <Database className="w-5 h-5 text-gray-400" />
        </div>
        <h3 className="text-white font-medium text-lg mb-2">
          Data Processing & Compliance
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          If applicable, links to Data Processing Agreements (DPAs), regional
          addenda (e.g., GDPR/EEA, UK, CCPA/CPRA), and any certifications or
          attestations we make available.
        </p>
      </div>
    </div>

    {/* Footer CTA */}
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <h3 className="text-white font-medium text-lg mb-1">
          Contact for legal inquiries
        </h3>
        <p className="text-sm text-slate-400">
          For questions about any of these documents, law enforcement requests, or regulatory matters.
        </p>
      </div>

      <a
        href="mailto:legal@hyperionkit.xyz"
        className="px-5 py-3 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all flex items-center gap-3 text-sm text-white"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <Mail className="w-4 h-4 text-violet-400" />
        legal@hyperionkit.xyz
      </a>
    </div>
  </section>
);
