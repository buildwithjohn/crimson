"use client";
import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="relative py-16 lg:py-32 overflow-hidden" style={{ background: "var(--off-white)" }} ref={ref}>
      <div className="absolute inset-0 grid-dots opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <div className="section-label reveal mb-8">About CrimsonWings</div>
            <h2 className="font-display reveal delay-100"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", lineHeight: 1.1, fontWeight: 700, color: "var(--ink)" }}>
              Building{" "}
              <span style={{ color: "var(--crimson)", fontStyle: "italic" }}>National</span>{" "}
              Blood Infrastructure
            </h2>
            <p className="reveal delay-200 mt-6 leading-relaxed" style={{ fontSize: 15, color: "var(--steel)", maxWidth: 520 }}>
              CrimsonWings Plasma Biologics Ltd is a digitized blood bank and integrated medical logistics company focused on the collection, advanced screening, storage, and rapid delivery of safe blood and critical medical products across Nigeria.
            </p>
            <p className="reveal delay-300 mt-4 leading-relaxed" style={{ fontSize: 15, color: "var(--steel)", maxWidth: 520 }}>
              Our operations are powered by sophisticated screening infrastructure led by{" "}
              <strong style={{ color: "var(--ink)" }}>Nucleic Acid Testing (NAT) viral screening systems</strong>, walk-in cold rooms, and ultra-low temperature freezers — ensuring the highest standards of blood safety and quality.
            </p>
            <div className="reveal delay-400 mt-10 flex flex-wrap gap-6 lg:gap-8">
              {[
                { label: "Lagos Operations", desc: "Hub-and-spoke model" },
                { label: "PPP Alignment", desc: "Government-ready" },
                { label: "End-to-End", desc: "Donor to delivery" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-mono" style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--crimson)" }}>{item.label}</div>
                  <div className="mt-1 font-mono" style={{ fontSize: 9, color: "var(--steel-light)" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal-right">
            {/* Outer wrapper — NOT overflow-hidden so badge isn't clipped */}
            <div className="relative" style={{ paddingBottom: 20, paddingRight: 20 }}>
              <div className="relative p-8 lg:p-10 overflow-hidden" style={{ background: "var(--ink)", color: "white" }}>
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--crimson)" }} />
                <div className="grid grid-cols-2 gap-5 mb-8">
                  {[
                    { v: "240K–280K", l: "Blood Units Year 1" },
                    { v: "20,000+", l: "Units/Month" },
                    { v: "<60 min", l: "Emergency Delivery" },
                    { v: "100%", l: "NAT Screened" },
                  ].map((s) => (
                    <div key={s.l} className="border-l-2 pl-4" style={{ borderColor: "var(--crimson)" }}>
                      <div className="font-display font-bold text-white" style={{ fontSize: 22 }}>{s.v}</div>
                      <div className="font-mono mt-1" style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <p className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", lineHeight: 1.8, textTransform: "uppercase" }}>
                    In Partnership with Lagos State<br />Ministry of Health
                  </p>
                </div>
                {/* Corner brackets */}
                <div className="absolute bottom-4 right-4 w-8 h-8" style={{ borderBottom: "1px solid rgba(138,3,3,0.35)", borderRight: "1px solid rgba(138,3,3,0.35)" }} />
                <div className="absolute top-4 left-4 w-8 h-8" style={{ borderTop: "1px solid rgba(138,3,3,0.25)", borderLeft: "1px solid rgba(138,3,3,0.25)" }} />
              </div>

              {/* Floating badge — outside overflow-hidden parent */}
              <div className="absolute bottom-0 right-0 py-3 px-5" style={{ background: "var(--crimson)", color: "white" }}>
                <div className="font-mono" style={{ fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.7 }}>Established</div>
                <div className="font-display font-bold" style={{ fontSize: 20 }}>2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
