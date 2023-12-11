import useAnimate from "../../hooks/use-animate";
import styles from "./ListItem.module.css";

const ListItem = (props) => {
	const elementRef = useAnimate(styles["animate"], false);
	const { children, className } = props;
	return (
		<div ref={elementRef} className={`${styles["list-item"]} ${className}`}>
			{children}
		</div>
	);
};

export default ListItem;
