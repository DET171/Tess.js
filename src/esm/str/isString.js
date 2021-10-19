/**
* Checks if the given value is a string.
*
* @since v2.5.2-beta.1
* @category string
* @param {*} value - The value to check.
* @returns string
* @example
* isString('value') // true
*/

const isString = (value) => value.constructor === String;

export { isString };
