"use client";
import { useEffect, useRef } from "react";
import { useReveal } from "./useReveal";

/* ── 11 steps — image + text in alternating workflow ─────────────────── */
const STEPS = [
  { n:"01", title:"Blood Collection",              body:"Donor drives across Ogun State. Every unit collected and immediately logged.", image:"/phase-01.png",          color:"#CC0000" },
  { n:"02", title:"Controlled Transport",          body:"Cold-chain vans move units to processing — temperature-monitored every kilometre.", image:"/new-tech-delivery.jpg", color:"#2F80ED" },
  { n:"03", title:"Screening & Processing",        body:"Automated NAT + serology at Ogun State-approved centres. Zero manual intervention.", image:"/phase-02.png",          color:"#CC0000" },
  { n:"04", title:"Central Blood Bank",            body:"Digital intake at CrimsonWings HQ. Every unit logged, tracked, cleared for use.", image:"/central-bloodbank.png",  color:"#2F80ED" },
  { n:"05", title:"Smart Inventory Management",    body:"Real-time cold-chain tracking across the full CrimsonWings network.", image:"/smart-inventory.jpg",   color:"#CC0000" },
  { n:"06", title:"Hospital Request",              body:"Hospitals place digital blood requests — directly into the live inventory system.", image:"/hospital-request.jpg",  color:"#2F80ED" },
  { n:"07", title:"Intelligent Routing",           body:"System selects the best method — drone, cold-chain bike, or refrigerated van.", image:"/intelligent-routing.jpg",color:"#CC0000" },
  { n:"08", title:"Automated Dispatch",            body:"Decision engine triggers instant dispatch from the nearest hub. No manual delay.", image:"/tech-dispatch.jpg",      color:"#2F80ED" },
  { n:"09", title:"Delivery Execution",            body:"Fleet deployed — drone, bike, or van — direct to hospital or endpoint.", image:"/delivery-execution.jpg",  color:"#CC0000" },
  { n:"10", title:"Verification & Use",            body:"Nurse scans QR on arrival. Units logged, verified, released for immediate use.", image:"/phase-06.png",          color:"#2F80ED" },
  { n:"11", title:"Traceability & Reporting",      body:"Full audit trail — donor to patient. Regulatory compliance. Data-driven optimisation.", image:"/tech-network.jpg",      color:"#CC0000" },
];

/* ── Animated flow diagram ─────────────────────────────────────────────── */
function AnimatedFlowDiagram() {
  const nodes = [
    { label:"DONOR DRIVE", emoji:"🩸", isEnd:true  },
    { label:"VAN",         emoji:"🚐", isEnd:false },
    { label:"SCREENING",   emoji:"🔬", isEnd:false },
    { label:"HQ LAB",      emoji:"⚙️", isEnd:false },
    { label:"STORAGE",     emoji:"🗄️", isEnd:false },
    { label:"REQUEST",     emoji:"📋", isEnd:false },
    { label:"DISPATCH",    emoji:"📡", isEnd:false },
    { label:"DELIVERY",    emoji:"🚁", isEnd:false },
    { label:"HOSPITAL",    emoji:"🏥", isEnd:true  },
  ];
  return (
    <div style={{ background:"linear-gradient(135deg,#060D1A 0%,#0B1F33 60%,#0D1520 100%)", border:"1px solid rgba(204,0,0,.2)", borderRadius:16, padding:"clamp(28px,4vw,48px) clamp(16px,3vw,36px)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(204,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(204,0,0,.04) 1px,transparent 1px)", backgroundSize:"32px 32px", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", left:0, right:0, height:1.5, background:"linear-gradient(90deg,transparent,rgba(204,0,0,.5),transparent)", animation:"fd-scan 7s linear infinite", pointerEvents:"none", zIndex:5 }}/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:28, position:"relative", zIndex:4, flexWrap:"wrap", gap:8 }}>
        <div className="caption" style={{ color:"rgba(255,255,255,.3)", fontSize:9, letterSpacing:".18em" }}>BLOOD LOGISTICS FLOW · END-TO-END</div>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e", animation:"fd-blink 1.8s ease-in-out infinite" }}/>
          <span className="font-mono" style={{ fontSize:9, color:"rgba(255,255,255,.4)", letterSpacing:".12em" }}>LIVE TRACKING</span>
        </div>
      </div>
      <div style={{ overflowX:"auto", paddingBottom:8 }}>
        <div style={{ display:"flex", alignItems:"center", minWidth:720, position:"relative", zIndex:3 }}>
          {nodes.map((node, i) => (
            <div key={node.label} style={{ display:"flex", alignItems:"center", flex:1 }}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10, flexShrink:0 }}>
                <div style={{ position:"relative", width:68, height:68, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:`2px solid rgba(204,0,0,${node.isEnd?.7:.4})`, animation:`fd-ring 2.4s ease-out ${i*0.25}s infinite` }}/>
                  <div style={{ width:56, height:56, borderRadius:"50%", background:node.isEnd?"linear-gradient(135deg,#CC0000,#880000)":"linear-gradient(135deg,#162040,#0D1830)", border:`2px solid ${node.isEnd?"#CC0000":"rgba(204,0,0,.5)"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, boxShadow:node.isEnd?"0 0 20px rgba(204,0,0,.5)":"0 0 12px rgba(204,0,0,.2)", animation:`fd-pulse 3s ease-in-out ${i*.3}s infinite`, position:"relative", zIndex:2, cursor:"default", transition:"transform .2s, box-shadow .2s" }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1.18)";(e.currentTarget as HTMLElement).style.boxShadow="0 0 32px rgba(204,0,0,.8)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow=node.isEnd?"0 0 20px rgba(204,0,0,.5)":"0 0 12px rgba(204,0,0,.2)";}}
                  >{node.emoji}</div>
                </div>
                <div className="caption" style={{ fontSize:9, color:node.isEnd?"rgba(255,255,255,.8)":"rgba(255,255,255,.5)", textAlign:"center", letterSpacing:".1em", lineHeight:1.4, fontWeight:node.isEnd?700:400 }}>{node.label}</div>
              </div>
              {i < nodes.length-1 && (
                <div style={{ flex:1, minWidth:12, height:56, position:"relative", display:"flex", alignItems:"center", margin:"0 2px", marginBottom:28 }}>
                  <div style={{ position:"absolute", left:0, right:0, top:"50%", transform:"translateY(-50%)", height:2, background:"rgba(204,0,0,.15)", overflow:"hidden" }}>
                    <div style={{ position:"absolute", inset:0, background:"repeating-linear-gradient(90deg,rgba(204,0,0,.5) 0,rgba(204,0,0,.5) 5px,transparent 5px,transparent 12px)", animation:`fd-dash ${1.2-i*.08}s linear infinite` }}/>
                  </div>
                  <div style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", width:10, height:10, borderRadius:"50%", background:"#CC0000", boxShadow:"0 0 12px rgba(204,0,0,.9)", animation:`fd-dot ${1.2-i*.08}s linear ${i*.15}s infinite`, zIndex:2 }}/>
                  <div style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", width:6, height:6, borderRadius:"50%", background:"rgba(204,0,0,.6)", animation:`fd-dot ${1.2-i*.08}s linear ${i*.15+0.3}s infinite`, zIndex:2 }}/>
                  <div style={{ position:"absolute", right:0, top:"50%", transform:"translateY(-50%)", width:0, height:0, borderTop:"5px solid transparent", borderBottom:"5px solid transparent", borderLeft:"8px solid rgba(204,0,0,.6)", zIndex:3 }}/>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display:"flex", justifyContent:"center", gap:"clamp(20px,5vw,56px)", marginTop:20, paddingTop:16, borderTop:"1px solid rgba(255,255,255,.06)", position:"relative", zIndex:4, flexWrap:"wrap" }}>
        {[{val:"11 Steps",l:"Full Traceability"},{val:"<60 min",l:"Donor to Patient"},{val:"100%",l:"Digitally Tracked"},{val:"Zero",l:"Manual Gaps"}].map(s=>(
          <div key={s.l} style={{ textAlign:"center" }}>
            <div className="font-display" style={{ fontSize:"clamp(16px,2vw,22px)", fontWeight:800, color:"#CC0000", lineHeight:1 }}>{s.val}</div>
            <div className="caption" style={{ color:"rgba(255,255,255,.3)", fontSize:9, marginTop:4 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fd-scan  { 0%{top:-2px} 100%{top:100%} }
        @keyframes fd-blink { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes fd-ring  { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.7);opacity:0} }
        @keyframes fd-pulse { 0%,100%{box-shadow:0 0 12px rgba(204,0,0,.2)} 50%{box-shadow:0 0 24px rgba(204,0,0,.5)} }
        @keyframes fd-dot   { 0%{left:0;opacity:0} 8%{opacity:1} 92%{opacity:1} 100%{left:100%;opacity:0} }
        @keyframes fd-dash  { from{background-position:0 0} to{background-position:34px 0} }
      `}</style>
    </div>
  );
}

/* ── Main export ────────────────────────────────────────────────────────── */
export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section id="how-it-works" ref={ref} style={{ background:"#fff", paddingBlock:"var(--section-py)", position:"relative", overflow:"hidden" }}>
      <div className="grid-dots" style={{ position:"absolute", inset:0 }}/>

      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto clamp(40px,5vw,64px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:16 }}>End-to-End Process</div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:14 }}>
            From <em style={{ color:"var(--crimson)" }}>Donor</em> to Patient —{" "}
            <em style={{ color:"var(--crimson)" }}>A Seamless Flow</em>
          </h2>
          <p className="body-md reveal delay-2" style={{ color:"var(--steel)" }}>
            Every unit tracked from collection to bedside. Eleven steps. Zero manual gaps.
          </p>
        </div>

        {/* ── Vertical animated workflow ── */}
        <div style={{ position:"relative", marginBottom:"clamp(48px,6vw,80px)" }}>

          {/* Central animated spine line */}
          <div style={{
            position:"absolute",
            left:"50%", transform:"translateX(-50%)",
            top:0, bottom:0,
            width:3,
            background:"linear-gradient(to bottom, rgba(204,0,0,.08), rgba(204,0,0,.2), rgba(204,0,0,.08))",
            overflow:"hidden",
            zIndex:0,
          }} className="hw-spine">
            {/* Traveling glow */}
            <div style={{
              position:"absolute", left:0, right:0, height:"20%",
              background:"linear-gradient(to bottom, transparent, #CC0000, transparent)",
              animation:"hw-spine-pulse 3s ease-in-out infinite",
            }}/>
          </div>

          {/* Steps */}
          {STEPS.map((step, i) => {
            const isLeft = i % 2 === 0; /* even = image left, text right */
            return (
              <div key={step.n} className="reveal hw-step" style={{
                display:"grid",
                gap:"clamp(16px,3vw,40px)",
                alignItems:"center",
                marginBottom:"clamp(32px,4vw,52px)",
                transitionDelay:`${i*.06}s`,
                position:"relative", zIndex:1,
              }}>

                {/* Image side */}
                <div style={{ order: isLeft ? 1 : 3 }} className="hw-img-col">
                  <div style={{
                    position:"relative",
                    overflow:"hidden",
                    borderRadius:12,
                    boxShadow:`4px 4px 0 ${step.color}20, 0 8px 32px rgba(0,0,0,.1)`,
                    border:`2px solid ${step.color}25`,
                    aspectRatio:"4/3",
                    transition:"transform .3s, box-shadow .3s",
                  }}
                    onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="translateY(-4px)";el.style.boxShadow=`4px 8px 0 ${step.color}30, 0 16px 40px rgba(0,0,0,.15)`;}}
                    onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="none";el.style.boxShadow=`4px 4px 0 ${step.color}20, 0 8px 32px rgba(0,0,0,.1)`;}}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.image} alt={step.title} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }}/>
                    {/* Gradient overlay */}
                    <div style={{ position:"absolute", inset:0, background:`linear-gradient(to top, ${step.color}55 0%, transparent 50%)` }}/>
                    {/* Step badge */}
                    <div style={{ position:"absolute", top:12, left:12, background:step.color, color:"#fff", fontFamily:"var(--font-display)", fontWeight:800, fontSize:12, padding:"4px 12px", borderRadius:4, zIndex:2 }}>
                      {step.n}
                    </div>
                  </div>
                </div>

                {/* Centre dot on spine */}
                <div style={{ order:2, display:"flex", justifyContent:"center", alignItems:"center", flexShrink:0 }} className="hw-node-col">
                  <div style={{
                    width:36, height:36, borderRadius:"50%",
                    background:step.color,
                    border:"4px solid #fff",
                    boxShadow:`0 0 0 3px ${step.color}40, 0 4px 16px ${step.color}40`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    flexShrink:0, zIndex:2,
                    animation:`hw-node-pulse 2.5s ease-in-out ${i*.2}s infinite`,
                  }}>
                    <span className="font-mono" style={{ fontSize:8, fontWeight:800, color:"#fff" }}>{step.n}</span>
                  </div>
                </div>

                {/* Text side */}
                <div style={{ order: isLeft ? 3 : 1, textAlign: isLeft ? "left" : "right" }} className="hw-text-col">
                  <div style={{
                    display:"inline-block",
                    padding:"clamp(16px,2vw,24px)",
                    background: i%2===0 ? "#fff" : "var(--off-white)",
                    border:"1px solid var(--smoke)",
                    borderRadius:10,
                    borderLeft: isLeft ? `4px solid ${step.color}` : "1px solid var(--smoke)",
                    borderRight: isLeft ? "1px solid var(--smoke)" : `4px solid ${step.color}`,
                    width:"100%",
                    boxSizing:"border-box" as const,
                    transition:"background .2s, box-shadow .2s",
                  }}
                    onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background=`${step.color}06`;el.style.boxShadow=`0 4px 20px ${step.color}15`;}}
                    onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background=i%2===0?"#fff":"var(--off-white)";el.style.boxShadow="none";}}
                  >
                    <div className="caption" style={{ color:step.color, fontSize:9, marginBottom:6, letterSpacing:".14em" }}>
                      STEP {step.n}
                    </div>
                    <h3 className="font-display" style={{ fontSize:"clamp(15px,1.8vw,20px)", fontWeight:700, color:"var(--ink)", marginBottom:8, lineHeight:1.25 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize:"clamp(12px,1.1vw,14px)", color:"var(--steel)", lineHeight:1.65, margin:0 }}>
                      {step.body}
                    </p>
                    <div style={{ marginTop:12, height:2, width:36, background:`linear-gradient(90deg,${step.color},transparent)`, marginLeft: isLeft ? 0 : "auto" }}/>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Animated flow diagram */}
        <div className="reveal" style={{ marginBottom:"clamp(32px,4vw,52px)", transitionDelay:".2s" }}>
          <AnimatedFlowDiagram/>
        </div>

        {/* Video placeholder */}
        <div className="reveal" style={{ transitionDelay:".3s" }}>
          <div style={{ background:"#0B1F33", borderRadius:12, padding:"clamp(24px,3vw,40px)", border:"1px solid rgba(204,0,0,.2)", display:"flex", alignItems:"center", justifyContent:"center", gap:14, minHeight:100 }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"rgba(204,0,0,.4)", animation:"hw-blink 1.5s ease-in-out infinite" }}/>
            <span className="font-mono" style={{ fontSize:11, color:"rgba(255,255,255,.3)", letterSpacing:".16em" }}>PROCESS SUMMARY VIDEO · UPLOADING SOON</span>
          </div>
        </div>

      </div>

      <style>{`
        .hw-step         { grid-template-columns:1fr 40px 1fr; }
        .hw-spine        { display:block; }

        @media(max-width:680px){
          .hw-step       { grid-template-columns:1fr !important; }
          .hw-node-col   { display:none !important; }
          .hw-spine      { display:none !important; }
          .hw-img-col,
          .hw-text-col   { order:unset !important; }
        }

        @keyframes hw-spine-pulse { 0%{top:-20%} 100%{top:110%} }
        @keyframes hw-node-pulse  { 0%,100%{box-shadow:0 0 0 3px rgba(0,0,0,.1),0 4px 16px rgba(0,0,0,.2)} 50%{box-shadow:0 0 0 6px rgba(204,0,0,.2),0 4px 20px rgba(204,0,0,.3)} }
        @keyframes hw-blink       { 0%,100%{opacity:1} 50%{opacity:.2} }
      `}</style>
    </section>
  );
}
