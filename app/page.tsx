import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar";
import ServicesPage from "@/components/ServicesPage";
import AboutPage from "@/components/AboutPage";
import SkillsPage from "@/components/SkillsPage";
import ProjectsPage from "@/components/ProjectsPage";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutPage />
      <ServicesPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </main>
  );
}
