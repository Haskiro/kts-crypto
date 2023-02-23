import { FC, useEffect, useState } from "react";

import { ReactComponent as GoBackArrow } from "@assets/icons/goBackArrow.svg";
import { ReactComponent as Star } from "@assets/icons/star.svg";
import { API_ENDPOINTS } from "@configs/api";
import { useHttp } from "@hooks/useHttp";
import { _transformCoinData } from "@utils/transformCoinData";
import cn from "classnames";
import { Link, useParams } from "react-router-dom";

import styles from "./CoinPage.module.scss";

type Coin = {
	name: string;
	symbol: string;
	image: string;
	current_price: string;
	price_change_in_currency: number;
	price_change_percentage: string;
	market_cap: string;
	fully_diluted_valuation: string;
	circulating_supply: string;
	total_supply: string;
	max_supply: string;
	description: string;
};

const CoinPage: FC = () => {
	const { id } = useParams();
	const { request, process, setProcess } = useHttp();
	const [coin, setCoin] = useState<Coin | null>(null);

	useEffect(() => {
		request({
			url: API_ENDPOINTS.SINGLE_COIN(id!),
		}).then((data) => setCoin(_transformCoinData(data)));

		setProcess("succeeded");
		// eslint-disable-next-line
	}, []);

	return (
		<div className={cn("container", styles.wrapper)}>
			<div className={styles.control}>
				<Link to="/">
					<GoBackArrow className={styles.arrow} />
				</Link>
				<img
					src={coin?.image}
					alt={coin?.name}
					className={styles.image}
					width={24}
					height={24}
				/>
				<h1 className={styles.name}>
					{coin?.name}{" "}
					<span className={styles.name_symbol}>
						({coin?.symbol.toUpperCase()})
					</span>
				</h1>
				<button className={styles.btn}>
					<Star className={styles.star} />
				</button>
			</div>
			<p className={styles.price}>
				{coin?.current_price}
				<span
					className={cn(styles.price_change, {
						[styles.price_change_red]:
							coin?.price_change_in_currency! < 0,
					})}
				>
					{coin?.price_change_in_currency! > 0 ? "+" : "-"}
					{coin?.price_change_in_currency!} (
					{coin?.price_change_percentage})
				</span>
			</p>
			<ul className={styles.list}>
				<li className={styles.item}>
					<p className={cn(styles.text, styles.text_grey)}>
						Market Cap
					</p>
					<p className={styles.text}>${coin?.market_cap}</p>
				</li>
				<li className={styles.item}>
					<p className={cn(styles.text, styles.text_grey)}>
						Fully Diluted Valuation
					</p>
					<p className={styles.text}>
						${coin?.fully_diluted_valuation}
					</p>
				</li>
				<li className={styles.item}>
					<p className={cn(styles.text, styles.text_grey)}>
						Circulating Supply
					</p>
					<p className={styles.text}>{coin?.circulating_supply}</p>
				</li>
				<li className={styles.item}>
					<p className={cn(styles.text, styles.text_grey)}>
						Total Supply
					</p>
					<p className={styles.text}>{coin?.total_supply}</p>
				</li>
				<li className={styles.item}>
					<p className={cn(styles.text, styles.text_grey)}>
						Max Supply
					</p>
					<p className={styles.text}>{coin?.max_supply}</p>
				</li>
			</ul>
			<section className={styles.description}>
				<h2 className={cn(styles.text, styles.text_heading)}>
					Description
				</h2>
				<p
					className={styles.text}
					dangerouslySetInnerHTML={{ __html: coin?.description! }}
				></p>
			</section>
		</div>
	);
};

export default CoinPage;
