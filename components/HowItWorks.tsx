"use client";
import { useReveal } from "./useReveal";
import NetworkVisual from "./NetworkVisual";
import { Users, Truck, FlaskConical, Building2, Package, Hospital, Cpu, Zap, Wind, CheckCircle2, BarChart3 } from "lucide-react";

/*
  FINAL IMAGE MAP — all confirmed:
  Step 01 Blood Collection      → phase-01.png       ✅ nurse + donor
  Step 02 Controlled Transport  → new-tech-delivery.jpg ✅ CrimsonWings van Lagos streets
  Step 03 Screening             → phase-02.png       ✅ lab scientist NAT machine
  Step 04 Central Blood Bank    → new-tech-coldchain.png ✅ CrimsonWings branded cold storage
  Step 05 Smart Inventory       → phase-04.png       ✅ logistics dashboard
  Step 06 Hospital Request      → hospital-request.jpg ✅ doctor tablet blood request
  Step 07 Intelligent Routing   → phase-04.png       ✅ dashboard (reuse)
  Step 08 Automated Dispatch    → tech-dispatch.jpg  ✅ CrimsonWings dispatch centre
  Step 09 Delivery Execution    → phase-05.png       ✅ drone over Lagos
  Step 10 Verification & Use    → phase-06.png       ✅ nurse QR scan
  Step 11 Traceability          → tech-network.jpg   ✅ aerial Lagos hub network
*/

const STEPS = [
  { num:"01", icon:Users,        title:"Blood Collection",               body:"Blood is collected through large-scale CrimsonWings donor drives and partner collection centers across Lagos.",                                                                                                         image:"/phase-01.png",           color:"#CC0000" },
  { num:"02", icon:Truck,        title:"Controlled Transport",           body:"Collected units are immediately secured in temperature-controlled CrimsonWings cold-chain vans for safe movement to screening facilities.",                                                                             image:"/delivery-execution.jpg",  color:"#2F80ED" },
  { num:"03", icon:FlaskConical, title:"Screening & Processing",         body:"Blood is transported to Ogun State-approved screening centers and CrimsonWings facilities for initial screening and component processing.",                                                                           image:"",                        color:"#CC0000", isAutomation:true },
  { num:"04", icon:Building2,    title:"Central Blood Bank Integration", body:"All units transfer to the CrimsonWings HQ Blood Bank where inventory is logged digitally, advanced NAT screening is conducted, and units are cleared for safe medical use.",                                                                                                           image:"/central-bloodbank.png", color:"#2F80ED" },
  { num:"05", icon:Package,      title:"Smart Inventory Management",     body:"Every unit is stored within a controlled cold-chain system and tracked in real time across the entire CrimsonWings network.",                                                                                                         image:"/smart-inventory.jpg",           color:"#CC0000" },
  { num:"06", icon:Hospital,     title:"Hospital Request",               body:"Hospitals and healthcare providers place requests through the CrimsonWings system — directly connected to our real-time inventory.",                                                                                   image:"/hospital-request.jpg",   color:"#2F80ED" },
  { num:"07", icon:Cpu,          title:"Intelligent Routing",            body:"The system automatically selects the best delivery method — drone for urgent small-volume, cold-chain bikes for medium range, cold-chain vans for bulk delivery.",                                                                         image:"/intelligent-routing.jpg",      color:"#CC0000" },
  { num:"08", icon:Zap,          title:"Automated Dispatch",             body:"Orders are processed through a decision engine that triggers immediate dispatch from the nearest hub or storage location — no manual delay.",                                                                          image:"/tech-dispatch.jpg",      color:"#2F80ED" },
  { num:"09", icon:Wind,         title:"Delivery Execution",             body:"Blood is transported via the selected logistics channel — drone, cold-chain bike, or van — and delivered directly to hospitals or designated endpoints.",                                                                              image:"/delivery-execution.jpg",       color:"#CC0000" },
  { num:"10", icon:CheckCircle2, title:"Verification & Use",             body:"Upon arrival, units are verified, logged as received in the CrimsonWings system, and released immediately for medical use.",                                                                                          image:"/phase-06.png",           color:"#2F80ED" },
  { num:"11", icon:BarChart3,    title:"Traceability & Reporting",       body:"Every unit remains traceable from donor to patient — enabling full audit trails, regulatory compliance, and data-driven system optimization.",                                                                         image:"/tech-network.jpg",       color:"#CC0000", isNetwork:true },
];

const FLOW = [
  {icon:Users,        label:"Donor Drive"},
  {icon:Truck,        label:"Van"},
  {icon:FlaskConical, label:"Screening"},
  {icon:Building2,    label:"HQ Lab"},
  {icon:Package,      label:"Storage"},
  {icon:Hospital,     label:"Request"},
  {icon:Cpu,          label:"Dispatch"},
  {icon:Wind,         label:"Delivery"},
  {icon:CheckCircle2, label:"Hospital"},
];



/* ── 3D Network Map — Ogun State + 9 Partner States ─────────────────────── */

export default function HowItWorks() {
  const ref = useReveal();
  return (
    <section id="how-it-works" ref={ref} style={{ background:"#FFFFFF", paddingBlock:"var(--section-py)", position:"relative", overflow:"hidden" }}>
      <div className="grid-dots" style={{ position:"absolute", inset:0 }}/>
      <div className="container" style={{ position:"relative", zIndex:2 }}>

        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:680, margin:"0 auto clamp(40px,5vw,64px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>End-to-End Process</div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)", marginBottom:20 }}>
            From <em style={{ color:"var(--crimson)" }}>Donor</em> to Patient —{" "}
            <em style={{ color:"var(--crimson)" }}>A Seamless Flow</em>
          </h2>
          <p className="body-lg reveal delay-2">
            CrimsonWings transforms blood supply into a structured, traceable, and responsive system.
            Every unit is tracked from collection to the patient bedside.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="reveal delay-2" style={{ marginBottom:"clamp(56px,7vw,88px)", background:"var(--off-white)", border:"1px solid var(--smoke)", padding:"clamp(20px,3vw,36px)", overflowX:"auto" }}>
          <div style={{ display:"flex", alignItems:"center", minWidth:640 }}>
            {FLOW.map((step, i) => (
              <div key={step.label} style={{ display:"flex", alignItems:"center", flex:1 }}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10, flex:"0 0 auto", minWidth:68 }}>
                  <div style={{ width:50, height:50, display:"flex", alignItems:"center", justifyContent:"center", background:i===0||i===FLOW.length-1?"var(--crimson)":"#1C1C2E", border:`2px solid ${i%2===0?"#CC0000":"#2F80ED"}`, borderRadius:"50%" }}>
                    <step.icon size={20} color="#fff"/>
                  </div>
                  <span className="caption" style={{ fontSize:9, color:"var(--ink)", textAlign:"center", maxWidth:68, lineHeight:1.4 }}>{step.label}</span>
                </div>
                {i < FLOW.length - 1 && (
                  <div style={{ flex:1, height:2, minWidth:8, background:`linear-gradient(90deg, ${i%2===0?"#CC0000":"#2F80ED"}, ${i%2===0?"#2F80ED":"#CC0000"})`, position:"relative" }}>
                    <div style={{ position:"absolute", right:-1, top:-4, width:0, height:0, borderTop:"5px solid transparent", borderBottom:"5px solid transparent", borderLeft:`8px solid ${i%2===0?"#2F80ED":"#CC0000"}` }}/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 11 steps — all images assigned */}
        <div style={{ display:"flex", flexDirection:"column", gap:3 }}>
          {STEPS.map((step, i) => {
            const rev = i % 2 === 1;
            return (
              <div key={step.num} style={{ display:"grid", background:i%2===0?"#fff":"var(--off-white)", border:"1px solid var(--smoke)", marginBottom:2 }} className="how-row">

                {/* Image side */}
                <div style={{ order:rev?2:1, minHeight:300, position:"relative", overflow:"hidden" }}>
                  {(step as any).isAutomation ? (
                    /* Automation animation for Step 03 */
                    <HowItWorksAutomation stepNum={step.num} color={step.color}/>
                  ) : (step as any).isNetwork ? (
                    /* 3D Network visual for Step 11 */
                    <div style={{ position:"relative" }}>
                      <NetworkVisual compact={true}/>
                      <div style={{ position:"absolute", top:14, left:14, background:step.color, color:"#fff", fontFamily:"var(--font-display)", fontWeight:800, fontSize:14, padding:"5px 14px", zIndex:10 }}>
                        {step.num}
                      </div>
                    </div>
                  ) : (
                    /* Regular photo */
                    <div style={{ position:"relative", height:"100%", minHeight:300, background:"#111" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={step.image}
                        alt={step.title}
                        style={{ width:"100%", height:"100%", minHeight:300, objectFit:"cover", objectPosition:"center", display:"block" }}
                      />
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,.5) 0%, transparent 50%)" }}/>
                      <div style={{ position:"absolute", top:14, left:14, background:step.color, color:"#fff", fontFamily:"var(--font-display)", fontWeight:800, fontSize:14, padding:"5px 14px", zIndex:3 }}>
                        {step.num}
                      </div>
                      <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"12px 16px", zIndex:3 }}>
                        <span className="caption" style={{ color:"rgba(255,255,255,.65)", fontSize:9 }}>Step {step.num} — {step.title}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ order:rev?1:2, padding:"clamp(28px,4vw,52px)", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:18 }}>
                    <div style={{ width:48, height:48, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", background:`${step.color}12`, border:`1.5px solid ${step.color}35` }}>
                      <step.icon size={22} style={{ color:step.color }}/>
                    </div>
                    <h3 className="font-display" style={{ fontSize:"clamp(20px,2.5vw,28px)", fontWeight:700, color:"var(--ink)", lineHeight:1.2 }}>{step.title}</h3>
                  </div>
                  <p className="body-lg" style={{ color:"var(--steel)" }}>{step.body}</p>
                  <div style={{ marginTop:20, height:3, width:48, background:`linear-gradient(90deg, ${step.color}, transparent)` }}/>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing */}
        <div className="reveal" style={{ marginTop:"clamp(48px,6vw,72px)", textAlign:"center", padding:"clamp(32px,4vw,52px)", background:"#1C1C2E", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg, var(--crimson), #2F80ED, var(--crimson))" }}/>
          <h3 className="h3 font-display" style={{ color:"#fff", marginBottom:12 }}>A Complete Loop of Trust, Speed, and Accountability</h3>
          <p style={{ fontSize:18, color:"rgba(255,255,255,.72)", maxWidth:540, margin:"0 auto" }}>
            From the first drop collected to the moment blood reaches a patient — every step is tracked, verified, and optimized.
          </p>
        </div>
      </div>

      <style>{`
        @media(min-width:800px){
          .how-row{ grid-template-columns:1fr 1fr !important; }
          .how-row > div { min-height:320px; }
        }
      `}</style>
    </section>
  );
}
