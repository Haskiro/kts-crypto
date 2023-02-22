import React from "react";

import cn from "classnames";

import styles from "./Input.module.scss";

export type InputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"onChange" | "value"
> & {
	/** Значение поля */
	value: string;
	/** Callback, вызываемый при вводе данных в поле */
	onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
	value,
	onChange,
	className,
	disabled,
	...otherProps
}) => {
	return (
		<input
			type="text"
			className={cn(styles.input, {
				[styles.input_disabled]: disabled,
				[className!]: className,
			})}
			disabled={disabled}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder="Search Cryptocurrency"
			{...otherProps}
		/>
	);
};

export default Input;
