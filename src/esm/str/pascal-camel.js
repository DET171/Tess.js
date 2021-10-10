/**
* Turns a string into camel case
*
* @since v1.1.3
* @category string
* @param {string} string - The string to turn into camel case
* @returns string
* @example
* camelCase('Hello there') //=> 'helloThere'
*/

const camelCase = (string) => string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
	if (+match === 0) return '';
	return index === 0 ? match.toLowerCase() : match.toUpperCase();
});

/**
* Turns a string into pascal case
*
* @since v1.1.3
* @category string
* @param {string} string - The string to turn into pascal case
* @returns string
* @example
* pascalCase('hello there') //=> 'HelloThere'
*/

const pascalCase = (string) => string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match) {
	if (+match === 0) return '';
	return match.toUpperCase();
});

export { camelCase, pascalCase };
