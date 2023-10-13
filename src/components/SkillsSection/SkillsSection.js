import SectionHeader from "../Miscellaneous/SectionHeader";
import styles from "./SkillsSection.module.css";
import skillsData from "../../assets/data/skillsData";
import SkillIcon from "./SkillIcon";

const SkillsSection = () => {
	return (
		<section id="skills">
			<div className={styles["skills-background"]}>
				<SectionHeader
					titleText="Skills"
					subtitleText="Software and web development. Data science and machine learning."
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
