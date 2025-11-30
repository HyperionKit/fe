"use client";

import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
          Ready to build the future?
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">
          Join 10,000+ developers shipping AI-native applications on Hyperkit.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Start Building Now
          </button>
          <button className="px-8 py-3 rounded-full text-slate-300 text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
            Contact Sales <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}