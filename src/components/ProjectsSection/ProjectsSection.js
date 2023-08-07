import SectionHeader from "../Miscellaneous/SectionHeader";
import Project from "./Project";
import styles from "../AboutSection/TimelineItem.module.css"; // Import your CSS module here
import githubIcon from "../../assets/icons/github.svg"; // Import your icons here

const ProjectsSection = () => {
	const projectData = [
		{
			title: "NeuralVisions",
			githubLink:
				"https://github.com/MohammadHelaly/Visual-Question-Answering",
			images: [
				"../../assets/images/neural1.mp4",
				"../../assets/images/neural1.mp4",
				"../../assets/images/neural2.jpg",
			],
			description: [
				"Web app that answers open-ended questions about images, reaching 68% accuracy and 80% answerability.",
				"Deep learning model incorporating OpenAI CLIP encoder into architecture, trained on the VizWiz dataset.",
			],
		},
		// ... Add other projects here
	];

	return (
		<section id="projects">
			<SectionHeader
				titleText="My Projects"
				subtitleText="NeuralVisions - MedicoPortal - DriveIt.io - Libraria - PaintFlow.studio"></SectionHeader>
			<div className="jumbotron-fluid projects-jumbotron">
				<div className={styles["project-container"]}>
					{projectData.map((project, index) => (
						<Project
							key={index}
							title={project.title}
							githubLink={project.githubLink}
							images={project.images}
							description={project.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
