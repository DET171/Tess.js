// import { markr } from '../console/text.js';
/* eslint-disable no-empty-function */
/**
* A strict array that only accepts one type of element
*
* @since v2.4.0
* @category array
* @extends Array
*/

class StrictArray extends Array {
	/**
  * Creates a strict array that only accepts one type of element
  * @since v2.4.0
  * @param {acceptedTypes} string - The type of element that the array should accept
  */
	constructor(acceptedTypes) {
		super();
		this.acceptedTypes = acceptedTypes;
	}
	/**
  * Push a value to the array
  * @param {*} el - The value to push to the array
  * @return {array} Returns the array
  */
	push(el) {
		if(typeof el == this.acceptedTypes) {
			this[this.length] = el;
		}
		else {
			throw new Error(`The type of the item you tried to push was a ${typeof el}, but ${this.acceptedTypes} was expected`);
		}
	}
}

export { StrictArray };
