import SectionHeader from "../Miscellaneous/SectionHeader";
// import Project from "../ProjectsSection/Project";
import styles from "./SkillsSection.module.css";
import skillsData from "../../assets/data/skillsData";
import SkillIcon from "./SkillIcon";

const SkillsSection = () => {
	return (
		<section id="skills">
			{/* <div className={styles["projects-container"]}> */}
			<div className={styles["skills-background"]}>
				<SectionHeader
					titleText="MY SKILLS"
					subtitleText="Software and Web Development - Data Science - Machine Learning"
					textTheme="light"
				/>
				<div className={styles["skills-container"]}>
					{skillsData.map((skill, index) => (
						<SkillIcon
							key={index}
							alt={skill.alt}
							className={styles[skill.className]}>
							{skill.icon}
						</SkillIcon>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
