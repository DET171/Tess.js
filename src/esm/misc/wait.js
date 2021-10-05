/**
* `wait`s  a specific period of time (in ms)
*
* @since v0.4.2
* @category Time?
* @param {number} ms - The amount of time to wait in milliseconds
* @returns promise
* @example
* (async () => {
*		console.log('Hi');
*		await wait(1000);
*		console.log('Hi after 1 second');
* }());
*/
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export { wait };
