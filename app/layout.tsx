import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrimsonWings Plasma Biologics Ltd | Delivering Blood. Saving Lives.",
  description: "Nigeria's most advanced digitized blood bank and integrated medical logistics platform. NAT-screened blood, large-scale cold storage, and drone-enabled delivery across Lagos.",
  keywords: "CrimsonWings Plasma Biologics, blood bank Nigeria, blood delivery Lagos, NAT screening, drone blood delivery, medical logistics Nigeria",
  openGraph: {
    title: "CrimsonWings Plasma Biologics Ltd",
    description: "National-scale healthcare infrastructure. Digitized blood bank. Drone-enabled delivery. On Time. Every Time.",
    type: "website",
    siteName: "CrimsonWings Plasma Biologics Ltd",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
