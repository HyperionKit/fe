"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 pt-6 px-6 transition-all duration-300 ${
        isScrolled 
          ? "bg-transparent backdrop-blur-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-8 w-auto flex items-center justify-center">
            <Image
              src="/logo/brand/hyperkit/hyperkit-header-white.svg"
              alt="Hyperkit Logo"
              width={120}
              height={32}
              className="object-contain h-8 w-auto"
            />
          </div>
        </a>

        {/* Links (Centered) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer group">
            Build 
            <ChevronDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" />
          </div>
          <a href="/foundation" className="hover:text-white transition-colors">Foundation</a>
          <a href="/solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
          <a href="/products" className="hover:text-white transition-colors">Products</a>
          <a href="/roadmap" className="hover:text-white transition-colors">Roadmap</a>
        </div>

        {/* CTA */}
        <div>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-200 text-sm font-medium hover:bg-brand-600/30 hover:text-white hover:border-brand-500/50 transition-all shadow-[0_0_15px_-5px_rgba(124,58,237,0.4)]"
          >
            Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}