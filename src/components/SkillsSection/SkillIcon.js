import styles from "./SkillIcon.module.css";
import useAnimate from "../../hooks/use-animate";

const SkillIcon = (props) => {
	const { children } = props;
	const elementRef = useAnimate("animate", false);

	return (
		<div className={styles["frame"]} ref={elementRef}>
			{children}
		</div>
	);
};

export default SkillIcon;
