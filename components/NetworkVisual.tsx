"use client";

/* ── Shared 3D Blood Network Visual ─────────────────────────────────────────
   Used in: About section (right side) + HowItWorks Step 11 (Traceability)
   Centre: Ogun State HQ
   Outer ring: 8 partner states
   Features: 3D perspective tilt, animated flow particles, pulse rings,
   rotating orbital ring, floating data tags, conveyor dots
─────────────────────────────────────────────────────────────────────────── */

const NODES = [
  { id:"ogun",     label:"Ogun State",    x:200, y:200, isCore:true,  color:"#CC0000" },
  { id:"edo",      label:"Edo",           x:200, y:56,  isCore:false, color:"#CC0000" },
  { id:"bayelsa",  label:"Bayelsa",       x:318, y:100, isCore:false, color:"#CC0000" },
  { id:"akwaibom", label:"Akwa Ibom",     x:355, y:210, isCore:false, color:"#CC0000" },
  { id:"delta",    label:"Delta",         x:305, y:330, isCore:false, color:"#CC0000" },
  { id:"rivers",   label:"Rivers",        x:180, y:368, isCore:false, color:"#CC0000" },
  { id:"crossriver",label:"Cross River",  x:60,  y:318, isCore:false, color:"#CC0000" },
  { id:"ondo",     label:"Ondo",          x:28,  y:200, isCore:false, color:"#CC0000" },
  { id:"lagos",    label:"Lagos",         x:80,  y:82,  isCore:false, color:"#CC0000" },
];

interface Props {
  compact?: boolean;
}

export default function NetworkVisual({ compact = false }: Props) {
  const h = compact ? 320 : 420;

  return (
    <div style={{
      background:"linear-gradient(160deg, #060D1A 0%, #0B1F33 50%, #0D1520 100%)",
      border:"1px solid rgba(204,0,0,.25)",
      padding:"clamp(18px,2.5vw,32px)",
      position:"relative", overflow:"hidden",
      minHeight: h,
    }}>

      {/* ── Grid ── */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(204,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(204,0,0,.04) 1px,transparent 1px)", backgroundSize:"28px 28px", pointerEvents:"none" }}/>

      {/* ── Depth fog — top and bottom fade ── */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:60, background:"linear-gradient(to bottom,#060D1A,transparent)", pointerEvents:"none", zIndex:5 }}/>
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:60, background:"linear-gradient(to top,#060D1A,transparent)", pointerEvents:"none", zIndex:5 }}/>

      {/* ── Scan line ── */}
      <div style={{ position:"absolute", left:0, right:0, height:1.5, background:"linear-gradient(90deg,transparent,rgba(204,0,0,.55),transparent)", animation:"nv-scan 6s linear infinite", pointerEvents:"none", zIndex:6 }}/>

      {/* ── Header ── */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:compact?10:16, position:"relative", zIndex:7 }}>
        <div className="caption" style={{ color:"rgba(255,255,255,.38)", fontSize:9, letterSpacing:".18em" }}>
          BLOOD NETWORK · NATIONAL HUB MAP
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e", animation:"nv-blink 1.8s ease-in-out infinite" }}/>
          <span className="font-mono" style={{ fontSize:9, color:"rgba(255,255,255,.45)", letterSpacing:".12em" }}>LIVE · 9 STATES</span>
        </div>
      </div>

      {/* ── 3D SVG ── */}
      <div style={{
        /* 3D perspective tilt */
        perspective:"600px",
        perspectiveOrigin:"50% 40%",
        position:"relative", zIndex:4,
      }}>
        <div style={{
          transform:"rotateX(18deg) rotateZ(-1deg)",
          transformStyle:"preserve-3d",
          transformOrigin:"center center",
        }}>
          <svg viewBox="0 0 400 420" style={{ width:"100%", height:"auto", display:"block" }}>
            <defs>
              <radialGradient id="nv-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="#CC0000" stopOpacity="1"/>
                <stop offset="60%"  stopColor="#880000" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#CC0000" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="nv-node" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="#CC0000" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#CC0000" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="nv-floor" cx="50%" cy="100%" r="60%">
                <stop offset="0%"   stopColor="#CC0000" stopOpacity="0.08"/>
                <stop offset="100%" stopColor="#CC0000" stopOpacity="0"/>
              </radialGradient>
              <filter id="nv-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="nv-glow-sm" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* Floor reflection ellipse */}
            <ellipse cx="200" cy="360" rx="160" ry="30" fill="url(#nv-floor)"/>

            {/* 3D grid floor */}
            {[0,1,2,3,4].map(i => (
              <g key={`h${i}`} opacity="0.06">
                <line x1="40" y1={260+i*22} x2="360" y2={260+i*22} stroke="#CC0000" strokeWidth="1"/>
              </g>
            ))}
            {[0,1,2,3,4,5,6].map(i => (
              <g key={`v${i}`} opacity="0.06">
                <line x1={40+i*53} y1="260" x2={90+i*40} y2="370" stroke="#CC0000" strokeWidth="1"/>
              </g>
            ))}

            {/* Connection lines — core to each state */}
            {NODES.filter(n => !n.isCore).map((node, i) => (
              <g key={node.id}>
                {/* Shadow line */}
                <line
                  x1="200" y1="200" x2={node.x} y2={node.y}
                  stroke="rgba(204,0,0,.08)" strokeWidth="3"
                />
                {/* Main line */}
                <line
                  x1="200" y1="200" x2={node.x} y2={node.y}
                  stroke="rgba(204,0,0,.2)" strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
                {/* Animated flow */}
                <line
                  x1="200" y1="200" x2={node.x} y2={node.y}
                  stroke="rgba(204,0,0,.7)" strokeWidth="1.5"
                  strokeDasharray="10 50"
                  style={{ animation:`nv-flow ${1.8+i*0.2}s linear ${i*0.22}s infinite` }}
                />
              </g>
            ))}

            {/* Outer pulse rings from core */}
            {[35,60,90,125].map((r, i) => (
              <circle key={r} cx="200" cy="200" r={r}
                fill="none" stroke="rgba(204,0,0,.12)" strokeWidth="1"
                style={{ animation:`nv-expand 3.5s ease-out ${i*.85}s infinite` }}
              />
            ))}

            {/* Rotating orbital ring */}
            <circle cx="200" cy="200" r="140"
              fill="none" stroke="rgba(204,0,0,.08)" strokeWidth="1"
              strokeDasharray="6 10"
              style={{ animation:"nv-orbit 12s linear infinite", transformOrigin:"200px 200px" }}
            />

            {/* State nodes */}
            {NODES.filter(n => !n.isCore).map((node, i) => (
              <g key={node.id}>
                {/* Glow halo */}
                <circle cx={node.x} cy={node.y} r="20" fill="url(#nv-node)"/>
                {/* Outer pulse ring */}
                <circle cx={node.x} cy={node.y} r="13"
                  fill="none" stroke="rgba(204,0,0,.5)" strokeWidth="1.5"
                  style={{ animation:`nv-pulse 2.4s ease-in-out ${i*0.3}s infinite` }}
                />
                {/* Inner ring */}
                <circle cx={node.x} cy={node.y} r="8"
                  fill="none" stroke="rgba(204,0,0,.7)" strokeWidth="1"
                />
                {/* Core dot */}
                <circle cx={node.x} cy={node.y} r="5"
                  fill="#CC0000" filter="url(#nv-glow-sm)"
                />

                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + (node.y > 200 ? 26 : -18)}
                  textAnchor="middle"
                  style={{ fontFamily:"DM Mono,monospace", fontSize:9.5, fill:"rgba(255,255,255,.6)", letterSpacing:".06em" }}
                >{node.label}</text>

                {/* Vertical drop line (3D pillar) */}
                <line
                  x1={node.x} y1={node.y+5}
                  x2={node.x} y2={node.y+18}
                  stroke="rgba(204,0,0,.25)" strokeWidth="1"
                  strokeDasharray="2 2"
                />
              </g>
            ))}

            {/* Animated particles — one per spoke */}
            {NODES.filter(n => !n.isCore).map((node, i) => (
              <circle key={node.id} r="3.5" fill="#CC0000" opacity="0" filter="url(#nv-glow-sm)">
                <animateMotion
                  dur={`${1.8+i*0.2}s`}
                  repeatCount="indefinite"
                  begin={`${i*0.22}s`}
                  path={`M200,200 L${node.x},${node.y}`}
                />
                <animate attributeName="opacity" values="0;1;1;0" dur={`${1.8+i*0.2}s`} repeatCount="indefinite" begin={`${i*0.22}s`}/>
              </circle>
            ))}

            {/* ── CORE — Ogun State HQ ── */}
            {/* 3D outer glow */}
            <circle cx="200" cy="200" r="42" fill="url(#nv-core)" opacity="0.35"/>
            {/* Spinning outer ring */}
            <circle cx="200" cy="200" r="32"
              fill="none" stroke="rgba(204,0,0,.6)" strokeWidth="2"
              strokeDasharray="8 5"
              style={{ animation:"nv-core-spin 5s linear infinite", transformOrigin:"200px 200px" }}
            />
            {/* Inner solid */}
            <circle cx="200" cy="200" r="22" fill="#8B0000" opacity="0.9" filter="url(#nv-glow)"/>
            <circle cx="200" cy="200" r="16" fill="#CC0000" filter="url(#nv-glow)"/>

            {/* Blood drop centrepiece */}
            <text x="200" y="206" textAnchor="middle"
              style={{ fontFamily:"sans-serif", fontSize:16, fill:"#fff" }}>🩸</text>

            {/* Core label */}
            <text x="200" y="236" textAnchor="middle"
              style={{ fontFamily:"DM Mono,monospace", fontSize:9, fill:"rgba(255,255,255,.7)", letterSpacing:".1em" }}>
              OGUN STATE HQ
            </text>

            {/* Vertical 3D pillar under core */}
            <line x1="200" y1="222" x2="200" y2="260" stroke="rgba(204,0,0,.3)" strokeWidth="1.5" strokeDasharray="3 2"/>
            <ellipse cx="200" cy="262" rx="12" ry="4" fill="rgba(204,0,0,.2)"/>
          </svg>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div style={{
        display:"grid", gridTemplateColumns:"repeat(3,1fr)",
        borderTop:"1px solid rgba(255,255,255,.07)",
        paddingTop:12, marginTop:8,
        position:"relative", zIndex:7,
        gap:4,
      }}>
        {[
          {val:"9", label:"Partner States"},
          {val:"280K", label:"Units / Year"},
          {val:"<60m", label:"Delivery"},
        ].map(s => (
          <div key={s.label} style={{ textAlign:"center" }}>
            <div className="font-display" style={{ fontSize:"clamp(18px,2.2vw,26px)", fontWeight:800, color:"#CC0000", lineHeight:1 }}>{s.val}</div>
            <div className="caption" style={{ color:"rgba(255,255,255,.3)", fontSize:8, marginTop:3 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes nv-scan      { 0%{top:-2px} 100%{top:100%} }
        @keyframes nv-blink     { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes nv-core-spin { from{stroke-dashoffset:0} to{stroke-dashoffset:52} }
        @keyframes nv-orbit     { from{stroke-dashoffset:0} to{stroke-dashoffset:100} }
        @keyframes nv-expand    { 0%{r:20;opacity:.7} 100%{r:150;opacity:0} }
        @keyframes nv-pulse     { 0%,100%{r:13;opacity:.5} 50%{r:17;opacity:1} }
        @keyframes nv-flow      { from{stroke-dashoffset:0} to{stroke-dashoffset:-65} }
      `}</style>
    </div>
  );
}
