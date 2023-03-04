import { FC } from "react";

import styles from "./ErrorMessage.module.scss";

const ErrorMessage: FC = () => {
	return <p className={styles.error}>Something went wrong.</p>;
};

export default ErrorMessage;
