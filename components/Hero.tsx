"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const STATS = [
  { value:"240K+",  label:"Blood Units · Year 1",   accent:true  },
  { value:"20K+",   label:"Units · Month Capacity", accent:false },
  { value:"<60min", label:"Emergency Delivery",     accent:false },
  { value:"100%",   label:"NAT-Screened Supply",    accent:false },
];

const TICKER = [
  "NAT Viral Screening","Walk-In Cold Rooms","Ultra-Low Temp Freezers",
  "Drone-Enabled Last Mile","Proprietary OS Platform","Triphasic Logistics",
  "National Blood Infrastructure","Lagos State Partnership",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => { const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const fn = (e: MouseEvent) => {
      const orb = el.querySelector(".hero-orb") as HTMLElement; if (!orb) return;
      orb.style.transform = `translate(calc(-50% + ${(e.clientX / window.innerWidth - .5) * 16}px), calc(-50% + ${(e.clientY / window.innerHeight - .5) * 8}px))`;
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  const f = (delay: string, extra?: React.CSSProperties): React.CSSProperties => ({
    opacity: on ? 1 : 0,
    transform: on ? "none" : "translateY(22px)",
    transition: `opacity .85s var(--ease-expo) ${delay}, transform .85s var(--ease-expo) ${delay}`,
    ...extra,
  });

  return (
    <section ref={ref} style={{
      /* Deep navy — NOT pure black */
      background: "#1C1C2E",
      paddingTop: "clamp(100px, 14vw, 140px)",
      paddingBottom: 0,
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column", minHeight: "100svh",
    }}>
      <div className="grid-lines-dark" style={{ position:"absolute", inset:0, opacity:.7 }}/>

      {/* Crimson glow — brighter */}
      <div className="hero-orb" style={{
        position:"absolute", width:"clamp(400px,55vw,700px)", height:"clamp(400px,55vw,700px)",
        borderRadius:"50%", pointerEvents:"none",
        background:"radial-gradient(circle, rgba(204,0,0,.25) 0%, rgba(204,0,0,.08) 55%, transparent 70%)",
        top:"50%", left:"65%", transform:"translate(-50%,-50%)", transition:"transform .8s ease-out",
      }}/>

      {/* Rings */}
      {[220,360,500].map((s,i) => (
        <div key={s} className="hero-rings" style={{
          position:"absolute", width:s, height:s, borderRadius:"50%",
          border:`1px solid rgba(204,0,0,${.18-i*.04})`,
          top:"50%", left:"65%", transform:"translate(-50%,-50%)",
          animation:`breathe ${3+i}s ease-in-out infinite`, animationDelay:`${i*.5}s`,
          pointerEvents:"none",
        }}/>
      ))}

      {/* Scan line */}
      <div style={{
        position:"absolute", left:0, right:0, height:1, pointerEvents:"none", zIndex:2,
        background:"linear-gradient(90deg,transparent,rgba(204,0,0,.5),transparent)",
        animation:"scanLine 10s linear infinite",
      }}/>

      {/* MAIN CONTENT */}
      <div className="container" style={{
        position:"relative", zIndex:10, flex:1,
        display:"flex", alignItems:"center",
        paddingTop:"clamp(24px,4vw,48px)",
        paddingBottom:"clamp(48px,6vw,80px)",
      }}>
        <div style={{ display:"grid", gap:"clamp(36px,5vw,64px)", width:"100%" }} className="hero-grid">

          {/* LEFT */}
          <div>
            {/* Live pill */}
            <div style={{
              ...f("0s"),
              display:"inline-flex", alignItems:"center", gap:10,
              padding:"8px 18px",
              background:"rgba(204,0,0,.15)", border:"1px solid rgba(204,0,0,.4)",
              marginBottom:28,
            }}>
              <span style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e", flexShrink:0, animation:"blink 2s ease-in-out infinite" }}/>
              <span className="caption" style={{ color:"rgba(255,255,255,.65)", fontSize:11, letterSpacing:".18em" }}>
                System Active · Lagos State Operations
              </span>
            </div>

            <div className="section-label" style={{ ...f(".1s"), color:"rgba(255,255,255,.5)", marginBottom:20 }}>
              CrimsonWings Blood Logistics Ltd
            </div>

            <h1 className="h1 font-display" style={{
              ...f(".2s"),
              color:"#fff", marginBottom:24,
            }}>
              Delivering{" "}
              <em style={{ color:"var(--crimson)", fontStyle:"italic" }}>Blood.</em>
              <br/>Saving{" "}
              <span style={{ color:"#fff" }}>Lives.</span>
              <br/>
              <span className="font-mono" style={{
                fontSize:"clamp(15px,2vw,24px)", color:"rgba(255,255,255,.4)",
                fontStyle:"normal", fontWeight:300, letterSpacing:".08em",
              }}>
                On Time. Every Time.
              </span>
            </h1>

            <p style={{
              ...f(".35s"),
              fontSize:"clamp(16px,1.6vw,20px)", lineHeight:1.8,
              color:"rgba(255,255,255,.62)", maxWidth:520, marginBottom:36,
            }}>
              Nigeria&apos;s most advanced digitized blood bank — integrating NAT viral
              screening, ultra-scale cold storage, and a proprietary OS platform
              with drone-enabled last-mile delivery across Lagos.
            </p>

            {/* CTAs */}
            <div style={{ ...f(".48s"), display:"flex", flexWrap:"wrap", gap:14, marginBottom:44 }}>
              <a href="#solution"  className="btn-primary"><span>Explore the Platform</span><ArrowRight size={16}/></a>
              <a href="#contact"   className="btn-ghost"  ><span>Partner With Us</span></a>
            </div>

            {/* Three pillars */}
            <div style={{ ...f(".6s"), display:"flex", flexWrap:"wrap", gap:"18px 32px" }}>
              {["Clinical Authority","Operational Scale","Tech Superiority"].map((p,i) => (
                <div key={p} style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <span className="caption" style={{ color:"var(--crimson)", fontSize:11 }}>0{i+1}</span>
                  <div style={{ width:1, height:20, background:"rgba(255,255,255,.15)" }}/>
                  <span className="caption" style={{ color:"rgba(255,255,255,.45)", fontSize:11 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — stats */}
          <div style={{ ...f(".3s"), display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            {STATS.map(s => (
              <div key={s.label} style={{
                background: s.accent ? "var(--crimson)" : "rgba(255,255,255,.06)",
                border:`1px solid ${s.accent ? "var(--crimson)" : "rgba(255,255,255,.12)"}`,
                padding:"clamp(20px,3vw,32px) clamp(18px,2.5vw,28px)",
                position:"relative", overflow:"hidden",
                boxShadow: s.accent ? "0 4px 32px rgba(204,0,0,.4)" : "none",
              }}>
                <div className="font-display" style={{
                  fontSize:"clamp(28px,4vw,50px)",
                  fontWeight:800, color:"#fff", lineHeight:1, marginBottom:10,
                }}>
                  {s.value}
                </div>
                <div className="caption" style={{
                  fontSize:10, letterSpacing:".12em",
                  color: s.accent ? "rgba(255,255,255,.78)" : "rgba(255,255,255,.45)",
                  lineHeight:1.5,
                }}>
                  {s.label}
                </div>
                <div style={{
                  position:"absolute", top:0, right:0, width:24, height:24,
                  borderTop:`1px solid ${s.accent ? "rgba(255,255,255,.25)" : "rgba(204,0,0,.35)"}`,
                  borderRight:`1px solid ${s.accent ? "rgba(255,255,255,.25)" : "rgba(204,0,0,.35)"}`,
                }}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div style={{
        borderTop:"1px solid rgba(204,0,0,.3)",
        background:"rgba(204,0,0,.1)",
        padding:"14px 0",
        overflow:"hidden", flexShrink:0,
        position:"relative", zIndex:10,
        opacity: on ? 1 : 0, transition:"opacity .6s 1s",
      }}>
        <div className="animate-ticker" style={{ display:"flex", whiteSpace:"nowrap" }}>
          {[...TICKER,...TICKER].map((item,i) => (
            <span key={i} style={{ display:"inline-flex", alignItems:"center", padding:"0 32px" }}>
              <span className="caption" style={{ color:"rgba(255,255,255,.45)", letterSpacing:".2em", fontSize:11 }}>{item}</span>
              <span style={{ color:"var(--crimson)", opacity:.7, marginLeft:32, fontSize:10 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position:"absolute", bottom:88, left:"50%", transform:"translateX(-50%)",
        display:"flex", flexDirection:"column", alignItems:"center", gap:6,
        zIndex:10, pointerEvents:"none",
        opacity: on ? .5 : 0, transition:"opacity .6s 1.2s",
      }}>
        <span className="caption" style={{ color:"rgba(255,255,255,.45)", fontSize:10 }}>SCROLL</span>
        <ChevronDown size={14} style={{ color:"rgba(255,255,255,.45)", animation:"bounce 1.2s ease-in-out infinite" }}/>
      </div>

      <style>{`
        @media (min-width:900px){ .hero-grid{ grid-template-columns:1fr 1fr !important; } }
        @media (max-width:480px){ .hero-rings{ display:none !important; } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}
