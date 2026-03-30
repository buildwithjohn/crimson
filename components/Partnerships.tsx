"use client";
import { useReveal } from "./useReveal";
import { Shield, Award, Globe } from "lucide-react";

const STAKEHOLDERS = [
  {icon:"🏛️",label:"Lagos State Ministry of Health",type:"Government"},
  {icon:"🏥",label:"Public & Private Hospitals",    type:"Healthcare"},
  {icon:"🔬",label:"Blood Banks & Transfusion Centers",type:"Clinical"},
  {icon:"🌍",label:"WHO & International Health Orgs",type:"Global"},
  {icon:"💼",label:"Institutional Investors & VC",  type:"Finance"},
  {icon:"🏦",label:"Development Finance Institutions",type:"Finance"},
  {icon:"🚨",label:"Emergency Response Agencies",   type:"Emergency"},
  {icon:"🔴",label:"Red Cross & Health NGOs",       type:"NGO"},
];

export default function Partnerships() {
  const ref = useReveal();
  return (
    <section id="partnerships" ref={ref} className="section bg-white grid-dots">
      <div className="container" style={{ position:"relative", zIndex:2 }}>
        <div style={{ display:"grid", gap:"clamp(40px,6vw,80px)", alignItems:"start" }} className="two-col">

          {/* Left */}
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
                {icon:Shield, title:"Regulatory Compliance", desc:"NAFDAC, WHO, and ISO-aligned protocols across all operations"},
                {icon:Award,  title:"Clinical Leadership",   desc:"Expert leadership in transfusion medicine and medical logistics"},
                {icon:Globe,  title:"PPP Framework Ready",   desc:"Structured for public-private partnership at state and federal level"},
              ].map(item=>(
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

          {/* Right — stakeholders */}
          <div className="reveal-right">
            <div className="caption" style={{ color:"var(--steel-light)", marginBottom:16 }}>Key Stakeholders & Partners</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {STAKEHOLDERS.map((s,i)=>(
                <div key={s.label} className="reveal" style={{ transitionDelay:`${i*.06}s`, border:"1px solid var(--smoke)", padding:"14px 16px", background:"var(--off-white)", transition:"border-color .3s, transform .3s var(--ease-expo)" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(138,3,3,.3)"; e.currentTarget.style.transform="translateY(-2px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--smoke)";     e.currentTarget.style.transform="none";}}>
                  <div style={{ fontSize:20, marginBottom:8 }}>{s.icon}</div>
                  <div style={{ fontSize:12, color:"var(--ink)", fontWeight:500, lineHeight:1.4 }}>{s.label}</div>
                  <div className="caption" style={{ color:"var(--crimson)", opacity:.7, marginTop:4, fontSize:8 }}>{s.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investor CTA */}
        <div className="reveal" style={{ marginTop:"clamp(48px,6vw,80px)", background:"var(--ink)", padding:"clamp(40px,5vw,64px)", position:"relative", overflow:"hidden", transitionDelay:".3s" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"var(--crimson)" }}/>
          <div className="grid-lines-dark" style={{ position:"absolute", inset:0, opacity:.6 }}/>
          <div style={{ position:"relative", zIndex:2, display:"flex", flexDirection:"column", gap:24, alignItems:"flex-start" }} className="investor-row">
            <div>
              <div className="caption" style={{ color:"rgba(255,255,255,.35)", marginBottom:12 }}>Investor & Partnership Opportunity</div>
              <h3 className="font-display" style={{ fontSize:"clamp(22px,3vw,36px)", fontWeight:700, color:"#fff", lineHeight:1.2, marginBottom:12 }}>
                Be Part of Nigeria&rsquo;s <em style={{ color:"var(--crimson)" }}>Healthcare Revolution</em>
              </h3>
              <p className="body-md" style={{ color:"rgba(255,255,255,.42)", maxWidth:500 }}>
                CrimsonWings is open to strategic partnerships, institutional investment, and government collaboration. We have the infrastructure plan, clinical expertise, and technology.
              </p>
            </div>
            <a href="#contact" className="btn-primary"><span>Contact Investor Relations</span></a>
          </div>
        </div>
      </div>
      <style>{`
        @media(min-width:900px){.two-col{grid-template-columns:1fr 1fr !important;} .investor-row{flex-direction:row !important; align-items:center !important;justify-content:space-between !important;}}
      `}</style>
    </section>
  );
}
