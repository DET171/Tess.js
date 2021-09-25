/**
* Returns true if the value is null or undefined
*
* @since v0.1.3
* @category Convert
* @param {*} value - The value to add to a new array
* @returns Array
* @example
* arrayify('Hello')       //=> ['Hello']
*/
const arrayify = (value) => {
	const array = [];
	array.push(value);
	return array;
};

export default arrayify;
