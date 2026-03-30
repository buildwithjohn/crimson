"use client";
import { useEffect, useRef, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(13,13,13,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(138,3,3,0.2)" : "none",
          padding: scrolled ? "14px 0" : "22px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--crimson)", opacity: 0.15, animation: "pulseRing 2s ease-out infinite" }}
              />
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "var(--crimson)" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5C8 1.5 3 5.5 3 9.5C3 12.26 5.24 14.5 8 14.5C10.76 14.5 13 12.26 13 9.5C13 5.5 8 1.5 8 1.5Z" fill="white" fillOpacity="0.9"/>
                  <path d="M8 6C8 6 6 7.8 6 9.5C6 10.88 6.9 12 8 12C9.1 12 10 10.88 10 9.5C10 7.8 8 6 8 6Z" fill="white"/>
                </svg>
              </div>
            </div>
            <div>
              <span
                className="font-display font-bold text-white tracking-wide"
                style={{ fontSize: 18, letterSpacing: "0.03em" }}
              >
                Crimson<span style={{ color: "var(--crimson)" }}>Wings</span>
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/60 hover:text-white transition-colors duration-200 font-mono"
                style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="btn-crimson"
              style={{ padding: "10px 24px", fontSize: 12 }}
            >
              <span>Partner With Us</span>
            </a>
            <a
              href="#"
              className="btn-outline"
              style={{ padding: "9px 23px", fontSize: 12 }}
            >
              <span>Dashboard</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden"
            style={{
              background: "rgba(13,13,13,0.98)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(138,3,3,0.2)",
              padding: "24px 24px 32px",
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-white/70 hover:text-white border-b border-white/5"
                style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase" }}
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 mt-6">
              <a href="#contact" className="btn-crimson flex-1 justify-center" style={{ fontSize: 12, padding: "12px" }} onClick={() => setMobileOpen(false)}>
                <span>Partner With Us</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
