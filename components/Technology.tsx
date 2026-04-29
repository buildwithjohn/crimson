"use client";
import { useReveal } from "./useReveal";

const STEPS = [
  {
    num: 1,
    icon: "🩸",
    label: "Sample Receiving",
    sublabel: "Sample Intake",
    subtext: "Controlled intake from Large Donor Drives",
    punchline: "Direct Donor Drive intake. Zero friction.",
    special: "intake",
    color: "#CC0000",
  },
  {
    num: 2,
    icon: "⚙️",
    label: "Automated Sorting (BLIM)",
    sublabel: "Pre-Analytics Automation",
    subtext: "Labeling • Routing • Tracking",
    punchline: "Pre-analytics fully automated.",
    special: null,
    color: "#CC0000",
  },
  {
    num: 3,
    icon: "🔄",
    label: "Double Centrifuge (p671)",
    sublabel: "Centrifugation Core",
    subtext: "Standardized sample prep",
    punchline: "Standardized sample integrity at scale.",
    special: null,
    color: "#CC0000",
  },
  {
    num: 4,
    icon: "🏗️",
    label: "CCM Vertical Flow",
    sublabel: "Vertical Transport System",
    subtext: "Floor-to-floor automation",
    punchline: "No manual transfer. Continuous vertical flow.",
    special: "conveyor",
    color: "#CC0000",
  },
  {
    num: 5,
    icon: "🧬",
    label: "e801 + cobas 8800",
    sublabel: "Diagnostic Engine",
    subtext: "Immunoassay + NAT screening",
    punchline: "Dual-layer diagnostics: serology + molecular.",
    special: "analyzer",
    color: "#CC0000",
  },
  {
    num: 6,
    icon: "🗄️",
    label: "Automated Storage (p701)",
    sublabel: "Smart Archiving",
    subtext: "Traceable sample retention",
    punchline: "Every sample tracked. Nothing lost.",
    special: null,
    color: "#CC0000",
  },
  {
    num: 7,
    icon: "🚁",
    label: "Dispatch & Delivery",
    sublabel: "Delivery Intelligence",
    subtext: "≤60 min emergency response",
    punchline: "From vein to patient in under 60 minutes.",
    special: "drone",
    color: "#CC0000",
  },
];

const DATA_FLOATS = [
  "20,000 units/month",
  "≤60 min delivery",
  "2,500 tubes/hour",
  "99.99% accuracy",
  "Zero manual steps",
];

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
      {/* Faint grid background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(0,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
      }}/>

      {/* Floating data numbers — faint background overlay */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", overflow:"hidden", zIndex:1 }}>
        {DATA_FLOATS.map((val, i) => (
          <div key={val} style={{
            position:"absolute",
            top: `${15 + i * 17}%`,
            left: `${3 + (i % 2) * 55}%`,
            fontFamily:"var(--font-mono)",
            fontSize: "clamp(11px,1.2vw,14px)",
            color:"rgba(204,0,0,.07)",
            letterSpacing:".12em",
            animation:`tech-data-fade 4s ease-in-out ${i*1.2}s infinite`,
            userSelect:"none",
          }}>{val}</div>
        ))}
      </div>

      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* ══ OPENING STATEMENT ══════════════════════════════════════════ */}
        <div style={{
          textAlign:"center",
          maxWidth:720,
          margin:"0 auto clamp(56px,7vw,96px)",
        }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:16 }}>
            Core Technology
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{
            color:"var(--ink)", marginBottom:14,
          }}>
            Automated Blood{" "}
            <em style={{ color:"var(--crimson)" }}>Intelligence Infrastructure</em>
          </h2>
          <p className="body-lg reveal delay-2" style={{ color:"var(--steel)" }}>
            CrimsonWings operates a{" "}
            <strong style={{ color:"var(--ink)" }}>fully integrated, automation-driven blood processing and logistics system</strong>
            , engineered for speed, safety, and scale.
          </p>
        </div>

        {/* ══ MAIN 2-COLUMN FLOW ═════════════════════════════════════════ */}
        <div style={{
          display:"grid",
          gap:"clamp(32px,5vw,64px)",
          alignItems:"flex-start",
          marginBottom:"clamp(56px,7vw,96px)",
        }} className="tech-two-col">

          {/* ── LEFT: 7-step vertical flow ── */}
          <div style={{ position:"relative" }}>

            {/* Animated vertical line connecting all cards */}
            <div style={{
              position:"absolute",
              left: 28,
              top: 40,
              bottom: 40,
              width: 2,
              background:"rgba(204,0,0,.1)",
              overflow:"hidden",
              zIndex:0,
            }}>
              {/* Glowing pulse traveling downward */}
              <div style={{
                position:"absolute",
                left:0, right:0,
                height:"25%",
                background:"linear-gradient(to bottom, transparent, #CC0000, transparent)",
                animation:"tech-pulse-down 2.5s ease-in-out infinite",
              }}/>
            </div>

            {/* Steps */}
            <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
              {STEPS.map((step, i) => (
                <div key={step.num}>
                  {/* Card */}
                  <div
                    className="reveal"
                    style={{
                      transitionDelay: `${i * 0.08}s`,
                      position:"relative",
                      zIndex:1,
                    }}
                  >
                    <div style={{
                      display:"flex", alignItems:"center", gap:16,
                      background:"#fff",
                      borderRadius:16,
                      boxShadow:"0 2px 16px rgba(0,0,0,.06), 0 1px 4px rgba(0,0,0,.04)",
                      padding:"clamp(14px,1.8vw,20px) clamp(16px,2vw,24px)",
                      border:"1px solid rgba(204,0,0,.08)",
                      transition:"transform .25s var(--ease-expo), box-shadow .25s, border-color .25s",
                      cursor:"default",
                    }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "translateY(-3px) scale(1.01)";
                        el.style.boxShadow = "0 8px 32px rgba(204,0,0,.14), 0 2px 8px rgba(0,0,0,.06)";
                        el.style.borderColor = "rgba(204,0,0,.3)";
                        const icon = el.querySelector(".step-icon") as HTMLElement;
                        if (icon) { icon.style.background = "rgba(204,0,0,.15)"; icon.style.boxShadow = "0 0 16px rgba(204,0,0,.4)"; }
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "none";
                        el.style.boxShadow = "0 2px 16px rgba(0,0,0,.06), 0 1px 4px rgba(0,0,0,.04)";
                        el.style.borderColor = "rgba(204,0,0,.08)";
                        const icon = el.querySelector(".step-icon") as HTMLElement;
                        if (icon) { icon.style.background = "rgba(204,0,0,.07)"; icon.style.boxShadow = "none"; }
                      }}
                    >
                      {/* Step number + icon */}
                      <div className="step-icon" style={{
                        width:56, height:56, borderRadius:"50%", flexShrink:0,
                        background:"rgba(204,0,0,.07)",
                        border:"1.5px solid rgba(204,0,0,.15)",
                        display:"flex", flexDirection:"column",
                        alignItems:"center", justifyContent:"center",
                        gap:1,
                        transition:"background .25s, box-shadow .25s",
                        position:"relative", overflow:"hidden",
                      }}>
                        {/* Analyzer pulsing rings — step 5 */}
                        {step.special === "analyzer" && (
                          <>
                            <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:"2px solid rgba(204,0,0,.4)", animation:"tech-ring-pulse 1.4s ease-out infinite" }}/>
                            <div style={{ position:"absolute", inset:4, borderRadius:"50%", border:"1px solid rgba(204,0,0,.25)", animation:"tech-ring-pulse 1.4s ease-out .4s infinite" }}/>
                          </>
                        )}
                        <span style={{ fontSize:20, lineHeight:1 }}>{step.icon}</span>
                        <span className="font-mono" style={{ fontSize:8, color:"rgba(204,0,0,.6)", letterSpacing:".08em" }}>0{step.num}</span>
                      </div>

                      {/* Text */}
                      <div style={{ flex:1, minWidth:0 }}>
                        <div className="caption" style={{ color:"rgba(204,0,0,.55)", fontSize:9, marginBottom:3, letterSpacing:".12em" }}>
                          {step.sublabel}
                        </div>
                        <div className="font-display" style={{
                          fontSize:"clamp(14px,1.5vw,17px)", fontWeight:700,
                          color:"var(--ink)", lineHeight:1.2, marginBottom:4,
                        }}>
                          {step.label}
                        </div>
                        <div style={{ fontSize:12, color:"var(--steel-light)", lineHeight:1.4 }}>
                          {step.subtext}
                        </div>

                        {/* Conveyor belt — step 4 */}
                        {step.special === "conveyor" && (
                          <div style={{ marginTop:8, height:6, background:"rgba(204,0,0,.06)", borderRadius:3, overflow:"hidden", position:"relative" }}>
                            <div style={{
                              position:"absolute", inset:0,
                              background:"repeating-linear-gradient(90deg, rgba(204,0,0,.4) 0px, rgba(204,0,0,.4) 8px, transparent 8px, transparent 16px)",
                              animation:"tech-conveyor 1s linear infinite",
                            }}/>
                          </div>
                        )}

                        {/* Drone trail — step 7 */}
                        {step.special === "drone" && (
                          <div style={{ marginTop:8, position:"relative", height:12 }}>
                            <div style={{
                              position:"absolute", left:0, top:"50%", transform:"translateY(-50%)",
                              fontSize:16,
                              animation:"tech-drone-fly 2.5s ease-in-out infinite",
                            }}>🚁</div>
                            <div style={{
                              position:"absolute", left:20, top:"50%", transform:"translateY(-50%)",
                              height:1, width:60,
                              background:"linear-gradient(to right, rgba(204,0,0,.5), transparent)",
                              animation:"tech-drone-trail 2.5s ease-in-out infinite",
                            }}/>
                          </div>
                        )}
                      </div>

                      {/* Flow particle indicator */}
                      <div style={{ flexShrink:0, display:"flex", flexDirection:"column", gap:3 }}>
                        {[0,1,2].map(j => (
                          <div key={j} style={{
                            width:3, height: 6 + j*3,
                            background:"rgba(204,0,0,.3)",
                            borderRadius:2,
                            animation:`tech-bar 1s ease-in-out ${j*.15 + i*.05}s infinite`,
                          }}/>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow + flow particle between steps */}
                  {i < STEPS.length - 1 && (
                    <div style={{
                      display:"flex", flexDirection:"column", alignItems:"center",
                      paddingLeft:28, gap:2, margin:"4px 0",
                      position:"relative", zIndex:1,
                    }}>
                      {/* Traveling dot */}
                      <div style={{
                        width:8, height:8, borderRadius:"50%",
                        background:"#CC0000",
                        boxShadow:"0 0 8px rgba(204,0,0,.8)",
                        animation:`tech-particle-down 2.5s ease-in-out ${i * 0.3}s infinite`,
                        /* speed increases toward delivery */
                        animationDuration: `${2.5 - i * 0.2}s`,
                      }}/>
                      {/* Downward arrow */}
                      <div style={{
                        width:0, height:0,
                        borderLeft:"6px solid transparent",
                        borderRight:"6px solid transparent",
                        borderTop:`8px solid rgba(204,0,0,${i === 3 ? .6 : .35})`,
                        animation:"tech-arrow-pulse 1.5s ease-in-out infinite",
                        animationDelay: `${i * 0.15}s`,
                        /* Step 4 arrow is thicker to mark transition */
                        transform: i === 3 ? "scale(1.3)" : "none",
                      }}/>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: punchlines ── */}
          <div style={{ paddingTop: "clamp(8px,2vw,32px)" }}>
            {/* Micro-header */}
            <div className="reveal" style={{
              background:"var(--ink)",
              padding:"clamp(16px,2vw,24px) clamp(20px,2.5vw,32px)",
              borderRadius:12,
              marginBottom:"clamp(24px,3vw,40px)",
              position:"relative", overflow:"hidden",
            }}>
              <div style={{
                position:"absolute", top:0, left:0, right:0, height:3,
                background:"linear-gradient(90deg,var(--crimson),#2F80ED,var(--crimson))",
              }}/>
              <h3 className="font-display" style={{
                fontSize:"clamp(18px,2vw,26px)", fontWeight:800,
                color:"#fff", lineHeight:1.25, textAlign:"center",
              }}>
                One continuous system.{" "}
                <em style={{ color:"var(--crimson)" }}>No breaks. No delays.</em>
              </h3>
            </div>

            {/* Punchlines — aligned to steps */}
            <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
              {STEPS.map((step, i) => (
                <div key={step.num}>
                  <div
                    className="reveal"
                    style={{
                      transitionDelay: `${i * 0.09}s`,
                      display:"flex", alignItems:"center", gap:14,
                      padding:"clamp(14px,1.8vw,20px) clamp(16px,2vw,24px)",
                      background: i % 2 === 0 ? "#fff" : "rgba(204,0,0,.02)",
                      borderRadius:12,
                      border:"1px solid rgba(204,0,0,.07)",
                      transition:"background .2s, border-color .2s",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(204,0,0,.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,.2)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "#fff" : "rgba(204,0,0,.02)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,.07)";
                    }}
                  >
                    {/* Step number badge */}
                    <div style={{
                      flexShrink:0,
                      width:32, height:32, borderRadius:"50%",
                      background:"rgba(204,0,0,.08)",
                      border:"1.5px solid rgba(204,0,0,.2)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                    }}>
                      <span className="font-mono" style={{ fontSize:10, fontWeight:700, color:"var(--crimson)" }}>
                        {step.num}
                      </span>
                    </div>
                    {/* Punchline */}
                    <p className="font-display" style={{
                      fontSize:"clamp(14px,1.4vw,17px)", fontWeight:600,
                      color:"var(--ink)", lineHeight:1.4, margin:0,
                    }}>
                      {step.punchline}
                    </p>
                  </div>

                  {/* Spacer between punchlines matching step gaps */}
                  {i < STEPS.length - 1 && <div style={{ height:10 }}/>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ MOVING ANIMATION STRIP ═════════════════════════════════════ */}
        <div className="reveal" style={{
          background:"var(--ink)",
          borderRadius:16,
          padding:"clamp(20px,3vw,36px)",
          marginBottom:"clamp(40px,5vw,64px)",
          position:"relative", overflow:"hidden",
          transitionDelay:".3s",
        }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,var(--crimson),#2F80ED,var(--crimson))" }}/>

          {/* Label */}
          <div className="caption" style={{ color:"rgba(255,255,255,.35)", marginBottom:20, textAlign:"center", fontSize:10 }}>
            Sample → Conveyor → Analyzer → Storage → Delivery
          </div>

          {/* Animation track */}
          <div style={{
            display:"flex", alignItems:"center",
            gap:0, overflowX:"auto",
            paddingBottom:8,
          }}>
            {[
              {icon:"🩸", label:"Intake"},
              {icon:"⚙️", label:"Processing"},
              {icon:"🏗️", label:"Conveyor"},
              {icon:"🧬", label:"Analyzer"},
              {icon:"🗄️", label:"Storage"},
              {icon:"🚁", label:"Delivery"},
            ].map((item, i) => (
              <div key={item.label} style={{ display:"flex", alignItems:"center", flex:1, minWidth:0 }}>
                {/* Node */}
                <div style={{
                  display:"flex", flexDirection:"column", alignItems:"center",
                  gap:6, flexShrink:0,
                }}>
                  <div style={{
                    width:48, height:48, borderRadius:"50%",
                    background: i === 0 || i === 5 ? "rgba(204,0,0,.3)" : "rgba(255,255,255,.06)",
                    border:"1.5px solid rgba(204,0,0,.4)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:20,
                    animation:`tech-node-glow 2s ease-in-out ${i * 0.3}s infinite`,
                  }}>{item.icon}</div>
                  <span className="caption" style={{ color:"rgba(255,255,255,.4)", fontSize:9, textAlign:"center" }}>{item.label}</span>
                </div>

                {/* Connector with traveling dot */}
                {i < 5 && (
                  <div style={{ flex:1, height:2, background:"rgba(255,255,255,.08)", position:"relative", overflow:"visible", margin:"0 4px", marginBottom:20 }}>
                    {/* Static dashes */}
                    <div style={{ position:"absolute", inset:0, background:"repeating-linear-gradient(90deg,rgba(204,0,0,.3) 0,rgba(204,0,0,.3) 6px,transparent 6px,transparent 14px)" }}/>
                    {/* Traveling dot — speed increases */}
                    <div style={{
                      position:"absolute", top:"50%", transform:"translateY(-50%)",
                      width:8, height:8, borderRadius:"50%",
                      background:"#CC0000",
                      boxShadow:"0 0 10px rgba(204,0,0,.9)",
                      animation:`tech-track-dot 1.5s linear ${i * 0.22}s infinite`,
                      /* speed increases toward delivery */
                      animationDuration:`${1.5 - i * 0.18}s`,
                    }}/>
                    {/* Arrow head */}
                    <div style={{
                      position:"absolute", right:-5, top:"50%", transform:"translateY(-50%)",
                      width:0, height:0,
                      borderTop:"4px solid transparent",
                      borderBottom:"4px solid transparent",
                      borderLeft:"6px solid rgba(204,0,0,.5)",
                    }}/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* ══ TECHNOLOGY OVERVIEW VIDEO ════════════════════════════════════ */}
        <div className="reveal" style={{
          marginBottom:"clamp(40px,5vw,64px)",
          transitionDelay:".2s",
        }}>
          {/* Header */}
          <div style={{
            display:"flex", alignItems:"center", justifyContent:"space-between",
            marginBottom:16, flexWrap:"wrap", gap:12,
          }}>
            <div>
              <h3 className="font-display" style={{
                fontSize:"clamp(20px,2.5vw,28px)", fontWeight:700,
                color:"var(--ink)", marginBottom:4,
              }}>
                See the Full System in Action
              </h3>
              <p className="body-md" style={{ color:"var(--steel)" }}>
                End-to-end automation — from donor intake to patient delivery in 60 seconds.
              </p>
            </div>
            <div style={{
              display:"flex", alignItems:"center", gap:8,
              padding:"8px 16px",
              background:"rgba(204,0,0,.07)",
              border:"1px solid rgba(204,0,0,.2)",
            }}>
              <div style={{ width:8, height:8, borderRadius:"50%", background:"var(--crimson)", animation:"tech-node-glow 1.5s ease-in-out infinite" }}/>
              <span className="caption" style={{ color:"var(--crimson)", fontSize:10 }}>7 Steps · 64 Seconds</span>
            </div>
          </div>

          {/* Video player */}
          <div style={{
            position:"relative",
            borderRadius:12,
            overflow:"hidden",
            border:"2px solid rgba(204,0,0,.2)",
            boxShadow:"0 8px 48px rgba(0,0,0,.12), 0 2px 16px rgba(204,0,0,.08)",
            background:"#000",
          }}>
            {/* Crimson top bar */}
            <div style={{
              position:"absolute", top:0, left:0, right:0, height:4, zIndex:2,
              background:"linear-gradient(90deg, var(--crimson), #2F80ED, var(--crimson))",
            }}/>

            <video
              controls
              playsInline
              preload="metadata"
              poster="/tech-dispatch.jpg"
              style={{
                width:"100%",
                display:"block",
                maxHeight:"540px",
                objectFit:"contain",
                background:"#000",
              }}
            >
              <source src="/tech-overview.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Caption */}
          <div style={{
            display:"flex", justifyContent:"center", gap:"clamp(16px,4vw,48px)",
            marginTop:16, flexWrap:"wrap",
          }}>
            {[
              "Sample Intake","Automated Sorting","Centrifugation",
              "Vertical Transport","Diagnostics","Smart Archiving","Delivery",
            ].map((label, i) => (
              <div key={label} style={{ display:"flex", alignItems:"center", gap:6 }}>
                <div style={{
                  width:18, height:18, borderRadius:"50%",
                  background:"rgba(204,0,0,.1)",
                  border:"1px solid rgba(204,0,0,.3)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  flexShrink:0,
                }}>
                  <span className="font-mono" style={{ fontSize:7, fontWeight:700, color:"var(--crimson)" }}>
                    {String(i+1).padStart(2,"0")}
                  </span>
                </div>
                <span className="caption" style={{ fontSize:9, color:"var(--steel-light)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ CLOSING STATEMENT ══════════════════════════════════════════ */}
        <div className="reveal" style={{
          textAlign:"center",
          padding:"clamp(40px,5vw,64px)",
          background:"linear-gradient(135deg, #060D1A 0%, #0B1F33 100%)",
          borderRadius:16,
          position:"relative", overflow:"hidden",
          transitionDelay:".4s",
        }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg,var(--crimson),#2F80ED,var(--crimson))" }}/>
          {/* Glow */}
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:400, height:200, borderRadius:"50%", background:"radial-gradient(ellipse,rgba(204,0,0,.12),transparent 70%)", pointerEvents:"none" }}/>

          <div style={{ position:"relative", zIndex:2 }}>
            <div className="caption" style={{ color:"rgba(255,255,255,.35)", marginBottom:16, letterSpacing:".2em" }}>
              Platform Architecture
            </div>
            <h3 className="h3 font-display" style={{ color:"#fff", marginBottom:14, lineHeight:1.3 }}>
              A Vertically Integrated{" "}
              <em style={{ color:"var(--crimson)" }}>Transfusion Technology Platform</em>
            </h3>
            <p style={{
              fontSize:"clamp(16px,1.6vw,19px)",
              color:"rgba(255,255,255,.65)",
              maxWidth:620, margin:"0 auto",
              fontStyle:"italic", lineHeight:1.75,
            }}>
              Combining automation, diagnostics, and logistics into one continuous blood delivery engine.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:900px){
          .tech-two-col { grid-template-columns: 1fr 1fr !important; }
        }

        @keyframes tech-pulse-down    { 0%{top:-25%} 100%{top:110%} }
        @keyframes tech-arrow-pulse   { 0%,100%{opacity:.35;transform:translateY(0)} 50%{opacity:1;transform:translateY(4px)} }
        @keyframes tech-particle-down { 0%{opacity:0;transform:translateY(-6px)} 20%{opacity:1} 80%{opacity:1} 100%{opacity:0;transform:translateY(20px)} }
        @keyframes tech-bar           { 0%,100%{transform:scaleY(1);opacity:.4} 50%{transform:scaleY(1.8);opacity:1} }
        @keyframes tech-ring-pulse    { 0%{transform:scale(1);opacity:.7} 100%{transform:scale(1.6);opacity:0} }
        @keyframes tech-conveyor      { from{background-position:0 0} to{background-position:32px 0} }
        @keyframes tech-drone-fly     { 0%,100%{transform:translateX(0) translateY(0)} 50%{transform:translateX(12px) translateY(-3px)} }
        @keyframes tech-drone-trail   { 0%,100%{opacity:.3;width:30px} 50%{opacity:.7;width:60px} }
        @keyframes tech-node-glow     { 0%,100%{box-shadow:0 0 0 rgba(204,0,0,0)} 50%{box-shadow:0 0 18px rgba(204,0,0,.6)} }
        @keyframes tech-track-dot     { 0%{left:0;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{left:100%;opacity:0} }
        @keyframes tech-data-fade     { 0%,100%{opacity:.07} 50%{opacity:.18} }
      `}</style>
    </section>
  );
}
