import HomeOverlay from "./HomeOverlay";
import styles from "./HomeSection.module.css";

const HomeSection = () => {
	return (
		<section id="home">
			<div className={styles["home-section"]}>
				<HomeOverlay />
			</div>
		</section>
	);
};

export default HomeSection;
