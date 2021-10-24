const alphabet = {
	'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..',
	'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
	'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
	'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
	'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
	'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
	'y': '-.--', 'z': '--..', ' ': '/',
	'1': '.----', '2': '..---', '3': '...--', '4': '....-',
	'5': '.....', '6': '-....', '7': '--...', '8': '---..',
	'9': '----.', '0': '-----',
};

/**
* Converts a string to morse code
*
* @since v2.5.2-beta.8
* @category Conversion
* @param {string} string - The string to convert
* @returns string
* @example
* toMorse('Hello there')
*/

const toMorse = (string) => string.split('')
	.map((e) => alphabet[e.toLowerCase()] || '')
	.join(' ')
	.replace(/ +/g, ' ');


const reverseAlphabet = {};
for (const propName in alphabet) {
	reverseAlphabet[alphabet[propName]] = propName;
}

/**
* Converts morse code to string
*
* @since v2.5.2-beta.8
* @category Conversion
* @param {string} string - The string to convert
* @returns string
* @example
* deMorse('... --- ... / .... . .-.. .--.')
*/

const deMorse = (string) => {

	return string.split(' ')
		.map(function(e) {
			return reverseAlphabet[e.toLowerCase()] || '';
		})
		.join('');
};

export { toMorse, deMorse };
