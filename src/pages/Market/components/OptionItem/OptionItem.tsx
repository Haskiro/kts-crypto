import { FC } from "react";

import cn from "classnames";

import styles from "./OptionItem.module.scss";
import { Option } from "../MultiDropdown";

type IOptionProps = {
	value: Option[];
	item: Option;
	handleItemClick: (item: Option) => void;
};

const OptionItem: FC<IOptionProps> = ({ value, item, handleItemClick }) => {
	return (
		<li
			className={cn(styles.option, {
				[styles.option_checked]: value.some(
					(val) => val.key === item.key
				),
			})}
			key={item.key}
			onClick={() => handleItemClick(item)}
		>
			{item.value}
		</li>
	);
};

export default OptionItem;
