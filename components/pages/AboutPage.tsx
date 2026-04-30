"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const LEADERSHIP = [
  {
    name:     "Dr. Michael Naiyeju",
    role:     "CEO",
    fullRole: "Chief Executive Officer",
    bio:      "Seasoned Physician-Executive with 15+ years' experience in clinical services and healthcare leadership. Expert in international healthcare management, operations, and strategic business development.",
    photo:    "/team-micheal.jpg",
    color:    "#CC0000",
  },
  {
    name:     "Mr. Clement C. Iwuchukwu",
    role:     "CTO",
    fullRole: "Chief Technology Officer",
    bio:      "Innovative Executive with 17+ years' experience in software engineering, cybersecurity, and smart logistics. Expert in cloud systems, automation, and drone-enabled cold-chain technology.",
    photo:    "/team-clement.jpg",
    color:    "#CC0000",
  },
  {
    name:     "Prof. Alani S. Akanmu",
    role:     "CMO",
    fullRole: "Chief Medical Officer",
    bio:      "Professor of Hematology with 30+ years' clinical, academic, and global research leadership in transfusion medicine, HIV care, and hematologic disorders — leading programs, policy, and over 200 peer-reviewed publications.",
    photo:    "/team-cmo-new.jpg",
    color:    "#CC0000",
  },
  {
    name:     "Eze Nwankwo",
    role:     "CGCO",
    fullRole: "Chief Growth & Commercial Officer",
    bio:      "Seasoned Pharmacist-Executive with 18+ years of experience in healthcare commercial leadership, business development, and strategic growth. Expert in building operations from ground up, forging global health partnerships, and driving revenue scale across Africa.",
    photo:    "/team-cgco.jpg",
    color:    "#CC0000",
  },
]

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
            <em style={{ color: "var(--crimson)" }}>Executive Team</em>
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
                {/* Full-bleed photo */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "85%",
                  background: "#111",
                  overflow: "hidden",
                  borderRadius: "12px 12px 0 0",
                }}>
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 10%",
                      transition: "transform .5s var(--ease-expo)",
                    }}
                    className="team-photo"
                    sizes="(max-width:700px) 100vw, (max-width:1000px) 50vw, 25vw"
                  />
                  {/* Role badge — overlaid bottom-left on photo */}
                  <div style={{
                    position: "absolute", bottom: 16, left: 16, zIndex: 3,
                    background: "var(--crimson)",
                    color: "#fff",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: ".14em",
                    padding: "5px 14px",
                    textTransform: "uppercase",
                  }}>
                    {person.role}
                  </div>
                </div>

                {/* Info below photo */}
                <div style={{ padding: "20px 24px 28px", textAlign: "center" }}>
                  <h3 className="font-display" style={{
                    fontSize: "clamp(17px,1.8vw,20px)",
                    fontWeight: 700,
                    color: "var(--ink)",
                    lineHeight: 1.25,
                    marginBottom: 12,
                  }}>
                    {person.name}
                  </h3>
                  <p className="body-md" style={{ color: "var(--steel)", lineHeight: 1.75, textAlign: "left" }}>
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(min-width:700px) { .team-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(min-width:900px){ .team-grid{ grid-template-columns:repeat(4,1fr) !important; } }
        .team-photo:hover { transform: scale(1.04) !important; }
      `}</style>
    </>
  );
}
