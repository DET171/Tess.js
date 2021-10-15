import { wait } from '../misc/wait.js';
/**
* Creates a console spinner (Node.js only)
*
* @since v2.1.1
* @category console
* @example
* spinner.start(); // start spinner
* spinner.stop(); // stop spinner
*/
let spin = true;
const start = async () => {
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

const stop = () => {
	if(!process?.stdout?.write) {
		console.error('Progress Bar cannot be used here as it relies on process.stdout.write (which the current environment does not have)');
		return;
	}
	spin = false;
	process.stdout.write('\r');
};

const cSpinner = { start, stop };

export { cSpinner };
