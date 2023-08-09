import SectionHeader from "../Miscellaneous/SectionHeader";
import styles from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";
import timelineData from "../../assets/data/timelineData";

const Timeline = () => {
	return (
		<div className={`background ${styles["timeline"]}`}>
			<SectionHeader
				titleText="TIMELINE"
				subtitleText="What I've done..."
				textTheme="light"
			/>
			<div className={styles["timeline-container"]}>
				{timelineData.map((timelineItem, index) => (
					<TimelineItem
						key={index}
						position={timelineItem.position}
						place={timelineItem.place}
						dates={timelineItem.dates}
						description={timelineItem.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Timeline;
