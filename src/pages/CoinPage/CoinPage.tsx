import { FC, ReactNode, useEffect } from "react";

import { ReactComponent as GoBackArrow } from "@assets/icons/goBackArrow.svg";
import { ReactComponent as Star } from "@assets/icons/star.svg";
import ErrorMessage from "@components/ErrorMessage";
import Loader from "@components/Loader";
import WithLoader from "@components/WithLoader";
import { _transformCoinData } from "@utils/transformCoinData";
import cn from "classnames";
import { Link, useParams } from "react-router-dom";

import styles from "./CoinPage.module.scss";
import Table from "./components/Table";
import { useCoinPage } from "./hooks/useCoinPage";

const CoinPage: FC = () => {
	const { id } = useParams();
	const { fetchSingleCoin, coin, process } = useCoinPage();

	useEffect(() => {
		fetchSingleCoin(id!);
		// eslint - disable - next - line;
	}, []);

	return (
		<div className={cn("container", styles.wrapper)}>
			{process === "loading" && (
				<WithLoader loading={true}>
					<div className={styles.loading_block}>
						<Link to="/">
							<GoBackArrow className={styles.arrow} />
						</Link>
					</div>
				</WithLoader>
			)}
			{process === "error" && <ErrorMessage />}
			{process === "succeeded" && (
				<>
					<div className={styles.control}>
						<Link to="/">
							<GoBackArrow className={styles.arrow} />
						</Link>
						<img
							src={coin!.image}
							alt={coin!.name}
							className={styles.image}
							width={24}
							height={24}
						/>
						<h1 className={styles.name}>
							{coin!.name}{" "}
							<span className={styles.name_symbol}>
								({coin!.symbol.toUpperCase()})
							</span>
						</h1>
						<button className={styles.btn}>
							<Star className={styles.star} />
						</button>
					</div>
					<p className={styles.price}>
						{coin!.current_price}
						<span
							className={cn(styles.price_change, {
								[styles.price_change_red]:
									coin!.price_change_in_currency! < 0,
							})}
						>
							{coin!.price_change_in_currency! > 0 ? "+" : ""}
							{coin!.price_change_in_currency!} (
							{Math.abs(coin!.price_change_percentage)}%)
						</span>
					</p>
					<Table table={coin!.table} />
					<section className={styles.description}>
						<h2 className={cn(styles.text, styles.text_heading)}>
							Description
						</h2>
						<p
							className={styles.text}
							dangerouslySetInnerHTML={{
								__html: coin?.description!,
							}}
						></p>
					</section>
				</>
			)}
		</div>
	);
};

export default CoinPage;
