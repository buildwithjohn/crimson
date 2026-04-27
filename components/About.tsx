"use client";
import { useReveal } from "./useReveal";

/* ── 3D Blood Network Visual ─────────────────────────────────────────────── */
function AboutVisual() {
  const STATES = [
    {x:170,y:42,  r:8,  label:"Cross River", delay:"0s",    dur:"2.8s"},
    {x:280,y:78,  r:9,  label:"Edo",         delay:"0.3s",  dur:"2.4s"},
    {x:315,y:158, r:10, label:"Delta",       delay:"0.6s",  dur:"2.2s"},
    {x:278,y:235, r:10, label:"Rivers",      delay:"0.9s",  dur:"2.0s"},
    {x:170,y:268, r:9,  label:"Bayelsa",     delay:"1.1s",  dur:"2.5s"},
    {x:62, y:235, r:10, label:"Akwa Ibom",   delay:"0.9s",  dur:"2.3s"},
    {x:25, y:158, r:9,  label:"Ondo",        delay:"0.6s",  dur:"2.6s"},
    {x:60, y:78,  r:9,  label:"Lagos",       delay:"0.3s",  dur:"2.1s"},
    {x:170,y:118, r:8,  label:"Ogun North",  delay:"0.15s", dur:"2.7s"},
  ];

  return (
    <div style={{ position:"relative", userSelect:"none" }}>

      {/* Main panel */}
      <div style={{
        background:"linear-gradient(160deg,#050D1A 0%,#0B1F33 55%,#0D1527 100%)",
        border:"1px solid rgba(204,0,0,.25)",
        borderTop:"3px solid #CC0000",
        padding:"clamp(18px,2.5vw,28px)",
        position:"relative", overflow:"hidden",
        marginBottom:12,
      }}>
        {/* Grid */}
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(204,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(204,0,0,.04) 1px,transparent 1px)",backgroundSize:"24px 24px",pointerEvents:"none"}}/>
        {/* Scan line */}
        <div style={{position:"absolute",left:0,right:0,height:1.5,background:"linear-gradient(90deg,transparent,rgba(204,0,0,.5),transparent)",animation:"ab-scan 6s linear infinite",pointerEvents:"none",zIndex:5}}/>

        {/* Header */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,position:"relative",zIndex:3}}>
          <div className="caption" style={{color:"rgba(255,255,255,.4)",fontSize:9,letterSpacing:".18em"}}>BLOOD NETWORK · OGUN STATE HQ</div>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <div style={{width:7,height:7,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e",animation:"ab-blink 1.8s ease-in-out infinite"}}/>
            <span className="font-mono" style={{fontSize:9,color:"rgba(255,255,255,.5)",letterSpacing:".12em"}}>LIVE</span>
          </div>
        </div>

        {/* 3D SVG */}
        <svg viewBox="0 0 340 300" style={{width:"100%",height:"auto",display:"block",position:"relative",zIndex:3}}>
          <defs>
            <radialGradient id="ab-core" cx="38%" cy="33%" r="60%">
              <stop offset="0%" stopColor="#FF5555" stopOpacity="1"/>
              <stop offset="55%" stopColor="#CC0000" stopOpacity="0.95"/>
              <stop offset="100%" stopColor="#660000" stopOpacity="0.8"/>
            </radialGradient>
            <radialGradient id="ab-sphere" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#FF6666" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#880000" stopOpacity="0.75"/>
            </radialGradient>
            <radialGradient id="ab-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#CC0000" stopOpacity="0.45"/>
              <stop offset="100%" stopColor="#CC0000" stopOpacity="0"/>
            </radialGradient>
            <filter id="ab-glow">
              <feGaussianBlur stdDeviation="3.5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="ab-glow-lg">
              <feGaussianBlur stdDeviation="9" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* 3D floor perspective grid */}
          {[265,244,226,210,197,186].map((y,i)=>(
            <line key={y} x1="0" y1={y} x2="340" y2={y} stroke="rgba(204,0,0,.055)" strokeWidth={0.4+i*0.07}/>
          ))}
          {[-40,20,80,140,200,260,320,380].map((x)=>(
            <line key={x} x1={x} y1="290" x2="170" y2="55" stroke="rgba(204,0,0,.045)" strokeWidth="0.4"/>
          ))}

          {/* Ground ellipse glow */}
          <ellipse cx="170" cy="272" rx="135" ry="22" fill="rgba(204,0,0,.08)"/>

          {/* Orbit ring */}
          <ellipse cx="170" cy="163" rx="152" ry="88" fill="none" stroke="rgba(204,0,0,.1)" strokeWidth="1.2"
            strokeDasharray="6 4" style={{animation:"ab-orbit 22s linear infinite"}}/>

          {/* State nodes */}
          {STATES.map((s,i)=>(
            <g key={i}>
              {/* Shadow */}
              <ellipse cx={s.x} cy={s.y+s.r*0.72} rx={s.r*1.35} ry={s.r*0.34} fill="rgba(0,0,0,.32)"/>
              {/* Drop shadow line to ground */}
              <line x1={s.x} y1={s.y+s.r} x2={s.x} y2={272} stroke="rgba(204,0,0,.07)" strokeWidth="0.8" strokeDasharray="2 3"/>
              {/* Connection to centre */}
              <line x1="170" y1="163" x2={s.x} y2={s.y} stroke="rgba(204,0,0,.15)" strokeWidth="1.5" strokeDasharray="4 5"/>
              <line x1="170" y1="163" x2={s.x} y2={s.y} stroke="rgba(204,0,0,.75)" strokeWidth="1.5"
                strokeDasharray="9 48" style={{animation:`ab-flow ${s.dur} linear ${s.delay} infinite`}}/>
              {/* Halo */}
              <circle cx={s.x} cy={s.y} r={s.r*2.7} fill="url(#ab-halo)"
                style={{animation:`ab-halo ${s.dur} ease-in-out ${s.delay} infinite`}}/>
              {/* Spin ring */}
              <circle cx={s.x} cy={s.y} r={s.r+4} fill="none" stroke="rgba(204,0,0,.28)" strokeWidth="1"
                strokeDasharray={`${s.r} ${s.r*0.55}`} style={{animation:`ab-spin ${parseFloat(s.dur)*2.5}s linear ${s.delay} infinite`}}/>
              {/* 3D sphere */}
              <circle cx={s.x} cy={s.y} r={s.r} fill="url(#ab-sphere)" filter="url(#ab-glow)"/>
              {/* Specular highlights */}
              <circle cx={s.x-s.r*0.33} cy={s.y-s.r*0.33} r={s.r*0.4} fill="rgba(255,255,255,.28)"/>
              <circle cx={s.x-s.r*0.2}  cy={s.y-s.r*0.2}  r={s.r*0.18} fill="rgba(255,255,255,.45)"/>
              {/* Particle */}
              <circle r="2.5" fill="#FF7777" filter="url(#ab-glow)">
                <animateMotion dur={s.dur} repeatCount="indefinite" begin={s.delay}
                  path={`M170,163 L${s.x},${s.y}`}/>
              </circle>
              {/* Label */}
              <text x={s.x} y={s.y+s.r+12} textAnchor="middle"
                style={{fontFamily:"DM Mono,monospace",fontSize:s.r>9?8:7,fill:"rgba(255,255,255,.6)",letterSpacing:".06em"}}>
                {s.label}
              </text>
            </g>
          ))}

          {/* Centre — Ogun HQ */}
          <ellipse cx="170" cy="183" rx="22" ry="6" fill="rgba(0,0,0,.4)"/>
          {[0,0.75,1.5].map((d)=>(
            <circle key={d} cx="170" cy="163" r="32"
              fill="none" stroke="rgba(204,0,0,.5)" strokeWidth="1.5"
              style={{animation:`ab-pulse 2.6s ease-out ${d}s infinite`}}/>
          ))}
          <circle cx="170" cy="163" r="32" fill="url(#ab-halo)" filter="url(#ab-glow-lg)" opacity="0.45"/>
          <circle cx="170" cy="163" r="28" fill="none" stroke="rgba(204,0,0,.4)" strokeWidth="1.5"
            strokeDasharray="7 5" style={{animation:"ab-core-spin 7s linear infinite"}}/>
          <circle cx="170" cy="163" r="21" fill="url(#ab-core)" filter="url(#ab-glow)"/>
          <circle cx="162" cy="155" r="7.5" fill="rgba(255,255,255,.22)"/>
          <circle cx="163" cy="156" r="3.5" fill="rgba(255,255,255,.42)"/>
          <text x="170" y="161" textAnchor="middle" dominantBaseline="middle"
            style={{fontFamily:"DM Mono,monospace",fontSize:7,fill:"#fff",fontWeight:"bold",letterSpacing:".06em"}}>OGUN</text>
          <text x="170" y="170" textAnchor="middle" dominantBaseline="middle"
            style={{fontFamily:"DM Mono,monospace",fontSize:5.5,fill:"rgba(255,255,255,.7)",letterSpacing:".06em"}}>HQ</text>

          {/* Floating data */}
          <text x="330" y="48" textAnchor="end"
            style={{fontFamily:"DM Mono,monospace",fontSize:7.5,fill:"rgba(204,0,0,.45)",letterSpacing:".1em",animation:"ab-flicker 3.5s ease-in-out infinite"}}>
            280K/yr
          </text>
          <text x="12" y="290" textAnchor="start"
            style={{fontFamily:"DM Mono,monospace",fontSize:7.5,fill:"rgba(204,0,0,.45)",letterSpacing:".1em",animation:"ab-flicker 4s ease-in-out 1.2s infinite"}}>
            9 states
          </text>

          {/* Bottom strip */}
          <rect x="50" y="284" width="240" height="14" rx="2" fill="rgba(204,0,0,.08)" stroke="rgba(204,0,0,.18)" strokeWidth="0.5"/>
          <text x="170" y="292" textAnchor="middle" dominantBaseline="middle"
            style={{fontFamily:"DM Mono,monospace",fontSize:6.5,fill:"rgba(255,255,255,.4)",letterSpacing:".1em"}}>
            LIVE NETWORK · 9 PARTNER STATES
          </text>
        </svg>

        {/* Stats row */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:1,borderTop:"1px solid rgba(255,255,255,.07)",paddingTop:14,position:"relative",zIndex:3}}>
          {[{val:"9",label:"Partner States"},{val:"280K",label:"Units / Year"},{val:"<60min",label:"Delivery Time"}].map(s=>(
            <div key={s.label} style={{textAlign:"center"}}>
              <div className="font-display" style={{fontSize:"clamp(18px,2.5vw,26px)",fontWeight:800,color:"#CC0000",lineHeight:1}}>{s.val}</div>
              <div className="caption" style={{color:"rgba(255,255,255,.35)",fontSize:8,marginTop:4}}>{s.label}</div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes ab-scan      { 0%{top:-2px} 100%{top:100%} }
          @keyframes ab-blink     { 0%,100%{opacity:1} 50%{opacity:.15} }
          @keyframes ab-orbit     { from{stroke-dashoffset:0} to{stroke-dashoffset:200} }
          @keyframes ab-flow      { from{stroke-dashoffset:0} to{stroke-dashoffset:-58} }
          @keyframes ab-halo      { 0%,100%{opacity:.3} 50%{opacity:.85} }
          @keyframes ab-spin      { from{stroke-dashoffset:0} to{stroke-dashoffset:60} }
          @keyframes ab-pulse     { 0%{r:32;opacity:.85;stroke-width:2} 100%{r:90;opacity:0;stroke-width:.3} }
          @keyframes ab-core-spin { from{stroke-dashoffset:0} to{stroke-dashoffset:-48} }
          @keyframes ab-flicker   { 0%,100%{opacity:.45} 50%{opacity:1} }
        `}</style>
      </div>

      {/* Bottom badges */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        <div style={{background:"var(--crimson)",padding:"14px 18px"}}>
          <div className="caption" style={{color:"rgba(255,255,255,.65)",marginBottom:4,fontSize:9}}>Established</div>
          <div className="font-display" style={{fontSize:"clamp(22px,2.5vw,30px)",fontWeight:800,color:"#fff",lineHeight:1}}>2025</div>
        </div>
        <div style={{background:"rgba(204,0,0,.06)",border:"1px solid rgba(204,0,0,.18)",padding:"14px 18px"}}>
          <div className="caption" style={{color:"var(--crimson)",marginBottom:4,fontSize:9}}>State Coverage</div>
          <div className="font-display" style={{fontSize:"clamp(15px,1.8vw,20px)",fontWeight:800,color:"var(--ink)",lineHeight:1.2}}>Ogun + 8 States</div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref} className="section bg-white">
      <div style={{position:"absolute",top:0,right:0,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle, rgba(204,0,0,.06) 0%, transparent 70%)",pointerEvents:"none"}}/>
      <div className="container" style={{position:"relative",zIndex:2}}>

        <div className="section-label reveal" style={{marginBottom:12}}>About CrimsonWings</div>

        <h2 className="h2 font-display reveal delay-1" style={{color:"var(--ink)",marginBottom:24,maxWidth:800}}>
          Building Africa&apos;s Blood Infrastructure{" "}
          <em style={{color:"var(--crimson)"}}>for the Next Generation</em>{" "}
          of Medicine
        </h2>

        <div style={{display:"grid",gap:"clamp(40px,6vw,72px)",alignItems:"start"}} className="two-col">

          {/* Left */}
          <div>
            <p className="body-lg reveal delay-2" style={{marginBottom:20}}>
              CrimsonWings is positioning Nigeria not just to distribute blood — but to own the upstream supply chain of life-saving biologics. We are building Africa&apos;s most advanced automated blood processing and logistics infrastructure.
            </p>
            <p className="body-lg reveal delay-3" style={{marginBottom:20}}>
              Our operations are powered by <strong style={{color:"var(--ink)",fontWeight:700}}>Nucleic Acid Testing (NAT) viral screening systems</strong>, walk-in cold rooms, and ultra-low temperature freezers — ensuring the highest standards of blood safety and quality.
            </p>
            <p className="body-lg reveal delay-4" style={{marginBottom:32}}>
              We combine this with a <strong style={{color:"var(--ink)",fontWeight:700}}>technology-driven logistics network</strong> to ensure that life-saving blood reaches hospitals quickly, reliably, and in full regulatory compliance.
            </p>

            <div className="reveal delay-5" style={{display:"flex",flexWrap:"wrap",gap:12}}>
              {[
                {label:"Ogun State Operations", icon:"📍"},
                {label:"PPP Aligned",            icon:"🤝"},
                {label:"Donor to Delivery",      icon:"🔄"},
              ].map(b => (
                <div key={b.label} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 16px",background:"rgba(204,0,0,.05)",border:"1px solid rgba(204,0,0,.15)"}}>
                  <span style={{fontSize:16}}>{b.icon}</span>
                  <span className="caption" style={{color:"var(--crimson)",fontSize:10}}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D network */}
          <div className="reveal-right">
            <AboutVisual/>
          </div>
        </div>
      </div>
      <style>{`@media(min-width:900px){.two-col{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
