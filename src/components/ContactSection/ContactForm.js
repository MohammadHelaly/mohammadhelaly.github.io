import styles from "./ContactForm.module.css";
import FormInput from "./FormInput";
import useInput from "../../hooks/use-input";
import useAnimate from "../../hooks/use-animate";

const ContactForm = () => {
	const buttonRef = useAnimate(styles["animate"], false);

	const enteredNameValidationFunction = (enteredValue) =>
		enteredValue.trim().length !== 0;

	const enteredEmailValidationFunction = (enteredValue) =>
		enteredValue.trim().length !== 0 &&
		enteredValue.includes("@") &&
		enteredValue.includes(".");

	const enteredMessageValidationFunction = (enteredValue) =>
		enteredValue.trim().length !== 0;

	const {
		enteredValue: enteredName,
		enteredValueIsValid: enteredNameIsValid,
		enteredValueIsInvalid: enteredNameIsInvalid,
		enteredValueChangeHandler: enteredNameChangeHandler,
		enteredValueBlurHandler: enteredNameBlurHandler,
		resetInput: resetNameInput,
	} = useInput(enteredNameValidationFunction);

	const {
		enteredValue: enteredMessage,
		enteredValueIsValid: enteredMessageIsValid,
		enteredValueIsInvalid: enteredMessageIsInvalid,
		enteredValueChangeHandler: enteredMessageChangeHandler,
		enteredValueBlurHandler: enteredMessageBlurHandler,
		resetInput: resetMessageInput,
	} = useInput(enteredMessageValidationFunction);

	const {
		enteredValue: enteredEmail,
		enteredValueIsValid: enteredEmailIsValid,
		enteredValueIsInvalid: enteredEmailIsInvalid,
		enteredValueChangeHandler: enteredEmailChangeHandler,
		enteredValueBlurHandler: enteredEmailBlurHandler,
		resetInput: resetEmailInput,
	} = useInput(enteredEmailValidationFunction);

	let formIsValid = false;

	if (enteredNameIsValid && enteredMessageIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (
			!enteredNameIsValid &&
			!enteredMessageIsValid &&
			!enteredEmailIsValid
		) {
			return;
		} else {
			const subject = encodeURIComponent("Contact Form Submission");
			const body = encodeURIComponent(
				`Name: ${enteredName}\nEmail: ${enteredEmail}\nMessage: ${enteredMessage}`
			);
			const mailtoUrl = `mailto:mohammad.helaly@gmail.com?subject=${subject}&body=${body}`;

			window.open(mailtoUrl);
			resetNameInput();
			resetMessageInput();
			resetEmailInput();
			// console.log(enteredName);
			// console.log(enteredMessage);
			// console.log(enteredEmail);
		}
	};

	return (
		<form
			onSubmit={formSubmitHandler}
			className={styles["contact-form"]}
			id="contact-form"
			method="POST">
			<FormInput
				label="Name *"
				id="name"
				name="name"
				type="text"
				value={enteredName}
				onChange={enteredNameChangeHandler}
				onBlur={enteredNameBlurHandler}
				isInvalid={enteredNameIsInvalid}
				// warning="Please enter a valid name."
			/>
			<FormInput
				label="Email *"
				id="email"
				name="email"
				type="email"
				value={enteredEmail}
				onChange={enteredEmailChangeHandler}
				onBlur={enteredEmailBlurHandler}
				isInvalid={enteredEmailIsInvalid}
				// warning="Please enter a valid email."
			/>
			<FormInput
				label="Message *"
				id="message"
				name="message"
				type="customMessage"
				value={enteredMessage}
				onChange={enteredMessageChangeHandler}
				onBlur={enteredMessageBlurHandler}
				isInvalid={enteredMessageIsInvalid}
				// warning="Please write a message."
			/>
			<button
				id="contact-form-button"
				ref={buttonRef}
				type="submit"
				// disabled={!formIsValid}
				className={`btn btn-outline-dark btn-sm ${styles["form-button"]}`}>
				Send
			</button>
		</form>
	);
};

export default ContactForm;
