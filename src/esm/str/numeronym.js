/**
* Turns a word into a [numeronym](https://en.wikipedia.org/wiki/Numeronym)
*
* @since v3.2.0
* @category Conversion?
* @param {string} string - The string to turn into a numeronym
* @returns string
* @example
* numeronym('internationalization') // => i18n
*/

const numeronym = (string) => `${string[0]}${string.length - 2}${string[string.length - 1]}`;

export { numeronym };
