/**
* Encodes a string into Base 64
*
* @since v0.1.3
* @category Convert
* @param {string/number} value - The value convert to Base 64
* @returns string
* @example
* atob('hello')       //=> aGVsbG8=
*/
const atob = (value) => {
	return Buffer.from(value).toString('base64');
};
export default atob;
