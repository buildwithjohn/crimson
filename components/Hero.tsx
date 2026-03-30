"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const STATS = [
  { value: "240K+", label: "Blood Units / Year 1", suffix: "" },
  { value: "20K", label: "Units / Month Capacity", suffix: "+" },
  { value: "<60", label: "Min Emergency Delivery", suffix: "min" },
  { value: "100%", label: "NAT-Screened Supply", suffix: "" },
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

  // Parallax on mouse
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX / w - 0.5) * 20;
      const y = (e.clientY / h - 0.5) * 10;
      const orb = el.querySelector(".hero-orb") as HTMLElement;
      if (orb) orb.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-lines-dark opacity-70" />
      
      {/* Noise */}
      <div className="noise-overlay" />

      {/* Large orb / glow */}
      <div
        className="hero-orb absolute transition-transform duration-700"
        style={{
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(138,3,3,0.22) 0%, rgba(138,3,3,0.06) 50%, transparent 70%)",
          top: "50%",
          left: "55%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Animated rings */}
      <div className="absolute" style={{ top: "42%", left: "62%", transform: "translate(-50%,-50%)" }}>
        {[180, 320, 460].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full border"
            style={{
              width: size,
              height: size,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              borderColor: `rgba(138,3,3,${0.12 - i * 0.03})`,
              animation: `breathe ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(138,3,3,0.4), transparent)",
          animation: "scanLine 8s linear infinite",
          zIndex: 2,
        }}
      />

      {/* Top bar — system status */}
      <div
        className="relative z-10 flex items-center justify-between px-6 pt-28 pb-0 max-w-7xl mx-auto w-full"
        style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s", transitionDelay: "0.1s" }}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e", animation: "blink 2s ease-in-out infinite" }}
            />
            <span className="font-mono text-white/40" style={{ fontSize: 10, letterSpacing: "0.18em" }}>
              SYSTEM ACTIVE
            </span>
          </div>
          <div
            className="hidden sm:block w-px h-3"
            style={{ background: "rgba(255,255,255,0.12)" }}
          />
          <span className="hidden sm:block font-mono text-white/30" style={{ fontSize: 10, letterSpacing: "0.15em" }}>
            LAGOS STATE OPERATIONS
          </span>
        </div>
        <div
          className="font-mono text-white/30"
          style={{ fontSize: 10, letterSpacing: "0.12em" }}
        >
          EST. 2024 · NIGERIA
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left */}
          <div>
            <div
              className="section-label mb-8"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.7s var(--ease-expo)",
                transitionDelay: "0.2s",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.4)" }}>Nigeria&apos;s Blood Infrastructure Platform</span>
            </div>

            <h1
              className="font-display text-white"
              style={{
                fontSize: "clamp(42px, 6vw, 80px)",
                lineHeight: 1.05,
                fontWeight: 700,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.9s var(--ease-expo)",
                transitionDelay: "0.3s",
              }}
            >
              Delivering{" "}
              <em
                className="not-italic"
                style={{ color: "var(--crimson)", fontStyle: "italic" }}
              >
                Blood.
              </em>
              <br />
              Saving{" "}
              <span style={{ color: "var(--white)" }}>Lives.</span>
              <br />
              <span
                className="font-mono font-light"
                style={{
                  fontSize: "clamp(16px, 2vw, 26px)",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.08em",
                  fontStyle: "normal",
                }}
              >
                On Time. Every Time.
              </span>
            </h1>

            <p
              className="mt-8 text-white/55 leading-relaxed"
              style={{
                fontSize: 16,
                maxWidth: 480,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s var(--ease-expo)",
                transitionDelay: "0.5s",
              }}
            >
              Nigeria&apos;s most advanced digitized blood bank — integrating NAT viral
              screening, ultra-scale cold storage, and a proprietary OS platform
              with drone-enabled last-mile delivery across Lagos.
            </p>

            <div
              className="flex flex-wrap gap-4 mt-10"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s var(--ease-expo)",
                transitionDelay: "0.65s",
              }}
            >
              <a href="#solution" className="btn-crimson">
                <span>Explore the Platform</span>
                <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline">
                <span>Partner With Us</span>
              </a>
            </div>

            {/* Three pillars */}
            <div
              className="flex gap-6 mt-12"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.8s",
                transitionDelay: "0.8s",
              }}
            >
              {[
                { num: "01", label: "Clinical Authority" },
                { num: "02", label: "Operational Scale" },
                { num: "03", label: "Tech Superiority" },
              ].map((p) => (
                <div key={p.num} className="flex items-center gap-3">
                  <span
                    className="font-mono"
                    style={{ fontSize: 10, color: "var(--crimson)", letterSpacing: "0.1em" }}
                  >
                    {p.num}
                  </span>
                  <div className="w-px h-6" style={{ background: "rgba(255,255,255,0.1)" }} />
                  <span
                    className="font-mono text-white/40"
                    style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}
                  >
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stat grid */}
          <div
            className="grid grid-cols-2 gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(40px)",
              transition: "all 0.9s var(--ease-expo)",
              transitionDelay: "0.4s",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="relative overflow-hidden"
                style={{
                  background: i === 0 ? "var(--crimson)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${i === 0 ? "var(--crimson)" : "rgba(255,255,255,0.08)"}`,
                  padding: "28px 24px",
                  transition: "all 0.3s",
                }}
              >
                <div
                  className="font-display text-white font-bold"
                  style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1 }}
                >
                  {s.value}
                  <span className="font-mono font-light" style={{ fontSize: 14, opacity: 0.6 }}>
                    {s.suffix}
                  </span>
                </div>
                <div
                  className="font-mono mt-2"
                  style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: i === 0 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)" }}
                >
                  {s.label}
                </div>
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-8 h-8"
                  style={{
                    borderTop: `1px solid ${i === 0 ? "rgba(255,255,255,0.2)" : "rgba(138,3,3,0.3)"}`,
                    borderRight: `1px solid ${i === 0 ? "rgba(255,255,255,0.2)" : "rgba(138,3,3,0.3)"}`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div
        className="relative z-10 border-t border-b overflow-hidden"
        style={{
          borderColor: "rgba(138,3,3,0.25)",
          background: "rgba(138,3,3,0.06)",
          padding: "12px 0",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.6s",
          transitionDelay: "1s",
        }}
      >
        <div className="flex animate-ticker whitespace-nowrap" style={{ gap: 0 }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-8" style={{ padding: "0 32px" }}>
              <span
                className="font-mono text-white/35"
                style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase" }}
              >
                {item}
              </span>
              <span style={{ color: "var(--crimson)", opacity: 0.6 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        style={{ opacity: mounted ? 0.5 : 0, transition: "opacity 0.6s", transitionDelay: "1.2s" }}
      >
        <span className="font-mono text-white/40" style={{ fontSize: 9, letterSpacing: "0.2em" }}>SCROLL</span>
        <ChevronDown size={14} className="text-white/40 animate-bounce" />
      </div>
    </section>
  );
}
