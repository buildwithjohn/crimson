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
  const ref    = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOn(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const fn = (e: MouseEvent) => {
      const orb = el.querySelector(".hero-orb") as HTMLElement; if (!orb) return;
      const x = (e.clientX / window.innerWidth  - .5) * 16;
      const y = (e.clientY / window.innerHeight - .5) * 8;
      orb.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  const fade = (delay: string, extra?: React.CSSProperties): React.CSSProperties => ({
    opacity:   on ? 1 : 0,
    transform: on ? "none" : "translateY(22px)",
    transition:`opacity .85s var(--ease-expo) ${delay}, transform .85s var(--ease-expo) ${delay}`,
    ...extra,
  });

  return (
    <section
      ref={ref}
      style={{
        background: "var(--ink)",
        /* The navbar is fixed. We push the hero down by the navbar height.
           Navbar heights:
             Mobile (<640px) : ~72px  (44px logo + 14px padding × 2)
             Tablet (640-1024): ~84px
             Desktop (>1024px): ~100px (60px logo + 20px padding × 2)
           We add extra breathing room (24–40px) on top of that.
           So total paddingTop:
             Mobile  : 72 + 32 = ~104px  → use 100px safe minimum
             Desktop : 100 + 32 = ~132px → use 130px cap
        */
        paddingTop: "clamp(100px, 14vw, 140px)",
        paddingBottom: 0,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: "100svh",   /* svh = small viewport height — respects mobile browser chrome */
      }}
    >
      {/* Background grid */}
      <div className="grid-lines-dark" style={{ position:"absolute", inset:0, opacity:.65 }}/>

      {/* Glow orb */}
      <div className="hero-orb" style={{
        position:"absolute", width:"clamp(300px,50vw,600px)", height:"clamp(300px,50vw,600px)",
        borderRadius:"50%", pointerEvents:"none",
        background:"radial-gradient(circle, rgba(204,0,0,.2) 0%, rgba(204,0,0,.05) 55%, transparent 70%)",
        top:"50%", left:"65%", transform:"translate(-50%,-50%)",
        transition:"transform .8s ease-out",
      }}/>

      {/* Animated rings — hidden on very small screens */}
      {[220,360,500].map((s,i)=>(
        <div key={s} className="hero-rings" style={{
          position:"absolute", width:s, height:s, borderRadius:"50%",
          border:`1px solid rgba(204,0,0,${.12-i*.03})`,
          top:"50%", left:"65%", transform:"translate(-50%,-50%)",
          animation:`breathe ${3+i}s ease-in-out infinite`, animationDelay:`${i*.5}s`,
          pointerEvents:"none",
        }}/>
      ))}

      {/* Scan line */}
      <div style={{
        position:"absolute", left:0, right:0, height:1, pointerEvents:"none", zIndex:2,
        background:"linear-gradient(90deg,transparent,rgba(204,0,0,.35),transparent)",
        animation:"scanLine 10s linear infinite",
      }}/>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <div
        className="container"
        style={{
          position:"relative", zIndex:10,
          flex:1,
          display:"flex",
          alignItems:"center",
          paddingTop: "clamp(24px,4vw,48px)",
          paddingBottom:"clamp(40px,5vw,72px)",
        }}
      >
        <div style={{
          display:"grid",
          gridTemplateColumns:"1fr",
          gap:"clamp(32px,5vw,56px)",
          width:"100%",
        }} className="hero-grid">

          {/* ── LEFT ─────────────────── */}
          <div>
            {/* Status pill */}
            <div style={{
              ...fade("0s"),
              display:"inline-flex", alignItems:"center", gap:8,
              padding:"6px 14px",
              background:"rgba(204,0,0,.1)", border:"1px solid rgba(204,0,0,.3)",
              marginBottom:24,
            }}>
              <span style={{width:7,height:7,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 8px #22c55e",flexShrink:0,animation:"blink 2s ease-in-out infinite"}}/>
              <span className="caption" style={{color:"rgba(255,255,255,.5)",fontSize:10,letterSpacing:".18em"}}>
                System Active · Lagos State Operations
              </span>
            </div>

            {/* Section label */}
            <div className="section-label" style={{...fade(".1s"), color:"rgba(255,255,255,.4)", marginBottom:16}}>
              CrimsonWings Blood Logistics Ltd
            </div>

            {/* Headline */}
            <h1 className="font-display" style={{
              ...fade(".2s"),
              fontSize:"clamp(36px,5.5vw,76px)",
              fontWeight:800, lineHeight:1.06, color:"#fff", marginBottom:20,
            }}>
              Delivering{" "}
              <em style={{color:"var(--crimson)", fontStyle:"italic"}}>Blood.</em>
              <br/>Saving{" "}
              <span style={{color:"#fff"}}>Lives.</span>
              <br/>
              <span className="font-mono" style={{
                fontSize:"clamp(13px,1.8vw,22px)", color:"rgba(255,255,255,.3)",
                fontStyle:"normal", fontWeight:300, letterSpacing:".08em",
              }}>
                On Time. Every Time.
              </span>
            </h1>

            {/* Body */}
            <p style={{
              ...fade(".35s"),
              fontSize:"clamp(14px,1.4vw,17px)", lineHeight:1.8,
              color:"rgba(255,255,255,.5)", maxWidth:480, marginBottom:32,
            }}>
              Nigeria&apos;s most advanced digitized blood bank — integrating NAT viral
              screening, ultra-scale cold storage, and a proprietary OS platform
              with drone-enabled last-mile delivery across Lagos.
            </p>

            {/* CTAs */}
            <div style={{...fade(".48s"), display:"flex", flexWrap:"wrap", gap:12, marginBottom:40}}>
              <a href="#solution"  className="btn-primary"><span>Explore the Platform</span><ArrowRight size={14}/></a>
              <a href="#contact"   className="btn-ghost"  ><span>Partner With Us</span></a>
            </div>

            {/* Three pillars */}
            <div style={{...fade(".6s"), display:"flex", flexWrap:"wrap", gap:"16px 28px"}}>
              {["Clinical Authority","Operational Scale","Tech Superiority"].map((p,i)=>(
                <div key={p} style={{display:"flex",alignItems:"center",gap:10}}>
                  <span className="caption" style={{color:"var(--crimson)",fontSize:10}}>0{i+1}</span>
                  <div style={{width:1,height:18,background:"rgba(255,255,255,.12)"}}/>
                  <span className="caption" style={{color:"rgba(255,255,255,.35)",fontSize:10}}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — stat grid ────── */}
          <div style={{...fade(".3s"), display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
            {STATS.map(s=>(
              <div key={s.label} style={{
                background: s.accent ? "var(--crimson)" : "rgba(255,255,255,.04)",
                border:`1px solid ${s.accent ? "var(--crimson)" : "rgba(255,255,255,.08)"}`,
                padding:"clamp(18px,2.5vw,28px) clamp(16px,2vw,24px)",
                position:"relative", overflow:"hidden",
                boxShadow: s.accent ? "0 4px 32px rgba(204,0,0,.35)" : "none",
              }}>
                <div className="font-display" style={{
                  fontSize:"clamp(24px,3.5vw,44px)",
                  fontWeight:800, color:"#fff", lineHeight:1, marginBottom:8,
                }}>
                  {s.value}
                </div>
                <div className="caption" style={{
                  fontSize:9, letterSpacing:".12em",
                  color: s.accent ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.38)",
                  lineHeight:1.5,
                }}>
                  {s.label}
                </div>
                <div style={{
                  position:"absolute", top:0, right:0, width:24, height:24,
                  borderTop:`1px solid ${s.accent ? "rgba(255,255,255,.22)" : "rgba(204,0,0,.3)"}`,
                  borderRight:`1px solid ${s.accent ? "rgba(255,255,255,.22)" : "rgba(204,0,0,.3)"}`,
                }}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TICKER ─────────────────────────────────────────────── */}
      <div style={{
        borderTop:"1px solid rgba(204,0,0,.22)",
        background:"rgba(204,0,0,.06)",
        padding:"12px 0",
        overflow:"hidden", flexShrink:0,
        position:"relative", zIndex:10,
        opacity: on ? 1 : 0,
        transition:"opacity .6s 1s",
      }}>
        <div className="animate-ticker" style={{display:"flex", whiteSpace:"nowrap"}}>
          {[...TICKER,...TICKER].map((item,i)=>(
            <span key={i} style={{display:"inline-flex", alignItems:"center", padding:"0 28px"}}>
              <span className="caption" style={{color:"rgba(255,255,255,.32)", letterSpacing:".2em"}}>{item}</span>
              <span style={{color:"var(--crimson)", opacity:.6, marginLeft:28, fontSize:9}}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position:"absolute", bottom:80, left:"50%", transform:"translateX(-50%)",
        display:"flex", flexDirection:"column", alignItems:"center", gap:6,
        zIndex:10, pointerEvents:"none",
        opacity: on ? .4 : 0, transition:"opacity .6s 1.2s",
      }}>
        <span className="caption" style={{color:"rgba(255,255,255,.4)",fontSize:9}}>SCROLL</span>
        <ChevronDown size={13} style={{color:"rgba(255,255,255,.4)", animation:"bounce 1.2s ease-in-out infinite"}}/>
      </div>

      <style>{`
        @media (min-width: 900px) { .hero-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .hero-rings { display: none !important; } }
        @keyframes bounce { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(6px) } }
        @keyframes blink  { 0%,100%{ opacity:1 } 50%{ opacity:0 } }
      `}</style>
    </section>
  );
}
