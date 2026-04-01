"use client";
import { useReveal } from "./useReveal";

const QUICK_STATS = [
  { val:"240K–280K", label:"Blood Units — Year 1",    color:"#CC0000" },
  { val:"20,000+",   label:"Units Per Month",          color:"#2F80ED" },
  { val:"<60 min",   label:"Emergency Delivery",       color:"#CC0000" },
  { val:"100%",      label:"NAT Screened",             color:"#22c55e" },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="section bg-white">
      {/* Subtle red gradient top-right */}
      <div style={{ position:"absolute", top:0, right:0, width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(204,0,0,.06) 0%, transparent 70%)", pointerEvents:"none" }}/>

      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* Top section label */}
        <div className="section-label reveal" style={{ marginBottom:12 }}>About CrimsonWings</div>

        {/* Big mission statement */}
        <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:24, maxWidth:800 }}>
          Nigeria&apos;s Most Advanced{" "}
          <em style={{ color:"var(--crimson)" }}>Digitized Blood Bank</em>{" "}
          & Medical Logistics Platform
        </h2>

        <div style={{ display:"grid", gap:"clamp(40px,6vw,72px)", alignItems:"start" }} className="two-col">

          {/* Left — body copy */}
          <div>
            <p className="body-lg reveal delay-2" style={{ marginBottom:20 }}>
              CrimsonWings Blood Logistics Ltd is a fully digitized blood bank and integrated
              medical logistics company — focused on the collection, advanced screening, storage,
              and rapid delivery of safe blood and critical medical products across Nigeria.
            </p>
            <p className="body-lg reveal delay-3" style={{ marginBottom:20 }}>
              Our operations are powered by <strong style={{ color:"var(--ink)", fontWeight:700 }}>Nucleic
              Acid Testing (NAT) viral screening systems</strong>, walk-in cold rooms, and ultra-low
              temperature freezers — ensuring the highest standards of blood safety and quality.
            </p>
            <p className="body-lg reveal delay-4" style={{ marginBottom:32 }}>
              We combine this with a <strong style={{ color:"var(--ink)", fontWeight:700 }}>technology-driven
              logistics network</strong> to ensure that life-saving blood reaches hospitals quickly,
              reliably, and in full regulatory compliance.
            </p>

            {/* Three badges */}
            <div className="reveal delay-5" style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
              {[
                { label:"Lagos-Based Operations", icon:"📍" },
                { label:"PPP Aligned",            icon:"🤝" },
                { label:"Donor to Delivery",      icon:"🔄" },
              ].map(b => (
                <div key={b.label} style={{
                  display:"flex", alignItems:"center", gap:8,
                  padding:"8px 16px",
                  background:"rgba(204,0,0,.05)",
                  border:"1px solid rgba(204,0,0,.15)",
                }}>
                  <span style={{ fontSize:16 }}>{b.icon}</span>
                  <span className="caption" style={{ color:"var(--crimson)", fontSize:10 }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="reveal-right">
            {/* Large feature card */}
            <div style={{
              background:"var(--dark-bg)", padding:"clamp(28px,4vw,44px)",
              position:"relative", overflow:"hidden",
              marginBottom:16,
            }}>
              {/* Top crimson bar */}
              <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"var(--crimson)" }}/>
              {/* Corner glow */}
              <div style={{ position:"absolute", bottom:0, right:0, width:200, height:200, borderRadius:"50%", background:"radial-gradient(circle, rgba(204,0,0,.15) 0%, transparent 70%)", pointerEvents:"none" }}/>

              <div style={{ fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".16em", textTransform:"uppercase", color:"rgba(255,255,255,.4)", marginBottom:20 }}>
                Platform Metrics
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:24 }}>
                {QUICK_STATS.map(s => (
                  <div key={s.label} style={{ borderLeft:`3px solid ${s.color}`, paddingLeft:16 }}>
                    <div className="font-display" style={{
                      fontSize:"clamp(20px,2.8vw,30px)", fontWeight:800,
                      color:"#fff", lineHeight:1, marginBottom:6,
                    }}>
                      {s.val}
                    </div>
                    <div className="caption" style={{ color:"rgba(255,255,255,.45)", fontSize:9 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop:"1px solid rgba(255,255,255,.1)", paddingTop:18 }}>
                <p className="caption" style={{ color:"rgba(255,255,255,.35)", lineHeight:1.9, letterSpacing:".08em" }}>
                  IN PARTNERSHIP WITH LAGOS STATE<br/>MINISTRY OF HEALTH
                </p>
              </div>

              {/* Corner brackets */}
              <div style={{ position:"absolute", bottom:14, right:14, width:28, height:28, borderBottom:"1px solid rgba(204,0,0,.5)", borderRight:"1px solid rgba(204,0,0,.5)" }}/>
              <div style={{ position:"absolute", top:16, left:14, width:28, height:28, borderTop:"1px solid rgba(204,0,0,.3)", borderLeft:"1px solid rgba(204,0,0,.3)" }}/>
            </div>

            {/* Established badge */}
            <div style={{ display:"flex", gap:12 }}>
              <div style={{ flex:1, background:"var(--crimson)", padding:"16px 20px" }}>
                <div className="caption" style={{ color:"rgba(255,255,255,.65)", marginBottom:4 }}>Established</div>
                <div className="font-display" style={{ fontSize:28, fontWeight:800, color:"#fff", lineHeight:1 }}>2026</div>
              </div>
              <div style={{ flex:2, background:"rgba(204,0,0,.06)", border:"1px solid rgba(204,0,0,.15)", padding:"16px 20px" }}>
                <div className="caption" style={{ color:"var(--crimson)", marginBottom:4 }}>Lagos State Coverage</div>
                <div className="font-display" style={{ fontSize:20, fontWeight:700, color:"var(--ink)", lineHeight:1.2 }}>5 Strategic Hubs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(min-width:900px){.two-col{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
