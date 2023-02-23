import { FC, useEffect, useState } from "react";

import { ReactComponent as SearchIcon } from "@assets/icons/search.svg";
import { API_ENDPOINTS } from "@configs/api";
import { useHttp } from "@hooks/useHttp";
import { ICoinListItem } from "@interfaces/coinListItem.interface";
import cn from "classnames";

import Button from "./components/Button";
import CoinList from "./components/CoinList";
import Filters from "./components/Filters";
import Input from "./components/Input";
import MultiDropdown from "./components/MultiDropdown";
import styles from "./Market.module.scss";

const Market: FC = () => {
	const [coinList, setCoinList] = useState<ICoinListItem[]>([]);
	const { request, process, setProcess, clearError } = useHttp();
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		request({
			url: API_ENDPOINTS.COINS(page),
		}).then((data) => setCoinList(data));
		setProcess("succeeded");
		// eslint-disable-next-line
	}, []);

	return (
		<div className={styles.wrapper}>
			<header className={cn("container", styles.header)}>
				<Input value="" onChange={() => {}} />
				<Button className={styles.button}>
					<SearchIcon className={styles.icon} />
				</Button>
			</header>
			<main className={styles.main}>
				<div className={styles.control}>
					<div className={cn("container", styles.block)}>
						<h1 className={styles.text}>Coins</h1>
						<MultiDropdown onChange={() => {}} value={[]} />
					</div>
					<Filters activeFilter="Gainer" className="container" />
				</div>
				<div className={cn("container", styles.content)}>
					<CoinList coinList={coinList} />
				</div>
			</main>
		</div>
	);
};

export default Market;
