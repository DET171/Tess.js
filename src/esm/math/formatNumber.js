/**
* Formats a number (aka insert thousands separator)
*
* @since v3.6.0
* @category Math
* @param {number} number - The number to format
* @param {string} [thousandsSeparator=,] - The thousands separator
* @returns {String}
* @example
* formatNumber(1000) // => '1,000'
*/

const formatNumber = (number, thousandsSeparator = ',') => {
	const parts = number.toString().split('.');
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
	return parts.join('.');
};

export { formatNumber };
