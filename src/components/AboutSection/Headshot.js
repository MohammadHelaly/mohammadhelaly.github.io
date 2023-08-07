import headshot from "../../assets/images/me.jpg";
import useAnimate from "../../hooks/use-animate";
import styles from "./Headshot.module.css";

const Headshot = () => {
	const elementRef = useAnimate(styles["animate"]);
	return (
		<>
			<div className="col-lg-2 "></div>
			<div
				className={`col-sm-12 col-lg-3 ${styles["headshot-container"]}`}>
				<img
					ref={elementRef}
					src={headshot}
					className={styles["headshot"]}
				/>
			</div>
		</>
	);
};

export default Headshot;
