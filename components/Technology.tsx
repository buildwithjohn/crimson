"use client";
import { useReveal } from "./useReveal";



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
      {/* Faint grid background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
      }}/>

      {/* Floating data numbers — faint background overlay */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", zIndex:1 }}>
        {DATA_FLOATS.map((val, i) => (
          <div key={val} style={{
            position:"absolute",
            top: `${15 + i * 17}%`,
            left: `${3 + (i % 2) * 55}%`,
            fontFamily:"var(--font-mono)",
            fontSize: "clamp(11px,1.2vw,14px)",
            color:"rgba(204,0,0,.07)",
            letterSpacing:".12em",
            animation:`tech-data-fade 4s ease-in-out ${i*1.2}s infinite`,
            userSelect:"none",
          }}>{val}</div>
        ))}
      </div>

      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* ══ OPENING STATEMENT ══════════════════════════════════════════ */}
        <div style={{
          textAlign:"center",
          maxWidth:720,
          margin:"0 auto clamp(56px,7vw,96px)",
        }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:16 }}>
            Core Technology
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{
            color:"var(--ink)", marginBottom:14,
          }}>
            Automated Blood{" "}
            <em style={{ color:"var(--crimson)" }}>Intelligence Infrastructure</em>
          </h2>
          <p className="body-lg reveal delay-2" style={{ color:"var(--steel)" }}>
            CrimsonWings operates a{" "}
            <strong style={{ color:"var(--ink)" }}>fully integrated, automation-driven blood processing and logistics system</strong>
            , engineered for speed, safety, and scale.
          </p>
        </div>

        {/* ══ TECHNOLOGY OVERVIEW VIDEO — PRESENTATIONAL LOOP ══════════════ */}
        <div className="reveal" style={{
          marginBottom:"clamp(48px,6vw,80px)",
          transitionDelay:".2s",
        }}>
          {/* Video — no controls, autoplay loop, fullwidth cinematic */}
          <div style={{
            position:"relative",
            background:"#000",
            overflow:"hidden",
            boxShadow:"0 24px 80px rgba(0,0,0,.35), 0 4px 24px rgba(204,0,0,.12)",
          }}>
            {/* Thin crimson top line */}
            <div style={{
              position:"absolute", top:0, left:0, right:0, height:3, zIndex:3,
              background:"linear-gradient(90deg, var(--crimson), #2F80ED, var(--crimson))",
            }}/>

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                width:"100%",
                display:"block",
                maxHeight:"580px",
                objectFit:"cover",
              }}
            >
              <source src="/tech-overview.mp4" type="video/mp4"/>
            </video>

            {/* Subtle vignette overlay — deepens edges like a cinema screen */}
            <div style={{
              position:"absolute", inset:0, zIndex:2, pointerEvents:"none",
              background:"radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.55) 100%)",
            }}/>
          </div>

          {/* Explanation below — clean, minimal */}
          <div style={{
            background:"var(--ink)",
            padding:"clamp(28px,4vw,44px) clamp(24px,4vw,48px)",
            display:"grid",
            gap:"clamp(20px,3vw,32px)",
          }} className="video-caption-grid">

            {/* Left — headline */}
            <div>
              <div className="caption" style={{ color:"var(--crimson)", marginBottom:10, fontSize:10 }}>
                System Overview
              </div>
              <h3 className="font-display" style={{
                fontSize:"clamp(20px,2.5vw,30px)", fontWeight:700,
                color:"#fff", lineHeight:1.25, marginBottom:12,
              }}>
                One Continuous System.{" "}
                <em style={{ color:"var(--crimson)" }}>No Breaks. No Delays.</em>
              </h3>
              <p style={{ fontSize:16, color:"rgba(255,255,255,.6)", lineHeight:1.75 }}>
                From the moment blood is collected to the second it reaches a patient —
                CrimsonWings operates as a single, uninterrupted automated pipeline.
                Seven stages. Zero manual gaps.
              </p>
            </div>

            {/* Right — 7 step pills */}
            <div style={{ display:"flex", flexDirection:"column", gap:8, justifyContent:"center" }}>
              {[
                {n:"01", label:"Sample Receiving",      punch:"Zero friction intake"},
                {n:"02", label:"Automated Sorting",     punch:"BLIM pre-analytics"},
                {n:"03", label:"Centrifugation",        punch:"p671 sample prep"},
                {n:"04", label:"Vertical Transport",    punch:"CCM floor-to-floor"},
                {n:"05", label:"Diagnostic Engine",     punch:"e801 + cobas 8800"},
                {n:"06", label:"Smart Archiving",       punch:"p701 traceable storage"},
                {n:"07", label:"Dispatch & Delivery",   punch:"≤60 min to patient"},
              ].map(s => (
                <div key={s.n} style={{
                  display:"flex", alignItems:"center", gap:12,
                  padding:"8px 14px",
                  background:"rgba(255,255,255,.04)",
                  border:"1px solid rgba(255,255,255,.07)",
                  transition:"background .2s",
                }}
                  onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background="rgba(204,0,0,.12)"}
                  onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.04)"}
                >
                  <span className="font-mono" style={{
                    fontSize:9, fontWeight:700, color:"var(--crimson)",
                    flexShrink:0, width:20,
                  }}>{s.n}</span>
                  <span style={{ fontSize:13, fontWeight:600, color:"#fff", flex:1 }}>{s.label}</span>
                  <span className="font-mono" style={{ fontSize:9, color:"rgba(255,255,255,.35)", textAlign:"right" }}>{s.punch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ CLOSING STATEMENT ══════════════════════════════════════════ */}
        <div className="reveal" style={{
          textAlign:"center",
          padding:"clamp(40px,5vw,64px)",
          background:"linear-gradient(135deg, #060D1A 0%, #0B1F33 100%)",
          borderRadius:16,
          position:"relative", overflow:"hidden",
          transitionDelay:".4s",
        }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg,var(--crimson),#2F80ED,var(--crimson))" }}/>
          {/* Glow */}
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:400, height:200, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(204,0,0,.12),transparent 70%)", pointerEvents:"none" }}/>

          <div style={{ position:"relative", zIndex:2 }}>
            <div className="caption" style={{ color:"rgba(255,255,255,.35)", marginBottom:16, letterSpacing:".2em" }}>
              Platform Architecture
            </div>
            <h3 className="h3 font-display" style={{ color:"#fff", marginBottom:14, lineHeight:1.3 }}>
              A Vertically Integrated{" "}
              <em style={{ color:"var(--crimson)" }}>Transfusion Technology Platform</em>
            </h3>
            <p style={{
              fontSize:"clamp(16px,1.6vw,19px)",
              color:"rgba(255,255,255,.65)",
              maxWidth:620, margin:"0 auto",
              fontStyle:"italic", lineHeight:1.75,
            }}>
              Combining automation, diagnostics, and logistics into one continuous blood delivery engine.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:900px){
          .tech-two-col { grid-template-columns: 1fr 1fr !important; }
        }

        @keyframes tech-pulse-down    { 0%{top:-25%} 100%{top:110%} }
        @keyframes tech-arrow-pulse   { 0%,100%{opacity:.35;transform:translateY(0)} 50%{opacity:1;transform:translateY(4px)} }
        @keyframes tech-particle-down { 0%{opacity:0;transform:translateY(-6px)} 20%{opacity:1} 80%{opacity:1} 100%{opacity:0;transform:translateY(20px)} }
        @keyframes tech-bar           { 0%,100%{transform:scaleY(1);opacity:.4} 50%{transform:scaleY(1.8);opacity:1} }
        @keyframes tech-ring-pulse    { 0%{transform:scale(1);opacity:.7} 100%{transform:scale(1.6);opacity:0} }
        @keyframes tech-conveyor      { from{background-position:0 0} to{background-position:32px 0} }
        @keyframes tech-drone-fly     { 0%,100%{transform:translateX(0) translateY(0)} 50%{transform:translateX(12px) translateY(-3px)} }
        @keyframes tech-drone-trail   { 0%,100%{opacity:.3;width:30px} 50%{opacity:.7;width:60px} }
        @keyframes tech-node-glow     { 0%,100%{box-shadow:0 0 0 rgba(204,0,0,0)} 50%{box-shadow:0 0 18px rgba(204,0,0,.6)} }
        @keyframes tech-track-dot     { 0%{left:0;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{left:100%;opacity:0} }
        @keyframes tech-data-fade     { 0%,100%{opacity:.07} 50%{opacity:.18} }
      `}</style>
    </section>
  );
}
