import HomeOverlay from "./HomeOverlay";
import styles from "./HomeSection.module.css";

const HomeSection = () => {
	return (
		<section id="home">
			<div
				className={`jumbotron jumbotron-fluid ${styles["home-jumbotron"]}`}>
				<div
					className={`carousel slide carousel-fade ${styles["home-carousel"]}`}
					data-bs-ride="carousel"
					data-bs-interval="5000"
					data-bs-pause="false">
					<div className="carousel-inner">
						<div
							className={`carousel-item active ${styles["home-carousel-item"]} ${styles["alt-screen"]}`}>
							<HomeOverlay variant="light" />
						</div>
						<div
							className={`carousel-item ${styles["home-carousel-item"]}`}>
							<HomeOverlay />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeSection;
