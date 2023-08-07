import useAnimate from "../../hooks/use-animate";
import styles from "./ListItem.module.css";

const ListItem = (props) => {
	const elementRef = useAnimate(styles["animate"]);
	const { children, className } = props;
	return (
		<li ref={elementRef} className={`${styles["list-item"]} ${className}`}>
			{children}
		</li>
	);
};

export default ListItem;
