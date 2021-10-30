const colorToHex = (color) => {
	const hexadecimal = color.toString(16);
	return hexadecimal.length == 1 ? '0' + hexadecimal : hexadecimal;
};

/**
* Converts an RGB color code to a hexadecimal string
*
* @since v2.9.0
* @category Conversion
* @param {number} red - The amount of red
* @param {number} green - The amount of green
* @param {number} blue - The amount of blue
* @returns string
* @example
* Tess.rgbToHex(255, 100, 200) ///=> #ff64c8
*/

const rgbToHex = (red, green, blue) => `#${colorToHex(red)}${colorToHex(green)}${colorToHex(blue)}`;


export { rgbToHex };
