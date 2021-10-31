/**
* Converts a given time. If the given time is a number, it will be interpreted as minutes.
* Accepted units: <br>
* m, s, h, ms, d, y, us (microsecond), w, mth (month)
*
* @since v2.5.8
* @category Conversion
* @param {number | string} time - The amount to convert
* @param {string} [to=ms] - What the time should be converted to
* @returns string
* @example
* time('2 y', 'mth') // 24
*/
const time = (val, to = 'ms') => {
	const convs = {
		's': 60,
		'ms': 60000,
		'us': 60000000,
		'ns': 60000000000,
		'm': 1,
		'h': 1 / 6,
		'd': 1 / 1440,
		'w': 1 / 10080,
		'mth': 1 / 43800,
		'y': 1 / 525600,
	};
	if(typeof val === 'number') {
		return val * convs[to];
	}
	if(typeof val === 'string') {
		val = val.split(/ +/);
		const unit = val[1].toLowerCase();
		const num = parseFloat(val[0]);
		return num / (convs[unit]) * (convs[to]);
	}
};

export { time };
