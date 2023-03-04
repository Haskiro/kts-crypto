import React from "react";

import Loader, { LoaderSize } from "@components/Loader";
import cn from "classnames";

import styles from "./Button.module.scss";

export type ButtonProps = React.PropsWithChildren<{
	/**
	 * Если true, то внутри кнопки вместе с children отображается компонент Loader
	 * Также кнопка должна переходить в состояние disabled
	 */
	loading?: boolean;
}> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => {
	const {
		loading = false,
		children,
		disabled,
		className,
		...otherProps
	} = props;
	return (
		<button
			className={cn(styles.button, {
				[styles.button_disabled]: disabled || loading,
				[className!]: className,
			})}
			disabled={disabled || loading}
			{...otherProps}
		>
			{loading && (
				<Loader size={LoaderSize.s} className={styles.button__loader} />
			)}
			{children}
		</button>
	);
};

export default Button;
