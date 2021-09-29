/**
* Flattens array
*
* @since v0.4.5
* @category minify
* @param {array} array - The array flatten
* @returns array
* @example
* flatten([[[1, [1.1]], 2, 3], [4, 5]]); //=> [1, 1.1, 2, 3, 4, 5]
*/

const flatten = (array) => {
	return array.reduce(function(flat, toFlatten) {
		return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	}, []);
};

export default flatten;
