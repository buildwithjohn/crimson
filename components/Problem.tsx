"use client";
import { AlertTriangle, Clock, Thermometer, Truck } from "lucide-react";

const PROBLEMS = [
  { icon: AlertTriangle, title: "Unsafe Blood Supply",     desc: "A significant portion of transfused blood in Nigeria lacks rigorous NAT-level viral screening, exposing patients to HIV, Hepatitis B, C, and other bloodborne infections." },
  { icon: Thermometer,   title: "Inadequate Storage",      desc: "Most facilities lack walk-in cold rooms and ultra-low temperature freezers, leading to massive wastage of collected blood units and constant critical shortages." },
  { icon: Clock,         title: "Life-Threatening Delays", desc: "Traditional delivery systems average 4–8 hours per blood request. In trauma, obstetric emergencies, and surgery, every minute of delay increases mortality risk." },
  { icon: Truck,         title: "Fragmented Logistics",    desc: "No integrated system connects blood banks, hospitals, and donors. Manual coordination creates dangerous gaps in the supply chain from collection to transfusion." },
];

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        paddingBlock: "clamp(64px,8vw,120px)",
        background: "var(--ink)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }} />

      {/* Ghost word */}
      <div className="font-display" style={{
        position: "absolute", fontSize: "clamp(80px,14vw,200px)", fontWeight: 700,
        color: "rgba(138,3,3,.04)", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)", whiteSpace: "nowrap",
        letterSpacing: "-.04em", pointerEvents: "none", userSelect: "none",
      }}>
        CRISIS
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ maxWidth: 600, margin: "0 auto clamp(48px,6vw,80px)", textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center", marginBottom: 20 }}>
            <span style={{ color: "rgba(255,255,255,.35)" }}>The Blood Crisis in Nigeria</span>
          </div>
          <h2 className="h2 font-display" style={{ color: "#fff", marginBottom: 16 }}>
            Lives Are Being Lost.{" "}
            <em style={{ color: "var(--crimson)" }}>Right Now.</em>
          </h2>
          <p className="body-lg" style={{ color: "rgba(255,255,255,.45)" }}>
            Nigeria faces a critical shortage of safe, readily available blood — compounded by systemic failures in testing, storage, and delivery infrastructure.
          </p>
        </div>

        {/* Problem cards */}
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr" }} className="problem-grid">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              style={{
                background: "rgba(255,255,255,.02)",
                border: "1px solid rgba(255,255,255,.07)",
                padding: "clamp(24px,3vw,36px)",
                position: "relative",
                overflow: "hidden",
                transition: "background .3s, border-color .3s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(138,3,3,.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(138,3,3,.22)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.02)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.07)";
              }}
            >
              <div style={{
                width: 42, height: 42,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(138,3,3,.12)",
                border: "1px solid rgba(138,3,3,.22)",
                marginBottom: 20,
              }}>
                <p.icon size={18} style={{ color: "var(--crimson)" }} />
              </div>

              <h3 className="h3 font-display" style={{ color: "#fff", marginBottom: 12 }}>
                {p.title}
              </h3>
              <p className="body-md" style={{ color: "rgba(255,255,255,.45)" }}>
                {p.desc}
              </p>

              {/* Number watermark */}
              <div className="caption" style={{
                position: "absolute", top: 20, right: 20,
                color: "rgba(255,255,255,.06)", fontSize: 11,
              }}>
                0{i + 1}
              </div>

              {/* Bottom hover line */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
                background: "var(--crimson)", opacity: 0,
                transition: "opacity .3s",
              }} className="hover-line" />
            </div>
          ))}
        </div>

        {/* 1 in 4 callout */}
        <div style={{ textAlign: "center", marginTop: "clamp(48px,6vw,80px)" }}>
          <div style={{
            display: "inline-block",
            padding: "clamp(24px,3vw,40px) clamp(36px,5vw,80px)",
            border: "1px solid rgba(138,3,3,.28)",
            background: "rgba(138,3,3,.05)",
          }}>
            <div className="font-display" style={{
              fontSize: "clamp(40px,6vw,70px)", fontWeight: 700,
              color: "#fff", lineHeight: 1, marginBottom: 12,
            }}>
              1 in 4
            </div>
            <div className="caption" style={{ color: "rgba(255,255,255,.38)", letterSpacing: ".18em" }}>
              Nigerians who need a transfusion cannot access it in time
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 700px) { .problem-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
