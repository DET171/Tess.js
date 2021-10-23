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
  * @param {string} acceptedTypes - The type of element that the array should accept
  */
	constructor(acceptedTypes) {
		super();
		Object.defineProperty(this, 'acceptedTypes', {
			value: acceptedTypes,
			writable: false,
			enumerable: true,
			configurable: false,
		});
	}
	/**
  * Push a value to the array
  * @param {*} el - The value to push to the array
  * @return {array} Returns the array
  */
	push(...el) {
		for (const item of el) {
			if(typeof item == this.acceptedTypes) {
				this[this.length] = item;
			}
			else {
				throw new Error(`The type of the item you tried to push was a ${typeof item}, but ${this.acceptedTypes} was expected`);
			}
		}
	}
	/**
  * Push a value to the front of the array
  * @param {*} el - The value to push to the array
  * @return {array} Returns the array
  */
	unshift(...el) {
		for (const item of el) {
			if(typeof item == this.acceptedTypes) {
				this.reverse();
				this[this.length] = item;
				this.reverse();
			}
			else {
				throw new Error(`The type of the item you tried to push was a ${typeof item}, but ${this.acceptedTypes} was expected`);
			}
		}
	}
}

export { StrictArray };
