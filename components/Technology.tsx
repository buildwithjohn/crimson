"use client";
import { useReveal } from "./useReveal";
import { Wifi, Thermometer, Cpu, Network, Shield, Zap, Activity } from "lucide-react";

const SECTIONS = [
  {
    icon: Wifi, num:"01",
    title:"Autonomous Delivery Infrastructure",
    body:"CrimsonWings deploys a hybrid logistics fleet — drones, cold-chain bikes, and refrigerated vans — moving blood efficiently across Ogun State urban and coastal environments. Each delivery route is dynamically selected based on urgency, volume, and distance.",
    image:"/delivery-execution.jpg",
    imageAlt:"CrimsonWings drone, motorbike and van fleet at hospital",
    points:["Medical drones for urgent last-mile delivery","Cold-chain bikes for medium-range transport","Refrigerated vans for bulk delivery"],
    color:"#CC0000",
    isAnimated: false,
  },
  {
    icon: Thermometer, num:"02",
    title:"Advanced Cold-Chain System",
    body:"From donor collection to final delivery, every unit of blood is preserved under strict temperature-controlled conditions. Our mobile and fixed storage systems maintain cold-chain integrity across every stage.",
    image:"/delivery-execution.jpg",
    imageAlt:"CrimsonWings drone, motorbike and van fleet at hospital",
    points:["Collection drives","Screening centers","Transport vehicles","Central blood bank facilities"],
    color:"#2F80ED",
    isAnimated: false,
  },
  {
    icon: Activity, num:"03",
    title:"Automated Screening & Processing",
    body:"Every blood unit passes through our fully automated NAT diagnostic engine — e801 immunoassay combined with cobas 8800 molecular screening. Zero manual intervention. Maximum precision.",
    image:"",
    imageAlt:"",
    points:["e801 Immunoassay screening","cobas 8800 NAT molecular","Automated sample routing","Zero manual intervention"],
    color:"#CC0000",
    isAnimated: true,
  },
  {
    icon: Cpu, num:"04",
    title:"Intelligent Dispatch & Decision Engine",
    body:"At the core of CrimsonWings is a real-time decision system that instantly matches supply with demand, selects optimal delivery routes, balances inventory across locations, and tracks every unit from donor to patient.",
    image:"/tech-dispatch.jpg",
    imageAlt:"CrimsonWings operations dispatch center",
    points:["Matches supply with demand instantly","Selects optimal delivery routes","Balances inventory across locations","Tracks every unit — donor to patient"],
    color:"#2F80ED",
    isAnimated: false,
  },
  {
    icon: Network, num:"05",
    title:"Connected Infrastructure",
    body:"CrimsonWings operates as a distributed network spanning every stage of blood logistics across Ogun State — built for scale and designed for national impact.",
    image:"/tech-network.jpg",
    imageAlt:"CrimsonWings aerial hub network across Ogun State",
    points:["Donor collection drives","Screening and processing centers","Mobile cold-chain units","Central blood bank operations","Delivery hubs across Ogun State"],
    color:"#CC0000",
    isAnimated: false,
  },
];

/* ── 3D Automation Animation ─────────────────────────────────────────────── */
function AutomationDiagram() {
  const steps = [
    { label:"Sample Intake",        sub:"Controlled donor drive intake",      icon:"🩸" },
    { label:"BLIM Sorting",         sub:"Labeling · Routing · Tracking",      icon:"⚙️" },
    { label:"Centrifuge p671",      sub:"Standardized sample separation",     icon:"🔄" },
    { label:"e801 Immunoassay",     sub:"Serology screening",                 icon:"🧬" },
    { label:"cobas 8800 NAT",       sub:"Molecular diagnostic testing",       icon:"🔬" },
    { label:"Smart Archive p701",   sub:"Traceable sample retention",         icon:"🗄️" },
  ];

  return (
    <div style={{
      background:"linear-gradient(135deg, #0B1F33 0%, #0D2B44 100%)",
      border:"1px solid rgba(204,0,0,.3)",
      padding:"clamp(24px,3vw,40px)",
      position:"relative", overflow:"hidden",
      minHeight:400,
    }}>
      {/* Animated grid */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(204,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(204,0,0,.04) 1px,transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }}/>

      {/* Scan line */}
      <div style={{ position:"absolute", left:0, right:0, height:1.5, background:"linear-gradient(90deg,transparent,rgba(204,0,0,.7),transparent)", animation:"scanLine 4s linear infinite", pointerEvents:"none", zIndex:4 }}/>

      {/* Floating data numbers */}
      {[
        {val:"2,500/hr", top:"8%",  left:"62%"},
        {val:"99.99%",   top:"38%", left:"58%"},
        {val:"≤4hrs",    top:"68%", left:"64%"},
      ].map(d => (
        <div key={d.val} style={{ position:"absolute", top:d.top, left:d.left, fontFamily:"var(--font-mono)", fontSize:10, color:"rgba(204,0,0,.35)", letterSpacing:".12em", animation:"data-flicker 3s ease-in-out infinite", pointerEvents:"none", zIndex:1 }}>
          {d.val}
        </div>
      ))}

      {/* Header */}
      <div style={{ textAlign:"center", marginBottom:24, position:"relative", zIndex:3 }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 16px", background:"rgba(204,0,0,.12)", border:"1px solid rgba(204,0,0,.3)", marginBottom:10 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e", animation:"blink 1.5s ease-in-out infinite" }}/>
          <span className="font-mono" style={{ fontSize:10, color:"rgba(255,255,255,.6)", letterSpacing:".16em" }}>PIPELINE ACTIVE</span>
        </div>
        <div className="caption" style={{ color:"rgba(255,255,255,.3)", fontSize:9 }}>2,500 tubes / hour · Zero manual steps</div>
      </div>

      {/* Two-column layout — left: flow, right: 3D sphere viz */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:16, position:"relative", zIndex:3 }}>

        {/* Steps */}
        <div style={{ position:"relative" }}>
          {/* Animated vertical line */}
          <div style={{ position:"absolute", left:18, top:0, bottom:0, width:2, background:"rgba(204,0,0,.15)", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:"30%", background:"linear-gradient(to bottom,transparent,#CC0000,transparent)", animation:"pulse-down 2s ease-in-out infinite" }}/>
          </div>

          {steps.map((step, i) => (
            <div key={step.label}>
              <div style={{
                display:"flex", alignItems:"center", gap:14,
                padding:"10px 0",
                animation:`fade-up .4s ease-out ${i*.08}s both`,
              }}>
                {/* Node */}
                <div style={{
                  width:36, height:36, borderRadius:"50%", flexShrink:0,
                  background:`rgba(204,0,0,${.12 + i*.04})`,
                  border:`1.5px solid rgba(204,0,0,${.4 + i*.08})`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  zIndex:1, cursor:"default",
                  transition:"transform .2s, box-shadow .2s",
                  fontSize:16,
                }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1.2)";(e.currentTarget as HTMLElement).style.boxShadow="0 0 18px rgba(204,0,0,.8)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="none";}}
                >
                  {step.icon}
                </div>

                <div style={{ flex:1 }}>
                  <div style={{ fontSize:13, fontWeight:600, color:"#fff", marginBottom:2 }}>{step.label}</div>
                  <div className="font-mono" style={{ fontSize:9, color:"rgba(255,255,255,.38)", letterSpacing:".1em" }}>{step.sub}</div>
                </div>

                {/* Activity bars */}
                <div style={{ display:"flex", gap:2, alignItems:"flex-end", height:20 }}>
                  {[4,7,5,9,6].map((h,j) => (
                    <div key={j} style={{
                      width:3, height:h,
                      background:"rgba(204,0,0,.55)",
                      animation:`bar-pulse 1s ease-in-out ${j*.12}s infinite`,
                    }}/>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <div style={{ paddingLeft:11, marginBottom:0 }}>
                  <div style={{
                    width:0, height:0,
                    borderLeft:"7px solid transparent",
                    borderRight:"7px solid transparent",
                    borderTop:"9px solid rgba(204,0,0,.4)",
                    animation:"arrow-pulse 2s ease-in-out infinite",
                    animationDelay:`${i*.15}s`,
                  }}/>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3D Sphere viz */}
        <div style={{ width:90, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:12 }}>
          {/* Rotating 3D rings */}
          <div style={{ position:"relative", width:80, height:80 }}>
            <svg viewBox="0 0 80 80" style={{ width:80, height:80, animation:"spin-slow 8s linear infinite" }}>
              <ellipse cx="40" cy="40" rx="36" ry="12" fill="none" stroke="rgba(204,0,0,.5)" strokeWidth="1.5"/>
              <ellipse cx="40" cy="40" rx="28" ry="36" fill="none" stroke="rgba(47,128,237,.4)" strokeWidth="1.5"/>
              <ellipse cx="40" cy="40" rx="36" ry="20" fill="none" stroke="rgba(204,0,0,.25)" strokeWidth="1" strokeDasharray="4 3"/>
            </svg>
            <div style={{
              position:"absolute", top:"50%", left:"50%",
              transform:"translate(-50%,-50%)",
              width:18, height:18, borderRadius:"50%",
              background:"radial-gradient(circle, #CC0000, #660000)",
              boxShadow:"0 0 12px #CC0000",
            }}/>
          </div>

          {/* Conveyor dots animation */}
          <div style={{ position:"relative", width:80, height:16, overflow:"hidden" }}>
            <div style={{
              position:"absolute", top:"50%", left:0, right:0, height:1.5,
              background:"rgba(204,0,0,.2)",
              transform:"translateY(-50%)",
            }}/>
            {[0,1,2].map(i => (
              <div key={i} style={{
                position:"absolute", top:"50%",
                width:6, height:6, borderRadius:"50%",
                background:"#CC0000",
                transform:"translateY(-50%)",
                boxShadow:"0 0 6px #CC0000",
                animation:`conveyor 2s linear ${i*.66}s infinite`,
              }}/>
            ))}
          </div>

          {/* Stats */}
          {[{v:"99.99%",l:"Accuracy"},{v:"0",l:"Manual steps"}].map(s => (
            <div key={s.l} style={{ textAlign:"center" }}>
              <div className="font-display" style={{ fontSize:14, fontWeight:800, color:"#CC0000", lineHeight:1 }}>{s.v}</div>
              <div className="font-mono" style={{ fontSize:7, color:"rgba(255,255,255,.35)", letterSpacing:".1em", marginTop:2 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ marginTop:20, borderTop:"1px solid rgba(255,255,255,.07)", paddingTop:14, display:"flex", justifyContent:"space-between", position:"relative", zIndex:3, flexWrap:"wrap", gap:8 }}>
        {[{v:"2,500/hr",l:"Throughput"},{v:"NAT+Serology",l:"Dual-Layer"},{v:"≤4hrs",l:"Batch Time"},{v:"Zero",l:"Manual Steps"}].map(s => (
          <div key={s.l} style={{ textAlign:"center" }}>
            <div className="font-display" style={{ fontSize:15, fontWeight:800, color:"#CC0000", lineHeight:1 }}>{s.v}</div>
            <div className="caption" style={{ color:"rgba(255,255,255,.35)", fontSize:8, marginTop:2 }}>{s.l}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scanLine    { 0%{top:-2px} 100%{top:100%} }
        @keyframes pulse-down  { 0%{top:-30%} 100%{top:110%} }
        @keyframes arrow-pulse { 0%,100%{opacity:.4;transform:translateY(0)} 50%{opacity:1;transform:translateY(3px)} }
        @keyframes bar-pulse   { 0%,100%{transform:scaleY(1);opacity:.5} 50%{transform:scaleY(2);opacity:1} }
        @keyframes fade-up     { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
        @keyframes blink       { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes data-flicker{ 0%,100%{opacity:.35} 50%{opacity:.7} }
        @keyframes spin-slow   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes conveyor    { 0%{left:-8px;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{left:calc(100% + 8px);opacity:0} }
      `}</style>
    </div>
  );
}

export default function Technology() {
  const ref = useReveal();

  return (
    <section id="technology" ref={ref} style={{ background:"#0B1F33", paddingBlock:"var(--section-py)", position:"relative", overflow:"hidden" }}>
      <div className="grid-lines-dark" style={{ position:"absolute", inset:0, opacity:.5 }}/>
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:900, height:600, borderRadius:"50%", background:"radial-gradient(ellipse, rgba(204,0,0,.1) 0%, transparent 65%)", pointerEvents:"none" }}/>

      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* Opening */}
        <div style={{ textAlign:"center", maxWidth:800, margin:"0 auto clamp(56px,7vw,96px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>
            <span style={{ color:"rgba(255,255,255,.5)" }}>Automated Blood Intelligence Infrastructure</span>
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"#fff", marginBottom:20 }}>
            CrimsonWings operates a{" "}
            <em style={{ color:"var(--crimson)" }}>fully integrated, automation-driven</em>{" "}
            blood processing and logistics system
          </h2>
          <p className="body-lg reveal delay-2" style={{ color:"rgba(255,255,255,.78)" }}>
            Engineered for speed, safety, and scale.
          </p>
        </div>

        {/* Modules */}
        <div style={{ display:"flex", flexDirection:"column", gap:"clamp(56px,7vw,88px)" }}>
          {SECTIONS.map((s, i) => {
            const rev = i % 2 === 1;
            return (
              <div key={s.num} style={{ display:"grid", gap:"clamp(28px,4vw,56px)", alignItems:"center" }} className="tech-row">

                {/* Text */}
                <div style={{ order: rev ? 2 : 1 }} className={rev ? "reveal-right" : "reveal"}>
                  <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24 }}>
                    <div style={{ width:56, height:56, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:`${s.color}20`, border:`1.5px solid ${s.color}50` }}>
                      <s.icon size={26} style={{ color:s.color }}/>
                    </div>
                    <div>
                      <div className="caption" style={{ color:`${s.color}cc`, marginBottom:5, fontSize:11 }}>Module {s.num}</div>
                      <h3 className="h3 font-display" style={{ color:"#fff", lineHeight:1.2 }}>{s.title}</h3>
                    </div>
                  </div>
                  <p className="body-lg" style={{ color:"rgba(255,255,255,.78)", marginBottom:28 }}>{s.body}</p>
                  <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                    {s.points.map(pt => (
                      <div key={pt} style={{ display:"flex", alignItems:"center", gap:14 }}>
                        <div style={{ width:8, height:8, borderRadius:"50%", background:s.color, flexShrink:0, boxShadow:`0 0 10px ${s.color}` }}/>
                        <span style={{ fontSize:17, color:"rgba(255,255,255,.72)", lineHeight:1.5 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div style={{ order: rev ? 1 : 2 }} className={rev ? "reveal" : "reveal-right"}>
                  {s.isAnimated ? (
                    <AutomationDiagram/>
                  ) : (
                    <div style={{ position:"relative", overflow:"hidden", border:`1px solid ${s.color}40` }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.image} alt={s.imageAlt} style={{ width:"100%", height:"340px", objectFit:"cover", objectPosition:"center", display:"block" }}/>
                      <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:`linear-gradient(90deg, ${s.color}, transparent)`, zIndex:2 }}/>
                      <div style={{ position:"absolute", top:12, right:12, width:28, height:28, borderTop:`2px solid ${s.color}`, borderRight:`2px solid ${s.color}`, zIndex:2 }}/>
                      <div style={{ position:"absolute", bottom:12, left:12, width:28, height:28, borderBottom:`2px solid ${s.color}`, borderLeft:`2px solid ${s.color}`, zIndex:2 }}/>
                      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"12px 16px", background:"linear-gradient(to top, rgba(0,0,0,.7), transparent)", zIndex:2 }}>
                        <span className="caption" style={{ color:"rgba(255,255,255,.7)", fontSize:9 }}>Module {s.num} — {s.title}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing */}
        <div className="reveal" style={{ marginTop:"clamp(64px,8vw,100px)", border:"1px solid rgba(204,0,0,.4)", background:"rgba(204,0,0,.08)", padding:"clamp(40px,5vw,64px)", textAlign:"center", transitionDelay:".3s", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg, var(--crimson), #2F80ED, var(--crimson))" }}/>
          <div style={{ display:"flex", justifyContent:"center", gap:16, flexWrap:"wrap", marginBottom:24 }}>
            {[Shield, Zap, Network].map((Icon, i) => (
              <div key={i} style={{ width:48, height:48, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(204,0,0,.2)", border:"1px solid rgba(204,0,0,.4)" }}>
                <Icon size={22} style={{ color:"var(--crimson)" }}/>
              </div>
            ))}
          </div>
          <h3 className="h3 font-display" style={{ color:"#fff", marginBottom:14 }}>
            A Vertically Integrated Transfusion Technology Platform
          </h3>
          <p style={{ fontSize:19, color:"rgba(255,255,255,.75)", maxWidth:620, margin:"0 auto", fontStyle:"italic" }}>
            Combining automation, diagnostics, and logistics into one continuous blood delivery engine.
          </p>
        </div>
      </div>

      <style>{`@media(min-width:900px){ .tech-row{ grid-template-columns:1fr 1fr !important; } }`}</style>
    </section>
  );
}
