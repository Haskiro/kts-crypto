import React from "react";

import "./WithLoader.scss";
import { Loader } from "../Loader/Loader";

export type WithLoaderProps = React.PropsWithChildren<{
	loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({
	loading,
	children,
}) => {
	return (
		<div className="loader-wrapper">
			{loading && <Loader className="inner-loader" />}
			{children}
		</div>
	);
};
