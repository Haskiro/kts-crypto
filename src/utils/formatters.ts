export const priceFormatter = (
	num: number,
	options: { maxDigits: number; currency?: string }
) => {
	const { maxDigits, currency } = options;

	const config: Intl.NumberFormatOptions = {
		maximumFractionDigits: maxDigits,
	};
	if (currency) {
		config.style = "currency";
		config.currency = currency;
	}
	return new Intl.NumberFormat("en-US", config).format(num);
};

export const changeFormatter = (
	num: number,
	options: { maxDigits: number }
) => {
	const { maxDigits } = options;
	return new Intl.NumberFormat("en-US", {
		minimumFractionDigits: 0,
		maximumFractionDigits: maxDigits,
	}).format(num);
};
