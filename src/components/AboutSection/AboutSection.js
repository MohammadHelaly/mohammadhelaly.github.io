import Timeline from "./Timeline";
import Bio from "./Bio";
import Slider from "../Miscellaneous/Slider";

const AboutSection = () => {
	return (
		<section id="about">
			<Slider />
			<Bio />
			<Timeline />
		</section>
	);
};

export default AboutSection;
