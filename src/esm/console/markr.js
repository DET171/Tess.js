/* eslint-disable no-func-assign */
import chalk from 'chalk';
/**
* Simple wrapper for [chalk](https://www.npmjs.com/package/chalk)
*
* @since v2.2.0
* @category console
* @example
* await markr.info('Hello world')
* await markr.success('Hello world')
* await markr.warn('Hello world')
* await markr.warn('Hello world')
*/
const markr = {};
/**
		* Can be used instead of `console.log` or `console.info`
		* markr.info
		*
		* @since v2.2.0
		* @memberof markr
		* @category console
		* @param {string} text - The text to log in the console
		* @param {string} [header= INFO ] - The header of the message
		*/
markr.info = async (text, header = ' INFO ') => {
	if (typeof (process) !== 'undefined' && typeof (process?.version) !== 'undefined') {
		console.log(`${chalk.bgCyan.white.bold(header)}  ${text}`);
	}
	if (typeof (window) !== 'undefined') console.log(`%c  ℹ${header}`, 'background: #00FFFF; color: white; padding: 2px; border-radius:2px', text);
};

/**
		* markr.success
		*
		* @since v2.2.0
		* @memberof markr
		* @category console
		* @param {string} text - The text to log in the console
		* @param {string} [header= SUCCESS ] - The header of the message
		*/
markr.success = async (text, header = ' SUCCESS ') => {
	if (typeof (process) !== 'undefined' && typeof (process?.version) !== 'undefined') {
		console.log(`${chalk.bgGreen.white.bold(header)}  ${text}`);
	}
	if (typeof (window) !== 'undefined') console.log(`%c ✅${header}`, 'background: #14eb00; color: white; padding: 2px; border-radius:2px', text);
};

/**
		* markr.error
		*
		* @since v2.2.0
		* @category console
		* @memberof markr
		* @param {string} text - The text to log in the console
		* @param {string} [header= ERROR ] - The header of the message
		*/
markr.error = async (text, header = ' ERROR ') => {
	if (typeof (process) !== 'undefined' && typeof (process?.version) !== 'undefined') {
		console.log(`${chalk.bgRed.white.bold(header)}  ${text}`);
	}
	if (typeof (window) !== 'undefined') console.log(`%c ❌${header}`, 'background: #ff0000; color: white; padding: 2px; border-radius:2px', text);
};

/**
		* markr.warn
		*
		* @since v2.2.0
		* @category console
		* @memberof markr
		* @param {string} text - The text to log in the console
		* @param {string} [header= WARNING ] - The header of the message
		*/
markr.warn = async (text, header = ' WARNING ') => {
	if (typeof (process) !== 'undefined' && typeof (process?.version) !== 'undefined') {
		console.log(`${chalk.bgYellow.white.bold(header)}  ${text}`);
	}
	if (typeof (window) !== 'undefined') console.log(`%c ⚠${header}`, 'background: #ffcc00; color: white; padding: 2px; border-radius:2px', text);
};

export { markr };
