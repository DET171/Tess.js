/**
* Squashes all the given arrays. Note: values like `undefined × 1` or `undefined × 40` are left out and not squashed.
*
* @since v3.1.0
* @category array
* @param {...Array} arrays - The arrays to squash
* @returns {Array}
* @example
* squash([1, 2], [3, 4]); // => [1, 2, 3, 4]
*/

const squash = (...arrays) => {
	const array = [];
	try {
		array.push(...[].concat(...arrays));
		return array;
	}
	catch {
		arrays.forEach((x) => {
			x.forEach((el) => {
				array.push(el);
			});
		});
		return array;
	}
};

export { squash };
