/**
* Selects a random number
*
* @since v0.2.0
* @category Random
* @param {number} min - The smallest number of the range to pick the random number from
* @param {number} max - The largest number of the range to pick the random number from
* @returns number
* @example
* ranInt(3,10)
*/

const ranInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export default ranInt;
