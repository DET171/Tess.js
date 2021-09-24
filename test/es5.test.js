/* eslint-disable no-undef */
const utils = require('../src/cjs').default;
let empty;
let hello = 'hello';

test('Tests isNil()', () => {
	expect(utils.isNil(empty)).toBe(true);
});
