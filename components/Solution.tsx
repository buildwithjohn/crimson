"use client";
import { useReveal } from "./useReveal";
import { Check } from "lucide-react";

const PILLARS = [
  { num:"01", title:"Clinical Authority",       sub:"Digitized Blood Bank + Advanced Screening", color:"#8A0303",
    points:["Nucleic Acid Testing (NAT) — gold standard viral screening","Walk-in cold rooms with precision temperature control","Ultra-low temperature freezers for long-term preservation","Full NAFDAC & international regulatory compliance","Specialist clinical leadership in transfusion medicine"] },
  { num:"02", title:"Operational Scale",        sub:"High-Capacity Storage & National Supply",   color:"#2F80ED",
    points:["Minimum 20,000 blood units per month processing","240,000–280,000 units projected in Year 1","Hub-and-spoke infrastructure — scalable nationally","End-to-end inventory management via proprietary OS","Public-Private Partnership alignment with Lagos State"] },
  { num:"03", title:"Technological Superiority",sub:"Proprietary OS Platform + Drone Logistics", color:"#C9A84C",
    points:["Proprietary OS: donor → inventory → delivery","Real-time hospital blood request management","Triphasic logistics: ground + coordination + drone","Drone-enabled last-mile emergency delivery","Under 60-minute urban emergency response target"] },
];

export default function Solution() {
  const ref = useReveal();
  return (
    <section id="solution" ref={ref} className="section bg-white grid-lines-light">
      <div className="container" style={{ position:"relative", zIndex:2 }}>

        <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto clamp(48px,6vw,80px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>The CrimsonWings Solution</div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:16 }}>
            A Fully Integrated Model.{" "}<em style={{ color:"var(--crimson)" }}>Built for Scale.</em>
          </h2>
          <p className="body-lg reveal delay-2">
            Three core pillars working in concert to deliver what no other platform in Nigeria has achieved — a complete, technology-enabled blood supply chain.
          </p>
        </div>

        <div style={{ display:"grid", gap:20 }} className="three-col">
          {PILLARS.map((p,i)=>(
            <div key={p.num} className="reveal" style={{ transitionDelay:`${i*.14}s` }}>
              <div className="card" style={{ height:"100%", borderTop:`3px solid ${p.color}` }}>
                <div className="font-display" style={{ fontSize:52, fontWeight:700, color:p.color, opacity:.1, lineHeight:1, marginBottom:16 }}>{p.num}</div>
                <h3 className="h3 font-display" style={{ color:"var(--ink)", marginBottom:6 }}>{p.title}</h3>
                <div className="caption" style={{ color:p.color, marginBottom:24, letterSpacing:".1em" }}>{p.sub}</div>
                <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:12 }}>
                  {p.points.map(pt=>(
                    <li key={pt} style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                      <div style={{ flexShrink:0, width:20, height:20, display:"flex", alignItems:"center", justifyContent:"center", background:p.color, marginTop:2 }}>
                        <Check size={11} color="#fff" strokeWidth={3}/>
                      </div>
                      <span className="body-md">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(min-width:900px){.three-col{grid-template-columns:repeat(3,1fr) !important;}}`}</style>
    </section>
  );
}
