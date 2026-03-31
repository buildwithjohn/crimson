"use client";
import { AlertTriangle, Clock, Thermometer, Truck } from "lucide-react";

const PROBLEMS = [
  {
    icon: AlertTriangle,
    num: "01",
    title: "Unsafe Blood Supply",
    stat: "78%",
    statLabel: "of blood lacks NAT screening",
    desc: "A significant portion of transfused blood in Nigeria lacks rigorous NAT-level viral screening, exposing patients to HIV, Hepatitis B, C, and other bloodborne infections.",
    color: "#CC0000",
  },
  {
    icon: Thermometer,
    num: "02",
    title: "Inadequate Storage",
    stat: "40%",
    statLabel: "of collected units wasted",
    desc: "Most facilities lack walk-in cold rooms and ultra-low temperature freezers, leading to massive wastage and constant critical shortages at point of need.",
    color: "#E65100",
  },
  {
    icon: Clock,
    num: "03",
    title: "Life-Threatening Delays",
    stat: "4–8hrs",
    statLabel: "average delivery time",
    desc: "Traditional delivery systems average 4–8 hours per blood request. In trauma, obstetric emergencies, and surgery, every minute of delay increases mortality risk.",
    color: "#CC0000",
  },
  {
    icon: Truck,
    num: "04",
    title: "Fragmented Logistics",
    stat: "Zero",
    statLabel: "integrated delivery systems",
    desc: "No integrated system connects blood banks, hospitals, and donors. Manual coordination creates dangerous gaps in the supply chain from collection to transfusion.",
    color: "#E65100",
  },
];

export default function Problem() {
  return (
    <section id="problem" style={{
      paddingBlock:"var(--section-py)",
      background:"var(--ink)",
      position:"relative", overflow:"hidden",
    }}>
      {/* Grid */}
      <div className="grid-lines-dark" style={{ position:"absolute", inset:0, opacity:.7 }}/>
      {/* Red glow */}
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:800, height:500, borderRadius:"50%", background:"radial-gradient(ellipse, rgba(204,0,0,.12) 0%, transparent 65%)", pointerEvents:"none" }}/>

      {/* Ghost word */}
      <div className="font-display" style={{
        position:"absolute", fontSize:"clamp(80px,16vw,220px)", fontWeight:900,
        color:"rgba(204,0,0,.07)", top:"50%", left:"50%",
        transform:"translate(-50%,-50%)", whiteSpace:"nowrap",
        letterSpacing:"-.04em", pointerEvents:"none", userSelect:"none",
      }}>CRISIS</div>

      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* Header */}
        <div style={{ maxWidth:640, margin:"0 auto clamp(56px,7vw,88px)", textAlign:"center" }}>
          <div className="section-label" style={{ justifyContent:"center", marginBottom:20 }}>
            <span style={{ color:"rgba(255,255,255,.45)" }}>The Blood Crisis in Nigeria</span>
          </div>
          <h2 className="h2 font-display" style={{ color:"#fff", marginBottom:20 }}>
            Lives Are Being Lost.{" "}
            <em style={{ color:"var(--crimson)" }}>Every Day.</em>
          </h2>
          <p className="body-lg" style={{ color:"rgba(255,255,255,.55)" }}>
            Nigeria faces a critical shortage of safe, readily available blood — compounded
            by systemic failures in testing, storage, and delivery infrastructure.
          </p>
        </div>

        {/* Problem cards */}
        <div style={{ display:"grid", gap:16 }} className="two-col">
          {PROBLEMS.map((p, i) => (
            <div key={p.title} style={{
              background:"rgba(255,255,255,.04)",
              border:"1px solid rgba(255,255,255,.1)",
              borderLeft:`4px solid ${p.color}`,
              padding:"clamp(28px,3.5vw,40px)",
              position:"relative", overflow:"hidden",
              transition:"background .3s, border-color .3s",
              display:"flex", gap:24, alignItems:"flex-start",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = `rgba(204,0,0,.06)`;
                (e.currentTarget as HTMLElement).style.borderColor = `rgba(204,0,0,.35)`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.1)";
              }}
            >
              {/* Left — number + icon */}
              <div style={{ flexShrink:0, textAlign:"center" }}>
                <div style={{
                  width:52, height:52,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  background:`${p.color}20`,
                  border:`1px solid ${p.color}40`,
                  marginBottom:8,
                }}>
                  <p.icon size={22} style={{ color:p.color }}/>
                </div>
                <div className="font-mono" style={{ fontSize:10, color:"rgba(255,255,255,.2)", letterSpacing:".1em" }}>
                  0{i+1}
                </div>
              </div>

              {/* Right — content */}
              <div style={{ flex:1 }}>
                {/* Stat callout */}
                <div style={{ display:"flex", alignItems:"baseline", gap:8, marginBottom:10 }}>
                  <span className="font-display" style={{ fontSize:"clamp(24px,3vw,36px)", fontWeight:800, color:p.color, lineHeight:1 }}>
                    {p.stat}
                  </span>
                  <span className="caption" style={{ color:"rgba(255,255,255,.4)", fontSize:10 }}>
                    {p.statLabel}
                  </span>
                </div>
                <h3 className="font-display" style={{ fontSize:"clamp(17px,2vw,22px)", fontWeight:700, color:"#fff", marginBottom:10 }}>
                  {p.title}
                </h3>
                <p className="body-md" style={{ color:"rgba(255,255,255,.5)" }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat callout */}
        <div style={{ marginTop:"clamp(48px,6vw,80px)", display:"grid", gap:16 }} className="stat-row">
          <div style={{
            background:"rgba(204,0,0,.12)",
            border:"1px solid rgba(204,0,0,.35)",
            padding:"clamp(28px,4vw,48px)",
            textAlign:"center",
          }}>
            <div className="font-display" style={{ fontSize:"clamp(52px,8vw,88px)", fontWeight:900, color:"var(--crimson)", lineHeight:1, marginBottom:12 }}>
              1 in 4
            </div>
            <div style={{ fontSize:"clamp(16px,2vw,22px)", color:"rgba(255,255,255,.75)", fontFamily:"var(--font-display)", fontWeight:600 }}>
              Nigerians who need a blood transfusion
            </div>
            <div style={{ fontSize:"clamp(16px,2vw,22px)", color:"rgba(255,255,255,.75)", fontFamily:"var(--font-display)", fontWeight:600 }}>
              cannot access it <em style={{ color:"var(--crimson)" }}>in time.</em>
            </div>
          </div>
          <div style={{
            background:"rgba(255,255,255,.04)",
            border:"1px solid rgba(255,255,255,.1)",
            padding:"clamp(28px,4vw,48px)",
            display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",
            textAlign:"center",
          }}>
            <div className="font-display" style={{ fontSize:"clamp(36px,5vw,60px)", fontWeight:900, color:"#fff", lineHeight:1, marginBottom:12 }}>
              100,000+
            </div>
            <div style={{ fontSize:"clamp(14px,1.6vw,18px)", color:"rgba(255,255,255,.6)", fontFamily:"var(--font-display)", fontWeight:600 }}>
              Nigerians die annually from<br/>
              <em style={{ color:"var(--crimson)" }}>preventable blood shortages</em>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:700px){ .two-col{ grid-template-columns:1fr 1fr !important; } }
        @media(min-width:700px){ .stat-row{ grid-template-columns:1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
