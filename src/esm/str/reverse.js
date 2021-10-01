/**
* Reverse a string
*
* @since v0.4.9
* @category string
* @param {string} string - The string to reverse
* @returns string
* @example
* reverse('Hello') //=> 'olleH'
*/

const reverse = (string) => string.split('').reverse().join('');

export default reverse;
