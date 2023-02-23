import { FC, useEffect, useState } from "react";

import { API_ENDPOINTS } from "@configs/api";
import { useHttp } from "@hooks/useHttp";
import { ISingleCoin } from "@interfaces/singleCoin.interface";
import { useParams } from "react-router-dom";

import styles from "./CoinPage.module.scss";

const CoinPage: FC = () => {
	const { id } = useParams();
	const { request, clearError, process, setProcess } = useHttp();
	const [coin, setCoin] = useState<ISingleCoin | null>(null);

	useEffect(() => {
		request({
			url: API_ENDPOINTS.SINGLE_COIN(id!),
		}).then(setCoin);

		setProcess("succeeded");
		// eslint-disable-next-line
	}, []);

	return <div></div>;
};

export default CoinPage;
