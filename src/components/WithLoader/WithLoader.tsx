import React from "react";

import styles from "./WithLoader.module.scss";
import Loader from "../Loader";

export type WithLoaderProps = React.PropsWithChildren<{
	loading: boolean;
}>;

const WithLoader: React.FC<WithLoaderProps> = ({ loading, children }) => {
	return (
		<div className={styles.wrapper}>
			{loading && <Loader className={styles.inner_loader} />}
			{children}
		</div>
	);
};

export default WithLoader;
