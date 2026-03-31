import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompliancePage from "@/components/pages/CompliancePage";

export const metadata = {
  title: "Safety & Compliance | CrimsonWings",
  description: "CrimsonWings Blood Logistics Ltd operates to the highest standards of blood safety, regulatory compliance, and clinical quality — aligned with NAFDAC, WHO, and international best practices.",
};

export default function Compliance() {
  return (
    <>
      <Navbar />
      <main>
        <CompliancePage />
      </main>
      <Footer />
    </>
  );
}
