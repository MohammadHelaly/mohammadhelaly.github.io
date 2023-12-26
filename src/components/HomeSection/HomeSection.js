import HomeOverlay from "./HomeOverlay";
import styles from "./HomeSection.module.css";
import Services from "./Services";

const HomeSection = () => {
	return (
		<section id="home">
			<div className={styles["home-section"]}>
				{/* <div
					className="carousel slide carousel-fade"
					data-bs-ride="carousel"
					data-bs-interval="5000"
					data-bs-pause="false">
					<div className="carousel-inner"> */}
				{/* <div className={`carousel-item active ${styles["alt-screen"]}`}> */}
				<HomeOverlay />
				<Services />
				{/* </div> */}
				{/* <div className="carousel-item">
							<HomeOverlay />
						</div> */}
				{/* </div> */}
				{/* </div> */}
			</div>
		</section>
	);
};

export default HomeSection;
