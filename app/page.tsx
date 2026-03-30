import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Technology from "@/components/Technology";
import LogisticsModel from "@/components/LogisticsModel";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Partnerships from "@/components/Partnerships";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <Technology />
        <LogisticsModel />
        <HowItWorks />
        <Services />
        <Impact />
        <Partnerships />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
