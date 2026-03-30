"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const LEADERSHIP = [
  {
    name:     "Dr. Michael Naiyeju",
    role:     "CEO",
    fullRole: "Chief Executive Officer",
    bio:      "Seasoned Physician-Executive with 15+ years' experience in clinical services and healthcare leadership. Expert in international healthcare management, operations, and strategic business growth across multiple ventures.",
    photo:    "/team-micheal.jpg",
    color:    "#8A0303",
  },
  {
    name:     "Mr. Deniyi Tobun",
    role:     "COO",
    fullRole: "Chief Operating Officer",
    bio:      "Accomplished healthcare executive with 25+ years' leadership across UK and GCC health systems. Expert in surgical operations, service management, and healthcare business optimization driving excellence and efficiency.",
    photo:    "/team-deniyi.png",
    color:    "#2F80ED",
  },
  {
    name:     "Mr. Clement C. Iwuchukwu",
    role:     "CTO",
    fullRole: "Chief Technology Officer",
    bio:      "Innovative Executive with 17+ years' experience in software engineering, cybersecurity, and smart logistics. Expert in cloud systems, automation, and drone-enabled cold-chain technology for healthcare operations.",
    photo:    "/team-clement.jpg",
    color:    "#C9A84C",
  },
  {
    name:     "Prof. Titi A. Adeyemo",
    role:     "CMO",
    fullRole: "Chief Medical Officer",
    bio:      "Distinguished Hematologist with 15+ years' clinical and research leadership in hematology and transfusion medicine. Expert in hemoglobinopathies, hemophilia, and translational research advancing sickle cell and bleeding disorder care systems.",
    photo:    "/team-titi.jpg",
    color:    "#22c55e",
  },
];

const ADVISORS = [
  { name: "Prof. Olabisi Akinmade",    field: "Transfusion Medicine",        org: "University of Lagos Teaching Hospital"  },
  { name: "Dr. Samuel Okonkwo",        field: "Healthcare Technology",       org: "MIT Media Lab Africa"                   },
  { name: "Mrs. Adaeze Obi",           field: "Development Finance",         org: "African Development Bank"               },
  { name: "Prof. Emmanuel Afolabi",    field: "Public Health & Policy",      org: "Lagos State University"                 },
  { name: "Dr. Miriam Hassan",         field: "WHO Blood Safety Standards",  org: "World Health Organisation"              },
  { name: "Mr. Babatunde Fashola Jr.", field: "Government Relations",        org: "Lagos State PPP Office"                 },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section style={{
        paddingTop: 120,
        paddingBottom: "clamp(64px,8vw,100px)",
        background: "var(--ink)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }} />
        {/* Crimson glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(138,3,3,.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Link href="/" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "rgba(255,255,255,.4)", textDecoration: "none",
            marginBottom: 48, fontSize: 12,
            fontFamily: "var(--font-mono)", letterSpacing: ".14em", textTransform: "uppercase",
          }}>
            <ArrowLeft size={13} /> Back to Home
          </Link>

          <div className="section-label" style={{ marginBottom: 20 }}>
            <span style={{ color: "rgba(255,255,255,.35)" }}>Our People</span>
          </div>

          <h1 className="h1 font-display" style={{ color: "#fff", marginBottom: 20, maxWidth: 700 }}>
            Leadership &{" "}
            <em style={{ color: "var(--crimson)" }}>Advisory Board</em>
          </h1>

          <p className="body-lg" style={{ color: "rgba(255,255,255,.45)", maxWidth: 600 }}>
            CrimsonWings is led by a multidisciplinary team of clinicians, technologists, and operations
            leaders — united by a single mission to make safe blood accessible to every Nigerian.
          </p>
        </div>
      </section>

      {/* ── Executive Team ────────────────────────────────────────── */}
      <section style={{ paddingBlock: "clamp(64px,8vw,100px)", background: "var(--off-white)", position: "relative" }}>
        <div className="container">
          <div style={{ marginBottom: "clamp(40px,5vw,64px)" }}>
            <div className="section-label" style={{ marginBottom: 16 }}>Executive Team</div>
            <h2 className="h2 font-display" style={{ color: "var(--ink)" }}>
              The People Behind{" "}
              <em style={{ color: "var(--crimson)" }}>CrimsonWings</em>
            </h2>
          </div>

          <div style={{ display: "grid", gap: 24 }} className="team-grid">
            {LEADERSHIP.map((person) => (
              <div
                key={person.name}
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--smoke)",
                  overflow: "hidden",
                  transition: "transform .35s var(--ease-expo), box-shadow .35s",
                  position: "relative",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 56px rgba(0,0,0,.1)`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "none";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Colour top bar */}
                <div style={{ height: 4, background: person.color }} />

                {/* Photo area */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "72%",
                  background: "#f0f0ee",
                  overflow: "hidden",
                }}>
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                      transition: "transform .5s var(--ease-expo)",
                    }}
                    className="team-photo"
                    sizes="(max-width:700px) 100vw, (max-width:1000px) 50vw, 25vw"
                  />
                  {/* Gradient fade bottom of photo */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: 60,
                    background: "linear-gradient(to top, var(--white), transparent)",
                    pointerEvents: "none",
                  }} />
                </div>

                {/* Info */}
                <div style={{ padding: "24px 28px 32px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <h3 className="font-display" style={{
                      fontSize: "clamp(17px,1.8vw,21px)",
                      fontWeight: 700,
                      color: "var(--ink)",
                      lineHeight: 1.2,
                    }}>
                      {person.name}
                    </h3>
                    {/* Role badge */}
                    <span className="font-mono" style={{
                      fontSize: 10, fontWeight: 600,
                      letterSpacing: ".1em",
                      padding: "4px 10px",
                      background: `${person.color}12`,
                      color: person.color,
                      border: `1px solid ${person.color}30`,
                      flexShrink: 0,
                      marginLeft: 10,
                    }}>
                      {person.role}
                    </span>
                  </div>

                  <div className="caption" style={{ color: "var(--steel-light)", marginBottom: 14, fontSize: 10 }}>
                    {person.fullRole}
                  </div>

                  <p className="body-md" style={{ color: "var(--steel)", lineHeight: 1.75 }}>
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advisory Board ────────────────────────────────────────── */}
      <section style={{
        paddingBlock: "clamp(64px,8vw,100px)",
        background: "var(--ink)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: "clamp(40px,5vw,64px)" }}>
            <div className="section-label" style={{ marginBottom: 16 }}>
              <span style={{ color: "rgba(255,255,255,.35)" }}>External Expertise</span>
            </div>
            <h2 className="h2 font-display" style={{ color: "#fff" }}>
              Advisory <em style={{ color: "var(--crimson)" }}>Board</em>
            </h2>
            <p className="body-lg" style={{ color: "rgba(255,255,255,.42)", maxWidth: 540, marginTop: 14 }}>
              World-class advisors from transfusion medicine, development finance, government policy,
              and global health — providing strategic guidance as we build Nigeria&apos;s blood infrastructure.
            </p>
          </div>

          <div style={{ display: "grid", gap: 10 }} className="advisor-grid">
            {ADVISORS.map((a, i) => (
              <div
                key={a.name}
                style={{
                  display: "flex", alignItems: "center", gap: 20,
                  padding: "20px 24px",
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(255,255,255,.07)",
                  transition: "background .3s, border-color .3s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(138,3,3,.07)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(138,3,3,.25)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.03)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.07)";
                }}
              >
                <div className="font-mono" style={{
                  fontSize: 10, color: "var(--crimson)", opacity: .55,
                  flexShrink: 0, width: 24,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ flex: 1 }}>
                  <div className="font-display" style={{
                    fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4,
                  }}>
                    {a.name}
                  </div>
                  <div className="caption" style={{ color: "rgba(255,255,255,.35)" }}>
                    {a.field} &nbsp;·&nbsp; {a.org}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA for new advisors */}
          <div style={{
            marginTop: "clamp(40px,5vw,64px)",
            padding: "clamp(28px,4vw,44px)",
            background: "rgba(138,3,3,.06)",
            border: "1px solid rgba(138,3,3,.2)",
            textAlign: "center",
          }}>
            <p className="body-md" style={{ color: "rgba(255,255,255,.45)" }}>
              Advisory board positions are expanding as CrimsonWings grows. Senior professionals
              in transfusion medicine, healthcare technology, or development finance are welcome to{" "}
              <Link href="/#contact" style={{ color: "var(--crimson)", textDecoration: "underline" }}>
                reach out
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media(min-width:700px) { .team-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(min-width:1100px){ .team-grid{ grid-template-columns:repeat(4,1fr) !important; } }
        @media(min-width:700px) { .advisor-grid{ grid-template-columns:1fr 1fr !important; } }
        .team-photo:hover { transform: scale(1.04) !important; }
      `}</style>
    </>
  );
}
