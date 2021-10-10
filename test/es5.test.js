/* eslint-disable no-undef */
const utils = require('../src/cjs').Tess  ;
let empty;
let hello = 'hello';
let str = `I'm
a             multiline
     string!`

test('Tests isNil()', () => {
	expect(utils.isNil(empty)).toBe(true);
});
test('arrayify()', () => {
	expect(utils.arrayify(hello)[0]).toBe('hello');
});
test('atob()', () => {
	expect(utils.atob('hello')).toBe('aGVsbG8=');
});
test('btoa()', () => {
	expect(utils.btoa('aGVsbG8=')).toBe('hello');
});
test('compact()', () => {
	expect(utils.compact(str)).toBe('I\'m a multiline string!');
});
test('flatten()', () => {
	expect(utils.flatten([[[1, [1.1]], 2, 3], [4, 5]])[1]).toBe(1.1);
});
test('reverse()', () => {
	expect(utils.reverse('hello')).toBe('olleh');
});
test('assert()', () => {
	expect(utils.assert(typeof {} === 'object')).toBe(true);
});
test('afterPos(), beforePos(), afterEl() and beforeEl()', () => {
	expect(utils.afterPos([1, 2, 3, 4, 5, 6, 7, 8], 4)).toStrictEqual([6, 7, 8]);
  expect(utils.beforePos([1, 2, 3, 4, 5, 6, 7, 8], 4)).toStrictEqual([1, 2, 3, 4]);
  expect(utils.beforeEl(["1", "2", "3", "four", "5", "6", "7", "8"], "four")).toStrictEqual(["1", "2", "3"]);
  expect(utils.afterEl([1, 2, 3, 4, 5, "six", 7, "eight"], "eight")).toStrictEqual([]);
  expect(utils.afterEl([1, 2, 3, 4, 5, "six", 7, "eight"], "six")).toStrictEqual([7, "eight"]);

});
test('camel and pascal', () => {
	expect(utils.camelCase('Hello there')).toBe('helloThere');
  expect(utils.pascalCase('hello there')).toBe('HelloThere');
});
