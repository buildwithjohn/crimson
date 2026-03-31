"use client";
import { useReveal } from "./useReveal";
import { Check } from "lucide-react";

const PILLARS = [
  {
    num:"01", title:"Clinical Authority",
    sub:"DIGITIZED BLOOD BANK + ADVANCED SCREENING",
    color:"#CC0000",
    points:[
      "Nucleic Acid Testing (NAT) — gold standard viral screening",
      "Walk-in cold rooms with precision temperature control",
      "Ultra-low temperature freezers for long-term preservation",
      "Full NAFDAC & international regulatory compliance",
      "Specialist clinical leadership in transfusion medicine",
    ],
  },
  {
    num:"02", title:"Operational Scale",
    sub:"HIGH-CAPACITY STORAGE & NATIONAL SUPPLY",
    color:"#2F80ED",
    points:[
      "Minimum 20,000 blood units per month processing",
      "240,000–280,000 units projected in Year 1",
      "Hub-and-spoke infrastructure — scalable nationally",
      "End-to-end inventory management via proprietary OS",
      "Public-Private Partnership alignment with Lagos State",
    ],
  },
  {
    num:"03", title:"Technological Superiority",
    sub:"PROPRIETARY OS PLATFORM + DRONE LOGISTICS",
    color:"#C9A84C",
    points:[
      "Proprietary OS: donor → inventory → delivery",
      "Real-time hospital blood request management",
      "Triphasic logistics: ground + coordination + drone",
      "Drone-enabled last-mile emergency delivery",
      "Under 60-minute urban emergency response target",
    ],
  },
];

export default function Solution() {
  const ref = useReveal();
  return (
    <section id="solution" ref={ref} className="section bg-white grid-lines-light">
      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:620, margin:"0 auto clamp(48px,6vw,80px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>
            The CrimsonWings Solution
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:16 }}>
            A Fully Integrated Model.{" "}
            <em style={{ color:"var(--crimson)" }}>Built for Scale.</em>
          </h2>
          <p className="body-lg reveal delay-2">
            Three core pillars working in concert to deliver what no other platform in Nigeria
            has achieved — a complete, technology-enabled blood supply chain.
          </p>
        </div>

        {/* Three pillars — proper column card with everything centred */}
        <div style={{ display:"grid", gap:24 }} className="three-col">
          {PILLARS.map((p, i) => (
            <div key={p.num} className="reveal" style={{ transitionDelay:`${i * .14}s` }}>
              <div style={{
                height:"100%",
                background:"var(--white)",
                border:`1px solid ${p.color}30`,
                borderTop:`4px solid ${p.color}`,
                borderRadius:2,
                padding:"clamp(28px,3.5vw,44px) clamp(24px,3vw,36px)",
                display:"flex", flexDirection:"column", alignItems:"center",
                textAlign:"center",
                boxShadow:`0 4px 32px ${p.color}12`,
                transition:"transform .35s var(--ease-expo), box-shadow .35s",
              }}
                onMouseEnter={e=>{
                  (e.currentTarget as HTMLElement).style.transform="translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow=`0 16px 56px ${p.color}22`;
                }}
                onMouseLeave={e=>{
                  (e.currentTarget as HTMLElement).style.transform="none";
                  (e.currentTarget as HTMLElement).style.boxShadow=`0 4px 32px ${p.color}12`;
                }}
              >
                {/* BIG centred number */}
                <div className="font-display" style={{
                  fontSize:"clamp(64px,8vw,96px)", fontWeight:900,
                  color:p.color, opacity:.15, lineHeight:1,
                  marginBottom:8,
                }}>
                  {p.num}
                </div>

                {/* Pillar title — big, bold, centred */}
                <h3 className="font-display" style={{
                  fontSize:"clamp(22px,2.8vw,32px)", fontWeight:800,
                  color:"var(--ink)", lineHeight:1.15, marginBottom:14,
                }}>
                  {p.title}
                </h3>

                {/* Subheading — BOLD, BIGGER, UPPERCASE, colour */}
                <div className="font-mono" style={{
                  fontSize:11, fontWeight:700,
                  letterSpacing:".14em", textTransform:"uppercase",
                  color:p.color, marginBottom:28,
                  lineHeight:1.6,
                  padding:"8px 16px",
                  background:`${p.color}0d`,
                  border:`1px solid ${p.color}25`,
                }}>
                  {p.sub}
                </div>

                {/* Divider */}
                <div style={{ width:40, height:2, background:p.color, marginBottom:24, opacity:.4 }}/>

                {/* Checklist — left-aligned inside centred card */}
                <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:12, width:"100%", textAlign:"left" }}>
                  {p.points.map(pt => (
                    <li key={pt} style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                      <div style={{
                        flexShrink:0, width:20, height:20,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        background:p.color, marginTop:2,
                      }}>
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
