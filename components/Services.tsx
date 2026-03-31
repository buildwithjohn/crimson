"use client";
import { useReveal } from "./useReveal";
import { useEffect, useRef, useState } from "react";
import {
  Droplets, FlaskConical, Thermometer,
  Network, Wind, BarChart3,
} from "lucide-react";

const SERVICES = [
  {
    num:"01", icon:Droplets,
    title:"Blood Collection & Donor Management",
    desc:"Structured donor recruitment, eligibility screening, and collection — digitally logged into our OS platform from the first interaction.",
    tags:["Donor Portal","Eligibility Screening","Digital Records"],
    accent:"#CC0000",
    metric:{ val:"20K+", label:"Donors/Month" },
  },
  {
    num:"02", icon:FlaskConical,
    title:"Advanced Viral Screening (NAT)",
    desc:"Every unit is subjected to Nucleic Acid Testing — detecting HIV, Hepatitis B, Hepatitis C, and HTLV with gold-standard precision before entry into storage.",
    tags:["NAT Testing","Multi-pathogen","Zero Tolerance"],
    accent:"#2F80ED",
    metric:{ val:"99.99%", label:"Accuracy" },
  },
  {
    num:"03", icon:Thermometer,
    title:"Cold Chain Storage at Scale",
    desc:"Walk-in cold rooms and ultra-low temperature freezers maintain strict temperature control for 20,000+ units per month, with automated 24/7 monitoring.",
    tags:["Walk-in Cold Rooms","ULT Freezers","24/7 Monitoring"],
    accent:"#0EA5E9",
    metric:{ val:"-40°C", label:"Storage Temp" },
  },
  {
    num:"04", icon:Network,
    title:"Hospital Network Integration",
    desc:"Hospitals connect directly to our OS platform to submit real-time blood requests, track inventory availability, and receive digital delivery confirmations.",
    tags:["Real-time Requests","Inventory View","Digital Chain"],
    accent:"#C9A84C",
    metric:{ val:"181+", label:"Hospitals" },
  },
  {
    num:"05", icon:Wind,
    title:"Emergency Drone Delivery",
    desc:"Temperature-controlled drones execute last-mile delivery for critical emergencies — reaching any hospital in Lagos in under 60 minutes from dispatch.",
    tags:["Drone Dispatch","Temp Controlled","< 60 min"],
    accent:"#CC0000",
    metric:{ val:"<60", label:"Min Delivery" },
  },
  {
    num:"06", icon:BarChart3,
    title:"Analytics & Regulatory Reporting",
    desc:"Comprehensive dashboards give operations, management, and government partners full visibility into delivery performance, inventory, and compliance metrics.",
    tags:["Live Dashboards","Compliance Reports","Forecasting"],
    accent:"#22c55e",
    metric:{ val:"100%", label:"Compliance" },
  },
];

function ServiceCard({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      className="reveal"
      style={{ transitionDelay: `${i * 0.07}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        height: "100%",
        background: hovered ? "var(--ink)" : "#0E1117",
        border: `1px solid ${hovered ? s.accent + "55" : "rgba(255,255,255,.07)"}`,
        padding: "clamp(24px,2.5vw,36px)",
        position: "relative",
        overflow: "hidden",
        transition: "all .4s var(--ease-expo)",
        cursor: "default",
      }}>

        {/* Animated top border */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity .4s",
        }} />

        {/* Glow blob behind */}
        <div style={{
          position: "absolute", bottom: -60, right: -60,
          width: 180, height: 180, borderRadius: "50%",
          background: s.accent,
          opacity: hovered ? .07 : 0,
          filter: "blur(40px)",
          transition: "opacity .5s",
          pointerEvents: "none",
        }} />

        {/* Corner circuit decoration */}
        <div style={{ position:"absolute", top:12, right:12, opacity:.12, pointerEvents:"none" }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M0 18 H10 V0" stroke={s.accent} strokeWidth="1"/>
            <path d="M36 18 H26 V36" stroke={s.accent} strokeWidth="1"/>
            <circle cx="10" cy="0" r="2" fill={s.accent}/>
            <circle cx="26" cy="36" r="2" fill={s.accent}/>
          </svg>
        </div>

        {/* Header row */}
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:20 }}>
          <div style={{
            width:44, height:44,
            display:"flex", alignItems:"center", justifyContent:"center",
            background: `${s.accent}18`,
            border: `1px solid ${s.accent}35`,
            transition: "background .4s, border-color .4s",
          }}>
            <s.icon size={20} style={{ color: s.accent }} />
          </div>
          {/* Live metric */}
          <div style={{ textAlign:"right" }}>
            <div className="font-display" style={{ fontSize:"clamp(18px,2vw,24px)", fontWeight:700, color: s.accent, lineHeight:1 }}>
              {s.metric.val}
            </div>
            <div className="caption" style={{ color:"rgba(255,255,255,.28)", fontSize:8, marginTop:3 }}>
              {s.metric.label}
            </div>
          </div>
        </div>

        {/* Phase number watermark */}
        <div className="font-mono" style={{
          position:"absolute", top:16, left:16,
          fontSize:11, color:"rgba(255,255,255,.08)",
          letterSpacing:".1em",
        }}>{s.num}</div>

        <h3 className="font-display" style={{
          fontSize:"clamp(15px,1.6vw,19px)", fontWeight:700,
          color:"#fff", lineHeight:1.3, marginBottom:12,
        }}>
          {s.title}
        </h3>

        <p style={{ fontSize:13, color:"rgba(255,255,255,.48)", lineHeight:1.75, marginBottom:20 }}>
          {s.desc}
        </p>

        {/* Tags */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
          {s.tags.map(t => (
            <span key={t} className="font-mono" style={{
              fontSize:9, letterSpacing:".1em", textTransform:"uppercase",
              padding:"3px 9px",
              border:`1px solid ${s.accent}30`,
              background:`${s.accent}10`,
              color: s.accent,
            }}>{t}</span>
          ))}
        </div>

        {/* Bottom scan line on hover */}
        <div style={{
          position:"absolute", bottom:0, left:0, right:0, height:1,
          background:`linear-gradient(90deg, transparent, ${s.accent}80, transparent)`,
          opacity: hovered ? 1 : 0,
          transition:"opacity .4s",
        }}/>
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" ref={ref} className="section" style={{ background:"#080C14" }}>
      {/* Animated grid background */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(138,3,3,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(138,3,3,.04) 1px, transparent 1px)",
        backgroundSize:"56px 56px",
      }}/>
      {/* Radial glow centre */}
      <div style={{
        position:"absolute", top:"50%", left:"50%",
        transform:"translate(-50%,-50%)",
        width:800, height:800, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(138,3,3,.06) 0%, transparent 65%)",
        pointerEvents:"none",
      }}/>

      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:580, margin:"0 auto clamp(48px,6vw,80px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>
            <span style={{ color:"rgba(255,255,255,.35)" }}>What We Offer</span>
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"#fff", marginBottom:16 }}>
            Comprehensive <em style={{ color:"var(--crimson)" }}>Blood Supply</em> Services
          </h2>
          <p className="body-lg reveal delay-2" style={{ color:"rgba(255,255,255,.45)" }}>
            Six integrated service lines — each essential, all connected through our proprietary OS platform.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display:"grid", gap:16 }} className="three-col">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.num} s={s} i={i} />
          ))}
        </div>

        {/* Bottom data strip */}
        <div className="reveal" style={{
          marginTop: "clamp(40px,5vw,64px)",
          display:"flex", flexWrap:"wrap", gap:0,
          border:"1px solid rgba(255,255,255,.06)",
          overflow:"hidden",
          transitionDelay:".4s",
        }}>
          {[
            { label:"Blood Units Processed / Year", val:"240K–280K" },
            { label:"Average Delivery Time",         val:"<60 min" },
            { label:"Viral Screening Accuracy",      val:"99.99%"  },
            { label:"Partner Hospitals",             val:"181+"    },
          ].map((stat, i) => (
            <div key={stat.label} style={{
              flex:"1 1 180px",
              padding:"20px 24px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,.06)" : "none",
              textAlign:"center",
            }}>
              <div className="font-display" style={{ fontSize:"clamp(20px,2.5vw,30px)", fontWeight:700, color:"#fff", lineHeight:1, marginBottom:6 }}>
                {stat.val}
              </div>
              <div className="caption" style={{ color:"rgba(255,255,255,.3)", fontSize:9 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(min-width:900px){ .three-col{ grid-template-columns:repeat(3,1fr) !important; } }
      `}</style>
    </section>
  );
}
