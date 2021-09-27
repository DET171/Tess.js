/**
* @copyright MIT Licensed | Copyright © 2019-present Dusty
*/

const Tess = {};

import isNil from './misc/isNil.js';
import arrayify from './misc/arrayify.js';
import atob from './base64/atob.js';
import btoa from './base64/btoa.js';
import ranBool from './ran/ranBool.js';
import ranInt from './ran/ranInt.js';
import ranFloat from './ran/ranFloat.js';
import pickRan from './ran/pickRan.js';

Tess.isNil = isNil;
Tess.atob = atob;
Tess.btoa = btoa;
Tess.arrayify = arrayify;
Tess.ranBool = ranBool;
Tess.ranFloat = ranFloat;
Tess.ranInt = ranInt;
Tess.pickRan = pickRan;

export default Tess;
