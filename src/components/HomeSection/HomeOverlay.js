import styles from "./HomeOverlay.module.css";
import hackerrankIcon from "../../assets/icons/hackerrank.svg";
import githubIcon from "../../assets/icons/github.svg";
import gmailIcon from "../../assets/icons/gmail.jpg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import useAnimate from "../../hooks/use-animate";
// import Icon from "../Miscellaneous/Icon";
// import { useState } from "react";

const HomeOverlay = (props) => {
	const { variant } = props;
	// const [isLight, setIsLight] = useState(true);
	const isLight = variant === "light";
	const titleClasses = isLight ? "text-light" : "";
	const lineClasses = isLight ? "lead text-light" : "lead";
	const iconClasses = isLight ? "white-icon" : "dark-icon";
	const elementRef = useAnimate(styles["animate"], false);

	// setTimeout(() => {
	// 	setIsLight(!isLight);
	// }, 5000);

	return (
		<div ref={elementRef} className={styles["overlay-container"]}>
			<h1 className={`${titleClasses} display-4`}>Mohammad Helaly</h1>
			<p className={`${lineClasses}`}>
				Software and Web Developer. Data Scientist.
			</p>
			<p className={`${lineClasses}`}>
				Creating innovative solutions through code.
			</p>
			<p className={`${lineClasses} bottom-lead`}>
				Building engaging web experiences with passion.
			</p>
			<p>
				<span>
					<a
						href="mailto:mohammad.helaly@gmail.com"
						className="icon-link gm-link">
						{/* <Icon
							alt="Gmail"
							className={`icon ${iconClasses} gm-icon`}>
							{gmIcon}
						</Icon> */}
						<img
							src={gmailIcon}
							alt="Gmail"
							className={`icon ${iconClasses} gm-icon`}
						/>
					</a>
					<a
						href="https://github.com/MohammadHelaly"
						target="_blank"
						className="icon-link">
						{/* <Icon
							alt="GitHub"
							className={`icon ${iconClasses}`}>
							{ghIcon}
						</Icon> */}
						<img
							src={githubIcon}
							alt="GitHub"
							className={`icon ${iconClasses}`}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/mohammadhelaly/"
						target="_blank"
						className="icon-link">
						{/* <Icon
							
							alt="LinkedIn"
							className={`icon ${iconClasses}`}>
							{liIcon}
						</Icon> */}
						<img
							src={linkedinIcon}
							alt="LinkedIn"
							className={`icon ${iconClasses}`}
						/>
					</a>
					<a
						href="https://www.hackerrank.com/mohammad_helaly?hr_r=1"
						target="_blank"
						className="icon-link">
						{/* <Icon
							alt="HackerRank"
							className={`icon ${iconClasses} hr-icon`}>
							{hrIcon}
						</Icon> */}
						<img
							src={hackerrankIcon}
							alt="HackerRank"
							className={`icon ${iconClasses} hr-icon`}
						/>
					</a>
				</span>
			</p>
		</div>
	);
};

export default HomeOverlay;
