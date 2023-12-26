import styles from "./HomeOverlay.module.css";
import useAnimate from "../../hooks/use-animate";
import SocialLinks from "../Miscellaneous/SocialLinks";

const HomeOverlay = (props) => {
	const { variant } = props;
	const isLight = variant === "light";
	const iconsVariant = isLight ? "light" : "dark";
	const titleClasses = isLight ? "text-light" : "";
	const lineClasses = isLight ? "lead text-light" : "lead";
	const elementRef = useAnimate("animate", false);
	const iconsRef = useAnimate("animate", false);
	const titleVariant = window.innerWidth > 600 ? "display-1" : "display-1"; //"display-3" "display-4"

	return (
		<div className="container">
			<div ref={elementRef} className={styles["overlay-container"]}>
				<h1
					className={`${titleClasses} ${styles["title"]} ${titleVariant}`}>
					Mohammad Helaly
				</h1>
				<p className={`${lineClasses}`}>
					Software developer. Data scientist. Engineer.
				</p>
				<p className={`${lineClasses}`}>
					Creating innovative solutions through code.
				</p>
				<p className={`${lineClasses} ${styles["bottom-lead"]}`}>
					Building engaging experiences with passion.
				</p>
				<div ref={iconsRef} className={styles["icons-container"]}>
					<SocialLinks variant={iconsVariant} />
				</div>
			</div>
		</div>
	);
};

export default HomeOverlay;
