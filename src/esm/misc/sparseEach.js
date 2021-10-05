const hasOwn = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
const rexNum = /^0$|^[1-9]\d*$/;
/**
* `async`-friendly for-each functions for sparse arrays
*
* @since v1.0.1
* @category Array
* @param {array} array - The value to add to a new array
* @param {function} function(currentValue, index, arr) - The value to add to a new array
* @returns Array
* @example
const a = [];
a[5] = "five";
a[10] = "ten";
a[100000] = "one hundred thousand";
a.b = "bee";

sparseEach(a, function(value, index, arr) {
    console.log("Value at " + index + " is " + value);
		// arr is the array object
});
*/

const sparseEach = (array, callback, thisArg) => {
	for (const name in array) {
		const index = +name;
		if (hasOwn(array, name) &&
            rexNum.test(name) &&
            index <= 4294967294
		) {
			callback.call(thisArg, array[name], index, array);
		}
	}
};

export { sparseEach };
