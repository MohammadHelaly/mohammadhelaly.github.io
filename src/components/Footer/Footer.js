import React from "react";
import gmailIcon from "../../assets/icons/gmail.jpg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import hackerrankIcon from "../../assets/icons/hackerrank.svg";
import styles from "./Footer.module.css";
import useAnimate from "../../hooks/use-animate";

const Footer = () => {
	const elementRef = useAnimate(styles["animate"], false);

	return (
		<footer className="background bg-dark py-5">
			<div className="container text-light text-center">
				<div ref={elementRef} className={styles["footer-container"]}>
					<a
						href="mailto:mohammad.helaly@gmail.com"
						className={`icon-link ${styles["gm-link-footer"]}`}>
						<img
							src={gmailIcon}
							alt="Gmail"
							className="white-icon white-gm-icon icon"
						/>
					</a>
					<a
						href="https://github.com/MohammadHelaly"
						target="_blank"
						className="icon-link">
						<img
							src={githubIcon}
							alt="GitHub"
							className="white-icon icon"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/mohammadhelaly/"
						target="_blank"
						className="icon-link">
						<img
							src={linkedinIcon}
							alt="LinkedIn"
							className="white-icon icon"
						/>
					</a>
					<a
						href="https://www.hackerrank.com/mohammad_helaly?hr_r=1"
						target="_blank"
						className="icon-link">
						<img
							src={hackerrankIcon}
							alt="HackerRank"
							className="white-icon hr-icon icon"
						/>
					</a>
				</div>
				<hr />
				<p className={styles["copyright"]}>
					&copy; 2023 Mohammad Helaly
				</p>
			</div>
		</footer>
	);
};

export default Footer;
