"use client";
import { useReveal } from "./useReveal";
import { Shield, Award, Globe } from "lucide-react";

const STAKEHOLDERS = [
  { icon: "🏛️", label: "Lagos State Ministry of Health", type: "Government" },
  { icon: "🏥", label: "Public & Private Hospitals", type: "Healthcare" },
  { icon: "🔬", label: "Blood Banks & Transfusion Centers", type: "Clinical" },
  { icon: "🌍", label: "WHO & International Health Organizations", type: "Global" },
  { icon: "💼", label: "Institutional Investors & Venture Capital", type: "Finance" },
  { icon: "🏦", label: "Development Finance Institutions (DFIs)", type: "Finance" },
  { icon: "🚨", label: "Emergency Response Agencies", type: "Emergency" },
  { icon: "🔴", label: "Red Cross & NGOs", type: "NGO" },
];

export default function Partnerships() {
  const ref = useReveal();

  return (
    <section id="partnerships" className="relative py-32 overflow-hidden" style={{ background: "var(--white)" }} ref={ref}>
      <div className="absolute inset-0 grid-dots opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="section-label reveal mb-8">Government & Institutional</div>
            <h2
              className="font-display reveal delay-100"
              style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.1, fontWeight: 700, color: "var(--ink)" }}
            >
              Built for{" "}
              <span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Institutional</span>
              {" "}Trust
            </h2>
            <p className="reveal delay-200 mt-6 text-steel leading-relaxed" style={{ fontSize: 16, maxWidth: 480 }}>
              CrimsonWings is designed from the ground up to meet the expectations of government agencies, medical institutions, and international health organizations — with the compliance, transparency, and scale they require.
            </p>

            <div className="reveal delay-300 mt-10 space-y-6">
              {[
                { icon: Shield, title: "Regulatory Compliance", desc: "NAFDAC, WHO, and ISO-aligned protocols across all operations" },
                { icon: Award, title: "Clinical Leadership", desc: "Expert leadership in transfusion medicine and medical logistics" },
                { icon: Globe, title: "PPP Framework Ready", desc: "Structured for public-private partnership alignment at state and federal level" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-5">
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{ background: "rgba(138,3,3,0.07)", border: "1px solid rgba(138,3,3,0.15)" }}
                  >
                    <item.icon size={17} style={{ color: "var(--crimson)" }} />
                  </div>
                  <div>
                    <div className="font-display font-bold" style={{ fontSize: 16, color: "var(--ink)" }}>{item.title}</div>
                    <div className="text-steel mt-1" style={{ fontSize: 13 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stakeholder grid */}
          <div className="reveal-right">
            <div className="font-mono mb-6" style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--steel-light)" }}>
              Key Stakeholders & Partners
            </div>
            <div className="grid grid-cols-2 gap-3">
              {STAKEHOLDERS.map((s, i) => (
                <div
                  key={s.label}
                  className="reveal group"
                  style={{
                    transitionDelay: `${i * 0.07}s`,
                    border: "1px solid var(--smoke)",
                    padding: "16px",
                    transition: "all 0.3s var(--ease-expo)",
                    background: "var(--off-white)",
                  }}
                >
                  <div className="text-xl mb-2">{s.icon}</div>
                  <div style={{ fontSize: 12, color: "var(--ink)", fontWeight: 500, lineHeight: 1.3 }}>{s.label}</div>
                  <div
                    className="font-mono mt-2"
                    style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--crimson)", opacity: 0.7 }}
                  >
                    {s.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investor CTA */}
        <div
          className="reveal mt-24 relative overflow-hidden"
          style={{
            background: "var(--ink)",
            padding: "60px",
            transitionDelay: "0.3s",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--crimson)" }} />
          <div className="absolute inset-0 grid-lines-dark opacity-60" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="font-mono mb-3" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                Investor & Partnership Opportunity
              </div>
              <h3 className="font-display text-white font-bold" style={{ fontSize: "clamp(24px, 3vw, 38px)", lineHeight: 1.2 }}>
                Be Part of Nigeria&rsquo;s{" "}
                <span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Healthcare Revolution</span>
              </h3>
              <p className="text-white/45 mt-3" style={{ fontSize: 15, maxWidth: 520 }}>
                CrimsonWings is open to strategic partnerships, institutional investment, and government collaboration. We have the infrastructure plan, clinical expertise, and technology — we are looking for partners who share our mission.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <a href="#contact" className="btn-crimson">
                <span>Contact Investor Relations</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
