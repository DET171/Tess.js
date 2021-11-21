/**
* Turns a string into snake case
*
* @since v3.4.0
* @category string
* @param {string} string - The string to turn into snake case
* @returns string
* @example
* snakeCase('hello there') // => hello_there
*/

const snakeCase = (string) => string.replace(/ +/g, '_');

/**
* Turns a string into kebab case
*
* @since v3.4.0
* @category string
* @param {string} string - The string to turn into kebab case
* @returns string
* @example
* kebabCase('hello there') //=> hello-there
*/

const kebabCase = (string) => string.replace(/ +/g, '-');

export { snakeCase, kebabCase };
