/**
* Gets standard deviation from an array
*
* @since v2.6.0
* @category Math
* @param {array} array - The array to get the standard devuation from
* @returns number
* @example
* stdDev([1, 6, 8, 16, 28])
*/

const stdDev = (array) => {
	if (!array || array.length === 0) return 0;
	const n = array.length;
	const mean = array.reduce((a, b) => a + b) / n;
	return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
};

export { stdDev };
