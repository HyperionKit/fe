"use client";

import React from "react";
import {
  Bell,
  Check,
  Server,
  CheckCircle2,
  Database,
  Globe,
  LayoutDashboard,
  History,
  ArrowRight,
} from "lucide-react";

export default function StatusPage() {
  return (
    <div
      className="bg-[#03040B] text-slate-300 min-h-screen flex flex-col relative overflow-x-hidden selection:bg-emerald-500/30"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute inset-0 grid-bg -z-10 h-full w-full pointer-events-none" />
      <div className="absolute inset-0 noise -z-10 h-full w-full pointer-events-none mix-blend-overlay" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center px-4 relative z-10 py-12 w-full max-w-5xl mx-auto">
        {/* Overall Status Banner */}
        <div className="w-full mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative w-full rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex items-start gap-5 relative z-10">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
                <Check className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-1">
                  All systems operational
                </h1>
                <p className="text-sm text-emerald-200/60 font-light">
                  All services are running normally. No active incidents reported.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400/80 bg-emerald-900/20 px-3 py-1.5 rounded-full border border-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Last updated: Just now
            </div>
          </div>
        </div>

        {/* Infrastructure Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {/* API Status */}
          <StatusCard
            title="Rest API"
            icon={<Server className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />}
            status="Operational"
            uptimeBars={[
              80, 100, 90, 85, 100, 100, 95, 100, 100, 80, 60, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
            ]}
            uptimeText="99.99% Uptime"
          />

          {/* Database Status */}
          <StatusCard
            title="Postgres Clusters"
            icon={<Database className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />}
            status="Operational"
            uptimeBars={Array(20).fill(100).concat([100])}
            uptimeText="100% Uptime"
          />

          {/* CDN */}
          <SimpleStatusCard
            title="Global CDN"
            icon={<Globe className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />}
          />

          {/* Dashboard */}
          <SimpleStatusCard
            title="Dashboard & Analytics"
            icon={<LayoutDashboard className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />}
          />
        </div>

        {/* Incident History */}
        <div className="w-full max-w-5xl">
          <h2 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
            <History className="w-5 h-5 text-slate-500" />
            Past Incidents
          </h2>

          <div className="space-y-6">
            <IncidentDay date="October 24, 2023">
              <Incident
                title="API High Latency"
                status="Resolved"
                description="We observed elevated latency on the us-east-1 API cluster. Traffic was automatically rerouted to healthy regions."
                logs={[
                  { time: "14:20 UTC", message: "Issue identified and investigation started." },
                  { time: "14:45 UTC", message: "Fix implemented. Latency returning to normal levels." },
                  { time: "15:00 UTC", message: "Incident resolved.", highlight: true },
                ]}
              />
            </IncidentDay>

            <IncidentDay date="October 12, 2023">
              <div className="text-xs text-slate-600 italic">No incidents reported on this day.</div>
            </IncidentDay>
          </div>

          <div className="mt-8 text-center">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-1 group">
              View Incident History <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </main>

      {/* Global Styles */}
      <style jsx global>{`
        .grid-bg {
          background-size: 40px 40px;
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }
        .bar-hover:hover {
          transform: scaleY(1.5);
          background-color: #34d399;
        }
        .pulse-emerald {
          animation: pulse-emerald 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-emerald {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}

// StatusCard component with uptime bars
function StatusCard({
  title,
  icon,
  status,
  uptimeBars,
  uptimeText,
}: {
  title: string;
  icon: React.ReactNode;
  status: string;
  uptimeBars: number[];
  uptimeText: string;
}) {
  return (
    <div className="group rounded-lg border border-white/5 bg-[#0A0B10] p-5 hover:border-white/10 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">{icon}<span className="text-sm font-medium text-slate-200">{title}</span></div>
        <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" /> {status}
        </span>
      </div>
      <div className="flex items-end justify-between gap-[2px] h-6 mt-2 opacity-60">
        <div className="flex gap-[3px] w-full items-end h-full">
          {uptimeBars.map((h, i) => (
            <div
              key={i}
              className={`w-full rounded-[1px] bar-hover transition-all`}
              style={{ height: `${h}%`, backgroundColor: i === 10 ? "rgba(250, 204, 21,0.4)" : "rgba(52, 211, 153,0.2)" }}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-2 text-[10px] text-slate-600 uppercase tracking-wider font-medium">
        <span>90 days ago</span>
        <span className="text-emerald-500/70">{uptimeText}</span>
        <span>Today</span>
      </div>
    </div>
  );
}

// SimpleStatusCard for single bar components
function SimpleStatusCard({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="group rounded-lg border border-white/5 bg-[#0A0B10] p-5 hover:border-white/10 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">{icon}<span className="text-sm font-medium text-slate-200">{title}</span></div>
        <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" /> Operational
        </span>
      </div>
      <div className="w-full bg-white/5 rounded-full h-1 mt-6 overflow-hidden">
        <div className="w-full h-full bg-emerald-500/50"></div>
      </div>
    </div>
  );
}

// IncidentDay wrapper
function IncidentDay({ date, children }: { date: string; children: React.ReactNode }) {
  return (
    <div className="relative pl-6 border-l border-white/10 pb-6">
      <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-[#03040B] border border-white/20"></div>
      <h3 className="text-sm font-medium text-slate-400 mb-4">{date}</h3>
      {children}
    </div>
  );
}

// Incident card
function Incident({
  title,
  status,
  description,
  logs,
}: {
  title: string;
  status: string;
  description: string;
  logs: { time: string; message: string; highlight?: boolean }[];
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-[#0A0B10] p-5">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-sm font-medium text-white">{title}</h4>
        <span className="text-[10px] font-medium bg-white/5 text-slate-400 px-2 py-0.5 rounded border border-white/5">{status}</span>
      </div>
      <p className="text-xs text-slate-500 mb-4 leading-relaxed">{description}</p>
      <div className="space-y-3">
        {logs.map((log, idx) => (
          <div key={idx} className="flex gap-3 text-xs">
            <span className="text-slate-500 w-12 shrink-0">{log.time}</span>
            <span className={log.highlight ? "text-emerald-400" : "text-slate-300"}>{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
