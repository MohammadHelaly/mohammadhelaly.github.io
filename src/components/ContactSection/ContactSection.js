import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
	return (
		<section id="contact">
			<div className={styles["contact-section"]}>
				<div className="container">
					<div className={` ${styles["contact-container"]}`}>
						<ContactInformation />
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
