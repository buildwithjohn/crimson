"use client";
import { useReveal } from "./useReveal";
import { Shield, Zap, Network } from "lucide-react";

const STEPS = [
  {
    num: "01",
    label: "Sample Receiving",
    sublabel: "SAMPLE INTAKE",
    sub: "Controlled intake from Large Donor Drive",
    punch: "Direct Donor Drive intake. Zero friction.",
    special: null,
  },
  {
    num: "02",
    label: "Automated Sorting (BLIM)",
    sublabel: "PRE-ANALYTICS AUTOMATION",
    sub: "Labeling · Routing · Tracking",
    punch: "Pre-analytics fully automated.",
    special: null,
  },
  {
    num: "03",
    label: "Double Centrifuge / Aliquot (p671 / p612)",
    sublabel: "CENTRIFUGATION CORE",
    sub: "Standardized sample prep",
    punch: "Standardized sample integrity at scale.",
    special: null,
  },
  {
    num: "04",
    label: "CCM Vertical Flow",
    sublabel: "VERTICAL TRANSPORT SYSTEM",
    sub: "Floor-to-floor automation",
    punch: "No manual transfer. Continuous vertical flow.",
    special: "conveyor",
  },
  {
    num: "05",
    label: "e801 + cobas 6800",
    sublabel: "DIAGNOSTIC ENGINE",
    sub: "Immunoassay + NAT screening",
    punch: "Dual-layer diagnostics: serology + molecular.",
    special: "analyzer",
  },
  {
    num: "06",
    label: "Automated Archiving / Storage (p701)",
    sublabel: "SMART ARCHIVING",
    sub: "Traceable sample retention",
    punch: "Every sample tracked. Nothing lost.",
    special: null,
  },
  {
    num: "07",
    label: "Delivery Intelligence (Dispatch & Delivery)",
    sublabel: "DELIVERY INTELLIGENCE",
    sub: "≤60 min emergency response",
    punch: "From vein to patient in under 60 minutes.",
    special: "drone",
  },
];

const FLOW_NODES = ["Sample", "Conveyor", "Analyzer", "Storage", "Delivery"];

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

        {/* ══ MICRO HEADER ══ */}
        <div className="reveal" style={{
          background:"var(--ink)",
          padding:"clamp(16px,2vw,22px) clamp(20px,3vw,36px)",
          marginBottom:"clamp(32px,4vw,52px)",
          display:"flex", alignItems:"center", justifyContent:"center",
          position:"relative", overflow:"hidden",
          transitionDelay:".1s",
        }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,var(--crimson),#2F80ED,var(--crimson))" }}/>
          <p className="font-display" style={{ fontSize:"clamp(16px,1.8vw,22px)", fontWeight:700, color:"#fff", textAlign:"center", margin:0 }}>
            One continuous system.{" "}
            <em style={{ color:"var(--crimson)" }}>No breaks. No delays.</em>
          </p>
        </div>

        {/* ══ 2-COLUMN MAIN LAYOUT ══ */}
        <div style={{ display:"grid", gap:"clamp(24px,4vw,56px)", alignItems:"start", marginBottom:"clamp(40px,5vw,64px)" }} className="tech-grid">

          {/* ── LEFT: 7-step vertical flow ── */}
          <div style={{ position:"relative" }}>

            {/* Animated vertical connecting line */}
            <div style={{
              position:"absolute", left:22, top:28, bottom:28,
              width:2, background:"rgba(204,0,0,.1)", overflow:"hidden", zIndex:0,
            }}>
              <div style={{
                position:"absolute", left:0, right:0, height:"30%",
                background:"linear-gradient(to bottom, transparent, #CC0000, transparent)",
                animation:"t-pulse-down 2.2s ease-in-out infinite",
              }}/>
            </div>

            <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
              {STEPS.map((step, i) => (
                <div key={step.num}>
                  {/* Card */}
                  <div className="reveal" style={{ transitionDelay:`${i*.07}s`, position:"relative", zIndex:1 }}>
                    <div style={{
                      display:"flex", alignItems:"center", gap:14,
                      background:"#fff",
                      borderRadius:14,
                      boxShadow:"0 2px 14px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.04)",
                      padding:"clamp(12px,1.5vw,16px) clamp(14px,1.8vw,20px)",
                      border:"1px solid rgba(204,0,0,.07)",
                      transition:"transform .22s, box-shadow .22s, border-color .22s",
                      cursor:"default",
                    }}
                      onMouseEnter={e=>{
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform="translateY(-2px) scale(1.01)";
                        el.style.boxShadow="0 8px 28px rgba(204,0,0,.13), 0 2px 8px rgba(0,0,0,.05)";
                        el.style.borderColor="rgba(204,0,0,.28)";
                        const ic = el.querySelector(".t-icon") as HTMLElement;
                        if(ic){ic.style.background="rgba(204,0,0,.14)";ic.style.boxShadow="0 0 14px rgba(204,0,0,.35)";}
                      }}
                      onMouseLeave={e=>{
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform="none";
                        el.style.boxShadow="0 2px 14px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.04)";
                        el.style.borderColor="rgba(204,0,0,.07)";
                        const ic = el.querySelector(".t-icon") as HTMLElement;
                        if(ic){ic.style.background="rgba(204,0,0,.07)";ic.style.boxShadow="none";}
                      }}
                    >
                      {/* Icon circle */}
                      <div className="t-icon" style={{
                        width:46, height:46, borderRadius:"50%", flexShrink:0,
                        background:"rgba(204,0,0,.07)",
                        border:"1.5px solid rgba(204,0,0,.15)",
                        display:"flex", flexDirection:"column",
                        alignItems:"center", justifyContent:"center",
                        transition:"background .22s, box-shadow .22s",
                        position:"relative", overflow:"hidden", zIndex:1,
                      }}>
                        {/* Analyzer rings — step 5 */}
                        {step.special === "analyzer" && (
                          <>
                            <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:"2px solid rgba(204,0,0,.45)", animation:"t-ring 1.4s ease-out infinite" }}/>
                            <div style={{ position:"absolute", inset:5, borderRadius:"50%", border:"1px solid rgba(204,0,0,.25)", animation:"t-ring 1.4s ease-out .4s infinite" }}/>
                          </>
                        )}
                        <span style={{ fontSize:16, lineHeight:1 }}>
                          {["🩸","⚙️","🔄","🏗️","🧬","🗄️","🚁"][i]}
                        </span>
                        <span className="font-mono" style={{ fontSize:7, color:"rgba(204,0,0,.6)", marginTop:1 }}>{step.num}</span>
                      </div>

                      {/* Text */}
                      <div style={{ flex:1, minWidth:0 }}>
                        <div className="caption" style={{ color:"rgba(204,0,0,.5)", fontSize:8, marginBottom:2, letterSpacing:".12em" }}>
                          {step.sublabel}
                        </div>
                        <div className="font-display" style={{
                          fontSize:"clamp(12px,1.3vw,14px)", fontWeight:700,
                          color:"var(--ink)", lineHeight:1.25, marginBottom:3,
                        }}>
                          {step.label}
                        </div>
                        <div style={{ fontSize:11, color:"var(--steel-light)", lineHeight:1.4 }}>
                          {step.sub}
                        </div>

                        {/* Conveyor belt — step 4 */}
                        {step.special === "conveyor" && (
                          <div style={{ marginTop:6, height:5, background:"rgba(204,0,0,.06)", borderRadius:3, overflow:"hidden" }}>
                            <div style={{
                              position:"relative", height:"100%",
                              background:"repeating-linear-gradient(90deg,rgba(204,0,0,.45) 0,rgba(204,0,0,.45) 7px,transparent 7px,transparent 14px)",
                              animation:"t-conveyor .9s linear infinite",
                            }}/>
                          </div>
                        )}

                        {/* Drone trail — step 7 */}
                        {step.special === "drone" && (
                          <div style={{ marginTop:5, display:"flex", alignItems:"center", gap:6 }}>
                            <span style={{ fontSize:13, animation:"t-drone 2.5s ease-in-out infinite" }}>🚁</span>
                            <div style={{ flex:1, height:1, background:"linear-gradient(to right, rgba(204,0,0,.5), transparent)", animation:"t-trail 2.5s ease-in-out infinite" }}/>
                          </div>
                        )}
                      </div>

                      {/* Activity bars */}
                      <div style={{ flexShrink:0, display:"flex", gap:2, alignItems:"flex-end" }}>
                        {[3,5,4].map((h,j)=>(
                          <div key={j} style={{
                            width:3, height:h+2,
                            background:"rgba(204,0,0,.3)", borderRadius:2,
                            animation:`t-bar 1s ease-in-out ${j*.15+i*.04}s infinite`,
                          }}/>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow + particle between steps */}
                  {i < STEPS.length-1 && (
                    <div style={{
                      display:"flex", flexDirection:"column", alignItems:"flex-start",
                      paddingLeft:22, margin:"3px 0", gap:1, position:"relative", zIndex:1,
                    }}>
                      <div style={{
                        width:8, height:8, borderRadius:"50%",
                        background:"#CC0000", boxShadow:"0 0 7px rgba(204,0,0,.8)",
                        animation:`t-particle 2.2s ease-in-out ${i*.28}s infinite`,
                        animationDuration:`${2.2-i*.18}s`,
                      }}/>
                      <div style={{
                        width:0, height:0,
                        borderLeft:`5px solid transparent`,
                        borderRight:`5px solid transparent`,
                        borderTop:`7px solid rgba(204,0,0,${i===3?.6:.32})`,
                        transform: i===3 ? "scale(1.25)" : "none",
                        animation:"t-arrow 1.5s ease-in-out infinite",
                        animationDelay:`${i*.14}s`,
                      }}/>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: punchlines ── */}
          <div style={{ display:"flex", flexDirection:"column", gap:0, paddingTop:"clamp(4px,1vw,20px)" }}>
            {STEPS.map((step, i) => (
              <div key={step.num}>
                <div className="reveal" style={{
                  transitionDelay:`${i*.08}s`,
                  display:"flex", alignItems:"center", gap:12,
                  padding:"clamp(12px,1.5vw,16px) clamp(14px,1.8vw,20px)",
                  background: i%2===0 ? "#fff" : "rgba(204,0,0,.018)",
                  borderRadius:12,
                  border:"1px solid rgba(204,0,0,.065)",
                  transition:"background .2s, border-color .2s",
                  cursor:"default",
                }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(204,0,0,.05)";(e.currentTarget as HTMLElement).style.borderColor="rgba(204,0,0,.2)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background=i%2===0?"#fff":"rgba(204,0,0,.018)";(e.currentTarget as HTMLElement).style.borderColor="rgba(204,0,0,.065)";}}
                >
                  <div style={{
                    flexShrink:0, width:28, height:28, borderRadius:"50%",
                    background:"rgba(204,0,0,.08)", border:"1.5px solid rgba(204,0,0,.2)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <span className="font-mono" style={{ fontSize:9, fontWeight:700, color:"var(--crimson)" }}>{i+1}</span>
                  </div>
                  <p className="font-display" style={{
                    fontSize:"clamp(12px,1.2vw,14px)", fontWeight:600,
                    color:"var(--ink)", lineHeight:1.4, margin:0,
                  }}>
                    {step.punch}
                  </p>
                </div>
                {i < STEPS.length-1 && <div style={{ height:8 }}/>}
              </div>
            ))}
          </div>
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
        </div>

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

      <style>{`
        @media(min-width:900px){ .tech-grid{ grid-template-columns:1fr 1fr !important; } }
        @keyframes t-pulse-down  { 0%{top:-30%} 100%{top:110%} }
        @keyframes t-arrow       { 0%,100%{opacity:.32;transform:translateY(0)} 50%{opacity:1;transform:translateY(3px)} }
        @keyframes t-arrow-r     { 0%,100%{opacity:.55;transform:translateY(-50%)} 50%{opacity:1;transform:translateY(-50%) translateX(3px)} }
        @keyframes t-particle    { 0%{opacity:0;transform:translateY(-5px)} 20%{opacity:1} 80%{opacity:1} 100%{opacity:0;transform:translateY(18px)} }
        @keyframes t-bar         { 0%,100%{transform:scaleY(1);opacity:.4} 50%{transform:scaleY(1.9);opacity:1} }
        @keyframes t-ring        { 0%{transform:scale(1);opacity:.7} 100%{transform:scale(1.65);opacity:0} }
        @keyframes t-conveyor    { from{background-position:0 0} to{background-position:28px 0} }
        @keyframes t-drone       { 0%,100%{transform:translateX(0) translateY(0)} 50%{transform:translateX(10px) translateY(-3px)} }
        @keyframes t-trail       { 0%,100%{opacity:.3} 50%{opacity:.7} }
        @keyframes t-glow        { 0%,100%{box-shadow:0 0 0 rgba(204,0,0,0)} 50%{box-shadow:0 0 18px rgba(204,0,0,.55)} }
        @keyframes t-track       { 0%{left:0;opacity:0} 8%{opacity:1} 92%{opacity:1} 100%{left:100%;opacity:0} }
        @keyframes t-dash        { from{background-position:0 0} to{background-position:22px 0} }
      `}</style>
    </section>
  );
}
