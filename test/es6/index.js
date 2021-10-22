 /* eslint-disable no-undef */
import * as Tess from '../../src/esm/index.js';
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

console.log(Tess.assert(typeof 'object' === 'string'));

console.log(Tess.beforePos([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(Tess.afterPos([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(Tess.beforeEl(["1", "2", "3", "four", "5", "6", "7", "8"], "four"));
console.log(Tess.afterEl(["1", "2", "3", "four", "five", "6", "7", "8"], "five"));
console.log(Tess.camelCase('Hello there'));
console.log(Tess.stdDev([1, 6, 8, 16, 28]));
console.log(Tess.pascalCase('hello there'));

(async function() {
  await Tess.wait(1500);
  // await Tess.progressBar(1, 100);
  // await Tess.wait(100 * 20);
  await Tess.progressBar(2);
  await Tess.wait(20 * 80);
  console.log();
  Tess.spinner.start();
  await Tess.wait(1000 * 5);
  Tess.spinner.stop();
  Tess.progressBar(1);
}());

Tess.markr.info('Hello')
Tess.markr.success('Hello', ' Congrats! ')
Tess.markr.error('Parse Error: (29:7)', ' FATAL ERROR ')
Tess.markr.warn('no-unused-vars (10:8)')
console.log(Tess.ranKey(20));

const sa = new Tess.StrictArray('object');
sa.push({
  name: 'John'
});
sa.unshift({
  name: 'Mary'
})
// You cannot change the acceptedTypes property
// sa.acceptedTypes = 'string';
console.log(sa);
// uncomment next line to see error thrown
// sa.push(1)

// no polluting of globals
// const str = 'Hello                                   lol';
// console.log(str.compact());

console.log(Tess.isString('Hello'));

console.log(Tess.m(1, { to: 'yd' }));

console.log(Tess.diff([1, 2, 3], [1, 2, 5, 7]));
console.log(Tess.typeOf(null));

console.log(Tess.chunk(['a', 'b', 'c', 'd'], 3));

const map = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);
const obj = Tess.toJSON(map);
console.log(obj);
