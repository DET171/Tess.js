/**
* Fills elements of array with value from `start` up to, but not including, `end`.
*
* @since v3.5.0
* @category array
* @param {Array} arr - The array to fill
* @param {*} value - The value to fill the array with
* @param {number} [start=0] - The start position
* @param {number} [end=arr.length] - The end position
* @returns {Array}
* @example
* fill(Array(5), 'a') // => ['a', 'a', 'a', 'a', 'a']
*/

const fill = (arr, value, start = 0, end = arr.length) => {
	if (arr.constructor !== Array) return undefined;
	for (let i = start; i < end; i++) {
		arr[i] = value;
	}
	return arr;
};

export { fill };
