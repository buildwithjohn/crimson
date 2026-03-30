"use client";
import { useReveal } from "./useReveal";
import { Cpu, Wind, Database } from "lucide-react";

export default function Technology() {
  const ref = useReveal();

  return (
    <section id="technology" className="relative py-32 overflow-hidden" style={{ background: "var(--ink-soft)" }} ref={ref}>
      <div className="absolute inset-0 grid-lines-dark" />
      <div className="noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-label reveal mb-8 justify-center">
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Core Technology Stack</span>
          </div>
          <h2
            className="font-display reveal delay-100 text-white"
            style={{ fontSize: "clamp(30px, 4vw, 54px)", lineHeight: 1.1, fontWeight: 700 }}
          >
            Infrastructure-Grade{" "}
            <span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Technology</span>
          </h2>
        </div>

        {/* NAT Screening */}
        <div className="reveal grid lg:grid-cols-2 gap-12 mb-20 items-center" style={{ transitionDelay: "0.1s" }}>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center" style={{ background: "rgba(138,3,3,0.15)", border: "1px solid rgba(138,3,3,0.3)" }}>
                <Database size={20} style={{ color: "var(--crimson)" }} />
              </div>
              <div>
                <div className="font-mono text-white/40" style={{ fontSize: 10, letterSpacing: "0.18em" }}>SCREENING SYSTEM 01</div>
                <div className="font-display text-white font-bold" style={{ fontSize: 26 }}>NAT Viral Screening</div>
              </div>
            </div>
            <p className="text-white/50 leading-relaxed" style={{ fontSize: 15, maxWidth: 480 }}>
              Nucleic Acid Testing (NAT) is the global gold standard for blood safety, detecting viral RNA/DNA at concentrations 100x below what conventional serological tests can identify. Our systems close the &quot;window period&quot; — the critical gap where infected donors test negative on standard screens.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: "HIV Detection", val: "~11 days" },
                { label: "Hep C Window", val: "~4 days" },
                { label: "Accuracy", val: "99.99%" },
              ].map((s) => (
                <div key={s.label} className="border-l-2 pl-3" style={{ borderColor: "var(--crimson)" }}>
                  <div className="font-display text-white font-bold" style={{ fontSize: 20 }}>{s.val}</div>
                  <div className="font-mono" style={{ fontSize: 9, letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Visual representation */}
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto relative flex items-center justify-center"
              style={{ border: "1px solid rgba(138,3,3,0.15)" }}>
              {/* Concentric rings */}
              {[220, 160, 100, 50].map((size, i) => (
                <div key={size} className="absolute rounded-full border"
                  style={{
                    width: size, height: size,
                    borderColor: `rgba(138,3,3,${0.08 + i * 0.06})`,
                    animation: `breathe ${2.5 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
              <div className="w-12 h-12 rounded-full flex items-center justify-center z-10" style={{ background: "var(--crimson)" }}>
                <Database size={20} color="white" />
              </div>
              {/* Floating labels */}
              {["HIV", "HEP-B", "HEP-C", "HTLV"].map((label, i) => {
                const angle = (i * 90) * (Math.PI / 180);
                const r = 110;
                const x = 50 + (Math.cos(angle - Math.PI / 4) * r / 2.2);
                const y = 50 + (Math.sin(angle - Math.PI / 4) * r / 2.2);
                return (
                  <div key={label}
                    className="absolute font-mono"
                    style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}>
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* OS Platform + Drone side by side */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Proprietary OS */}
          <div
            className="reveal relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "40px",
              transitionDelay: "0.2s",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "var(--blue-tech)" }} />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center" style={{ background: "rgba(47,128,237,0.12)", border: "1px solid rgba(47,128,237,0.25)" }}>
                <Cpu size={18} style={{ color: "var(--blue-tech)" }} />
              </div>
              <div>
                <div className="font-mono" style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(47,128,237,0.7)", textTransform: "uppercase" }}>Platform 02</div>
                <div className="font-display text-white font-bold" style={{ fontSize: 22 }}>Proprietary OS</div>
              </div>
            </div>
            <p className="text-white/45 leading-relaxed mb-8" style={{ fontSize: 14 }}>
              A fully integrated operating system connecting every stage of the blood supply chain — donor registration, lab screening, cold storage inventory, real-time hospital requests, and delivery dispatch — in a single unified platform.
            </p>
            {/* Mock OS interface */}
            <div className="rounded-none overflow-hidden" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-2 px-4 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.3)" }}>
                {["", "", ""].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: i === 0 ? "#ff5f57" : i === 1 ? "#febc2e" : "#28c840", opacity: 0.7 }} />
                ))}
                <span className="font-mono text-white/20 ml-2" style={{ fontSize: 9 }}>crimsonwings-os · dashboard</span>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { label: "BLOOD_UNITS_AVAILABLE", val: "18,420", c: "#22c55e" },
                  { label: "PENDING_REQUESTS", val: "7", c: "var(--crimson)" },
                  { label: "DRONES_IN_FLIGHT", val: "3", c: "var(--blue-tech)" },
                  { label: "AVG_DELIVERY_TIME", val: "47 MIN", c: "#C9A84C" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>{row.label}</span>
                    <span className="font-mono font-medium" style={{ fontSize: 11, color: row.c }}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drone */}
          <div
            className="reveal relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "40px",
              transitionDelay: "0.3s",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "#C9A84C" }} />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}>
                <Wind size={18} style={{ color: "#C9A84C" }} />
              </div>
              <div>
                <div className="font-mono" style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(201,168,76,0.7)", textTransform: "uppercase" }}>Logistics 03</div>
                <div className="font-display text-white font-bold" style={{ fontSize: 22 }}>Triphasic Drone Delivery</div>
              </div>
            </div>
            <p className="text-white/45 leading-relaxed mb-8" style={{ fontSize: 14 }}>
              Ground transport handles primary logistics. Coordination hubs manage staging and dispatch. Drone delivery executes last-mile emergency response — reaching any hospital in Lagos in under 60 minutes.
            </p>
            {/* Triphasic visual */}
            <div className="flex items-center gap-0">
              {[
                { num: "01", label: "Ground Transport", sub: "Primary logistics", color: "rgba(255,255,255,0.12)" },
                { num: "02", label: "Coordination Hub", sub: "Staging & dispatch", color: "rgba(138,3,3,0.3)" },
                { num: "03", label: "Drone Last-Mile", sub: "Under 60 min", color: "#C9A84C" },
              ].map((phase, i) => (
                <div key={phase.num} className="flex items-center flex-1">
                  <div className="flex-1">
                    <div className="py-3 px-3 text-center" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${phase.color}` }}>
                      <div className="font-mono font-medium" style={{ fontSize: 9, color: i === 2 ? "#C9A84C" : "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>PHASE {phase.num}</div>
                      <div className="font-display text-white font-bold mt-1" style={{ fontSize: 12 }}>{phase.label}</div>
                      <div className="font-mono mt-1" style={{ fontSize: 8, color: "rgba(255,255,255,0.25)" }}>{phase.sub}</div>
                    </div>
                  </div>
                  {i < 2 && (
                    <div style={{ color: "rgba(255,255,255,0.2)", padding: "0 4px", fontSize: 14 }}>›</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
