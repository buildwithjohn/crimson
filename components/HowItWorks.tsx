"use client";
import { useEffect, useRef } from "react";
import { useReveal } from "./useReveal";
import NetworkVisual from "./NetworkVisual";

/* ── Workflow steps — compact, image-free, flow-based ─────────────────── */
const STEPS = [
  {
    phase: "COLLECTION",
    color: "#CC0000",
    steps: [
      { n:"01", title:"Blood Collection",        sub:"Donor drives across Ogun State" },
      { n:"02", title:"Controlled Transport",     sub:"Cold-chain van to facility" },
    ],
  },
  {
    phase: "PROCESSING",
    color: "#2F80ED",
    steps: [
      { n:"03", title:"Screening & Processing",   sub:"Automated NAT + serology" },
      { n:"04", title:"Central Blood Bank",       sub:"Digital intake + NAT clearance" },
      { n:"05", title:"Smart Inventory",          sub:"Real-time cold-chain tracking" },
    ],
  },
  {
    phase: "DELIVERY",
    color: "#CC0000",
    steps: [
      { n:"06", title:"Hospital Request",         sub:"Digital order via CrimsonWings" },
      { n:"07", title:"Intelligent Routing",      sub:"Drone / bike / van selected" },
      { n:"08", title:"Automated Dispatch",       sub:"Nearest hub, zero manual delay" },
      { n:"09", title:"Delivery Execution",       sub:"Fleet to hospital endpoint" },
      { n:"10", title:"Verification & Use",       sub:"QR scan + digital release" },
      { n:"11", title:"Traceability",             sub:"Full audit trail, donor to patient" },
    ],
  },
];

/* ── Automation animation for Step 03 ─────────────────────────────────── */
function HowItWorksAutomation({ stepNum, color }: { stepNum: string; color: string }) {
  const steps = [
    { icon:"🩸", label:"Sample Intake",    sub:"Intake from donor drive" },
    { icon:"⚙️", label:"BLIM Sorting",     sub:"Auto labeling & routing" },
    { icon:"🔄", label:"Centrifuge p671",  sub:"Sample separation" },
    { icon:"🧬", label:"e801 Immunoassay", sub:"Serology screening" },
    { icon:"🔬", label:"cobas 8800 NAT",   sub:"Molecular diagnostics" },
  ];
  return (
    <div style={{ background:"linear-gradient(135deg,#0B1F33,#0D2B44)", border:"1px solid rgba(204,0,0,.3)", padding:"clamp(20px,3vw,32px)", minHeight:300, position:"relative", overflow:"hidden", height:"100%" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(204,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(204,0,0,.04) 1px,transparent 1px)", backgroundSize:"24px 24px", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", left:0, right:0, height:1.5, background:"linear-gradient(90deg,transparent,rgba(204,0,0,.6),transparent)", animation:"hw-scan 3s linear infinite", pointerEvents:"none", zIndex:4 }}/>
      <div style={{ position:"absolute", top:14, left:14, background:color, color:"#fff", fontFamily:"var(--font-display)", fontWeight:800, fontSize:14, padding:"5px 14px", zIndex:10 }}>{stepNum}</div>
      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:20, position:"relative", zIndex:3, paddingTop:8 }}>
        <div style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 6px #22c55e", animation:"hw-blink 1.5s ease-in-out infinite" }}/>
        <span className="font-mono" style={{ fontSize:10, color:"rgba(255,255,255,.55)", letterSpacing:".14em" }}>AUTOMATION ACTIVE · 2,500 TUBES/HR</span>
      </div>
      <div style={{ position:"relative", zIndex:3 }}>
        <div style={{ position:"absolute", left:22, top:0, bottom:0, width:2, background:"rgba(204,0,0,.12)", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:"35%", background:"linear-gradient(to bottom,transparent,#CC0000,transparent)", animation:"hw-pulse-down 2.5s ease-in-out infinite" }}/>
        </div>
        {steps.map((step, i) => (
          <div key={step.label}>
            <div style={{ display:"flex", alignItems:"center", gap:14, padding:"10px 0", animation:`hw-fade-up .4s ease-out ${i*.07}s both` }}>
              <div style={{ width:44, height:44, borderRadius:"50%", flexShrink:0, background:`rgba(204,0,0,${.1+i*.04})`, border:"1.5px solid rgba(204,0,0,.5)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, zIndex:1, transition:"transform .2s, box-shadow .2s", cursor:"default" }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1.2)";(e.currentTarget as HTMLElement).style.boxShadow="0 0 16px rgba(204,0,0,.8)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="none";}}
              >{step.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:600, color:"#fff", marginBottom:2 }}>{step.label}</div>
                <div className="font-mono" style={{ fontSize:9, color:"rgba(255,255,255,.35)", letterSpacing:".1em" }}>{step.sub}</div>
              </div>
              <div style={{ display:"flex", gap:2, alignItems:"flex-end", height:18 }}>
                {[3,6,4,8,5].map((h,j) => (
                  <div key={j} style={{ width:3, height:h, background:"rgba(204,0,0,.6)", animation:`hw-bar 1s ease-in-out ${j*.1}s infinite` }}/>
                ))}
              </div>
            </div>
            {i < steps.length-1 && (
              <div style={{ paddingLeft:14 }}>
                <div style={{ width:0, height:0, borderLeft:"6px solid transparent", borderRight:"6px solid transparent", borderTop:"8px solid rgba(204,0,0,.4)", animation:`hw-arrow 2s ease-in-out ${i*.1}s infinite` }}/>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop:16, borderTop:"1px solid rgba(255,255,255,.07)", paddingTop:12, display:"flex", justifyContent:"space-around", position:"relative", zIndex:3, flexWrap:"wrap", gap:8 }}>
        {[{v:"99.99%",l:"Accuracy"},{v:"Zero",l:"Manual Steps"},{v:"NAT+IgM",l:"Dual Layer"}].map(s=>(
          <div key={s.l} style={{ textAlign:"center" }}>
            <div className="font-display" style={{ fontSize:14, fontWeight:800, color:"#CC0000", lineHeight:1 }}>{s.v}</div>
            <div className="font-mono" style={{ fontSize:8, color:"rgba(255,255,255,.35)", letterSpacing:".08em", marginTop:2 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
                  <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:`2px solid rgba(204,0,0,${node.isEnd?.7:.4})`, animation:`fd-ring-expand 2.4s ease-out ${i*0.25}s infinite` }}/>
                  <div style={{ width:56, height:56, borderRadius:"50%", background:node.isEnd?"linear-gradient(135deg,#CC0000,#880000)":"linear-gradient(135deg,#162040,#0D1830)", border:`2px solid ${node.isEnd?"#CC0000":"rgba(204,0,0,.5)"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, boxShadow:node.isEnd?"0 0 20px rgba(204,0,0,.5)":"0 0 12px rgba(204,0,0,.2)", animation:`fd-node-pulse 3s ease-in-out ${i*.3}s infinite`, position:"relative", zIndex:2, cursor:"default" }}
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
                  <div style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", width:10, height:10, borderRadius:"50%", background:"#CC0000", boxShadow:"0 0 12px rgba(204,0,0,.9)", animation:`fd-particle ${1.2-i*.08}s linear ${i*.15}s infinite`, zIndex:2 }}/>
                  <div style={{ position:"absolute", top:"50%", transform:"translateY(-50%)", width:6, height:6, borderRadius:"50%", background:"rgba(204,0,0,.6)", boxShadow:"0 0 8px rgba(204,0,0,.6)", animation:`fd-particle ${1.2-i*.08}s linear ${i*.15+0.3}s infinite`, zIndex:2 }}/>
                  <div style={{ position:"absolute", right:0, top:"50%", transform:"translateY(-50%)", width:0, height:0, borderTop:"5px solid transparent", borderBottom:"5px solid transparent", borderLeft:"8px solid rgba(204,0,0,.6)", animation:`fd-arrow-pulse 1.5s ease-in-out ${i*.1}s infinite`, zIndex:3 }}/>
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
        @keyframes fd-scan        { 0%{top:-2px} 100%{top:100%} }
        @keyframes fd-blink       { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes fd-ring-expand { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.7);opacity:0} }
        @keyframes fd-node-pulse  { 0%,100%{box-shadow:0 0 12px rgba(204,0,0,.2)} 50%{box-shadow:0 0 24px rgba(204,0,0,.5)} }
        @keyframes fd-particle    { 0%{left:0;opacity:0} 8%{opacity:1} 92%{opacity:1} 100%{left:100%;opacity:0} }
        @keyframes fd-dash        { from{background-position:0 0} to{background-position:34px 0} }
        @keyframes fd-arrow-pulse { 0%,100%{opacity:.6;transform:translateY(-50%)} 50%{opacity:1;transform:translateY(-50%) translateX(3px)} }
      `}</style>
    </div>
  );
}

/* ── Video player (for later upload) ─────────────────────────────────── */
function HowItWorksVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true; v.playsInline = true; v.loop = true;
    v.play().catch(() => {
      const resume = () => { v.play(); document.removeEventListener("click", resume); };
      document.addEventListener("click", resume);
    });
  }, []);
  return (
    <div style={{ position:"relative", background:"#000", overflow:"hidden", borderRadius:12, border:"1px solid rgba(204,0,0,.2)" }}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:3, zIndex:3, background:"linear-gradient(90deg,#CC0000,#2F80ED,#CC0000)" }}/>
      <video ref={videoRef} muted loop playsInline preload="auto" style={{ width:"100%", display:"block", maxHeight:480, objectFit:"cover" }}>
        <source src="/how-it-works.mp4" type="video/mp4"/>
      </video>
      <div style={{ position:"absolute", inset:0, zIndex:2, pointerEvents:"none", background:"radial-gradient(ellipse at center,transparent 60%,rgba(0,0,0,.5) 100%)" }}/>
    </div>
  );
}

export default function HowItWorks() {
  const ref = useReveal();
  return (
    <section id="how-it-works" ref={ref} style={{ background:"#FFFFFF", paddingBlock:"var(--section-py)", position:"relative", overflow:"hidden" }}>
      <div className="grid-dots" style={{ position:"absolute", inset:0 }}/>
      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:640, margin:"0 auto clamp(32px,4vw,52px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:16 }}>End-to-End Process</div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:16 }}>
            From <em style={{ color:"var(--crimson)" }}>Donor</em> to Patient —{" "}
            <em style={{ color:"var(--crimson)" }}>A Seamless Flow</em>
          </h2>
          <p className="body-md reveal delay-2" style={{ color:"var(--steel)" }}>
            Every unit tracked from collection to bedside. Eleven steps. Zero manual gaps.
          </p>
        </div>

        {/* ── Compact workflow — 3 phase columns ── */}
        <div className="reveal" style={{ marginBottom:"clamp(32px,4vw,52px)", transitionDelay:".1s" }}>
          <div style={{ display:"grid", gap:2, alignItems:"stretch" }} className="hw-phases">
            {STEPS.map((phase, pi) => (
              <div key={phase.phase} style={{
                background: pi===1 ? "#0B1F33" : "#fff",
                border:`1px solid ${pi===1?"rgba(204,0,0,.25)":"rgba(204,0,0,.1)"}`,
                borderRadius:12, overflow:"hidden",
              }}>
                {/* Phase header */}
                <div style={{
                  background: phase.color,
                  padding:"8px 16px",
                  display:"flex", alignItems:"center", gap:8,
                }}>
                  <div style={{ width:6, height:6, borderRadius:"50%", background:"rgba(255,255,255,.6)", animation:"hw-blink 1.8s ease-in-out infinite" }}/>
                  <span className="font-mono" style={{ fontSize:9, fontWeight:700, color:"#fff", letterSpacing:".18em" }}>{phase.phase}</span>
                </div>

                {/* Steps in phase */}
                <div style={{ padding:"12px 14px", display:"flex", flexDirection:"column", gap:0, position:"relative" }}>
                  {/* Vertical connector line */}
                  <div style={{ position:"absolute", left:24, top:0, bottom:0, width:1, background:`${phase.color}20` }}/>

                  {phase.steps.map((step, si) => (
                    <div key={step.n}>
                      <div style={{
                        display:"flex", alignItems:"center", gap:10,
                        padding:"8px 0",
                        position:"relative", zIndex:1,
                      }}>
                        {/* Step circle */}
                        <div style={{
                          width:24, height:24, borderRadius:"50%", flexShrink:0,
                          background: pi===1 ? `${phase.color}30` : `${phase.color}10`,
                          border:`1.5px solid ${phase.color}`,
                          display:"flex", alignItems:"center", justifyContent:"center",
                        }}>
                          <span className="font-mono" style={{ fontSize:8, fontWeight:700, color:phase.color }}>{step.n}</span>
                        </div>
                        {/* Text */}
                        <div>
                          <div style={{ fontSize:12, fontWeight:700, color:pi===1?"#fff":"var(--ink)", lineHeight:1.2 }}>{step.title}</div>
                          <div style={{ fontSize:10, color:pi===1?"rgba(255,255,255,.45)":"var(--steel-light)", lineHeight:1.3 }}>{step.sub}</div>
                        </div>
                        {/* Automation marker for step 03 */}
                        {step.n==="03" && (
                          <div style={{ marginLeft:"auto", padding:"2px 8px", background:"rgba(204,0,0,.15)", border:"1px solid rgba(204,0,0,.3)", flexShrink:0 }}>
                            <span className="font-mono" style={{ fontSize:7, color:"#CC0000", letterSpacing:".1em" }}>AUTO</span>
                          </div>
                        )}
                      </div>
                      {/* Connector arrow between steps in same phase */}
                      {si < phase.steps.length-1 && (
                        <div style={{ paddingLeft:10, marginBottom:0 }}>
                          <div style={{ width:0, height:0, borderLeft:"4px solid transparent", borderRight:"4px solid transparent", borderTop:`5px solid ${phase.color}40` }}/>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Phase flow arrows between columns */}
          <style>{`
            @media(min-width:700px){
              .hw-phases{ grid-template-columns:1fr auto 1fr auto 1fr !important; }
            }
          `}</style>
        </div>

        {/* ── Animated flow diagram ── */}
        <div className="reveal" style={{ marginBottom:"clamp(32px,4vw,52px)", transitionDelay:".2s" }}>
          <AnimatedFlowDiagram/>
        </div>

        {/* ── Video summary (placeholder — upload how-it-works.mp4) ── */}
        <div className="reveal" style={{ transitionDelay:".3s" }}>
          <div style={{ background:"var(--off-white)", border:"1px solid var(--smoke)", borderRadius:12, padding:"clamp(24px,3vw,40px)", textAlign:"center" }}>
            <div className="caption" style={{ color:"var(--crimson)", marginBottom:10, fontSize:10 }}>Process Summary</div>
            <h3 className="font-display" style={{ fontSize:"clamp(18px,2.2vw,26px)", fontWeight:700, color:"var(--ink)", marginBottom:8 }}>
              See It In Action
            </h3>
            <p className="body-md" style={{ color:"var(--steel)", marginBottom:20 }}>
              Full end-to-end process video — uploading soon.
            </p>
            <div style={{ background:"#0B1F33", borderRadius:10, padding:"48px 24px", border:"1px solid rgba(204,0,0,.2)", display:"flex", alignItems:"center", justifyContent:"center", gap:12 }}>
              <div style={{ width:8, height:8, borderRadius:"50%", background:"rgba(204,0,0,.4)", animation:"hw-blink 1.5s ease-in-out infinite" }}/>
              <span className="font-mono" style={{ fontSize:11, color:"rgba(255,255,255,.3)", letterSpacing:".16em" }}>VIDEO UPLOAD PENDING</span>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes hw-scan       { 0%{top:-2px} 100%{top:100%} }
          @keyframes hw-blink      { 0%,100%{opacity:1} 50%{opacity:.2} }
          @keyframes hw-pulse-down { 0%{top:-35%} 100%{top:110%} }
          @keyframes hw-bar        { 0%,100%{transform:scaleY(1);opacity:.5} 50%{transform:scaleY(2);opacity:1} }
          @keyframes hw-arrow      { 0%,100%{opacity:.4;transform:translateY(0)} 50%{opacity:1;transform:translateY(3px)} }
          @keyframes hw-fade-up    { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
        `}</style>
      </div>
    </section>
  );
}
