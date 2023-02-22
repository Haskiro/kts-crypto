import React, { useState } from "react";

import "./CheckBox.scss";
import cn from "classnames";

export type CheckBoxProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"onChange"
> & {
	/** Вызывается при клике на чекбокс */
	onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
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
			className={cn("checkbox", {
				checkbox_disabled: disabled,
			})}
		>
			<input
				type="checkbox"
				className="checkbox__origin"
				disabled={disabled}
				style={{ display: "none" }}
				checked={isChecked}
				onChange={handleClickCheckBox}
				{...otherProps}
			/>
			<span className="checkbox__custom"></span>
		</label>
	);
};
