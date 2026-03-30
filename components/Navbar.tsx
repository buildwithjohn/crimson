"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "The Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Technology", href: "#technology" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(13,13,13,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(138,3,3,0.2)" : "none",
        padding: scrolled ? "10px 0" : "18px 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-0 group">
          <div
            className="relative flex-shrink-0"
            style={{
              width: scrolled ? 52 : 64,
              height: scrolled ? 52 : 64,
              transition: "width 0.4s, height 0.4s",
              borderRadius: "50%",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <Image
              src="/logo-crimson.png"
              alt="CrimsonWings Plasma Biologics Ltd"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
              priority
            />
          </div>
          <div className="ml-2">
            <div
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: scrolled ? 15 : 17, transition: "font-size 0.4s", letterSpacing: "0.02em" }}
            >
              Crimson<span style={{ color: "var(--crimson)" }}>Wings</span>
            </div>
            <div
              className="font-mono text-white/40 leading-tight"
              style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase" }}
            >
              Plasma Biologics Ltd
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/55 hover:text-white transition-colors duration-200 font-mono"
              style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="btn-crimson" style={{ padding: "10px 22px", fontSize: 11 }}>
            <span>Partner With Us</span>
          </a>
          <a href="#" className="btn-outline" style={{ padding: "9px 21px", fontSize: 11 }}>
            <span>Dashboard</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: "rgba(10,10,10,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(138,3,3,0.2)",
            padding: "20px 24px 28px",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/60 hover:text-white border-b border-white/5 transition-colors"
              style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 mt-6">
            <a href="#contact" className="btn-crimson flex-1 justify-center" style={{ fontSize: 11, padding: "12px" }} onClick={() => setMobileOpen(false)}>
              <span>Partner With Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
