"use client";
import { useReveal } from "./useReveal";
import { Check } from "lucide-react";

const PILLARS = [
  {
    num: "01", title: "Clinical Authority", sub: "Digitized Blood Bank + Advanced Screening",
    color: "#8A0303",
    points: ["Nucleic Acid Testing (NAT) — gold standard viral screening", "Walk-in cold rooms with precision temperature control", "Ultra-low temperature freezers for long-term preservation", "Full NAFDAC & international regulatory compliance", "Specialist clinical leadership in transfusion medicine"],
  },
  {
    num: "02", title: "Operational Scale", sub: "High-Capacity Storage & National Supply",
    color: "#2F80ED",
    points: ["Minimum 20,000 blood units per month processing", "240,000–280,000 units projected in Year 1", "Hub-and-spoke infrastructure — scalable nationally", "End-to-end inventory management via proprietary OS", "Public-Private Partnership alignment with Lagos State"],
  },
  {
    num: "03", title: "Technological Superiority", sub: "Proprietary OS Platform + Drone Logistics",
    color: "#C9A84C",
    points: ["Proprietary OS: donor → inventory → delivery", "Real-time hospital blood request management", "Triphasic logistics: ground + coordination + drone", "Drone-enabled last-mile emergency delivery", "Under 60-minute urban emergency response target"],
  },
];

export default function Solution() {
  const ref = useReveal();

  return (
    <section id="solution" className="relative py-16 lg:py-32 overflow-hidden" style={{ background: "var(--white)" }} ref={ref}>
      <div className="absolute inset-0 grid-dots opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 lg:mb-20">
          <div className="section-label reveal mb-8 justify-center">The CrimsonWings Solution</div>
          <h2 className="font-display reveal delay-100"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.1, fontWeight: 700, color: "var(--ink)" }}>
            A Fully Integrated Model.{" "}<span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Built for Scale.</span>
          </h2>
          <p className="reveal delay-200 mt-5 text-steel leading-relaxed mx-auto" style={{ fontSize: 15, maxWidth: 540 }}>
            Three core pillars working in concert to deliver what no other platform in Nigeria has achieved — a complete, technology-enabled blood supply chain.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((p, i) => (
            <div key={p.num} className="reveal group" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="h-full relative overflow-hidden"
                style={{ border: "1px solid var(--smoke)", background: "var(--off-white)", padding: "36px 32px", transition: "all 0.4s var(--ease-expo)" }}>
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: p.color }} />
                <div className="font-display font-bold mb-5" style={{ fontSize: 48, color: p.color, opacity: 0.1, lineHeight: 1 }}>{p.num}</div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: 24, lineHeight: 1.2, color: "var(--ink)" }}>{p.title}</h3>
                <p className="font-mono mb-7" style={{ fontSize: 9, color: p.color, letterSpacing: "0.12em", textTransform: "uppercase" }}>{p.sub}</p>
                <ul className="space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5" style={{ background: p.color }}>
                        <Check size={10} color="white" strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: 13, color: "var(--steel)", lineHeight: 1.5 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: p.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
