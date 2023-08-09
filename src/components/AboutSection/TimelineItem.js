import styles from "./TimelineItem.module.css";
import useAnimate from "../../hooks/use-animate";
import ListItem from "../Miscellaneous/ListItem";

const TimelineItem = (props) => {
	const { position, place, dates, description, id } = props;
	const itemRef = useAnimate(styles["animate-item"], false);
	const pointRef = useAnimate(styles["animate-point"], false);

	return (
		<>
			<div className={styles["timeline-bar"]} id={id}>
				<div
					ref={pointRef}
					className={styles["timeline-point"]}
					id={id}></div>
			</div>
			<div ref={itemRef} className={styles["timeline-item"]}>
				<h2 className={`display-6 ${styles["timeline-header"]}`}>
					{position}
				</h2>
				<p
					className={`lead line ${styles["timeline-text"]} ${styles["timeline-place"]}`}>
					<em>{place}</em>
				</p>
				<p className={`lead line`}>
					<em>{dates}</em>
				</p>
				<ul>
					{description.map((point, index) => (
						<ListItem
							key={index}
							className={`lead line ${styles["timeline-text"]}`}>
							{point}
						</ListItem>
					))}
				</ul>
			</div>
		</>
	);
};

export default TimelineItem;
