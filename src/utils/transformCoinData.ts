import { ISingleCoin } from "@interfaces/singleCoin.interface";

import { capFormatter } from "./capFormatter";
import { changeFormatter } from "./changeFormater";
import { priceFormatter } from "./priceFormater";

export const _transformCoinData = (coin: ISingleCoin) => {
	return {
		name: coin.name,
		symbol: coin.symbol,
		image: coin.image.thumb,
		current_price: priceFormatter.format(
			coin.market_data.current_price.usd
		),
		price_change_in_currency:
			coin.market_data.price_change_24h_in_currency.usd,
		price_change_percentage: changeFormatter.format(
			coin.market_data.price_change_percentage_24h / 100
		),
		market_cap: capFormatter.format(coin.market_data.market_cap.usd),
		fully_diluted_valuation: capFormatter.format(
			coin.market_data.fully_diluted_valuation.usd
		),
		circulating_supply: capFormatter.format(
			coin.market_data.circulating_supply
		),
		total_supply: capFormatter.format(coin.market_data.total_supply),
		max_supply: capFormatter.format(coin.market_data.max_supply),
		description: coin.description.en,
	};
};
