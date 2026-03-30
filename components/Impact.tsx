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
        const duration = 2000;
        const steps = 60;
        const step = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, started]);

  const formatted = count >= 10000 ? count.toLocaleString() : count.toString();

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

export default function Impact() {
  const ref = useReveal();

  return (
    <section id="impact" className="relative py-32 overflow-hidden" style={{ background: "var(--ink)" }} ref={ref}>
      <div className="absolute inset-0 grid-lines-dark" />
      <div className="noise-overlay" />

      {/* Background text */}
      <div
        className="absolute select-none pointer-events-none font-display font-bold"
        style={{ fontSize: "clamp(100px, 16vw, 220px)", color: "rgba(138,3,3,0.04)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", whiteSpace: "nowrap", letterSpacing: "-0.04em" }}
      >
        IMPACT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-label reveal mb-8 justify-center">
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Platform Scale</span>
          </div>
          <h2
            className="font-display reveal delay-100 text-white"
            style={{ fontSize: "clamp(30px, 4vw, 54px)", lineHeight: 1.1, fontWeight: 700 }}
          >
            Numbers That{" "}
            <span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Matter</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="reveal group"
              style={{ transitionDelay: `${i * 0.1}s`, background: "var(--ink)" }}
            >
              <div
                className="relative p-10 h-full transition-all duration-400"
                style={{ background: "rgba(255,255,255,0.01)" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                  style={{ background: "var(--crimson)", transformOrigin: "left" }}
                />

                <div
                  className="font-display font-bold text-white"
                  style={{ fontSize: "clamp(40px, 4.5vw, 58px)", lineHeight: 1 }}
                >
                  <AnimatedCounter target={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <div
                  className="font-display font-semibold mt-2"
                  style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.3 }}
                >
                  {s.label}
                </div>
                <div
                  className="font-mono mt-2"
                  style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em" }}
                >
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote / callout */}
        <div className="reveal mt-20 text-center" style={{ transitionDelay: "0.5s" }}>
          <div
            className="inline-block max-w-2xl py-10 px-12 relative"
            style={{ border: "1px solid rgba(138,3,3,0.25)", background: "rgba(138,3,3,0.04)" }}
          >
            <div className="font-display text-white italic" style={{ fontSize: "clamp(18px, 2.5vw, 26px)", lineHeight: 1.5 }}>
              &ldquo;CrimsonWings is not building a logistics company. We are building Nigeria&rsquo;s national blood infrastructure.&rdquo;
            </div>
            <div className="font-mono mt-6" style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              CrimsonWings — Founding Mission
            </div>
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-6 h-6" style={{ borderTop: "1px solid rgba(138,3,3,0.4)", borderLeft: "1px solid rgba(138,3,3,0.4)" }} />
            <div className="absolute bottom-3 right-3 w-6 h-6" style={{ borderBottom: "1px solid rgba(138,3,3,0.4)", borderRight: "1px solid rgba(138,3,3,0.4)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
