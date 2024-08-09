import NavBar from "@/components/nav-bar";
import HomeSection from "@/components/home-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import TimelineSection from "@/components/timeline-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <HomeSection />
        <ServicesSection />
        <AboutSection />
        <TimelineSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
