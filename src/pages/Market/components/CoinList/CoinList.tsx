import { FC } from "react";

import { ICoin } from "@interfaces/coin.interface";
import { changeFormatter } from "@utils/changeFormater";
import { priceFormatter } from "@utils/priceFormater";
import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./CoinList.module.scss";
import Card from "../Card";

type CoinListProps = {
	coinList: ICoin[];
};

const CoinList: FC<CoinListProps> = ({ coinList }) => {
	return (
		<ul className={styles.list}>
			{coinList.map((coin) => {
				const priceChange = coin.price_change_percentage_24h;

				return (
					<Link
						to={`/coin/${coin.id}`}
						className={styles.link}
						key={coin.id}
					>
						<Card
							image={coin.image}
							title={coin.name}
							subtitle={coin.symbol.toUpperCase()}
						>
							<div className={styles.finance}>
								<p className={styles.price}>
									{priceFormatter.format(coin.current_price)}
								</p>
								<p
									className={cn(
										styles.price,
										styles.price_change,
										{
											[styles.price_change_red]:
												priceChange < 0,
										}
									)}
								>
									{priceChange > 0 ? "+" : ""}
									{changeFormatter.format(
										coin.price_change_percentage_24h
									)}
								</p>
							</div>
						</Card>
					</Link>
				);
			})}
		</ul>
	);
};

export default CoinList;
