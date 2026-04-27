"use client";
import { useReveal } from "./useReveal";
import NetworkVisual from "./NetworkVisual";

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
          Building Africa&apos;s Blood Infrastructure{" "}
          <em style={{ color:"var(--crimson)" }}>for the Next Generation</em>{" "}
          of Medicine
        </h2>

        <div style={{ display:"grid", gap:"clamp(40px,6vw,72px)", alignItems:"start" }} className="two-col">

          {/* Left — body copy */}
          <div>
            <p className="body-lg reveal delay-2" style={{ marginBottom:20 }}>
              CrimsonWings is positioning Nigeria not just to distribute blood — but to own the upstream supply chain of life-saving biologics. We are building Africa&apos;s most advanced automated blood processing and logistics infrastructure.
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
                { label:"Ogun State Operations", icon:"📍" },
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
            <NetworkVisual/>
          </div>
        </div>
      </div>
      <style>{`@media(min-width:900px){.two-col{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
