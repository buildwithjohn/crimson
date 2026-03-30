"use client";
import { useReveal } from "./useReveal";

const STEPS = [
  { num:"01",phase:"Collection", title:"Donor Recruitment & Collection",       desc:"Qualified donors are recruited through our platform. Blood is collected at our certified facilities under strict clinical protocols with real-time digital logging.",               tags:["Donor Portal","Eligibility Screening","Digital Records"] },
  { num:"02",phase:"Screening",  title:"NAT Viral Screening",                  desc:"Every unit undergoes Nucleic Acid Testing (NAT) — the gold standard for viral detection. Results are verified and logged into the OS platform before entry into storage.",         tags:["NAT Testing","HIV/Hep B/C","Quality Assurance"] },
  { num:"03",phase:"Storage",    title:"Cold Chain Storage",                    desc:"NAT-cleared blood units are stored in walk-in cold rooms and ultra-low temperature freezers with continuous automated monitoring and alarms for any temperature deviation.",           tags:["Walk-in Cold Rooms","ULT Freezers","24/7 Monitoring"] },
  { num:"04",phase:"Dispatch",   title:"Intelligent Dispatch",                  desc:"Hospital requests arrive via the OS platform. AI-driven routing selects the optimal blood unit by type, age, and proximity. Dispatch initiates within minutes of request confirmation.", tags:["OS Matching","Priority Routing","< 5 min Response"] },
  { num:"05",phase:"Delivery",   title:"Last-Mile Delivery",                   desc:"Ground vehicles handle standard delivery. For critical emergencies, temperature-controlled drones execute last-mile delivery — arriving at hospital landing zones in under 60 minutes.", tags:["Ground + Drone","Temp Controlled","< 60 min Urban"] },
  { num:"06",phase:"Confirm",    title:"Digital Confirmation & Analytics",     desc:"Receiving hospital staff confirm delivery digitally on the OS platform. Data flows into analytics dashboards for performance monitoring, inventory forecasting, and regulatory reporting.",tags:["Digital Confirmation","Chain of Custody","Analytics"] },
];

export default function HowItWorks() {
  const ref = useReveal();
  return (
    <section id="how-it-works" ref={ref} className="section bg-offwhite grid-dots">
      <div className="container" style={{ position:"relative", zIndex:2 }}>

        <div style={{ textAlign:"center", maxWidth:560, margin:"0 auto clamp(48px,6vw,80px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>End-to-End Process</div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:16 }}>
            From <em style={{ color:"var(--crimson)" }}>Donor</em> to Delivery
          </h2>
          <p className="body-lg reveal delay-2">
            Every blood unit follows a rigorously controlled, fully digitized journey — from collection through screening, storage, and delivery to the patient bedside.
          </p>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
          {STEPS.map((step,i)=>(
            <div key={step.num}>
              <div className="reveal" style={{
                display:"grid", gap:"clamp(24px,4vw,56px)", alignItems:"center",
                padding:"clamp(32px,4vw,52px) 0", transitionDelay:`${i*.08}s`,
              }}>

                {/* Number badge + content */}
                <div style={{ display:"flex", gap:20, alignItems:"flex-start", order: i%2===1?2:1 }} className="step-content">
                  <div style={{
                    flexShrink:0, width:52, height:52, display:"flex", alignItems:"center", justifyContent:"center",
                    background:"var(--ink)", border:"1px solid rgba(138,3,3,.22)", position:"relative",
                  }}>
                    <span className="font-mono" style={{ fontSize:12, fontWeight:500, color:"#fff", letterSpacing:".08em" }}>{step.num}</span>
                    <div style={{ position:"absolute", top:-1, left:0, right:0, height:2, background:"var(--crimson)" }}/>
                  </div>
                  <div>
                    <div className="caption" style={{ color:"var(--crimson)", marginBottom:8 }}>Phase {step.num} — {step.phase}</div>
                    <h3 className="h3 font-display" style={{ color:"var(--ink)", marginBottom:12 }}>{step.title}</h3>
                    <p className="body-md" style={{ maxWidth:400, marginBottom:16 }}>{step.desc}</p>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                      {step.tags.map(t=><span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>

                {/* Visual block — desktop only */}
                <div style={{ order: i%2===1?1:2, display:"flex", justifyContent: i%2===1?"flex-start":"flex-end" }} className="step-visual">
                  <div style={{
                    width:240, height:136, overflow:"hidden", position:"relative",
                    background: i%2===0?"var(--ink)":"rgba(138,3,3,.04)",
                    border:`1px solid ${i%2===0?"rgba(138,3,3,.18)":"var(--smoke)"}`,
                  }}>
                    <span className="font-display" style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:72, fontWeight:700, color:i%2===0?"rgba(138,3,3,.08)":"rgba(138,3,3,.06)", userSelect:"none", lineHeight:1 }}>{step.num}</span>
                    <div className="caption" style={{ position:"absolute", bottom:12, left:16, color:i%2===0?"rgba(255,255,255,.22)":"rgba(138,3,3,.38)", fontSize:9 }}>{step.phase}</div>
                    <div style={{ position:"absolute", top:0, right:0, width:24, height:24, borderTop:"1px solid rgba(138,3,3,.25)", borderRight:"1px solid rgba(138,3,3,.25)" }}/>
                  </div>
                </div>
              </div>
              {i<STEPS.length-1 && <div className="divider"/>}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(min-width:900px){
          .step-grid{ grid-template-columns:1fr 1fr !important; }
          .step-visual{ display:flex !important; }
        }
        @media(max-width:899px){
          .step-visual{ display:none !important; }
          .step-content{ order:1 !important; }
        }
      `}</style>
    </section>
  );
}
