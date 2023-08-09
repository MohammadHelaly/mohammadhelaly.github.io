import { useState, useEffect } from "react";
import styles from "./Slider.module.css";

const Slider = () => {
	const [addNewNavClass, setAddNewNavClass] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 250) {
				setAddNewNavClass(true);
			} else {
				setAddNewNavClass(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navbarClassName = `${styles["bg-dark"]} ${
		styles["my-nav"]
	} navbar navbar-expand-md ${addNewNavClass ? styles["my-new-nav"] : ""}`;

	return (
		<nav className={navbarClassName}>
			<div className="container topnav-container">
				<hr />
			</div>
		</nav>
	);
};

export default Slider;
