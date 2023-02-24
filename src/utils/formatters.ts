export const capFormatter = new Intl.NumberFormat("en-US", {
	maximumFractionDigits: 0,
});

export const priceFormatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",

	// These options are needed to round to whole numbers if that's what you want.
	//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
	maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
});

export const changePercentageFormatter = new Intl.NumberFormat("en-US", {
	minimumFractionDigits: 0,
	maximumFractionDigits: 2,
});

export const changeCurrencyFormatter = new Intl.NumberFormat("en-US", {
	minimumFractionDigits: 0,
	maximumFractionDigits: 3,
});
