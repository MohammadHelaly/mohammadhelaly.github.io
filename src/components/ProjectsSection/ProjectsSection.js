import SectionHeader from "../Miscellaneous/SectionHeader";
import Project from "./Project";
import styles from "./ProjectsSection.module.css"; // Import your CSS module here
import githubIcon from "../../assets/icons/github.svg"; // Import your icons here
import projects from "../../assets/data/projects";

const ProjectsSection = () => {
	// const projectData = [
	// 	{
	// 		title: "NeuralVisions",
	// 		githubLink:
	// 			"https://github.com/MohammadHelaly/Visual-Question-Answering",
	// 		images: [
	// 			"../../assets/images/neural1.mp4",
	// 			"../../assets/images/neural1.mp4",
	// 			"../../assets/images/neural2.jpg",
	// 		],
	// 		description: [
	// 			"Web app that answers open-ended questions about images, reaching 68% accuracy and 80% answerability.",
	// 			"Deep learning model incorporating OpenAI CLIP encoder into architecture, trained on the VizWiz dataset.",
	// 		],
	// 	},
	// 	// ... Add other projects here
	// ];

	return (
		<section id="projects">
			<div className={styles["projects-container"]}>
				<SectionHeader
					titleText="My Projects"
					subtitleText="NeuralVisions - MedicoPortal - DriveIt.io - Libraria - PaintFlow.studio"
				/>
				{projects.map((project, index) => (
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
