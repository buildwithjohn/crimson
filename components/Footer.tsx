"use client";
import Image from "next/image";
import Link from "next/link";

const LINKS = {
  Platform:     ["About","Solution","Technology","How It Works","Impact"],
  Partnerships: ["Government","Hospitals","Investors","NGOs","DFIs"],
  Company:      ["Contact Us","Investor Relations","Careers","News","FAQ"],
};

export default function Footer() {
  return (
    <footer style={{ background:"#060606", position:"relative", overflow:"hidden" }}>
      <div className="grid-lines-dark" style={{ position:"absolute", inset:0, opacity:.5 }}/>
      <div className="noise-overlay"/>

      {/* CTA band */}
      <div style={{ background:"var(--crimson)", padding:"clamp(36px,5vw,56px) 0", position:"relative" }}>
        <div className="container" style={{ display:"flex", flexDirection:"column", gap:20, alignItems:"flex-start" }}>
          <div>
            <h3 className="font-display" style={{ fontSize:"clamp(22px,3vw,36px)", fontWeight:700, color:"#fff", lineHeight:1.2, marginBottom:6 }}>
              Delivering Blood. Saving Lives.
            </h3>
            <p className="caption" style={{ color:"rgba(255,255,255,.55)", letterSpacing:".16em" }}>ON TIME. EVERY TIME.</p>
          </div>
          <a href="#contact" style={{ display:"inline-flex", alignItems:"center", background:"#fff", color:"var(--crimson)", fontFamily:"var(--font-body)", fontWeight:600, fontSize:12, letterSpacing:".1em", textTransform:"uppercase", padding:"14px 32px", textDecoration:"none", transition:"opacity .2s", whiteSpace:"nowrap" }}
            onMouseEnter={e=>e.currentTarget.style.opacity=".88"}
            onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
            Partner With Us
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="container" style={{ position:"relative", zIndex:2, paddingTop:"clamp(48px,7vw,80px)", paddingBottom:"clamp(40px,6vw,64px)" }}>
        <div style={{ display:"grid", gap:40 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <div style={{ width:56, height:56, borderRadius:"50%", overflow:"hidden", background:"#000", position:"relative", flexShrink:0 }}>
                <Image src="/logo-crimson.png" alt="CrimsonWings" fill style={{ objectFit:"contain" }}/>
              </div>
              <div>
                <div className="font-display" style={{ fontSize:18, fontWeight:700, color:"#fff", lineHeight:1.2 }}>
                  Crimson<span style={{ color:"var(--crimson)" }}>Wings</span>
                </div>
                <div className="caption" style={{ color:"rgba(255,255,255,.28)", marginTop:3, fontSize:8 }}>Plasma Biologics Ltd</div>
              </div>
            </div>
            <p className="body-md" style={{ color:"rgba(255,255,255,.32)", marginBottom:20, maxWidth:280 }}>
              Nigeria&apos;s national blood infrastructure platform. NAT-screened blood, ultra-scale cold storage, and drone-enabled delivery — end to end.
            </p>
            {[
              {l:"GENERAL",  v:"infodeskcwpbl@crimsonwingsbiologics.com"},
              {l:"INVESTOR", v:"investorrelations@crimsonwingsbiologics.com"},
              {l:"PHONE",    v:"+234 708 681 7669"},
              {l:"BASE",     v:"Lagos, Nigeria"},
            ].map(c=>(
              <div key={c.l} style={{ display:"flex", gap:10, marginBottom:8, alignItems:"flex-start" }}>
                <span className="caption" style={{ color:"rgba(255,255,255,.2)", flexShrink:0, minWidth:54, fontSize:8 }}>{c.l}</span>
                <span style={{ fontSize:12, color:"rgba(255,255,255,.38)", wordBreak:"break-all" }}>{c.v}</span>
              </div>
            ))}
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group,links])=>(
            <div key={group}>
              <div className="caption" style={{ color:"rgba(255,255,255,.2)", marginBottom:16, fontSize:9 }}>{group}</div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {links.map(l=>(
                  <a key={l} href="#" style={{ fontSize:13, color:"rgba(255,255,255,.36)", textDecoration:"none", transition:"color .2s" }}
                    onMouseEnter={e=>e.currentTarget.style.color="#fff"}
                    onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,.36)"}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop:"1px solid rgba(255,255,255,.06)", marginTop:"clamp(40px,5vw,60px)", paddingTop:24, display:"flex", flexWrap:"wrap", gap:12, justifyContent:"space-between", alignItems:"center" }}>
          <div className="caption" style={{ color:"rgba(255,255,255,.18)", fontSize:9 }}>© 2024 CRIMSONWINGS PLASMA BIOLOGICS LTD. ALL RIGHTS RESERVED.</div>
          <div style={{ display:"flex", gap:24 }}>
            {["Privacy Policy","Terms of Use","Compliance"].map(l=>(
              <a key={l} href="#" className="caption" style={{ color:"rgba(255,255,255,.18)", fontSize:9, textDecoration:"none" }}>{l}</a>
            ))}
          </div>
          <div className="caption" style={{ color:"rgba(255,255,255,.14)", fontSize:9 }}>BUILT BY JAA STUDIO</div>
        </div>
      </div>
      <style>{`
        @media(min-width:600px){ .cta-row{ flex-direction:row !important; align-items:center !important; justify-content:space-between !important; } }
        @media(min-width:900px){ .footer-grid{ grid-template-columns:2fr 1fr 1fr 1fr !important; } }
      `}</style>
    </footer>
  );
}
