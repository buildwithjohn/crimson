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
    imageFocus: "center top",
  },
  {
    num: "02", phase: "Screening",
    title: "NAT Viral Screening",
    desc: "Every unit undergoes Nucleic Acid Testing (NAT) — the gold standard for viral detection. Results are verified and logged into the OS platform before any unit enters storage.",
    tags: ["NAT Testing", "HIV / Hep B / C", "Quality Assurance"],
    image: "/phase-02.png",
    imageAlt: "Nigerian scientist operating NAT screening equipment in laboratory",
    imageFocus: "center center",
  },
  {
    num: "03", phase: "Storage",
    title: "Cold Chain Storage",
    desc: "NAT-cleared blood units are stored in walk-in cold rooms and ultra-low temperature freezers with continuous automated monitoring and alarms for any temperature deviation.",
    tags: ["Walk-in Cold Rooms", "ULT Freezers", "24/7 Monitoring"],
    image: "/phase-03.png",
    imageAlt: "Large-scale cold room filled with rows of stored blood bags at -40°C",
    imageFocus: "center center",
  },
  {
    num: "04", phase: "Dispatch",
    title: "Intelligent Dispatch",
    desc: "Hospital requests arrive via the OS platform. AI-driven routing selects the optimal blood unit by type, age, and proximity. Dispatch initiates within minutes of request confirmation.",
    tags: ["OS Matching", "Priority Routing", "< 5 min Response"],
    image: "/phase-04.png",
    imageAlt: "Operations coordinator monitoring Lagos blood delivery routes on multiple screens",
    imageFocus: "center center",
  },
  {
    num: "05", phase: "Delivery",
    title: "Last-Mile Delivery",
    desc: "Ground vehicles handle standard delivery. For critical emergencies, temperature-controlled drones execute last-mile delivery — arriving at hospital landing zones in under 60 minutes.",
    tags: ["Ground + Drone", "Temp Controlled", "< 60 min Urban"],
    image: "/phase-05.png",
    imageAlt: "Medical drone carrying blood delivery pod flying over Lagos skyline at sunset",
    imageFocus: "center 30%",
  },
  {
    num: "06", phase: "Confirmation",
    title: "Digital Confirmation & Analytics",
    desc: "Receiving hospital staff confirm delivery digitally on the OS platform. Data flows into analytics dashboards for performance monitoring, inventory forecasting, and regulatory reporting.",
    tags: ["Digital Confirmation", "Chain of Custody", "Analytics"],
    image: "/phase-06.png",
    imageAlt: "Hospital nurse scanning QR code on blood delivery package with tablet confirmation",
    imageFocus: "center top",
  },
];

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section id="how-it-works" ref={ref} className="section bg-offwhite">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>

        {/* ── Header ─────────────────────────────────────────── */}
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

        {/* ── Steps ──────────────────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {STEPS.map((step, i) => {
            const isEven = i % 2 === 1;

            return (
              <div key={step.num}>
                <div
                  className="reveal step-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "clamp(28px,4vw,60px)",
                    alignItems: "center",
                    padding: "clamp(44px,5.5vw,72px) 0",
                    transitionDelay: `${i * 0.07}s`,
                  }}
                >
                  {/* Content */}
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                      {/* Phase badge */}
                      <div style={{
                        flexShrink: 0,
                        width: 52, height: 52,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "var(--ink)",
                        border: "1px solid rgba(138,3,3,.25)",
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
                        <h3 className="h3 font-display" style={{ color: "var(--ink)", marginBottom: 14 }}>
                          {step.title}
                        </h3>
                        <p className="body-md" style={{ maxWidth: 440, marginBottom: 20, lineHeight: 1.8 }}>
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

                  {/* Image */}
                  <div
                    className="step-visual"
                    style={{
                      order: isEven ? 1 : 2,
                      display: "none", /* shown by media query */
                    }}
                  >
                    <div style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "62%",
                      overflow: "hidden",
                      background: "#0a0a0a",
                    }}>
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: step.imageFocus,
                          transition: "transform .7s var(--ease-expo)",
                        }}
                        className="phase-img"
                        sizes="(max-width:899px) 0px, 48vw"
                        priority={i < 2}
                      />

                      {/* Brand tint overlay */}
                      <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none",
                        background: isEven
                          ? "linear-gradient(to right, rgba(138,3,3,.12) 0%, transparent 55%)"
                          : "linear-gradient(to left,  rgba(138,3,3,.12) 0%, transparent 55%)",
                      }} />

                      {/* Bottom fade + phase label */}
                      <div style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        padding: "28px 20px 16px",
                        background: "linear-gradient(to top, rgba(0,0,0,.72) 0%, transparent 100%)",
                        pointerEvents: "none",
                      }}>
                        <div className="caption" style={{ color: "rgba(255,255,255,.65)", fontSize: 9 }}>
                          Phase {step.num} — {step.phase}
                        </div>
                      </div>

                      {/* Crimson corner brackets */}
                      <div style={{ position: "absolute", top: 0, right: 0, width: 28, height: 28, borderTop: "2px solid var(--crimson)", borderRight: "2px solid var(--crimson)", pointerEvents: "none" }} />
                      <div style={{ position: "absolute", bottom: 0, left: 0, width: 28, height: 28, borderBottom: "2px solid var(--crimson)", borderLeft: "2px solid var(--crimson)", pointerEvents: "none" }} />
                    </div>
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

        {/* ── All 6 complete indicator ────────────────────────── */}
        <div className="reveal" style={{ marginTop: "clamp(40px,5vw,64px)", textAlign: "center", transitionDelay: ".4s" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            {STEPS.map(s => (
              <div
                key={s.num}
                title={`Phase ${s.num}: ${s.phase}`}
                style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "var(--crimson)",
                }}
              />
            ))}
          </div>
          <div className="caption" style={{ color: "var(--steel-light)", marginTop: 10, fontSize: 9 }}>
            All 6 phases documented · Donor → Screening → Storage → Dispatch → Delivery → Confirmation
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .step-row    { grid-template-columns: 1fr 1fr !important; }
          .step-visual { display: block !important; }
        }
        .phase-img:hover { transform: scale(1.04) !important; }
      `}</style>
    </section>
  );
}
