"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

const NEWS = [
  {
    category: "Press Release",
    date: "January 2026",
    title: "CrimsonWings Blood Logistics Ltd Formally Incorporated in Lagos State",
    excerpt: "CrimsonWings Blood Logistics Ltd has been formally incorporated as a healthcare logistics company with a mandate to build Nigeria's first integrated, digitized national blood supply platform.",
    featured: true,
    color: "#8A0303",
  },
  {
    category: "Operations",
    date: "February 2026",
    title: "MoU Signed with Lagos State Blood Transfusion Service",
    excerpt: "A Memorandum of Understanding has been signed with the Lagos State Blood Transfusion Service, establishing the public-private partnership framework for hub operations across Lagos.",
    featured: false,
    color: "#2F80ED",
  },
  {
    category: "Technology",
    date: "February 2026",
    title: "CrimsonWings OS Platform Enters Beta Testing Phase",
    excerpt: "The proprietary CrimsonWings Operating System — connecting donor management, NAT screening, cold storage inventory, and delivery logistics — has entered structured beta testing with pilot hospital partners.",
    featured: false,
    color: "#C9A84C",
  },
  {
    category: "Infrastructure",
    date: "March 2026",
    title: "First Hub Facility Construction Commences in Victoria Island",
    excerpt: "Ground has been broken on the first of five planned CrimsonWings hub facilities. The Victoria Island hub will house walk-in cold rooms, ULT freezers, and the primary drone dispatch centre for Lagos Island.",
    featured: false,
    color: "#22c55e",
  },
  {
    category: "Partnerships",
    date: "March 2026",
    title: "Strategic Partnership Discussions Underway with Three Lagos Teaching Hospitals",
    excerpt: "CrimsonWings has entered formal partnership discussions with LASUTH, LUTH, and Lagos Island General Hospital — targeting integration of real-time blood request management via the OS platform.",
    featured: false,
    color: "#9333EA",
  },
  {
    category: "Investment",
    date: "April 2026",
    title: "CrimsonWings Opens Investor Relations Engagement for Series A",
    excerpt: "CrimsonWings has formally opened structured engagement with institutional investors and development finance institutions ahead of a planned Series A funding round to accelerate hub buildout.",
    featured: false,
    color: "#0EA5E9",
  },
];

export default function NewsPage() {
  const featured = NEWS[0];
  const rest = NEWS.slice(1);

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
            <span style={{ color: "rgba(255,255,255,.35)" }}>Latest From CrimsonWings</span>
          </div>
          <h1 className="h1 font-display" style={{ color: "#fff", marginBottom: 20 }}>
            News &{" "}
            <em style={{ color: "var(--crimson)" }}>Updates</em>
          </h1>
          <p className="body-lg" style={{ color: "rgba(255,255,255,.45)", maxWidth: 560 }}>
            Press releases, milestone announcements, and operational updates from CrimsonWings Blood Logistics Ltd.
          </p>
        </div>
      </section>

      {/* Featured article */}
      <section style={{ paddingBlock: "clamp(48px,6vw,80px)", background: "var(--off-white)" }}>
        <div className="container">
          <div style={{ background: "var(--ink)", position: "relative", overflow: "hidden", padding: "clamp(32px,4vw,56px)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--crimson)" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span className="caption" style={{ fontSize: 9, padding: "3px 10px", background: "var(--crimson)", color: "#fff" }}>Featured</span>
                <span className="caption" style={{ color: "rgba(255,255,255,.35)" }}>{featured.category}</span>
                <div style={{ width: 1, height: 12, background: "rgba(255,255,255,.15)" }} />
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Calendar size={11} style={{ color: "rgba(255,255,255,.3)" }} />
                  <span className="caption" style={{ color: "rgba(255,255,255,.3)" }}>{featured.date}</span>
                </span>
              </div>
              <h2 className="font-display" style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
                {featured.title}
              </h2>
              <p className="body-lg" style={{ color: "rgba(255,255,255,.45)", maxWidth: 680, marginBottom: 24 }}>
                {featured.excerpt}
              </p>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--crimson)", color: "#fff", fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 500, letterSpacing: ".1em", textTransform: "uppercase", padding: "12px 24px", border: "none", cursor: "pointer" }}>
                Read Full Release <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News grid */}
      <section style={{ paddingBlock: "clamp(48px,6vw,80px)", background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: 16 }} className="news-grid">
            {rest.map((article) => (
              <div key={article.title} style={{
                background: "var(--off-white)", border: "1px solid var(--smoke)",
                borderTop: `3px solid ${article.color}`,
                padding: "clamp(24px,3vw,32px)",
                transition: "transform .3s var(--ease-expo), box-shadow .3s",
                cursor: "pointer",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,.07)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span className="caption" style={{ fontSize: 8, padding: "2px 8px", background: `${article.color}12`, color: article.color, border: `1px solid ${article.color}25` }}>
                    {article.category}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <Calendar size={10} style={{ color: "var(--steel-light)" }} />
                    <span className="caption" style={{ color: "var(--steel-light)", fontSize: 9 }}>{article.date}</span>
                  </div>
                </div>
                <h3 className="font-display" style={{ fontSize: "clamp(15px,1.6vw,18px)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.3, marginBottom: 10 }}>
                  {article.title}
                </h3>
                <p className="body-md" style={{ color: "var(--steel)", lineHeight: 1.7, marginBottom: 16 }}>
                  {article.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, color: article.color, fontSize: 12, fontWeight: 500 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase" }}>Read More</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter signup */}
          <div style={{
            marginTop: "clamp(48px,6vw,80px)", padding: "clamp(32px,4vw,52px)",
            background: "var(--ink)", textAlign: "center", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--crimson)" }} />
            <h3 className="font-display" style={{ fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 700, color: "#fff", marginBottom: 10 }}>
              Stay Updated
            </h3>
            <p className="body-md" style={{ color: "rgba(255,255,255,.42)", marginBottom: 24 }}>
              Follow CrimsonWings for news, milestones, and updates as we build Nigeria&apos;s national blood infrastructure.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--crimson)", color: "#fff",
                fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 12,
                letterSpacing: ".1em", textTransform: "uppercase", padding: "13px 28px",
                textDecoration: "none",
              }}>
                Contact Us <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(min-width:700px){ .news-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(min-width:1000px){ .news-grid{ grid-template-columns:1fr 1fr 1fr !important; } }
      `}</style>
    </>
  );
}
