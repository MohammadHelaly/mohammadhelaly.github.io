import styles from "./NavBar.module.css";
import useAnimate from "../../hooks/use-animate";

const Navbar = () => {
	const navBarRef = useAnimate(styles["animate"], false);
	const contentRef = useAnimate(styles["animate"], false);

	return (
		<nav
			ref={navBarRef}
			className={
				"navbar navbar-expand-md navbar-light fixed-top " +
				styles["top-nav"]
			}>
			<div
				ref={contentRef}
				className={`${styles["top-nav-content"]} container topnav-container`}>
				<a className={"navbar-brand ms-1 mb-1 text-dark"} href="#home">
					helaly.dev
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto text-center">
						<li className="nav-item">
							<a className="nav-link custom-link" href="#about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link custom-link"
								href="#projects">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link custom-link" href="#skills">
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link custom-link" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
