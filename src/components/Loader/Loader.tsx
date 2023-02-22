import React from "react";

import "./Loader.scss";
import cn from "classnames";

export enum LoaderSize {
	s = "s",
	m = "m",
	l = "l",
}

export type LoaderProps = {
	loading?: boolean;
	size?: LoaderSize;
	className?: string;
};

export const Loader: React.FC<LoaderProps> = ({
	loading = true,
	size = LoaderSize.m,
	className,
}) => {
	return (
		<>
			{loading && (
				<span
					className={cn("loader", {
						large: size === "l",
						medium: size === "m",
						small: size === "s",
						[className!]: className,
					})}
				></span>
			)}
		</>
	);
};
