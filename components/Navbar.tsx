"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label:"About",        href:"#about"       },
  { label:"The Problem",  href:"#problem"     },
  { label:"Solution",     href:"#solution"    },
  { label:"Technology",   href:"#technology"  },
  { label:"How It Works", href:"#how-it-works"},
  { label:"Impact",       href:"#impact"      },
  { label:"Contact",      href:"#contact"     },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  /*
   * HEIGHTS (logo + padding):
   *   Mobile  (<1024px): logo 44px + py 10px = 64px total
   *   Desktop (≥1024px): logo 56px + py 12px = 80px total
   *   Scrolled any     : logo 40px + py  8px = 56px total
   *
   * Hero paddingTop = clamp(100px, 14vw, 140px)
   *   → At 375px wide: 100px  >  64px navbar  ✓  (36px gap)
   *   → At 768px wide: 107px  >  64px navbar  ✓  (43px gap)
   *   → At 1440px wide: 140px > 80px navbar   ✓  (60px gap)
   */

  const logoPx   = scrolled ? 40 : (typeof window !== "undefined" && window.innerWidth < 1024 ? 44 : 56);
  const padY     = scrolled ? "8px" : (typeof window !== "undefined" && window.innerWidth < 1024 ? "10px" : "12px");

  return (
    <>
      <header
        style={{
          position:      "fixed",
          top:           0, left:0, right:0,
          zIndex:        50,
          background:    "rgba(10,10,10,0.97)",
          backdropFilter:"blur(20px)",
          WebkitBackdropFilter:"blur(20px)",
          borderBottom:  scrolled
            ? "1px solid rgba(204,0,0,.25)"
            : "1px solid rgba(255,255,255,.06)",
          transition:    "border-color .4s, padding .4s",
          padding:       `${scrolled ? "8px" : "10px"} 0`,
        }}
      >
        <div style={{
          maxWidth:"1280px", margin:"0 auto",
          padding:"0 clamp(16px,3vw,48px)",
          display:"flex", alignItems:"center",
          flexWrap:"nowrap", minWidth:0,
        }}>

          {/* ── LOGO ─────────────────────────────────────────── */}
          <Link href="/" style={{
            display:"flex", alignItems:"center", gap:10,
            textDecoration:"none", flexShrink:0, marginRight:"clamp(16px,3vw,40px)",
          }}>
            <div style={{
              /* Fixed sizes — no JS so it's SSR-safe */
              width:  scrolled ? 40 : 52,
              height: scrolled ? 40 : 52,
              borderRadius:"50%",
              overflow:"hidden",
              background:"#fff",
              position:"relative", flexShrink:0,
              transition:"width .3s, height .3s",
              border:"2px solid rgba(204,0,0,.3)",
            }}>
              <Image
                src="/logo-new.jpg"
                alt="CrimsonWings Blood Logistics Ltd"
                fill
                style={{ objectFit:"contain", objectPosition:"center" }}
                priority
              />
            </div>

            <div style={{ lineHeight:1.25, flexShrink:0 }}>
              <div style={{
                fontFamily:"var(--font-display)", fontWeight:800,
                fontSize: scrolled ? 15 : 17,
                color:"#fff", transition:"font-size .3s", whiteSpace:"nowrap",
              }}>
                Crimson<span style={{color:"var(--crimson)"}}>Wings</span>
              </div>
              <div style={{
                fontFamily:"var(--font-mono)", fontSize:8,
                letterSpacing:".12em", textTransform:"uppercase",
                color:"rgba(255,255,255,.32)", whiteSpace:"nowrap", marginTop:2,
              }}>
                Blood Logistics Ltd
              </div>
            </div>
          </Link>

          {/* ── DESKTOP NAV ─────────────────────────────────── */}
          <nav className="desktop-nav" style={{
            display:"none", flex:1, justifyContent:"center",
            alignItems:"center", gap:"clamp(16px,2vw,32px)",
            flexWrap:"nowrap", minWidth:0,
          }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} style={{
                fontFamily:"var(--font-mono)", fontSize:10,
                letterSpacing:".13em", textTransform:"uppercase",
                color:"rgba(255,255,255,.52)", textDecoration:"none",
                transition:"color .2s", whiteSpace:"nowrap", flexShrink:0,
              }}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color="#fff"}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.52)"}
              >{l.label}</a>
            ))}
          </nav>

          {/* ── DESKTOP CTAs ─────────────────────────────────── */}
          <div className="desktop-cta" style={{
            display:"none", alignItems:"center", gap:10,
            marginLeft:"clamp(12px,2vw,28px)", flexShrink:0,
          }}>
            <a href="#contact" style={{
              display:"inline-flex", alignItems:"center",
              background:"var(--crimson)", color:"#fff",
              fontFamily:"var(--font-body)", fontWeight:600, fontSize:11,
              letterSpacing:".1em", textTransform:"uppercase",
              padding:"9px 20px", textDecoration:"none", whiteSpace:"nowrap",
              transition:"opacity .2s, transform .2s",
              boxShadow:"0 2px 16px rgba(204,0,0,.3)",
            }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.opacity=".85";(e.currentTarget as HTMLElement).style.transform="translateY(-1px)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.opacity="1";(e.currentTarget as HTMLElement).style.transform="none";}}
            >Partner With Us</a>

            <Link href="/dashboard" style={{
              display:"inline-flex", alignItems:"center",
              background:"transparent", color:"#fff",
              fontFamily:"var(--font-body)", fontWeight:500, fontSize:11,
              letterSpacing:".1em", textTransform:"uppercase",
              padding:"8px 18px", border:"1px solid rgba(255,255,255,.28)",
              textDecoration:"none", whiteSpace:"nowrap",
              transition:"all .2s",
            }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.6)";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.08)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.28)";(e.currentTarget as HTMLElement).style.background="transparent";}}
            >Dashboard</Link>
          </div>

          {/* ── MOBILE HAMBURGER ─────────────────────────────── */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(o => !o)}
            style={{
              marginLeft:"auto", background:"none", border:"none",
              color:"#fff", cursor:"pointer", padding:8,
              flexShrink:0, display:"none",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </header>

      {/* ── MOBILE DROPDOWN ─────────────────────────────────────── */}
      {mobileOpen && (
        <div style={{
          position:"fixed",
          /* sit right below the navbar */
          top: scrolled ? 56 : 72,
          left:0, right:0,
          zIndex:49,
          background:"rgba(8,8,8,0.98)",
          backdropFilter:"blur(20px)",
          borderBottom:"1px solid rgba(204,0,0,.2)",
          paddingBottom:24,
          maxHeight:"calc(100vh - 72px)",
          overflowY:"auto",
        }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display:"block", padding:"14px 20px",
                fontFamily:"var(--font-mono)", fontSize:11,
                letterSpacing:".16em", textTransform:"uppercase",
                color:"rgba(255,255,255,.55)",
                borderBottom:"1px solid rgba(255,255,255,.05)",
                textDecoration:"none",
              }}
            >{l.label}</a>
          ))}
          <div style={{display:"flex", gap:10, padding:"16px 20px 0"}}>
            <a href="#contact" onClick={()=>setMobileOpen(false)} style={{
              flex:1, display:"flex", alignItems:"center", justifyContent:"center",
              background:"var(--crimson)", color:"#fff",
              fontFamily:"var(--font-body)", fontWeight:600, fontSize:11,
              letterSpacing:".1em", textTransform:"uppercase", padding:"13px",
              textDecoration:"none",
            }}>Partner With Us</a>
            <Link href="/dashboard" onClick={()=>setMobileOpen(false)} style={{
              display:"flex", alignItems:"center", justifyContent:"center",
              background:"transparent", color:"#fff",
              fontFamily:"var(--font-body)", fontWeight:500, fontSize:11,
              letterSpacing:".1em", textTransform:"uppercase",
              padding:"12px 18px", border:"1px solid rgba(255,255,255,.25)",
              textDecoration:"none",
            }}>Dashboard</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width:1024px) {
          .desktop-nav   { display:flex   !important; }
          .desktop-cta   { display:flex   !important; }
          .mobile-toggle { display:none   !important; }
        }
        @media (max-width:1023px) {
          .desktop-nav   { display:none   !important; }
          .desktop-cta   { display:none   !important; }
          .mobile-toggle { display:block  !important; }
        }
      `}</style>
    </>
  );
}
