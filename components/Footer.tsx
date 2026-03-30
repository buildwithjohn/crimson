"use client";

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

      {/* Top CTA band */}
      <div
        className="relative"
        style={{ background: "var(--crimson)", padding: "48px 24px" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-white font-bold" style={{ fontSize: "clamp(22px, 3vw, 34px)", lineHeight: 1.2 }}>
              Delivering Blood. Saving Lives.
            </h3>
            <p className="text-white/60 mt-1 font-mono" style={{ fontSize: 12, letterSpacing: "0.12em" }}>
              ON TIME. EVERY TIME.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-white text-ink font-body font-semibold"
            style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", padding: "16px 36px", transition: "opacity 0.2s" }}
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--crimson)" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5C8 1.5 3 5.5 3 9.5C3 12.26 5.24 14.5 8 14.5C10.76 14.5 13 12.26 13 9.5C13 5.5 8 1.5 8 1.5Z" fill="white" fillOpacity="0.9"/>
                  <path d="M8 6C8 6 6 7.8 6 9.5C6 10.88 6.9 12 8 12C9.1 12 10 10.88 10 9.5C10 7.8 8 6 8 6Z" fill="white"/>
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-white" style={{ fontSize: 20 }}>
                  Crimson<span style={{ color: "var(--crimson)" }}>Wings</span>
                </span>
              </div>
            </div>
            <p className="text-white/35 leading-relaxed mb-6" style={{ fontSize: 13, maxWidth: 300 }}>
              Nigeria&apos;s national blood infrastructure platform. NAT-screened blood, ultra-scale cold storage, and drone-enabled delivery — end to end.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-white/25" style={{ fontSize: 9, letterSpacing: "0.1em" }}>EMAIL</span>
                <span className="text-white/45" style={{ fontSize: 12 }}>infodeskcwpbl@crimsonwingsbiologics.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-white/25" style={{ fontSize: 9, letterSpacing: "0.1em" }}>PHONE</span>
                <span className="text-white/45" style={{ fontSize: 12 }}>+234 708 681 7669</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-white/25" style={{ fontSize: 9, letterSpacing: "0.1em" }}>BASE</span>
                <span className="text-white/45" style={{ fontSize: 12 }}>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <div className="font-mono mb-5" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
                {group}
              </div>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white transition-colors duration-200"
                      style={{ fontSize: 13 }}
                    >
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
          <div className="font-mono text-white/20" style={{ fontSize: 10, letterSpacing: "0.12em" }}>
            © 2024 CRIMSONWINGS BLOOD LOGISTICS LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Compliance"].map((l) => (
              <a key={l} href="#" className="font-mono text-white/20 hover:text-white/50 transition-colors" style={{ fontSize: 10, letterSpacing: "0.1em" }}>
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
