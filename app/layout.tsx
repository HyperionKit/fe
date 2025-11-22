import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { PerformanceProvider } from "@/contexts/PerformanceContext";
import { NetworkProvider } from "@/contexts/NetworkContext";
import { WalletProvider } from "@/contexts/WalletContext";
import { SlippageProvider } from "@/contexts/SlippageContext";
import { Providers } from "@/app/providers";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyperkit - Innovation Engine for Web3",
  description: "Build Smarter. Deploy Faster. Thrive in Hyperkit",
  icons: {
    icon: [
      { url: '/logo/brand/hyperkit/Hyperkit Abstract.svg', type: 'image/svg+xml' },
      { url: '/logo/brand/hyperkit/Hyperkit Abstract.svg', sizes: '64x64', type: 'image/svg+xml' },
      { url: '/logo/brand/hyperkit/Hyperkit Abstract.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    shortcut: '/logo/brand/hyperkit/Hyperkit Abstract.svg',
    apple: [
      { url: '/logo/brand/hyperkit/Hyperkit Abstract.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <PerformanceProvider>
            <NetworkProvider>
              <WalletProvider>
                <SlippageProvider>
                  <Navbar />
                  {children}
                  <Footer />
                </SlippageProvider>
              </WalletProvider>
            </NetworkProvider>
          </PerformanceProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
