"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

/* Primary nav — shown on desktop, visible in hamburger on mobile */
const PRIMARY_LINKS = [
  { label:"About",         href:"#about"       },
  { label:"Solution",      href:"#solution"    },
  { label:"Technology",    href:"#technology"  },
  { label:"How It Works",  href:"#how-it-works"},
  { label:"What We Offer", href:"#services"    },
  { label:"Impact",        href:"#impact"      },
  { label:"Contact",       href:"#contact"     },
];

/* "More" dropdown — items that don't fit cleanly in the bar */
const MORE_LINKS = [
  { label:"The Problem",     href:"#problem"  },
  { label:"Leadership & Team", href:"/about"  },
  { label:"News",            href:"/news"     },
  { label:"Compliance",      href:"/compliance"},
  { label:"Dashboard",       href:"/dashboard"},
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [moreOpen,    setMoreOpen]    = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive:true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  /* Close more dropdown on outside click */
  useEffect(() => {
    if (!moreOpen) return;
    const fn = () => setMoreOpen(false);
    document.addEventListener("click", fn);
    return () => document.removeEventListener("click", fn);
  }, [moreOpen]);

  return (
    <>
      <header style={{
        position:"fixed", top:0, left:0, right:0, zIndex:50,
        background:"rgba(10,10,10,0.97)",
        backdropFilter:"blur(20px)",
        WebkitBackdropFilter:"blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(204,0,0,.25)"
          : "1px solid rgba(255,255,255,.06)",
        transition:"border-color .4s, padding .3s",
        padding:`${scrolled ? "8px" : "10px"} 0`,
      }}>
        <div style={{
          maxWidth:1280, margin:"0 auto",
          padding:"0 clamp(16px,3vw,40px)",
          display:"flex", alignItems:"center", gap:0,
        }}>

          {/* ── Logo ── */}
          <Link href="/" style={{
            display:"flex", alignItems:"center", gap:10,
            textDecoration:"none", flexShrink:0,
            marginRight:24,
          }}>
            <div style={{
              width: scrolled ? 40 : 48,
              height: scrolled ? 40 : 48,
              borderRadius:"50%", overflow:"hidden",
              background:"#fff", position:"relative", flexShrink:0,
              transition:"width .3s, height .3s",
              border:"2px solid rgba(204,0,0,.3)",
            }}>
              <Image src="/logo-new.jpg" alt="CrimsonWings" fill style={{ objectFit:"contain", objectPosition:"center" }} priority/>
            </div>
            <div style={{ lineHeight:1.25, flexShrink:0 }}>
              <div style={{
                fontFamily:"var(--font-display)", fontWeight:800,
                fontSize: scrolled ? 14 : 16,
                color:"#fff", transition:"font-size .3s", whiteSpace:"nowrap",
              }}>
                Crimson<span style={{ color:"var(--crimson)" }}>Wings</span>
              </div>
              <div style={{
                fontFamily:"var(--font-mono)", fontSize:7,
                letterSpacing:".12em", textTransform:"uppercase",
                color:"rgba(255,255,255,.32)", whiteSpace:"nowrap", marginTop:2,
              }}>
                Blood Logistics Ltd
              </div>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav style={{
            flex:1, display:"none", alignItems:"center",
            justifyContent:"center",
            gap:"clamp(10px,1.4vw,22px)",
            flexWrap:"nowrap", minWidth:0,
          }} className="desktop-nav">
            {PRIMARY_LINKS.map(l => (
              <a key={l.href} href={l.href} style={{
                fontFamily:"var(--font-mono)", fontSize:"clamp(8px,.75vw,10px)",
                letterSpacing:".12em", textTransform:"uppercase",
                color:"rgba(255,255,255,.52)", textDecoration:"none",
                transition:"color .2s", whiteSpace:"nowrap", flexShrink:0,
              }}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color="#fff"}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.52)"}
              >{l.label}</a>
            ))}

            {/* More dropdown */}
            <div style={{ position:"relative", flexShrink:0 }}
              onClick={e => { e.stopPropagation(); setMoreOpen(o => !o); }}
            >
              <button style={{
                display:"flex", alignItems:"center", gap:4,
                fontFamily:"var(--font-mono)", fontSize:"clamp(8px,.75vw,10px)",
                letterSpacing:".12em", textTransform:"uppercase",
                color:"rgba(255,255,255,.52)", background:"none", border:"none",
                cursor:"pointer", whiteSpace:"nowrap", padding:0,
                transition:"color .2s",
              }}
                onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color="#fff"}
                onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.52)"}
              >
                More <ChevronDown size={10} style={{ transition:"transform .2s", transform: moreOpen ? "rotate(180deg)" : "none" }}/>
              </button>

              {moreOpen && (
                <div style={{
                  position:"absolute", top:"calc(100% + 14px)", right:0,
                  background:"rgba(10,10,10,.98)",
                  border:"1px solid rgba(255,255,255,.1)",
                  backdropFilter:"blur(20px)",
                  minWidth:200, zIndex:100,
                  padding:"8px 0",
                }}>
                  {MORE_LINKS.map(l => (
                    l.href.startsWith("/")
                      ? <Link key={l.href} href={l.href} style={{ display:"block", padding:"10px 20px", fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.52)", textDecoration:"none", transition:"background .15s, color .15s" }}
                          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.05)";(e.currentTarget as HTMLElement).style.color="#fff";}}
                          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="transparent";(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.52)";}}
                        >{l.label}</Link>
                      : <a key={l.href} href={l.href} style={{ display:"block", padding:"10px 20px", fontFamily:"var(--font-mono)", fontSize:10, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(255,255,255,.52)", textDecoration:"none", transition:"background .15s, color .15s" }}
                          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.05)";(e.currentTarget as HTMLElement).style.color="#fff";}}
                          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="transparent";(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,.52)";}}
                        >{l.label}</a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* ── Desktop CTAs ── */}
          <div style={{
            display:"none", alignItems:"center", gap:8,
            marginLeft:20, flexShrink:0,
          }} className="desktop-cta">
            <a href="#contact" style={{
              display:"inline-flex", alignItems:"center",
              background:"var(--crimson)", color:"#fff",
              fontFamily:"var(--font-body)", fontWeight:600, fontSize:11,
              letterSpacing:".08em", textTransform:"uppercase",
              padding:"9px 18px", textDecoration:"none", whiteSpace:"nowrap",
              transition:"opacity .2s, transform .2s",
              boxShadow:"0 2px 16px rgba(204,0,0,.3)",
            }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.opacity=".85";(e.currentTarget as HTMLElement).style.transform="translateY(-1px)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.opacity="1";(e.currentTarget as HTMLElement).style.transform="none";}}
            >Partner With Us</a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            style={{
              marginLeft:"auto", background:"none", border:"none",
              color:"#fff", cursor:"pointer", padding:8,
              flexShrink:0, display:"none",
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </header>

      {/* ── Mobile dropdown ── */}
      {mobileOpen && (
        <div style={{
          position:"fixed",
          top: scrolled ? 56 : 68,
          left:0, right:0, zIndex:49,
          background:"rgba(8,8,8,0.98)",
          backdropFilter:"blur(20px)",
          borderBottom:"1px solid rgba(204,0,0,.2)",
          paddingBottom:24,
          maxHeight:"calc(100vh - 68px)",
          overflowY:"auto",
        }}>
          {[...PRIMARY_LINKS, ...MORE_LINKS].map(l => (
            l.href.startsWith("/")
              ? <Link key={l.href} href={l.href} onClick={()=>setMobileOpen(false)} style={{ display:"block", padding:"14px 20px", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".16em", textTransform:"uppercase", color:"rgba(255,255,255,.55)", borderBottom:"1px solid rgba(255,255,255,.05)", textDecoration:"none" }}>{l.label}</Link>
              : <a key={l.href} href={l.href} onClick={()=>setMobileOpen(false)} style={{ display:"block", padding:"14px 20px", fontFamily:"var(--font-mono)", fontSize:11, letterSpacing:".16em", textTransform:"uppercase", color:"rgba(255,255,255,.55)", borderBottom:"1px solid rgba(255,255,255,.05)", textDecoration:"none" }}>{l.label}</a>
          ))}
          <div style={{ padding:"16px 20px 0" }}>
            <a href="#contact" onClick={()=>setMobileOpen(false)} style={{ display:"flex", alignItems:"center", justifyContent:"center", background:"var(--crimson)", color:"#fff", fontFamily:"var(--font-body)", fontWeight:600, fontSize:12, letterSpacing:".1em", textTransform:"uppercase", padding:"14px", textDecoration:"none" }}>
              Partner With Us
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media(min-width:1024px){
          .desktop-nav  { display:flex  !important; }
          .desktop-cta  { display:flex  !important; }
          .mobile-toggle{ display:none  !important; }
        }
        @media(max-width:1023px){
          .desktop-nav  { display:none  !important; }
          .desktop-cta  { display:none  !important; }
          .mobile-toggle{ display:block !important; }
        }
      `}</style>
    </>
  );
}
