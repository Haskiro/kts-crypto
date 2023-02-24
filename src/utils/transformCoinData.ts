import { ISingleCoin } from "@interfaces/singleCoin.interface";

import {
	capFormatter,
	changeCurrencyFormatter,
	priceFormatter,
	changePercentageFormatter,
} from "./formatters";

export const _transformCoinData = (coin: ISingleCoin) => {
	return {
		name: coin.name,
		symbol: coin.symbol,
		image: coin.image.thumb,
		current_price: priceFormatter.format(
			coin.market_data.current_price.usd
		),
		price_change_in_currency: Number(
			changeCurrencyFormatter.format(
				coin.market_data.price_change_24h_in_currency.usd
			)
		),
		price_change_percentage: Number(
			changePercentageFormatter.format(
				coin.market_data.price_change_percentage_24h / 100
			)
		),
		table: [
			{
				name: "Market Cap",
				value: capFormatter.format(coin.market_data.market_cap.usd),
			},
			{
				name: "Fully Diluted Valuation",
				value: capFormatter.format(
					coin.market_data.fully_diluted_valuation.usd
				),
			},
			{
				name: "Circulating Supply",
				value: capFormatter.format(coin.market_data.circulating_supply),
			},
			{
				name: "Total Supply",
				value: capFormatter.format(coin.market_data.total_supply),
			},
			{
				name: "Max Supply",
				value: capFormatter.format(coin.market_data.max_supply),
			},
		],

		description: coin.description.en,
	};
};
