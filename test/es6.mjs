/* eslint-disable no-undef */
import { default as Tess } from '../src/esm/index.js';
let empty;
let hello = 'hello';

console.log(Tess.isNil(empty));
console.log(Tess.arrayify(hello));
