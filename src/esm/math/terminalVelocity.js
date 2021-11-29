/**
* Sets the options for the function to calculate the terminal velocity of an object (this is probably gonna be useless)
*
* @since v3.9.0
* @category Math/Science
* @param {number} density The density of the fluid the object is falling through
* @param {number} projectedArea - the projected area of the object. This means the area of the object if you projected it onto a plane that was perpendicular to the direction the object is moving
* @param {number} dragCoefficient the drag coefficient. This number depends on the shape of the object. The more streamlined the shape, the lower the coefficient.
* @param {number} [gravity=9.8] -  the acceleration due to gravity. On Earth this is approximately 9.8 meters per second
* @returns {function} a function that accepts a single parameter (the mass of the falling object)
*/

const terminalVelocity = (density, projectedArea, dragCoefficient, gravity = 9.8) =>
	/**
	 * Calculates the terminal velocity
	 *
	 * @param {number} mass - the mass of the falling object
	 * @returns {number}
	 */
	(mass) => Math.sqrt((2 * +mass * +gravity) / (+density * +projectedArea * +dragCoefficient));

export { terminalVelocity };
