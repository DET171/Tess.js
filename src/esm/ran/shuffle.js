/**
* Shuffles an array
*
* @since v0.4.8
* @category Random
* @param {array} array - The array to shuffle
* @returns Array
* @example
* shuffle([1,2,3,4,5,6]) //=> [2,4,3,1,6,5]
*/

const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export default shuffle;
