import SectionHeader from "../Miscellaneous/SectionHeader";
import styles from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
	return (
		<div className={`background ${styles["timeline"]}`}>
			<SectionHeader
				titleText="TIMELINE"
				subtitleText="What I've done..."
				textTheme="light"
			/>
			<div className={styles["timeline-container"]}>
				{/* <div className={styles["timeline-bar"]}>
					<div className={styles["timeline-point"]}></div>
				</div> */}
				<TimelineItem
					id="end"
					heading="Computer and Communications Engineering Student"
					place="Faculty of Engineering, Alexandria University"
					dates="September 2019 - Present"
					list={[
						"Pursuing B.E. in Computer and Communications Engineering.",

						"Expected Graduation Date : June 2024.",
						"3.32 GPA.",
					]}
				/>
				{/* <div className={styles["timeline-bar"]}>
					<div className={styles["timeline-point"]}></div>
				</div> */}
				<TimelineItem
					heading="Intern D&I Data Scientist"
					place="SLB - Schlumberger"
					dates="July 2023 - August 2023"
					list={[
						"Cleaned and preprocessed large datasets thoroughly, ensuring data integrity for subsequent analysis.",
						"Developed machine learning models to extract valuable insights from complex datasets.",
						"Utilized both Python code and Dataiku DSS software interface for data manipulation and analysis.",
						"Worked on setting up and administering Linux servers as well as deploying enterprise-scale databases.",
					]}
				/>
				{/* <div className={styles["timeline-bar"]}>
					<div className={styles["timeline-point"]}></div>
				</div> */}
				<TimelineItem
					id="start"
					heading="IGCSE Graduate"
					place="AIS - Alexandria International School"
					dates="June 2019"
					list={["Graduated with 13 subjects total, all A*."]}
				/>
			</div>
		</div>
	);
};

export default Timeline;
