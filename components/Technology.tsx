"use client";
import { useReveal } from "./useReveal";
import { Cpu, Wind, Database } from "lucide-react";

export default function Technology() {
  const ref = useReveal();

  return (
    <section id="technology" className="relative py-16 lg:py-32 overflow-hidden" style={{ background: "var(--ink-soft)" }} ref={ref}>
      <div className="absolute inset-0 grid-lines-dark" />
      <div className="noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 lg:mb-20">
          <div className="section-label reveal mb-8 justify-center">
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Core Technology</span>
          </div>
          <h2 className="font-display reveal delay-100 text-white"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.1, fontWeight: 700 }}>
            Infrastructure-Grade{" "}<span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Technology</span>
          </h2>
        </div>

        {/* NAT Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-14 lg:mb-20 items-center">
          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(138,3,3,0.15)", border: "1px solid rgba(138,3,3,0.3)" }}>
                <Database size={18} style={{ color: "var(--crimson)" }} />
              </div>
              <div>
                <div className="font-mono text-white/35" style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase" }}>Screening System 01</div>
                <div className="font-display text-white font-bold" style={{ fontSize: 24 }}>NAT Viral Screening</div>
              </div>
            </div>
            <p className="text-white/48 leading-relaxed" style={{ fontSize: 14, maxWidth: 460 }}>
              Nucleic Acid Testing (NAT) is the global gold standard for blood safety, detecting viral RNA/DNA at concentrations 100x below what conventional serological tests can identify. Our systems close the &quot;window period&quot; — the critical gap where infected donors test negative on standard screens.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[{ label: "HIV Detection", val: "~11 days" }, { label: "Hep C Window", val: "~4 days" }, { label: "Accuracy", val: "99.99%" }].map((s) => (
                <div key={s.label} className="border-l-2 pl-3" style={{ borderColor: "var(--crimson)" }}>
                  <div className="font-display text-white font-bold" style={{ fontSize: 18 }}>{s.val}</div>
                  <div className="font-mono mt-1" style={{ fontSize: 8, letterSpacing: "0.12em", color: "rgba(255,255,255,0.32)", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* NAT visual */}
          <div className="reveal-right flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 flex items-center justify-center"
              style={{ border: "1px solid rgba(138,3,3,0.12)" }}>
              {[200, 148, 96, 48].map((size, i) => (
                <div key={size} className="absolute rounded-full border"
                  style={{ width: size, height: size, borderColor: `rgba(138,3,3,${0.08 + i * 0.06})`, animation: `breathe ${2.5 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }} />
              ))}
              <div className="w-11 h-11 rounded-full flex items-center justify-center z-10" style={{ background: "var(--crimson)" }}>
                <Database size={18} color="white" />
              </div>
              {["HIV", "HEP-B", "HEP-C", "HTLV"].map((label, i) => {
                const angles = [-45, 45, 135, -135];
                const r = 90;
                const angle = (angles[i] * Math.PI) / 180;
                return (
                  <div key={label} className="absolute font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", left: `calc(50% + ${r * Math.cos(angle)}px)`, top: `calc(50% + ${r * Math.sin(angle)}px)`, transform: "translate(-50%,-50%)" }}>
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* OS + Drone — equal columns */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Proprietary OS */}
          <div className="reveal relative overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", padding: "36px 32px", transitionDelay: "0.2s" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "var(--blue-tech)" }} />
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(47,128,237,0.12)", border: "1px solid rgba(47,128,237,0.22)" }}>
                <Cpu size={17} style={{ color: "var(--blue-tech)" }} />
              </div>
              <div>
                <div className="font-mono" style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(47,128,237,0.65)", textTransform: "uppercase" }}>Platform 02</div>
                <div className="font-display text-white font-bold" style={{ fontSize: 21 }}>Proprietary OS</div>
              </div>
            </div>
            <p className="text-white/42 leading-relaxed mb-7" style={{ fontSize: 13 }}>
              A fully integrated OS connecting every stage — donor registration, lab screening, cold storage inventory, real-time hospital requests, and delivery dispatch — in one unified platform.
            </p>
            {/* Mock terminal */}
            <div style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-2 px-4 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.3)" }}>
                {[["#ff5f57", ""], ["#febc2e", ""], ["#28c840", ""]].map(([c], i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.7 }} />
                ))}
                <span className="font-mono text-white/18 ml-2" style={{ fontSize: 9 }}>crimsonwings-os · live dashboard</span>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { label: "BLOOD_UNITS_AVAILABLE", val: "18,420", c: "#22c55e" },
                  { label: "PENDING_REQUESTS", val: "7", c: "var(--crimson)" },
                  { label: "DRONES_IN_FLIGHT", val: "3", c: "var(--blue-tech)" },
                  { label: "AVG_DELIVERY_TIME", val: "47 MIN", c: "#C9A84C" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <span className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.22)", letterSpacing: "0.08em" }}>{row.label}</span>
                    <span className="font-mono font-medium" style={{ fontSize: 11, color: row.c }}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drone */}
          <div className="reveal relative overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", padding: "36px 32px", transitionDelay: "0.3s" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "#C9A84C" }} />
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.22)" }}>
                <Wind size={17} style={{ color: "#C9A84C" }} />
              </div>
              <div>
                <div className="font-mono" style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(201,168,76,0.65)", textTransform: "uppercase" }}>Logistics 03</div>
                <div className="font-display text-white font-bold" style={{ fontSize: 21 }}>Triphasic Drone Delivery</div>
              </div>
            </div>
            <p className="text-white/42 leading-relaxed mb-7" style={{ fontSize: 13 }}>
              Ground transport handles primary logistics. Coordination hubs manage staging and dispatch. Drone delivery executes last-mile emergency response — any hospital in Lagos in under 60 minutes.
            </p>
            {/* Triphasic phases */}
            <div className="flex gap-2">
              {[
                { num: "01", label: "Ground Transport", sub: "Primary logistics", color: "rgba(255,255,255,0.1)" },
                { num: "02", label: "Coordination Hub", sub: "Staging & dispatch", color: "rgba(138,3,3,0.3)" },
                { num: "03", label: "Drone Last-Mile", sub: "Under 60 min", color: "#C9A84C" },
              ].map((phase, i) => (
                <div key={phase.num} className="flex items-center flex-1">
                  <div className="flex-1 py-3 px-2 text-center" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${phase.color}` }}>
                    <div className="font-mono font-medium" style={{ fontSize: 8, color: i === 2 ? "#C9A84C" : "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Phase {phase.num}</div>
                    <div className="font-display text-white font-bold mt-1" style={{ fontSize: 11, lineHeight: 1.2 }}>{phase.label}</div>
                    <div className="font-mono mt-1" style={{ fontSize: 7, color: "rgba(255,255,255,0.22)" }}>{phase.sub}</div>
                  </div>
                  {i < 2 && <div style={{ color: "rgba(255,255,255,0.18)", padding: "0 3px", fontSize: 12 }}>›</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
