import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.crimsonwings-logistics.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "CrimsonWings Blood Logistics Ltd | Automated Blood Intelligence Infrastructure",
  description: "CrimsonWings is positioning Nigeria not just to distribute blood — but to own the upstream supply chain of life-saving biologics. Automated processing. Precision logistics. National scale.",
  keywords: "CrimsonWings Blood Logistics, blood bank Nigeria, blood delivery Ogun State, NAT screening, drone blood delivery, medical logistics Nigeria, blood supply chain",

  openGraph: {
    title: "CrimsonWings Blood Logistics Ltd | Nigeria",  /* 50 chars */
    description: "National-scale healthcare infrastructure powering Nigeria's blood supply chain. Automated processing, NAT screening, and drone-enabled delivery — on time, every time.",  /* 154 chars */
    type: "website",
    url: BASE_URL,
    siteName: "CrimsonWings Blood Logistics Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CrimsonWings Blood Logistics Ltd — Automated Blood Intelligence Infrastructure",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CrimsonWings Blood Logistics Ltd | Nigeria",  /* 50 chars */
    description: "National-scale healthcare infrastructure powering Nigeria's blood supply chain. Automated processing, precision logistics, national scale.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/logo-new.jpg",
    apple: "/logo-new.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
