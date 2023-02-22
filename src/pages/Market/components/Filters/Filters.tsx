import { FC } from "react";

import cn from "classnames";

import styles from "./Filters.module.scss";
import { filterList } from "./FiltersData";
import FilterItem from "../FilterItem";

export type IFilter = {
	id: string;
	value: string;
};

export type IFilters = {
	filters?: IFilter[];
	activeFilter: string;
} & React.ButtonHTMLAttributes<HTMLUListElement>;

const Filters: FC<IFilters> = ({
	filters = filterList,
	activeFilter,
	className,
	...otherProps
}) => {
	return (
		<ul
			className={cn(styles.list, {
				[className!]: className,
			})}
			{...otherProps}
		>
			{filters.map((filter) => (
				<FilterItem
					activeFilter={activeFilter}
					key={filter.id}
					value={filter.value}
					onChose={() => {}}
				/>
			))}
		</ul>
	);
};

export default Filters;
