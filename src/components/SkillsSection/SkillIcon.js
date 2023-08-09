import styles from "./SkillIcon.module.css";
import useAnimate from "../../hooks/use-animate";

const SkillIcon = (props) => {
	const { children, alt, className } = props;
	const elementRef = useAnimate(styles["animate"], false);

	return (
		<div className={styles["frame"]} ref={elementRef}>
			<img
				src={children}
				alt={alt}
				className={`${styles["skill-icon"]} ${className}`}
			/>
		</div>
	);
};

export default SkillIcon;
