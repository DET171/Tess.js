/**
* Removes falsy values from an array
*
* @since v0.4.4
* @category minify
* @param {array} array - The array to remove falsey values from
* @returns array
* @example
* let array = [undefined, null, NaN, 1, 2, 3, 'hello']
* rmFalsey(array)    //=> [1, 2, 3, 'hello']
*/

const rmFalsey = (array) => array.filter(Boolean);

export default rmFalsey;
