import backgroundImage from "../../assets/images/background.jpg";
import styles from "./Background.module.css";
import useAnimate from "../../hooks/use-animate";

const Background = () => {
	const elementRef = useAnimate("animate-background", false);
	return (
		<div ref={elementRef} className={styles["background"]}>
			<img
				className={styles["background-image"]}
				src={backgroundImage}
				alt="Background Image"
			/>
		</div>
	);
};

export default Background;
