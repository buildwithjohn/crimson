"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard, Droplets, Truck, Hospital, FlaskConical,
  BarChart3, Bell, Settings, LogOut, Menu, X, ChevronRight,
  TrendingUp, TrendingDown, AlertCircle, CheckCircle2, Clock,
  Wind, Activity, Users, ArrowLeft
} from "lucide-react";

// ── Sidebar nav items ────────────────────────────────────────────────────────
const NAV = [
  { icon: LayoutDashboard, label: "Overview",        id: "overview",   active: true  },
  { icon: Droplets,        label: "Blood Inventory", id: "inventory",  active: false },
  { icon: FlaskConical,    label: "NAT Screening",   id: "screening",  active: false },
  { icon: Truck,           label: "Deliveries",      id: "deliveries", active: false },
  { icon: Hospital,        label: "Hospitals",       id: "hospitals",  active: false },
  { icon: Wind,            label: "Drone Fleet",     id: "drones",     active: false },
  { icon: Users,           label: "Donors",          id: "donors",     active: false },
  { icon: BarChart3,       label: "Analytics",       id: "analytics",  active: false },
];

// ── Live stats cards ──────────────────────────────────────────────────────────
const STATS = [
  { label: "Units Available",    value: "18,420",  sub: "Blood units in cold storage", trend: +4.2,  color: "#22c55e", icon: Droplets    },
  { label: "Active Deliveries",  value: "12",      sub: "In transit right now",        trend: 0,     color: "#2F80ED", icon: Truck       },
  { label: "Pending Requests",   value: "7",       sub: "Awaiting dispatch",           trend: -2,    color: "#C9A84C", icon: Clock       },
  { label: "Drones in Flight",   value: "3",       sub: "Active drone missions",       trend: 0,     color: "#8A0303", icon: Wind        },
];

// ── Recent deliveries ─────────────────────────────────────────────────────────
const DELIVERIES = [
  { id: "DLV-0042", hospital: "Lagos Island General",  type: "O+",  units: 4, eta: "12 min", status: "In Flight",   mode: "Drone"  },
  { id: "DLV-0041", hospital: "LASUTH Ikeja",          type: "A-",  units: 2, eta: "28 min", status: "In Transit",  mode: "Ground" },
  { id: "DLV-0040", hospital: "Lagos University Hosp", type: "B+",  units: 6, eta: "Arrived",status: "Delivered",   mode: "Ground" },
  { id: "DLV-0039", hospital: "St. Nicholas Hospital", type: "AB+", units: 1, eta: "Arrived",status: "Delivered",   mode: "Drone"  },
  { id: "DLV-0038", hospital: "Reddington Hospital",   type: "O-",  units: 3, eta: "Arrived",status: "Delivered",   mode: "Ground" },
];

// ── Blood type inventory ──────────────────────────────────────────────────────
const BLOOD_TYPES = [
  { type: "O+",  units: 5840, pct: 87, status: "Good"     },
  { type: "A+",  units: 3910, pct: 72, status: "Good"     },
  { type: "B+",  units: 2740, pct: 58, status: "Moderate" },
  { type: "AB+", units: 980,  pct: 41, status: "Low"      },
  { type: "O-",  units: 2100, pct: 65, status: "Good"     },
  { type: "A-",  units: 1230, pct: 38, status: "Low"      },
  { type: "B-",  units: 890,  pct: 30, status: "Critical" },
  { type: "AB-", units: 730,  pct: 28, status: "Critical" },
];

// ── Alerts ────────────────────────────────────────────────────────────────────
const ALERTS = [
  { level: "critical", msg: "B- stock critically low — reorder triggered",       time: "2 min ago"  },
  { level: "critical", msg: "AB- approaching minimum threshold (730 units)",      time: "8 min ago"  },
  { level: "warning",  msg: "Hub 3 (Surulere) cold room temp variance +0.4°C",   time: "14 min ago" },
  { level: "info",     msg: "DLV-0042 drone departure confirmed — Lagos Island",  time: "17 min ago" },
  { level: "success",  msg: "NAT batch #B-20241201-07 cleared — 240 units added", time: "31 min ago" },
];

// ── Hub status ────────────────────────────────────────────────────────────────
const HUBS = [
  { name: "Hub 1 — Victoria Island", units: 6240, temp: "2.1°C", drones: 4, status: "Operational" },
  { name: "Hub 2 — Ikeja",           units: 4810, temp: "2.0°C", drones: 3, status: "Operational" },
  { name: "Hub 3 — Surulere",        units: 3920, temp: "2.4°C", drones: 2, status: "Warning"     },
  { name: "Hub 4 — Lekki",           units: 2380, temp: "2.0°C", drones: 3, status: "Operational" },
  { name: "Hub 5 — Apapa",           units: 1070, temp: "2.1°C", drones: 1, status: "Operational" },
];

// ─────────────────────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    "In Flight":   { bg: "rgba(47,128,237,0.12)",  color: "#2F80ED" },
    "In Transit":  { bg: "rgba(201,168,76,0.12)",  color: "#C9A84C" },
    "Delivered":   { bg: "rgba(34,197,94,0.12)",   color: "#22c55e" },
    "Dispatching": { bg: "rgba(138,3,3,0.12)",     color: "#B30404" },
    "Operational": { bg: "rgba(34,197,94,0.1)",    color: "#22c55e" },
    "Warning":     { bg: "rgba(201,168,76,0.12)",  color: "#C9A84C" },
    "Offline":     { bg: "rgba(255,255,255,0.06)", color: "#7A7A7A" },
    "Good":        { bg: "rgba(34,197,94,0.1)",    color: "#22c55e" },
    "Moderate":    { bg: "rgba(201,168,76,0.1)",   color: "#C9A84C" },
    "Low":         { bg: "rgba(138,3,3,0.1)",      color: "#B30404" },
    "Critical":    { bg: "rgba(138,3,3,0.18)",     color: "#8A0303" },
  };
  const s = map[status] ?? { bg: "rgba(255,255,255,0.06)", color: "#7A7A7A" };
  return (
    <span className="font-mono" style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", background: s.bg, color: s.color, padding: "3px 8px", border: `1px solid ${s.color}22` }}>
      {status}
    </span>
  );
}

function AlertIcon({ level }: { level: string }) {
  if (level === "critical") return <AlertCircle size={14} style={{ color: "#8A0303", flexShrink: 0 }} />;
  if (level === "warning")  return <AlertCircle size={14} style={{ color: "#C9A84C", flexShrink: 0 }} />;
  if (level === "success")  return <CheckCircle2 size={14} style={{ color: "#22c55e", flexShrink: 0 }} />;
  return <Activity size={14} style={{ color: "#2F80ED", flexShrink: 0 }} />;
}

// ─────────────────────────────────────────────────────────────────────────────

export default function DashboardShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen flex" style={{ background: "#080C14", fontFamily: "var(--font-body)", color: "white" }}>

      {/* ── SIDEBAR ───────────────────────────────────────────────────────── */}
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ background: "rgba(0,0,0,0.6)" }} onClick={() => setSidebarOpen(false)} />
      )}

      <aside
        className="fixed top-0 left-0 h-full z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto"
        style={{
          width: 240,
          background: "#0C1220",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          transform: sidebarOpen ? "translateX(0)" : undefined,
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="relative flex-shrink-0 w-9 h-9 rounded-full overflow-hidden" style={{ background: "#000" }}>
            <Image src="/logo-crimson.png" alt="CrimsonWings" fill style={{ objectFit: "contain" }} />
          </div>
          <div>
            <div className="font-display font-bold text-white" style={{ fontSize: 15, lineHeight: 1.2 }}>
              Crimson<span style={{ color: "var(--crimson,#8A0303)" }}>Wings</span>
            </div>
            <div className="font-mono text-white/30" style={{ fontSize: 8, letterSpacing: "0.12em", textTransform: "uppercase" }}>Operations OS</div>
          </div>
          <button className="lg:hidden ml-auto text-white/40 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X size={16} />
          </button>
        </div>

        {/* System status pill */}
        <div className="mx-4 mt-4 mb-2 flex items-center gap-2 px-3 py-2" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.12)" }}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e", animation: "blink 2s ease-in-out infinite" }} />
          <span className="font-mono text-white/40" style={{ fontSize: 8, letterSpacing: "0.14em", textTransform: "uppercase" }}>All Systems Active</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
          <div className="font-mono px-2 mb-2 mt-1" style={{ fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>Navigation</div>
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className="w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-200"
              style={{
                background: activeTab === item.id ? "rgba(138,3,3,0.15)" : "transparent",
                borderLeft: activeTab === item.id ? "2px solid #8A0303" : "2px solid transparent",
                color: activeTab === item.id ? "white" : "rgba(255,255,255,0.42)",
              }}
            >
              <item.icon size={15} />
              <span style={{ fontSize: 13, fontWeight: activeTab === item.id ? 500 : 400 }}>{item.label}</span>
              {activeTab === item.id && <ChevronRight size={12} className="ml-auto opacity-50" />}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-3 py-4 space-y-0.5" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors" style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
            <Bell size={15} /><span>Alerts</span>
            <span className="ml-auto font-mono text-white" style={{ fontSize: 9, background: "#8A0303", padding: "1px 6px" }}>2</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors" style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
            <Settings size={15} /><span>Settings</span>
          </button>
          <Link href="/" className="w-full flex items-center gap-3 px-3 py-2.5 transition-colors" style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, textDecoration: "none" }}>
            <ArrowLeft size={15} /><span>Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="flex-shrink-0 flex items-center justify-between px-5 py-4"
          style={{ background: "#0C1220", borderBottom: "1px solid rgba(255,255,255,0.05)", position: "sticky", top: 0, zIndex: 30 }}>
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-white/50 hover:text-white p-1" onClick={() => setSidebarOpen(true)}>
              <Menu size={20} />
            </button>
            <div>
              <div className="font-display font-bold text-white" style={{ fontSize: 16 }}>Mission Control</div>
              <div className="font-mono text-white/30" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase" }}>Overview Dashboard</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 5px #22c55e" }} />
              <span className="font-mono text-white/35" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase" }}>Lagos · Live</span>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white" style={{ background: "#8A0303", fontSize: 12 }}>OP</div>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-5 lg:p-7" style={{ background: "#080C14" }}>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
            {STATS.map((s) => (
              <div key={s.label} className="relative overflow-hidden p-5"
                style={{ background: "#0C1220", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: s.color, opacity: 0.6 }} />
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 flex items-center justify-center" style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                    <s.icon size={15} style={{ color: s.color }} />
                  </div>
                  {s.trend !== 0 && (
                    <div className="flex items-center gap-1" style={{ color: s.trend > 0 ? "#22c55e" : "#B30404" }}>
                      {s.trend > 0 ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                      <span className="font-mono" style={{ fontSize: 9 }}>{Math.abs(s.trend)}%</span>
                    </div>
                  )}
                </div>
                <div className="font-display font-bold text-white" style={{ fontSize: "clamp(20px, 3vw, 30px)", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4, lineHeight: 1.3 }}>{s.label}</div>
                <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.22)", marginTop: 3, letterSpacing: "0.08em" }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* ── ROW 2: Deliveries + Alerts ── */}
          <div className="grid lg:grid-cols-3 gap-5 mb-5">

            {/* Recent deliveries — 2/3 width */}
            <div className="lg:col-span-2" style={{ background: "#0C1220", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div>
                  <div className="font-display font-bold text-white" style={{ fontSize: 14 }}>Recent Deliveries</div>
                  <div className="font-mono text-white/28" style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase" }}>Live tracking</div>
                </div>
                <span className="font-mono" style={{ fontSize: 9, color: "#2F80ED", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>View All →</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      {["Ref", "Hospital", "Type", "Units", "ETA", "Mode", "Status"].map((h) => (
                        <th key={h} className="font-mono text-left px-5 py-3"
                          style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", whiteSpace: "nowrap", fontWeight: 400 }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {DELIVERIES.map((d, i) => (
                      <tr key={d.id} style={{ borderBottom: i < DELIVERIES.length - 1 ? "1px solid rgba(255,255,255,0.03)" : "none" }}>
                        <td className="px-5 py-3 font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>{d.id}</td>
                        <td className="px-5 py-3" style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", whiteSpace: "nowrap" }}>{d.hospital}</td>
                        <td className="px-5 py-3">
                          <span className="font-mono font-bold" style={{ fontSize: 11, color: "#8A0303" }}>{d.type}</span>
                        </td>
                        <td className="px-5 py-3 font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{d.units}</td>
                        <td className="px-5 py-3 font-mono" style={{ fontSize: 10, color: d.eta === "Arrived" ? "#22c55e" : "#C9A84C", whiteSpace: "nowrap" }}>{d.eta}</td>
                        <td className="px-5 py-3 font-mono" style={{ fontSize: 10, color: d.mode === "Drone" ? "#2F80ED" : "rgba(255,255,255,0.4)", whiteSpace: "nowrap" }}>{d.mode}</td>
                        <td className="px-5 py-3 whitespace-nowrap"><StatusBadge status={d.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Alerts — 1/3 */}
            <div style={{ background: "#0C1220", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div>
                  <div className="font-display font-bold text-white" style={{ fontSize: 14 }}>System Alerts</div>
                  <div className="font-mono text-white/28" style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase" }}>Live feed</div>
                </div>
                <span className="font-mono" style={{ fontSize: 9, background: "#8A030320", color: "#8A0303", padding: "2px 7px", border: "1px solid #8A030330" }}>2 Critical</span>
              </div>
              <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                {ALERTS.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 px-5 py-3.5">
                    <AlertIcon level={a.level} />
                    <div className="flex-1 min-w-0">
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{a.msg}</div>
                      <div className="font-mono mt-1" style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── ROW 3: Blood Inventory + Hub Status ── */}
          <div className="grid lg:grid-cols-2 gap-5">

            {/* Blood type inventory */}
            <div style={{ background: "#0C1220", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="font-display font-bold text-white" style={{ fontSize: 14 }}>Blood Type Inventory</div>
                <div className="font-mono text-white/28" style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase" }}>All hubs combined</div>
              </div>
              <div className="p-5 grid grid-cols-2 gap-4">
                {BLOOD_TYPES.map((b) => (
                  <div key={b.type}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-white" style={{ fontSize: 15 }}>{b.type}</span>
                        <StatusBadge status={b.status} />
                      </div>
                      <span className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{b.units.toLocaleString()}</span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="h-full transition-all duration-700" style={{
                        width: `${b.pct}%`,
                        background: b.pct > 60 ? "#22c55e" : b.pct > 35 ? "#C9A84C" : "#8A0303",
                        borderRadius: 9999,
                      }} />
                    </div>
                    <div className="font-mono mt-1" style={{ fontSize: 8, color: "rgba(255,255,255,0.22)", letterSpacing: "0.08em" }}>{b.pct}% capacity</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hub status */}
            <div style={{ background: "#0C1220", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="font-display font-bold text-white" style={{ fontSize: 14 }}>Hub Network Status</div>
                <div className="font-mono text-white/28" style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase" }}>5 active hubs · Lagos State</div>
              </div>
              <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                {HUBS.map((hub) => (
                  <div key={hub.name} className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: hub.status === "Operational" ? "#22c55e" : hub.status === "Warning" ? "#C9A84C" : "#8A0303", boxShadow: `0 0 5px ${hub.status === "Operational" ? "#22c55e" : "#C9A84C"}` }} />
                      <div className="min-w-0">
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{hub.name}</div>
                        <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.28)", letterSpacing: "0.08em" }}>
                          {hub.units.toLocaleString()} units · {hub.drones} drones · {hub.temp}
                        </div>
                      </div>
                    </div>
                    <StatusBadge status={hub.status} />
                  </div>
                ))}
              </div>

              {/* Quick stats row */}
              <div className="grid grid-cols-3 px-5 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)" }}>
                {[
                  { label: "Total Units", val: "18,420" },
                  { label: "Avg Temp", val: "2.1°C"  },
                  { label: "Drones", val: "13 active" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-bold text-white" style={{ fontSize: 16 }}>{s.val}</div>
                    <div className="font-mono" style={{ fontSize: 8, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-5 flex items-center justify-between">
            <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.18)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              CrimsonWings OS · Mission Control v1.0 · Data refreshes every 60 seconds
            </div>
            <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.18)", letterSpacing: "0.1em" }}>
              Built by JAA Studio
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
