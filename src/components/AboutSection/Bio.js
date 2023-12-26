import Headshot from "./Headshot";
import SectionHeader from "../Miscellaneous/SectionHeader";
import ListItem from "../Miscellaneous/ListItem";
import styles from "./Bio.module.css";

const Bio = () => {
	return (
		<div className={styles["about-me"]}>
			<div className="container">
				<SectionHeader
					titleText="About me"
					subtitleText="Hi, I'm Mohammad."
				/>
				<div className={`${styles["bio"]}`}>
					<Headshot />
					<div className={`${styles["bio-text"]} text-muted`}>
						<ListItem>
							<p>
								I'm pursuing my B.E. in Computer and
								Communications Engineering at Alexandria
								University.
							</p>
						</ListItem>
						<ListItem>
							<p>
								I'm passionate about software development with a
								strong interest in data science and machine
								learning.
							</p>
						</ListItem>
						<ListItem>
							<p>
								I'm eager to contribute to innovative solutions
								and collaborate with industry peers.
							</p>
						</ListItem>
						<ListItem>
							<p>
								I'm committed to continuous learning and
								real-world problem-solving.
							</p>
						</ListItem>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bio;
