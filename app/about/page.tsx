import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "@/components/pages/AboutPage";

export const metadata = {
  title: "About CrimsonWings | Leadership & Advisory Board",
  description: "Meet the clinical leaders, technology experts, and advisors driving CrimsonWings Plasma Biologics Ltd — Nigeria's national blood infrastructure platform.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
