/**
* Finds the difference between two arrays
*
* @since v2.5.2-beta.4
* @category array
* @param {Array} arr1 - The first array to compare
* @param {Array} arr2 - The second array to compare
* @returns {Array}
* @example
* const arr1 = [1,2,3];
* const arr2 = [2,3];
* diff(arr1, arr2); //=> [1]
*/

const diff = (arr1, arr2) => arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));

export { diff };
