import React from "react";
import gmailIcon from "../../assets/icons/gmail.jpg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import hackerrankIcon from "../../assets/icons/hackerrank.svg";
import styles from "./Footer.module.css";
import useAnimate from "../../hooks/use-animate";
import Icon from "../Miscellaneous/Icon";

const Footer = () => {
	const elementRef = useAnimate(styles["animate"], false);
	const currentYear = new Date().getFullYear();

	return (
		<footer className="background py-5">
			<div className="container text-light text-center">
				<div ref={elementRef} className={styles["footer-container"]}>
					<Icon
						link={true}
						to="mailto:mohammad.helaly@gmail.com"
						src={gmailIcon}
						alt="Gmail"
						iconClassName="white-icon white-gm-icon"
						linkClassName={`icon-link ${styles["gm-link-footer"]}`}
					/>
					<Icon
						link={true}
						to="https://github.com/MohammadHelaly"
						src={githubIcon}
						alt="GitHub"
						iconClassName="white-icon"
						linkClassName="icon-link"
					/>
					<Icon
						link={true}
						to="https://www.linkedin.com/in/mohammadhelaly/"
						src={linkedinIcon}
						alt="LinkedIn"
						iconClassName="white-icon"
						linkClassName="icon-link"
					/>
					<Icon
						link={true}
						to="https://www.hackerrank.com/mohammad_helaly?hr_r=1"
						src={hackerrankIcon}
						alt="HackerRank"
						iconClassName="white-icon hr-icon"
						linkClassName="icon-link"
					/>
				</div>
				<hr />
				<p className={styles["copyright"]}>
					&copy; {currentYear} Mohammad Helaly
				</p>
			</div>
		</footer>
	);
};

export default Footer;
