import SectionHeader from "../Miscellaneous/SectionHeader";
import Project from "./Project";
import styles from "./ProjectsSection.module.css";
import projectsData from "../../assets/data/projectsData";

const ProjectsSection = () => {
	return (
		<section id="projects">
			<div className={`${styles["projects-section"]}`}>
				<div className="container">
					<SectionHeader
						titleText="Projects"
						subtitleText="NeuralVisions - Lunar Trek -  MedicoPortal - DriveIt.io - Libraria - PaintFlow.studio"
						// textTheme="light"
					/>
					{projectsData.map((project, index) => (
						<Project
							key={index}
							id={index}
							title={project.title}
							siteLink={project.siteLink}
							githubLink={project.githubLink}
							images={project.images}
							description={project.description}
							stack={project.stack}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
