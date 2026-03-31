"use client";
import { useReveal } from "./useReveal";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value:280000,suffix:"+",prefix:"",    label:"Blood Units Target",      desc:"Year 1 annual capacity" },
  { value:20000, suffix:"+",prefix:"",    label:"Units Per Month",         desc:"Processing & storage"   },
  { value:60,    suffix:" MIN",prefix:"<",label:"Emergency Delivery",      desc:"Urban response target"  },
  { value:181,   suffix:"+",prefix:"",    label:"Target Partner Hospitals",desc:"Across Lagos State"     },
  { value:5,     suffix:"",  prefix:"",   label:"Strategic Hubs",          desc:"Hub-and-spoke network"  },
  { value:100,   suffix:"%", prefix:"",   label:"NAT Screened Supply",     desc:"Gold standard safety"   },
];

function Counter({target,suffix,prefix}:{target:number;suffix:string;prefix:string}) {
  const [n,setN] = useState(0);
  const started = useRef(false);
  const elRef   = useRef<HTMLSpanElement>(null);
  useEffect(()=>{
    const el=elRef.current; if(!el) return;
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!started.current){
        started.current=true;
        let cur=0; const steps=50; const step=target/steps;
        const id=setInterval(()=>{ cur+=step; if(cur>=target){setN(target);clearInterval(id);}else setN(Math.floor(cur)); },1800/steps);
      }
    },{threshold:.3});
    obs.observe(el);
    return ()=>obs.disconnect();
  },[target]);
  return <span ref={elRef}>{prefix}{n>=10000?n.toLocaleString():n}{suffix}</span>;
}

export default function Impact() {
  const ref = useReveal();
  return (
    <section id="impact" ref={ref} className="section bg-ink grid-lines-dark noise-overlay">
      <div className="font-display" style={{ position:"absolute", fontSize:"clamp(80px,14vw,200px)", fontWeight:700, color:"rgba(138,3,3,.04)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", whiteSpace:"nowrap", letterSpacing:"-.04em", pointerEvents:"none", userSelect:"none" }}>IMPACT</div>

      <div className="container" style={{ position:"relative", zIndex:2 }}>
        <div style={{ textAlign:"center", maxWidth:520, margin:"0 auto clamp(48px,6vw,80px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>
            <span style={{ color:"rgba(255,255,255,.35)" }}>Platform Scale</span>
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"#fff" }}>
            Numbers That <em style={{ color:"var(--crimson)" }}>Matter</em>
          </h2>
        </div>

        {/* Grid with borders */}
        <div style={{ border:"1px solid rgba(255,255,255,.06)", display:"grid" }} className="stat-grid">
          {STATS.map((s,i)=>(
            <div key={s.label} className="reveal" style={{
              padding:"clamp(28px,3.5vw,44px)",
              borderRight: "1px solid rgba(255,255,255,.06)",
              borderBottom: "1px solid rgba(255,255,255,.06)",
              position:"relative", transitionDelay:`${i*.08}s`,
            }}>
              <div className="font-display" style={{ fontSize:"clamp(34px,4vw,52px)", fontWeight:700, color:"#fff", lineHeight:1, marginBottom:10 }}>
                <Counter target={s.value} suffix={s.suffix} prefix={s.prefix}/>
              </div>
              <div className="font-display" style={{ fontSize:"clamp(14px,1.5vw,17px)", fontWeight:600, color:"rgba(255,255,255,.65)", marginBottom:4 }}>{s.label}</div>
              <div className="caption" style={{ color:"rgba(255,255,255,.28)" }}>{s.desc}</div>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"var(--crimson)", transform:"scaleX(0)", transition:"transform .5s var(--ease-expo)", transformOrigin:"left" }} className="stat-bar"/>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="reveal" style={{ textAlign:"center", marginTop:"clamp(48px,6vw,80px)", transitionDelay:".5s" }}>
          <div style={{ display:"inline-block", maxWidth:680, padding:"clamp(24px,3vw,44px) clamp(28px,4vw,60px)", border:"1px solid rgba(138,3,3,.22)", background:"rgba(138,3,3,.04)", position:"relative" }}>
            <div className="font-display" style={{ fontSize:"clamp(16px,2vw,24px)", fontStyle:"italic", color:"#fff", lineHeight:1.6, marginBottom:16 }}>
              &ldquo;CrimsonWings is not building a logistics company. We are building Nigeria&rsquo;s national blood infrastructure.&rdquo;
            </div>
            <div className="caption" style={{ color:"rgba(255,255,255,.28)" }}>CrimsonWings Blood Logistics Ltd — Founding Mission</div>
            <div style={{ position:"absolute", top:12, left:12, width:20, height:20, borderTop:"1px solid rgba(138,3,3,.35)", borderLeft:"1px solid rgba(138,3,3,.35)" }}/>
            <div style={{ position:"absolute", bottom:12, right:12, width:20, height:20, borderBottom:"1px solid rgba(138,3,3,.35)", borderRight:"1px solid rgba(138,3,3,.35)" }}/>
          </div>
        </div>
      </div>
      <style>{`
        @media(min-width:700px) { .stat-grid{grid-template-columns:repeat(2,1fr) !important;} }
        @media(min-width:1000px){ .stat-grid{grid-template-columns:repeat(3,1fr) !important;} }
        .reveal.visible .stat-bar { transform:scaleX(1) !important; }
      `}</style>
    </section>
  );
}
