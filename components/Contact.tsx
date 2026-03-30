"use client";
import { useReveal } from "./useReveal";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", org: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    padding: "14px 16px",
    outline: "none",
    transition: "border-color 0.2s",
    borderRadius: 0,
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden" style={{ background: "var(--ink)" }} ref={ref}>
      <div className="absolute inset-0 grid-lines-dark" />
      <div className="noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <div className="section-label reveal mb-8">
              <span style={{ color: "rgba(255,255,255,0.35)" }}>Get In Touch</span>
            </div>
            <h2
              className="font-display reveal delay-100 text-white"
              style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.1, fontWeight: 700 }}
            >
              Ready to{" "}
              <span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Partner</span>
              {" "}With Us?
            </h2>
            <p className="reveal delay-200 mt-6 text-white/50 leading-relaxed" style={{ fontSize: 16, maxWidth: 440 }}>
              Whether you represent a government health ministry, a hospital network, an investment fund, or an international health organization — we want to hear from you.
            </p>

            <div className="reveal delay-300 mt-12 space-y-6">
              {[
                { icon: Mail, label: "General Enquiries", val: "infodeskcwpbl@crimsonwingsbiologics.com" },
                { icon: Mail, label: "Investor Relations", val: "investorrelations@crimsonwingsbiologics.com" },
                { icon: Phone, label: "Phone", val: "+234 708 681 7669" },
                { icon: MapPin, label: "Location", val: "Lagos, Nigeria" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center mt-0.5"
                    style={{ border: "1px solid rgba(138,3,3,0.35)", background: "rgba(138,3,3,0.08)" }}
                  >
                    <c.icon size={15} style={{ color: "var(--crimson)" }} />
                  </div>
                  <div>
                    <div className="font-mono" style={{ fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>{c.label}</div>
                    <div className="text-white/70 mt-1 break-all" style={{ fontSize: 13 }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership types */}
            <div className="reveal delay-400 mt-12">
              <div className="font-mono mb-4" style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
                We Welcome
              </div>
              <div className="flex flex-wrap gap-2">
                {["Government Partnership", "Hospital Integration", "Institutional Investment", "NGO Collaboration", "DFI Funding", "Strategic Alliance"].map((t) => (
                  <span key={t} className="font-mono" style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 12px", border: "1px solid rgba(138,3,3,0.2)", color: "rgba(255,255,255,0.35)", background: "rgba(138,3,3,0.04)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            <div
              className="relative overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", padding: "48px 40px" }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "var(--crimson)" }} />

              {sent ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center mb-6" style={{ background: "rgba(138,3,3,0.12)", border: "1px solid rgba(138,3,3,0.3)" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--crimson)" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="font-display text-white font-bold" style={{ fontSize: 26 }}>Message Received</div>
                  <p className="text-white/45 mt-3" style={{ fontSize: 14 }}>
                    Thank you for reaching out. Our team will respond within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono block mb-2" style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Full Name *</label>
                      <input required name="name" value={form.name} onChange={handle} style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(138,3,3,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                    <div>
                      <label className="font-mono block mb-2" style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Organisation *</label>
                      <input required name="org" value={form.org} onChange={handle} style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(138,3,3,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-mono block mb-2" style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Email Address *</label>
                    <input required type="email" name="email" value={form.email} onChange={handle} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(138,3,3,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label className="font-mono block mb-2" style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Partnership Type</label>
                    <select name="type" value={form.type} onChange={handle} style={{ ...inputStyle, appearance: "none" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(138,3,3,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ background: "#1a1a1a" }}>Select type...</option>
                      <option value="government" style={{ background: "#1a1a1a" }}>Government Partnership</option>
                      <option value="hospital" style={{ background: "#1a1a1a" }}>Hospital Integration</option>
                      <option value="investor" style={{ background: "#1a1a1a" }}>Institutional Investment</option>
                      <option value="ngo" style={{ background: "#1a1a1a" }}>NGO / International Health Org</option>
                      <option value="dfi" style={{ background: "#1a1a1a" }}>Development Finance</option>
                      <option value="other" style={{ background: "#1a1a1a" }}>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-mono block mb-2" style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Message *</label>
                    <textarea required name="message" rows={5} value={form.message} onChange={handle}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(138,3,3,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <button type="submit" className="btn-crimson w-full justify-center" style={{ padding: "16px" }}>
                    <span>Send Message</span>
                    <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
