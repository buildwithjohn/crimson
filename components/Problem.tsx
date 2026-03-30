"use client";
import { useReveal } from "./useReveal";
import { AlertTriangle, Clock, Thermometer, Truck } from "lucide-react";

const PROBLEMS = [
  { icon: AlertTriangle, title: "Unsafe Blood Supply", desc: "A significant portion of transfused blood in Nigeria lacks rigorous NAT-level viral screening, exposing patients to HIV, Hepatitis B, C, and other bloodborne infections." },
  { icon: Thermometer, title: "Inadequate Storage", desc: "Most facilities lack walk-in cold rooms and ultra-low temperature freezers, leading to massive wastage of collected blood units and constant critical shortages." },
  { icon: Clock, title: "Life-Threatening Delays", desc: "Traditional delivery systems average 4–8 hours per blood request. In trauma, obstetric emergencies, and surgery, every minute of delay increases mortality risk." },
  { icon: Truck, title: "Fragmented Logistics", desc: "No integrated system connects blood banks, hospitals, and donors. Manual coordination creates dangerous gaps in the supply chain from collection to transfusion." },
];

export default function Problem() {
  const ref = useReveal();

  return (
    <section id="problem" className="relative py-16 lg:py-32 overflow-hidden" style={{ background: "var(--ink)" }} ref={ref}>
      <div className="absolute inset-0 grid-lines-dark" />
      <div className="noise-overlay" />

      <div className="absolute select-none pointer-events-none font-display font-bold"
        style={{ fontSize: "clamp(80px, 15vw, 220px)", color: "rgba(138,3,3,0.04)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", whiteSpace: "nowrap", letterSpacing: "-0.04em" }}>
        CRISIS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-20">
          <div className="section-label reveal mb-8 justify-center">
            <span style={{ color: "rgba(255,255,255,0.35)" }}>The Blood Crisis in Nigeria</span>
          </div>
          <h2 className="font-display reveal delay-100 text-white"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.1, fontWeight: 700 }}>
            Lives Are Being Lost.{" "}<span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Right Now.</span>
          </h2>
          <p className="reveal delay-200 mt-5 text-white/50 leading-relaxed" style={{ fontSize: 15 }}>
            Nigeria faces a critical shortage of safe, readily available blood — compounded by systemic failures in testing, storage, and delivery infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PROBLEMS.map((p, i) => (
            <div key={p.title} className="reveal group relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.1}s`, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", padding: "32px 28px" }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(138,3,3,0.04)" }} />
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: "var(--crimson)" }} />

              <div className="w-10 h-10 flex items-center justify-center mb-5"
                style={{ background: "rgba(138,3,3,0.12)", border: "1px solid rgba(138,3,3,0.22)" }}>
                <p.icon size={17} style={{ color: "var(--crimson)" }} />
              </div>
              <h3 className="font-display text-white font-bold mb-3" style={{ fontSize: 20, lineHeight: 1.25 }}>{p.title}</h3>
              <p className="text-white/42 leading-relaxed" style={{ fontSize: 14 }}>{p.desc}</p>
              <div className="absolute top-4 right-4 font-mono text-white/8" style={{ fontSize: 10 }}>0{i + 1}</div>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 lg:mt-16 text-center" style={{ transitionDelay: "0.4s" }}>
          <div className="inline-block py-6 px-8 lg:px-12"
            style={{ border: "1px solid rgba(138,3,3,0.28)", background: "rgba(138,3,3,0.05)" }}>
            <div className="font-display text-white font-bold" style={{ fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1 }}>1 in 4</div>
            <div className="font-mono text-white/38 mt-2" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Nigerians who need a transfusion cannot access it in time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
