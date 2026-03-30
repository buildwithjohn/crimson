"use client";
import { useReveal } from "./useReveal";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "What makes CrimsonWings different from a standard blood bank?",
    a: "CrimsonWings is an end-to-end blood supply infrastructure platform. Unlike traditional blood banks that only collect and store, we combine NAT-level viral screening, ultra-scale cold storage, a proprietary digital operating system, and triphasic logistics including drone delivery — all under one unified platform.",
  },
  {
    q: "What is NAT screening and why does it matter?",
    a: "Nucleic Acid Testing (NAT) detects viral RNA/DNA directly in the blood sample, closing the 'window period' where donors test negative on conventional screens but are already infectious. NAT can detect HIV up to 11 days earlier and Hepatitis C up to 59 days earlier than standard antibody tests — making it the gold standard for blood safety.",
  },
  {
    q: "How fast can blood be delivered in an emergency?",
    a: "Our target for urban emergency delivery within Lagos is under 60 minutes from request confirmation to hospital arrival. For standard scheduled deliveries, we operate on a planned logistics schedule. Emergency requests trigger immediate drone dispatch from the nearest hub.",
  },
  {
    q: "What hospitals can access the CrimsonWings platform?",
    a: "We are building a network targeting 181+ hospitals across Lagos State, including public teaching hospitals, general hospitals, and private specialist facilities. Hospitals integrate with our OS platform to place real-time blood requests, track delivery status, and manage their blood inventory.",
  },
  {
    q: "Is CrimsonWings aligned with government health structures?",
    a: "Yes. CrimsonWings is designed for Public-Private Partnership (PPP) alignment with the Lagos State Ministry of Health and the National Blood Transfusion Service (NBTS). We operate within the regulatory framework of NAFDAC and relevant WHO guidelines.",
  },
  {
    q: "How can investors or institutions get involved?",
    a: "We welcome strategic partnerships from institutional investors, development finance institutions (DFIs), international health organizations, and government bodies. Please reach out via investorrelations@crimsonwingsbiologics.com or use the contact form on this page.",
  },
];

export default function FAQ() {
  const ref = useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 overflow-hidden" style={{ background: "var(--off-white)" }} ref={ref}>
      <div className="absolute inset-0 grid-dots opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label reveal mb-8 justify-center">Frequently Asked</div>
          <h2
            className="font-display reveal delay-100"
            style={{ fontSize: "clamp(28px, 4vw, 50px)", lineHeight: 1.1, fontWeight: 700, color: "var(--ink)" }}
          >
            Questions &{" "}
            <span style={{ color: "var(--crimson)", fontStyle: "italic" }}>Answers</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="overflow-hidden"
                style={{
                  border: "1px solid",
                  borderColor: open === i ? "rgba(138,3,3,0.25)" : "var(--smoke)",
                  background: open === i ? "var(--white)" : "var(--white)",
                  transition: "border-color 0.3s",
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-6 text-left"
                  style={{ padding: "24px 28px" }}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    className="font-display font-bold"
                    style={{ fontSize: 17, lineHeight: 1.3, color: "var(--ink)" }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center"
                    style={{
                      background: open === i ? "var(--crimson)" : "rgba(138,3,3,0.07)",
                      border: `1px solid ${open === i ? "var(--crimson)" : "rgba(138,3,3,0.15)"}`,
                      transition: "all 0.3s",
                    }}
                  >
                    {open === i
                      ? <Minus size={14} color="white" />
                      : <Plus size={14} style={{ color: "var(--crimson)" }} />
                    }
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: open === i ? 400 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s var(--ease-expo)",
                  }}
                >
                  <div
                    className="text-steel leading-relaxed"
                    style={{ fontSize: 15, padding: "0 28px 24px", borderTop: "1px solid var(--smoke)" }}
                  >
                    <div style={{ paddingTop: 20 }}>{faq.a}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
