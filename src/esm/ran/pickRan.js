/**
* Picks a random item from an array
*
* @since v0.4.1
* @category Random
* @param {array} array - The array to pick the item from
* @returns *
* @example
* let array = ['1', '2']
* pickRan(array)
*/

const pickRan = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};

export { pickRan };
