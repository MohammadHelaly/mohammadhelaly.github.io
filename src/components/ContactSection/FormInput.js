import useAnimate from "../../hooks/use-animate";
import styles from "./FormInput.module.css";

const FormInput = (props) => {
	const { type, name, id, label, register, required, error } = props;
	const elementRef = useAnimate("animate-form", false);

	return (
		<div
			ref={elementRef}
			className={`form-floating mb-4 ${styles["form-control"]}`}>
			{type === "customMessage" ? (
				<textarea
					ref={elementRef}
					className={`form-control ${styles["input"]} ${
						error ? `${styles["invalid-input"]} is-invalid` : ""
					}`}
					name={name}
					id={id}
					cols="32"
					rows="4"
					{...register(name, { required: required })}></textarea>
			) : (
				<input
					type={type}
					className={`form-control ${styles["input"]} ${
						error ? `${styles["invalid-input"]} is-invalid` : ""
					}`}
					name={name}
					id={id}
					{...register(name, { required: required })}
				/>
			)}
			<label
				className={`${styles["label"]} ${
					error ? styles["invalid-label"] : ""
				}`}
				htmlFor={id}>
				{label}
			</label>
			{/* {<p className={styles["warning"]}>{error?.message}</p>} */}
		</div>
	);
};

export default FormInput;
