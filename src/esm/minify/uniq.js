const unique_pred = (list, compare) => {
	var ptr = 1,
		len = list.length,
		a = list[0], b = list[0];
	for(var i = 1; i < len; ++i) {
		b = a;
		a = list[i];
		if(compare(a, b)) {
			if(i === ptr) {
				ptr++;
				continue;
			}
			list[ptr++] = a;
		}
	}
	list.length = ptr;
	return list;
};

const unique_eq = (list) => {
	var ptr = 1,
		len = list.length,
		a = list[0], b = list[0];
	for(var i = 1; i < len; ++i) {
		b = a;
		a = list[i];
		if(a !== b) {
			if(i === ptr) {
				ptr++;
				continue;
			}
			list[ptr++] = a;
		}
	}
	list.length = ptr;
	return list;
};

/**
* Removes duplicate values from an array
*
* @since v0.4.6
* @category minify
* @param {array} list - The array to remove duplicate values from
* @param {function} [compare] - Optional. A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like `function(a, b){return a-b}`
* @param {boolean} [sorted=false] - Optional. Whether the array is already sorted
* @returns array
* @example
* uniq([1, 1, 1.1, 2, 2, 3, 4, 5, 5, 5]) //=> [1, 1.1, 2, 3, 4, 5]
*/

const uniq = (list, compare, sorted) => {
	if(list.length === 0) {
		return list;
	}
	if(compare) {
		if(!sorted) {
			list.sort(compare);
		}
		return unique_pred(list, compare);
	}
	if(!sorted) {
		list.sort();
	}
	return unique_eq(list);
};

export { uniq };
