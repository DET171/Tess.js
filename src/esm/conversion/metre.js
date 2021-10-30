/**
* Converts metres to a different unit or vice-versa
*
* @since v2.5.2-beta.3
* @category Conversion
* @param {number} metres - The amount to convert
* @param {string} [to=km] - What the metres should be converted to
* Accepted units: <br>
* km, cm, mm, um, nm, ft, yard, miles, inch, m
* @returns string
* @example
* m('1 km', 'm') // 1000
*/

const m = (val, to = 'km') => {
	const mConversions = {
		'km': 0.001,
		'cm': 100,
		'mm': 1000,
		'm': 1,
		'um': 0.00000001,
		'nm': 0.0000000001,
		'ft': 3.28084,
		'yard': 1.09361,
		'inch': 39.3701,
		'miles': 0.000621371,
		get 'feet'() {
			return this['ft'];
		},
		get 'kilo'() {
			return this['km'];
		},
		get 'metres'() {
			return this['m'];
		},
		get 'yd'() {
			return this['yard'];
		},
		get 'in'() {
			return this['inch'];
		},
		get 'mi'() {
			return this['miles'];
		},
	};
	if (typeof val === 'number') {
		return val * (mConversions[to]);
	}
	if (typeof val === 'string') {
		const vals = val.split(/ +/);
		return parseFloat(vals[0]) / (mConversions[vals[1]]) * (mConversions[to]);
	}
};

export { m };
