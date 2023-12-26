import React from "react";
import styles from "./Footer.module.css";
import useAnimate from "../../hooks/use-animate";
import SocialLinks from "../Miscellaneous/SocialLinks";

const Footer = () => {
	const iconsRef = useAnimate("animate", false);
	const copyRightRef = useAnimate("animate", false);
	const currentYear = new Date().getFullYear();

	return (
		<footer className={`py-5 ${styles["footer"]}`}>
			<div className="container text-light text-center">
				<div ref={iconsRef} className={styles["footer-container"]}>
					<SocialLinks variant="dark" />
				</div>
				<hr />
				<p
					ref={copyRightRef}
					className={`text-dark ${styles["copyright"]}`}>
					&copy; {currentYear} Mohammad Helaly
				</p>
			</div>
		</footer>
	);
};

export default Footer;
