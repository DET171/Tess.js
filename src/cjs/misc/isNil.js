'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true,
});
exports.isNil = void 0;

/**
* Returns true if the value is null or undefined
*
* @since v0.0.1
* @category Value
* @param {*} value - The value to check
* @returns boolean
* @example
* isNill(null)       //=> true
* isNill(undefined)  //=> true
* isNill('')         //=> false
* isNill([])         //=> false
* isNill({})         //=> false
*/
var isNil = function isNil(value) {
	if (value == undefined || value == null) return true;else return false;
};

exports.isNil = isNil;