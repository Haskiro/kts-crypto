import React from "react";

import cn from "classnames";

import styles from "./Loader.module.scss";

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

const Loader: React.FC<LoaderProps> = ({
	loading = true,
	size = LoaderSize.m,
	className,
}) => {
	return (
		<>
			{loading && (
				<span
					className={cn(styles.loader, {
						[styles.large]: size === "l",
						[styles.medium]: size === "m",
						[styles.small]: size === "s",
						[className!]: className,
					})}
				></span>
			)}
		</>
	);
};

export default Loader;
