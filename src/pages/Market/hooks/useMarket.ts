import { useState } from "react";

import { API_ENDPOINTS } from "@configs/api";
import { useHttp } from "@hooks/useHttp";
import { ICoinListItem } from "@interfaces/coinListItem.interface";

export const useMarket = () => {
	const [coinList, setCoinList] = useState<ICoinListItem[]>([]);
	const { request, process, setProcess, clearError } = useHttp();
	const [page, setPage] = useState<number>(1);
	const [hasMore, setHasMore] = useState<boolean>(true);

	const fetchCoins = (page: number) => {
		clearError();
		request({
			url: API_ENDPOINTS.COINS(page),
		})
			.then((data) => {
				setCoinList((prevState) => [...prevState, ...data]);
				if (data.length < 8) setHasMore(false);
			})
			.then(() => setProcess("succeeded"))
			.then(() => setPage((prevState) => prevState + 1));
	};

	return {
		coinList,
		process,
		page,
		hasMore,
		fetchCoins,
	};
};
