"use client";
import { useReveal } from "./useReveal";
import { Cpu, Wind, Database } from "lucide-react";

export default function Technology() {
  const ref = useReveal();
  return (
    <section id="technology" ref={ref} className="section bg-ink-soft grid-lines-dark noise-overlay">
      <div className="container" style={{ position:"relative", zIndex:2 }}>

        <div style={{ textAlign:"center", maxWidth:560, margin:"0 auto clamp(48px,6vw,80px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>
            <span style={{ color:"rgba(255,255,255,.35)" }}>Core Technology</span>
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"#fff" }}>
            Infrastructure-Grade <em style={{ color:"var(--crimson)" }}>Technology</em>
          </h2>
        </div>

        {/* NAT row */}
        <div style={{ display:"grid", gap:"clamp(32px,5vw,64px)", alignItems:"center", marginBottom:"clamp(48px,6vw,80px)" }} className="two-col-rev">
          <div className="reveal delay-1">
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
              <div style={{ width:44, height:44, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, background:"rgba(138,3,3,.15)", border:"1px solid rgba(138,3,3,.28)" }}>
                <Database size={18} style={{ color:"var(--crimson)" }}/>
              </div>
              <div>
                <div className="caption" style={{ color:"rgba(255,255,255,.3)", marginBottom:4 }}>Screening System 01</div>
                <div className="font-display" style={{ fontSize:"clamp(20px,2.5vw,26px)", fontWeight:700, color:"#fff" }}>NAT Viral Screening</div>
              </div>
            </div>
            <p className="body-md" style={{ color:"rgba(255,255,255,.45)", marginBottom:28, maxWidth:440 }}>
              Nucleic Acid Testing (NAT) is the global gold standard for blood safety, detecting viral RNA/DNA at concentrations 100× below what conventional serological tests can identify. Our systems close the &quot;window period&quot; — the critical gap where infected donors test negative on standard screens.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
              {[{l:"HIV Detection",v:"~11 days"},{l:"Hep C Window",v:"~4 days"},{l:"Accuracy",v:"99.99%"}].map(s=>(
                <div key={s.l} style={{ borderLeft:"2px solid var(--crimson)", paddingLeft:14 }}>
                  <div className="font-display" style={{ fontSize:"clamp(16px,2vw,22px)", fontWeight:700, color:"#fff", marginBottom:6 }}>{s.v}</div>
                  <div className="caption" style={{ color:"rgba(255,255,255,.3)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="reveal-right" style={{ display:"flex", justifyContent:"center" }}>
            <div style={{ width:260, height:260, border:"1px solid rgba(138,3,3,.12)", position:"relative", display:"flex", alignItems:"center", justifyContent:"center" }}>
              {[200,148,96,48].map((sz,i)=>(
                <div key={sz} style={{ position:"absolute", width:sz, height:sz, borderRadius:"50%", border:`1px solid rgba(138,3,3,${.08+i*.06})`, animation:`breathe ${2.5+i*.5}s ease-in-out infinite`, animationDelay:`${i*.3}s` }}/>
              ))}
              <div style={{ width:44, height:44, borderRadius:"50%", background:"var(--crimson)", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", zIndex:2 }}>
                <Database size={18} color="#fff"/>
              </div>
              {["HIV","HEP-B","HEP-C","HTLV"].map((lbl,i)=>{
                const angles=[-45,45,135,-135];
                const r=92, ang=(angles[i]*Math.PI)/180;
                return (
                  <div key={lbl} className="caption" style={{ position:"absolute", fontSize:9, color:"rgba(255,255,255,.32)", left:`calc(50% + ${r*Math.cos(ang)}px)`, top:`calc(50% + ${r*Math.sin(ang)}px)`, transform:"translate(-50%,-50%)" }}>{lbl}</div>
                );
              })}
            </div>
          </div>
        </div>

        {/* OS + Drone */}
        <div style={{ display:"grid", gap:16 }} className="two-col">
          {/* OS */}
          <div className="reveal card-dark" style={{ borderTop:"2px solid var(--blue-tech)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
              <div style={{ width:40, height:40, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(47,128,237,.12)", border:"1px solid rgba(47,128,237,.22)" }}>
                <Cpu size={17} style={{ color:"var(--blue-tech)" }}/>
              </div>
              <div>
                <div className="caption" style={{ color:"rgba(47,128,237,.65)", marginBottom:3 }}>Platform 02</div>
                <div className="font-display" style={{ fontSize:"clamp(17px,2vw,22px)", fontWeight:700, color:"#fff" }}>Proprietary OS</div>
              </div>
            </div>
            <p className="body-md" style={{ color:"rgba(255,255,255,.42)", marginBottom:20 }}>
              A fully integrated OS connecting every stage — donor registration, lab screening, cold storage inventory, real-time hospital requests, and delivery dispatch — in one unified platform.
            </p>
            {/* Mock terminal */}
            <div style={{ background:"rgba(0,0,0,.4)", border:"1px solid rgba(255,255,255,.06)", overflow:"hidden" }}>
              <div style={{ display:"flex", alignItems:"center", gap:6, padding:"8px 14px", borderBottom:"1px solid rgba(255,255,255,.05)", background:"rgba(0,0,0,.3)" }}>
                {["#ff5f57","#febc2e","#28c840"].map((c,i)=><div key={i} style={{ width:10, height:10, borderRadius:"50%", background:c, opacity:.7 }}/>)}
                <span className="caption" style={{ marginLeft:8, color:"rgba(255,255,255,.18)", fontSize:9 }}>crimsonwings-os · live</span>
              </div>
              <div style={{ padding:14, display:"flex", flexDirection:"column", gap:8 }}>
                {[
                  {k:"BLOOD_UNITS_AVAILABLE",v:"18,420",c:"#22c55e"},
                  {k:"PENDING_REQUESTS",v:"7",c:"var(--crimson)"},
                  {k:"DRONES_IN_FLIGHT",v:"3",c:"var(--blue-tech)"},
                  {k:"AVG_DELIVERY_TIME",v:"47 MIN",c:"#C9A84C"},
                ].map(row=>(
                  <div key={row.k} style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <span className="caption" style={{ color:"rgba(255,255,255,.22)", fontSize:9 }}>{row.k}</span>
                    <span className="font-mono" style={{ fontSize:11, fontWeight:500, color:row.c }}>{row.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drone */}
          <div className="reveal card-dark" style={{ borderTop:"2px solid #C9A84C", transitionDelay:".1s" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
              <div style={{ width:40, height:40, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(201,168,76,.12)", border:"1px solid rgba(201,168,76,.22)" }}>
                <Wind size={17} style={{ color:"#C9A84C" }}/>
              </div>
              <div>
                <div className="caption" style={{ color:"rgba(201,168,76,.65)", marginBottom:3 }}>Logistics 03</div>
                <div className="font-display" style={{ fontSize:"clamp(17px,2vw,22px)", fontWeight:700, color:"#fff" }}>Triphasic Drone Delivery</div>
              </div>
            </div>
            <p className="body-md" style={{ color:"rgba(255,255,255,.42)", marginBottom:20 }}>
              Ground transport handles primary logistics. Coordination hubs manage staging. Drone delivery executes last-mile emergency response — any hospital in Lagos in under 60 minutes.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr auto 1fr auto 1fr", gap:4, alignItems:"center" }}>
              {[
                {n:"01",l:"Ground",s:"Primary",c:"rgba(255,255,255,.1)"},
                {n:"02",l:"Hub",s:"Staging",c:"rgba(138,3,3,.3)"},
                {n:"03",l:"Drone",s:"<60 min",c:"#C9A84C"},
              ].map((ph,i,arr)=>(
                <>
                  <div key={ph.n} style={{ padding:"14px 10px", textAlign:"center", background:"rgba(255,255,255,.02)", border:`1px solid ${ph.c}` }}>
                    <div className="caption" style={{ fontSize:8, color:i===2?"#C9A84C":"rgba(255,255,255,.35)", marginBottom:4 }}>Phase {ph.n}</div>
                    <div className="font-display" style={{ fontSize:13, fontWeight:700, color:"#fff", lineHeight:1.2 }}>{ph.l}</div>
                    <div className="caption" style={{ fontSize:8, color:"rgba(255,255,255,.22)", marginTop:3 }}>{ph.s}</div>
                  </div>
                  {i<arr.length-1&&<div key={`a${i}`} style={{ color:"rgba(255,255,255,.2)", textAlign:"center", fontSize:14 }}>›</div>}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(min-width:900px){.two-col,.two-col-rev{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
