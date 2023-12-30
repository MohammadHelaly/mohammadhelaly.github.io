import styles from "./SkillIcon.module.css";
import useAnimate from "../../hooks/use-animate";

const SkillIcon = (props) => {
	const { name, children } = props;
	const elementRef = useAnimate("animate", false);

	return (
		<div ref={elementRef} className={styles["frame"]}>
			<div className={styles["icon-container"]}>{children}</div>
			<p className={`text-dark ${styles["icon-text"]}`}>{name}</p>
		</div>
	);
};

export default SkillIcon;
