export const API_ENDPOINTS = {
	COINS: (page = 1) =>
		`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=7&page=${page}`,
	CATEGORIES: "https://api.coingecko.com/api/v3/coins/categories/list/",
	SINGLE_COIN: (id: string) =>
		`https://api.coingecko.com/api/v3/coins/${id}?localization=false&sparkline=false&developer_data=false&community_data=false&tickers=false`,
};
