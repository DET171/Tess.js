import { wait } from '../misc/wait.js';
let spin = true;

/**
* Namespace for console spinner (Node.js only)
*
* @since v2.1.1
* @category console
* @example
* spinner.start(); // starts spinner
* spinner.stop(); // stops spinner
*/
const spinner = {};

spinner.start = async () => {
	if(!process?.stdout?.write) {
		console.error('Progress Bar cannot be used here as it relies on process.stdout.write (which the current environment does not have)');
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

spinner.stop = () => {
	if(!process?.stdout?.write) {
		console.error('Progress Bar cannot be used here as it relies on process.stdout.write (which the current environment does not have)');
		return;
	}
	spin = false;
	process.stdout.write('\r');
};

export { spinner };
