"use client";
import { useReveal } from "./useReveal";
import { AlertTriangle, Clock, Thermometer, Truck } from "lucide-react";

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Unsafe Blood Supply",
    desc: "A significant portion of transfused blood in Nigeria lacks rigorous NAT-level viral screening, exposing patients to HIV, Hepatitis B, C, and other bloodborne infections.",
  },
  {
    icon: Thermometer,
    title: "Inadequate Storage",
    desc: "Most facilities lack walk-in cold rooms and ultra-low temperature freezers, leading to massive wastage of collected blood units and constant critical shortages.",
  },
  {
    icon: Clock,
    title: "Life-Threatening Delays",
    desc: "Traditional delivery systems average 4–8 hours per blood request. In trauma, obstetric emergencies, and surgery, every minute of delay increases mortality risk.",
  },
  {
    icon: Truck,
    title: "Fragmented Logistics",
    desc: "No integrated system connects blood banks, hospitals, and donors. Manual coordination creates dangerous gaps in the supply chain from collection to transfusion.",
  },
];

export default function Problem() {
  const ref = useReveal();

  return (
    <section id="problem" className="relative py-32 overflow-hidden" style={{ background: "var(--ink)" }} ref={ref}>
      <div className="absolute inset-0 grid-lines-dark" />
      <div className="noise-overlay" />

      {/* Big background text */}
      <div
        className="absolute select-none pointer-events-none font-display font-bold"
        style={{
          fontSize: "clamp(120px, 18vw, 260px)",
          color: "rgba(138,3,3,0.04)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          whiteSpace: "nowrap",
          letterSpacing: "-0.04em",
        }}
      >
        CRISIS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="section-label reveal mb-8 justify-center">
            <span style={{ color: "rgba(255,255,255,0.35)" }}>The Blood Crisis in Nigeria</span>
          </div>
          <h2
            className="font-display reveal delay-100 text-white"
            style={{ fontSize: "clamp(30px, 4vw, 54px)", lineHeight: 1.1, fontWeight: 700 }}
          >
            Lives Are Being Lost.{" "}
            <span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Right Now.</span>
          </h2>
          <p
            className="reveal delay-200 mt-6 text-white/50 leading-relaxed"
            style={{ fontSize: 16 }}
          >
            Nigeria faces a critical shortage of safe, readily available blood — compounded by systemic failures in testing, storage, and delivery infrastructure. The consequences are measured in lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className="reveal group relative overflow-hidden"
              style={{
                transitionDelay: `${i * 0.1}s`,
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                padding: "36px",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(138,3,3,0.04)" }}
              />
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "var(--crimson)" }}
              />

              <div
                className="w-10 h-10 flex items-center justify-center mb-6"
                style={{ background: "rgba(138,3,3,0.12)", border: "1px solid rgba(138,3,3,0.25)" }}
              >
                <p.icon size={18} style={{ color: "var(--crimson)" }} />
              </div>

              <h3
                className="font-display text-white font-bold mb-3"
                style={{ fontSize: 22, lineHeight: 1.2 }}
              >
                {p.title}
              </h3>
              <p className="text-white/45 leading-relaxed" style={{ fontSize: 14 }}>
                {p.desc}
              </p>

              <div
                className="absolute top-4 right-4 font-mono text-white/10"
                style={{ fontSize: 11, letterSpacing: "0.1em" }}
              >
                0{i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Stat callout */}
        <div
          className="reveal mt-16 text-center"
          style={{ transitionDelay: "0.4s" }}
        >
          <div
            className="inline-block py-6 px-12"
            style={{ border: "1px solid rgba(138,3,3,0.3)", background: "rgba(138,3,3,0.05)" }}
          >
            <div
              className="font-display text-white font-bold"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1 }}
            >
              1 in 4
            </div>
            <div
              className="font-mono text-white/40 mt-2"
              style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}
            >
              Nigerians who need a blood transfusion cannot access it in time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
