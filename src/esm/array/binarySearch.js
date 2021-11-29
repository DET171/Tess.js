/**
* Conducts a binary search on an array with the given key and returns the index of the key. The return behaviour of this function is the same as `Array.prototype.indexOf()`.
* <br>
* @since v3.10.0
* @category Array
* @param {Array<any>} array - The array to get the index of the given key from. ***IMPORTANT NOTE:*** The array provided must be sorted
* @param {*} key - The key to search for
* @returns {number}
* @example
* binarySearch
*/

const binarySearch = (array, key) => {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		const middle = Math.floor((start + end) / 2);

		if (array[middle] === key) {
			// found the key
			return middle;
		}
		else if (array[middle] < key) {
			// continue searching to the right
			start = middle + 1;
		}
		else {
			// search searching to the left
			end = middle - 1;
		}
	}
	// key wasn't found
	return -1;
};

export { binarySearch };