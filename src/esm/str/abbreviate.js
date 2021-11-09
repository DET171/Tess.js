/**
* Abbreviates a given string
*
* @since v3.0.0
* @category Conversion?
* @param {string} string - The string to abbreviate
* @param {boolean} [keepCase=false] - Whether to keep the case of the string (eg lowercase to uppercase, or unchanged)
* @returns string
* @example
* abbr('Attack of the Clones') // => AOTC
* abbr('Attack of the Clones', true) // => AotC
*/

const abbr = (string, keepCase = false) => string.split(/ +/)
	.map(val => keepCase ? val[0] : val[0].toUpperCase())
	.join('');

export { abbr };
