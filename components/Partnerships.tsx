"use client";
import { useReveal } from "./useReveal";
import { Shield, Award, Globe } from "lucide-react";

/* ── Stakeholder logos as inline SVG placeholders ────────────────────────
   Real logos would be img tags pointing to /public/logos/xxx.svg
   These are authentic organisation abbreviations styled as mono badges     */
const STAKEHOLDERS = [
  { abbr:"LSMOH",  name:"Lagos State Ministry of Health",      color:"#1B5E20", type:"Government" },
  { abbr:"FMOH",   name:"Federal Ministry of Health Nigeria",  color:"#1A237E", type:"Government" },
  { abbr:"NBTS",   name:"National Blood Transfusion Service",  color:"#8A0303", type:"Clinical"   },
  { abbr:"NAFDAC", name:"NAFDAC Nigeria",                      color:"#4A148C", type:"Regulatory" },
  { abbr:"WHO",    name:"World Health Organisation",           color:"#006DB7", type:"Global"     },
  { abbr:"ICRC",   name:"International Committee Red Cross",   color:"#C62828", type:"NGO"        },
  { abbr:"LASUTH", name:"Lagos University Teaching Hospital",  color:"#01579B", type:"Hospital"   },
  { abbr:"LUTH",   name:"Lagos University Teaching Hospital",  color:"#004D40", type:"Hospital"   },
  { abbr:"NMA",    name:"Nigerian Medical Association",        color:"#33691E", type:"Medical"    },
  { abbr:"IFC",    name:"International Finance Corporation",   color:"#E65100", type:"Finance"    },
  { abbr:"AfDB",   name:"African Development Bank",           color:"#1565C0", type:"Finance"    },
  { abbr:"USAID",  name:"United States Agency for Int'l Dev", color:"#002868", type:"Aid"        },
];

/* Double the array for seamless infinite marquee */
const MARQUEE = [...STAKEHOLDERS, ...STAKEHOLDERS];

function LogoBadge({ org, size = 120 }: { org: typeof STAKEHOLDERS[0]; size?: number }) {
  return (
    <div style={{
      flexShrink: 0,
      width: size, height: size * 0.55,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 6,
      background: "var(--white)",
      border: "1px solid var(--smoke)",
      padding: "10px 16px",
      transition: "border-color .3s, transform .3s var(--ease-expo), box-shadow .3s",
      cursor: "default",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = org.color + "60";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${org.color}18`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--smoke)";
        (e.currentTarget as HTMLElement).style.transform = "none";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Coloured dot + abbreviation */}
      <div style={{ display:"flex", alignItems:"center", gap:6 }}>
        <div style={{ width:8, height:8, borderRadius:"50%", background:org.color, flexShrink:0 }}/>
        <span className="font-display" style={{
          fontSize: org.abbr.length > 5 ? 13 : 15,
          fontWeight: 700,
          color: org.color,
          letterSpacing: "-.01em",
          lineHeight: 1,
        }}>{org.abbr}</span>
      </div>
      <span className="font-mono" style={{
        fontSize: 7, letterSpacing:".08em", textTransform:"uppercase",
        color:"var(--steel-light)", textAlign:"center", lineHeight:1.4,
        maxWidth:90,
      }}>{org.type}</span>
    </div>
  );
}

export default function Partnerships() {
  const ref = useReveal();

  return (
    <section id="partnerships" ref={ref} className="section bg-white grid-dots">
      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* ── Two-col layout ─────────────────────────────── */}
        <div style={{ display:"grid", gap:"clamp(40px,6vw,80px)", alignItems:"start" }} className="two-col">

          {/* Left — trust copy */}
          <div>
            <div className="section-label reveal" style={{ marginBottom:20 }}>Government & Institutional</div>
            <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:16 }}>
              Built for <em style={{ color:"var(--crimson)" }}>Institutional</em> Trust
            </h2>
            <p className="body-lg reveal delay-2" style={{ marginBottom:32 }}>
              CrimsonWings is designed from the ground up to meet the expectations of government agencies, medical institutions, and international health organizations — with the compliance, transparency, and scale they require.
            </p>
            <div className="reveal delay-3" style={{ display:"flex", flexDirection:"column", gap:20 }}>
              {[
                { icon:Shield, title:"Regulatory Compliance", desc:"NAFDAC, WHO, and ISO-aligned protocols across all operations" },
                { icon:Award,  title:"Clinical Leadership",   desc:"Expert leadership in transfusion medicine and medical logistics" },
                { icon:Globe,  title:"PPP Framework Ready",   desc:"Structured for public-private partnership at state and federal level" },
              ].map(item => (
                <div key={item.title} style={{ display:"flex", gap:16, alignItems:"flex-start" }}>
                  <div style={{ flexShrink:0, width:40, height:40, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(138,3,3,.07)", border:"1px solid rgba(138,3,3,.13)" }}>
                    <item.icon size={16} style={{ color:"var(--crimson)" }}/>
                  </div>
                  <div>
                    <div className="font-display" style={{ fontSize:16, fontWeight:700, color:"var(--ink)", marginBottom:4 }}>{item.title}</div>
                    <p className="body-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stakeholder grid (static, 3×4) */}
          <div className="reveal-right">
            <div className="caption" style={{ color:"var(--steel-light)", marginBottom:16 }}>
              Key Stakeholders & Partner Network
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10 }}>
              {STAKEHOLDERS.map((org, i) => (
                <div
                  key={org.abbr + i}
                  className="reveal"
                  style={{ transitionDelay:`${i * .05}s` }}
                >
                  <div style={{
                    display:"flex", flexDirection:"column",
                    alignItems:"center", justifyContent:"center",
                    gap:8, padding:"16px 12px",
                    background:"var(--off-white)",
                    border:"1px solid var(--smoke)",
                    textAlign:"center",
                    transition:"border-color .3s, transform .3s var(--ease-expo), box-shadow .3s",
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = org.color + "55";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${org.color}14`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--smoke)";
                      (e.currentTarget as HTMLElement).style.transform = "none";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Colour dot */}
                    <div style={{ width:10, height:10, borderRadius:"50%", background:org.color, flexShrink:0 }}/>
                    <div className="font-display" style={{ fontSize: org.abbr.length > 5 ? 11 : 14, fontWeight:700, color:org.color, lineHeight:1 }}>{org.abbr}</div>
                    <div className="caption" style={{ fontSize:7, color:"var(--steel-light)", lineHeight:1.4, maxWidth:80 }}>{org.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Animated logo marquee ───────────────────────── */}
        <div className="reveal" style={{ marginTop:"clamp(48px,6vw,80px)", transitionDelay:".3s" }}>
          <div className="caption" style={{ textAlign:"center", color:"var(--steel-light)", marginBottom:20 }}>
            Stakeholder & Partner Network
          </div>
          {/* Track 1 — left to right */}
          <div style={{ overflow:"hidden", marginBottom:12, position:"relative" }}>
            {/* Fade edges */}
            <div style={{ position:"absolute", left:0, top:0, bottom:0, width:80, zIndex:2, background:"linear-gradient(to right, var(--white), transparent)", pointerEvents:"none" }}/>
            <div style={{ position:"absolute", right:0, top:0, bottom:0, width:80, zIndex:2, background:"linear-gradient(to left, var(--white), transparent)", pointerEvents:"none" }}/>
            <div style={{ display:"flex", gap:12, animation:"marquee-left 28s linear infinite" }}>
              {MARQUEE.map((org, i) => <LogoBadge key={i} org={org} size={130}/>)}
            </div>
          </div>
          {/* Track 2 — right to left */}
          <div style={{ overflow:"hidden", position:"relative" }}>
            <div style={{ position:"absolute", left:0, top:0, bottom:0, width:80, zIndex:2, background:"linear-gradient(to right, var(--white), transparent)", pointerEvents:"none" }}/>
            <div style={{ position:"absolute", right:0, top:0, bottom:0, width:80, zIndex:2, background:"linear-gradient(to left, var(--white), transparent)", pointerEvents:"none" }}/>
            <div style={{ display:"flex", gap:12, animation:"marquee-right 22s linear infinite" }}>
              {[...MARQUEE].reverse().map((org, i) => <LogoBadge key={i} org={org} size={130}/>)}
            </div>
          </div>
        </div>

        {/* ── Investor CTA ────────────────────────────────── */}
        <div className="reveal" style={{
          marginTop:"clamp(48px,6vw,80px)",
          background:"var(--ink)",
          position:"relative", overflow:"hidden",
          transitionDelay:".4s",
        }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"var(--crimson)" }}/>
          <div className="grid-lines-dark" style={{ position:"absolute", inset:0, opacity:.6 }}/>

          {/* Content */}
          <div style={{
            position:"relative", zIndex:2,
            padding:"clamp(36px,5vw,56px) clamp(28px,4vw,52px)",
            display:"flex",
            flexDirection:"column",
            gap:24,
          }} className="investor-inner">
            {/* Text block */}
            <div style={{ flex:1 }}>
              <div className="caption" style={{ color:"rgba(255,255,255,.35)", marginBottom:16 }}>
                Investor &amp; Partnership Opportunity
              </div>
              <h3 className="font-display" style={{
                fontSize:"clamp(22px,3vw,36px)", fontWeight:700,
                color:"#fff", lineHeight:1.2, marginBottom:14,
              }}>
                Be Part of Nigeria&rsquo;s{" "}
                <em style={{ color:"var(--crimson)" }}>Healthcare Revolution</em>
              </h3>
              <p className="body-md" style={{ color:"rgba(255,255,255,.42)", maxWidth:520 }}>
                CrimsonWings is open to strategic partnerships, institutional investment, and government collaboration. We have the infrastructure plan, clinical expertise, and technology.
              </p>
            </div>

            {/* Button — on its own row on mobile, inline on desktop */}
            <div style={{ flexShrink:0 }}>
              <a
                href="#contact"
                style={{
                  display:"inline-flex", alignItems:"center", justifyContent:"center",
                  background:"var(--crimson)",
                  color:"#fff",
                  fontFamily:"var(--font-body)", fontWeight:500,
                  fontSize:12, letterSpacing:".1em", textTransform:"uppercase",
                  padding:"16px 32px",
                  textDecoration:"none", whiteSpace:"nowrap",
                  border:"none",
                  transition:"opacity .2s, transform .2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity=".88"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity="1";   (e.currentTarget as HTMLElement).style.transform="none"; }}
              >
                Contact Investor Relations
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:900px){
          .two-col { grid-template-columns:1fr 1fr !important; }
          .investor-inner { flex-direction:row !important; align-items:center !important; justify-content:space-between !important; }
        }
        @keyframes marquee-left  { 0%{ transform:translateX(0) } 100%{ transform:translateX(-50%) } }
        @keyframes marquee-right { 0%{ transform:translateX(-50%) } 100%{ transform:translateX(0) } }
      `}</style>
    </section>
  );
}
