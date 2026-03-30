"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const LEADERSHIP = [
  {
    name: "Dr. Abiodun Oladapo",
    role: "Chief Executive Officer",
    specialty: "Medical Director & Blood Bank Specialist",
    bio: "Over 18 years in transfusion medicine and healthcare administration across Nigeria and the UK. Former Head of Haematology at LASUTH. Pioneer of digitized blood banking protocols in West Africa.",
    initials: "AO",
    color: "#8A0303",
  },
  {
    name: "Engr. Chukwuemeka Nwachukwu",
    role: "Chief Technology Officer",
    specialty: "Systems Architecture & Drone Logistics",
    bio: "15 years in critical systems engineering. Led technology deployments for logistics platforms across sub-Saharan Africa. Architect of the CrimsonWings proprietary OS platform.",
    initials: "CN",
    color: "#2F80ED",
  },
  {
    name: "Dr. Ngozi Adeyemi",
    role: "Chief Medical Officer",
    specialty: "Transfusion Medicine & Clinical Safety",
    bio: "Fellow of the West African College of Physicians. 20+ years in blood safety and haematology. Led the integration of NAT screening standards into multiple Nigerian health institutions.",
    initials: "NA",
    color: "#C9A84C",
  },
  {
    name: "Mrs. Funke Balogun",
    role: "Chief Operations Officer",
    specialty: "Medical Logistics & Supply Chain",
    bio: "Extensive background in cold chain logistics and healthcare supply chain management across Nigeria. Previously Operations Director at a pan-African medical distribution company.",
    initials: "FB",
    color: "#22c55e",
  },
  {
    name: "Mr. Segun Adeleke",
    role: "Chief Financial Officer",
    specialty: "Healthcare Finance & Investment",
    bio: "Investment banking background with a focus on healthcare infrastructure financing. Structured multiple PPP transactions with Nigerian State governments and development finance institutions.",
    initials: "SA",
    color: "#9333EA",
  },
  {
    name: "Dr. Amina Yusuf",
    role: "Director, Government Affairs",
    specialty: "Health Policy & Regulatory Affairs",
    bio: "Former Senior Technical Advisor at the Federal Ministry of Health. Deep expertise in Nigerian health policy, NAFDAC regulatory frameworks, and public-private partnership negotiations.",
    initials: "AY",
    color: "#0EA5E9",
  },
];

const ADVISORS = [
  { name: "Prof. Olabisi Akinmade",    field: "Transfusion Medicine",      org: "University of Lagos Teaching Hospital"   },
  { name: "Dr. Samuel Okonkwo",        field: "Healthcare Technology",     org: "MIT Media Lab Africa"                    },
  { name: "Mrs. Adaeze Obi",           field: "Development Finance",       org: "African Development Bank (Former)"       },
  { name: "Prof. Emmanuel Afolabi",    field: "Public Health & Policy",    org: "Lagos State University"                  },
  { name: "Dr. Miriam Hassan",         field: "WHO Blood Safety Standards",org: "World Health Organisation"               },
  { name: "Mr. Babatunde Fashola Jr.", field: "Government Relations",      org: "Lagos State PPP Office"                  },
];

export default function AboutPage() {
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
            <span style={{ color: "rgba(255,255,255,.35)" }}>Our People</span>
          </div>
          <h1 className="h1 font-display" style={{ color: "#fff", marginBottom: 20, maxWidth: 700 }}>
            Leadership &{" "}
            <em style={{ color: "var(--crimson)" }}>Advisory Board</em>
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,.45)", maxWidth: 600 }}>
            CrimsonWings is led by a multidisciplinary team of clinicians, technologists, logistics experts, and policy professionals — united by a single mission to make safe blood accessible to every Nigerian.
          </p>
        </div>
      </section>

      {/* Leadership team */}
      <section style={{ paddingBlock: "clamp(64px,8vw,100px)", background: "var(--off-white)" }}>
        <div className="container">
          <div style={{ marginBottom: "clamp(40px,5vw,64px)" }}>
            <div className="section-label" style={{ marginBottom: 16 }}>Executive Team</div>
            <h2 className="h2 font-display" style={{ color: "var(--ink)" }}>
              The People Behind{" "}
              <em style={{ color: "var(--crimson)" }}>CrimsonWings</em>
            </h2>
          </div>

          <div style={{ display: "grid", gap: 20 }} className="leadership-grid">
            {LEADERSHIP.map((person) => (
              <div key={person.name} style={{
                background: "var(--white)", border: "1px solid var(--smoke)",
                padding: "clamp(24px,3vw,36px)", position: "relative", overflow: "hidden",
                transition: "transform .3s var(--ease-expo), box-shadow .3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: person.color }} />

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                  {/* Avatar */}
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
                    background: `${person.color}18`, border: `2px solid ${person.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span className="font-display" style={{ fontSize: 18, fontWeight: 700, color: person.color }}>{person.initials}</span>
                  </div>
                  <div>
                    <div className="font-display" style={{ fontSize: "clamp(15px,1.6vw,18px)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.2, marginBottom: 4 }}>
                      {person.name}
                    </div>
                    <div className="caption" style={{ color: person.color, marginBottom: 3 }}>{person.role}</div>
                    <div className="caption" style={{ color: "var(--steel-light)", fontSize: 9 }}>{person.specialty}</div>
                  </div>
                </div>

                <p className="body-md" style={{ color: "var(--steel)", lineHeight: 1.75 }}>{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section style={{ paddingBlock: "clamp(64px,8vw,100px)", background: "var(--ink)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: "clamp(40px,5vw,64px)" }}>
            <div className="section-label" style={{ marginBottom: 16 }}>
              <span style={{ color: "rgba(255,255,255,.35)" }}>External Expertise</span>
            </div>
            <h2 className="h2 font-display" style={{ color: "#fff" }}>
              Advisory <em style={{ color: "var(--crimson)" }}>Board</em>
            </h2>
            <p className="body-lg" style={{ color: "rgba(255,255,255,.42)", maxWidth: 540, marginTop: 12 }}>
              World-class advisors from transfusion medicine, development finance, government policy, and global health — providing strategic guidance to shape Nigeria&apos;s blood infrastructure.
            </p>
          </div>

          <div style={{ display: "grid", gap: 12 }} className="advisor-grid">
            {ADVISORS.map((a, i) => (
              <div key={a.name} style={{
                display: "flex", alignItems: "center", gap: 20,
                padding: "20px 24px",
                background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)",
                transition: "background .3s, border-color .3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(138,3,3,.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(138,3,3,.22)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.03)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.07)"; }}
              >
                <div className="font-mono" style={{ fontSize: 10, color: "var(--crimson)", opacity: 0.6, flexShrink: 0, width: 24 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="font-display" style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{a.name}</div>
                  <div className="caption" style={{ color: "rgba(255,255,255,.35)" }}>{a.field} · {a.org}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "clamp(40px,5vw,64px)", padding: "32px", background: "rgba(138,3,3,.06)", border: "1px solid rgba(138,3,3,.2)" }}>
            <p className="body-md" style={{ color: "rgba(255,255,255,.5)", textAlign: "center" }}>
              Advisory board positions are expanding as CrimsonWings grows. If you are a senior professional in transfusion medicine, healthcare technology, or development finance and wish to contribute,{" "}
              <Link href="/#contact" style={{ color: "var(--crimson)", textDecoration: "underline" }}>contact us</Link>.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media(min-width:700px){ .leadership-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(min-width:1000px){ .leadership-grid{ grid-template-columns:1fr 1fr 1fr !important; } }
        @media(min-width:700px){ .advisor-grid{ grid-template-columns:1fr 1fr !important; } }
      `}</style>
    </>
  );
}
