/* eslint-disable no-undef */
import { default as Tess } from '../src/esm/index.js';
let empty;
let hello = 'hello';

console.log(Tess.isNil(empty));
console.log(Tess.arrayify(hello));
console.log(Tess.ranInt(3, 10));
console.log(Tess.ranFloat(10, 12));
console.log(Tess.ranBool());
