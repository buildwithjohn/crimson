"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About",       href: "#about"      },
  { label: "The Problem", href: "#problem"    },
  { label: "Solution",    href: "#solution"   },
  { label: "Technology",  href: "#technology" },
  { label: "How It Works",href: "#how-it-works"},
  { label: "Impact",      href: "#impact"     },
  { label: "Contact",     href: "#contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background:    scrolled ? "rgba(10,10,10,0.97)" : "transparent",
        backdropFilter:scrolled ? "blur(18px)"          : "none",
        borderBottom:  scrolled ? "1px solid rgba(138,3,3,0.18)" : "none",
        padding:       scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div className="container" style={{ display:"flex", alignItems:"center", gap:0 }}>

        {/* ── Logo ────────────────────────────────────────── */}
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:12, textDecoration:"none", flexShrink:0 }}>
          <div style={{
            width: scrolled ? 44 : 52, height: scrolled ? 44 : 52,
            borderRadius:"50%", overflow:"hidden", background:"#000",
            position:"relative", flexShrink:0, transition:"width .4s,height .4s",
          }}>
            <Image src="/logo-crimson.png" alt="CrimsonWings" fill style={{ objectFit:"contain" }} priority />
          </div>
          <div style={{ lineHeight:1.25 }}>
            <div style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:scrolled?15:17, color:"#fff", transition:"font-size .4s" }}>
              Crimson<span style={{ color:"var(--crimson)" }}>Wings</span>
            </div>
            <div style={{ fontFamily:"var(--font-mono)", fontSize:8, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.32)", marginTop:2 }}>
              Plasma Biologics Ltd
            </div>
          </div>
        </Link>

        {/* ── Desktop nav — centred ────────────────────────── */}
        <nav style={{ display:"none", flex:1, justifyContent:"center", gap:32, listStyle:"none" }} className="lg-flex">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              style={{ fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.52)", transition:"color .2s", textDecoration:"none" }}
              onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,.52)")}
            >{l.label}</a>
          ))}
        </nav>

        {/* ── CTA buttons ─────────────────────────────────── */}
        <div style={{ display:"none", alignItems:"center", gap:10, marginLeft:"auto", flexShrink:0 }} className="lg-flex">
          <a href="#contact" className="btn-primary" style={{ padding:"10px 22px", fontSize:11 }}>
            <span>Partner With Us</span>
          </a>
          <Link href="/dashboard" className="btn-ghost" style={{ padding:"9px 20px", fontSize:11 }}>
            <span>Dashboard</span>
          </Link>
        </div>

        {/* ── Mobile hamburger ────────────────────────────── */}
        <button
          onClick={() => setMobileOpen(o=>!o)}
          className="lg-hidden"
          style={{ marginLeft:"auto", background:"none", border:"none", color:"#fff", cursor:"pointer", padding:6 }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* ── Mobile dropdown ─────────────────────────────── */}
      {mobileOpen && (
        <div style={{
          background:"rgba(8,8,8,0.98)", backdropFilter:"blur(20px)",
          borderTop:"1px solid rgba(138,3,3,.2)",
          padding:"16px 0 24px",
        }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display:"block", padding:"12px 24px",
                fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".16em", textTransform:"uppercase",
                color:"rgba(255,255,255,.55)", borderBottom:"1px solid rgba(255,255,255,.04)",
                textDecoration:"none", transition:"color .2s",
              }}
              onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,.55)")}
            >{l.label}</a>
          ))}
          <div style={{ display:"flex", gap:10, padding:"16px 24px 0" }}>
            <a href="#contact" className="btn-primary" style={{ flex:1, justifyContent:"center", padding:"12px", fontSize:11 }} onClick={()=>setMobileOpen(false)}>
              <span>Partner With Us</span>
            </a>
            <Link href="/dashboard" className="btn-ghost" style={{ padding:"11px 18px", fontSize:11 }} onClick={()=>setMobileOpen(false)}>
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media(min-width:1024px){
          .lg-flex  { display:flex !important; }
          .lg-hidden{ display:none !important; }
        }
      `}</style>
    </header>
  );
}
