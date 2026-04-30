"use client";
import { useReveal } from "./useReveal";
import { Shield, Zap, Network } from "lucide-react";

const FLOW_NODES = ["Sample", "Conveyor", "Analyzer", "Storage", "Delivery"];


/* ── Compact 3D Flow Chart — exactly per CEO sketch ──────────────────────
   Left: 7 diamond-shaped step nodes connected by animated line + arrows
   Right: punchlines aligned to each step
   Top: "One continuous system. No breaks. No delays."
   Animations: pulse line, traveling particles, conveyor (step4), analyzer rings (step5), drone trail (step7)
──────────────────────────────────────────────────────────────────────── */
function TechFlowChart() {
  const steps = [
    { n:"01", emoji:"🩸", label:"Sample Receiving",                  sub:"Controlled intake from Donor Drives",  punch:"Direct Donor Drive intake. Zero friction.",              special:null        },
    { n:"02", emoji:"⚙️", label:"Automated Sorting (BLIM)",          sub:"Labeling · Routing · Tracking",        punch:"Pre-analytics fully automated.",                         special:null        },
    { n:"03", emoji:"🔄", label:"Double Centrifuge / Aliquot",       sub:"p671 / p612 · Standardized sample prep", punch:"Standardized sample integrity at scale.",              special:null        },
    { n:"04", emoji:"🏗️", label:"CCM Vertical Flow",                 sub:"Floor-to-floor automation",            punch:"No manual transfer. Continuous vertical flow.",          special:"conveyor"  },
    { n:"05", emoji:"🧬", label:"e801 + cobas 6800",                 sub:"Immunoassay + NAT screening",          punch:"Dual-layer diagnostics: serology + molecular.",          special:"analyzer"  },
    { n:"06", emoji:"🗄️", label:"Automated Archiving / Storage",     sub:"p701 · Traceable sample retention",   punch:"Every sample tracked. Nothing lost.",                    special:null        },
    { n:"07", emoji:"🚁", label:"Delivery Intelligence",             sub:"Dispatch & Delivery · ≤60 min",        punch:"From vein to patient in under 60 minutes.",             special:"drone"     },
  ];

  return (
    <div style={{ background:"var(--white)", border:"1px solid rgba(204,0,0,.1)", borderRadius:16, overflow:"hidden" }}>

      {/* Header bar */}
      <div style={{ background:"var(--ink)", padding:"14px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10, position:"relative" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,#CC0000,#2F80ED,#CC0000)" }}/>
        <p className="font-display" style={{ fontSize:"clamp(14px,1.6vw,18px)", fontWeight:700, color:"#fff", margin:0 }}>
          One continuous system.{" "}
          <em style={{ color:"#CC0000" }}>No breaks. No delays.</em>
        </p>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <div style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 6px #22c55e", animation:"t-blink 1.8s ease-in-out infinite" }}/>
          <span className="font-mono" style={{ fontSize:9, color:"rgba(255,255,255,.45)", letterSpacing:".14em" }}>7 STEPS · AUTOMATED</span>
        </div>
      </div>

      {/* Two-column grid */}
      <div style={{ display:"grid", gap:0 }} className="tfc-grid">

        {/* LEFT — flow nodes */}
        <div style={{ padding:"clamp(16px,2.5vw,28px) clamp(12px,2vw,24px)", borderRight:"1px solid rgba(204,0,0,.08)", position:"relative" }}>

          {/* Vertical spine */}
          <div style={{
            position:"absolute", left:"clamp(28px,4vw,40px)", top:20, bottom:20,
            width:2, background:"rgba(204,0,0,.08)", overflow:"hidden",
          }}>
            <div style={{
              position:"absolute", left:0, right:0, height:"28%",
              background:"linear-gradient(to bottom,transparent,#CC0000,transparent)",
              animation:"t-pulse-down 2s ease-in-out infinite",
            }}/>
          </div>

          {steps.map((step, i) => (
            <div key={step.n}>
              {/* Step node */}
              <div style={{
                display:"flex", alignItems:"center", gap:12,
                animation:`t-fadein .4s ease-out ${i*.06}s both`,
                position:"relative", zIndex:1,
              }}>

                {/* Diamond icon — 3D rotated square */}
                <div style={{
                  width:44, height:44, flexShrink:0,
                  background: i===0||i===6 ? "#CC0000" : "#fff",
                  border:`2px solid ${i===0||i===6?"#CC0000":"rgba(204,0,0,.3)"}`,
                  transform:"rotate(45deg)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  boxShadow: i===0||i===6
                    ? "4px 4px 0 rgba(180,0,0,.25), -1px -1px 0 rgba(255,100,100,.2)"
                    : "3px 3px 0 rgba(204,0,0,.12), -1px -1px 0 rgba(255,255,255,.8)",
                  transition:"transform .2s, box-shadow .2s",
                  position:"relative", overflow:"hidden",
                  cursor:"default",
                }}
                  onMouseEnter={e=>{
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform="rotate(45deg) scale(1.12)";
                    el.style.boxShadow="5px 5px 0 rgba(204,0,0,.3), 0 0 16px rgba(204,0,0,.2)";
                  }}
                  onMouseLeave={e=>{
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform="rotate(45deg)";
                    el.style.boxShadow=i===0||i===6?"4px 4px 0 rgba(180,0,0,.25)":"3px 3px 0 rgba(204,0,0,.12)";
                  }}
                >
                  {/* Analyzer rings */}
                  {step.special==="analyzer" && (
                    <>
                      <div style={{ position:"absolute", inset:0, border:"2px solid rgba(204,0,0,.5)", animation:"t-ring 1.4s ease-out infinite", transform:"rotate(-45deg)" }}/>
                      <div style={{ position:"absolute", inset:6, border:"1px solid rgba(204,0,0,.3)", animation:"t-ring 1.4s ease-out .4s infinite", transform:"rotate(-45deg)" }}/>
                    </>
                  )}
                  <div style={{ transform:"rotate(-45deg)", fontSize:16, lineHeight:1, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <span style={{ color: i===0||i===6?"#fff":"inherit" }}>{step.emoji}</span>
                  </div>
                </div>

                {/* Text */}
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:2 }}>
                    <span className="font-mono" style={{ fontSize:8, fontWeight:700, color:"#CC0000" }}>{step.n}</span>
                    <div style={{ flex:1, height:"1px", background:"rgba(204,0,0,.1)" }}/>
                  </div>
                  <div className="font-display" style={{ fontSize:"clamp(11px,1.2vw,13px)", fontWeight:700, color:"var(--ink)", lineHeight:1.3, marginBottom:2 }}>
                    {step.label}
                  </div>
                  <div style={{ fontSize:10, color:"var(--steel-light)", lineHeight:1.4 }}>
                    {step.sub}
                  </div>
                  {/* Conveyor */}
                  {step.special==="conveyor" && (
                    <div style={{ marginTop:5, height:4, borderRadius:2, overflow:"hidden", background:"rgba(204,0,0,.06)" }}>
                      <div style={{ height:"100%", background:"repeating-linear-gradient(90deg,rgba(204,0,0,.5) 0,rgba(204,0,0,.5) 6px,transparent 6px,transparent 12px)", animation:"t-conveyor .8s linear infinite" }}/>
                    </div>
                  )}
                  {/* Drone */}
                  {step.special==="drone" && (
                    <div style={{ marginTop:4, display:"flex", alignItems:"center", gap:5 }}>
                      <span style={{ fontSize:11, animation:"t-drone 2.5s ease-in-out infinite" }}>🚁</span>
                      <div style={{ flex:1, height:1, background:"linear-gradient(to right,rgba(204,0,0,.5),transparent)", animation:"t-trail 2.5s ease-in-out infinite" }}/>
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow connector */}
              {i < steps.length-1 && (
                <div style={{ display:"flex", alignItems:"center", paddingLeft:"clamp(16px,3.5vw,32px)", margin:"4px 0", gap:4, position:"relative", zIndex:1 }}>
                  <div style={{
                    width:8, height:8, borderRadius:"50%",
                    background:"#CC0000", boxShadow:"0 0 6px rgba(204,0,0,.7)",
                    animation:`t-particle ${1.8-i*.15}s ease-in-out ${i*.25}s infinite`,
                    flexShrink:0,
                  }}/>
                  <div style={{
                    width:0, height:0,
                    borderLeft:"5px solid transparent",
                    borderRight:"5px solid transparent",
                    borderTop:`7px solid rgba(204,0,0,${i===3?.7:.3})`,
                    transform: i===3?"scale(1.3)":"none",
                    animation:"t-arrow 1.4s ease-in-out infinite",
                    animationDelay:`${i*.12}s`,
                  }}/>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT — punchlines */}
        <div style={{ padding:"clamp(16px,2.5vw,28px) clamp(12px,2vw,24px)", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
          {steps.map((step, i) => (
            <div key={step.n} style={{
              flex:1,
              display:"flex", alignItems:"center", gap:10,
              padding:"clamp(6px,1vw,10px) 0",
              borderBottom: i<steps.length-1?"1px solid rgba(204,0,0,.06)":"none",
              animation:`t-fadein .4s ease-out ${i*.07}s both`,
            }}>
              <div style={{
                width:22, height:22, borderRadius:"50%", flexShrink:0,
                background:"rgba(204,0,0,.07)", border:"1px solid rgba(204,0,0,.18)",
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                <span className="font-mono" style={{ fontSize:8, fontWeight:700, color:"#CC0000" }}>{i+1}</span>
              </div>
              <p className="font-display" style={{ fontSize:"clamp(11px,1.1vw,13px)", fontWeight:600, color:"var(--ink)", lineHeight:1.4, margin:0 }}>
                {step.punch}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(min-width:640px){ .tfc-grid{ grid-template-columns:1fr 1fr !important; } }
        @keyframes t-blink      { 0%,100%{opacity:1} 50%{opacity:.2} }
        @keyframes t-pulse-down { 0%{top:-28%} 100%{top:110%} }
        @keyframes t-fadein     { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
        @keyframes t-particle   { 0%{opacity:0;transform:translateY(-4px)} 20%{opacity:1} 80%{opacity:1} 100%{opacity:0;transform:translateY(14px)} }
        @keyframes t-arrow      { 0%,100%{opacity:.3;transform:translateY(0)} 50%{opacity:1;transform:translateY(3px)} }
        @keyframes t-ring       { 0%{transform:rotate(-45deg) scale(1);opacity:.7} 100%{transform:rotate(-45deg) scale(1.7);opacity:0} }
        @keyframes t-conveyor   { from{background-position:0 0} to{background-position:24px 0} }
        @keyframes t-drone      { 0%,100%{transform:translateX(0) translateY(0)} 50%{transform:translateX(8px) translateY(-2px)} }
        @keyframes t-trail      { 0%,100%{opacity:.3} 50%{opacity:.65} }
      `}</style>
    </div>
  );
}

export default function Technology() {
  const ref = useReveal();

  return (
    <section
      id="technology"
      ref={ref}
      style={{
        background: "#FAFAFA",
        paddingBlock: "var(--section-py)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint grid */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px)",
        backgroundSize:"48px 48px",
      }}/>

      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* ══ OPENING ══ */}
        <div style={{ textAlign:"center", maxWidth:640, margin:"0 auto clamp(40px,5vw,64px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:14 }}>
            Core Technology
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:12, fontSize:"clamp(28px,3.5vw,46px)" }}>
            Automated Blood{" "}
            <em style={{ color:"var(--crimson)" }}>Intelligence Infrastructure</em>
          </h2>
          <p className="body-md reveal delay-2" style={{ color:"var(--steel)" }}>
            CrimsonWings operates a{" "}
            <strong style={{ color:"var(--ink)" }}>fully integrated, automation-driven blood processing and logistics system</strong>
            {" "}— engineered for speed, safety, and scale.
          </p>
        </div>

        {/* ══ FLOW CHART — 2-column grid ══ */}
        <div className="reveal" style={{ marginBottom:"clamp(36px,5vw,56px)", transitionDelay:".1s" }}>
          <TechFlowChart/>
        </div>

        {/* ══ MOVING ANIMATION STRIP — Sample → Conveyor → Analyzer → Storage → Delivery ══ */}
        <div className="reveal" style={{
          background:"var(--ink)", borderRadius:14,
          padding:"clamp(18px,2.5vw,30px)",
          marginBottom:"clamp(40px,5vw,64px)",
          position:"relative", overflow:"hidden",
          transitionDelay:".3s",
        }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,var(--crimson),#2F80ED,var(--crimson))" }}/>
          <div className="caption" style={{ color:"rgba(255,255,255,.32)", textAlign:"center", marginBottom:18, fontSize:9, letterSpacing:".18em" }}>
            LIVE PIPELINE · Sample → Conveyor → Analyzer → Storage → Delivery
          </div>

          {/* Track */}
          <div style={{ overflowX:"auto", paddingBottom:6 }}>
            <div style={{ display:"flex", alignItems:"center", minWidth:560 }}>
              {FLOW_NODES.map((node, i) => (
                <div key={node} style={{ display:"flex", alignItems:"center", flex:1 }}>
                  {/* Node */}
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:8, flexShrink:0 }}>
                    <div style={{
                      width:52, height:52, borderRadius:"50%",
                      background: i===0||i===4 ? "linear-gradient(135deg,#CC0000,#880000)" : "rgba(255,255,255,.06)",
                      border:`2px solid ${i===0||i===4 ? "#CC0000" : "rgba(204,0,0,.45)"}`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:22,
                      animation:`t-glow 2.5s ease-in-out ${i*.3}s infinite`,
                    }}>
                      {["🩸","🏗️","🧬","🗄️","🚁"][i]}
                    </div>
                    <span className="caption" style={{ color:i===0||i===4?"rgba(255,255,255,.8)":"rgba(255,255,255,.45)", fontSize:9, textAlign:"center" }}>
                      {node}
                    </span>
                  </div>

                  {/* Connector */}
                  {i < FLOW_NODES.length-1 && (
                    <div style={{ flex:1, minWidth:12, height:52, position:"relative", display:"flex", alignItems:"center", margin:"0 4px", marginBottom:22 }}>
                      {/* Track line */}
                      <div style={{ position:"absolute", left:0, right:0, top:"50%", transform:"translateY(-50%)", height:2, background:"rgba(204,0,0,.15)", overflow:"hidden" }}>
                        <div style={{ position:"absolute", inset:0, background:"repeating-linear-gradient(90deg,rgba(204,0,0,.5) 0,rgba(204,0,0,.5) 5px,transparent 5px,transparent 11px)", animation:`t-dash ${1.3-i*.12}s linear infinite` }}/>
                      </div>
                      {/* Primary particle */}
                      <div style={{
                        position:"absolute", top:"50%", transform:"translateY(-50%)",
                        width:10, height:10, borderRadius:"50%",
                        background:"#CC0000", boxShadow:"0 0 12px rgba(204,0,0,.9)",
                        animation:`t-track ${1.3-i*.12}s linear ${i*.18}s infinite`,
                        zIndex:2,
                      }}/>
                      {/* Trailing particle */}
                      <div style={{
                        position:"absolute", top:"50%", transform:"translateY(-50%)",
                        width:6, height:6, borderRadius:"50%",
                        background:"rgba(204,0,0,.55)", boxShadow:"0 0 7px rgba(204,0,0,.6)",
                        animation:`t-track ${1.3-i*.12}s linear ${i*.18+0.28}s infinite`,
                        zIndex:2,
                      }}/>
                      {/* Arrow */}
                      <div style={{
                        position:"absolute", right:0, top:"50%", transform:"translateY(-50%)",
                        width:0, height:0,
                        borderTop:"5px solid transparent", borderBottom:"5px solid transparent",
                        borderLeft:"7px solid rgba(204,0,0,.55)",
                        animation:`t-arrow-r 1.5s ease-in-out ${i*.1}s infinite`,
                        zIndex:3,
                      }}/>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        <style>{`
          @keyframes t-glow    { 0%,100%{box-shadow:0 0 0 rgba(204,0,0,0)} 50%{box-shadow:0 0 18px rgba(204,0,0,.55)} }
          @keyframes t-track   { 0%{left:0;opacity:0} 8%{opacity:1} 92%{opacity:1} 100%{left:100%;opacity:0} }
          @keyframes t-dash    { from{background-position:0 0} to{background-position:22px 0} }
          @keyframes t-arrow-r { 0%,100%{opacity:.55;transform:translateY(-50%)} 50%{opacity:1;transform:translateY(-50%) translateX(3px)} }
        `}</style>

        {/* ══ CLOSING ══ */}
        <div className="reveal" style={{
          textAlign:"center",
          padding:"clamp(32px,4vw,52px)",
          background:"linear-gradient(135deg, #060D1A 0%, #0B1F33 100%)",
          borderRadius:14,
          position:"relative", overflow:"hidden",
          transitionDelay:".4s",
        }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg,var(--crimson),#2F80ED,var(--crimson))" }}/>
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:380, height:180, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(204,0,0,.12),transparent 70%)", pointerEvents:"none" }}/>
          <div style={{ position:"relative", zIndex:2 }}>
            <div style={{ display:"flex", justifyContent:"center", gap:14, flexWrap:"wrap", marginBottom:20 }}>
              {[Shield, Zap, Network].map((Icon, i) => (
                <div key={i} style={{ width:44, height:44, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(204,0,0,.2)", border:"1px solid rgba(204,0,0,.4)" }}>
                  <Icon size={20} style={{ color:"var(--crimson)" }}/>
                </div>
              ))}
            </div>
            <h3 className="h3 font-display" style={{ color:"#fff", marginBottom:12, fontSize:"clamp(18px,2.2vw,26px)" }}>
              A Vertically Integrated{" "}
              <em style={{ color:"var(--crimson)" }}>Transfusion Technology Platform</em>
            </h3>
            <p style={{ fontSize:"clamp(14px,1.4vw,17px)", color:"rgba(255,255,255,.6)", maxWidth:580, margin:"0 auto", fontStyle:"italic", lineHeight:1.75 }}>
              Combining automation, diagnostics, and logistics into one continuous blood delivery engine.
            </p>
          </div>
        </div>

      </div>


    </section>
  );
}
