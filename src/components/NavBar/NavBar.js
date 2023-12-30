import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import useAnimate from "../../hooks/use-animate";
import { ReactComponent as HamburgerMenu } from "../../assets/icons/hamburger-menu-black.svg";
import { ReactComponent as CloseMenu } from "../../assets/icons/close-menu-black.svg";

const NavBar = () => {
	const logoRef = useAnimate("animate", false);
	const listRef = useAnimate("animate", false);
	const buttonRef = useAnimate("animate", false);
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
			className={`navbar navbar-expand-md bg-white fixed-top 
			${scrolled ? styles["top-nav-scrolled"] : styles["top-nav"]}`}>
			<div className="container">
				<a
					ref={logoRef}
					className={`navbar-brand text-dark ${styles["logo"]} ${styles["top-nav-content"]} ${styles["top-nav-link"]}`}
					href="#home">
					helaly.dev
				</a>
				<button
					ref={buttonRef}
					className={`navbar-toggler ${styles["top-nav-button"]} ${styles["top-nav-content"]}`}
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
					aria-label="Toggle navigation">
					<HamburgerMenu fill="#212529" height="100%" width="100%" />
				</button>
				<div
					className={`offcanvas offcanvas-end ${styles["offcanvas-content"]}`}
					tabIndex="-1"
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel">
					<div className="offcanvas-header">
						<h5
							className="offcanvas-title"
							id="offcanvasNavbarLabel">
							<a
								className={`navbar-brand text-dark ${styles["logo"]} ${styles["top-nav-link"]}`}
								href="#home">
								helaly.dev
							</a>
						</h5>
						<button
							type="button"
							// className="btn-close"
							className={`${styles["top-nav-button"]} `}
							data-bs-dismiss="offcanvas"
							aria-label="Close">
							<CloseMenu
								fill="#212529"
								height="100%"
								width="100%"
							/>
						</button>
					</div>
					<div className="offcanvas-body">
						<ul
							ref={listRef}
							className={`navbar-nav justify-content-end flex-grow-1 ${styles["top-nav-list"]}`}>
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
			</div>
		</nav>
	);
};

export default NavBar;

// const Navbar = () => {
// 	const navBarRef = useAnimate("animate-navbar", false);
// 	const contentRef = useAnimate("animate-navbar", false);
// 	const [scrolled, setScrolled] = useState(false);

// 	const handleScroll = () => {
// 		if (window.scrollY > 100) {
// 			setScrolled(true);
// 		} else {
// 			setScrolled(false);
// 		}
// 	};

// 	useEffect(() => {
// 		window.addEventListener("scroll", handleScroll);
// 		return () => {
// 			window.removeEventListener("scroll", handleScroll);
// 		};
// 	}, []);

// 	return (
// 		<nav
// 			ref={navBarRef}
// 			className={`navbar navbar-expand-md navbar-light fixed-top
// 				${scrolled ? styles["top-nav-scrolled"] : styles["top-nav"]}`}>
// 			<div
// 				ref={contentRef}
// 				className={`${styles["top-nav-content"]} container topnav-container`}>
// 				<a
// 					className={`navbar-brand mb-1 text-dark ${styles["logo"]} ${styles["top-nav-link"]}`}
// 					href="#home">
// 					helaly.dev
// 				</a>
// 				<button
// 					className="navbar-toggler"
// 					type="button"
// 					data-bs-toggle="collapse"
// 					data-bs-target="#navbarSupportedContent"
// 					aria-controls="navbarSupportedContent"
// 					aria-expanded="false"
// 					aria-label="Toggle navigation">
// 					<span className="navbar-toggler-icon"></span>
// 				</button>
// 				<div
// 					className="collapse navbar-collapse"
// 					id="navbarSupportedContent">
// 					<ul className="navbar-nav ms-auto text-center">
// 						<li className="nav-item">
// 							<a
// 								className={`nav-link custom-link ${styles["top-nav-link"]}`}
// 								href="#about">
// 								About
// 							</a>
// 						</li>
// 						<li className="nav-item">
// 							<a
// 								className={`nav-link custom-link ${styles["top-nav-link"]}`}
// 								href="#projects">
// 								Projects
// 							</a>
// 						</li>
// 						<li className="nav-item">
// 							<a
// 								className={`nav-link custom-link ${styles["top-nav-link"]}`}
// 								href="#skills">
// 								Skills
// 							</a>
// 						</li>
// 						<li className="nav-item">
// 							<a
// 								className={`nav-link custom-link ${styles["top-nav-link"]}`}
// 								href="#contact">
// 								Contact
// 							</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;
