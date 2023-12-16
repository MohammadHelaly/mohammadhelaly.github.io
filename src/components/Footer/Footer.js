import React from "react";
import styles from "./Footer.module.css";
import useAnimate from "../../hooks/use-animate";
import SocialLinks from "../Miscellaneous/SocialLinks";

const Footer = () => {
	const iconsRef = useAnimate("animate", false);
	const copyRightRef = useAnimate("animate", false);
	const currentYear = new Date().getFullYear();

	return (
		<footer className="background py-5">
			<div className="container text-light text-center">
				<div ref={iconsRef} className={styles["footer-container"]}>
					<SocialLinks variant="light" />
				</div>
				<hr />
				<p ref={copyRightRef} className={styles["copyright"]}>
					&copy; {currentYear} Mohammad Helaly
				</p>
			</div>
		</footer>
	);
};

export default Footer;
