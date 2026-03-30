"use client";

const PHASES = [
  {
    num: "01",
    mode: "Ground Transport",
    icon: "🚐",
    color: "#4A4A4A",
    desc: "Primary bulk logistics. Refrigerated vehicles transport large blood consignments between hubs and major hospitals on scheduled routes.",
    specs: ["Temperature-controlled vehicles", "GPS-tracked routes", "Scheduled & on-demand", "Hub-to-hospital primary link"],
  },
  {
    num: "02",
    mode: "Coordination Hub",
    icon: "🏢",
    color: "#2F80ED",
    desc: "Five strategically placed hubs across Lagos act as intelligent staging points — receiving, sorting, and dispatching blood orders based on real-time OS data.",
    specs: ["5 hubs across Lagos", "Real-time inventory sync", "Priority queue management", "Ground + drone dispatch centre"],
  },
  {
    num: "03",
    mode: "Drone Last-Mile",
    icon: "🚁",
    color: "#8A0303",
    desc: "For emergency and time-critical deliveries, drones bypass Lagos traffic entirely — reaching any hospital landing zone in under 60 minutes from dispatch.",
    specs: ["< 60 min urban delivery", "Temperature-controlled payload", "GPS precision landing", "Emergency priority override"],
  },
];

export default function LogisticsModel() {
  return (
    <section
      id="logistics"
      style={{
        paddingBlock: "clamp(64px,8vw,120px)",
        background: "#0A0E17",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(138,3,3,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(138,3,3,.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto clamp(48px,6vw,72px)" }}>
          <div className="section-label" style={{ justifyContent: "center", marginBottom: 20 }}>
            <span style={{ color: "rgba(255,255,255,.35)" }}>Logistics Architecture</span>
          </div>
          <h2 className="h2 font-display" style={{ color: "#fff", marginBottom: 16 }}>
            The Triphasic{" "}
            <em style={{ color: "var(--crimson)" }}>Logistics Model</em>
          </h2>
          <p className="body-lg" style={{ color: "rgba(255,255,255,.45)" }}>
            No single delivery mode can serve all scenarios. CrimsonWings runs three complementary logistics layers — working in concert to guarantee blood reaches every hospital, on time, every time.
          </p>
        </div>

        {/* Three phase cards + connecting arrows */}
        <div style={{ display: "grid", gap: 0, position: "relative" }} className="logistics-grid">

          {/* Connector line — desktop only */}
          <div className="connector-line" style={{
            display: "none",
            position: "absolute",
            top: "50%",
            left: "calc(33.33% - 20px)",
            right: "calc(33.33% - 20px)",
            height: 2,
            background: "linear-gradient(90deg, #4A4A4A, #2F80ED, #8A0303)",
            opacity: 0.3,
            transform: "translateY(-50%)",
            zIndex: 0,
          }} />

          {PHASES.map((p, i) => (
            <div key={p.num} style={{ position: "relative", zIndex: 1 }}>
              <div style={{
                background: "rgba(255,255,255,.03)",
                border: `1px solid rgba(255,255,255,.07)`,
                borderTop: `3px solid ${p.color}`,
                padding: "clamp(28px,3.5vw,44px)",
                height: "100%",
                transition: "background .3s, border-color .3s",
                position: "relative",
                overflow: "hidden",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = `${p.color}0a`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${p.color}40`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.03)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.07)";
                }}
              >
                {/* Phase badge */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{
                    width: 48, height: 48,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: `${p.color}18`,
                    border: `1px solid ${p.color}35`,
                    fontSize: 22,
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <div className="caption" style={{ color: p.color, marginBottom: 3 }}>Phase {p.num}</div>
                    <div className="font-display" style={{ fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 700, color: "#fff" }}>
                      {p.mode}
                    </div>
                  </div>
                </div>

                <p className="body-md" style={{ color: "rgba(255,255,255,.45)", marginBottom: 24 }}>
                  {p.desc}
                </p>

                {/* Specs */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {p.specs.map(spec => (
                    <div key={spec} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                      <span className="caption" style={{ color: "rgba(255,255,255,.4)", fontSize: 10 }}>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow connector — mobile */}
                {i < PHASES.length - 1 && (
                  <div className="mobile-arrow" style={{
                    textAlign: "center", padding: "12px 0 0",
                    color: "rgba(255,255,255,.2)", fontSize: 20,
                  }}>↓</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Flow summary strip */}
        <div style={{
          marginTop: "clamp(36px,4vw,56px)",
          border: "1px solid rgba(255,255,255,.06)",
          padding: "24px clamp(20px,3vw,40px)",
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "center",
          gap: "clamp(12px,2vw,24px)",
          background: "rgba(255,255,255,.02)",
        }}>
          {[
            { label: "Blood Bank Hub", arrow: false },
            { label: "→", arrow: true },
            { label: "Ground Vehicle", arrow: false },
            { label: "→", arrow: true },
            { label: "Coordination Hub", arrow: false },
            { label: "→", arrow: true },
            { label: "Drone Dispatch", arrow: false },
            { label: "→", arrow: true },
            { label: "Hospital", arrow: false },
          ].map((item, i) => (
            item.arrow
              ? <span key={i} style={{ color: "var(--crimson)", opacity: 0.5, fontWeight: 300, fontSize: 18 }}>{item.label}</span>
              : <span key={i} className="caption" style={{ color: "rgba(255,255,255,.5)", letterSpacing: ".12em" }}>{item.label}</span>
          ))}
        </div>

        {/* Key stat */}
        <div style={{ textAlign: "center", marginTop: "clamp(36px,4vw,56px)" }}>
          <div style={{
            display: "inline-flex", flexWrap: "wrap", gap: 0,
            border: "1px solid rgba(255,255,255,.06)",
            overflow: "hidden",
          }}>
            {[
              { val: "5", label: "Strategic Hubs" },
              { val: "<60", label: "Min Emergency" },
              { val: "3", label: "Delivery Modes" },
              { val: "100%", label: "Coverage Lagos" },
            ].map((stat, i) => (
              <div key={stat.label} style={{
                padding: "20px 28px", textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,.06)" : "none",
              }}>
                <div className="font-display" style={{ fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 700, color: "#fff", lineHeight: 1, marginBottom: 6 }}>
                  {stat.val}
                </div>
                <div className="caption" style={{ color: "rgba(255,255,255,.3)", fontSize: 9 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .logistics-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 20px !important; }
          .connector-line { display: block !important; }
          .mobile-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
