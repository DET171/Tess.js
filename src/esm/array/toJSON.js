/**
* Converts a map to JavaScript objects. To convert to JSON, just use `JSON.stringify()`. To get the object back from the string, use `JSON.parse()`
*
* @since v2.5.2-beta.6
* @category Map/Array
* @param {Map} Map - The map to convert to JavaScript objects
* @returns Object
* @example
* const map = new Map([
*  ['foo', 'bar'],
*  ['baz', 42]
* ]);
* const obj = toJSON(map); // get the JS object
* const JSONObjectLiteral = JSON.stringify(obj); // get the JSON object literal
* const JSObj = JSON.parse(JSONObjectLiteral); // get the JavaScript object back
*/

const toJSON = (map) => {
	const json = {};
	map.forEach(function(value, key) {
		json[key] = value;
	});
	return json;
};

export { toJSON };
