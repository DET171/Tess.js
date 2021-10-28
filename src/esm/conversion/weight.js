/**
* Converts a weight into different units. If the weight received is a number, it will be taken as grams. <br>
* Supported units: kg, lb, g, mg, tonne, ton (US Ton), st (stone), oz, mcg
*
* @since v2.5.7
* @category Conversion
* @param {string} weight - The weight to convert
* @param {string} to - The unit to convert the weight to
* @returns number
* @example
* Tess.weight()
*/

const weight = (mass, to) => {
	const convs = {
		'kg': 1,
		'lb': 2.20462,
		'tonne': 0.001,
		'ton': 0.00110231,
		'st': 0.157473,
		'oz': 35.274,
		'g': 1000,
		'mg': 1000000,
		'mcg': 1000000000,
	};
	if(typeof mass === 'string') {
		mass = mass.split(/ +/);
		const units = mass[1];
		const num = parseFloat(mass[0]);
		return num / convs[units] * convs[to];
	}
	if(typeof mass === 'number') {
		return mass * convs[to];
	}
};

export { weight };
