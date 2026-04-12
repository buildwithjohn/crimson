"use client";
import { useReveal } from "./useReveal";
import Image from "next/image";
import { Wifi, Thermometer, Cpu, Network, Shield, Zap } from "lucide-react";

const SECTIONS = [
  {
    icon: Wifi, num:"01",
    title:"Autonomous Delivery Infrastructure",
    body:"CrimsonWings deploys a hybrid logistics fleet — drones, cold-chain bikes, and refrigerated vans — moving blood efficiently across Lagos urban and coastal environments. Each delivery route is dynamically selected based on urgency, volume, and distance.",
    image:"/tech-delivery.jpg",
    imageAlt:"CrimsonWings cold-chain delivery van",
    points:["Medical drones for urgent last-mile delivery","Cold-chain bikes for medium-range transport","Refrigerated vans for bulk delivery"],
    color:"#CC0000",
  },
  {
    icon: Thermometer, num:"02",
    title:"Advanced Cold-Chain System",
    body:"From donor collection to final delivery, every unit of blood is preserved under strict temperature-controlled conditions. Our mobile and fixed storage systems maintain cold-chain integrity across every stage.",
    image:"/tech-coldchain.jpg",
    imageAlt:"CrimsonWings cold-chain storage facility",
    points:["Collection drives","Screening centers","Transport vehicles","Central blood bank facilities"],
    color:"#2F80ED",
  },
  {
    icon: Cpu, num:"03",
    title:"Intelligent Dispatch & Decision Engine",
    body:"At the core of CrimsonWings is a real-time decision system that instantly matches supply with demand, selects optimal delivery routes, balances inventory across locations, and tracks every unit from donor to patient.",
    image:"/tech-dispatch.jpg",
    imageAlt:"CrimsonWings intelligent dispatch and decision center",
    points:["Matches supply with demand instantly","Selects optimal delivery routes","Balances inventory across locations","Tracks every unit — donor to patient"],
    color:"#CC0000",
  },
  {
    icon: Network, num:"04",
    title:"Connected Infrastructure",
    body:"CrimsonWings operates as a distributed network spanning every stage of blood logistics across Lagos State — built for scale and designed for national impact.",
    image:"/tech-network.jpg",
    imageAlt:"CrimsonWings hub network across Lagos",
    points:["Donor collection drives","Screening and processing centers","Mobile cold-chain units","Central blood bank operations","Delivery hubs across Lagos"],
    color:"#2F80ED",
  },
];

export default function Technology() {
  const ref = useReveal();
  return (
    <section id="technology" ref={ref} style={{
      background:"#0B1F33",
      paddingBlock:"var(--section-py)",
      position:"relative", overflow:"hidden",
    }}>
      <div className="grid-lines-dark" style={{ position:"absolute", inset:0, opacity:.5 }}/>
      <div style={{
        position:"absolute", top:"50%", left:"50%",
        transform:"translate(-50%,-50%)",
        width:900, height:600, borderRadius:"50%",
        background:"radial-gradient(ellipse, rgba(204,0,0,.1) 0%, transparent 65%)",
        pointerEvents:"none",
      }}/>

      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:720, margin:"0 auto clamp(56px,7vw,96px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>
            <span style={{ color:"rgba(255,255,255,.5)" }}>Core Technology</span>
          </div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"#fff", marginBottom:20 }}>
            Powering a{" "}
            <em style={{ color:"var(--crimson)" }}>Real-Time Blood Logistics</em>{" "}
            Network
          </h2>
          <p className="body-lg reveal delay-2" style={{ color:"rgba(255,255,255,.78)" }}>
            CrimsonWings operates a fully integrated system connecting blood collection,
            processing, and delivery into one intelligent, responsive network — designed
            for speed, safety, and reliability.
          </p>
        </div>

        {/* 4 alternating sections */}
        <div style={{ display:"flex", flexDirection:"column", gap:"clamp(56px,7vw,88px)" }}>
          {SECTIONS.map((s, i) => {
            const rev = i % 2 === 1;
            return (
              <div key={s.num} style={{ display:"grid", gap:"clamp(28px,4vw,56px)", alignItems:"center" }} className="tech-row">

                {/* Text */}
                <div style={{ order: rev ? 2 : 1 }} className={rev ? "reveal-right" : "reveal"}>
                  <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24 }}>
                    <div style={{
                      width:56, height:56, flexShrink:0,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      background:`${s.color}20`, border:`1.5px solid ${s.color}50`,
                    }}>
                      <s.icon size={26} style={{ color:s.color }}/>
                    </div>
                    <div>
                      <div className="caption" style={{ color:`${s.color}cc`, marginBottom:5, fontSize:11 }}>
                        Module {s.num}
                      </div>
                      <h3 className="h3 font-display" style={{ color:"#fff", lineHeight:1.2 }}>{s.title}</h3>
                    </div>
                  </div>
                  <p className="body-lg" style={{ color:"rgba(255,255,255,.78)", marginBottom:28 }}>{s.body}</p>
                  <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                    {s.points.map(pt => (
                      <div key={pt} style={{ display:"flex", alignItems:"center", gap:14 }}>
                        <div style={{
                          width:8, height:8, borderRadius:"50%",
                          background:s.color, flexShrink:0,
                          boxShadow:`0 0 10px ${s.color}`,
                        }}/>
                        <span style={{ fontSize:17, color:"rgba(255,255,255,.72)", lineHeight:1.5 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div style={{ order: rev ? 1 : 2 }} className={rev ? "reveal" : "reveal-right"}>
                  <div style={{
                    position:"relative", paddingBottom:"65%",
                    overflow:"hidden",
                    border:`1px solid ${s.color}35`,
                  }}>
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      style={{ objectFit:"cover", objectPosition:"center" }}
                      sizes="(max-width:900px) 100vw, 50vw"
                    />
                    {/* Top bar */}
                    <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg, ${s.color}, transparent)`, zIndex:2 }}/>
                    {/* Corner brackets */}
                    <div style={{ position:"absolute", top:12, right:12, width:28, height:28, borderTop:`2px solid ${s.color}90`, borderRight:`2px solid ${s.color}90`, zIndex:2 }}/>
                    <div style={{ position:"absolute", bottom:12, left:12, width:28, height:28, borderBottom:`2px solid ${s.color}90`, borderLeft:`2px solid ${s.color}90`, zIndex:2 }}/>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Built for Scale callout */}
        <div className="reveal" style={{
          marginTop:"clamp(64px,8vw,100px)",
          border:"1px solid rgba(204,0,0,.4)",
          background:"rgba(204,0,0,.1)",
          padding:"clamp(36px,5vw,60px)",
          textAlign:"center",
          transitionDelay:".3s",
        }}>
          <div style={{ display:"flex", justifyContent:"center", gap:16, flexWrap:"wrap", marginBottom:24 }}>
            {[Shield, Zap, Network].map((Icon, i) => (
              <div key={i} style={{
                width:48, height:48, display:"flex", alignItems:"center", justifyContent:"center",
                background:"rgba(204,0,0,.2)", border:"1px solid rgba(204,0,0,.4)",
              }}>
                <Icon size={22} style={{ color:"var(--crimson)" }}/>
              </div>
            ))}
          </div>
          <h3 className="h3 font-display" style={{ color:"#fff", marginBottom:14 }}>
            Built for Scale. Designed for Impact.
          </h3>
          <p style={{ fontSize:18, color:"rgba(255,255,255,.72)", maxWidth:560, margin:"0 auto" }}>
            This is not a single facility — it is a scalable national infrastructure
            for blood access across Nigeria.
          </p>
        </div>
      </div>

      <style>{`@media(min-width:900px){ .tech-row{ grid-template-columns:1fr 1fr !important; } }`}</style>
    </section>
  );
}
