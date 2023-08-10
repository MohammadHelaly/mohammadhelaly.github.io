import styles from "./ContactInformation.module.css";
import gmailIcon from "../../assets/icons/gmail.jpg";
import phoneIcon from "../../assets/icons/phone.svg";
import useAnimate from "../../hooks/use-animate";
import Icon from "../Miscellaneous/Icon";

const ContactInformation = () => {
	const infoHeadingRef = useAnimate(styles["animate-info-heading"], false);
	const infoParagraphRef = useAnimate(
		styles["animate-info-paragraph"],
		false
	);
	const infoItemRef1 = useAnimate(styles["animate-info-item"], false);
	const infoItemRef2 = useAnimate(styles["animate-info-item"], false);

	return (
		<div className={styles["contact-information"]}>
			<div className={styles["info-container"]}>
				<h3
					ref={infoHeadingRef}
					className={`display-6 ${styles["info-heading"]}`}>
					Contact me
				</h3>
				<div
					ref={infoParagraphRef}
					className={styles["info-paragraph"]}>
					<p className="lead line">
						I would love to hear from you. You can reach me through
						email or give me a call. Alternatively, you can fill out
						this form and I'll get back to you as soon as possible.{" "}
					</p>
				</div>
				<div ref={infoItemRef1} className={styles["info-item"]}>
					<Icon
						link={false}
						src={phoneIcon}
						alt="Phone"
						iconClassName={`dark-icon ${styles["info-icon"]}`}
					/>
					<p className={`lead line ${styles["info-text"]}`}>
						+201095536781
					</p>
				</div>
				<div ref={infoItemRef2} className={styles["info-item"]}>
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
				</div>
			</div>
		</div>
	);
};

export default ContactInformation;
