/**
* Dencodes a Base 64 string
*
* @since v0.1.3
* @category Convert
* @param {string} string - The value decode
* @returns string
* @example
* btoa('aGVsbG8=')       //=> hello
*/
const btoa = (string) => {
	return Buffer.from(string, 'base64').toString();
};
export default btoa;
