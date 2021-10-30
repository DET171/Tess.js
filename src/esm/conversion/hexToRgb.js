/**
* Converts an Hexadecimal color code to RGB
*
* @since v2.8.0
* @category Conversion
* @param {string} hex - The hexadecimal color code
* @returns string
* @example
* Tess.hexToRgb(''#ff64c8') ///=> 255, 100, 200
*/

const hexToRgb = (hex) => {
	var red = parseInt(hex[1] + hex[2], 16);
	var green = parseInt(hex[3] + hex[4], 16);
	var blue = parseInt(hex[5] + hex[6], 16);
	return [red, green, blue].join(', ');
};


export { hexToRgb };
