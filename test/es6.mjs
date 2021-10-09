/* eslint-disable no-undef */
import { Tess } from '../src/esm/index.js';
let empty;
let hello = 'hello';
let a = [];
a[5] = "five";
a[10] = "ten";
a[100000] = "one hundred thousand";
a.b = "bee";

console.log(Tess.isNil(empty));
console.log(Tess.arrayify(hello));
console.log(Tess.ranInt(3, 10));
console.log(Tess.ranFloat(10, 12));
console.log(Tess.ranBool());
console.log(Tess.pickRan(['hello', 'bye', 'ur not welcome']));

(async function() {
  console.log('Hi');
  await Tess.wait(1000)
  console.log('Hi again');
}());

console.log(Tess.compact(`I'm
a             multiline
     string!
`));

console.log(Tess.rmFalsey([undefined, null, NaN, 1, 2, 3, 'hello']));

console.log(Tess.flatten([[[1, [1.1]], 2, 3], [4, 5]]));

console.log(Tess.uniq([1, 1, 1.1, 2, 2, 3, 4, 5, 5, 5], function(a, b){return a-b}));

console.log(Tess.shuffle([1,2,3,4,5,6]));

console.log(Tess.ellipsis('Hello! I am Joe!', 5, { ellipsis: '---' }));

console.log(Tess.reverse('Hello'));

console.log(Tess.sparseEach(a, function(value, index, arr) {
    console.log("Value at " + index + " is " + value);
		// arr is the array object
}));

console.log(Tess.assert(typeof 'object' === 'object', '', false)); // this does not crash the script and does not show any errors

console.log(Tess.beforePos([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(Tess.afterPos([1, 2, 3, 4, 5, 6, 7, 8], 4));

console.log(Tess.beforeEl(["1", "2", "3", "four", "5", "6", "7", "8"], "four"));
console.log(Tess.afterEl(["1", "2", "3", "four", "five", "6", "7", "8"], "five"));
