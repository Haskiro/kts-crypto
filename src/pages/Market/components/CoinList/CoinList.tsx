import { FC } from "react";

import { changeFormatter, priceFormatter } from "@utils/formatters";
import cn from "classnames";
import { Link } from "react-router-dom";
import { CoinListItem } from "src/types/coinListItem.type";

import styles from "./CoinList.module.scss";
import Card from "../Card";

type CoinListProps = {
	coinList: CoinListItem[];
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
									{priceFormatter(coin.current_price, {
										maxDigits: 2,
										currency: "usd",
									})}
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
									{changeFormatter(
										coin.price_change_percentage_24h / 100,
										{ maxDigits: 2 }
									)}
									%
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
