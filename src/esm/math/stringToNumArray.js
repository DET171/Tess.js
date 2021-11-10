/**
* Turns a string into an array of numbers
*
* @since v3.3.0
* @category Conversion?/Array?/Math?
* @param {string} string - The string to turn into an array of numbers
* @param {string} [separator=<space>] - The separator that is usused to separate numbers
* @returns string
* @example
* strToNumArray('1 2 3 4') // => [1, 2, 3, 4]
*/

const strToNumArray = (string, separator) => {
	separator = separator ?? ' ';
	return string.split(separator).map(Number);
};

export { strToNumArray };
