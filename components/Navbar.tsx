"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About",        href: "#about"       },
  { label: "The Problem",  href: "#problem"     },
  { label: "Solution",     href: "#solution"    },
  { label: "Technology",   href: "#technology"  },
  { label: "How It Works", href: "#how-it-works"},
  { label: "Impact",       href: "#impact"      },
  { label: "Contact",      href: "#contact"     },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          right:         0,
          zIndex:        50,
          background:    "rgba(10,10,10,0.97)",
          backdropFilter:"blur(20px)",
          WebkitBackdropFilter:"blur(20px)",
          borderBottom:  scrolled
            ? "1px solid rgba(138,3,3,0.25)"
            : "1px solid rgba(255,255,255,0.05)",
          transition:    "border-color 0.4s, padding 0.4s",
          padding:       scrolled ? "10px 0" : "16px 0",
        }}
      >
        {/* ── Single row — never wraps ─────────────────────── */}
        <div style={{
          maxWidth:       "1280px",
          margin:         "0 auto",
          padding:        "0 clamp(16px,3vw,48px)",
          display:        "flex",
          alignItems:     "center",
          gap:            0,
          /* critical: prevent any wrapping */
          flexWrap:       "nowrap",
          minWidth:       0,
        }}>

          {/* ── LOGO — fixed width, never shrinks ────────── */}
          <Link
            href="/"
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            12,
              flexShrink:     0,          /* never compress */
              textDecoration: "none",
              marginRight:    32,         /* gap between logo and nav */
            }}
          >
            <div style={{
              width:          scrolled ? 40 : 48,
              height:         scrolled ? 40 : 48,
              borderRadius:   "50%",
              overflow:       "hidden",
              background:     "#000",
              position:       "relative",
              flexShrink:     0,
              transition:     "width .4s, height .4s",
            }}>
              <Image
                src="/logo-crimson.png"
                alt="CrimsonWings"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div style={{ lineHeight: 1.25, flexShrink: 0 }}>
              <div style={{
                fontFamily:   "var(--font-display)",
                fontWeight:   700,
                fontSize:     scrolled ? 15 : 17,
                color:        "#fff",
                transition:   "font-size .4s",
                whiteSpace:   "nowrap",
              }}>
                Crimson<span style={{ color: "var(--crimson)" }}>Wings</span>
              </div>
              <div style={{
                fontFamily:   "var(--font-mono)",
                fontSize:     8,
                letterSpacing:".13em",
                textTransform:"uppercase",
                color:        "rgba(255,255,255,.3)",
                whiteSpace:   "nowrap",
                marginTop:    2,
              }}>
                Plasma Biologics Ltd
              </div>
            </div>
          </Link>

          {/* ── DESKTOP NAV — centred, no wrapping ───────── */}
          <nav
            className="desktop-nav"
            style={{
              display:        "none",   /* shown via media query below */
              flex:           1,
              justifyContent: "center",
              alignItems:     "center",
              gap:            "clamp(18px,2.2vw,36px)",
              flexWrap:       "nowrap",   /* CRITICAL — never wrap */
              minWidth:       0,
            }}
          >
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily:   "var(--font-mono)",
                  fontSize:     10,
                  letterSpacing:".13em",
                  textTransform:"uppercase",
                  color:        "rgba(255,255,255,.5)",
                  textDecoration:"none",
                  transition:   "color .2s",
                  whiteSpace:   "nowrap",   /* each link stays on one line */
                  flexShrink:   0,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.5)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* ── CTA BUTTONS — fixed, never shrink ────────── */}
          <div
            className="desktop-cta"
            style={{
              display:        "none",   /* shown via media query */
              alignItems:     "center",
              gap:            10,
              marginLeft:     "clamp(16px,2vw,32px)",
              flexShrink:     0,
            }}
          >
            <a
              href="#contact"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                background:     "var(--crimson)",
                color:          "#fff",
                fontFamily:     "var(--font-body)",
                fontWeight:     500,
                fontSize:       11,
                letterSpacing:  ".1em",
                textTransform:  "uppercase",
                padding:        "10px 20px",
                textDecoration: "none",
                whiteSpace:     "nowrap",
                transition:     "opacity .2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              Partner With Us
            </a>
            <Link
              href="/dashboard"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                background:     "transparent",
                color:          "#fff",
                fontFamily:     "var(--font-body)",
                fontWeight:     500,
                fontSize:       11,
                letterSpacing:  ".1em",
                textTransform:  "uppercase",
                padding:        "9px 19px",
                border:         "1px solid rgba(255,255,255,.25)",
                textDecoration: "none",
                whiteSpace:     "nowrap",
                transition:     "border-color .2s, background .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(255,255,255,.6)"; e.currentTarget.style.background="rgba(255,255,255,.07)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,.25)"; e.currentTarget.style.background="transparent"; }}
            >
              Dashboard
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER ─────────────────────────── */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(o => !o)}
            style={{
              display:    "none",   /* shown via media query */
              marginLeft: "auto",
              background: "none",
              border:     "none",
              color:      "#fff",
              cursor:     "pointer",
              padding:    6,
              flexShrink: 0,
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── MOBILE DROPDOWN ──────────────────────────────── */}
      {mobileOpen && (
        <div style={{
          position:       "fixed",
          top:            scrolled ? 61 : 81,
          left:           0,
          right:          0,
          zIndex:         49,
          background:     "rgba(8,8,8,0.98)",
          backdropFilter: "blur(20px)",
          borderBottom:   "1px solid rgba(138,3,3,.2)",
          paddingBottom:  24,
        }}>
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display:       "block",
                padding:       "13px 24px",
                fontFamily:    "var(--font-mono)",
                fontSize:      11,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color:         "rgba(255,255,255,.55)",
                borderBottom:  "1px solid rgba(255,255,255,.04)",
                textDecoration:"none",
                transition:    "color .2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.55)")}
            >
              {l.label}
            </a>
          ))}
          <div style={{ display:"flex", gap:10, padding:"16px 24px 0" }}>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{ flex:1, justifyContent:"center", display:"flex", alignItems:"center", background:"var(--crimson)", color:"#fff", fontFamily:"var(--font-body)", fontWeight:500, fontSize:11, letterSpacing:".1em", textTransform:"uppercase", padding:"12px", textDecoration:"none" }}
            >
              Partner With Us
            </a>
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              style={{ display:"flex", alignItems:"center", background:"transparent", color:"#fff", fontFamily:"var(--font-body)", fontWeight:500, fontSize:11, letterSpacing:".1em", textTransform:"uppercase", padding:"11px 18px", border:"1px solid rgba(255,255,255,.25)", textDecoration:"none" }}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}

      {/* ── RESPONSIVE RULES ─────────────────────────────── */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav   { display: flex !important; }
          .desktop-cta   { display: flex !important; }
          .mobile-toggle { display: none  !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav   { display: none  !important; }
          .desktop-cta   { display: none  !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
