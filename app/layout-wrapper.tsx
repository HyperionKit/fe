// app/layout-wrapper.tsx
'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { PerformanceProvider } from "@/contexts/PerformanceContext";
import { NetworkProvider } from "@/contexts/NetworkContext";
import { WalletProvider } from "@/contexts/WalletContext";
import { SlippageProvider } from "@/contexts/SlippageContext";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDocsPage = pathname?.startsWith('/docs');

  return (
    <PerformanceProvider>
      <NetworkProvider>
        <WalletProvider>
          <SlippageProvider>
            {!isDocsPage && <Navbar />}
            {children}
            {!isDocsPage && <Footer />}
          </SlippageProvider>
        </WalletProvider>
      </NetworkProvider>
    </PerformanceProvider>
  );
}