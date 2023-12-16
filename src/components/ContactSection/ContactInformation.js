import styles from "./ContactInformation.module.css";
import { ReactComponent as Gmail } from "../../assets/icons/gmail.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import useAnimate from "../../hooks/use-animate";
import Icon from "../Miscellaneous/Icon";
import ListItem from "../Miscellaneous/ListItem";

const ContactInformation = () => {
	const infoHeadingRef = useAnimate("animate", false);
	const infoParagraphRef = useAnimate("animate", false);

	return (
		<div className={styles["contact-information"]}>
			<div className={styles["info-container"]}>
				<h5
					ref={infoHeadingRef}
					className={`display-6 ${styles["info-heading"]}`}>
					Contact me
				</h5>
				<div
					ref={infoParagraphRef}
					className={styles["info-paragraph"]}>
					<p className="lead">
						I would love to hear from you. You can reach me through
						email or give me a call. Alternatively, you can fill out
						this form and I'll get back to you as soon as possible.{" "}
					</p>
				</div>
				<ListItem className={styles["info-item"]}>
					<Icon link={true} to="tel:+201095536781" alt="Phone">
						<Phone
							fill="#212529"
							height="30px"
							width="30px"
							className={styles["info-icon"]}
						/>
					</Icon>
					<p className={styles["info-text"]}>
						<a
							className={`${styles["info-link"]}`}
							href="tel:+201095536781">
							+20 109 553 6781
						</a>
					</p>
				</ListItem>
				<ListItem className={styles["info-item"]}>
					<Icon link={true} to="mailto:mohammad.helaly@gmail.com">
						<Gmail
							fill="#212529"
							height="30px"
							width="30px"
							className={styles["info-icon"]}
						/>
					</Icon>
					<p className={styles["info-text"]}>
						<a
							className={`${styles["info-link"]}`}
							href="mailto:mohammad.helaly@gmail.com">
							mohammad.helaly@gmail.com
						</a>
					</p>
				</ListItem>
			</div>
		</div>
	);
};

export default ContactInformation;
