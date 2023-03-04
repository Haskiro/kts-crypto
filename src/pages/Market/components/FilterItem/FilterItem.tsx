import { FC } from "react";

import cn from "classnames";

import styles from "./FilterItem.module.scss";

type IFilterItem = {
	activeFilter: string;
	value: string;
	onChose: (value: string) => void;
} & React.ButtonHTMLAttributes<HTMLLIElement>;

const FilterItem: FC<IFilterItem> = ({
	value,
	activeFilter,
	onChose,
	className,
	...otherProps
}) => {
	return (
		<li
			className={cn(styles.filter, {
				[styles.filter_active]: value === activeFilter,
				[className!]: className,
			})}
			onClick={() => onChose(value)}
			{...otherProps}
			tabIndex={0}
		>
			{value}
		</li>
	);
};

export default FilterItem;
