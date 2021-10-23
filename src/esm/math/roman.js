/* eslint-disable no-cond-assign */
/**
* Converts a number to/from Roman Numerals. If the argument received is a string, it will be converted to a number. If the argument received is a number, it will be converted to a string.
*
* @since v2.5.2-beta.7
* @category Math
* @param {number} val - The value to convert from/to Roman Numerals
* @returns number/string
* @example
* roman('IV')
* roman(4)
*/

const roman = (val) => {
	if(typeof val === 'number') { // not gonna use my own typeOf() function for each function to be standalone
		var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
			romanNum = '',
			i;
		for (i in lookup) {
			while (val >= lookup[i]) {
				romanNum += i;
				val -= lookup[i];
			}
		}
		return romanNum;
	}
	if(typeof val === 'string') {
		val = val.toUpperCase();
		const	validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
			token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
			key = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
		let num = 0, m;
		if (!(val && validator.test(val))) {
			return false;
		}
		while (m = token.exec(val)) {
			num += key[m[0]];
		}
		return num;
	}
};

export { roman };
