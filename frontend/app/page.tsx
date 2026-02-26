import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import CTASection from "../components/CTASection";
import Navbar from "../components/NavBar";
import ServicesPage from "@/components/ServicesPage";
import AboutPage from "@/components/AboutPage";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutPage />
      <ServicesPage />
      <SkillsSection />
      <CTASection />
    </main>
  );
}
