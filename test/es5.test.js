/* eslint-disable no-undef */
const Tess = require('../src/cjs');
let empty;
let hello = 'hello';
let str = `I'm
a             multiline
     string!`

test('Tests isNil()', () => {
	expect(Tess.isNil(empty)).toBe(true);
});
test('arrayify()', () => {
	expect(Tess.arrayify(hello)[0]).toBe('hello');
});
test('atob()', () => {
	expect(Tess.atob('hello')).toBe('aGVsbG8=');
});
test('btoa()', () => {
	expect(Tess.btoa('aGVsbG8=')).toBe('hello');
});
test('compact()', () => {
	expect(Tess.compact(str)).toBe('I\'m a multiline string!');
});
test('flatten()', () => {
	expect(Tess.flatten([[[1, [1.1]], 2, 3], [4, 5]])[1]).toBe(1.1);
});
test('reverse()', () => {
	expect(Tess.reverse('hello')).toBe('olleh');
});
test('assert()', () => {
	expect(Tess.assert(typeof {} === 'object')).toBe(true);
});
test('afterPos(), beforePos(), afterEl() and beforeEl()', () => {
	expect(Tess.afterPos([1, 2, 3, 4, 5, 6, 7, 8], 4)).toStrictEqual([6, 7, 8]);
  expect(Tess.beforePos([1, 2, 3, 4, 5, 6, 7, 8], 4)).toStrictEqual([1, 2, 3, 4]);
  expect(Tess.beforeEl(["1", "2", "3", "four", "5", "6", "7", "8"], "four")).toStrictEqual(["1", "2", "3"]);
  expect(Tess.afterEl([1, 2, 3, 4, 5, "six", 7, "eight"], "eight")).toStrictEqual([]);
  expect(Tess.afterEl([1, 2, 3, 4, 5, "six", 7, "eight"], "six")).toStrictEqual([7, "eight"]);

});
test('camel and pascal', () => {
	expect(Tess.camelCase('Hello there')).toBe('helloThere');
  expect(Tess.pascalCase('hello there')).toBe('HelloThere');
});
const numArray = new Tess.StrictArray('number');
numArray.push(1)
test('StrictArray()', () => {
	expect(numArray[0]).toBe(1);
});
