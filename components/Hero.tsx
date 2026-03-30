"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const STATS = [
  { value: "240K+", label: "Blood Units / Year 1" },
  { value: "20K+", label: "Units / Month Capacity" },
  { value: "<60min", label: "Emergency Delivery" },
  { value: "100%", label: "NAT-Screened Supply" },
];

const TICKER_ITEMS = [
  "NAT Viral Screening Systems",
  "Walk-In Cold Rooms",
  "Ultra-Low Temperature Freezers",
  "Drone-Enabled Last Mile",
  "Proprietary OS Platform",
  "Triphasic Logistics Model",
  "National Blood Infrastructure",
  "Lagos State Partnership Ready",
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      const orb = el.querySelector(".hero-orb") as HTMLElement;
      if (orb) orb.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <div className="absolute inset-0 grid-lines-dark opacity-70" />
      <div className="noise-overlay" />

      {/* Glow orb */}
      <div
        className="hero-orb absolute pointer-events-none transition-transform duration-700"
        style={{
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(138,3,3,0.2) 0%, rgba(138,3,3,0.05) 55%, transparent 70%)",
          top: "50%", left: "60%", transform: "translate(-50%, -50%)",
        }}
      />

      {/* Animated rings */}
      <div className="absolute pointer-events-none" style={{ top: "44%", left: "62%", transform: "translate(-50%,-50%)" }}>
        {[200, 340, 480].map((size, i) => (
          <div key={size} className="absolute rounded-full border"
            style={{
              width: size, height: size, top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              borderColor: `rgba(138,3,3,${0.1 - i * 0.025})`,
              animation: `breathe ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      {/* Scan line */}
      <div className="absolute left-0 right-0 pointer-events-none"
        style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(138,3,3,0.35), transparent)", animation: "scanLine 9s linear infinite", zIndex: 2 }}
      />

      {/* Main content — flex-1 so it fills the space between top and ticker */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 pt-28 pb-8">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            {/* System status — top of content */}
            <div className="flex items-center gap-4 mb-8"
              style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s 0.1s" }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e", animation: "blink 2s ease-in-out infinite" }} />
                <span className="font-mono text-white/40" style={{ fontSize: 10, letterSpacing: "0.18em" }}>SYSTEM ACTIVE · LAGOS STATE</span>
              </div>
            </div>

            <div className="section-label mb-6"
              style={{ color: "rgba(255,255,255,0.35)", opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateX(-20px)", transition: "all 0.7s 0.2s var(--ease-expo)" }}>
              CrimsonWings Plasma Biologics Ltd
            </div>

            <h1 className="font-display text-white"
              style={{
                fontSize: "clamp(38px, 5.5vw, 76px)", lineHeight: 1.06, fontWeight: 700,
                opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(30px)",
                transition: "all 0.9s 0.3s var(--ease-expo)",
              }}>
              Delivering{" "}
              <em style={{ color: "var(--crimson)", fontStyle: "italic" }}>Blood.</em>
              <br />Saving{" "}
              <span style={{ color: "var(--white)" }}>Lives.</span>
              <br />
              <span className="font-mono font-light" style={{ fontSize: "clamp(14px, 1.8vw, 22px)", color: "rgba(255,255,255,0.3)", letterSpacing: "0.08em", fontStyle: "normal" }}>
                On Time. Every Time.
              </span>
            </h1>

            <p className="mt-6 text-white/50 leading-relaxed"
              style={{
                fontSize: 15, maxWidth: 460,
                opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(20px)",
                transition: "all 0.8s 0.5s var(--ease-expo)",
              }}>
              Nigeria&apos;s most advanced digitized blood bank — integrating NAT viral screening, ultra-scale cold storage, and a proprietary OS platform with drone-enabled last-mile delivery across Lagos.
            </p>

            <div className="flex flex-wrap gap-4 mt-8"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(20px)", transition: "all 0.8s 0.65s var(--ease-expo)" }}>
              <a href="#solution" className="btn-crimson"><span>Explore the Platform</span><ArrowRight size={14} /></a>
              <a href="#contact" className="btn-outline"><span>Partner With Us</span></a>
            </div>

            {/* Three pillars */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-10"
              style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s 0.8s" }}>
              {["Clinical Authority", "Operational Scale", "Tech Superiority"].map((p, i) => (
                <div key={p} className="flex items-center gap-2">
                  <span className="font-mono" style={{ fontSize: 9, color: "var(--crimson)", letterSpacing: "0.1em" }}>0{i + 1}</span>
                  <div className="w-px h-5" style={{ background: "rgba(255,255,255,0.1)" }} />
                  <span className="font-mono text-white/35" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stat grid */}
          <div className="grid grid-cols-2 gap-3"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateX(40px)", transition: "all 0.9s 0.4s var(--ease-expo)" }}>
            {STATS.map((s, i) => (
              <div key={s.label} className="relative overflow-hidden"
                style={{
                  background: i === 0 ? "var(--crimson)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${i === 0 ? "var(--crimson)" : "rgba(255,255,255,0.08)"}`,
                  padding: "24px 20px",
                }}>
                <div className="font-display text-white font-bold" style={{ fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div className="font-mono mt-2" style={{ fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: i === 0 ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.38)" }}>
                  {s.label}
                </div>
                <div className="absolute top-0 right-0 w-6 h-6"
                  style={{ borderTop: `1px solid ${i === 0 ? "rgba(255,255,255,0.2)" : "rgba(138,3,3,0.3)"}`, borderRight: `1px solid ${i === 0 ? "rgba(255,255,255,0.2)" : "rgba(138,3,3,0.3)"}` }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker — pinned to bottom */}
      <div className="relative z-10 border-t border-b overflow-hidden flex-shrink-0"
        style={{ borderColor: "rgba(138,3,3,0.2)", background: "rgba(138,3,3,0.05)", padding: "11px 0", opacity: mounted ? 1 : 0, transition: "opacity 0.6s 1s" }}>
        <div className="flex animate-ticker whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center" style={{ padding: "0 28px" }}>
              <span className="font-mono text-white/30" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}>{item}</span>
              <span className="ml-28" style={{ color: "var(--crimson)", opacity: 0.5, fontSize: 10 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
        style={{ opacity: mounted ? 0.4 : 0, transition: "opacity 0.6s 1.2s" }}>
        <span className="font-mono text-white/40" style={{ fontSize: 9, letterSpacing: "0.2em" }}>SCROLL</span>
        <ChevronDown size={13} className="text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
