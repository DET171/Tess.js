/**
* Gets the area of a circle with a given radius
*
* @since v3.8.0
* @category Math
* @param {number} radius - The radius of the circle
* @param {number} [pi=Math.PI] - The value of pi
* @returns {number}
* @example
* circleArea(9) // => 254.46900494077323
*/

const circleArea = (radius, pi = Math.PI) => radius ** 2 * pi;

export { circleArea };
