import SectionHeader from "../Miscellaneous/SectionHeader";
import Project from "./Project";
import styles from "./ProjectsSection.module.css";
import projectsData from "../../assets/data/projectsData";

const ProjectsSection = () => {
	return (
		<section id="projects">
			<div className={styles["projects-container"]}>
				<SectionHeader
					titleText="MY PROJECTS"
					subtitleText="NeuralVisions - MedicoPortal - DriveIt.io - Libraria - PaintFlow.studio"
				/>
				{projectsData.map((project, index) => (
					<Project
						key={index}
						id={index}
						title={project.title}
						githubLink={project.githubLink}
						images={project.images}
						description={project.description}
					/>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
