export function curr(price: string, decimal: boolean = false) {
	const USDollarAndCents = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 2
	});

	const USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0
	});

	return decimal ? USDollarAndCents.format(Number(price)) : USDollar.format(Number(price));
}

export function commas(n: number) {
	return new Intl.NumberFormat().format(n);
}
