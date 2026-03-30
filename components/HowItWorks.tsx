"use client";
import { useReveal } from "./useReveal";
import Image from "next/image";

const STEPS = [
  {
    num: "01", phase: "Collection",
    title: "Donor Recruitment & Collection",
    desc: "Qualified donors are recruited through our platform. Blood is collected at our certified facilities under strict clinical protocols with real-time digital logging.",
    tags: ["Donor Portal", "Eligibility Screening", "Digital Records"],
    image: "/phase-01.png",
    imageAlt: "Nigerian nurse assisting blood donor at CrimsonWings collection center",
  },
  {
    num: "02", phase: "Screening",
    title: "NAT Viral Screening",
    desc: "Every unit undergoes Nucleic Acid Testing (NAT) — the gold standard for viral detection. Results are verified and logged into the OS platform before any unit enters storage.",
    tags: ["NAT Testing", "HIV/Hep B/C", "Quality Assurance"],
    image: "/phase-02.png",
    imageAlt: "Nigerian scientist operating NAT screening equipment in laboratory",
  },
  {
    num: "03", phase: "Storage",
    title: "Cold Chain Storage",
    desc: "NAT-cleared blood units are stored in walk-in cold rooms and ultra-low temperature freezers with continuous automated monitoring and alarms for any temperature deviation.",
    tags: ["Walk-in Cold Rooms", "ULT Freezers", "24/7 Monitoring"],
    image: null,
    imageAlt: "",
  },
  {
    num: "04", phase: "Dispatch",
    title: "Intelligent Dispatch",
    desc: "Hospital requests arrive via the OS platform. AI-driven routing selects the optimal blood unit by type, age, and proximity. Dispatch initiates within minutes of request confirmation.",
    tags: ["OS Matching", "Priority Routing", "< 5 min Response"],
    image: null,
    imageAlt: "",
  },
  {
    num: "05", phase: "Delivery",
    title: "Last-Mile Delivery",
    desc: "Ground vehicles handle standard delivery. For critical emergencies, temperature-controlled drones execute last-mile delivery — arriving at hospital landing zones in under 60 minutes.",
    tags: ["Ground + Drone", "Temp Controlled", "< 60 min Urban"],
    image: null,
    imageAlt: "",
  },
  {
    num: "06", phase: "Confirm",
    title: "Digital Confirmation & Analytics",
    desc: "Receiving hospital staff confirm delivery digitally on the OS platform. Data flows into analytics dashboards for performance monitoring, inventory forecasting, and regulatory reporting.",
    tags: ["Digital Confirmation", "Chain of Custody", "Analytics"],
    image: null,
    imageAlt: "",
  },
];

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section id="how-it-works" ref={ref} className="section bg-offwhite">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto clamp(48px,6vw,80px)" }}>
          <div className="section-label reveal" style={{ justifyContent: "center", marginBottom: 20 }}>
            End-to-End Process
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{ color: "var(--ink)", marginBottom: 16 }}>
            From <em style={{ color: "var(--crimson)" }}>Donor</em> to Delivery
          </h2>
          <p className="body-lg reveal delay-2">
            Every blood unit follows a rigorously controlled, fully digitized journey — from collection through screening, storage, and delivery to the patient bedside.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {STEPS.map((step, i) => {
            const isEven = i % 2 === 1;
            const hasImage = !!step.image;

            return (
              <div key={step.num}>
                <div
                  className="reveal step-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "clamp(24px,4vw,56px)",
                    alignItems: "center",
                    padding: "clamp(40px,5vw,64px) 0",
                    transitionDelay: `${i * 0.08}s`,
                  }}
                >
                  {/* ── Content side ── */}
                  <div
                    className="step-content"
                    style={{ order: isEven ? 2 : 1 }}
                  >
                    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                      {/* Phase badge */}
                      <div style={{
                        flexShrink: 0,
                        width: 52, height: 52,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "var(--ink)",
                        border: "1px solid rgba(138,3,3,.22)",
                        position: "relative",
                      }}>
                        <span className="font-mono" style={{ fontSize: 12, fontWeight: 500, color: "#fff", letterSpacing: ".08em" }}>
                          {step.num}
                        </span>
                        <div style={{ position: "absolute", top: -1, left: 0, right: 0, height: 2, background: "var(--crimson)" }} />
                      </div>

                      <div style={{ flex: 1 }}>
                        <div className="caption" style={{ color: "var(--crimson)", marginBottom: 8 }}>
                          Phase {step.num} — {step.phase}
                        </div>
                        <h3 className="h3 font-display" style={{ color: "var(--ink)", marginBottom: 12 }}>
                          {step.title}
                        </h3>
                        <p className="body-md" style={{ maxWidth: 420, marginBottom: 18 }}>
                          {step.desc}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {step.tags.map(t => (
                            <span key={t} className="tag">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Visual side ── */}
                  <div
                    className="step-visual"
                    style={{
                      order: isEven ? 1 : 2,
                      display: "none", /* shown via media query */
                    }}
                  >
                    {hasImage ? (
                      /* Real photograph */
                      <div style={{
                        position: "relative",
                        width: "100%",
                        paddingBottom: "60%", /* 5:3 ratio */
                        overflow: "hidden",
                        background: "#000",
                      }}>
                        <Image
                          src={step.image!}
                          alt={step.imageAlt}
                          fill
                          style={{
                            objectFit: "cover",
                            objectPosition: "center top",
                            transition: "transform .6s var(--ease-expo)",
                          }}
                          className="step-img"
                          sizes="(max-width:900px) 0px, 50vw"
                        />
                        {/* Crimson overlay tint on edges */}
                        <div style={{
                          position: "absolute", inset: 0,
                          background: "linear-gradient(135deg, rgba(138,3,3,.08) 0%, transparent 60%)",
                          pointerEvents: "none",
                        }} />
                        {/* Phase label overlay */}
                        <div style={{
                          position: "absolute", bottom: 0, left: 0, right: 0,
                          padding: "20px 20px 16px",
                          background: "linear-gradient(to top, rgba(0,0,0,.65) 0%, transparent 100%)",
                        }}>
                          <span className="caption" style={{ color: "rgba(255,255,255,.7)", fontSize: 9 }}>
                            Phase {step.num} — {step.phase}
                          </span>
                        </div>
                        {/* Corner bracket */}
                        <div style={{ position: "absolute", top: 0, right: 0, width: 28, height: 28, borderTop: "2px solid var(--crimson)", borderRight: "2px solid var(--crimson)" }} />
                        <div style={{ position: "absolute", bottom: 0, left: 0, width: 28, height: 28, borderBottom: "2px solid var(--crimson)", borderLeft: "2px solid var(--crimson)" }} />
                      </div>
                    ) : (
                      /* Placeholder for phases without images yet */
                      <div style={{
                        width: "100%",
                        paddingBottom: "60%",
                        position: "relative",
                        background: i % 2 === 0 ? "var(--ink)" : "rgba(138,3,3,.04)",
                        border: `1px solid ${i % 2 === 0 ? "rgba(138,3,3,.18)" : "var(--smoke)"}`,
                        overflow: "hidden",
                      }}>
                        {/* Big phase number as background element */}
                        <span className="font-display" style={{
                          position: "absolute", inset: 0,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 96, fontWeight: 700,
                          color: i % 2 === 0 ? "rgba(138,3,3,.1)" : "rgba(138,3,3,.07)",
                          userSelect: "none", lineHeight: 1,
                        }}>
                          {step.num}
                        </span>
                        <div className="caption" style={{
                          position: "absolute", bottom: 16, left: 20,
                          color: i % 2 === 0 ? "rgba(255,255,255,.25)" : "rgba(138,3,3,.4)",
                          fontSize: 9,
                        }}>
                          {step.phase} · Image coming soon
                        </div>
                        {/* Corner bracket */}
                        <div style={{ position: "absolute", top: 0, right: 0, width: 24, height: 24, borderTop: "1px solid rgba(138,3,3,.28)", borderRight: "1px solid rgba(138,3,3,.28)" }} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Step divider */}
                {i < STEPS.length - 1 && (
                  <div style={{ width: "100%", height: 1, background: "rgba(138,3,3,.1)" }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Progress indicator — how many images are done */}
        <div className="reveal" style={{ marginTop: "clamp(40px,5vw,64px)", textAlign: "center", transitionDelay: ".4s" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                title={`Phase ${s.num}: ${s.phase}${s.image ? " ✓" : " — image pending"}`}
                style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: s.image ? "var(--crimson)" : "var(--smoke-mid)",
                  border: s.image ? "none" : "1px solid var(--smoke)",
                  transition: "background .3s",
                }}
              />
            ))}
          </div>
          <div className="caption" style={{ color: "var(--steel-light)", marginTop: 10, fontSize: 9 }}>
            2 of 6 phases illustrated · Send remaining images to complete
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .step-row     { grid-template-columns: 1fr 1fr !important; }
          .step-visual  { display: block !important; }
        }
        .step-img:hover { transform: scale(1.03); }
      `}</style>
    </section>
  );
}
