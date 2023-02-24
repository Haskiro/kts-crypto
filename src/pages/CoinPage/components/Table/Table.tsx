import { FC } from "react";

import { TableItem } from "@pages/CoinPage/types/Coin.type";
import cn from "classnames";

import styles from "./Table.module.scss";

type TableProps = {
	table: TableItem[];
};

const Table: FC<TableProps> = ({ table }) => {
	return (
		<ul className={styles.list}>
			{table.map((item) => (
				<li className={styles.item} key={item.name}>
					<p className={cn(styles.text, styles.text_grey)}>
						{item.name}
					</p>
					<p className={styles.text}>${item.value}</p>
				</li>
			))}
		</ul>
	);
};

export default Table;
