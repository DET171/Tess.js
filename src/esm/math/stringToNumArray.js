/**
* Turns a string into an array of numbers
*
* @since v3.3.0
* @category Conversion?/Array?/Math?
* @param {string} string - The string to turn into an array of numbers
* @param {string} [separator=<space>] - The separator that is used to separate numbers
* @returns {Array}
* @example
* strToNumArray('1 2 3 4') // => [1, 2, 3, 4]
*/

const strToNumArray = (string, separator) => {
	separator ??= ' ';
	return string.split(separator).map(Number);
};

export { strToNumArray };
