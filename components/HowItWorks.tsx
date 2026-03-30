"use client";
import { useReveal } from "./useReveal";

const STEPS = [
  { num: "01", phase: "Collection", title: "Donor Recruitment & Collection", desc: "Qualified donors are recruited through our platform. Blood is collected at our certified facilities under strict clinical protocols with real-time digital logging.", tags: ["Donor Portal", "Eligibility Screening", "Digital Records"] },
  { num: "02", phase: "Screening", title: "NAT Viral Screening", desc: "Every unit undergoes Nucleic Acid Testing (NAT) — the gold standard for viral detection. Results are verified and logged into the OS platform before any unit enters storage.", tags: ["NAT Testing", "HIV/Hep B/C", "Quality Assurance"] },
  { num: "03", phase: "Storage", title: "Cold Chain Storage", desc: "NAT-cleared blood units are stored in walk-in cold rooms and ultra-low temperature freezers with continuous automated monitoring and alarms for any temperature deviation.", tags: ["Walk-in Cold Rooms", "ULT Freezers", "24/7 Monitoring"] },
  { num: "04", phase: "Dispatch", title: "Intelligent Dispatch", desc: "Hospital requests arrive via the OS platform. AI-driven routing selects the optimal blood unit by type, age, and proximity. Dispatch initiates within minutes of request confirmation.", tags: ["OS Matching", "Priority Routing", "< 5 min Response"] },
  { num: "05", phase: "Delivery", title: "Last-Mile Delivery", desc: "Ground vehicles handle standard delivery. For critical emergencies, temperature-controlled drones execute last-mile delivery — arriving at hospital landing zones in under 60 minutes.", tags: ["Ground + Drone", "Temp Controlled", "< 60 min Urban"] },
  { num: "06", phase: "Confirmation", title: "Digital Confirmation & Analytics", desc: "Receiving hospital staff confirm delivery digitally. Data flows into analytics dashboards for performance monitoring, inventory forecasting, and regulatory reporting.", tags: ["Digital Confirmation", "Chain of Custody", "Analytics"] },
];

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section id="how-it-works" className="relative py-16 lg:py-32 overflow-hidden" style={{ background: "var(--off-white)" }} ref={ref}>
      <div className="absolute inset-0 grid-dots opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 lg:mb-20">
          <div className="section-label reveal mb-8 justify-center">End-to-End Process</div>
          <h2 className="font-display reveal delay-100"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.1, fontWeight: 700, color: "var(--ink)" }}>
            From{" "}<span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Donor</span>{" "}to Delivery
          </h2>
          <p className="reveal delay-200 mt-5 text-steel leading-relaxed mx-auto" style={{ fontSize: 15, maxWidth: 500 }}>
            Every blood unit follows a rigorously controlled, fully digitized journey — from collection through screening, storage, and delivery to the patient bedside.
          </p>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {STEPS.map((step, i) => (
            <div key={step.num} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              {/* Mobile: stacked. Desktop: alternating side */}
              <div className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center`}>

                {/* Content — swap order on desktop for odd items */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center relative"
                      style={{ background: "var(--ink)", border: "1px solid rgba(138,3,3,0.25)" }}>
                      <span className="font-mono text-white font-medium" style={{ fontSize: 11, letterSpacing: "0.1em" }}>{step.num}</span>
                      <div className="absolute -top-px left-0 right-0 h-0.5" style={{ background: "var(--crimson)" }} />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono mb-2" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--crimson)" }}>
                        Phase {step.num} — {step.phase}
                      </div>
                      <h3 className="font-display font-bold mb-3" style={{ fontSize: 21, lineHeight: 1.25, color: "var(--ink)" }}>{step.title}</h3>
                      <p className="text-steel leading-relaxed" style={{ fontSize: 14, maxWidth: 400 }}>{step.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {step.tags.map((tag) => (
                          <span key={tag} className="font-mono"
                            style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", background: "rgba(138,3,3,0.07)", color: "var(--crimson)", padding: "3px 9px", border: "1px solid rgba(138,3,3,0.1)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual block — swap order on desktop for odd items */}
                <div className={`hidden lg:flex ${i % 2 === 1 ? "lg:order-1 justify-start" : "justify-end"}`}>
                  <div className="relative overflow-hidden"
                    style={{ width: 260, height: 148, background: i % 2 === 0 ? "var(--ink)" : "rgba(138,3,3,0.04)", border: `1px solid ${i % 2 === 0 ? "rgba(138,3,3,0.18)" : "var(--smoke)"}` }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display font-bold" style={{ fontSize: 72, color: i % 2 === 0 ? "rgba(138,3,3,0.08)" : "rgba(138,3,3,0.05)", lineHeight: 1, userSelect: "none" }}>{step.num}</span>
                    </div>
                    <div className="absolute bottom-3 left-4 font-mono"
                      style={{ fontSize: 9, color: i % 2 === 0 ? "rgba(255,255,255,0.22)" : "rgba(138,3,3,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{step.phase}</div>
                    <div className="absolute top-0 right-0 w-7 h-7" style={{ borderTop: "1px solid rgba(138,3,3,0.25)", borderRight: "1px solid rgba(138,3,3,0.25)" }} />
                  </div>
                </div>
              </div>

              {/* Divider between steps */}
              {i < STEPS.length - 1 && (
                <div className="mt-10 lg:mt-14 border-b" style={{ borderColor: "rgba(138,3,3,0.08)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
