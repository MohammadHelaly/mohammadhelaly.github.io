import { useState, useEffect } from "react";
import styles from "./Slider.module.css";

const Slider = () => {
	const [addNewSliderClass, setAddNewSliderClass] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 250) {
				setAddNewSliderClass(true);
			} else {
				setAddNewSliderClass(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const sliderClassName = `${styles["slider"]} ${
		addNewSliderClass ? styles["new-slider"] : ""
	}`;

	return <div className={sliderClassName} />;
};

export default Slider;
