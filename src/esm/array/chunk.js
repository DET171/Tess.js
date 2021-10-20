/**
* Splits an array into chunks
*
* @since v2.5.2-beta.5
* @category array
* @param {array} array - The array to split
* @param {number} length - The number of elements in each chunk
* @returns array - The array of chunks
* @example
* chunk(['a', 'b', 'c', 'd'], 2);
*/

const chunk = (array, length) => {
	if(length === 0) return [];
	const chunks = [];
	let i = 0;
	while (i < array.length) {
		chunks.push(array.slice(i, i += length));
	}
	return chunks;
};

export { chunk };
