import ListItem from "../Miscellaneous/ListItem";
import styles from "./Services.module.css";
import { ReactComponent as WebDevelopment } from "../../assets/icons/web-development.svg";
import { ReactComponent as MobileDevelopment } from "../../assets/icons/mobile-development.svg";
import { ReactComponent as MachineLearning } from "../../assets/icons/machine-learning.svg";

const Services = () => {
	return (
		<div className={styles["services-container"]}>
			<div className="container">
				<div className={styles["services"]}>
					<ListItem className={styles["service"]}>
						<WebDevelopment
							fill="#212529"
							className={styles["service-icon"]}
						/>
						<h3 className={styles["service-title"]}>
							Web Development
						</h3>
						<p className="text-muted">
							Building responsive websites and web applications.
							Giving users the best experience possible.
						</p>
					</ListItem>
					<ListItem className={styles["service"]}>
						<MobileDevelopment
							fill="#212529"
							className={styles["service-icon"]}
						/>
						<h3 className={styles["service-title"]}>
							Mobile Development
						</h3>
						<p className="text-muted">
							Developing cross-platform mobile applications.
							Providing users with a seamless experience.
						</p>
					</ListItem>
					<ListItem className={styles["service"]}>
						<MachineLearning
							fill="#212529"
							className={styles["service-icon"]}
						/>
						<h3 className={styles["service-title"]}>
							Data Science & Machine Learning
						</h3>
						<p className="text-muted">
							Designing intelligent systems that learn from data.
							Extracting valuable insights and making accurate
							predictions.
						</p>
					</ListItem>
				</div>
			</div>
		</div>
	);
};

export default Services;
