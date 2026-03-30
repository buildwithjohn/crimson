"use client";
import { useReveal } from "./useReveal";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({name:"",org:"",email:"",type:"",message:""});
  const [sent, setSent] = useState(false);
  const handle = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f=>({...f,[e.target.name]:e.target.value}));
  const submit = (e:React.FormEvent) => { e.preventDefault(); setSent(true); };

  const inputStyle:React.CSSProperties = {
    width:"100%", background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.1)",
    color:"#fff", fontFamily:"var(--font-body)", fontSize:14, padding:"13px 16px",
    outline:"none", transition:"border-color .2s", borderRadius:0,
  };

  return (
    <section id="contact" ref={ref} className="section bg-ink grid-lines-dark noise-overlay">
      <div className="container" style={{ position:"relative", zIndex:2 }}>
        <div style={{ display:"grid", gap:"clamp(40px,6vw,80px)" }} className="two-col">

          {/* Left */}
          <div>
            <div className="section-label reveal" style={{ marginBottom:20 }}>
              <span style={{ color:"rgba(255,255,255,.35)" }}>Get In Touch</span>
            </div>
            <h2 className="h2 font-display reveal delay-1" style={{ color:"#fff", marginBottom:16 }}>
              Ready to <em style={{ color:"var(--crimson)" }}>Partner</em> With Us?
            </h2>
            <p className="body-lg reveal delay-2" style={{ color:"rgba(255,255,255,.45)", marginBottom:36 }}>
              Whether you represent a government health ministry, a hospital network, an investment fund, or an international health organization — we want to hear from you.
            </p>

            <div className="reveal delay-3" style={{ display:"flex", flexDirection:"column", gap:20, marginBottom:36 }}>
              {[
                {icon:Mail,   label:"General Enquiries",  val:"infodeskcwpbl@crimsonwingsbiologics.com"},
                {icon:Mail,   label:"Investor Relations", val:"investorrelations@crimsonwingsbiologics.com"},
                {icon:Phone,  label:"Phone",              val:"+234 708 681 7669"},
                {icon:MapPin, label:"Location",           val:"Lagos, Nigeria"},
              ].map(c=>(
                <div key={c.label} style={{ display:"flex", gap:14, alignItems:"flex-start" }}>
                  <div style={{ flexShrink:0, width:36, height:36, display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid rgba(138,3,3,.3)", background:"rgba(138,3,3,.08)", marginTop:2 }}>
                    <c.icon size={14} style={{ color:"var(--crimson)" }}/>
                  </div>
                  <div>
                    <div className="caption" style={{ color:"rgba(255,255,255,.28)", marginBottom:4 }}>{c.label}</div>
                    <div style={{ fontSize:13, color:"rgba(255,255,255,.62)", wordBreak:"break-all" }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal delay-4">
              <div className="caption" style={{ color:"rgba(255,255,255,.28)", marginBottom:10 }}>We Welcome</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {["Government Partnership","Hospital Integration","Institutional Investment","NGO Collaboration","DFI Funding","Strategic Alliance"].map(t=>(
                  <span key={t} className="tag-dark">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            <div style={{ background:"rgba(255,255,255,.02)", border:"1px solid rgba(255,255,255,.07)", padding:"clamp(28px,4vw,48px)", position:"relative" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"var(--crimson)" }}/>

              {sent ? (
                <div style={{ textAlign:"center", padding:"48px 0" }}>
                  <div style={{ width:48, height:48, margin:"0 auto 20px", display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(138,3,3,.12)", border:"1px solid rgba(138,3,3,.28)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div className="font-display" style={{ fontSize:24, fontWeight:700, color:"#fff", marginBottom:10 }}>Message Received</div>
                  <p className="body-md" style={{ color:"rgba(255,255,255,.42)" }}>Our team will respond within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ display:"flex", flexDirection:"column", gap:16 }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }} className="form-row">
                    {[{n:"name",l:"Full Name"},{n:"org",l:"Organisation"}].map(f=>(
                      <div key={f.n}>
                        <label className="caption" style={{ display:"block", color:"rgba(255,255,255,.32)", marginBottom:8 }}>{f.l} *</label>
                        <input required name={f.n} value={(form as any)[f.n]} onChange={handle} style={inputStyle}
                          onFocus={e=>e.target.style.borderColor="rgba(138,3,3,.55)"}
                          onBlur={e=>e.target.style.borderColor="rgba(255,255,255,.1)"}/>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="caption" style={{ display:"block", color:"rgba(255,255,255,.32)", marginBottom:8 }}>Email Address *</label>
                    <input required type="email" name="email" value={form.email} onChange={handle} style={inputStyle}
                      onFocus={e=>e.target.style.borderColor="rgba(138,3,3,.55)"}
                      onBlur={e=>e.target.style.borderColor="rgba(255,255,255,.1)"}/>
                  </div>
                  <div>
                    <label className="caption" style={{ display:"block", color:"rgba(255,255,255,.32)", marginBottom:8 }}>Partnership Type</label>
                    <select name="type" value={form.type} onChange={handle} style={{...inputStyle,appearance:"none"}}
                      onFocus={e=>e.target.style.borderColor="rgba(138,3,3,.55)"}
                      onBlur={e=>e.target.style.borderColor="rgba(255,255,255,.1)"}>
                      <option value="" style={{background:"#1a1a1a"}}>Select type...</option>
                      {["Government Partnership","Hospital Integration","Institutional Investment","NGO / International Health Org","Development Finance","Other"].map(o=>(
                        <option key={o} value={o} style={{background:"#1a1a1a"}}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="caption" style={{ display:"block", color:"rgba(255,255,255,.32)", marginBottom:8 }}>Message *</label>
                    <textarea required name="message" rows={5} value={form.message} onChange={handle}
                      style={{...inputStyle,resize:"vertical"}}
                      onFocus={e=>e.target.style.borderColor="rgba(138,3,3,.55)"}
                      onBlur={e=>e.target.style.borderColor="rgba(255,255,255,.1)"}/>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width:"100%", justifyContent:"center", padding:"15px" }}>
                    <span>Send Message</span><ArrowRight size={14}/>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(min-width:900px){.two-col{grid-template-columns:1fr 1fr !important;}}
        @media(max-width:500px){.form-row{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
}
