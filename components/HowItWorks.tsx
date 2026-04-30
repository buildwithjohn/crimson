"use client";
import { useReveal } from "./useReveal";

const STEPS = [
  { n:"01", title:"Blood Collection",         body:"Donor drives across Ogun State",           image:"/phase-01.png",           color:"#CC0000" },
  { n:"02", title:"Controlled Transport",      body:"Cold-chain van to facility",               image:"/new-tech-delivery.jpg",  color:"#2F80ED" },
  { n:"03", title:"Screening & Processing",   body:"Automated NAT + serology",                 image:"/phase-02.png",           color:"#CC0000" },
  { n:"04", title:"Central Blood Bank",        body:"Digital intake + NAT clearance",          image:"/central-bloodbank.png",  color:"#2F80ED" },
  { n:"05", title:"Smart Inventory",           body:"Real-time cold-chain tracking",           image:"/smart-inventory.jpg",    color:"#CC0000" },
  { n:"06", title:"Hospital Request",          body:"Digital order via CrimsonWings",          image:"/hospital-request.jpg",   color:"#2F80ED" },
  { n:"07", title:"Intelligent Routing",       body:"Drone / bike / van selected",             image:"/intelligent-routing.jpg",color:"#CC0000" },
  { n:"08", title:"Automated Dispatch",        body:"Nearest hub, zero manual delay",          image:"/tech-dispatch.jpg",      color:"#2F80ED" },
  { n:"09", title:"Delivery Execution",        body:"Fleet to hospital endpoint",              image:"/delivery-execution.jpg", color:"#CC0000" },
  { n:"10", title:"Verification & Use",        body:"QR scan + digital release",               image:"/phase-06.png",           color:"#2F80ED" },
  { n:"11", title:"Traceability",              body:"Full audit trail, donor to patient",      image:"/tech-network.jpg",       color:"#CC0000" },
];

/* Duplicate for seamless infinite loop */
const TRACK = [...STEPS, ...STEPS];

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
    <div style={{ background:"linear-gradient(135deg,#060D1A 0%,#0B1F33 60%,#0D1520 100%)", border:"1px solid rgba(204,0,0,.2)", borderRadius:16, padding:"clamp(24px,3.5vw,40px) clamp(16px,3vw,32px)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(204,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(204,0,0,.04) 1px,transparent 1px)", backgroundSize:"32px 32px", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", left:0, right:0, height:1.5, background:"linear-gradient(90deg,transparent,rgba(204,0,0,.5),transparent)", animation:"fd-scan 7s linear infinite", pointerEvents:"none", zIndex:5 }}/>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:22, position:"relative", zIndex:4, flexWrap:"wrap", gap:8 }}>
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
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:8, flexShrink:0 }}>
                <div style={{ position:"relative", width:60, height:60, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:`2px solid rgba(204,0,0,${node.isEnd?.7:.4})`, animation:`fd-ring 2.4s ease-out ${i*0.25}s infinite` }}/>
                  <div style={{ width:48, height:48, borderRadius:"50%", background:node.isEnd?"linear-gradient(135deg,#CC0000,#880000)":"linear-gradient(135deg,#162040,#0D1830)", border:`2px solid ${node.isEnd?"#CC0000":"rgba(204,0,0,.5)"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, boxShadow:node.isEnd?"0 0 16px rgba(204,0,0,.5)":"0 0 10px rgba(204,0,0,.2)", animation:`fd-pulse 3s ease-in-out ${i*.3}s infinite`, position:"relative", zIndex:2, transition:"transform .2s" }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1.15)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";}}
                  >{node.emoji}</div>
                </div>
                <div className="caption" style={{ fontSize:8, color:node.isEnd?"rgba(255,255,255,.75)":"rgba(255,255,255,.45)", textAlign:"center", letterSpacing:".08em", fontWeight:node.isEnd?700:400 }}>{node.label}</div>
              </div>
              {i < nodes.length-1 && (
                <div style={{ flex:1, minWidth:10, height:48, position:"relative", display:"flex", alignItems:"center", margin:"0 2px", marginBottom:22 }}>
                  <div style={{ position:"absolute", left:0, right:0, top:"50%", transform:"translateY(-50%)", height:2, background:"rgba(204,0,0,.15)", overflow:"hidden" }}>
                    <div style={{ position:"absolute", inset:0, background:"repeating-linear-gradient(90deg,rgba(204,0,0,.5) 0,rgba(204,0,0,.5) 5px,transparent 5px,transparent 12px)", animation:`fd-dash ${1.2-i*.08}s linear infinite` }}/>
                  </div>
                  <div style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", width:8, height:8, borderRadius:"50%", background:"#CC0000", boxShadow:"0 0 10px rgba(204,0,0,.9)", animation:`fd-dot ${1.2-i*.08}s linear ${i*.15}s infinite`, zIndex:2 }}/>
                  <div style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", width:5, height:5, borderRadius:"50%", background:"rgba(204,0,0,.6)", animation:`fd-dot ${1.2-i*.08}s linear ${i*.15+0.3}s infinite`, zIndex:2 }}/>
                  <div style={{ position:"absolute", right:0, top:"50%", transform:"translateY(-50%)", width:0, height:0, borderTop:"4px solid transparent", borderBottom:"4px solid transparent", borderLeft:"6px solid rgba(204,0,0,.6)", zIndex:3 }}/>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display:"flex", justifyContent:"center", gap:"clamp(16px,4vw,48px)", marginTop:18, paddingTop:14, borderTop:"1px solid rgba(255,255,255,.06)", position:"relative", zIndex:4, flexWrap:"wrap" }}>
        {[{val:"11",l:"Steps"},{val:"<60m",l:"Donor to Patient"},{val:"100%",l:"Tracked"},{val:"Zero",l:"Manual Gaps"}].map(s=>(
          <div key={s.l} style={{ textAlign:"center" }}>
            <div className="font-display" style={{ fontSize:"clamp(15px,1.8vw,20px)", fontWeight:800, color:"#CC0000", lineHeight:1 }}>{s.val}</div>
            <div className="caption" style={{ color:"rgba(255,255,255,.3)", fontSize:8, marginTop:3 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fd-scan  { 0%{top:-2px} 100%{top:100%} }
        @keyframes fd-blink { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes fd-ring  { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.65);opacity:0} }
        @keyframes fd-pulse { 0%,100%{box-shadow:0 0 10px rgba(204,0,0,.2)} 50%{box-shadow:0 0 22px rgba(204,0,0,.5)} }
        @keyframes fd-dot   { 0%{left:0;opacity:0} 8%{opacity:1} 92%{opacity:1} 100%{left:100%;opacity:0} }
        @keyframes fd-dash  { from{background-position:0 0} to{background-position:34px 0} }
      `}</style>
    </div>
  );
}

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section id="how-it-works" ref={ref} style={{ background:"#fff", paddingBlock:"var(--section-py)", position:"relative", overflow:"hidden" }}>
      <div className="grid-dots" style={{ position:"absolute", inset:0 }}/>

      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:580, margin:"0 auto clamp(32px,4vw,52px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:14 }}>End-to-End Process</div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:12 }}>
            From <em style={{ color:"var(--crimson)" }}>Donor</em> to Patient —{" "}
            <em style={{ color:"var(--crimson)" }}>A Seamless Flow</em>
          </h2>
          <p className="body-md reveal delay-2" style={{ color:"var(--steel)" }}>
            Eleven steps. Zero manual gaps. Every unit tracked from collection to bedside.
          </p>
        </div>

        {/* ── MOVING TRAIN — Track 1 (left to right) ── */}
        <div className="reveal" style={{ marginBottom:4, transitionDelay:".1s" }}>

          {/* Track label */}
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12, paddingLeft:4 }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"#CC0000", boxShadow:"0 0 8px rgba(204,0,0,.7)", animation:"hw-blink 1.5s ease-in-out infinite" }}/>
            <span className="font-mono" style={{ fontSize:9, color:"var(--steel-light)", letterSpacing:".14em" }}>COLLECTION → PROCESSING → DELIVERY</span>
          </div>

          {/* Dark track rail */}
          <div style={{ background:"#0B1F33", borderRadius:12, padding:"8px 0", position:"relative", overflow:"hidden" }}>
            {/* Top rail line */}
            <div style={{ position:"absolute", top:6, left:0, right:0, height:1, background:"rgba(204,0,0,.15)" }}/>
            {/* Bottom rail line */}
            <div style={{ position:"absolute", bottom:6, left:0, right:0, height:1, background:"rgba(204,0,0,.15)" }}/>

            {/* Moving cards — Track 1 */}
            <div style={{ display:"flex", gap:12, animation:"hw-train-left 55s linear infinite", width:"max-content", padding:"12px 12px" }}>
              {TRACK.map((step, i) => (
                <div key={`${step.n}-${i}`} style={{
                  flexShrink:0,
                  width:200,
                  background:"rgba(255,255,255,.04)",
                  border:`1px solid ${step.color}35`,
                  borderRadius:10,
                  overflow:"hidden",
                  transition:"transform .2s, border-color .2s",
                  cursor:"default",
                }}
                  onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="scale(1.04)";el.style.borderColor=step.color;}}
                  onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="none";el.style.borderColor=`${step.color}35`;}}
                >
                  {/* Image */}
                  <div style={{ position:"relative", height:130, overflow:"hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.image} alt={step.title} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }}/>
                    <div style={{ position:"absolute", inset:0, background:`linear-gradient(to top, ${step.color}cc 0%, transparent 55%)` }}/>
                    {/* Step badge */}
                    <div style={{ position:"absolute", top:8, left:8, background:step.color, color:"#fff", fontFamily:"var(--font-mono)", fontWeight:700, fontSize:9, padding:"3px 8px", borderRadius:4 }}>
                      {step.n}
                    </div>
                    {/* Title over image */}
                    <div style={{ position:"absolute", bottom:8, left:8, right:8 }}>
                      <div className="font-display" style={{ fontSize:13, fontWeight:700, color:"#fff", lineHeight:1.25 }}>{step.title}</div>
                    </div>
                  </div>
                  {/* Body */}
                  <div style={{ padding:"10px 12px" }}>
                    <p style={{ fontSize:11, color:"rgba(255,255,255,.5)", lineHeight:1.55, margin:0 }}>{step.body}</p>
                    <div style={{ marginTop:8, height:2, width:24, background:`linear-gradient(90deg,${step.color},transparent)`, borderRadius:1 }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MOVING TRAIN — Track 2 (right to left, slightly slower) ── */}
        <div className="reveal" style={{ marginBottom:"clamp(32px,4vw,52px)", transitionDelay:".15s" }}>
          <div style={{ background:"#0B1F33", borderRadius:12, padding:"8px 0", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:6, left:0, right:0, height:1, background:"rgba(47,128,237,.15)" }}/>
            <div style={{ position:"absolute", bottom:6, left:0, right:0, height:1, background:"rgba(47,128,237,.15)" }}/>

            {/* Moving cards — Track 2 reversed + offset */}
            <div style={{ display:"flex", gap:12, animation:"hw-train-right 65s linear infinite", width:"max-content", padding:"12px 12px" }}>
              {[...STEPS].reverse().concat([...STEPS].reverse()).map((step, i) => (
                <div key={`r-${step.n}-${i}`} style={{
                  flexShrink:0,
                  width:200,
                  background:"rgba(255,255,255,.04)",
                  border:`1px solid ${step.color}35`,
                  borderRadius:10,
                  overflow:"hidden",
                  transition:"transform .2s, border-color .2s",
                  cursor:"default",
                }}
                  onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="scale(1.04)";el.style.borderColor=step.color;}}
                  onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="none";el.style.borderColor=`${step.color}35`;}}
                >
                  <div style={{ position:"relative", height:130, overflow:"hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.image} alt={step.title} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }}/>
                    <div style={{ position:"absolute", inset:0, background:`linear-gradient(to top, ${step.color}cc 0%, transparent 55%)` }}/>
                    <div style={{ position:"absolute", top:8, left:8, background:step.color, color:"#fff", fontFamily:"var(--font-mono)", fontWeight:700, fontSize:9, padding:"3px 8px", borderRadius:4 }}>
                      {step.n}
                    </div>
                    <div style={{ position:"absolute", bottom:8, left:8, right:8 }}>
                      <div className="font-display" style={{ fontSize:13, fontWeight:700, color:"#fff", lineHeight:1.25 }}>{step.title}</div>
                    </div>
                  </div>
                  <div style={{ padding:"10px 12px" }}>
                    <p style={{ fontSize:11, color:"rgba(255,255,255,.5)", lineHeight:1.55, margin:0 }}>{step.body}</p>
                    <div style={{ marginTop:8, height:2, width:24, background:`linear-gradient(90deg,${step.color},transparent)`, borderRadius:1 }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated flow diagram */}
        <div className="reveal" style={{ marginBottom:"clamp(28px,4vw,48px)", transitionDelay:".2s" }}>
          <AnimatedFlowDiagram/>
        </div>

        {/* Video placeholder */}
        <div className="reveal" style={{ transitionDelay:".3s" }}>
          <div style={{ background:"#0B1F33", borderRadius:12, padding:"clamp(20px,3vw,36px)", border:"1px solid rgba(204,0,0,.2)", display:"flex", alignItems:"center", justifyContent:"center", gap:14, minHeight:80 }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:"rgba(204,0,0,.4)", animation:"hw-blink 1.5s ease-in-out infinite" }}/>
            <span className="font-mono" style={{ fontSize:11, color:"rgba(255,255,255,.3)", letterSpacing:".16em" }}>PROCESS SUMMARY VIDEO · UPLOADING SOON</span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes hw-train-left  {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes hw-train-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes hw-blink { 0%,100%{opacity:1} 50%{opacity:.2} }
      `}</style>
    </section>
  );
}
