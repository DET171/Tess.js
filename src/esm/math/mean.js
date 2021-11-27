/**
* Gets the mean for an array of numbers
*
* @since v3.7.0
* @category Math
* @param {Array<number>} numbers - The array to get the mean from
* @returns {number}
* @example
* mean([1, 6, 8, 16, 28]) // => 11.8
*/

const mean = (numbers) => {
	if (numbers.length === 0 || !Array.isArray(numbers)) return undefined;
	return numbers.reduce((a, b) => a + b) / numbers.length;
};

export { mean };
