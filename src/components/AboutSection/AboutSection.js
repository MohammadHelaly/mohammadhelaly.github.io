import Timeline from "./Timeline";
import Bio from "./Bio";

const AboutSection = () => {
	return (
		<section id="about">
			<nav className="navbar navbar-expand-md bg-dark navbar-dark">
				<div className="container topnav-container">
					<hr />
				</div>
			</nav>
			<Bio />
			<Timeline />
		</section>
	);
};

export default AboutSection;
