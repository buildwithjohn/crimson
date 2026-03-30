"use client";
import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle2, FileText, Award, AlertTriangle } from "lucide-react";

const STANDARDS = [
  { body:"NAFDAC", full:"National Agency for Food & Drug Administration and Control", scope:"Blood product registration, facility licensing, and manufacturing standards compliance.", color:"#8A0303" },
  { body:"NBTS",   full:"National Blood Transfusion Service",                         scope:"Alignment with federal blood banking protocols, donor management, and reporting frameworks.", color:"#2F80ED" },
  { body:"WHO",    full:"World Health Organisation",                                  scope:"WHO blood safety guidelines and global best practices for NAT screening, cold chain, and logistics.", color:"#006DB7" },
  { body:"ISO",    full:"ISO 15189 — Medical Laboratories",                           scope:"Quality management systems for medical laboratories, covering NAT screening operations.", color:"#C9A84C" },
  { body:"AABB",   full:"American Association of Blood Banks",                        scope:"International accreditation standards for blood banking and transfusion medicine.", color:"#22c55e" },
  { body:"LMOH",   full:"Lagos State Ministry of Health",                             scope:"State-level regulatory alignment, PPP framework compliance, and operational licensing.", color:"#9333EA" },
];

const SAFETY_PILLARS = [
  {
    icon: Shield,
    title: "NAT-Level Viral Screening",
    desc: "Every blood unit undergoes Nucleic Acid Testing — detecting HIV, Hepatitis B, C, and HTLV at the RNA/DNA level. This eliminates the window period present in conventional serological testing.",
    status: "Active",
    color: "#8A0303",
  },
  {
    icon: CheckCircle2,
    title: "Cold Chain Integrity",
    desc: "Continuous automated temperature monitoring across all walk-in cold rooms and ULT freezers. Any deviation triggers immediate automated alerts and backup protocols.",
    status: "Certified",
    color: "#2F80ED",
  },
  {
    icon: FileText,
    title: "Full Digital Chain of Custody",
    desc: "Every blood unit is tracked from donor through screening, storage, dispatch, and delivery confirmation — with an immutable audit trail in the CrimsonWings OS.",
    status: "Active",
    color: "#C9A84C",
  },
  {
    icon: Award,
    title: "Clinical Leadership Oversight",
    desc: "All operations are supervised by registered transfusion medicine specialists and haematologists, with defined escalation protocols for any safety concern.",
    status: "Ongoing",
    color: "#22c55e",
  },
  {
    icon: AlertTriangle,
    title: "Adverse Event Reporting",
    desc: "Structured adverse event reporting aligned with NAFDAC and WHO haemovigilance frameworks — ensuring transparency, accountability, and continuous improvement.",
    status: "Framework Ready",
    color: "#0EA5E9",
  },
  {
    icon: Shield,
    title: "Disaster & Mass Casualty Protocol",
    desc: "Dedicated operational protocols for mass casualty events — including automatic resource reallocation, priority routing, and emergency government liaison procedures.",
    status: "Protocol Active",
    color: "#9333EA",
  },
];

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: "clamp(64px,8vw,100px)", background: "var(--ink)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.4)", textDecoration: "none", marginBottom: 40, fontSize: 13, fontFamily: "var(--font-mono)", letterSpacing: ".12em", textTransform: "uppercase" }}>
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="section-label" style={{ marginBottom: 20 }}>
            <span style={{ color: "rgba(255,255,255,.35)" }}>Standards & Governance</span>
          </div>
          <h1 className="h1 font-display" style={{ color: "#fff", marginBottom: 20, maxWidth: 700 }}>
            Safety &{" "}
            <em style={{ color: "var(--crimson)" }}>Compliance</em>
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,.45)", maxWidth: 600 }}>
            CrimsonWings operates to the highest clinical, regulatory, and operational standards in the world — because the lives of patients depend on it.
          </p>
        </div>
      </section>

      {/* Safety Pillars */}
      <section style={{ paddingBlock: "clamp(64px,8vw,100px)", background: "var(--off-white)" }}>
        <div className="container">
          <div style={{ marginBottom: "clamp(40px,5vw,64px)" }}>
            <div className="section-label" style={{ marginBottom: 16 }}>Safety Framework</div>
            <h2 className="h2 font-display" style={{ color: "var(--ink)" }}>
              Six Pillars of{" "}
              <em style={{ color: "var(--crimson)" }}>Blood Safety</em>
            </h2>
          </div>
          <div style={{ display: "grid", gap: 16 }} className="pillars-grid">
            {SAFETY_PILLARS.map((p) => (
              <div key={p.title} style={{
                background: "var(--white)", border: "1px solid var(--smoke)",
                borderTop: `3px solid ${p.color}`,
                padding: "clamp(24px,3vw,36px)",
                transition: "transform .3s var(--ease-expo), box-shadow .3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,.07)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: `${p.color}12`, border: `1px solid ${p.color}25` }}>
                    <p.icon size={18} style={{ color: p.color }} />
                  </div>
                  <span className="caption" style={{ fontSize: 9, padding: "3px 10px", background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}25` }}>
                    {p.status}
                  </span>
                </div>
                <h3 className="font-display" style={{ fontSize: "clamp(15px,1.6vw,18px)", fontWeight: 700, color: "var(--ink)", marginBottom: 10 }}>{p.title}</h3>
                <p className="body-md">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Standards */}
      <section style={{ paddingBlock: "clamp(64px,8vw,100px)", background: "var(--ink)" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: "clamp(40px,5vw,64px)" }}>
            <div className="section-label" style={{ marginBottom: 16 }}>
              <span style={{ color: "rgba(255,255,255,.35)" }}>Regulatory Alignment</span>
            </div>
            <h2 className="h2 font-display" style={{ color: "#fff" }}>
              Regulatory{" "}
              <em style={{ color: "var(--crimson)" }}>Standards</em>
            </h2>
            <p className="body-lg" style={{ color: "rgba(255,255,255,.42)", maxWidth: 540, marginTop: 12 }}>
              CrimsonWings is built to comply with — and exceed — every relevant regulatory framework governing blood banking and medical logistics in Nigeria and internationally.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }} className="standards-grid">
            {STANDARDS.map((s) => (
              <div key={s.body} style={{
                display: "flex", gap: 20, alignItems: "flex-start",
                padding: "24px 28px",
                background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)",
                borderLeft: `3px solid ${s.color}`,
                transition: "background .3s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.05)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.03)"}
              >
                <div style={{ flexShrink: 0 }}>
                  <div className="font-display" style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 700, color: s.color, lineHeight: 1 }}>{s.body}</div>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,.7)", marginBottom: 6 }}>{s.full}</div>
                  <p className="body-md" style={{ color: "rgba(255,255,255,.38)" }}>{s.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(min-width:700px){ .pillars-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(min-width:1000px){ .pillars-grid{ grid-template-columns:1fr 1fr 1fr !important; } }
        @media(min-width:700px){ .standards-grid{ grid-template-columns:1fr 1fr !important; } }
      `}</style>
    </>
  );
}
