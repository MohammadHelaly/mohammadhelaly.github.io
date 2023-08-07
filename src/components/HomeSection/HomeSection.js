import HomeOverlay from "./HomeOverlay";
import styles from "./HomeSection.module.css";

const HomeSection = () => {
	return (
		<section id="home">
			<div
				className={`jumbotron jumbotron-fluid ${styles["hero-jumbotron"]}`}>
				<div
					className={`carousel slide carousel-fade ${styles["hero-carousel"]}`}
					data-bs-ride="carousel"
					data-bs-interval="5000"
					data-bs-pause="false">
					<div className="carousel-inner">
						<div
							className={`carousel-item ${styles["hero-carousel-item"]} ${styles["alt-screen"]} active`}>
							<HomeOverlay variant="light" />
						</div>
						<div
							className={`carousel-item ${styles["hero-carousel-item"]}`}>
							<HomeOverlay />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeSection;
