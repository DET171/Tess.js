import chalk from 'chalk';
/**
* Simple wrapper for [chalk](https://www.npmjs.com/package/chalk)
*
* @since v2.2.0
* @category console
*/
const markr = {};
/**
* Can be used instead of `console.log` or `console.info`
* markr.info
*
* @since v2.2.0
* @category console
* @param {string} text - The text to log in the console
* @param {string} [header= INFO ] - The header of the message
*/
markr.info = (text, header = ' INFO ') => {
	console.log(`${chalk.bgCyan.white.bold(header)}  ${text}`);
};

/**
* markr.success
*
* @since v2.2.0
* @category console
* @param {string} text - The text to log in the console
* @param {string} [header= SUCCESS ] - The header of the message
*/
markr.success = (text, header = ' SUCCESS ') => {
	console.log(`${chalk.bgGreen.white.bold(header)}  ${text}`);
};

/**
* markr.error
*
* @since v2.2.0
* @category console
* @param {string} text - The text to log in the console
* @param {string} [header= ERROR ] - The header of the message
*/
markr.error = (text, header = ' ERROR ') => {
	console.log(`${chalk.bgRed.white.bold(header)}  ${text}`);
};

/**
* markr.warn
*
* @since v2.2.0
* @category console
* @param {string} text - The text to log in the console
* @param {string} [header= WARNING ] - The header of the message
*/
markr.warn = (text, header = ' WARNING ') => {
	console.log(`${chalk.bgYellow.white.bold(header)}  ${text}`);
};

export { markr };
