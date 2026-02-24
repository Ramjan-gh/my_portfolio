import Background3D from "@/components/Background3D";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <Background3D />
      <HeroSection />
      <SkillsSection />
      <CTASection />
    </main>
  );
}
