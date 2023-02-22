import { FC } from "react";

import { ICoin } from "@interfaces/coin.interface";
import cn from "classnames";

import styles from "./CoinList.module.scss";
import Card from "../Card";

type CoinListProps = {
	coinList: ICoin[];
};

const CoinList: FC<CoinListProps> = ({ coinList }) => {
	return (
		<ul className={styles.list}>
			{coinList.map((coin) => (
				<Card
					image={coin.image}
					key={coin.id}
					title={coin.name}
					subtitle={coin.symbol.toUpperCase()}
				>
					<div className={styles.finance}>
						<p className={styles.price}>${coin.current_price}</p>
						<p className={cn(styles.price, styles.price_change)}>
							+{coin.price_change_percentage_24h}%
						</p>
					</div>
				</Card>
			))}
		</ul>
	);
};

export default CoinList;
