"use client";
import { useReveal } from "./useReveal";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q:"What makes CrimsonWings different from a standard blood bank?",             a:"CrimsonWings is an end-to-end blood supply infrastructure platform. Unlike traditional blood banks that only collect and store, we combine NAT-level viral screening, ultra-scale cold storage, a proprietary digital operating system, and triphasic logistics including drone delivery — all under one unified platform." },
  { q:"What is NAT screening and why does it matter?",                            a:"Nucleic Acid Testing (NAT) detects viral RNA/DNA directly in the blood sample, closing the 'window period' where donors test negative on conventional screens but are already infectious. NAT can detect HIV up to 11 days earlier and Hepatitis C up to 59 days earlier than standard antibody tests — making it the gold standard for blood safety." },
  { q:"How fast can blood be delivered in an emergency?",                         a:"Our target for urban emergency delivery within Lagos is under 60 minutes from request confirmation to hospital arrival. For standard scheduled deliveries, we operate on a planned logistics schedule. Emergency requests trigger immediate drone dispatch from the nearest hub." },
  { q:"What hospitals can access the CrimsonWings platform?",                     a:"We are building a network targeting 181+ hospitals across Lagos State, including public teaching hospitals, general hospitals, and private specialist facilities. Hospitals integrate with our OS platform to place real-time blood requests, track delivery status, and manage their blood inventory." },
  { q:"Is CrimsonWings aligned with government health structures?",               a:"Yes. CrimsonWings is designed for Public-Private Partnership (PPP) alignment with the Lagos State Ministry of Health and the National Blood Transfusion Service (NBTS). We operate within the regulatory framework of NAFDAC and relevant WHO guidelines." },
  { q:"How can investors or institutions get involved?",                           a:"We welcome strategic partnerships from institutional investors, development finance institutions (DFIs), international health organizations, and government bodies. Please reach out via investorrelations@crimsonwingsbiologics.com or use the contact form on this page." },
];

export default function FAQ() {
  const ref    = useReveal();
  const [open, setOpen] = useState<number|null>(0);
  return (
    <section id="faq" ref={ref} className="section bg-offwhite grid-dots">
      <div className="container" style={{ position:"relative", zIndex:2 }}>

        <div style={{ textAlign:"center", maxWidth:520, margin:"0 auto clamp(40px,5vw,72px)" }}>
          <div className="section-label reveal" style={{ justifyContent:"center", marginBottom:20 }}>Frequently Asked</div>
          <h2 className="h2 font-display reveal delay-1" style={{ color:"var(--ink)" }}>
            Questions & <em style={{ color:"var(--crimson)" }}>Answers</em>
          </h2>
        </div>

        <div style={{ maxWidth:760, margin:"0 auto", display:"flex", flexDirection:"column", gap:10 }}>
          {FAQS.map((faq,i)=>(
            <div key={i} className="reveal" style={{ transitionDelay:`${i*.07}s`, border:"1px solid", borderColor:open===i?"rgba(138,3,3,.22)":"var(--smoke)", background:"var(--white)", transition:"border-color .3s" }}>
              <button
                onClick={()=>setOpen(open===i?null:i)}
                style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:20, padding:"clamp(16px,2vw,24px) clamp(20px,2.5vw,28px)", background:"none", border:"none", cursor:"pointer", textAlign:"left" }}
              >
                <span className="font-display" style={{ fontSize:"clamp(15px,1.6vw,18px)", fontWeight:700, color:"var(--ink)", lineHeight:1.4 }}>{faq.q}</span>
                <div style={{ flexShrink:0, width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center", background:open===i?"var(--crimson)":"rgba(138,3,3,.07)", border:`1px solid ${open===i?"var(--crimson)":"rgba(138,3,3,.13)"}`, transition:"all .3s" }}>
                  {open===i ? <Minus size={13} color="#fff"/> : <Plus size={13} style={{ color:"var(--crimson)" }}/>}
                </div>
              </button>
              <div style={{ maxHeight:open===i?400:0, overflow:"hidden", transition:"max-height .4s var(--ease-expo)" }}>
                <p className="body-md" style={{ padding:"0 clamp(20px,2.5vw,28px) clamp(20px,2vw,28px)", borderTop:"1px solid var(--smoke)", paddingTop:"clamp(16px,2vw,20px)" }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
