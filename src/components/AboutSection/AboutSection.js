import Timeline from "./Timeline";
import Bio from "./Bio";
import Slider from "../Miscellaneous/Slider";

const AboutSection = () => {
	return (
		<section id="about">
			<Slider />
			{/* <nav className="navbar navbar-expand-md bg-dark navbar-dark">
				<div className="container topnav-container">
					<hr />
				</div>
			</nav> */}
			<Bio />
			<Timeline />
		</section>
	);
};

export default AboutSection;
