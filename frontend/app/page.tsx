import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import CTASection from "../components/CTASection";
import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <CTASection />
    </main>
  );
}
