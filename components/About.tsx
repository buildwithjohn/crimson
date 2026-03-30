"use client";
import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="section bg-offwhite grid-dots">
      <div className="container" style={{ position:"relative", zIndex:2 }}>
        <div style={{ display:"grid", gap:"clamp(40px,6vw,80px)", alignItems:"center" }} className="two-col">

          {/* Left */}
          <div>
            <div className="section-label reveal">About CrimsonWings</div>
            <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:20 }}>
              Building <em style={{ color:"var(--crimson)" }}>National</em>{" "}Blood Infrastructure
            </h2>
            <p className="body-lg reveal delay-2" style={{ marginBottom:16 }}>
              CrimsonWings Plasma Biologics Ltd is a digitized blood bank and integrated medical logistics company focused on the collection, advanced screening, storage, and rapid delivery of safe blood and critical medical products across Nigeria.
            </p>
            <p className="body-lg reveal delay-3">
              Our operations are powered by sophisticated screening infrastructure led by{" "}
              <strong style={{ color:"var(--ink)", fontWeight:600 }}>Nucleic Acid Testing (NAT) viral screening systems</strong>
              , walk-in cold rooms, and ultra-low temperature freezers — ensuring the highest standards of blood safety and quality.
            </p>

            {/* Three quick stats */}
            <div className="reveal delay-4" style={{ display:"flex", flexWrap:"wrap", gap:32, marginTop:36, paddingTop:32, borderTop:"1px solid var(--smoke)" }}>
              {[
                { label:"Lagos Operations",  desc:"Hub-and-spoke model" },
                { label:"PPP Alignment",     desc:"Government-ready"    },
                { label:"End-to-End",        desc:"Donor to delivery"   },
              ].map(item=>(
                <div key={item.label}>
                  <div className="caption" style={{ color:"var(--crimson)", marginBottom:4 }}>{item.label}</div>
                  <div className="caption" style={{ color:"var(--steel-light)" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats card */}
          <div className="reveal-right" style={{ paddingBottom:24, paddingRight:24 }}>
            <div style={{ background:"var(--ink)", padding:"clamp(28px,4vw,44px)", position:"relative" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"var(--crimson)" }}/>

              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24, marginBottom:28 }}>
                {[
                  { v:"240K–280K", l:"Blood Units Year 1" },
                  { v:"20,000+",   l:"Units / Month"      },
                  { v:"<60 min",   l:"Emergency Delivery" },
                  { v:"100%",      l:"NAT Screened"       },
                ].map(s=>(
                  <div key={s.l} style={{ borderLeft:"2px solid var(--crimson)", paddingLeft:16 }}>
                    <div className="font-display" style={{ fontSize:"clamp(20px,2.5vw,28px)", fontWeight:700, color:"#fff", lineHeight:1, marginBottom:8 }}>{s.v}</div>
                    <div className="caption" style={{ color:"rgba(255,255,255,.38)" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop:"1px solid rgba(255,255,255,.07)", paddingTop:20 }}>
                <p className="caption" style={{ color:"rgba(255,255,255,.28)", lineHeight:1.9, textTransform:"uppercase", letterSpacing:".1em" }}>
                  In Partnership with Lagos State<br/>Ministry of Health
                </p>
              </div>

              {/* Corner brackets */}
              <div style={{ position:"absolute", bottom:14, right:14, width:28, height:28, borderBottom:"1px solid rgba(138,3,3,.4)", borderRight:"1px solid rgba(138,3,3,.4)" }}/>
              <div style={{ position:"absolute", top:14,   left:14,  width:28, height:28, borderTop:"1px solid rgba(138,3,3,.25)",   borderLeft:"1px solid rgba(138,3,3,.25)"  }}/>
            </div>

            {/* Floating badge — outside the overflow-hidden card */}
            <div style={{ position:"absolute", bottom:0, right:0, background:"var(--crimson)", padding:"10px 18px" }}>
              <div className="caption" style={{ color:"rgba(255,255,255,.65)", marginBottom:2 }}>Established</div>
              <div className="font-display" style={{ fontSize:22, fontWeight:700, color:"#fff", lineHeight:1 }}>2026</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(min-width:900px){.two-col{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
