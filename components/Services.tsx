"use client";
import { useReveal } from "./useReveal";

const SERVICES = [
  { num:"01",title:"Blood Collection & Donor Management",     desc:"Structured donor recruitment, eligibility screening, and collection — digitally logged into our OS platform from the first interaction.",                                                             tags:["Donor Portal","Eligibility Screening","Digital Records"] },
  { num:"02",title:"Advanced Viral Screening (NAT)",          desc:"Every unit is subjected to Nucleic Acid Testing — detecting HIV, Hepatitis B, Hepatitis C, and HTLV with gold-standard precision before entry into storage.",                                            tags:["NAT Testing","Multi-pathogen","Zero Tolerance"] },
  { num:"03",title:"Cold Chain Storage at Scale",             desc:"Walk-in cold rooms and ultra-low temperature freezers maintain strict temperature control for 20,000+ units per month, with automated 24/7 monitoring.",                                                  tags:["Walk-in Cold Rooms","ULT Freezers","Automated Monitoring"] },
  { num:"04",title:"Hospital Network Integration",            desc:"Hospitals connect directly to our OS platform to submit real-time blood requests, track inventory availability, and receive digital delivery confirmations.",                                              tags:["Real-time Requests","Inventory View","Digital Chain"] },
  { num:"05",title:"Emergency Drone Delivery",               desc:"Temperature-controlled drones execute last-mile delivery for critical emergencies — reaching any hospital in Lagos in under 60 minutes from dispatch.",                                                    tags:["Drone Dispatch","Temp Controlled","< 60 min"] },
  { num:"06",title:"Analytics & Regulatory Reporting",       desc:"Comprehensive dashboards give operations, management, and government partners full visibility into delivery performance, inventory, and compliance metrics.",                                              tags:["Live Dashboards","Compliance Reports","Forecasting"] },
];

export default function Services() {
  const ref = useReveal();
  return (
    <section id="services" ref={ref} className="section bg-white grid-lines-light">
      <div className="container" style={{ position:"relative", zIndex:2 }}>

        <div style={{ textAlign:"center", maxWidth:560, margin:"0 auto clamp(48px,6vw,80px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>What We Offer</div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:16 }}>
            Comprehensive <em style={{ color:"var(--crimson)" }}>Blood Supply</em> Services
          </h2>
          <p className="body-lg reveal delay-2">Six integrated service lines — each essential, all connected through our proprietary OS platform.</p>
        </div>

        <div style={{ display:"grid", gap:16 }} className="three-col">
          {SERVICES.map((s,i)=>(
            <div key={s.num} className="reveal" style={{ transitionDelay:`${i*.07}s` }}>
              <div className="card" style={{ height:"100%" }}>
                <div className="font-display" style={{ fontSize:44, fontWeight:700, color:"rgba(138,3,3,.08)", lineHeight:1, marginBottom:14 }}>{s.num}</div>
                <h3 className="font-display" style={{ fontSize:"clamp(16px,1.8vw,20px)", fontWeight:700, color:"var(--ink)", lineHeight:1.3, marginBottom:12 }}>{s.title}</h3>
                <p className="body-md" style={{ marginBottom:18 }}>{s.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:"auto" }}>
                  {s.tags.map(t=><span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(min-width:900px){.three-col{grid-template-columns:repeat(3,1fr) !important;}}`}</style>
    </section>
  );
}
