import { FC, useEffect, useState } from "react";

import { ReactComponent as SearchIcon } from "@assets/icons/search.svg";
import { API_ENDPOINTS } from "@configs/api";
import { useHttp } from "@hooks/useHttp";
import { ICoin } from "@interfaces/coin.interface";
import cn from "classnames";

import Card from "./components/Card";
import CoinList from "./components/CoinList";
import Filters from "./components/Filters";
import Input from "./components/Input";
import MultiDropdown from "./components/MultiDropdown";
import styles from "./Market.module.scss";

const Market: FC = () => {
	const [coinList, setCoinList] = useState<ICoin[]>([]);
	const { request, process, setProcess, clearError } = useHttp();

	useEffect(() => {
		request({
			url: `${API_ENDPOINTS.COINS}markets?vs_currency=usd&per_page=10&page=1`,
		}).then((data) => setCoinList(data));
		setProcess("succeeded");
	}, []);

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
					<div className={cn("container", styles.block)}>
						<p className={styles.text}>Coins</p>
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
