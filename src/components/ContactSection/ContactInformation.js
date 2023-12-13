import styles from "./ContactInformation.module.css";
import gmailIcon from "../../assets/icons/gmail.jpg";
import phoneIcon from "../../assets/icons/phone.svg";
import useAnimate from "../../hooks/use-animate";
import Icon from "../Miscellaneous/Icon";
import ListItem from "../Miscellaneous/ListItem";

const ContactInformation = () => {
	const infoHeadingRef = useAnimate(styles["animate-info-heading"], false);
	const infoParagraphRef = useAnimate(
		styles["animate-info-paragraph"],
		false
	);

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
					<Icon
						link={false}
						src={phoneIcon}
						alt="Phone"
						iconClassName={`dark-icon ${styles["info-icon"]}`}
					/>
					<p className={`lead line ${styles["info-text"]}`}>
						+201095536781
					</p>
				</ListItem>
				<ListItem className={styles["info-item"]}>
					<Icon
						link={true}
						to="mailto:mohammad.helaly@gmail.com"
						src={gmailIcon}
						alt="Gmail"
						iconClassName={`dark-icon ${styles["info-icon"]} ${styles["info-gm-icon"]}`}
						linkClassName={`icon-link ${styles["info-icon-link"]}`}
					/>
					<p className={`lead line ${styles["info-text"]}`}>
						mohammad.helaly@gmail.com
					</p>
				</ListItem>
			</div>
		</div>
	);
};

export default ContactInformation;
