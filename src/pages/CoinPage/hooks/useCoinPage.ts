import { useState } from "react";

import { API_ENDPOINTS } from "@configs/api";
import { useHttp } from "@hooks/useHttp";
import { _transformCoinData } from "@utils/transformCoinData";

export type TableItem = {
	name: string;
	value: string;
};

export type Coin = {
	name: string;
	symbol: string;
	image: string;
	current_price: string;
	price_change_in_currency: number;
	price_change_percentage: number;
	table: TableItem[];
	description: string;
};

export const useCoinPage = () => {
	const { request, process, setProcess } = useHttp();
	const [coin, setCoin] = useState<Coin | null>(null);

	const fetchSingleCoin = (id: string) => {
		request({
			url: API_ENDPOINTS.SINGLE_COIN(id!),
		})
			.then((data) => setCoin(_transformCoinData(data)))
			.then(() => setProcess("succeeded"));
	};

	return { fetchSingleCoin, process, coin };
};
