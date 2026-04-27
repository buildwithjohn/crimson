"use client";
import { useReveal } from "./useReveal";

const QUICK_STATS = [
  { val:"240K–280K", label:"Blood Units — Year 1",    color:"#CC0000" },
  { val:"20,000+",   label:"Units Per Month",          color:"#2F80ED" },
  { val:"<60 min",   label:"Emergency Delivery",       color:"#CC0000" },
  { val:"100%",      label:"NAT Screened",             color:"#22c55e" },
];


/* ── Animated About Visual ─────────────────────────────────────────────────
   A blood supply network SVG: central hub pulses outward to 5 state nodes,
   animated flow particles travel along each line, stats appear around the ring
─────────────────────────────────────────────────────────────────────────── */
function AboutVisual() {
  return (
    <div style={{ position:"relative", userSelect:"none" }}>

      {/* ── Main SVG network diagram ── */}
      <div style={{
        background:"linear-gradient(135deg, #0B1F33 0%, #0D2B44 100%)",
        border:"1px solid rgba(204,0,0,.25)",
        padding:"clamp(24px,3vw,40px)",
        position:"relative", overflow:"hidden",
        marginBottom:14,
      }}>
        {/* Grid background */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(204,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(204,0,0,.04) 1px,transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }}/>

        {/* Scan line */}
        <div style={{ position:"absolute", left:0, right:0, height:1.5, background:"linear-gradient(90deg,transparent,rgba(204,0,0,.5),transparent)", animation:"ab-scan 5s linear infinite", pointerEvents:"none", zIndex:4 }}/>

        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16, position:"relative", zIndex:3 }}>
          <div className="caption" style={{ color:"rgba(255,255,255,.4)", fontSize:9, letterSpacing:".18em" }}>
            BLOOD NETWORK · OGUN STATE HQ
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:6 }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e", animation:"ab-blink 1.8s ease-in-out infinite" }}/>
            <span className="font-mono" style={{ fontSize:9, color:"rgba(255,255,255,.5)", letterSpacing:".12em" }}>LIVE</span>
          </div>
        </div>

        {/* SVG Network */}
        <svg viewBox="0 0 340 280" style={{ width:"100%", height:"auto", display:"block", position:"relative", zIndex:3 }}>
          <defs>
            {/* Glowing crimson gradient */}
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#CC0000" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#CC0000" stopOpacity="0.1"/>
            </radialGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#CC0000" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#CC0000" stopOpacity="0"/>
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Connection lines from centre to 5 hub nodes */}
          {[
            {x:170, y:40},   /* Top */
            {x:310, y:110},  /* Top-right */
            {x:290, y:230},  /* Bottom-right */
            {x:50,  y:230},  /* Bottom-left */
            {x:30,  y:110},  /* Top-left */
          ].map((node, i) => (
            <g key={i}>
              {/* Base line */}
              <line x1="170" y1="140" x2={node.x} y2={node.y}
                stroke="rgba(204,0,0,.2)" strokeWidth="1.5" strokeDasharray="4 3"/>
              {/* Animated flow line */}
              <line x1="170" y1="140" x2={node.x} y2={node.y}
                stroke="rgba(204,0,0,.6)" strokeWidth="1.5"
                strokeDasharray="12 40"
                style={{ animation:`ab-flow-${i} ${2 + i * 0.3}s linear infinite` }}/>
            </g>
          ))}

          {/* Outer pulse rings from centre */}
          {[40, 70, 100].map((r, i) => (
            <circle key={r} cx="170" cy="140" r={r}
              fill="none" stroke="rgba(204,0,0,.08)"
              strokeWidth="1"
              style={{ animation:`ab-ring-pulse 3s ease-out ${i * 1}s infinite` }}/>
          ))}

          {/* Hub nodes */}
          {[
            {x:170, y:40,  label:"Ogun HQ",    main:true  },
            {x:310, y:110, label:"Edo",         main:false },
            {x:290, y:230, label:"Rivers",      main:false },
            {x:50,  y:230, label:"Akwa Ibom",   main:false },
            {x:30,  y:110, label:"Delta",       main:false },
          ].map((node, i) => (
            <g key={i}>
              {/* Glow halo */}
              <circle cx={node.x} cy={node.y} r="18" fill="url(#nodeGlow)"/>
              {/* Outer ring */}
              <circle cx={node.x} cy={node.y} r="12"
                fill="none" stroke="rgba(204,0,0,.4)" strokeWidth="1.5"
                style={{ animation:`ab-node-pulse 2.5s ease-in-out ${i*0.4}s infinite` }}/>
              {/* Inner dot */}
              <circle cx={node.x} cy={node.y} r="6"
                fill={node.main ? "#CC0000" : "rgba(204,0,0,.7)"}
                filter="url(#glow)"/>
              {/* Label */}
              <text x={node.x} y={node.y + (node.y > 140 ? 26 : -18)}
                textAnchor="middle"
                style={{ fontFamily:"DM Mono, monospace", fontSize:9, fill:"rgba(255,255,255,.55)", letterSpacing:".08em" }}>
                {node.label}
              </text>
            </g>
          ))}

          {/* Centre core */}
          <circle cx="170" cy="140" r="28" fill="url(#coreGlow)" opacity="0.15"/>
          <circle cx="170" cy="140" r="20"
            fill="none" stroke="rgba(204,0,0,.5)" strokeWidth="2"
            style={{ animation:"ab-core-spin 8s linear infinite" }} strokeDasharray="8 4"/>
          <circle cx="170" cy="140" r="13"
            fill="rgba(204,0,0,.85)" filter="url(#glow)"/>

          {/* Blood drop icon in centre */}
          <text x="170" y="145" textAnchor="middle"
            style={{ fontFamily:"sans-serif", fontSize:14, fill:"#fff" }}>🩸</text>

          {/* Flow particles */}
          {[0,1,2,3,4].map(i => {
            const nodes = [{x:170,y:40},{x:310,y:110},{x:290,y:230},{x:50,y:230},{x:30,y:110}];
            const n = nodes[i];
            return (
              <circle key={i} r="3" fill="#CC0000" opacity="0.9" filter="url(#glow)"
                style={{ animation:`ab-particle-${i} ${2+i*0.25}s linear ${i*0.4}s infinite` }}>
                <animateMotion dur={`${2+i*0.25}s`} repeatCount="indefinite" begin={`${i*0.4}s`}
                  path={`M170,140 L${n.x},${n.y}`}/>
              </circle>
            );
          })}
        </svg>

        {/* Stats row */}
        <div style={{
          display:"grid", gridTemplateColumns:"repeat(3,1fr)",
          gap:1, borderTop:"1px solid rgba(255,255,255,.07)", marginTop:16, paddingTop:16,
          position:"relative", zIndex:3,
        }}>
          {[
            {val:"9",      label:"Partner States"},
            {val:"280K",   label:"Units / Year"},
            {val:"<60min", label:"Delivery Time"},
          ].map(s => (
            <div key={s.label} style={{ textAlign:"center" }}>
              <div className="font-display" style={{ fontSize:"clamp(20px,2.5vw,28px)", fontWeight:800, color:"#CC0000", lineHeight:1 }}>{s.val}</div>
              <div className="caption" style={{ color:"rgba(255,255,255,.35)", fontSize:8, marginTop:4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes ab-scan        { 0%{top:-2px} 100%{top:100%} }
          @keyframes ab-blink       { 0%,100%{opacity:1} 50%{opacity:.2} }
          @keyframes ab-core-spin   { from{stroke-dashoffset:0} to{stroke-dashoffset:-48} }
          @keyframes ab-ring-pulse  { 0%{r:30;opacity:.6} 100%{r:110;opacity:0} }
          @keyframes ab-node-pulse  { 0%,100%{r:12;opacity:.4} 50%{r:16;opacity:.9} }
          @keyframes ab-flow-0 { from{stroke-dashoffset:0} to{stroke-dashoffset:-52} }
          @keyframes ab-flow-1 { from{stroke-dashoffset:0} to{stroke-dashoffset:-52} }
          @keyframes ab-flow-2 { from{stroke-dashoffset:0} to{stroke-dashoffset:-52} }
          @keyframes ab-flow-3 { from{stroke-dashoffset:0} to{stroke-dashoffset:-52} }
          @keyframes ab-flow-4 { from{stroke-dashoffset:0} to{stroke-dashoffset:-52} }
        `}</style>
      </div>

      {/* ── Bottom badges ── */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
        {[
          {label:"Established",    val:"2026",            bg:"var(--crimson)", color:"rgba(255,255,255,.7)", valColor:"#fff"},
          {label:"Strategic Hubs", val:"5 in Ogun State", bg:"rgba(204,0,0,.06)", color:"var(--crimson)", valColor:"var(--ink)", border:"1px solid rgba(204,0,0,.18)"},
        ].map(b => (
          <div key={b.label} style={{ background:b.bg, border:b.border||"none", padding:"16px 20px" }}>
            <div className="caption" style={{ color:b.color, marginBottom:4, fontSize:9 }}>{b.label}</div>
            <div className="font-display" style={{ fontSize:"clamp(16px,1.8vw,22px)", fontWeight:800, color:b.valColor, lineHeight:1.2 }}>{b.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
                { label:"Lagos-Based Operations", icon:"📍" },
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
            <AboutVisual/>
          </div>
        </div>
      </div>
      <style>{`@media(min-width:900px){.two-col{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
