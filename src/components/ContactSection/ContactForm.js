import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "./FormInput";
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
	const formButtonRef = useAnimate(styles["animate"], false);

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

		const subject = encodeURIComponent("Contact Form Submission");
		const body = encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\nMessage: ${message}`
		);

		const mailtoUrl = `mailto:mohammad.helaly@gmail.com?subject=${subject}&body=${body}`;
		window.open(mailtoUrl);

		reset();
	};

	return (
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
				// disabled={IsInvalid}
				className={`btn btn-outline-dark btn-sm ${styles["form-button"]}`}>
				Send
			</button>
		</form>
	);
};

export default ContactForm;
