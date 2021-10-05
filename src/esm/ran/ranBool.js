/**
* Selects a random boolean (true/false)
*
* @since v0.2.0
* @category Random
* @returns Boolean
* @example
* ranBool()
*/

const ranBool = () => {
	return Math.random() >= 0.5;
};

export { ranBool };
