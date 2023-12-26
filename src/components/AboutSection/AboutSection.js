import Timeline from "./Timeline";
import Bio from "./Bio";
// import Slider from "../Miscellaneous/Slider";
// import styles from "./AboutSection.module.css";

const AboutSection = () => {
	return (
		<section id="about">
			{/* <Slider
				scrollValue={250}
				originalSliderClassName={styles["slider"]}
				newSliderClassName={styles["new-slider"]}
			/> */}
			<Bio />
			<Timeline />
		</section>
	);
};

export default AboutSection;
