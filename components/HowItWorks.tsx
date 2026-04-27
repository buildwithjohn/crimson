"use client";
import { useReveal } from "./useReveal";
import NetworkVisual from "./NetworkVisual";
import { Users, Truck, FlaskConical, Building2, Package, Hospital, Cpu, Zap, Wind, CheckCircle2, BarChart3 } from "lucide-react";

/*
  FINAL IMAGE MAP — all confirmed:
  Step 01 Blood Collection      → phase-01.png       ✅ nurse + donor
  Step 02 Controlled Transport  → new-tech-delivery.jpg ✅ CrimsonWings van Lagos streets
  Step 03 Screening             → phase-02.png       ✅ lab scientist NAT machine
  Step 04 Central Blood Bank    → new-tech-coldchain.png ✅ CrimsonWings branded cold storage
  Step 05 Smart Inventory       → phase-04.png       ✅ logistics dashboard
  Step 06 Hospital Request      → hospital-request.jpg ✅ doctor tablet blood request
  Step 07 Intelligent Routing   → phase-04.png       ✅ dashboard (reuse)
  Step 08 Automated Dispatch    → tech-dispatch.jpg  ✅ CrimsonWings dispatch centre
  Step 09 Delivery Execution    → phase-05.png       ✅ drone over Lagos
  Step 10 Verification & Use    → phase-06.png       ✅ nurse QR scan
  Step 11 Traceability          → tech-network.jpg   ✅ aerial Lagos hub network
*/

const STEPS = [
  { num:"01", icon:Users,        title:"Blood Collection",               body:"Blood is collected through large-scale CrimsonWings donor drives and partner collection centers across Lagos.",                                                                                                         image:"/phase-01.png",           color:"#CC0000" },
  { num:"02", icon:Truck,        title:"Controlled Transport",           body:"Collected units are immediately secured in temperature-controlled CrimsonWings cold-chain vans for safe movement to screening facilities.",                                                                             image:"/delivery-execution.jpg",  color:"#2F80ED" },
  { num:"03", icon:FlaskConical, title:"Screening & Processing",         body:"Blood is transported to Ogun State-approved screening centers and CrimsonWings facilities for initial screening and component processing.",                                                                           image:"",                        color:"#CC0000", isAutomation:true },
  { num:"04", icon:Building2,    title:"Central Blood Bank Integration", body:"All units transfer to the CrimsonWings HQ Blood Bank where inventory is logged digitally, advanced NAT screening is conducted, and units are cleared for safe medical use.",                                                                                                           image:"/central-bloodbank.png", color:"#2F80ED" },
  { num:"05", icon:Package,      title:"Smart Inventory Management",     body:"Every unit is stored within a controlled cold-chain system and tracked in real time across the entire CrimsonWings network.",                                                                                                         image:"/smart-inventory.jpg",           color:"#CC0000" },
  { num:"06", icon:Hospital,     title:"Hospital Request",               body:"Hospitals and healthcare providers place requests through the CrimsonWings system — directly connected to our real-time inventory.",                                                                                   image:"/hospital-request.jpg",   color:"#2F80ED" },
  { num:"07", icon:Cpu,          title:"Intelligent Routing",            body:"The system automatically selects the best delivery method — drone for urgent small-volume, cold-chain bikes for medium range, cold-chain vans for bulk delivery.",                                                                         image:"/intelligent-routing.jpg",      color:"#CC0000" },
  { num:"08", icon:Zap,          title:"Automated Dispatch",             body:"Orders are processed through a decision engine that triggers immediate dispatch from the nearest hub or storage location — no manual delay.",                                                                          image:"/tech-dispatch.jpg",      color:"#2F80ED" },
  { num:"09", icon:Wind,         title:"Delivery Execution",             body:"Blood is transported via the selected logistics channel — drone, cold-chain bike, or van — and delivered directly to hospitals or designated endpoints.",                                                                              image:"/delivery-execution.jpg",       color:"#CC0000" },
  { num:"10", icon:CheckCircle2, title:"Verification & Use",             body:"Upon arrival, units are verified, logged as received in the CrimsonWings system, and released immediately for medical use.",                                                                                          image:"/phase-06.png",           color:"#2F80ED" },
  { num:"11", icon:BarChart3,    title:"Traceability & Reporting",       body:"Every unit remains traceable from donor to patient — enabling full audit trails, regulatory compliance, and data-driven system optimization.",                                                                         image:"/tech-network.jpg",       color:"#CC0000" },
];

const FLOW = [
  {icon:Users,        label:"Donor Drive"},
  {icon:Truck,        label:"Van"},
  {icon:FlaskConical, label:"Screening"},
  {icon:Building2,    label:"HQ Lab"},
  {icon:Package,      label:"Storage"},
  {icon:Hospital,     label:"Request"},
  {icon:Cpu,          label:"Dispatch"},
  {icon:Wind,         label:"Delivery"},
  {icon:CheckCircle2, label:"Hospital"},
];



/* ── 3D Network Map — Ogun State + 9 Partner States ─────────────────────── */
function NetworkMap3D({ stepNum, color }: { stepNum: string; color: string }) {
  // Centre = Ogun State. 8 outer nodes = partner states arranged in ellipse
  // for 3D perspective feel (larger/closer at bottom, smaller/farther at top)
  const CENTRE = { x: 200, y: 195, r: 22, label: "OGUN STATE", sub: "HQ HUB" };

  const STATES = [
    { x: 200, y:  52, label: "Cross River",  r: 9,  delay: "0s",    dur: "2.8s" },
    { x: 320, y:  90, label: "Edo",          r: 10, delay: "0.3s",  dur: "2.4s" },
    { x: 365, y: 175, label: "Delta",        r: 11, delay: "0.6s",  dur: "2.2s" },
    { x: 320, y: 265, label: "Rivers",       r: 12, delay: "0.9s",  dur: "2.0s" },
    { x: 200, y: 315, label: "Bayelsa",      r: 13, delay: "1.2s",  dur: "2.5s" },
    { x:  80, y: 265, label: "Akwa Ibom",    r: 12, delay: "0.9s",  dur: "2.3s" },
    { x:  35, y: 175, label: "Ondo",         r: 11, delay: "0.6s",  dur: "2.6s" },
    { x:  80, y:  90, label: "Lagos",        r: 10, delay: "0.3s",  dur: "2.1s" },
    { x: 200, y: 135, label: "Ogun North",   r: 9,  delay: "0.15s", dur: "2.7s" },
  ];

  return (
    <div style={{
      background: "linear-gradient(160deg, #050D1A 0%, #0B1F33 50%, #0D1527 100%)",
      position: "relative", overflow: "hidden", minHeight: 340,
      borderTop: `3px solid ${color}`,
    }}>
      {/* Step badge */}
      <div style={{ position:"absolute", top:14, left:14, background:color, color:"#fff", fontFamily:"var(--font-display)", fontWeight:800, fontSize:14, padding:"5px 14px", zIndex:10 }}>
        {stepNum}
      </div>

      {/* Scan line */}
      <div style={{ position:"absolute", left:0, right:0, height:1.5, background:"linear-gradient(90deg,transparent,rgba(204,0,0,.5),transparent)", animation:"nw-scan 6s linear infinite", pointerEvents:"none", zIndex:5 }}/>

      {/* 3D floor grid — perspective lines converging to horizon */}
      <svg viewBox="0 0 400 370" style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:.18 }}>
        {/* Horizontal grid lines — closer = taller gap (3D floor effect) */}
        {[320, 290, 262, 237, 215, 196, 180].map((y, i) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#CC0000" strokeWidth={0.5 + i * 0.1}/>
        ))}
        {/* Vertical grid lines converging to vanishing point at top-centre */}
        {[-200, -80, 0, 80, 160, 240, 340, 420, 500, 580].map((x, i) => (
          <line key={x} x1={x} y1="370" x2="200" y2="60" stroke="#CC0000" strokeWidth="0.4"/>
        ))}
      </svg>

      {/* Atmosphere glow behind centre */}
      <div style={{ position:"absolute", top:"45%", left:"50%", transform:"translate(-50%,-50%)", width:240, height:180, borderRadius:"50%", background:"radial-gradient(ellipse, rgba(204,0,0,.18) 0%, transparent 70%)", pointerEvents:"none", zIndex:1 }}/>

      {/* Main SVG */}
      <svg viewBox="0 0 400 370" style={{ position:"relative", zIndex:3, width:"100%", height:"auto", display:"block" }}>
        <defs>
          <radialGradient id="nw-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CC0000" stopOpacity="1"/>
            <stop offset="60%" stopColor="#880000" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#CC0000" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="nw-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CC0000" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#CC0000" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="nw-floor" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#CC0000" stopOpacity="0.06"/>
            <stop offset="100%" stopColor="#CC0000" stopOpacity="0"/>
          </radialGradient>
          <filter id="nw-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="nw-glow-soft" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Floor glow ellipse — 3D ground plane */}
        <ellipse cx="200" cy="310" rx="180" ry="40" fill="url(#nw-floor)"/>

        {/* Shadow lines from nodes to floor — 3D depth */}
        {STATES.map((s, i) => (
          <line key={"sh"+i} x1={s.x} y1={s.y + s.r} x2={s.x} y2={315}
            stroke="rgba(204,0,0,.08)" strokeWidth="1" strokeDasharray="2 3"/>
        ))}
        <line x1={CENTRE.x} y1={CENTRE.y + CENTRE.r} x2={CENTRE.x} y2={315}
          stroke="rgba(204,0,0,.15)" strokeWidth="2" strokeDasharray="3 4"/>

        {/* Elliptical orbit ring — 3D perspective */}
        <ellipse cx="200" cy="185" rx="170" ry="100"
          fill="none" stroke="rgba(204,0,0,.1)" strokeWidth="1.5" strokeDasharray="6 4"
          style={{ animation:"nw-orbit-spin 20s linear infinite" }}/>

        {/* Connection lines from centre to each state */}
        {STATES.map((s, i) => (
          <g key={"line"+i}>
            {/* Shadow line */}
            <line x1={CENTRE.x} y1={CENTRE.y} x2={s.x} y2={s.y}
              stroke="rgba(0,0,0,.3)" strokeWidth="2.5" transform="translate(2,2)"/>
            {/* Main line */}
            <line x1={CENTRE.x} y1={CENTRE.y} x2={s.x} y2={s.y}
              stroke={`rgba(204,0,0,${0.15 + i * 0.02})`} strokeWidth="1.5"
              strokeDasharray="5 4"/>
            {/* Animated flow */}
            <line x1={CENTRE.x} y1={CENTRE.y} x2={s.x} y2={s.y}
              stroke="rgba(204,0,0,.8)" strokeWidth="1.5"
              strokeDasharray="10 50"
              style={{ animation:`nw-flow ${s.dur} linear ${s.delay} infinite` }}/>
          </g>
        ))}

        {/* State nodes */}
        {STATES.map((s, i) => (
          <g key={"node"+i}>
            {/* 3D shadow disc */}
            <ellipse cx={s.x} cy={s.y + s.r * 0.6} rx={s.r * 1.2} ry={s.r * 0.35}
              fill="rgba(0,0,0,.25)"/>
            {/* Glow halo */}
            <circle cx={s.x} cy={s.y} r={s.r * 2.5} fill="url(#nw-node)" opacity="0.5"
              style={{ animation:`nw-halo-pulse ${s.dur} ease-in-out ${s.delay} infinite` }}/>
            {/* Outer ring */}
            <circle cx={s.x} cy={s.y} r={s.r + 5}
              fill="none" stroke="rgba(204,0,0,.35)" strokeWidth="1"
              strokeDasharray={`${(s.r+5)*0.4} ${(s.r+5)*0.3}`}
              style={{ animation:`nw-ring-spin ${parseFloat(s.dur)*2}s linear ${s.delay} infinite` }}/>
            {/* Main sphere — 3D gradient */}
            <circle cx={s.x} cy={s.y} r={s.r}
              fill="rgba(204,0,0,.75)" filter="url(#nw-glow)"/>
            {/* Specular highlight */}
            <circle cx={s.x - s.r * 0.3} cy={s.y - s.r * 0.3} r={s.r * 0.35}
              fill="rgba(255,255,255,.25)"/>
            {/* Particle traveling outward */}
            <circle r="2.5" fill="#FF4444" filter="url(#nw-glow)" opacity="0.9">
              <animateMotion dur={s.dur} repeatCount="indefinite" begin={s.delay}
                path={`M${CENTRE.x},${CENTRE.y} L${s.x},${s.y}`}/>
            </circle>
            {/* Label */}
            <text x={s.x} y={s.y + s.r + 13}
              textAnchor="middle" dominantBaseline="middle"
              style={{ fontFamily:"DM Mono,monospace", fontSize: s.r > 10 ? 8 : 7, fill:"rgba(255,255,255,.65)", letterSpacing:".06em", textTransform:"uppercase" }}>
              {s.label}
            </text>
          </g>
        ))}

        {/* Centre core — Ogun HQ */}
        {/* 3D shadow */}
        <ellipse cx={CENTRE.x} cy={CENTRE.y + CENTRE.r * 0.7} rx={CENTRE.r * 1.4} ry={CENTRE.r * 0.4}
          fill="rgba(0,0,0,.4)"/>
        {/* Outer pulse rings */}
        {[0, 0.6, 1.2].map((d, i) => (
          <circle key={d} cx={CENTRE.x} cy={CENTRE.y} r={CENTRE.r + 12}
            fill="none" stroke="rgba(204,0,0,.5)" strokeWidth="1.5"
            style={{ animation:`nw-pulse-ring 2.5s ease-out ${d}s infinite` }}/>
        ))}
        {/* Dashed spinning outer ring */}
        <circle cx={CENTRE.x} cy={CENTRE.y} r={CENTRE.r + 8}
          fill="none" stroke="rgba(204,0,0,.4)" strokeWidth="1.5"
          strokeDasharray="8 5"
          style={{ animation:"nw-core-spin 6s linear infinite" }}/>
        {/* Core glow */}
        <circle cx={CENTRE.x} cy={CENTRE.y} r={CENTRE.r + 4}
          fill="url(#nw-core)" opacity="0.3" filter="url(#nw-glow-soft)"/>
        {/* Main sphere */}
        <circle cx={CENTRE.x} cy={CENTRE.y} r={CENTRE.r}
          fill="url(#nw-core)" filter="url(#nw-glow)"/>
        {/* Specular highlight — 3D shine */}
        <circle cx={CENTRE.x - 7} cy={CENTRE.y - 7} r={9}
          fill="rgba(255,255,255,.2)"/>
        <circle cx={CENTRE.x - 5} cy={CENTRE.y - 5} r={4}
          fill="rgba(255,255,255,.4)"/>
        {/* Label */}
        <text x={CENTRE.x} y={CENTRE.y - 1} textAnchor="middle" dominantBaseline="middle"
          style={{ fontFamily:"DM Mono,monospace", fontSize:7, fill:"#fff", fontWeight:"bold", letterSpacing:".08em" }}>
          OGUN
        </text>
        <text x={CENTRE.x} y={CENTRE.y + 8} textAnchor="middle" dominantBaseline="middle"
          style={{ fontFamily:"DM Mono,monospace", fontSize:6, fill:"rgba(255,255,255,.7)", letterSpacing:".06em" }}>
          HQ
        </text>

        {/* Floating data labels */}
        <g style={{ animation:"nw-data-flicker 3s ease-in-out infinite" }}>
          <text x="340" y="50" textAnchor="end"
            style={{ fontFamily:"DM Mono,monospace", fontSize:8, fill:"rgba(204,0,0,.5)", letterSpacing:".1em" }}>
            280K units/yr
          </text>
        </g>
        <g style={{ animation:"nw-data-flicker 4s ease-in-out 1s infinite" }}>
          <text x="60" y="340" textAnchor="start"
            style={{ fontFamily:"DM Mono,monospace", fontSize:8, fill:"rgba(204,0,0,.5)", letterSpacing:".1em" }}>
            9 states · live
          </text>
        </g>

        {/* Bottom info strip */}
        <rect x="60" y="345" width="280" height="18" rx="2" fill="rgba(204,0,0,.08)" stroke="rgba(204,0,0,.2)" strokeWidth="0.5"/>
        <text x="200" y="356" textAnchor="middle" dominantBaseline="middle"
          style={{ fontFamily:"DM Mono,monospace", fontSize:7, fill:"rgba(255,255,255,.45)", letterSpacing:".12em" }}>
          FULL DONOR-TO-PATIENT TRACEABILITY · AUDIT TRAIL ACTIVE
        </text>
      </svg>

      <style>{`
        @keyframes nw-scan         { 0%{top:-2px} 100%{top:100%} }
        @keyframes nw-core-spin    { from{stroke-dashoffset:0} to{stroke-dashoffset:-52} }
        @keyframes nw-orbit-spin   { from{stroke-dashoffset:0} to{stroke-dashoffset:200} }
        @keyframes nw-pulse-ring   { 0%{r:34;opacity:.8;stroke-width:2} 100%{r:80;opacity:0;stroke-width:.5} }
        @keyframes nw-halo-pulse   { 0%,100%{opacity:.3} 50%{opacity:.7} }
        @keyframes nw-ring-spin    { from{stroke-dashoffset:0} to{stroke-dashoffset:60} }
        @keyframes nw-flow         { from{stroke-dashoffset:0} to{stroke-dashoffset:-60} }
        @keyframes nw-data-flicker { 0%,100%{opacity:.5} 50%{opacity:1} }
      `}</style>
    </div>
  );
}

/* ── Automation visual for Step 03 ── */
function HowItWorksAutomation({ stepNum, color }: { stepNum: string; color: string }) {
  const steps = [
    { icon:"🩸", label:"Sample Intake",    sub:"Intake from donor drive" },
    { icon:"⚙️", label:"BLIM Sorting",     sub:"Auto labeling & routing" },
    { icon:"🔄", label:"Centrifuge p671",  sub:"Sample separation" },
    { icon:"🧬", label:"e801 Immunoassay", sub:"Serology screening" },
    { icon:"🔬", label:"cobas 8800 NAT",   sub:"Molecular diagnostics" },
  ];
  return (
    <div style={{ background:"linear-gradient(135deg,#0B1F33,#0D2B44)", border:"1px solid rgba(204,0,0,.3)", padding:"clamp(20px,3vw,32px)", minHeight:300, position:"relative", overflow:"hidden" }}>
      {/* Step badge */}
      <div style={{ position:"absolute", top:14, left:14, background:color, color:"#fff", fontFamily:"var(--font-display)", fontWeight:800, fontSize:14, padding:"5px 14px", zIndex:10 }}>{stepNum}</div>
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(204,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(204,0,0,.04) 1px,transparent 1px)", backgroundSize:"24px 24px", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", left:0, right:0, height:1.5, background:"linear-gradient(90deg,transparent,rgba(204,0,0,.6),transparent)", animation:"scanLine 3s linear infinite", pointerEvents:"none", zIndex:4 }}/>

      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:20, position:"relative", zIndex:3 }}>
        <div style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 6px #22c55e", animation:"blink 1.5s ease-in-out infinite" }}/>
        <span className="font-mono" style={{ fontSize:10, color:"rgba(255,255,255,.55)", letterSpacing:".14em" }}>AUTOMATION ACTIVE · 2,500 TUBES/HR</span>
      </div>

      <div style={{ position:"relative", zIndex:3 }}>
        <div style={{ position:"absolute", left:22, top:0, bottom:0, width:2, background:"rgba(204,0,0,.12)", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:"35%", background:"linear-gradient(to bottom,transparent,#CC0000,transparent)", animation:"pulse-down 2.5s ease-in-out infinite" }}/>
        </div>
        {steps.map((step, i) => (
          <div key={step.label}>
            <div style={{ display:"flex", alignItems:"center", gap:14, padding:"10px 0", animation:`fade-up .4s ease-out ${i*.07}s both` }}>
              <div style={{ width:44, height:44, borderRadius:"50%", flexShrink:0, background:`rgba(204,0,0,${.1+i*.04})`, border:`1.5px solid rgba(204,0,0,.5)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, zIndex:1, transition:"transform .2s, box-shadow .2s", cursor:"default" }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1.2)";(e.currentTarget as HTMLElement).style.boxShadow="0 0 16px rgba(204,0,0,.8)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="none";}}
              >{step.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:600, color:"#fff", marginBottom:2 }}>{step.label}</div>
                <div className="font-mono" style={{ fontSize:9, color:"rgba(255,255,255,.35)", letterSpacing:".1em" }}>{step.sub}</div>
              </div>
              <div style={{ display:"flex", gap:2, alignItems:"flex-end", height:18 }}>
                {[3,6,4,8,5].map((h,j) => (
                  <div key={j} style={{ width:3, height:h, background:"rgba(204,0,0,.6)", animation:`bar-pulse 1s ease-in-out ${j*.1}s infinite` }}/>
                ))}
              </div>
            </div>
            {i < steps.length-1 && (
              <div style={{ paddingLeft:14 }}>
                <div style={{ width:0, height:0, borderLeft:"6px solid transparent", borderRight:"6px solid transparent", borderTop:"8px solid rgba(204,0,0,.4)", animation:`arrow-pulse 2s ease-in-out ${i*.1}s infinite` }}/>
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
      <style>{`
        @keyframes scanLine   { 0%{top:-2px} 100%{top:100%} }
        @keyframes pulse-down { 0%{top:-35%} 100%{top:110%} }
        @keyframes bar-pulse  { 0%,100%{transform:scaleY(1);opacity:.5} 50%{transform:scaleY(2);opacity:1} }
        @keyframes arrow-pulse{ 0%,100%{opacity:.4;transform:translateY(0)} 50%{opacity:1;transform:translateY(3px)} }
        @keyframes fade-up    { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
        @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:.2} }
      `}</style>
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
        <div style={{ textAlign:"center", maxWidth:680, margin:"0 auto clamp(40px,5vw,64px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>End-to-End Process</div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:20 }}>
            From <em style={{ color:"var(--crimson)" }}>Donor</em> to Patient —{" "}
            <em style={{ color:"var(--crimson)" }}>A Seamless Flow</em>
          </h2>
          <p className="body-lg reveal delay-2">
            CrimsonWings transforms blood supply into a structured, traceable, and responsive system.
            Every unit is tracked from collection to the patient bedside.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="reveal delay-2" style={{ marginBottom:"clamp(56px,7vw,88px)", background:"var(--off-white)", border:"1px solid var(--smoke)", padding:"clamp(20px,3vw,36px)", overflowX:"auto" }}>
          <div style={{ display:"flex", alignItems:"center", minWidth:640 }}>
            {FLOW.map((step, i) => (
              <div key={step.label} style={{ display:"flex", alignItems:"center", flex:1 }}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10, flex:"0 0 auto", minWidth:68 }}>
                  <div style={{ width:50, height:50, display:"flex", alignItems:"center", justifyContent:"center", background:i===0||i===FLOW.length-1?"var(--crimson)":"#1C1C2E", border:`2px solid ${i%2===0?"#CC0000":"#2F80ED"}`, borderRadius:"50%" }}>
                    <step.icon size={20} color="#fff"/>
                  </div>
                  <span className="caption" style={{ fontSize:9, color:"var(--ink)", textAlign:"center", maxWidth:68, lineHeight:1.4 }}>{step.label}</span>
                </div>
                {i < FLOW.length - 1 && (
                  <div style={{ flex:1, height:2, minWidth:8, background:`linear-gradient(90deg, ${i%2===0?"#CC0000":"#2F80ED"}, ${i%2===0?"#2F80ED":"#CC0000"})`, position:"relative" }}>
                    <div style={{ position:"absolute", right:-1, top:-4, width:0, height:0, borderTop:"5px solid transparent", borderBottom:"5px solid transparent", borderLeft:`8px solid ${i%2===0?"#2F80ED":"#CC0000"}` }}/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 11 steps — all images assigned */}
        <div style={{ display:"flex", flexDirection:"column", gap:3 }}>
          {STEPS.map((step, i) => {
            const rev = i % 2 === 1;
            return (
              <div key={step.num} style={{ display:"grid", background:i%2===0?"#fff":"var(--off-white)", border:"1px solid var(--smoke)", marginBottom:2 }} className="how-row">

                {/* Image side */}
                <div style={{ order:rev?2:1, minHeight:300, position:"relative", overflow:"hidden" }}>
                  {(step as any).isAutomation ? (
                    /* Automation animation for Step 03 */
                    <HowItWorksAutomation stepNum={step.num} color={step.color}/>
                  ) : (step as any).isNetwork ? (
                    /* 3D Network visual for Step 11 */
                    <div style={{ position:"relative" }}>
                      <NetworkVisual compact={true}/>
                      <div style={{ position:"absolute", top:14, left:14, background:step.color, color:"#fff", fontFamily:"var(--font-display)", fontWeight:800, fontSize:14, padding:"5px 14px", zIndex:10 }}>
                        {step.num}
                      </div>
                    </div>
                  ) : (step as any).isNetwork ? (
                    /* 3D Network animation for Step 11 */
                    <NetworkMap3D stepNum={step.num} color={step.color}/>
                  ) : (
                    /* Regular photo */
                    <div style={{ position:"relative", height:"100%", minHeight:300, background:"#111" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={step.image}
                        alt={step.title}
                        style={{ width:"100%", height:"100%", minHeight:300, objectFit:"cover", objectPosition:"center", display:"block" }}
                      />
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 50%)" }}/>
                      <div style={{ position:"absolute", top:14, left:14, background:step.color, color:"#fff", fontFamily:"var(--font-display)", fontWeight:800, fontSize:14, padding:"5px 14px", zIndex:3 }}>
                        {step.num}
                      </div>
                      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"12px 16px", zIndex:3 }}>
                        <span className="caption" style={{ color:"rgba(255,255,255,.65)", fontSize:9 }}>Step {step.num} — {step.title}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ order:rev?1:2, padding:"clamp(28px,4vw,52px)", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:18 }}>
                    <div style={{ width:48, height:48, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:`${step.color}12`, border:`1.5px solid ${step.color}35` }}>
                      <step.icon size={22} style={{ color:step.color }}/>
                    </div>
                    <h3 className="font-display" style={{ fontSize:"clamp(20px,2.5vw,28px)", fontWeight:700, color:"var(--ink)", lineHeight:1.2 }}>{step.title}</h3>
                  </div>
                  <p className="body-lg" style={{ color:"var(--steel)" }}>{step.body}</p>
                  <div style={{ marginTop:20, height:3, width:48, background:`linear-gradient(90deg, ${step.color}, transparent)` }}/>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing */}
        <div className="reveal" style={{ marginTop:"clamp(48px,6vw,72px)", textAlign:"center", padding:"clamp(32px,4vw,52px)", background:"#1C1C2E", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg, var(--crimson), #2F80ED, var(--crimson))" }}/>
          <h3 className="h3 font-display" style={{ color:"#fff", marginBottom:12 }}>A Complete Loop of Trust, Speed, and Accountability</h3>
          <p style={{ fontSize:18, color:"rgba(255,255,255,.72)", maxWidth:540, margin:"0 auto" }}>
            From the first drop collected to the moment blood reaches a patient — every step is tracked, verified, and optimized.
          </p>
        </div>
      </div>

      <style>{`
        @media(min-width:800px){
          .how-row{ grid-template-columns:1fr 1fr !important; }
          .how-row > div { min-height:320px; }
        }
      `}</style>
    </section>
  );
}
