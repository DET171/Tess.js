/**
* Dencodes a Base 64 string
*
* @since v0.1.3
* @category Convert
* @param {*} value - The value decode
* @returns string
* @example
* btoa('aGVsbG8=')       //=> hello
*/
const btoa = (value) => {
	return Buffer.from(value, 'base64').toString();
};
export default btoa;
