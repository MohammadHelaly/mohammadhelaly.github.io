import backgroundImage from "../../assets/images/background.jpg";
import styles from "./Background.module.css";

const Background = () => {
	return (
		<div className={styles["background"]}>
			<img
				className={styles["background-image"]}
				src={backgroundImage}
				alt="Background Image"
			/>
		</div>
	);
};

export default Background;
