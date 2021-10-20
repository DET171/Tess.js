/**
* Generates a random key
*
* @since v2.2.0
* @category Random
* @param {number} length - The length of the key
* @returns string
* @example
* ranKey(10)
*/

const ranKey = (length) => {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
	}
	return result;
};

export { ranKey };
