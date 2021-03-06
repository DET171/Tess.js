 /* eslint-disable no-undef */
import * as Tess from '../../src/esm/index.js';
let empty;
let hello = 'hello';
let a = [];
a[5] = "five";
a[10] = "ten";
a[100000] = "one hundred thousand";
a.b = "bee";
let array = [1,8,2,3,4,5,6,7,10,9]

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

await Tess.markr.info('Hello')
await Tess.markr.success('Hello', ' Congrats! ')
await Tess.markr.error('Parse Error: (29:7)', ' FATAL ERROR ')
await Tess.markr.warn('no-unused-vars (10:8)')
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

console.log(Tess.m('1 km', 'm'));

console.log(Tess.diff([1, 2, 3], [1, 2, 5, 7]));
console.log(Tess.typeOf(null));

console.log(Tess.chunk(['a', 'b', 'c', 'd'], 3));

const map = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);
const obj = Tess.toJSON(map);
console.log(obj);

console.log(Tess.roman('IX'), Tess.roman('VII'));
console.log(Tess.roman(100));

console.log(Tess.deMorse('... --- ... / .... . .-.. .--.'));
console.log(Tess.toMorse('oops I spilled some milk'))
console.log(Tess.temp('20 C')['F']);
console.log(Tess.temp('350 K')['F']);
console.log(Tess.weight('10 lb', 'oz'))
console.log(Tess.weight(10, 'lb'));
console.log(Tess.time('10 s', 'm'));
console.log(Tess.time('1 y', 'd'));
console.log(Tess.time('2 y', 'mth'));
console.log(Tess.rgbToHex(255, 100, 200));
console.log(Tess.hexToRgb('#ff64c8'));


console.log(Tess.includes(5, [[[[[1,3,5]]],2]]))
console.log(Tess.includes(5, [[[[[1,3,4]]],2]]))

console.log(await Tess.getOS())

console.log(Tess.abbr('Attack of the Clones', true));
console.log(Tess.squash([1,2,3], [1,2], [4,5,6]));
console.log(Tess.strToNumArray('1 2 3 4 5', ' '));

console.log(Tess.snakeCase('hello               there'));
console.log(Tess.kebabCase('hello     world'));
console.log(Tess.fill(Array(5), 'a', 1, 3));

console.log(Tess.formatNumber(1000.12345));
console.log(Tess.mode([1, 6, 8, 16, 28, 8]));
console.log(Tess.mean([1, 6, 8, 16, 28]));
console.log(Tess.median([9, 8, 6, 1, 16, 28]));
console.log(Tess.circleArea(9));
console.log(Tess.binarySearch(array.sort((a, b) => a - b), 3, false));