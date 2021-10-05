/**
* @copyright MIT Licensed | Copyright © 2021-present Dusty
*/

const Tess = {};

import { isNil } from './misc/isNil.js';
import { arrayify } from './misc/arrayify.js';
import { wait } from './misc/wait.js';
import { atob } from './base64/atob.js';
import { btoa } from './base64/btoa.js';
import { ranBool } from './ran/ranBool.js';
import { ranInt } from './ran/ranInt.js';
import { ranFloat } from './ran/ranFloat.js';
import { pickRan } from './ran/pickRan.js';
import { compact } from './minify/compact.js';
import { rmFalsey } from './minify/rmFalsey.js';
import { flatten } from './minify/flatten.js';
import { uniq } from './minify/uniq.js';
import { shuffle } from './ran/shuffle.js';
import { ellipsis } from './str/ellipsis.js';
import { reverse } from './str/reverse.js';

Tess.isNil = isNil;
Tess.atob = atob;
Tess.btoa = btoa;
Tess.arrayify = arrayify;
Tess.ranBool = ranBool;
Tess.ranFloat = ranFloat;
Tess.ranInt = ranInt;
Tess.pickRan = pickRan;
Tess.wait = wait;
Tess.compact = compact;
Tess.rmFalsey = rmFalsey;
Tess.flatten = flatten;
Tess.uniq = uniq;
Tess.shuffle = shuffle;
Tess.ellipsis = ellipsis;
Tess.reverse = reverse;

export { Tess };
