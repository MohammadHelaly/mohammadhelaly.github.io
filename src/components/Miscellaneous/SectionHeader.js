import styles from "./SectionHeader.module.css";
import useAnimate from "../../hooks/use-animate";

const SectionHeader = (props) => {
	const titleRef = useAnimate("animate", false);
	const subtitleRef = useAnimate("animate", false);
	const { titleText, subtitleText, textTheme } = props;

	return (
		<div className={styles["header-container"]}>
			<h5
				ref={titleRef}
				className={`${
					textTheme === "light" ? "text-light" : "text-dark"
				} ${styles["title-text"]} display-5`}>
				{titleText}
			</h5>
			<p
				ref={subtitleRef}
				className={`${
					textTheme === "light"
						? "text-light"
						: "text-dark text-muted"
				} ${styles["subtitle-text"]} lead`}>
				{subtitleText}
			</p>
		</div>
	);
};

export default SectionHeader;
