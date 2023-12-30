import { ReactComponent as HackerRank } from "../../assets/icons/hackerrank.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Gmail } from "../../assets/icons/gmail.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import Icon from "./Icon";
import styles from "./SocialLinks.module.css";

const SocialLinks = (props) => {
	const { variant } = props;

	const fillColor = variant === "light" ? "#ffffff" : "#000000";

	return (
		<div className={styles["social-links-container"]}>
			<Icon link={true} to="mailto:mohammad.helaly@gmail.com">
				<Gmail
					height="33px"
					width="33px"
					className={`${styles["icon"]} ${styles["icon-link"]} ${styles["gm-icon"]}`}
					fill={fillColor}
				/>
			</Icon>
			<Icon link={true} to="https://github.com/MohammadHelaly">
				<Github
					height="30px"
					width="30px"
					className={`${styles["icon"]} ${styles["icon-link"]}`}
					fill={fillColor}
				/>
			</Icon>
			<Icon link={true} to="https://www.linkedin.com/in/mohammadhelaly/">
				<Linkedin
					height="30px"
					width="30px"
					className={`${styles["icon"]} ${styles["icon-link"]}`}
					fill={fillColor}
				/>
			</Icon>
			<Icon
				link={true}
				to="https://www.hackerrank.com/mohammad_helaly?hr_r=1">
				<HackerRank
					height="30px"
					width="30px"
					className={`${styles["icon"]} ${styles["hr-icon"]} ${styles["icon-link"]}`}
					fill={fillColor}
				/>
			</Icon>
		</div>
	);
};

export default SocialLinks;
