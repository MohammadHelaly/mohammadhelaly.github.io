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

	const sliderClassName = `${styles["slider"]} ${
		addNewNavClass ? styles["new-slider"] : ""
	}`;

	return <div className={sliderClassName} />;
};

export default Slider;
