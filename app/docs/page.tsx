'use client';
import React, { useState } from 'react';
import { DocsHeader } from '@/components/pages/docs-header';
import { DocsSidebar } from '@/components/pages/docs-sidebar';
import { DocsTOC } from '@/components/pages/docs-toc';
import { DocsContent } from '@/components/pages/docs-content';  

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('installation');

  const tocItems = [
    { id: 'quick-start', label: 'Automatic Setup' },
    { id: 'manual-install', label: 'Manual Installation' },
    { id: 'configuration', label: 'Configuration' },
    { id: 'next-steps', label: 'Next Steps' }
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'installation':
        return <DocsContent />;
      case 'overview':
        return (
          <section className="w-full max-w-4xl mx-auto p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-white mb-6">Overview</h1>
            <p className="text-slate-400 leading-relaxed">Welcome to HyperKit documentation. This page provides an overview of the platform.</p>
          </section>
        );
      case 'quickstart':
        return (
          <section className="w-full max-w-4xl mx-auto p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-white mb-6">Quickstart: First App</h1>
            <p className="text-slate-400 leading-relaxed">Get started building your first application with HyperKit.</p>
          </section>
        );
      default:
        return (
          <section className="w-full max-w-4xl mx-auto p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-white mb-6">Page: {activePage}</h1>
            <p className="text-slate-400 leading-relaxed">This page is under construction.</p>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#05050A] text-slate-400 font-sans antialiased">
      <DocsHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1 pt-14 w-full">
        <DocsSidebar onPageChange={setActivePage} activePage={activePage} />
        <main className="flex-1 flex items-start justify-center overflow-y-auto">
          {renderPage()}
        </main>
        <DocsTOC items={tocItems} />
      </div>
    </div>
  );
}