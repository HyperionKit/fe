"use client";

import React from "react";
import {
  Search,
  ArrowRight,
  Home,
  BookOpen,
  LifeBuoy,
  ExternalLink,
  Twitter,
  Github,
  Disc,
} from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="bg-[#03040B] text-slate-300 min-h-screen flex flex-col relative overflow-hidden selection:bg-indigo-500/30">
      {/* Ambient Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute inset-0 grid-bg -z-10 h-full w-full pointer-events-none"></div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10 py-20">
        {/* 404 Visual */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8 mb-8 select-none">
          <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
            4
          </span>

          {/* rotating planet */}
          <div className="relative w-24 h-24 md:w-40 md:h-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-indigo-500/30 shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)]"></div>

            <div className="absolute inset-2 md:inset-4 rounded-full border border-indigo-400/20 bg-indigo-950/20 backdrop-blur-md overflow-hidden flex items-center justify-center globe-rotate">
              <svg
                className="w-full h-full text-indigo-400/40 opacity-50"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              >
                <circle cx="50" cy="50" r="48"></circle>
                <ellipse cx="50" cy="50" rx="48" ry="16"></ellipse>
                <ellipse cx="50" cy="50" rx="48" ry="32"></ellipse>
                <ellipse cx="50" cy="50" rx="16" ry="48"></ellipse>
                <ellipse cx="50" cy="50" rx="32" ry="48"></ellipse>
                <path d="M2 50 H98 M50 2 V98"></path>
              </svg>

              <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_20px_5px_rgba(255,255,255,0.8)]"></div>
            </div>

            <div className="absolute inset-0 animate-[spin_6s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_2px_rgba(34,211,238,0.8)]"></div>
            </div>
          </div>

          <span className="text-8xl md:text-[10rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none">
            4
          </span>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h1 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
            Signal Lost in Deep Space
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            The coordinates you are looking for do not exist or have been moved.
            Use the navigation system below to reorient.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-md mt-10 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-30 group-hover:opacity-60 blur transition duration-500"></div>

          <div className="relative flex items-center bg-[#0B0C15] rounded-full border border-white/10 p-1.5 shadow-xl">
            <Search className="w-5 h-5 ml-4 text-slate-500" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search pages, docs, or status..."
              className="w-full bg-transparent border-none text-slate-200 placeholder-slate-600 focus:ring-0 px-4 py-2 text-base outline-none font-normal h-10"
            />
            <button className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors">
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl px-4">
          <CardLink
            icon={<Home className="w-5 h-5 text-indigo-400" strokeWidth={1.5} />}
            title="Return Home"
            desc="Back to the dashboard."
            bg="bg-indigo-500/10"
          />

          <CardLink
            icon={
              <BookOpen className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
            }
            title="Documentation"
            desc="Guides and API references."
            bg="bg-purple-500/10"
          />

          <CardLink
            icon={
              <LifeBuoy className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
            }
            title="Support"
            desc="Get help from our team."
            bg="bg-cyan-500/10"
          />
        </div>

        <div className="mt-16 flex items-center gap-6">
          <span className="text-sm text-slate-600">Error Code: 404_NOT_FOUND</span>
          <div className="h-1 w-1 rounded-full bg-slate-700"></div>
          <a className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
            System Status <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </main>
    </div>
  );
}

/* Small Card Component */
function CardLink({
  icon,
  title,
  desc,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bg: string;
}) {
  return (
    <a className="group relative flex flex-col p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all duration-300">
      <div
        className={`mb-4 w-10 h-10 rounded-full ${bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
      <p className="text-base text-slate-500 group-hover:text-slate-400 transition-colors">
        {desc}
      </p>
    </a>
  );
}
