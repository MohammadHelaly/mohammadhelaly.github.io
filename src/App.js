import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import Footer from "./components/Footer/Footer";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

function App() {
	return (
		<>
			<NavBar />
			<HomeSection />
			<AboutSection />
			<ProjectsSection />
			<Footer />
		</>
	);
}

export default App;
