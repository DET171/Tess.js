const hasOwn = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
const rexNum = /^0$|^[1-9]\d*$/;
/**
* `async`-friendly for-each functions for sparse arrays from [this post](https://stackoverflow.com/a/9329476)
* > This function will make a fine addition to my collection
*
* @since v1.0.1
* @category Array
* @param {array} array - The array to loop through (The array to s`parse`?)
* @param {function} function - A function to be run for each element in the array.
* @param {function} [function.currentValue] - The value of the current element
* @param {function} [function.index] - The array index of the current element
* @param {function} [function.arr] - The array object the current element belongs to
* @returns Array
* @example
const a = [];
a[5] = "five";
a[10] = "ten";
a[100000] = "one hundred thousand";
a.b = "bee";

sparseEach(a, function(currentValue, index, arr) {
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
