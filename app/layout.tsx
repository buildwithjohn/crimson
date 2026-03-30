import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrimsonWings | Delivering Blood. Saving Lives. On Time, Every Time.",
  description: "Nigeria's most advanced digitized blood bank and integrated medical logistics platform. NAT-screened blood, large-scale storage, and drone-enabled delivery across Lagos.",
  keywords: "blood bank Nigeria, blood delivery Lagos, medical logistics, NAT screening, drone delivery blood, CrimsonWings",
  openGraph: {
    title: "CrimsonWings Blood Logistics",
    description: "National-scale healthcare infrastructure. Digitized blood bank. Drone-enabled delivery.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
