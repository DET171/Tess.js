/**
* Converts metres to a different unit
*
* @since v2.5.2-beta.3
* @category Conversion/Math
* @param {number} metres - The amount to convert
* @param {object} options - The options to apply
* @param {string} [options.to=km] - What the metres should be converted to
* Accepted units for options.km: <br>
* km, cm, mm, um, nm, ft, yard, miles, inch
* @returns string
* @example
* m(1000, { to: 'km' }) // '1 km'
*/

const m = (metres, { to } = { to: 'km' }) => {
	const mConversions = {
		'km': 0.001,
		'cm': 100,
		'mm': 1000,
		'um': 0.00000001,
		'nm': 0.0000000001,
		'ft': 3.28084,
		'yard': 1.09361,
		'inch': 39.3701,
		'mile': 0.000621371,
		get 'feet'() {
			return this['ft'];
		},
		get 'kilo'() {
			return this['km'];
		},
		get 'yd'() {
			return this['yard'];
		},
		get 'in'() {
			return this['inch'];
		},
		get 'miles'() {
			return this['mile'];
		},
		get 'mi'() {
			return this['mile'];
		},
	};
	console.log(to);
	return metres * mConversions[to];
};

export { m };
