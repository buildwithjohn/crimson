import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.crimsonwings-logistics.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "CrimsonWings Blood Logistics Ltd | Automated Blood Intelligence Infrastructure",
  description: "CrimsonWings is positioning Nigeria to own the upstream supply chain of life-saving biologics. Automated processing, NAT screening, precision logistics and drone-enabled delivery at national scale.",
  keywords: "CrimsonWings Blood Logistics, blood bank Nigeria, blood delivery Ogun State, NAT screening, drone blood delivery, medical logistics Nigeria, blood supply chain",

  openGraph: {
    title: "CrimsonWings Blood Logistics Ltd | Nigeria",
    description: "National-scale healthcare infrastructure powering Nigeria's blood supply chain. Automated processing, NAT screening, and drone-enabled delivery — on time, every time.",
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
    title: "CrimsonWings Blood Logistics Ltd | Nigeria",
    description: "National-scale healthcare infrastructure powering Nigeria's blood supply chain. Automated processing, precision logistics, national scale.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico",       sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
