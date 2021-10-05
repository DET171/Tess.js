/**
* Splits the text at the specified character position (number) and replace the text behind it with an ellipsis (...)
*
* @since v0.4.9
* @category string
* @param {string} string - The string to edit
* @param {number} position - The position to split the string at
* @param {object} options - The options to pass to the function
* @param {string} [options.ellipsis=...] - What the ellipsis should be
* @returns string
* @example
* ellipsis('Hello! I am Joe!', 5, { ellipsis: '....' }) //=> 'Hello....'
*/

const ellipsis = (string, position, options) => {
	const newStr = string.slice(0, position);
	if (options.ellipsis) {
		return `${newStr}${options.ellipsis}`;
	}
	return `${newStr}...`;
};

export { ellipsis };
