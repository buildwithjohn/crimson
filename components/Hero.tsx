"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const STATS = [
  { value:"240K+",  label:"Blood Units · Year 1",     accent:true  },
  { value:"20K+",   label:"Units · Month Capacity",    accent:false },
  { value:"<60min", label:"Emergency Delivery",        accent:false },
  { value:"100%",   label:"NAT-Screened Supply",       accent:false },
];

const TICKER = [
  "NAT Viral Screening","Walk-In Cold Rooms","Ultra-Low Temp Freezers",
  "Drone-Enabled Last Mile","Proprietary OS Platform","Triphasic Logistics",
  "National Blood Infrastructure","Lagos State Partnership",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => { const t = setTimeout(()=>setOn(true),80); return ()=>clearTimeout(t); },[]);

  useEffect(() => {
    const el = ref.current; if(!el) return;
    const fn = (e:MouseEvent) => {
      const orb = el.querySelector(".hero-orb") as HTMLElement; if(!orb) return;
      const x = (e.clientX/window.innerWidth  - .5)*16;
      const y = (e.clientY/window.innerHeight - .5)*8;
      orb.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  },[]);

  const t = (delay:string, extra?:React.CSSProperties):React.CSSProperties => ({
    opacity: on?1:0,
    transform: on?"none":"translateY(22px)",
    transition:`opacity .85s var(--ease-expo) ${delay}, transform .85s var(--ease-expo) ${delay}`,
    ...extra,
  });

  return (
    <section ref={ref} className="bg-ink section noise-overlay"
      style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:0, overflow:"hidden" }}>

      {/* Background */}
      <div className="grid-lines-dark" style={{ position:"absolute", inset:0, opacity:.65 }} />

      {/* Glow orb */}
      <div className="hero-orb" style={{
        position:"absolute", width:600, height:600, borderRadius:"50%", pointerEvents:"none",
        background:"radial-gradient(circle, rgba(138,3,3,.18) 0%, rgba(138,3,3,.05) 55%, transparent 70%)",
        top:"50%", left:"62%", transform:"translate(-50%,-50%)", transition:"transform .8s ease-out",
      }}/>

      {/* Animated rings */}
      {[220,360,500].map((s,i)=>(
        <div key={s} style={{
          position:"absolute", width:s, height:s, borderRadius:"50%",
          border:`1px solid rgba(138,3,3,${.1-i*.025})`,
          top:"50%", left:"62%", transform:"translate(-50%,-50%)",
          animation:`breathe ${3+i}s ease-in-out infinite`, animationDelay:`${i*.5}s`,
          pointerEvents:"none",
        }}/>
      ))}

      {/* Scan line */}
      <div style={{
        position:"absolute", left:0, right:0, height:1, pointerEvents:"none", zIndex:2,
        background:"linear-gradient(90deg,transparent,rgba(138,3,3,.3),transparent)",
        animation:"scanLine 10s linear infinite",
      }}/>

      {/* ── MAIN CONTENT ──────────────────────────────────────── */}
      <div className="container" style={{ position:"relative", zIndex:10, paddingTop:120, paddingBottom:80 }}>

        {/* Status row */}
        <div style={{ ...t("0s"), display:"flex", alignItems:"center", gap:16, marginBottom:40 }}>
          <span style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px #22c55e", flexShrink:0, animation:"blink 2s ease-in-out infinite" }}/>
          <span className="caption" style={{ color:"rgba(255,255,255,.36)", letterSpacing:".18em" }}>System Active · Lagos State Operations</span>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:48, alignItems:"center" }}
          className="hero-grid">

          {/* Left column */}
          <div>
            <div className="section-label" style={{ ...t(".1s"), marginBottom:24 }}>
              CrimsonWings Blood Logistics Ltd
            </div>

            <h1 className="h1 font-display" style={{ ...t(".2s"), color:"#fff", marginBottom:24 }}>
              Delivering{" "}
              <em style={{ color:"var(--crimson)", fontStyle:"italic" }}>Blood.</em>
              <br/>Saving{" "}
              <span style={{ color:"#fff" }}>Lives.</span>
              <br/>
              <span className="font-mono" style={{ fontSize:"clamp(13px,1.6vw,20px)", color:"rgba(255,255,255,.28)", fontStyle:"normal", fontWeight:300, letterSpacing:".08em" }}>
                On Time. Every Time.
              </span>
            </h1>

            <p className="body-lg" style={{ ...t(".35s"), color:"rgba(255,255,255,.48)", maxWidth:500, marginBottom:36 }}>
              Nigeria&apos;s most advanced digitized blood bank — integrating NAT viral screening, ultra-scale cold storage, and a proprietary OS platform with drone-enabled last-mile delivery across Lagos.
            </p>

            <div style={{ ...t(".48s"), display:"flex", flexWrap:"wrap", gap:12, marginBottom:48 }}>
              <a href="#solution"  className="btn-primary"><span>Explore the Platform</span><ArrowRight size={14}/></a>
              <a href="#contact"   className="btn-ghost"  ><span>Partner With Us</span></a>
            </div>

            {/* Three pillars */}
            <div style={{ ...t(".6s"), display:"flex", flexWrap:"wrap", gap:24 }}>
              {["Clinical Authority","Operational Scale","Tech Superiority"].map((p,i)=>(
                <div key={p} style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <span className="caption" style={{ color:"var(--crimson)" }}>0{i+1}</span>
                  <div style={{ width:1, height:20, background:"rgba(255,255,255,.1)" }}/>
                  <span className="caption" style={{ color:"rgba(255,255,255,.32)" }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — stat grid */}
          <div style={{ ...t(".3s"), display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            {STATS.map((s)=>(
              <div key={s.label} style={{
                background: s.accent ? "var(--crimson)" : "rgba(255,255,255,.04)",
                border:`1px solid ${s.accent?"var(--crimson)":"rgba(255,255,255,.08)"}`,
                padding:"28px 24px", position:"relative", overflow:"hidden",
              }}>
                <div className="font-display" style={{ fontSize:"clamp(28px,3.5vw,46px)", fontWeight:700, color:"#fff", lineHeight:1, marginBottom:10 }}>
                  {s.value}
                </div>
                <div className="caption" style={{ color: s.accent?"rgba(255,255,255,.65)":"rgba(255,255,255,.35)", lineHeight:1.5 }}>
                  {s.label}
                </div>
                {/* Corner accent */}
                <div style={{ position:"absolute", top:0, right:0, width:28, height:28,
                  borderTop:`1px solid ${s.accent?"rgba(255,255,255,.2)":"rgba(138,3,3,.3)"}`,
                  borderRight:`1px solid ${s.accent?"rgba(255,255,255,.2)":"rgba(138,3,3,.3)"}` }}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TICKER ──────────────────────────────────────────────── */}
      <div style={{
        borderTop:"1px solid rgba(138,3,3,.2)", borderBottom:"1px solid rgba(138,3,3,.2)",
        background:"rgba(138,3,3,.05)", padding:"13px 0", overflow:"hidden",
        position:"relative", zIndex:10, marginTop:"auto", flexShrink:0,
        opacity: on?1:0, transition:"opacity .6s 1s",
      }}>
        <div className="animate-ticker" style={{ display:"flex", whiteSpace:"nowrap" }}>
          {[...TICKER,...TICKER].map((item,i)=>(
            <span key={i} style={{ display:"inline-flex", alignItems:"center", padding:"0 32px" }}>
              <span className="caption" style={{ color:"rgba(255,255,255,.28)", letterSpacing:".2em" }}>{item}</span>
              <span style={{ color:"var(--crimson)", opacity:.5, marginLeft:32, fontSize:9 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position:"absolute", bottom:90, left:"50%", transform:"translateX(-50%)",
        display:"flex", flexDirection:"column", alignItems:"center", gap:6,
        zIndex:10, pointerEvents:"none",
        opacity: on?.35:0, transition:"opacity .6s 1.2s",
      }}>
        <span className="caption" style={{ color:"rgba(255,255,255,.4)", fontSize:9 }}>SCROLL</span>
        <ChevronDown size={13} style={{ color:"rgba(255,255,255,.4)", animation:"bounce 1s infinite" }}/>
      </div>

      <style>{`
        @media(min-width:900px){ .hero-grid{ grid-template-columns:1fr 1fr !important; } }
        @keyframes bounce{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}
