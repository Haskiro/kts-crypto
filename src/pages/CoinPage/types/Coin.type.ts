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
