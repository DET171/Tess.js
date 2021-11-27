/**
* Gets the median for an array of numbers
*
* @since v3.7.0
* @category Math
* @param {Number[]} numbers - The array to get the median from
* @returns number
* @example
* median([8, 6, 1, 16, 28]) // => 8
*/

const median = (numbers) => {
	if (numbers.length === 0 || !Array.isArray(numbers)) return undefined;
	const sorted = numbers.sort((a, b) => a - b);
	const middle = Math.floor(sorted.length / 2);
	if (sorted.length % 2 === 0) {
		return (sorted[middle - 1] + sorted[middle]) / 2;
	}
	return sorted[middle];
};

export { median };
