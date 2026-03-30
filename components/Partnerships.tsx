"use client";
import { useReveal } from "./useReveal";
import { Shield, Award, Globe } from "lucide-react";

const STAKEHOLDERS = [
  { icon: "🏛️", label: "Lagos State Ministry of Health", type: "Government" },
  { icon: "🏥", label: "Public & Private Hospitals", type: "Healthcare" },
  { icon: "🔬", label: "Blood Banks & Transfusion Centers", type: "Clinical" },
  { icon: "🌍", label: "WHO & International Health Orgs", type: "Global" },
  { icon: "💼", label: "Institutional Investors & VC Firms", type: "Finance" },
  { icon: "🏦", label: "Development Finance Institutions", type: "Finance" },
  { icon: "🚨", label: "Emergency Response Agencies", type: "Emergency" },
  { icon: "🔴", label: "Red Cross & Health NGOs", type: "NGO" },
];

export default function Partnerships() {
  const ref = useReveal();

  return (
    <section id="partnerships" className="relative py-16 lg:py-32 overflow-hidden" style={{ background: "var(--white)" }} ref={ref}>
      <div className="absolute inset-0 grid-dots opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <div className="section-label reveal mb-8">Government & Institutional</div>
            <h2 className="font-display reveal delay-100"
              style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.1, fontWeight: 700, color: "var(--ink)" }}>
              Built for{" "}<span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Institutional</span>{" "}Trust
            </h2>
            <p className="reveal delay-200 mt-6 text-steel leading-relaxed" style={{ fontSize: 15, maxWidth: 460 }}>
              CrimsonWings is designed from the ground up to meet the expectations of government agencies, medical institutions, and international health organizations — with the compliance, transparency, and scale they require.
            </p>
            <div className="reveal delay-300 mt-10 space-y-5">
              {[
                { icon: Shield, title: "Regulatory Compliance", desc: "NAFDAC, WHO, and ISO-aligned protocols across all operations" },
                { icon: Award, title: "Clinical Leadership", desc: "Expert leadership in transfusion medicine and medical logistics" },
                { icon: Globe, title: "PPP Framework Ready", desc: "Structured for public-private partnership at state and federal level" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{ background: "rgba(138,3,3,0.07)", border: "1px solid rgba(138,3,3,0.13)" }}>
                    <item.icon size={16} style={{ color: "var(--crimson)" }} />
                  </div>
                  <div>
                    <div className="font-display font-bold" style={{ fontSize: 15, color: "var(--ink)" }}>{item.title}</div>
                    <div className="text-steel mt-1" style={{ fontSize: 13 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stakeholders */}
          <div className="reveal-right">
            <div className="font-mono mb-5" style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--steel-light)" }}>
              Key Stakeholders & Partners
            </div>
            {/* 2 cols on mobile sm+, always 2 col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STAKEHOLDERS.map((s, i) => (
                <div key={s.label} className="reveal group"
                  style={{ transitionDelay: `${i * 0.07}s`, border: "1px solid var(--smoke)", padding: "14px 16px", background: "var(--off-white)", transition: "all 0.3s var(--ease-expo)" }}>
                  <div className="text-lg mb-2">{s.icon}</div>
                  <div style={{ fontSize: 12, color: "var(--ink)", fontWeight: 500, lineHeight: 1.35 }}>{s.label}</div>
                  <div className="font-mono mt-1" style={{ fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--crimson)", opacity: 0.7 }}>{s.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investor CTA */}
        <div className="reveal mt-16 lg:mt-24 relative overflow-hidden" style={{ background: "var(--ink)", padding: "48px 40px", transitionDelay: "0.3s" }}>
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--crimson)" }} />
          <div className="absolute inset-0 grid-lines-dark opacity-60" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="font-mono mb-3" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                Investor & Partnership Opportunity
              </div>
              <h3 className="font-display text-white font-bold" style={{ fontSize: "clamp(20px, 2.8vw, 34px)", lineHeight: 1.2 }}>
                Be Part of Nigeria&rsquo;s{" "}<span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Healthcare Revolution</span>
              </h3>
              <p className="text-white/42 mt-3" style={{ fontSize: 14, maxWidth: 500 }}>
                CrimsonWings is open to strategic partnerships, institutional investment, and government collaboration. We have the infrastructure plan, clinical expertise, and technology.
              </p>
            </div>
            <a href="#contact" className="btn-crimson flex-shrink-0">
              <span>Contact Investor Relations</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
