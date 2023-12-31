import styles from "./Notifications.module.css";
import { ReactComponent as CloseMenu } from "../../assets/icons/close-menu-black.svg";

const Notifications = (props) => {
	const { successfullSubmit, errorSubmit } = props;

	return (
		<div
			className={`toast-container ${styles["toast-notification-container"]}`}>
			<div
				id="contact-form-toast"
				className={`toast ${
					successfullSubmit || errorSubmit ? "show" : "hide"
				} ${styles["toast-notification"]} ${
					errorSubmit ? styles["error-notification"] : ""
				}`}
				role="alert"
				aria-live="assertive"
				aria-atomic="true">
				<div
					className={`toast-header ${styles["toast-notification-header"]}`}>
					<button
						type="button"
						data-bs-dismiss="toast"
						aria-label="Close"
						className={`${styles["toast-notification-button"]}`}>
						<CloseMenu fill="#000000" height="20px" width="20px" />
					</button>
				</div>
				<div className="toast-body">
					{successfullSubmit ? (
						<p>
							Thanks for reaching out! I'll get back to you as
							soon as possible.
						</p>
					) : errorSubmit ? (
						<p>Something went wrong. Please try again.</p>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Notifications;
