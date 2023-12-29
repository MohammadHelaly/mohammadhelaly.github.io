import React, { useEffect, useState } from "react";
// import backgroundImage1 from "../../assets/images/background1.jpeg";
// import backgroundImage2 from "../../assets/images/background2.png";
import styles from "./Background.module.css";
// import useAnimate from "../../hooks/use-animate";

const Background = () => {
	// const elementRef = useAnimate("animate-background", false);
	// const [scrolled, setScrolled] = useState(false);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (window.scrollY > 1000) {
	// 			setScrolled(true);
	// 		} else {
	// 			setScrolled(false);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	return (
		<div
			// ref={elementRef}
			className={styles["background"]}>
			{/* {!scrolled ? ( */}
			{/* <img
				className={styles["background-image"]}
				src={backgroundImage1}
				alt="Background Image"
			/> */}
			{/* ) : (
			 	<img
					className={styles["background-image"]}
					src={backgroundImage2}
					alt="Background Image"
				/>
			)} */}
		</div>
	);
};

export default Background;
