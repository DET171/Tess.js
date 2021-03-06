/**
* Removes line breaks, trims whitespaces, and reduces all spaces with more than 1 space to 1 space
*
* @since v0.4.4
* @category minify
* @param {string} string - The string to `compact`
* @returns string
* @example
* let str = `I'm
* a             multiline
*     string!`
* compact(str)    //=> "I'm a multiline string"
*/

const compact = (string) => {
	return string.replace(/\n/gi, ' ').trim().replace(/ +/g, ' ');
};

// alright I've decided not to pollute globals k?
/* String.prototype.compact = function() {
	return compact(this);
}; */

export { compact };
