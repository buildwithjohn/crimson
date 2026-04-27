"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

const STATES = [
  "Ogun State", "Edo State", "Bayelsa State", "Akwa Ibom State",
  "Delta State", "Rivers State", "Cross River State", "Ondo State", "Lagos State",
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop:120, paddingBottom:"clamp(64px,8vw,100px)", background:"var(--dark-bg)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)", backgroundSize:"72px 72px" }}/>
        <div className="container" style={{ position:"relative", zIndex:2 }}>
          <Link href="/" style={{ display:"inline-flex", alignItems:"center", gap:8, color:"rgba(255,255,255,.4)", textDecoration:"none", marginBottom:40, fontSize:12, fontFamily:"var(--font-mono)", letterSpacing:".14em", textTransform:"uppercase" }}>
            <ArrowLeft size={13}/> Back to Home
          </Link>
          <div className="section-label" style={{ marginBottom:20 }}>
            <span style={{ color:"rgba(255,255,255,.35)" }}>Latest From CrimsonWings</span>
          </div>
          <h1 className="h1 font-display" style={{ color:"#fff", marginBottom:20 }}>
            News &{" "}<em style={{ color:"var(--crimson)" }}>Updates</em>
          </h1>
          <p className="body-lg" style={{ color:"rgba(255,255,255,.55)", maxWidth:560 }}>
            Press releases, milestone announcements, and operational updates from CrimsonWings Blood Logistics Ltd.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section style={{ paddingBlock:"clamp(64px,8vw,100px)", background:"var(--off-white)" }}>
        <div className="container">

          {/* Main Coming Soon card */}
          <div style={{
            background:"var(--dark-bg)", position:"relative", overflow:"hidden",
            padding:"clamp(48px,7vw,80px)", textAlign:"center",
            marginBottom:"clamp(40px,5vw,64px)",
          }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"var(--crimson)" }}/>
            <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize:"64px 64px" }}/>
            <div style={{ position:"relative", zIndex:2 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"10px 24px", background:"rgba(204,0,0,.15)", border:"1px solid rgba(204,0,0,.35)", marginBottom:28 }}>
                <Clock size={14} style={{ color:"var(--crimson)" }}/>
                <span className="caption" style={{ color:"var(--crimson)", fontSize:11 }}>Coming Soon</span>
              </div>
              <h2 className="h2 font-display" style={{ color:"#fff", marginBottom:16 }}>
                Something Great is Coming Out of{" "}
                <em style={{ color:"var(--crimson)" }}>Ogun State</em>
              </h2>
              <p style={{ fontSize:18, color:"rgba(255,255,255,.6)", maxWidth:560, margin:"0 auto 36px" }}>
                CrimsonWings is preparing landmark announcements across our nine partner states.
                Major news is on its way — check back soon.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:10 }}>
                {STATES.map(state => (
                  <div key={state} style={{
                    padding:"8px 18px",
                    background:"rgba(255,255,255,.05)",
                    border:"1px solid rgba(255,255,255,.12)",
                  }}>
                    <span className="caption" style={{ color:"rgba(255,255,255,.5)", fontSize:10 }}>{state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 9 state placeholder cards */}
          <div style={{ display:"grid", gap:14 }} className="news-grid">
            {STATES.map((state) => (
              <div key={state} style={{
                background:"var(--white)", border:"1px solid var(--smoke)",
                borderTop:"3px solid var(--crimson)",
                padding:"clamp(24px,3vw,36px)",
                display:"flex", alignItems:"center", justifyContent:"space-between",
                gap:20, flexWrap:"wrap",
              }}>
                <div>
                  <div className="caption" style={{ color:"var(--crimson)", marginBottom:8, fontSize:10 }}>
                    {state} · News
                  </div>
                  <h3 className="font-display" style={{ fontSize:"clamp(17px,2vw,22px)", fontWeight:700, color:"var(--ink)", marginBottom:6 }}>
                    CrimsonWings × {state}
                  </h3>
                  <p className="body-md" style={{ color:"var(--steel-light)" }}>
                    Announcement coming soon.
                  </p>
                </div>
                <div style={{
                  flexShrink:0, padding:"8px 20px",
                  background:"rgba(204,0,0,.07)", border:"1px solid rgba(204,0,0,.2)",
                }}>
                  <span className="caption" style={{ color:"var(--crimson)", fontSize:10 }}>Coming Soon</span>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div style={{ marginTop:"clamp(48px,6vw,80px)", padding:"clamp(32px,4vw,52px)", background:"var(--dark-bg)", textAlign:"center", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"var(--crimson)" }}/>
            <h3 className="font-display" style={{ fontSize:"clamp(20px,2.5vw,28px)", fontWeight:700, color:"#fff", marginBottom:10 }}>Stay Updated</h3>
            <p className="body-md" style={{ color:"rgba(255,255,255,.5)", marginBottom:24 }}>
              Follow CrimsonWings as we build Nigeria&apos;s national blood infrastructure.
            </p>
            <Link href="/#contact" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"var(--crimson)", color:"#fff", fontFamily:"var(--font-body)", fontWeight:500, fontSize:13, letterSpacing:".1em", textTransform:"uppercase", padding:"13px 28px", textDecoration:"none" }}>
              Contact Us <ArrowRight size={13}/>
            </Link>
          </div>
        </div>
      </section>

      <style>{`@media(min-width:700px){ .news-grid{ grid-template-columns:1fr 1fr !important; } }`}</style>
    </>
  );
}
