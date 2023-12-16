import styles from "./TimelineItem.module.css";
import useAnimate from "../../hooks/use-animate";
import ListItem from "../Miscellaneous/ListItem";

const TimelineItem = (props) => {
	const { position, place, dates, description, id } = props;
	const itemRef = useAnimate("animate", false);

	return (
		<>
			<div className={styles["timeline-bar"]} id={id}>
				<div className={styles["timeline-point"]} id={id}></div>
			</div>
			<div ref={itemRef} className={styles["timeline-item"]}>
				<h6 className={`display-6 ${styles["timeline-header"]}`}>
					{position}
				</h6>
				<p
					className={`text-muted ${styles["timeline-text"]} ${styles["timeline-information"]}`}>
					<em>{place}</em>
				</p>
				<p
					className={`text-muted ${styles["timeline-text"]} ${styles["timeline-information"]}`}>
					<em>{dates}</em>
				</p>
				<hr />
				<ul>
					{description.map((point, index) => (
						<ListItem
							key={index}
							className={`${styles["timeline-text"]}`}>
							<li>{point}</li>
						</ListItem>
					))}
				</ul>
			</div>
		</>
	);
};

export default TimelineItem;
