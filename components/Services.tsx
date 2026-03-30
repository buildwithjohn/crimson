"use client";
import { useReveal } from "./useReveal";

const SERVICES = [
  {
    num: "01",
    title: "Blood Collection & Donor Management",
    desc: "Structured donor recruitment, eligibility screening, and collection — digitally logged into our OS platform from the first interaction.",
    tags: ["Donor Portal", "Eligibility Screening", "Digital Records"],
  },
  {
    num: "02",
    title: "Advanced Viral Screening (NAT)",
    desc: "Every unit is subjected to Nucleic Acid Testing — detecting HIV, Hepatitis B, Hepatitis C, and HTLV with gold-standard precision before entry into storage.",
    tags: ["NAT Testing", "Multi-pathogen", "Zero Tolerance"],
  },
  {
    num: "03",
    title: "Cold Chain Storage at Scale",
    desc: "Walk-in cold rooms and ultra-low temperature freezers maintain strict temperature control for up to 20,000+ units per month, with automated monitoring 24/7.",
    tags: ["Walk-in Cold Rooms", "ULT Freezers", "Automated Monitoring"],
  },
  {
    num: "04",
    title: "Hospital Network Integration",
    desc: "Hospitals connect directly to our OS platform to submit real-time blood requests, track inventory availability, and receive digital delivery confirmations.",
    tags: ["Real-time Requests", "Inventory View", "Digital Chain"],
  },
  {
    num: "05",
    title: "Emergency Drone Delivery",
    desc: "Temperature-controlled drones execute last-mile delivery for critical emergencies — reaching any hospital in Lagos in under 60 minutes from dispatch.",
    tags: ["Drone Dispatch", "Temp Controlled", "< 60 min"],
  },
  {
    num: "06",
    title: "Analytics & Regulatory Reporting",
    desc: "Comprehensive dashboards give operations, management, and government partners full visibility into delivery performance, inventory, and compliance metrics.",
    tags: ["Live Dashboards", "Compliance Reports", "Forecasting"],
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="relative py-32 overflow-hidden" style={{ background: "var(--white)" }} ref={ref}>
      <div className="absolute inset-0 grid-lines opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-label reveal mb-8 justify-center">What We Offer</div>
          <h2
            className="font-display reveal delay-100"
            style={{ fontSize: "clamp(30px, 4vw, 54px)", lineHeight: 1.1, fontWeight: 700, color: "var(--ink)" }}
          >
            Comprehensive{" "}
            <span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Blood Supply</span>{" "}Services
          </h2>
          <p className="reveal delay-200 mt-5 text-steel leading-relaxed mx-auto" style={{ fontSize: 16, maxWidth: 560 }}>
            Six integrated service lines — each essential, all connected through our proprietary OS platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className="reveal group relative overflow-hidden"
              style={{
                transitionDelay: `${i * 0.08}s`,
                border: "1px solid var(--smoke)",
                background: "var(--off-white)",
                padding: "36px 32px",
                transition: "all 0.4s var(--ease-expo)",
              }}
            >
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: "rgba(138,3,3,0.025)" }}
              />
              {/* Bottom border reveal */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "var(--crimson)" }}
              />

              <div
                className="font-display font-bold mb-6 opacity-8"
                style={{ fontSize: 42, color: "rgba(138,3,3,0.08)", lineHeight: 1 }}
              >
                {s.num}
              </div>
              <h3 className="font-display font-bold mb-3" style={{ fontSize: 20, lineHeight: 1.3, color: "var(--ink)" }}>
                {s.title}
              </h3>
              <p className="text-steel leading-relaxed mb-5" style={{ fontSize: 14 }}>
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: "rgba(138,3,3,0.06)",
                      color: "var(--crimson)",
                      padding: "3px 9px",
                      border: "1px solid rgba(138,3,3,0.1)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
