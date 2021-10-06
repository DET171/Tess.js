import { assert } from './assert.js';
/**
* Gets the values of an array before the specified position, not including the character at the position specified.
*
* @since v1.1.2
* @category Array
* @param {array} array - The array to get the value from
* @param {number} position - The position that values will be retrieved from before (let's say `position` is `x`, this function will return all values before position `x`). Remember that an array starts at 0, so `x` in the example can be 1, which will return the first value in the array
* @returns Array
* @example
* beforePos([1, 2, 3, 4, 5, 6, 7, 8], 4)
*/

const beforePos = (array, position) => {
	assert(array.constructor == Array && position != array.length && position != 0, 'array must be an array, and position must not be 0 or the array length');
	return array.slice(0, position);
};

/**
* Gets the values of an array before the specified position, not including the character at the position specified.
*
* @since v1.1.2
* @category Array
* @param {array} array - The array to get the value from
* @param {number} position - The position that values will be retrieved from after (let's say `position` is `x`, this function will return all values after position `x`)
* @returns Array
* @example
* beforePos([1, 2, 3, 4, 5, 6, 7, 8], 4)
*/

const afterPos = (array, position) => {
	assert(array.constructor == Array && position != array.length && position != 0, 'array must be an array, and position must not be 0 or the array length');
	return array.slice(position + 1, array.length);
};

export { beforePos, afterPos };
