import { wait } from '../misc/wait.js';
/**
* Creates a console progress bar (Node.js only)
*
* @since v2.1.1
* @category console
* @param {number} [type=1] - The type of the progress bar
* @param {number} [number=80] - The time in `ms` for the progress bar to finish
* @param {number} [number=20] - The number length of the progress bar
* @returns Promise<void>
* @example
* progressBar(1, 80)
* //=> [-----------=========] 55%
* progressBar(2)
* //=>  [....................] 100%
*/

const progressBar = async (type = 1, time = 80, spaces = 20) => {
	if(!process?.stdout?.write) {
		console.error('Progress Bar cannot be used here as it relies on process.stdout.write (which the current environment does not have)');
		return;
	}

	const barItems = [];
	if (type === 1) {
		barItems[0] = '-';
		barItems[1] = '=';
	}
	if (type === 2) {
		barItems[0] = '.';
		barItems[1] = ' ';
	}
	for (let i = 0; i <= spaces; i++) {
		const dots = barItems[0].repeat(i);
		const left = 20 - i;
		const empty = barItems[1].repeat(left);
		process.stdout.write(`\r[${dots}${empty}] ${i * 5}%`);
		await wait(time);
	}
};

export { progressBar };
