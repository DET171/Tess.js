/**
* An improved typeof operator
*
* @since v2.5.2-beta.5
* @param {*} value - The value to find the type of
* @returns {string}
* @example
* typeOf(null); //=> null
*/

const typeOf = (value) => Object.prototype.toString.call(value)
	.replace(/^\[object\s+([a-z]+)\]$/i, '$1')
	.toLowerCase();

export { typeOf };
