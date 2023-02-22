import { FC } from "react";

import { ReactComponent as SearchIcon } from "@assets/icons/search.svg";
import cn from "classnames";

import Filters from "./components/Filters";
import Input from "./components/Input";
import MultiDropdown from "./components/MultiDropdown";
import styles from "./Market.module.scss";

const Market: FC = () => {
	return (
		<div className={styles.wrapper}>
			<header className={cn("container", styles.header)}>
				<Input value="" onChange={() => {}} />
				<button type="button" className={styles.button}>
					<SearchIcon className={styles.icon} />
				</button>
			</header>
			<main className={styles.main}>
				<div className={styles.control}>
					<div className={cn(styles.block, "container")}>
						<p className={styles.text}>Coins</p>
						<MultiDropdown onChange={() => {}} value={[]} />
					</div>
					<Filters activeFilter="Gainer" className="container" />
				</div>
				<div className={styles.content}></div>
			</main>
		</div>
	);
};

export default Market;
