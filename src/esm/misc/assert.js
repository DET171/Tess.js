/**
* A simple assert function
*
* @since v1.0.1
* @category Check
* @param {expression} condition - The condition for the check to pass, for example `typeof argumentName === "string"`
* @param {string} message - The message to throw as an error if the check does not pass
* @param {boolean} [throwErr=true] - The message to throw as an error if the check does not pass
* @returns Array
* @example
* assert(typeof 'object' === 'object', '', false)  // this does not crash the script and does not show any errors
*/
const assert = (condition, message = 'Check failed', throwErr = true) => {
	if (!condition) {
		if(throwErr) {
			throw new Error(message);
		}
		else {
			console.error(message);
		}
	}
	if(condition) {
		return true;
	}
};

export { assert };
