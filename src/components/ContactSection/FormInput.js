import useAnimate from "../../hooks/use-animate";
import styles from "./FormInput.module.css";

const FormInput = (props) => {
	const {
		type,
		name,
		id,
		label,
		onBlur,
		onChange,
		value,
		warning,
		isInvalid,
	} = props;
	const elementRef = useAnimate(styles["animate"], false);
	return (
		<div className="form-floating mb-4">
			{type === "customMessage" ? (
				<textarea
					ref={elementRef}
					className={`form-control ${styles["input"]} ${
						isInvalid ? styles["invalid"] : ""
					} ${
						elementRef.current?.className.includes("animate")
							? styles["animate"]
							: ""
					}`}
					name={name}
					id={id}
					onBlur={onBlur}
					onChange={onChange}
					value={value}
					cols="32"
					rows="4"
					required></textarea>
			) : (
				<input
					ref={elementRef}
					type={type}
					className={`form-control ${styles["input"]} ${
						isInvalid ? styles["invalid"] : ""
					} ${
						elementRef.current?.className.includes("animate")
							? styles["animate"]
							: ""
					}`}
					name={name}
					id={id}
					onBlur={onBlur}
					onChange={onChange}
					value={value}
					required
				/>
			)}
			<label
				className={`${styles["label"]} ${
					isInvalid ? styles["invalid-label"] : ""
				}`}
				htmlFor={id}>
				{label}
			</label>
			{isInvalid && <p>{warning}</p>}
		</div>
	);
};

export default FormInput;
