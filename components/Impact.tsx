"use client";
import { useReveal } from "./useReveal";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 280000, suffix: "+", prefix: "", label: "Blood Units Target (Year 1)", desc: "Annual delivery capacity" },
  { value: 20000, suffix: "+", prefix: "", label: "Units Per Month", desc: "Processing & storage capacity" },
  { value: 60, suffix: " MIN", prefix: "<", label: "Emergency Delivery", desc: "Urban response target" },
  { value: 181, suffix: "+", prefix: "", label: "Target Partner Hospitals", desc: "Across Lagos State" },
  { value: 5, suffix: "", prefix: "", label: "Strategic Hubs", desc: "Hub-and-spoke network" },
  { value: 100, suffix: "%", prefix: "", label: "NAT Screened Supply", desc: "Gold standard safety" },
];

function AnimatedCounter({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        const duration = 1800;
        const steps = 55;
        const step = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else { setCount(Math.floor(current)); }
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, started]);

  const formatted = count >= 10000 ? count.toLocaleString() : count.toString();
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

export default function Impact() {
  const ref = useReveal();

  return (
    <section id="impact" className="relative py-16 lg:py-32 overflow-hidden" style={{ background: "var(--ink)" }} ref={ref}>
      <div className="absolute inset-0 grid-lines-dark" />
      <div className="noise-overlay" />
      <div className="absolute select-none pointer-events-none font-display font-bold"
        style={{ fontSize: "clamp(80px, 14vw, 200px)", color: "rgba(138,3,3,0.04)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", whiteSpace: "nowrap", letterSpacing: "-0.04em" }}>
        IMPACT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 lg:mb-20">
          <div className="section-label reveal mb-8 justify-center">
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Platform Scale</span>
          </div>
          <h2 className="font-display reveal delay-100 text-white"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.1, fontWeight: 700 }}>
            Numbers That{" "}<span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Matter</span>
          </h2>
        </div>

        {/* Stat grid — using border instead of gap-px trick */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          {STATS.map((s, i) => (
            <div key={s.label} className="reveal group"
              style={{
                transitionDelay: `${i * 0.1}s`,
                padding: "36px 32px",
                borderRight: i % 3 !== 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                position: "relative",
                transition: "background 0.3s",
              }}>
              <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                style={{ background: "var(--crimson)" }} />
              <div className="font-display font-bold text-white" style={{ fontSize: "clamp(36px, 4vw, 52px)", lineHeight: 1 }}>
                <AnimatedCounter target={s.value} suffix={s.suffix} prefix={s.prefix} />
              </div>
              <div className="font-display font-semibold mt-2" style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.3 }}>{s.label}</div>
              <div className="font-mono mt-1" style={{ fontSize: 9, color: "rgba(255,255,255,0.28)", letterSpacing: "0.12em" }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="reveal mt-14 lg:mt-16 text-center" style={{ transitionDelay: "0.5s" }}>
          <div className="inline-block max-w-2xl py-8 px-8 lg:px-12 relative"
            style={{ border: "1px solid rgba(138,3,3,0.22)", background: "rgba(138,3,3,0.04)" }}>
            <div className="font-display text-white italic" style={{ fontSize: "clamp(16px, 2.2vw, 24px)", lineHeight: 1.55 }}>
              &ldquo;CrimsonWings is not building a logistics company. We are building Nigeria&rsquo;s national blood infrastructure.&rdquo;
            </div>
            <div className="font-mono mt-5" style={{ fontSize: 9, color: "rgba(255,255,255,0.28)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              CrimsonWings Plasma Biologics Ltd — Founding Mission
            </div>
            <div className="absolute top-3 left-3 w-5 h-5" style={{ borderTop: "1px solid rgba(138,3,3,0.35)", borderLeft: "1px solid rgba(138,3,3,0.35)" }} />
            <div className="absolute bottom-3 right-3 w-5 h-5" style={{ borderBottom: "1px solid rgba(138,3,3,0.35)", borderRight: "1px solid rgba(138,3,3,0.35)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
