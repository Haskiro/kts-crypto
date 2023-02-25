import { useState } from "react";

import { API_ENDPOINTS } from "@configs/api";
import { useHttp } from "@hooks/useHttp";
import { _transformCoinData } from "@utils/transformCoinData";

import { Coin } from "../types/Coin.type";

export const useCoinPage = () => {
	const { request, process, setProcess } = useHttp();
	const [coin, setCoin] = useState<Coin | null>(null);

	const fetchSingleCoin = (id: string) => {
		request({
			url: API_ENDPOINTS.SINGLE_COIN(id!),
		})
			.then((data) => setCoin(_transformCoinData(data, "usd")))
			.then(() => setProcess("succeeded"));
	};

	return { fetchSingleCoin, process, coin };
};
