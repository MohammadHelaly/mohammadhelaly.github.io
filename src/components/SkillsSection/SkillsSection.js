import React from "react";
import SectionHeader from "../Miscellaneous/SectionHeader";
import styles from "./SkillsSection.module.css";
import skillsData from "../../assets/data/skillsData";
import SkillIcon from "./SkillIcon";

const SkillsSection = () => {
	return (
		<section id="skills">
			<div className={styles["skills-background"]}>
				<div className="container">
					<SectionHeader
						titleText="Skills"
						subtitleText="Software development. Data science and machine learning."
						variant="dark"
					/>
					<div className={`${styles["skills-container"]}`}>
						{skillsData.map((skill, index) => {
							return (
								<SkillIcon key={index} name={skill.name}>
									{React.cloneElement(skill.icon, {
										height: "100%",
										fill: "#000000",
										className: styles[skill.className],
									})}
								</SkillIcon>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
