import { wait } from '../misc/wait.js';
let spin = true;

/**
* Namespace for console spinner (Node.js only)
*
* @since v2.1.1
* @category console
*/
const spinner = {};

/**
* spinner#start (Node.js only)
*
* @since v2.1.1
* @category console
* @example
* spinner.start() // starts spinner
*/

spinner.start = async () => {
	if(typeof process === 'undefined') {
		console.error('Spinner cannot be used here as it relies on process.stdout.write (which the current environment does not have)');
		return;
	}
	while (spin == true) {
		await wait(100);
		process.stdout.write('\r-');
		await wait(100);
		process.stdout.write('\r\\');
		await wait(100);
		process.stdout.write('\r/');
		await wait(100);
	}
};

/**
* spinner#stop (Node.js only)
*
* @since v2.1.1
* @category console
* @example
* spinner.stop() // stops spinner
*/

spinner.stop = () => {
	if(typeof process === 'undefined') {
		console.error('Spinner cannot be used here as it relies on process.stdout.write (which the current environment does not have)');
		return;
	}
	spin = false;
	process.stdout.write('\r');
};

export { spinner };
