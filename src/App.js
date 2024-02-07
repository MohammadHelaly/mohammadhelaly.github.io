import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomeSection from "./components/HomeSection/HomeSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<NavBar />
			<HomeSection />
			<ServicesSection />
			<AboutSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
			<Footer />
		</>
	);
};

export default App;
