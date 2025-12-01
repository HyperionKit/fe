'use client';
import React, { useState } from 'react';
import { Mail, Globe } from "lucide-react";
import { BackgroundEffects } from '@/components/pages/legal-background';
import { Sidebar } from '@/components/pages/legal-sidebar';
import { LegalHub } from '@/components/pages/legal-hub';
import { Changelog } from '@/components/pages/legal-change-log';
import  Career  from '@/components/pages/legal-career';
import Security from '@/components/pages/legal-security';

export default function App() {
  const [activePage, setActivePage] = useState('legal');

  const renderPage = () => {
    switch (activePage) {
      case 'legal':
        return <LegalHub onPageChange={setActivePage} />;
      case 'changelog':
        return <Changelog />;
      case 'TeamRoles':
        return <Career />;
      case 'SecurityPolicy':
        return <Security />;
      case 'privacy':
        return (
          <section className="w-full max-w-4xl mx-auto animate-slide-up p-8 lg:p-12">
            <div className="mb-12 border-b border-white/5 pb-8">
              <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">Privacy Policy</h1>
              <p className="text-slate-500">Last updated: <span className="text-slate-400">December 1, 2025</span></p>
            </div>
            <div className="text-slate-400 leading-relaxed text-base">
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">1. Introduction</h2>
              <p className="mb-6">This Privacy Policy explains how HyperKit (“HyperKit”, “we”, “us”, or “our”) collects, uses, discloses, and
protects information when you access or use our website, dashboard, SDKs, APIs, documentation, and
any related services (collectively, the “Service”).</p>
              <p className="mb-6">By using the Service, you agree to the practices described in this Privacy Policy. If you do not agree, you
should not access or use the Service.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">2. Information we collect</h2>
              <p className="mb-6">Depending on how you interact with the Service, we may collect the following types of information:</p>
              <p className="mb-3 text-white">Account and contact information:</p>
              <p className="mb-6">Name, email address, organization, role, and other details you provide when you sign up for an account,
join a waitlist, request access, or contact us.</p>
              <p className="mb-3 text-white">Usage and analytics data:</p>
              <p className="mb-6">IP address, browser type, device information, pages visited, referring URLs, time spent on pages, and
interactions with our UI, collected via cookies or similar technologies.</p>
              <p className="mb-3 text-white">Wallet and on-chain information:</p>
              <p className="mb-6">Public wallet addresses, transaction hashes, and relevant on-chain metadata when you connect a wallet
or interact with smart contracts or DeFi flows via the Service.</p>
              <p className="mb-3 text-white">Billing and payment information:</p>
              <p className="mb-6">Limited billing details (such as subscription plan and payment status). Payment card information is
processed by third-party payment providers and not stored by HyperKit.</p>
              <p className="mb-3 text-white">Support and communication data:</p>
              <p className="mb-6">Content of messages, emails, or other communications you send to us (for example, support requests,
feedback, or bug reports).</p>
              <p className='mb-6'>You can choose not to provide certain information, but this may limit your ability to use some features.</p>  
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">3. How we collect information</h2>
              <p className="mb-6">We collect information in three main ways:</p>
              <p className="mb-3 text-white">Directly from you:</p>
              <p className="mb-6">When you create an account, fill out forms, subscribe to updates, connect a wallet, or communicate with
us.</p>
              <p className="mb-3 text-white">Automatically:</p>
              <p className="mb-6">Through cookies, log files, and similar technologies when you browse our site or use the dashboard,
including usage metrics and device information.</p>
              <p className="mb-3 text-white">From third parties:</p>
              <p className="mb-6">From service providers and partners (for example, analytics platforms, payment processors, and identity
providers) where permitted by law and their terms.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">4. How we use information</h2>
              <p className="mb-6">We use the information we collect for purposes including:</p>
              <p className="mb-3 ml-6">Providing and operating the Service, including authentication, access control, and feature delivery.</p>
              <p className="mb-3 ml-6">Managing accounts, subscriptions, and billing.</p>
              <p className="mb-3 ml-6">Monitoring, securing, and improving the performance, reliability, and user experience of the Service.</p>
              <p className="mb-3 ml-6">Developing new features, tools, and integrations, including analytics around developer usage and on-
chain interactions in aggregate or de-identified form.</p>
              <p className="mb-3 ml-6">Communicating with you about updates, technical notices, security alerts, and support responses.</p>
              <p className="mb-3 ml-6">Sending product news, event information, and marketing communications (where permitted), with an
option to opt out.</p>
              <p className='mb-3 ml-6'>Complying with legal obligations and enforcing our Terms of Use.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">5. Legal bases for processing (if applicable)</h2>
              <p className='mb-6'>Where required by laws such as the GDPR, we rely on one or more of the following legal bases to process
personal data:</p>
              <p className="mb-3 ml-6">Your consent (for example, certain marketing communications or non-essential cookies).</p>
              <p className="mb-3 ml-6">Performance of a contract (for example, providing the Service you sign up for).</p>
              <p className="mb-3 ml-6">Legitimate interests (for example, securing and improving the Service, preventing abuse, and
understanding product usage).</p>
              <p className="mb-6 ml-6">Compliance with legal obligations.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">6. Cookies and similar technologies</h2>
              <p className="mb-6">We use cookies and similar technologies to:</p>
              <p className="mb-3 ml-6">Maintain sessions and authenticate users.</p>
              <p className="mb-3 ml-6">Remember preferences and settings.</p>
              <p className="mb-3 ml-6">Analyze traffic and usage patterns to improve the Service.</p>
              <p className='mb-6'>You can manage cookies through your browser settings. If you disable some cookies, certain features of
the Service may not function properly.</p>
              <p className='mb-6'></p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">7. How we share information</h2>
              <p className="mb-6">We do not sell your personal data. We may share information in the following circumstances:</p>
              <p className="mb-3 text-white">Service providers and vendors:</p>
              <p className="mb-6">For hosting, analytics, email delivery, payment processing, customer support, security, and similar
functions.</p>
              <p className="mb-3 text-white">Integration and infrastructure partners:</p>
              <p className="mb-6">For example, wallet providers, RPC nodes, or third-party protocol/infra partners necessary to deliver
certain features.</p>
              <p className="mb-3 text-white">Professional advisors:</p>
              <p className="mb-6">Such as lawyers, accountants, and auditors, under confidentiality obligations.</p>
              <p className="mb-3 text-white">Authorities or other parties:</p>
              <p className="mb-6">Where required by law, legal process, or to protect rights, security, and property of HyperKit, our users,
or others.</p>  
              <p className="mb-3 text-white">In connection with business transitions:</p>
              <p className="mb-6">Such as mergers, acquisitions, financing, or asset sales, subject to appropriate safeguards.</p>
              <p className='mb-6'>We may share aggregated or de-identified data that does not identify you personally.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">8. Data retention</h2>
              <p className="mb-6">We retain personal information for as long as necessary to:</p>
              <p className="mb-3 ml-6">Provide and support the Service.</p>
              <p className="mb-3 ml-6">Comply with legal, tax, or accounting requirements.</p>
              <p className='mb-3 ml-6'>Resolve disputes and enforce our agreements.</p>
              <p className='mb-6'>When information is no longer needed, we will delete or anonymize it, or securely store it until deletion is
possible.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">9. Data security</h2>
              <p className="mb-6">We use reasonable technical and organizational measures to protect information against unauthorized
access, loss, misuse, or alteration, taking into account the nature of the data and the risks involved.</p>
              <p className='mb-6'>No system can be guaranteed to be completely secure, and you are responsible for maintaining the
security of your own credentials, devices, and wallets.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">10. Your rights and choices</h2>
              <p className="mb-6">Depending on your jurisdiction, you may have certain rights over your personal information, which can
include:</p>
              <p className="mb-3 ml-6"><span className='font-bold'>Access:</span> Request a copy of the personal data we hold about you.</p>
              <p className="mb-3 ml-6"><span className='font-bold'>Correction:</span> Request that inaccurate or incomplete data be corrected.</p>
              <p className="mb-3 ml-6"><span className='font-bold'>Deletion:</span>  Request deletion of your personal data, subject to legal obligations.</p>
              <p className="mb-3 ml-6"><span className='font-bold'>Restriction or objection:</span> Request that we limit or stop certain processing.</p>
              <p className="mb-3 ml-6"><span className='font-bold'>Portability:</span> Request a copy of your data in a structured, commonly used format.</p>
              <p className="mb-3 ml-6"><span className='font-bold'>Consent withdrawal:</span> Withdraw consent for processing where consent is the legal basis.</p>
              <p className="mb-6">You can exercise these rights by contacting us using the details below. We may need to verify your
identity before responding.</p>

              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">11. International transfers</h2>
              <p className="mb-6">HyperKit may process and store information in countries other than where you reside. Where required by
law, we implement safeguards (such as standard contractual clauses or equivalent mechanisms) to
protect personal data transferred across borders.</p>
              <p className='mb-6'>By using the Service, you understand that your information may be transferred to and processed in
jurisdictions with different data protection rules than your home country.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">12. Children’s privacy</h2>
              <p className="mb-6">The Service is not directed to children under 18, and we do not knowingly collect personal information
from children under 18. If we learn that we have collected such information without appropriate consent,
we will take steps to delete it.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">13. Third-party links and services</h2>
              <p className="mb-6">The Service may contain links to or integrations with third-party websites, tools, and services.</p>
              <p className='mb-6'>This Privacy Policy does not apply to those third parties, and HyperKit is not responsible for their content,
security, or privacy practices. You should review their privacy policies before using their services or
providing them with information.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">14. Changes to this Privacy Policy</h2>
              <p className="mb-6">We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date
and may provide additional notice (for example, by email or in-app notifications) where appropriate.</p>
              <p className='mb-6'>Your continued use of the Service after any changes become effective means you accept the updated
Privacy Policy.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">15. Contact us</h2>
              <p className='mb-6'>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, you can
contact us at:</p>
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-8 flex flex-col gap-6">
                  {/* Email */}
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 opacity-80" />

                    <span className="font-semibold text-white">Email:</span>
                    <span className="text-gray-400">
                      privacy@hyperkit.xyz <span className="mx-1">or</span> legal@hyperionkit.xyz
                    </span>
                  </div>

                  {/* Website */}
                  <div className="flex items-center gap-3 text-gray-300">
                    <Globe className="w-5 h-5 opacity-80" />

                    <span className="font-semibold text-white">Website:</span>
                    <a
                      href="https://hyperionkit.xyz"
                      className="text-purple-400 hover:underline"
                      target="_blank"
                    >
                      https://hyperionkit.xyz
                    </a>
                  </div>
                </div>    
            </div>
          </section>
        );
      case 'terms':
        return (
          <section className="w-full max-w-4xl mx-auto animate-slide-up p-8 lg:p-12">
            <div className="mb-12 border-b border-white/5 pb-8">
              <h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">Terms of Use</h1>
              <p className="text-slate-500">Last updated: <span className="text-slate-400">December 1, 2025</span></p>
            </div>
            <div className="text-slate-400 leading-relaxed text-base">
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">1. Acceptance of terms</h2>
              <p className="mb-6">By accessing or using the HyperKit website, dashboard, SDKs, APIs, documentation, developer tools, or
any related services (collectively, the “Service”), you agree to be bound by these Terms of Use (“Terms”)
and all applicable laws and regulations. If you do not agree to these Terms, you must not access or use
the Service.</p>
              <p className="mb-6">HyperKit may update these Terms from time to time. If changes are material, HyperKit will use reasonable
efforts to notify you (for example, by email, in-app notice, or updating the “Last updated” date). Your
continued use of the Service after the effective date of any changes constitutes your acceptance of the
updated Terms.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">2. Eligibility and account registration</h2>
              <p className="mb-6">You must be at least 18 years old, or the age of legal majority in your jurisdiction, to use the Service.</p>
              <p className="mb-6">When creating an account, you agree to provide accurate, current, and complete information and to keep
that information updated.</p>
              <p className="mb-6">You are responsible for maintaining the confidentiality of your login credentials (including any connected
wallet or third-party login) and for all activities that occur under your account.</p>
              <p className="mb-6">HyperKit reserves the right to suspend or terminate accounts that provide false information, violate these
Terms, or otherwise pose a risk to the Service or other users.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">3. Use of the Service</h2>
              <p className="mb-6">You may use the Service only for lawful purposes and in accordance with these Terms. In particular, you
agree not to:</p>

              <p className="mb-6 ml-6">Copy, frame, mirror, or distribute any part of the Service except as expressly permitted by HyperKit or
applicable open-source licenses.</p>
              <p className="mb-6 ml-6">Access the Service using any automated system, script, or bot (including “scrapers,” “crawlers,” or
“spiders”) except through documented APIs or tools permitted by HyperKit.</p>
              <p className="mb-6 ml-6">Attempt to interfere with or compromise the integrity, security, or performance of the Service or any
underlying infrastructure.</p>
              <p className="mb-6 ml-6">Upload, deploy, or interact with smart contracts, agents, or applications through the Service that are
designed for fraud, money laundering, sanctions evasion, or any other illegal or harmful activity.</p>
              <p className="mb-6 ml-6">Take any action that imposes or may impose (as determined by HyperKit) an unreasonable or
disproportionately large load on the Service or related infrastructure.</p>
              <p className="mb-6 ml-6">Bypass, disable, or attempt to circumvent any rate limits, access controls, or security mechanisms.</p>

              <p className="mb-6">HyperKit may monitor use of the Service to ensure compliance with these Terms and may suspend or
restrict access where misuse or abuse is detected.</p>

              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">4. Intellectual property</h2>
              <p className="mb-6">Unless otherwise indicated (for example, open-source repositories with their own licenses), the Service
and all related content, features, branding, and functionality are owned by HyperKit or its licensors and
are protected by copyright, trademark, and other intellectual property laws.</p>
              <p className="mb-6">You may not use HyperKit’s name, logos, or branding in a way that suggests endorsement or partnership
without prior written consent, except as permitted by applicable law (such as fair use) or explicit branding
guidelines provided by HyperKit.</p>
              <p className="mb-6">Subject to your compliance with these Terms, HyperKit grants you a limited, non-exclusive, non-
transferable, revocable license to access and use the Service for your internal or approved commercial
development purposes.</p>

              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">5. Payment and subscriptions</h2>
              <p className="mb-6">HyperKit may offer free tiers, usage-based billing, or subscription plans for certain features, including but
not limited to hosted infrastructure, premium SDKs, or enhanced support.</p>
              <p className="mb-6">Billing cycles (for example, monthly or annual) and pricing will be described at the point of purchase or in
your account dashboard.</p>
              <p className="mb-6">You authorize HyperKit or its payment processor to charge all applicable fees to your selected payment
method on a recurring basis, where relevant.</p>
              <p className="mb-6">Unless otherwise stated or required by law, all fees are non-refundable and exclusive of any taxes, duties,
or similar governmental assessments, which are your responsibility.</p>
              <p className="mb-6">HyperKit may change pricing or plan features with advance notice, and such changes will apply starting
from your next billing cycle unless otherwise specified.</p>

              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">6. Third-party services and links</h2>
              <p className="mb-6">The Service may integrate or interoperate with third-party services, networks, smart contracts, chains, or
tools (for example, wallets, RPC providers, indexing services, or protocol SDKs), and may contain links to
third-party websites or resources.</p>
              <p className="mb-6">HyperKit does not control and is not responsible for:</p>
              <p className="mb-6 ml-6">The content, security, or practices of any third-party service or site.</p>
              <p className="mb-6 ml-6">Take any action that imposes or may impose (as determined by HyperKit) an unreasonable or
disproportionately large load on the Service or related infrastructure.</p>
              <p className="mb-6">Your use of third-party services is governed by those parties’ own terms and policies. You are solely
responsible for reviewing and complying with them.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">7. Disclaimers and limitation of liability</h2>
              <p className="mb-6">The Service, including any developer tools, SDKs, APIs, agents, templates, or smart contract examples, is
provided on an “AS IS” and “AS AVAILABLE” basis, without warranties of any kind, whether express,
implied, or statutory. Without limiting the foregoing, HyperKit does not warrant that: (a) the Service will be
uninterrupted, secure, or error-free; (b) any defects will be corrected; or (c) the Service will be free of
viruses or other harmful components.</p>
              <p className="mb-6">To the maximum extent permitted by law, in no event will HyperKit or its founders, team members,
contractors, partners, or licensors be liable for any indirect, incidental, special, consequential, or punitive
damages, or for any loss of profits, data, goodwill, or other intangible losses arising out of or relating to
your use of or inability to use the Service, even if advised of the possibility of such damages.</p>
              <p className='mb-6'>To the extent any liability cannot be excluded, HyperKit’s aggregate liability arising out of or relating to the
Service or these Terms will be limited to the greater of: (a) the amount you paid to HyperKit in fees in the
twelve (12) months preceding the event giving rise to the claim; or (b) one hundred U.S. dollars (USD
100).</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">8. Indemnification</h2>
              <p className="mb-6">You agree to defend, indemnify, and hold harmless HyperKit and its affiliates, founders, employees,
contractors, and agents from and against any claims, damages, losses, liabilities, costs, and expenses
(including reasonable attorney’s fees) arising out of or related to:</p>
              <p className="mb-6 ml-6">Your access to or use of the Service.</p>
              <p className="mb-6 ml-6">Your deployed smart contracts, agents, or applications built or managed using the Service.</p>
              <p className="mb-6 ml-6">Your violation of these Terms or any applicable law or regulation.</p>
              <p className='mb-6 ml-6'>Your infringement or misappropriation of any third-party rights.</p>
              
              <p className="mb-6">HyperKit reserves the right, at its own expense, to assume the exclusive defense and control of any
matter subject to indemnification by you, in which case you agree to cooperate with such defense.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">9. Governing law and jurisdiction</h2>
              <p className='mb-6'>These Terms and any dispute arising out of or relating to them or the Service will be governed by and
construed in accordance with the laws of [insert jurisdiction, e.g., the State of Delaware, United States],
without regard to conflict-of-law rules.</p>
              <p className='mb-6'>You agree that the courts located in [insert venue, e.g., state and federal courts located in Delaware,
United States] will have exclusive jurisdiction over any dispute or claim arising out of or relating to these
Terms or the Service, and you consent to personal jurisdiction in those courts.</p>
              <p className='mb-6'>If you operate HyperKit from another jurisdiction (e.g., the Philippines), you can replace the above with
your preferred governing law and venue in consultation with legal counsel.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">10. Changes to these terms</h2>
              <p className='mb-6'>HyperKit may modify these Terms at any time. When changes are made, HyperKit will update the “Last
updated” date and may provide additional notice as appropriate. Changes take effect when posted unless
a later effective date is specified.</p>
              <p className='mb-6'>Your continued use of the Service after the effective date of any changes constitutes your acceptance of
the updated Terms. If you do not agree to the new terms, you must stop using the Service.</p>
              <p className='mb-6'>If you do not agree to the updated Terms, you must stop using the Service. Your continued use of the
Service after the updated Terms become effective constitutes your acceptance of them.</p>
              <h2 className="text-xl font-medium text-white tracking-tight mt-12 mb-4">11. Contact</h2>  
              <p className='mb-6'>If you have any questions or concerns about these Terms or the Service, you can contact HyperKit at:</p>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-8 flex flex-col gap-6">
                  {/* Email */}
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 opacity-80" />

                    <span className="font-semibold text-white">Email:</span>
                    <span className="text-gray-400">
                      privacy@hyperkit.xyz <span className="mx-1">or</span> legal@hyperionkit.xyz
                    </span>
                  </div>

                  {/* Website */}
                  <div className="flex items-center gap-3 text-gray-300">
                    <Globe className="w-5 h-5 opacity-80" />

                    <span className="font-semibold text-white">Website:</span>
                    <a
                      href="https://hyperionkit.xyz"
                      className="text-purple-400 hover:underline"
                      target="_blank"
                    >
                      https://hyperionkit.xyz
                    </a>
                  </div>
                </div>    
            </div>
          </section>
        );
      default:
        return (
          <section className="w-full max-w-2xl mx-auto text-center p-6">
            <h1 className="text-4xl font-medium text-white mb-4">Page: {activePage}</h1>
            <p className="text-slate-400">This page component is not yet implemented.</p>
          </section>
        );
    }
  };

  return (
    <div className="bg-slate-950 text-slate-400 antialiased h-screen flex overflow-hidden selection:bg-violet-500/30 selection:text-white">
      <BackgroundEffects />
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      
      <main className="flex-1 relative z-10 flex flex-col items-center justify-start p-0 overflow-y-auto w-full scroll-smooth mt-12">
        {renderPage()}
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </div>
  );
}