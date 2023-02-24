import React, { useState } from "react";

import cn from "classnames";

import styles from "./CheckBox.module.scss";

export type CheckBoxProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"onChange"
> & {
	/** Вызывается при клике на чекбокс */
	onChange: (value: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({
	onChange,
	disabled = false,
	checked = false,
	...otherProps
}) => {
	const [isChecked, setIsChecked] = useState<boolean>(checked);

	const handleClickCheckBox = () => {
		onChange(!isChecked);

		setIsChecked((prevState) => !prevState);
	};
	return (
		<label
			className={cn(styles.chekcbox, {
				[styles.checkbox_disabled]: disabled,
			})}
		>
			<input
				type="checkbox"
				className={styles.checkbox__origin}
				disabled={disabled}
				style={{ display: "none" }}
				checked={isChecked}
				onChange={handleClickCheckBox}
				{...otherProps}
			/>
			<span className={styles.checkbox__custom}></span>
		</label>
	);
};

export default CheckBox;
