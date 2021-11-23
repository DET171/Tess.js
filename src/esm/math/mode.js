/**
* Gets the mode for an array of numbers
*
* @since v3.7.0
* @category Math
* @param {Array<number>} numbers - The array to get the mean from
* @returns number
* @example
* mode([1, 6, 8, 16, 28, 8]) // => 8
*/

const mode = (numbers) => {
	if (numbers.length === 0 || !Array.isArray(numbers)) return undefined;
	const map = numbers.map((a) => numbers.filter((b) => a === b).length);
	return numbers[map.indexOf(Math.max(...map))];
};

export { mode };
