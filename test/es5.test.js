/* eslint-disable no-undef */
const utils = require('../src/cjs').default;
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
