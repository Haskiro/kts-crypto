import React, { useEffect, useRef, useState } from "react";

import { ReactComponent as Arrow } from "@assets/icons/arrow.svg";
import cn from "classnames";

import styles from "./MultiDropdown.module.scss";
import { multidropdown } from "./MultiDropdownData";
import OptionItem from "../OptionItem";

export type Option = {
	/** Ключ варианта, используется для отправки на бек/использования в коде */
	key: string;
	/** Значение варианта, отображается пользователю */
	value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
	/** Массив возможных вариантов для выбора */
	options?: Option[];
	/** Текущие выбранные значения поля, может быть пустым */
	value: Option[];
	/** Callback, вызываемый при выборе варианта */
	onChange: (value: Option[]) => void;
	/** Заблокирован ли дропдаун */
	disabled?: boolean;
	/** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
	pluralizeOptions?: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
	options = multidropdown,
	value,
	onChange,
	disabled = false,
	pluralizeOptions = (value) => {
		if (value.length === 0) {
			return "Chose category";
		} else {
			let stringArray: string[] = [];
			stringArray = value.map((item) => item.value);
			return stringArray.join(", ");
		}
	},
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleDropdownClick = () => setIsOpen((prevIsOpen) => !prevIsOpen);
	const handleItemClick = (item: Option): void => {
		if (clickedItemsRef.current!.some((el) => el.key === item.key)) {
			clickedItemsRef.current = clickedItemsRef.current!.filter(
				(el) => el.key !== item.key
			);
			onChange(clickedItemsRef.current!);
		} else {
			clickedItemsRef.current!.push(item);
			onChange([item]);
		}
	};

	const clickedItemsRef = useRef<Option[] | null>(null);

	useEffect(() => {
		clickedItemsRef.current = value;
	}, [value]);

	return (
		<div className={styles.multidropdown}>
			<div
				className={cn(styles.field, {
					[styles.field_disabled]: disabled,
				})}
				onClick={disabled ? undefined : handleDropdownClick}
				tabIndex={disabled ? -1 : 0}
			>
				<p
					className={cn(styles.text, {
						[styles.text_placeholder]: value.length === 0,
					})}
				>
					{pluralizeOptions(value)}
				</p>
				<button className={styles.btn}>
					<Arrow />
				</button>
			</div>
			{!disabled && isOpen && (
				<ul className={styles.list}>
					{options.map((item) => {
						return (
							<OptionItem
								value={value}
								item={item}
								handleItemClick={handleItemClick}
								key={item.key}
							/>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default MultiDropdown;
