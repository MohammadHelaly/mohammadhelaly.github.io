import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import useAnimate from "../../hooks/use-animate";

const Navbar = () => {
	const navBarRef = useAnimate("animate-navbar", false);
	const contentRef = useAnimate("animate-navbar", false);
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			ref={navBarRef}
			className={`navbar navbar-expand-md navbar-light fixed-top 
				${scrolled ? styles["top-nav-scrolled"] : styles["top-nav"]}`}>
			<div
				ref={contentRef}
				className={`${styles["top-nav-content"]} container topnav-container`}>
				<a
					className={`navbar-brand mb-1 text-dark ${styles["logo"]} ${styles["top-nav-link"]}`}
					href="#home">
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
							<a
								className={`nav-link custom-link ${styles["top-nav-link"]}`}
								href="#about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link custom-link ${styles["top-nav-link"]}`}
								href="#projects">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link custom-link ${styles["top-nav-link"]}`}
								href="#skills">
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a
								className={`nav-link custom-link ${styles["top-nav-link"]}`}
								href="#contact">
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
