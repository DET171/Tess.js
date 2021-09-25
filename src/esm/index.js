const Tess = {};

import isNil from './misc/isNil.js';
import arrayify from './misc/arrayify.js';
import atob from './base64/atob.js';
import btoa from './base64/btoa.js';

Tess.isNil = isNil;
Tess.atob = atob;
Tess.btoa = btoa;
Tess.arrayify = arrayify;

export default Tess;
