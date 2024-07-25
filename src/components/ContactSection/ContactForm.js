import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "./FormInput";
import Notifications from "./Notifications";
import useAnimate from "../../hooks/use-animate";
import styles from "./ContactForm.module.css";

const schema = z.object({
	name: z.string().nonempty({ message: "Please enter your name." }),
	email: z
		.string()
		.nonempty({ message: "Please enter your email." })
		.email({ message: "Please enter a valid email." }),
	message: z.string().nonempty({ message: "Please enter your message." }),
});

const ContactForm = () => {
	const formButtonRef = useAnimate("animate-form", false);
	const [successfullSubmit, setSuccessfullSubmit] = useState(false);
	const [errorSubmit, setErrorSubmit] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
		mode: "onTouched",
		resolver: zodResolver(schema),
	});

	const formSubmitHandler = (data) => {
		const { name, email, message } = data;

		// const subject = encodeURIComponent("Contact Form Submission");
		// const body = encodeURIComponent(
		// 	`Name: ${name}\nEmail: ${email}\nMessage: ${message}`
		// );

		// const mailtoUrl = `mailto:mohammad.helaly@gmail.com?subject=${subject}&body=${body}`;
		// window.open(mailtoUrl);

		setSuccessfullSubmit(false);
		setErrorSubmit(false);

		const formData = new FormData();
		formData.append("name", name);
		formData.append("email", email);
		formData.append("message", message);

		fetch(process.env.REACT_APP_CONTACT_FORM_ENDPOINT, {
			method: "POST",
			body: formData,
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				if (response.status === 200) {
					setSuccessfullSubmit(true);
				} else {
					setErrorSubmit(true);
				}

				setTimeout(() => {
					setSuccessfullSubmit(false);
					setErrorSubmit(false);
				}, 5000);
			})
			.catch((error) => {
				setErrorSubmit(true);

				setTimeout(() => {
					setSuccessfullSubmit(false);
					setErrorSubmit(false);
				}, 5000);
			});

		reset();
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(formSubmitHandler)}
				className={styles["contact-form"]}
				id="contact-form"
				method="POST">
				<FormInput
					label="Name *"
					id="name"
					name="name"
					type="text"
					register={register}
					required
					error={errors.name}
				/>
				<FormInput
					label="Email *"
					id="email"
					name="email"
					type="email"
					register={register}
					required
					error={errors.email}
				/>
				<FormInput
					label="Message *"
					id="message"
					name="message"
					type="customMessage"
					register={register}
					required
					error={errors.message}
				/>
				<button
					id="contact-form-button"
					ref={formButtonRef}
					type="submit"
					disabled={successfullSubmit || errorSubmit}
					className={`btn btn-outline btn-sm ${styles["form-button"]}`}>
					Send
				</button>
			</form>
			<Notifications
				successfullSubmit={successfullSubmit}
				errorSubmit={errorSubmit}
			/>
		</>
	);
};

export default ContactForm;
