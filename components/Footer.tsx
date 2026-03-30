"use client";
import Image from "next/image";

const LINKS = {
  Platform: ["About", "Solution", "Technology", "How It Works", "Impact"],
  Partnerships: ["Government", "Hospitals", "Investors", "NGOs", "DFIs"],
  Company: ["Contact Us", "Investor Relations", "Careers", "News", "FAQ"],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#080808" }}>
      <div className="absolute inset-0 grid-lines-dark opacity-50" />
      <div className="noise-overlay" />

      {/* CTA band */}
      <div className="relative" style={{ background: "var(--crimson)", padding: "48px 24px" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-white font-bold" style={{ fontSize: "clamp(22px, 3vw, 34px)", lineHeight: 1.2 }}>
              Delivering Blood. Saving Lives.
            </h3>
            <p className="text-white/60 mt-1 font-mono" style={{ fontSize: 11, letterSpacing: "0.16em" }}>
              ON TIME. EVERY TIME.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white font-semibold"
            style={{
              color: "var(--crimson)",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "16px 36px",
              transition: "opacity 0.2s",
              textDecoration: "none",
            }}
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Brand block */}
          <div className="lg:col-span-2">
            {/* Logo — on black background, shows perfectly */}
            <div className="flex items-center gap-2 mb-6">
              <div
                className="relative flex-shrink-0"
                style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", background: "#000" }}
              >
                <Image
                  src="/logo-crimson.png"
                  alt="CrimsonWings Plasma Biologics Ltd"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <div className="font-display font-bold text-white" style={{ fontSize: 20, lineHeight: 1.2 }}>
                  Crimson<span style={{ color: "var(--crimson)" }}>Wings</span>
                </div>
                <div className="font-mono text-white/35" style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  Plasma Biologics Ltd
                </div>
              </div>
            </div>

            <p className="text-white/35 leading-relaxed mb-6" style={{ fontSize: 13, maxWidth: 300 }}>
              Nigeria&apos;s national blood infrastructure platform. NAT-screened blood, ultra-scale cold storage, and drone-enabled delivery — end to end.
            </p>
            <div className="space-y-2">
              {[
                { label: "GENERAL", val: "infodeskcwpbl@crimsonwingsbiologics.com" },
                { label: "INVESTOR", val: "investorrelations@crimsonwingsbiologics.com" },
                { label: "PHONE", val: "+234 708 681 7669" },
                { label: "BASE", val: "Lagos, Nigeria" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <span className="font-mono text-white/20 flex-shrink-0 mt-0.5" style={{ fontSize: 8, letterSpacing: "0.12em", minWidth: 52 }}>{c.label}</span>
                  <span className="text-white/40 break-all" style={{ fontSize: 12 }}>{c.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <div className="font-mono mb-5" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>
                {group}
              </div>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/38 hover:text-white transition-colors duration-200" style={{ fontSize: 13 }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="font-mono text-white/18" style={{ fontSize: 9, letterSpacing: "0.12em" }}>
            © 2024 CRIMSONWINGS PLASMA BIOLOGICS LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Compliance"].map((l) => (
              <a key={l} href="#" className="font-mono text-white/18 hover:text-white/50 transition-colors" style={{ fontSize: 9, letterSpacing: "0.1em" }}>
                {l}
              </a>
            ))}
          </div>
          <div className="font-mono text-white/15" style={{ fontSize: 9, letterSpacing: "0.12em" }}>
            BUILT BY JAA STUDIO
          </div>
        </div>
      </div>
    </footer>
  );
}
