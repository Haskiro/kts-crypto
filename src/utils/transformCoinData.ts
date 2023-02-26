import { SingleCoin } from "src/types/singleCoin.type";

import { changeFormatter, priceFormatter } from "./formatters";

export const _transformCoinData = (coin: SingleCoin, currency: string) => {
	return {
		name: coin.name,
		symbol: coin.symbol,
		image: coin.image.thumb,
		current_price: priceFormatter(coin.market_data.current_price.usd, {
			maxDigits: 2,
			currency: currency,
		}),
		price_change_in_currency: Number(
			changeFormatter(coin.market_data.price_change_24h_in_currency.usd, {
				maxDigits: 3,
			})
		),
		price_change_percentage: Number(
			changeFormatter(
				coin.market_data.price_change_percentage_24h / 100,
				{
					maxDigits: 3,
				}
			)
		),
		table: [
			{
				name: "Market Cap",
				value: priceFormatter(coin.market_data.market_cap.usd, {
					maxDigits: 0,
					currency: currency,
				}),
			},
			{
				name: "Fully Diluted Valuation",
				value: priceFormatter(
					coin.market_data.fully_diluted_valuation.usd,
					{
						maxDigits: 0,
						currency: currency,
					}
				),
			},
			{
				name: "Circulating Supply",
				value: priceFormatter(coin.market_data.circulating_supply, {
					maxDigits: 0,
				}),
			},
			{
				name: "Total Supply",
				value: priceFormatter(coin.market_data.total_supply, {
					maxDigits: 0,
				}),
			},
			{
				name: "Max Supply",
				value: priceFormatter(coin.market_data.max_supply, {
					maxDigits: 0,
				}),
			},
		],

		description: coin.description.en,
	};
};
