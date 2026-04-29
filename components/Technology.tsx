"use client";
import { useEffect, useRef } from "react";
import { useReveal } from "./useReveal";
import { Shield, Zap, Network } from "lucide-react";

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.loop = true;
    v.play().catch(() => {
      // Autoplay blocked — try again on first user interaction
      const resume = () => { v.play(); document.removeEventListener("click", resume); };
      document.addEventListener("click", resume);
    });
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="auto"
      style={{ width: "100%", display: "block", maxHeight: "580px", objectFit: "cover" }}
    >
      <source src="/tech-vid-v2.mp4" type="video/mp4"/>
    </video>
  );
}

export default function Technology() {
  const ref = useReveal();

  return (
    <section
      id="technology"
      ref={ref}
      style={{
        background: "#FAFAFA",
        paddingBlock: "var(--section-py)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
      }}/>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>

        {/* ══ OPENING ══ */}
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto clamp(40px,5vw,64px)" }}>
          <div className="section-label reveal" style={{ justifyContent: "center", marginBottom: 16 }}>
            Core Technology
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{ color: "var(--ink)", marginBottom: 14 }}>
            Automated Blood{" "}
            <em style={{ color: "var(--crimson)" }}>Intelligence Infrastructure</em>
          </h2>
          <p className="body-lg reveal delay-2" style={{ color: "var(--steel)" }}>
            CrimsonWings operates a{" "}
            <strong style={{ color: "var(--ink)" }}>
              fully integrated, automation-driven blood processing and logistics system
            </strong>
            , engineered for speed, safety, and scale.
          </p>
        </div>

        {/* ══ VIDEO — presentational loop, no controls ══ */}
        <div className="reveal" style={{ marginBottom: "clamp(48px,6vw,80px)", transitionDelay: ".15s" }}>
          <div style={{
            position: "relative",
            background: "#000",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,.35), 0 4px 24px rgba(204,0,0,.12)",
          }}>
            {/* Crimson top line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3, zIndex: 3,
              background: "linear-gradient(90deg, var(--crimson), #2F80ED, var(--crimson))",
            }}/>

            <VideoPlayer/>

            {/* Vignette overlay */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
              background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.55) 100%)",
            }}/>
          </div>

          {/* Explanation below video */}
          <div style={{
            background: "var(--ink)",
            padding: "clamp(28px,4vw,44px) clamp(24px,4vw,48px)",
            display: "grid",
            gap: "clamp(20px,3vw,32px)",
          }} className="video-caption-grid">

            {/* Left */}
            <div>
              <div className="caption" style={{ color: "var(--crimson)", marginBottom: 10, fontSize: 10 }}>
                System Overview
              </div>
              <h3 className="font-display" style={{
                fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 700,
                color: "#fff", lineHeight: 1.25, marginBottom: 12,
              }}>
                One Continuous System.{" "}
                <em style={{ color: "var(--crimson)" }}>No Breaks. No Delays.</em>
              </h3>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,.6)", lineHeight: 1.75 }}>
                From the moment blood is collected to the second it reaches a patient —
                CrimsonWings operates as a single, uninterrupted automated pipeline.
                Seven stages. Zero manual gaps.
              </p>
            </div>

            {/* Right — step index */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
              {[
                { n: "01", label: "Sample Receiving",    punch: "Zero friction intake"      },
                { n: "02", label: "Automated Sorting",   punch: "BLIM pre-analytics"        },
                { n: "03", label: "Centrifugation",      punch: "p671 sample prep"          },
                { n: "04", label: "Vertical Transport",  punch: "CCM floor-to-floor"        },
                { n: "05", label: "Diagnostic Engine",   punch: "e801 + cobas 8800"         },
                { n: "06", label: "Smart Archiving",     punch: "p701 traceable storage"    },
                { n: "07", label: "Dispatch & Delivery", punch: "≤60 min to patient"        },
              ].map(s => (
                <div key={s.n} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "8px 14px",
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.07)",
                  transition: "background .2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(204,0,0,.12)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.04)"}
                >
                  <span className="font-mono" style={{ fontSize: 9, fontWeight: 700, color: "var(--crimson)", flexShrink: 0, width: 20 }}>{s.n}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", flex: 1 }}>{s.label}</span>
                  <span className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,.35)", textAlign: "right" }}>{s.punch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ CLOSING ══ */}
        <div className="reveal" style={{
          textAlign: "center",
          padding: "clamp(40px,5vw,64px)",
          background: "linear-gradient(135deg, #060D1A 0%, #0B1F33 100%)",
          borderRadius: 16,
          position: "relative", overflow: "hidden",
          transitionDelay: ".3s",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,var(--crimson),#2F80ED,var(--crimson))" }}/>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 200, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(204,0,0,.12),transparent 70%)", pointerEvents: "none" }}/>
          <div style={{ position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
              {[Shield, Zap, Network].map((Icon, i) => (
                <div key={i} style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(204,0,0,.2)", border: "1px solid rgba(204,0,0,.4)" }}>
                  <Icon size={22} style={{ color: "var(--crimson)" }}/>
                </div>
              ))}
            </div>
            <h3 className="h3 font-display" style={{ color: "#fff", marginBottom: 14 }}>
              A Vertically Integrated{" "}
              <em style={{ color: "var(--crimson)" }}>Transfusion Technology Platform</em>
            </h3>
            <p style={{ fontSize: "clamp(16px,1.6vw,19px)", color: "rgba(255,255,255,.65)", maxWidth: 620, margin: "0 auto", fontStyle: "italic", lineHeight: 1.75 }}>
              Combining automation, diagnostics, and logistics into one continuous blood delivery engine.
            </p>
          </div>
        </div>

      </div>

      <style>{`
        @media(min-width:900px){ .video-caption-grid{ grid-template-columns:1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
