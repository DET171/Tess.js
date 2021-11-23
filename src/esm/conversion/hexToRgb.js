/**
* Converts an Hexadecimal color code to RGB
*
* @since v2.9.0
* @category Conversion
* @param {String} hex - The hexadecimal color code
* @returns string
* @example
* Tess.hexToRgb(''#ff64c8') ///=> 255, 100, 200
*/

const hexToRgb = (hex) => {
	const red = parseInt(hex[1] + hex[2], 16);
	const green = parseInt(hex[3] + hex[4], 16);
	const blue = parseInt(hex[5] + hex[6], 16);
	return [red, green, blue].join(', ');
};


export { hexToRgb };
