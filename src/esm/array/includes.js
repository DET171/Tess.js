/**
* Returns true if the given n-dimensional array contains a given value
*
* @since v2.10.0
* @category Array
* @param {*} value - The value to search for in the array
* @param {array} array - The array to search for the given value
* @returns Boolean
* @example
* includes(2, [[[1,3,5],2]])
*/

const includes = (value, array) => array.some((entry) => {
	if (Array.isArray(entry)) {
		return includes(value, entry);
	}

	return entry === value;
});

export { includes };
