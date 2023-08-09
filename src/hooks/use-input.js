import { useState } from "react";

const useInput = (inputValidationFunction) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [enteredValueWasTouched, setEnteredValueWasTouched] = useState(false);

	const enteredValueIsValid = inputValidationFunction(enteredValue);
	const enteredValueIsInvalid =
		!enteredValueIsValid && enteredValueWasTouched;

	const enteredValueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const enteredValueBlurHandler = (event) => {
		setEnteredValueWasTouched(true);
	};

	const resetInput = () => {
		setEnteredValue("");
		setEnteredValueWasTouched(false);
	};

	return {
		enteredValue,
		enteredValueIsValid,
		enteredValueIsInvalid,
		enteredValueChangeHandler,
		enteredValueBlurHandler,
		resetInput,
	};
};

export default useInput;
