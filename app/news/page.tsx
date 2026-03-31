import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsPage from "@/components/pages/NewsPage";

export const metadata = {
  title: "News & Updates | CrimsonWings",
  description: "Latest news, press releases, and updates from CrimsonWings Blood Logistics Ltd.",
};

export default function News() {
  return (
    <>
      <Navbar />
      <main>
        <NewsPage />
      </main>
      <Footer />
    </>
  );
}
