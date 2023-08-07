import Headshot from "./Headshot";
import SectionHeader from "../Miscellaneous/SectionHeader";
import ListItem from "../Miscellaneous/ListItem";
import styles from "./Bio.module.css";

const Bio = () => {
	return (
		<div className={styles["about-me"]}>
			<SectionHeader
				titleText="ABOUT ME"
				subtitleText="Hi, I'm Mohammad..."
			/>
			<div className={`row ${styles["bio"]}`}>
				<Headshot />
				<div className={`col-sm-12 col-lg-5  ${styles["bio-text"]}`}>
					<ul>
						<ListItem className="lead line">
							I'm pursuing my B.E. in Computer and Communications
							Engineering at Alexandria University.
						</ListItem>
						<ListItem className="lead line">
							I'm passionate about software development with a
							strong interest in machine learning.
						</ListItem>
						<ListItem className="lead line">
							I'm eager to contribute to innovative solutions and
							collaborate with industry peers.
						</ListItem>
						<ListItem className="lead bottom-lead line">
							I'm committed to continuous learning and real-world
							problem-solving.
						</ListItem>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Bio;
