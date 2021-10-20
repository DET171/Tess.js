/**
* Gets the values of an array before the specified position, not including the element at the position specified.
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
	return array.slice(0, position) ?? [];
};

/**
* Gets the values of an array before the specified position, not including the element at the position specified.
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
	return array.slice(position + 1, array.length) ?? [];
};

/**
* Gets the values of an array after the specified element, not including the element at the position specified.
*
* @since v1.1.2
* @category Array
* @param {array} array - The array to get the value from
* @param {*} el - The element in the array that values will be taken from after
* @returns Array
* @example
* afterEl([1, 2, 3, "hello", "5", 6, 7, 8], "hello")
*/

const afterEl = (array, el) => {
	const pos = array.indexOf(el);
	return afterPos(array, pos);
};

/**
* Gets the values of an array before the specified element, not including the element at the position specified.
*
* @since v1.1.2
* @category Array
* @param {array} array - The array to get the value from
* @param {number} position - The element in the array that values will be taken from before
* @returns Array
* @example
* beforeEl([1, 2, 3, "four", 5, "6", 7, 8], "four")
*/

const beforeEl = (array, el) => {
	const pos = array.indexOf(el);
	return beforePos(array, pos);
};

export { beforePos, afterPos, afterEl, beforeEl };
