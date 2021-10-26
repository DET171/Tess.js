/**
* Converts a temperature into different units
*
* @since v2.5.2-beta.9
* @category Conversion
* @param {string} temperature - The temperature to convert. You should enter in this format: `1 C`, `100 F` etc. <br>
* Supported: K (Kelvin), F (Farenheit), C (Celsius)
* @returns object with keys and values of different temperatures. The possible propnames are: K (Kelvin), F (Farenheit), C (Celsius)<br>
* @example
* Tess.temp('20 C')['F'];
* Tess.temp('20 F')['C'];
* Tess.temp('100 K')['F'];
*/

const temp = (temperature) => {
	temperature = temperature.toUpperCase().split(/ +/);
	const tem = parseInt(temperature[0]);
	if(temperature[1] === 'C') {
		return {
			'F': tem * 9 / 5 + 32,
			'K': tem + 273.15,
		};
	}
	if(temperature[1] === 'F') {
		return {
			'C': (tem - 32) * 5 / 9,
			'K': (tem - 32) * 5 / 9 + 273.15,
		};
	}
	if(temperature[1] === 'K') {
		return {
			'C': tem - 273.15,
			'F': (tem - 273.15) * 9 / 5 + 32,
		};
	}
};

export { temp };
