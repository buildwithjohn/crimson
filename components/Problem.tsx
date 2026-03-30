"use client";
import { useReveal } from "./useReveal";
import { AlertTriangle, Clock, Thermometer, Truck } from "lucide-react";

const PROBLEMS = [
  { icon:AlertTriangle, title:"Unsafe Blood Supply",    desc:"A significant portion of transfused blood in Nigeria lacks rigorous NAT-level viral screening, exposing patients to HIV, Hepatitis B, C, and other bloodborne infections." },
  { icon:Thermometer,   title:"Inadequate Storage",     desc:"Most facilities lack walk-in cold rooms and ultra-low temperature freezers, leading to massive wastage of collected blood units and constant critical shortages." },
  { icon:Clock,         title:"Life-Threatening Delays",desc:"Traditional delivery systems average 4–8 hours per blood request. In trauma, obstetric emergencies, and surgery, every minute of delay increases mortality risk." },
  { icon:Truck,         title:"Fragmented Logistics",   desc:"No integrated system connects blood banks, hospitals, and donors. Manual coordination creates dangerous gaps in the supply chain from collection to transfusion." },
];

export default function Problem() {
  const ref = useReveal();
  return (
    <section id="problem" ref={ref} className="section bg-ink grid-lines-dark noise-overlay">
      {/* Ghost word */}
      <div className="font-display" style={{
        position:"absolute", fontSize:"clamp(80px,14vw,200px)", fontWeight:700,
        color:"rgba(138,3,3,.04)", top:"50%", left:"50%",
        transform:"translate(-50%,-50%)", whiteSpace:"nowrap",
        letterSpacing:"-.04em", pointerEvents:"none", userSelect:"none",
      }}>CRISIS</div>

      <div className="container" style={{ position:"relative", zIndex:2 }}>
        {/* Header */}
        <div style={{ maxWidth:600, margin:"0 auto clamp(48px,6vw,80px)", textAlign:"center" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>
            <span style={{ color:"rgba(255,255,255,.35)" }}>The Blood Crisis in Nigeria</span>
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"#fff", marginBottom:16 }}>
            Lives Are Being Lost.{" "}<em style={{ color:"var(--crimson)" }}>Right Now.</em>
          </h2>
          <p className="body-lg reveal delay-2" style={{ color:"rgba(255,255,255,.45)" }}>
            Nigeria faces a critical shortage of safe, readily available blood — compounded by systemic failures in testing, storage, and delivery infrastructure.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display:"grid", gap:16 }} className="two-col">
          {PROBLEMS.map((p,i)=>(
            <div key={p.title} className="reveal card-dark" style={{ transitionDelay:`${i*.09}s` }}>
              <div style={{ width:42, height:42, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(138,3,3,.12)", border:"1px solid rgba(138,3,3,.22)", marginBottom:20 }}>
                <p.icon size={18} style={{ color:"var(--crimson)" }}/>
              </div>
              <h3 className="h3 font-display" style={{ color:"#fff", marginBottom:12 }}>{p.title}</h3>
              <p className="body-md" style={{ color:"rgba(255,255,255,.42)" }}>{p.desc}</p>
              <div className="caption" style={{ position:"absolute", top:20, right:20, color:"rgba(255,255,255,.07)", fontSize:11 }}>0{i+1}</div>
            </div>
          ))}
        </div>

        {/* Stat callout */}
        <div className="reveal" style={{ textAlign:"center", marginTop:"clamp(48px,6vw,80px)", transitionDelay:".4s" }}>
          <div style={{ display:"inline-block", padding:"clamp(24px,3vw,40px) clamp(36px,5vw,80px)", border:"1px solid rgba(138,3,3,.28)", background:"rgba(138,3,3,.05)" }}>
            <div className="font-display" style={{ fontSize:"clamp(40px,6vw,70px)", fontWeight:700, color:"#fff", lineHeight:1, marginBottom:12 }}>1 in 4</div>
            <div className="caption" style={{ color:"rgba(255,255,255,.38)", letterSpacing:".18em" }}>Nigerians who need a transfusion cannot access it in time</div>
          </div>
        </div>
      </div>
      <style>{`@media(min-width:700px){.two-col{grid-template-columns:1fr 1fr !important;}}`}</style>
    </section>
  );
}
