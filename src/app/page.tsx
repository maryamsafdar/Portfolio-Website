import AboutSection from "@/components/AboutSection";

import DevelopmentSkills from "@/components/DevelopmentSkills";
import EmailSection from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <DevelopmentSkills/>
        <ProjectsSection />
        <Services/>
        <EmailSection />
      </div>
    </main>
  );
}
