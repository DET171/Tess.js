/**
* Selects a random float point
*
* @since v0.2.0
* @category Random
* @param {number} min - The smallest number of the range to pick the random float from
* @param {number} max - The largest number of the range to pick the random float from
* @returns number
* @example
* ranFloat(3,10)
*/

const ranFloat = (min, max) => {
	return Math.random() * (max - min) + min;
};

export default ranFloat;
