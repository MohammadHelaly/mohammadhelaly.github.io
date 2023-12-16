import headshot from "../../assets/images/me.jpg";
import useAnimate from "../../hooks/use-animate";
import styles from "./Headshot.module.css";

const Headshot = () => {
	const elementRef = useAnimate("animate", false);
	return (
		<>
			<div className={`${styles["headshot-container"]}`}>
				<img
					alt="Me"
					ref={elementRef}
					src={headshot}
					className={styles["headshot"]}
				/>
			</div>
		</>
	);
};

export default Headshot;
