"use client";
import { useReveal } from "./useReveal";
import { Heart, Activity, Building2, Globe, TrendingUp, Zap } from "lucide-react";

const CATEGORIES = [
  { icon:Heart,     title:"Clinical Impact",         points:["Faster access to blood during emergencies","Reduced mortality in critical care situations","Reliable supply for surgeries and trauma response"] },
  { icon:Activity,  title:"System Impact",            points:["Optimized blood distribution across hospitals","Reduced wastage through intelligent inventory management","Improved efficiency in blood bank operations"] },
  { icon:Building2, title:"Urban & Regional Impact",  points:["Rapid response across Lagos coastal and lagoon zones","Reduced transport bottlenecks in high-density areas","Strengthened emergency response infrastructure"] },
  { icon:Globe,     title:"National Impact",          points:["Supporting public-private healthcare partnerships","Building scalable blood logistics infrastructure","Laying the foundation for nationwide expansion"] },
];

export default function Impact() {
  const ref = useReveal();
  return (
    <section id="impact" ref={ref} style={{ background:"linear-gradient(160deg, #CC0000 0%, #8A0000 50%, #3A0000 100%)", paddingBlock:"var(--section-py)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(0,0,0,.2) 0%, rgba(0,0,0,.5) 100%)", pointerEvents:"none" }}/>
      <div className="grid-lines-dark" style={{ position:"absolute", inset:0, opacity:.3 }}/>
      <div style={{ position:"absolute", top:-100, left:"50%", transform:"translateX(-50%)", width:700, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(255,80,80,.2) 0%, transparent 70%)", pointerEvents:"none" }}/>

      <div className="container" style={{ position:"relative", zIndex:2 }}>
        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:700, margin:"0 auto clamp(56px,7vw,88px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>
            <span style={{ color:"rgba(255,255,255,.6)" }}>Our Impact</span>
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"#fff", marginBottom:20 }}>
            Redefining Access to <em style={{ color:"rgba(255,200,200,1)" }}>Life-Saving Blood</em>
          </h2>
          <p className="body-lg reveal delay-2" style={{ color:"rgba(255,255,255,.82)" }}>
            Across Nigeria, delays in accessing safe blood cost lives every day. CrimsonWings exists to eliminate that delay.
          </p>
        </div>

        {/* 4 categories */}
        <div style={{ display:"grid", gap:20, marginBottom:"clamp(48px,6vw,80px)" }} className="impact-grid">
          {CATEGORIES.map((cat, i) => (
            <div key={cat.title} className="reveal" style={{ transitionDelay:`${i*.08}s` }}>
              <div style={{
                background:"rgba(255,255,255,.12)", border:"1px solid rgba(255,255,255,.22)",
                backdropFilter:"blur(8px)", padding:"clamp(28px,3.5vw,42px)", height:"100%",
                transition:"background .3s, transform .3s",
              }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.2)"; (e.currentTarget as HTMLElement).style.transform="translateY(-4px)"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.12)"; (e.currentTarget as HTMLElement).style.transform="none"; }}
              >
                <div style={{ width:54, height:54, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(255,255,255,.18)", border:"1px solid rgba(255,255,255,.3)", marginBottom:22 }}>
                  <cat.icon size={26} color="#fff"/>
                </div>
                <h3 className="font-display" style={{ fontSize:"clamp(20px,2.2vw,27px)", fontWeight:700, color:"#fff", marginBottom:20 }}>{cat.title}</h3>
                <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  {cat.points.map(pt => (
                    <div key={pt} style={{ display:"flex", alignItems:"flex-start", gap:14 }}>
                      <div style={{ width:7, height:7, borderRadius:"50%", background:"rgba(255,255,255,.7)", flexShrink:0, marginTop:7 }}/>
                      <span style={{ fontSize:17, color:"rgba(255,255,255,.88)", lineHeight:1.6 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phase 1 target */}
        <div className="reveal" style={{ background:"rgba(0,0,0,.3)", border:"1px solid rgba(255,255,255,.2)", padding:"clamp(36px,5vw,56px)", marginBottom:"clamp(40px,5vw,64px)", display:"grid", gap:32, alignItems:"center", transitionDelay:".3s" }}>
          <div>
            <div className="caption" style={{ color:"rgba(255,255,255,.55)", marginBottom:16 }}>Phase 1 Target</div>
            <div className="font-display" style={{ fontSize:"clamp(36px,5vw,68px)", fontWeight:900, color:"#fff", lineHeight:1, marginBottom:14 }}>
              280,000 <span style={{ fontSize:"clamp(18px,2vw,28px)", color:"rgba(255,255,255,.7)", fontWeight:400 }}>units / year</span>
            </div>
            <p style={{ fontSize:18, color:"rgba(255,255,255,.75)", lineHeight:1.7 }}>
              Processing and delivering up to 280,000 blood units annually — serving hospitals across Lagos and surrounding regions.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
            {[{icon:TrendingUp,val:"20K+",label:"Units / Month"},{icon:Building2,val:"181+",label:"Partner Hospitals"},{icon:Zap,val:"<60m",label:"Emergency Delivery"},{icon:Heart,val:"100%",label:"NAT Screened"}].map(stat=>(
              <div key={stat.label} style={{ padding:"18px", background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.18)", textAlign:"center" }}>
                <stat.icon size={22} color="rgba(255,255,255,.65)" style={{ margin:"0 auto 10px" }}/>
                <div className="font-display" style={{ fontSize:"clamp(22px,2.8vw,34px)", fontWeight:800, color:"#fff", lineHeight:1, marginBottom:6 }}>{stat.val}</div>
                <div className="caption" style={{ color:"rgba(255,255,255,.55)", fontSize:10 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="reveal" style={{ textAlign:"center", transitionDelay:".4s" }}>
          <div style={{ display:"inline-block", padding:"clamp(28px,4vw,48px) clamp(36px,6vw,80px)", border:"1px solid rgba(255,255,255,.28)", background:"rgba(255,255,255,.08)" }}>
            <h3 className="h3 font-display" style={{ color:"#fff", marginBottom:12 }}>More Than Logistics — A Life-Saving System</h3>
            <p style={{ fontSize:17, color:"rgba(255,255,255,.78)" }}>
              CrimsonWings is building the future of blood access in Nigeria — one that is fast, reliable, and available to all.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @media(min-width:700px){ .impact-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(min-width:700px){ .phase-grid{ grid-template-columns:1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
