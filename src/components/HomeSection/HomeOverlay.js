import styles from "./HomeOverlay.module.css";
import hackerrankIcon from "../../assets/icons/hackerrank.svg";
import githubIcon from "../../assets/icons/github.svg";
import gmailIcon from "../../assets/icons/gmail.jpg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import useAnimate from "../../hooks/use-animate";
import Icon from "../Miscellaneous/Icon";

const HomeOverlay = (props) => {
	const { variant } = props;
	const isLight = variant === "light";
	const titleClasses = isLight ? "text-light" : "";
	const lineClasses = isLight ? "lead text-light" : "lead";
	const iconClasses = isLight ? "white-icon" : "dark-icon";
	const elementRef = useAnimate(styles["animate"], false);

	return (
		<div ref={elementRef} className={styles["overlay-container"]}>
			<h1 className={`${titleClasses} display-4`}>Mohammad Helaly</h1>
			<p className={`${lineClasses}`}>
				Software and web developer. Data scientist.
			</p>
			<p className={`${lineClasses}`}>
				Creating innovative solutions through code.
			</p>
			<p className={`${lineClasses} bottom-lead`}>
				Building engaging experiences with passion.
			</p>
			<p>
				<span>
					<Icon
						link={true}
						to="mailto:mohammad.helaly@gmail.com"
						src={gmailIcon}
						alt="Gmail"
						iconClassName={`${iconClasses} gm-icon`}
						linkClassName="icon-link gm-link"
					/>
					<Icon
						link={true}
						to="https://github.com/MohammadHelaly"
						src={githubIcon}
						alt="GitHub"
						iconClassName={iconClasses}
						linkClassName="icon-link"
					/>
					<Icon
						link={true}
						to="https://www.linkedin.com/in/mohammadhelaly/"
						src={linkedinIcon}
						alt="LinkedIn"
						iconClassName={iconClasses}
						linkClassName="icon-link"
					/>
					<Icon
						link={true}
						to="https://www.hackerrank.com/mohammad_helaly?hr_r=1"
						src={hackerrankIcon}
						alt="HackerRank"
						iconClassName={`${iconClasses} hr-icon`}
						linkClassName="icon-link"
					/>
				</span>
			</p>
		</div>
	);
};

export default HomeOverlay;
