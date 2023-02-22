import React from "react";

import cn from "classnames";

import { Loader, LoaderSize } from "../Loader/Loader";
import "./Button.scss";

export type ButtonProps = React.PropsWithChildren<{
	/**
	 * Если true, то внутри кнопки вместе с children отображается компонент Loader
	 * Также кнопка должна переходить в состояние disabled
	 */
	loading?: boolean;
}> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = (props) => {
	const {
		loading = false,
		children,
		disabled,
		className,
		...otherProps
	} = props;
	return (
		<button
			className={cn("button", {
				button_disabled: disabled || loading,
				[className!]: className,
			})}
			disabled={disabled || loading}
			{...otherProps}
		>
			{loading && (
				<Loader size={LoaderSize.s} className="button__loader" />
			)}
			{children}
		</button>
	);
};
