import React from "react";

import cn from "classnames";

import styles from "./Card.module.scss";

export type CardProps = {
	/** URL изображения */
	image: string;
	/** Заголовок карточки */
	title: string;
	/** Подзаголовок карточки */
	subtitle: React.ReactNode;
	/** Содержимое карточки (футер/боковая часть), может быть пустым */
	content?: React.ReactNode;
	/** Клик на карточку */
	onClick?: React.MouseEventHandler;
};

const Card: React.FC<CardProps> = ({
	image,
	title,
	subtitle,
	content,
	onClick,
}) => {
	return (
		<div className={styles.card} onClick={onClick}>
			<div className={styles.info}>
				<img
					className={styles.image}
					height={40}
					width={40}
					src={image}
					alt={title}
				/>
				<div className={styles.block}>
					<p className={styles.text}>{title}</p>
					<p className={cn(styles.text, styles.subtitle)}>
						{subtitle}
					</p>
				</div>
			</div>
			{content}
		</div>
	);
};

export default Card;
